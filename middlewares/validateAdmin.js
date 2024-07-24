import { DEV } from "../utils/constant.js";

export default function isAuthenticated(req, res, next) {
    if (DEV) return next();

    if (req.session.admin) next()
    else res.status(403).redirect('/');
}