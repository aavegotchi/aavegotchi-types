/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  InitDiamond,
  InitDiamondInterface,
} from "../../../../../../src/contracts/aavegotchi-contracts/contracts/GHST/InitDiamond";

const _abi = [
  {
    inputs: [],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610106806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063e1c7392a14602d575b600080fd5b60336035565b005b6000603d60ac565b6301ffc9a760e01b600090815260039091016020526040808220805460ff1990811660019081179092556307e4c70760e21b845282842080548216831790556348e2b09360e01b845282842080548216831790556307f5828d60e41b8452919092208054909116909117905550565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c9056fea264697066735822122086afa14da74edce64e99933a941f2176935cc7344256cbfa790542571c76b3be64736f6c63430008010033";

type InitDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InitDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InitDiamond__factory extends ContractFactory {
  constructor(...args: InitDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InitDiamond> {
    return super.deploy(overrides || {}) as Promise<InitDiamond>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InitDiamond {
    return super.attach(address) as InitDiamond;
  }
  override connect(signer: Signer): InitDiamond__factory {
    return super.connect(signer) as InitDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InitDiamondInterface {
    return new utils.Interface(_abi) as InitDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitDiamond {
    return new Contract(address, _abi, signerOrProvider) as InitDiamond;
  }
}
