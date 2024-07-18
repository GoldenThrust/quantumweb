import Admin from "../models/admin.js";
import { compare, hash } from "bcrypt";

class AdminController {
  async login(req, res) {
    const { email, password } = req.body;

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

      req.session.regenerate(function (err) {
        if (err) next(err);

        req.session.admin = payload;

        req.session.save(function (err) {
          if (err) {
            return res.render("admin/login", {
              errors: { msg: err.message },
            });
          }
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

  dashboard(req, res) {
    return res.redirect("/admin/dashboard/users");
  }

  dashboardEmails(req, res) {
    return res.render("admin/dashboard/emails", {
      layout: "admin/layouts/dashboard",
      path: "emails"
    });
  }

  dashboardUsers(req, res) {
    return res.render("admin/dashboard/users", {
      layout: "admin/layouts/dashboard",
      path: "users"
    });
  }

  dashboardProjects(req, res) {
    return res.render("admin/dashboard/projects", {
      layout: "admin/layouts/dashboard",
      path: "projects"
    });
  }
}
const adminController = new AdminController();

export default adminController;
