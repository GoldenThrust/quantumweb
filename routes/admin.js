import { Router } from "express";
import { loginValidator, validate } from "../middlewares/validators.js";
import adminController from "../controllers/adminController.js";
import isAuthenticated from "../middlewares/validateAdmin.js";

const admin = new Router();

admin.get('/login', (req, res) => {
      res.render('admin/login', { errors: '', layout: "admin/layouts/general", pageTitle: "Software Engineer | Web Developer | Adeniji Olajide Portfolio", })
})

admin.post("/login", validate(loginValidator), adminController.login);

// admin.get("/dashboard/emails", adminController.dashboardEmails);
// admin.get("/dashboard/users", adminController.dashboardUsers);
// admin.get("/dashboard/projects", adminController.dashboardProjects);
admin.get("/dashboard/:path", isAuthenticated, adminController.dashboard);

export default admin;
