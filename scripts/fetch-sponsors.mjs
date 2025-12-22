#!/usr/bin/env node
import fs from "fs/promises";
import process from "process";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USER = "bjohansebas";
const OUT = new URL("../src/data/sponsors.json", import.meta.url).pathname;

if (!GITHUB_TOKEN) {
  console.error(
    "Missing GITHUB_TOKEN environment variable. Create a token with public_repo and read:user scopes if needed.",
  );
  process.exit(1);
}

const graphql = async (query, variables = {}) => {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error: ${res.status} ${text}`);
  }
  return res.json();
};

// We'll fetch sponsorships where the user is the maintainer (sponsors of the user)
const QUERY = `
query Sponsors($login: String!, $cursor: String) {
  user(login: $login) {
    sponsorshipsAsMaintainer(first: 100, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        sponsorEntity {
          __typename
          ... on User { login name avatarUrl url }
          ... on Organization { login name avatarUrl url }
        }
        createdAt
        tier {
          name
          monthlyPriceInCents
        }
      }
    }
  }
}
`;

(async () => {
  try {
    let all = [];
    let cursor = null;
    while (true) {
      const data = await graphql(QUERY, { login: USER, cursor });
      if (data.errors) throw new Error(JSON.stringify(data.errors));
      const nodeRes = data.data.user?.sponsorshipsAsMaintainer;
      if (!nodeRes) break;
      const { nodes, pageInfo } = nodeRes;
      const mapped = nodes.map((n) => ({
        login: n.sponsorEntity.login,
        name: n.sponsorEntity.name,
        avatar: n.sponsorEntity.avatarUrl,
        url: n.sponsorEntity.url,
        since: n.createdAt,
        tier: n.tier
          ? { name: n.tier.name, monthlyCents: n.tier.monthlyPriceInCents }
          : null,
      }));
      all.push(...mapped);
      if (!pageInfo.hasNextPage) break;
      cursor = pageInfo.endCursor;
    }

    await fs.mkdir(new URL("../src/data", import.meta.url).pathname, {
      recursive: true,
    });
    await fs.writeFile(
      OUT,
      JSON.stringify({ sponsors: all }, null, 2),
      "utf-8",
    );
    console.log(`Wrote ${all.length} sponsors to ${OUT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
