import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import repos from "./routes/repos.js";
import cors from "cors";
import "dotenv/config";
import mongodb, { redis } from "./config/db.js";
import admin from "./routes/admin.js";
import session from "express-session";
import RedisStore from "connect-redis";
import { fetchBlogPost, fetchProjectData } from "./utils/fetchData.js";
import { DEV } from "./utils/constant.js";
import { mailQueue } from "./worker.js";
import multer from "multer";
import rateLimit from "express-rate-limit";
import expressLayouts from "express-ejs-layouts";
import project from "./routes/project.js";
import csrf from "csrf";
import cookieParser from "cookie-parser";
import verifyUser from "./middlewares/verifyUser.js";
import service from "./routes/services.js";
import constructFullURL from "./middlewares/middlewares.js";
// import { hash } from "bcrypt";
// import Admin from "./models/admin.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: 'Too many requests from this IP, please try again after 15 minutes.'
});

const app = express();
const server = createServer(app);


app.set("trust proxy", 3)

app.use(cors());

// app.use(limiter);

app.use(cookieParser());

export const tokens = new csrf();

app.use(
  session({
    store: new RedisStore({ client: redis.client, prefix: "quantumweb:" }),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: DEV ? false : true, httpOnly: true, sameSite: 'strict' },
  })
);


app.use((req, res, next) => {
  if (!req.session.csrfSecret) {
    req.session.csrfSecret = tokens.secretSync();
  }
  
  const token = tokens.create(req.session.csrfSecret);
  res.locals.csrfToken = token;
  next();
});


export const upload = multer({ dest: "views/img/uploads/" });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));
app.use(expressLayouts);
app.use(constructFullURL)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(verifyUser.verifyIp);

app.use(repos);
app.get("/", async (req, res) => {
  const projects = await fetchProjectData();
  const blogs = await fetchBlogPost();

  res.render("index", {
    hostname: req.get('host'),
    url: req.fulUrl,
    pageTitle: "",
    blogs,
    projects,
    csrfToken: res.locals.csrfToken
  });
});

app.get('/shop', async (req, res) => {
  res.render("comingsoon", {
    layout: 'layouts/general'
  });
})

app.get("/test", (req, res) => {
  console.log(req.fulUrl)
  res.send("Hello, World!");
})

app.post("/chirpmail", multer().none(), async (req, res) => {
  const { name, email, message, password } = req.body;
  const host = req.get("host");

  // return res.status(400).send("Mail services are currently disabled due to bot infiltration.");

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  const secret = req.session.csrfSecret;
  const token = req.body._csrf;

  if (tokens.verify(secret, token)) {
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    await mailQueue.add({ name, email, message, host, ip, password, userAgent });
    res.status(200).send("Chirpmail sent successfully.");
  } else {
    console.log(`Invalid csrf from ${req.ip}`)
    res.status(403).send(`Invalid CSRF token`);
  }
});

app.set('layout', 'layouts/layout');

app.use("/admin", admin);
app.use("/project", project);
app.use("/service", service);


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

server.listen(PORT, () => {
  if (process.env.DEV === "true") {
    console.log("Running on Development");
  }

  redis.run().catch(console.dir);
  mongodb.run().catch(console.dir);

  console.log(`Server is running on http://localhost:${PORT}`);
});
