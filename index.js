import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

import repos from "./routes/repos.js";

import "dotenv/config";
import mongodb, {redis} from "./config/db.js";
import auth from "./routes/auth.js";
import session from "express-session";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

const server = createServer(app);

app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
}))

app.use(express.static(path.join(__dirname, "templates")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.json());

app.use('/auth', auth);
app.use(repos);

server.listen(PORT, () => {
  if (process.env.DEV === "true") {
    console.log("Running on Development");
  }

  redis.run().catch(console.dir);
  mongodb.run().catch(console.dir);

  console.log(`Server is running on http://localhost:${PORT}`);
});
