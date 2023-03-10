/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC721Marketplace,
  ERC721MarketplaceInterface,
} from "../../../../../../src/contracts/aavegotchi-realm/contracts/interfaces/ERC721Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc721TokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_erc721TokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "updateERC721Listing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ERC721Marketplace__factory {
  static readonly abi = _abi;
  static createInterface(): ERC721MarketplaceInterface {
    return new utils.Interface(_abi) as ERC721MarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Marketplace {
    return new Contract(address, _abi, signerOrProvider) as ERC721Marketplace;
  }
}
