import Admin from "../models/admin.js";

export default function isAuthenticated(req, res, next) {
    if (req.session.admin) next()
    else res.status(403).redirect('/');
}