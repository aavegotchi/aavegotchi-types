/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGBM,
  IGBMInterface,
} from "../../../../../../src/contracts/aavegotchi-realm/contracts/interfaces/IGBM";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bidAmount",
        type: "uint256",
      },
    ],
    name: "Auction_BidPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_bidAmount",
        type: "uint256",
      },
    ],
    name: "Auction_BidRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "Auction_EndTimeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_earner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_incentiveAmount",
        type: "uint256",
      },
    ],
    name: "Auction_IncentivePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "_tokenKind",
        type: "bytes4",
      },
    ],
    name: "Auction_Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionID",
        type: "uint256",
      },
    ],
    name: "Auction_ItemClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
    ],
    name: "Auction_StartTimeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_biddingAllowed",
        type: "bool",
      },
    ],
    name: "Contract_BiddingAllowed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_auctionIds",
        type: "uint256[]",
      },
    ],
    name: "batchClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20Currency",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionBidDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionBidMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionDueIncentives",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionHammerTimeDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionHighestBid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionHighestBidder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
    ],
    name: "getAuctionID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenIndex",
        type: "uint256",
      },
    ],
    name: "getAuctionID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionIncMax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionIncMin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionStepMin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getTokenKind",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IGBM__factory {
  static readonly abi = _abi;
  static createInterface(): IGBMInterface {
    return new utils.Interface(_abi) as IGBMInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IGBM {
    return new Contract(address, _abi, signerOrProvider) as IGBM;
  }
}
