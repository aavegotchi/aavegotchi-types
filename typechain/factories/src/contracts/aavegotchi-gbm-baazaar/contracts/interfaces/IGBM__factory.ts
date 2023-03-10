/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGBM,
  IGBMInterface,
} from "../../../../../../src/contracts/aavegotchi-gbm-baazaar/contracts/interfaces/IGBM";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "AuctionCancelled",
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
        name: "_tokenAmount",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "_presetID",
        type: "uint256",
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
        indexed: true,
        internalType: "uint64",
        name: "_newTokenAmount",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint80",
        name: "_newEndTime",
        type: "uint80",
      },
    ],
    name: "Auction_Modified",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "_endTime",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_tokenContractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "RoyaltyPaid",
    type: "event",
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
