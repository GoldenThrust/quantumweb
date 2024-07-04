import { graphql } from "@octokit/graphql";
import { GITHUB_TOKEN } from "../utils/constant.js";
import { redis } from "../config/db.js";

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
    structuredData.figma = repoObj[4] === 'null'? null : repoObj[4];
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
