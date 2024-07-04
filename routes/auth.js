import { Router } from "express";
import Admin from "../models/admin.js";
import { compare, hash } from "bcrypt";

const auth = new Router();

auth.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email: email })

    if (!user) {
        return res.status(400).json({ message: 'Admin not found' });
    }

    const validPassword = await compare(password, admin.password)

    if (!validPassword) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    req.session.admin = admin;

    res.status(200).json({ message: 'Logged in' });
});

export default auth;
