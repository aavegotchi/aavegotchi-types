import { GraphQLClient } from "graphql-request";
export * as sdk from "../../gen/gen";

export const subgraphs = {
  core: {
    137: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic",
  },
};

const client = (url?: string, block?: number) => {
  if (!url) url = subgraphs.core[137];
  return new GraphQLClient(url);
};

/**
 * @deprecated - Prefer client()
 */
function getBlock(block: number) {
  const default_chain = 137;
  let url = subgraphs.core[default_chain];
  if (block && block != 0) url += `?block=${url}`;
  return new GraphQLClient(url);
}

export {
  // subgraphs,
  client,
  getBlock,
  // defaultSdk,
  // ...defaultSdk(),
};
