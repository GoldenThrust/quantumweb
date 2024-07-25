import { graphql } from "@octokit/graphql";
import { GITHUB_TOKEN } from "./constant.js";
import { redis } from "../config/db.js";
import axios from "axios";

export function parseGitHubUrl(url) {
  const regex = /https:\/\/github\.com\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);
  if (match) {
    return { owner: match[1], name: match[2] };
  } else {
    throw new Error("Invalid GitHub URL");
  }
}

export async function makeGraphQLRequest(owner, repoName, path) {
  const repoPath = path !== undefined ? `${path}/` : "";

  const query = `
  query ($owner: String!, $repoName: String!) {
    repository(owner: $owner, name: $repoName) {
      name
      description
      url
      homepageUrl
      isPrivate
      stargazers {
        totalCount
      }
      object(expression: "HEAD:${repoPath}portfolio.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;

  try {
    const { repository } = await graphql(query, {
      owner,
      repoName,
      headers: {
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    return repository;
  } catch (error) {
    console.error("Error making GraphQL request:", error);
    throw error;
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

export async function fetchRepositoryData(repositories) {
  const repositoryData = [];

  for (const [key, repo] of Object.entries(repositories)) {
    const structuredData = {
      name: "",
      thumbnail: "",
      tools: "",
      trailer: "",
      figma: "",
    };
    const [owner, repoName, path] = repo.split("/");

    const repository = await makeGraphQLRequest(owner, repoName, path);

    if (repository.object === null) {
      continue;
    }

    const repoObj = repository.object.text.split("\n");

    structuredData.id = key;
    structuredData.name = repoObj[0];
    structuredData.tools = repoObj[1];
    structuredData.thumbnail = repoObj[2];
    structuredData.trailer = repoObj[3];
    structuredData.figma = repoObj[4] === "null" ? null : repoObj[4];
    structuredData.description = repository.description;
    structuredData.url = repository.isPrivate ? null : repository.url;
    structuredData.homepageUrl = repository.homepageUrl;
    structuredData.star = repository.stargazers.totalCount;

    repositoryData.push(structuredData);
  }

  if (repositoryData.length === 1) {
    return repositoryData[0];
  }

  return repositoryData;
}

export async function fetchBlogPost() {
  try {
    const response = await axios.get("https://dev.to/api/articles/me/published", {
      headers: {
        "api-key": process.env.DEVTO_KEY,
      },
    });

    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
  }
}
