import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
// import "hardhat-abi-exporter";
// wamghst dependency broke compiling so compile separate target separatelys for now
const recompile = [
  "aavegotchi-realm",
  "aavegotchi-contracts",
  "aavegotchi-gbm-baazaar",
  "ghst-staking",
  "fake-gotchis",
];

module.exports = {
  // abiExporter: {
  //   path: "./facet_abis/",
  //   clear: true,
  //   flat: true,
  //   only: ["Facet$"],
  //   spacing: 2,
  // },
  paths: {
    sources: `./src/contracts/fake-gotchis/contracts`,
    cache: "./cache",
    artifacts: "./artifacts",
  },
  typechain: {
    target: "ethers-v5",
    outDir: "typechain/",
    alwaysGenerateOverloads: true,
    // externalArtifacts: ["facet_abis/*.json"],
  },
  solidity: {
    compilers: [
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
