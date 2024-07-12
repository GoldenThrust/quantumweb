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
          res.redirect("/admin/dashboard");
        });
      });
    } catch (err) {
      console.error(err);
      return res.render("admin/login", {
        errors: { msg: "Internal Server Error" },
      });
    }
  }
}
const adminController = new AdminController();

export default adminController;
