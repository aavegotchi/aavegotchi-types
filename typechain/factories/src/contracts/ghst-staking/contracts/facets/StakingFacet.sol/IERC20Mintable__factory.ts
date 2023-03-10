/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC20Mintable,
  IERC20MintableInterface,
} from "../../../../../../../src/contracts/ghst-staking/contracts/facets/StakingFacet.sol/IERC20Mintable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC20Mintable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20MintableInterface {
    return new utils.Interface(_abi) as IERC20MintableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20Mintable {
    return new Contract(address, _abi, signerOrProvider) as IERC20Mintable;
  }
}
