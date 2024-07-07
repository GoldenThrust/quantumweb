import { Router } from "express";
import "dotenv/config";
import { fetchRepositoryData } from "../utils/graphql.js";
import {
  DEV,
  featureRepo,
  masterRepo,
  testWorkData,
} from "../utils/constant.js";
import { redis } from "../config/db.js";

const repos = Router();

repos.get("/", async (req, res) => {
  let repos = JSON.parse(await redis.get('featuresRepo'));

  if (!repos || repos.length < 1) {
    repos = await fetchRepositoryData(featureRepo);
    redis.set('featuresRepo', JSON.stringify(repos), 604800);
  }

  res.render("index", {
     repos,
  });
});


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
    reposData = DEV ? testWorkData[id] : await fetchRepositoryData([featureRepo[id]]);
  } else {
    reposData = DEV ? testWorkData[id] : await fetchRepositoryData([masterRepo[id]]);
  }

  res.json(reposData)
});


export default repos;
