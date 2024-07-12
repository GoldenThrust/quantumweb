import { Router } from "express";
import { loginValidator, validate } from "../middlewares/validators.js";
import adminController from "../controllers/adminController.js";
import isAuthenticated from "../middlewares/validateAdmin.js";

const admin = new Router();

admin.get('/login', (req, res) => {
  res.render('admin/login', { errors: '' })
})

admin.post("/login", validate(loginValidator), adminController.login);

admin.get("/dashboard", isAuthenticated, async (req, res) => {
  res.render('admin/dashboard', {
    session: req.session.admin.id
  })
});

export default admin;
