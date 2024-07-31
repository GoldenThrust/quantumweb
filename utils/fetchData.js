import { graphql } from "@octokit/graphql";
import { GITHUB_TOKEN } from "./constant.js";
import { redis } from "../config/db.js";
import axios from "axios";
import Project from "../models/project.js";

export function parseGitHubUrl(url) {
  const regex = /https:\/\/github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);
  if (match) {
    return { owner: match[1], name: match[2] };
  } else {
    throw new Error("Invalid GitHub URL");
  }
}

export async function fetchProject(gitUrl) {
  const { owner, name } = parseGitHubUrl(gitUrl);
  const query = `
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      url
      homepageUrl
      isPrivate
      stargazers {
        totalCount
      }
    }
  }
`;

  try {
    const { repository } = await graphql(query, {
      owner,
      name,
      headers: {
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const project = {
      ...repository,
      stargazers: repository.stargazers.totalCount,
    };

    return project;
  } catch (error) {
    console.error("Error making GraphQL request:", error);
    throw error;
  }
}

export async function fetchProjectData(page=1) {
  const limit = 6;
  try {
    const project = await Project.find().sort({ key: 1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalProject = await Project.countDocuments();

    const hasMore = (page * limit) < totalProject;

    return {
      project,
      currentPage: page,
      totalPages: Math.ceil(totalProject / limit),
      hasMore,
    };
  } catch (err) {
    return { error: err.message }
  }
}

export async function fetchBlogPost(page=1) {
  try {
    // let data = JSON.parse(await redis.get('blog'));
    let data = "";
  
    if (!data || data.length < 1) {
      const response = await axios.get(`https://dev.to/api/articles/me/published?page=${page}&per_page=6`, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.forem.api-v1+json",
          "api-key": process.env.DEVTO_KEY,
        },
      });

      console.log(response);

      // await redis.set('blog', JSON.stringify(response.data), 6400);

      data = response.data;
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}
