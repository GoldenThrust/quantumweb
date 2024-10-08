import Admin from "../models/admin.js";
import User from "../models/user.js";
import { compare, hash } from "bcrypt";
import { toolsTechImage } from "../public/js/constant.js";
import Project from "../models/project.js";
import { tokens } from "../index.js";
import mailService from "../config/mailService.js";
import { redis } from "../config/db.js";

class AdminController {
  async login(req, res) {
    const { email, password, _csrf, username } = req.body;
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    mailService.AdminLoginAttempt(ip, userAgent);
    console.log(!username);

    if (username) {
      await User.updateOne({ ip_address: ip }, { $set: { blocked: true } })
      console.log('Red alert: Bot Attempt login', ip, userAgent);
      return res.redirect('https://google.com/');
    }



    const secret = req.session.csrfSecret;

    if (!tokens.verify(secret, _csrf)) {
      console.log(`Invalid csrf from ${ip}`)
      return res.status(403).send(`Invalid Admin CSRF token`);
    }

    try {
      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res.render("admin/login", {
          errors: { msg: "Please provide a valid email address" },
        });
      }

      const validPassword = await compare(password, admin.password);

      if (!validPassword) {
        return res.render("admin/login", {
          errors: { msg: "Please provide a valid password" },
        });
      }

      const payload = {
        id: admin.id,
        email: admin.email,
      };

      req.session.regenerate((err) => {
        if (err) next(err);

        req.session.admin = payload;

        req.session.save(async (err) => {
          if (err) {
            return res.render("admin/login", {
              errors: { msg: err.message },
            });
          }

          admin.ip_address.push(ip);
          await admin.save();

          mailService.AdminLogin(ip, userAgent)
          res.redirect("/admin/dashboard/users");
        });
      });
    } catch (err) {
      console.error(err);
      return res.render("admin/login", {
        errors: { msg: "Internal Server Error" },
      });
    }
  }

  async dashboard(req, res) {
    const { path } = req.params;
    const layout = "admin/layouts/dashboard";
    const visitService = await redis.get('visit-service') || 0;

    if (path === 'emails') {
      return res.render("admin/dashboard/emails", {
        layout,
        path,
        visitService
      });
    } else if (path === 'users') {
      return res.render("admin/dashboard/users", {
        layout,
        path,
        visitService
      });
    }
  
    const projects = await Project.find().sort({ key: 1 });

    return res.render("admin/dashboard/projects", {
      projects,
      layout,
      path,
      visitService,
      tools: Object.keys(toolsTechImage)
    });
  }

  dashboardEmails(req, res) {
    return res.render("admin/dashboard/emails", {
      layout,
      path: "emails"
    });
  }

  dashboardUsers(req, res) {
    return res.render("admin/dashboard/users", {
      layout,
      path: "users"
    });
  }

  async dashboardProjects(req, res) {
    const projects = await Project.find().sort({ key: 1 });

    return res.render("admin/dashboard/projects", {
      projects,
      layout,
      path: "projects",
      tools: Object.keys(toolsTechImage)
    });
  }
}

const adminController = new AdminController();

export default adminController;
