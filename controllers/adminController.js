import Admin from "../models/admin.js";
import User from "../models/user.js";
import { toolsTechImage } from "../public/js/constant.js";
import Project from "../models/project.js";
import mailService from "../config/mailService.js";
import { redis } from "../config/db.js";
import { verify } from "argon2";
import { createToken } from "../middlewares/tokenManager.js";
import { COOKIE_NAME } from "../utils/constant.js";
const domain = (new URL(process.env.HOST_URL)).hostname

class AdminController {
  async login(req, res) {
    const { email, password, _csrf, username } = req.body;
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    mailService.AdminLoginAttempt(ip, userAgent);

    
    try {
      if (username) {
        await User.updateOne({ ip_address: ip }, { $set: { blocked: true } })
        console.log('Red alert: Bot Attempt login', ip, userAgent);
        return res.redirect('https://google.com/');
      }
      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res.render("admin/login", {
          layout: 'layouts/empty',
          errors: { msg: "Please provide a valid email address" },
          pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
        });
      }

      const validPassword = await verify(admin.password, password);

      if (!validPassword) {
        return res.render("admin/login", {
          layout: 'layouts/empty',

          errors: { msg: "Please provide a valid password" },
          pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
        });
      }

      const payload = {
        id: admin.id,
        email: admin.email,
      };

      res.clearCookie(COOKIE_NAME, {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        domain,
        signed: true,
        path: "/",
      });

      const token = createToken(admin, '7d');
    
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);

      res.cookie(COOKIE_NAME, token, {
        secure: true,
        sameSite: "none",
        httpOnly: true,
        path: "/",
        domain,
        expires,
        signed: true,
      });

      admin.ip_address.push(ip);
      await admin.save();
      mailService.AdminLogin(ip, userAgent)
      res.redirect("/admin/dashboard/users");
    } catch (err) {
      console.error(err);
      return res.render("admin/login", {
        layout: 'layouts/empty',

        errors: { msg: "Internal Server Error" },
        pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
      });
    }
  }

  async dashboard(req, res) {
    const { path } = req.params;
    const layout = "admin/layouts/dashboard";
    const visitService = await redis.get('visit-service') || 0;

    if (path === 'emails') {
      return res.render("admin/dashboard/emails", {
        layout: 'layouts/empty',

        layout,
        path,
        visitService,
        pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
      });
    } else if (path === 'users') {
      return res.render("admin/dashboard/users", {
        layout: 'layouts/empty',
        layout,
        path,
        visitService,
        pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
      });
    }

    const projects = await Project.find().sort({ key: 1 });

    return res.render("admin/dashboard/projects", {
      layout: 'layouts/empty',

      projects,
      layout,
      path,
      visitService,
      tools: Object.keys(toolsTechImage),
      pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
    });
  }

  dashboardEmails(req, res) {
    return res.render("admin/dashboard/emails", {
      layout: 'layouts/empty',

      layout,
      path: "emails",
      pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
    });
  }

  dashboardUsers(req, res) {
    return res.render("admin/dashboard/users", {
      layout: 'layouts/empty',

      layout,
      path: "users",
      pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
    });
  }

  async dashboardProjects(req, res) {
    const projects = await Project.find().sort({ key: 1 });

    return res.render("admin/dashboard/projects", {
      layout: 'layouts/empty',
      projects,
      layout,
      path: "projects",
      tools: Object.keys(toolsTechImage),
      pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio",
    });
  }
}

const adminController = new AdminController();

export default adminController;
