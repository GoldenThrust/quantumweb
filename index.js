import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import repos from "./routes/repos.js";

import "dotenv/config";
import mongodb, { redis } from "./config/db.js";
import admin from "./routes/admin.js";
import session from "express-session";
import RedisStore from "connect-redis";
import { fetchRepositoryData } from "./utils/graphql.js";
import { DEV, featureRepo } from "./utils/constant.js";
import { mailQueue } from "./worker.js";
import multer from "multer";
import expressLayouts from "express-ejs-layouts";
import project from "./routes/project.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

const server = createServer(app);

app.use(
  session({
    store: new RedisStore({client: redis.client, prefix: "quantumweb:"}),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: DEV ? false : true },
  })
);


export const upload = multer({ dest: "views/img/uploads/" });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));
app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(repos);

app.get("/", async (req, res) => {
  let repos = JSON.parse(await redis.get("featuresRepo"));
  
  if (!repos || repos.length < 1) {
    repos = await fetchRepositoryData(featureRepo);
    redis.set("featuresRepo", JSON.stringify(repos), 604800);
  }
  
  res.render("index", {
    repos,
  });
});

app.post("/test", (req, res)=> {
  res.send("Hello, World!");
})
app.post("/chirpmail",multer().none(), async (req, res) => {
  const { name, email, message } = req.body;
  const host = req.get("host");
  // if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  // }

  await mailQueue.add({ name, email, message, host });
  res.status(200).send("Chirpmail sent successfully.");
});

app.set('layout', 'layout');

app.use("/admin", admin);
app.use("/project", project);


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
