import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "../utils/constant.js";
import process from "process";

export function createToken(admin, expiresIn) {
  const payload = admin.toJSON();
  const jwtSecret = process.env.COOKIE_SECRET;
  const token = jwt.sign(payload, jwtSecret, {
    expiresIn,
  });

  return token;
}

export async function verifyToken(req, res, next) {
  const token = req.signedCookies[COOKIE_NAME];

  if (!token || token.trim() === "") {
    return res.status(401).redirect('/admin/login');
  }

  try {
    const jwtSecret = process.env.COOKIE_SECRET;
    const jwtData = jwt.verify(token, jwtSecret);
    res.jwt = jwtData;
    return next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).redirect('/admin/login');
  }
}