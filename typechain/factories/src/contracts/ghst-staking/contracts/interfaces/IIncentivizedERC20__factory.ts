/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IIncentivizedERC20,
  IIncentivizedERC20Interface,
} from "../../../../../../src/contracts/ghst-staking/contracts/interfaces/IIncentivizedERC20";

const _abi = [
  {
    inputs: [],
    name: "getIncentivesController",
    outputs: [
      {
        internalType: "contract IAaveIncentivesController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IIncentivizedERC20__factory {
  static readonly abi = _abi;
  static createInterface(): IIncentivizedERC20Interface {
    return new utils.Interface(_abi) as IIncentivizedERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IIncentivizedERC20 {
    return new Contract(address, _abi, signerOrProvider) as IIncentivizedERC20;
  }
}