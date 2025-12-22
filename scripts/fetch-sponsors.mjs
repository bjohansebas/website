#!/usr/bin/env node
import fs from "fs/promises";
import process from "process";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
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

function sponsorshipsQuery(cursor = null) {
  return `
            query {
                user(login: "bjohansebas") {
                    sponsorshipsAsMaintainer (first: 100, includePrivate: false, after: "${cursor}", activeOnly: false) {
                        nodes {
                            sponsor: sponsorEntity {
                                ...on User {
                                    id: databaseId,
                                    name,
                                    login,
                                    avatarUrl,
                                    url,
                                    websiteUrl
                                }
                                ...on Organization {
                                    id: databaseId,
                                    name,
                                    login,
                                    avatarUrl,
                                    url,
                                    websiteUrl
                                }
                            },
                        }
                        pageInfo {
                            endCursor
                            startCursor
                            hasNextPage
                            hasPreviousPage
                        }
                    }
                }
            }
        `;
}

const donationsQuery = `
        query {
            user(login: "bjohansebas") {
                sponsorsActivities (first: 100, includePrivate: false) {
                    nodes {
                        id
                        sponsor {
                            ...on User {
                                id: databaseId,
                                name,
                                login,
                                avatarUrl,
                                url,
                                websiteUrl
                            }
                            ...on Organization {
                                id: databaseId,
                                name,
                                login,
                                avatarUrl,
                                url,
                                websiteUrl
                            }
                        },
                        timestamp
                    }
                }
            }
        }
    `;

// Use the provided sponsorshipsQuery and donationsQuery to collect sponsors and activities
(async () => {
  try {
    let sponsors = [];

    // Fetch sponsorship pages
    let cursor = null;
    while (true) {
      const query = sponsorshipsQuery(cursor);
      const data = await graphql(query);
      if (data.errors) throw new Error(JSON.stringify(data.errors));
      const nodeRes = data.data.user?.sponsorshipsAsMaintainer;
      if (!nodeRes) break;
      const { nodes, pageInfo } = nodeRes;
      const mapped = nodes.map((n) => {
        const s = n.sponsor || n.sponsorEntity || n.sponsorEntity; // support different field names
        return {
          id: s?.id || null,
          login: s?.login || null,
          name: s?.name || s?.login || null,
          avatar: s?.avatarUrl || null,
          url: s?.websiteUrl || s?.url || null,
          tier: n.tier
            ? {
                monthlyPriceInDollars:
                  n.tier.monthlyPriceInDollars ?? n.tier.monthlyPriceInCents,
                isOneTime: n.tier.isOneTime ?? false,
              }
            : null,
        };
      });
      sponsors.push(...mapped);
      if (!pageInfo.hasNextPage) break;
      cursor = pageInfo.endCursor;
    }

    // Fetch donations/activities to get timestamps and additional info
    const activitiesRes = await graphql(donationsQuery);
    if (activitiesRes.errors)
      throw new Error(JSON.stringify(activitiesRes.errors));
    const activities = activitiesRes.data.user?.sponsorsActivities?.nodes || [];

    // Build map of last activity timestamp per sponsor login or id
    const lastActivity = {};
    activities.forEach((act) => {
      const s = act.sponsor;
      const key = s?.login || s?.id || s?.name;
      if (!key) return;
      const ts = act.timestamp || act.createdAt || null;
      if (
        !lastActivity[key] ||
        (ts && new Date(ts) > new Date(lastActivity[key]))
      ) {
        lastActivity[key] = ts;
      }
    });

    // Merge lastActivity into sponsors
    const merged = sponsors.map((sp) => {
      const key = sp.login || sp.id || sp.name;
      return { ...sp, lastActivity: lastActivity[key] || null };
    });

    const out = {
      counts: { total: merged.length },
      sponsors: merged,
    };

    await fs.mkdir(new URL("../src/data", import.meta.url).pathname, {
      recursive: true,
    });
    await fs.writeFile(OUT, JSON.stringify(out, null, 2), "utf-8");
    console.log(`Wrote ${merged.length} sponsors to ${OUT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
