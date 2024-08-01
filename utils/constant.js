import "dotenv/config";
export const GITHUB_TOKEN = process.env.OCTOTOKEN;
export const IPVIF = process.env.IP_VERIFIER

import { fileURLToPath } from "url";
import path from "path";

export const DEV = process.env.DEV === 'true' ? true : false;

export const redisOptions = DEV ? '127.0.0.1:6379' : {
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
}

export const __filename = fileURLToPath(import.meta.url);
export const __rootDir = path.dirname(path.dirname(__filename))

export const mongoDBURI = DEV ? 'mongodb://127.0.0.1:27017/quantumweb' : process.env.MONGODB_URI;;