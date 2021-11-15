import { GraphQLClient } from "graphql-request";
import * as sdk from "../../gen/gen";

export const subgraphs = {
  core: {
    137: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic",
  },
};

const client = (url?: string, block?: number) => {
  if (!url) url = subgraphs.core[137];
  const block_query = block ?? "latest";
  url += `?block=${block_query}`;
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

/**
 * @deprecated - Prefer your own queries with client()
 */
function defaultSdk(arg?: GraphQLClient) {
  if (!arg) {
    return sdk.getSdk(client());
  } else return sdk.getSdk(arg);
}

export default {
  subgraphs,
  client,
  getBlock,
  defaultSdk,
  ...defaultSdk(),
};
