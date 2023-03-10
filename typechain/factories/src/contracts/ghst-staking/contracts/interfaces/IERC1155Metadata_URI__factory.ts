/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1155Metadata_URI,
  IERC1155Metadata_URIInterface,
} from "../../../../../../src/contracts/ghst-staking/contracts/interfaces/IERC1155Metadata_URI";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC1155Metadata_URI__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155Metadata_URIInterface {
    return new utils.Interface(_abi) as IERC1155Metadata_URIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155Metadata_URI {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1155Metadata_URI;
  }
}
