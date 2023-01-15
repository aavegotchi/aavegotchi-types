/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1155Marketplace,
  IERC1155MarketplaceInterface,
} from "../../../../../../src/contracts/fake-gotchis/contracts/interfaces/IERC1155Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc1155TokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_erc1155TypeId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "updateERC1155Listing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC1155Marketplace__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155MarketplaceInterface {
    return new utils.Interface(_abi) as IERC1155MarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155Marketplace {
    return new Contract(address, _abi, signerOrProvider) as IERC1155Marketplace;
  }
}
