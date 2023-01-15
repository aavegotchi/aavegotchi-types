# aavegotchi-types 👻📦

Typechain and GraphQL types for all the Aavegotchi contracts and subgraphs! Import into your dapp for an effortless Aavegotchi dev experience.

## Table of content

- [Features](#features)
- [**Install**](#install)
- [Usage](#usage)
- [Get Help](#get-help)
- [External](#external)

# Features

- Ready for regular Javacript and browser environments
- Convienient bundle of official addresses / subgraphs
- No-frills setup with `ethers` or `web3`
- GraphQL client for querying Aavegotchi subgraphs
- Full developer-friendly TypeScript support

# Install

Add to a Node.js project with `npm` or `yarn`

- Browser demo on Codesandbox

```sh
$ npm install @pixelcraftstudios/aavegotchi-types
# or
$ yarn add @pixelcraftstudios/aavegotchi-types
```

# Usage

### Subgraph Data

```ts
import { graphql } from "@pixelcraftstudios/aavegotchi-types";
const chainId = 137;
const urls = graphql.urls.diamond[chainId];
const client = graphql.client();

const main = () => {
  const userAddress = "0xfffffffffffffffffffffffffffffff";
  const res = await client(`{
    aavegotchis(first: 500, where: {
      owner: ${userAdd}
    }) {
      id
      name
    }
  }`);
  console.log(res);
};

main();
```

### On-Chain Data

Token information of a user.

```ts
import {
  AavegotchiFacet__factory,
  getDefaultProvider,
  contracts,
} from "@pixelcraftstudios/aavegotchi-types";
const chainId = 137;
const diamond = contracts.addresses[chainId];
const provider = getDefaultProvider();
const aavegotchiFacet = AavegotchiFacet__factory.connect(diamond, provider);

const main = () => {
  console.log(aavegotchiFacet);
  const tokensOfOwner = await;
};

main();
```

# Get Help

- For support reach out in [Discord](https://discord.com/invite/aavegotchi)
- For issues in the package open an [issue on GitHub](https://github.com/aavegotchi/aavegotchi-types/issues/new)

# External

<https://docs.aavegotchi.com>

<https://louper.dev/?address=0x86935F11C86623deC8a25696E1C19a8659CbF95d&network=polygon>

<https://thegraph.com/explorer/subgraph/aavegotchi/aavegotchi-core-matic?version=current>
