import { Router } from "express";
import "dotenv/config";
import { fetchProjectData } from "../utils/fetchData.js";
import {
  DEV,
} from "../utils/constant.js";
import { redis } from "../config/db.js";

const repos = Router();


repos.get("/repo/cache", async (req, res) => {
  const repos = JSON.parse(await redis.get('featuresRepo'));
})

repos.get("/repos/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.json({ error: 'Invalid id' });
    return;
  }

  let reposData = null;

  if (id < 6) {
    reposData = DEV ? testWorkData[id] : await fetchProjectData();
  } else {
    reposData = DEV ? testWorkData[id] : await fetchProjectData();
  }

  res.json(reposData)
});


export default repos;
