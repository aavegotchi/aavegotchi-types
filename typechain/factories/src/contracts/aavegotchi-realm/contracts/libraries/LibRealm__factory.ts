/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  LibRealm,
  LibRealmInterface,
} from "../../../../../../src/contracts/aavegotchi-realm/contracts/libraries/LibRealm";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_alchemicas",
        type: "uint256[]",
      },
    ],
    name: "SurveyParcel",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122098e80112b1fb2f483c42e42ca66d11effc6ff8c1275cf17935ad74b891bb7ca764736f6c63430008090033";

type LibRealmConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibRealmConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibRealm__factory extends ContractFactory {
  constructor(...args: LibRealmConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibRealm> {
    return super.deploy(overrides || {}) as Promise<LibRealm>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibRealm {
    return super.attach(address) as LibRealm;
  }
  override connect(signer: Signer): LibRealm__factory {
    return super.connect(signer) as LibRealm__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibRealmInterface {
    return new utils.Interface(_abi) as LibRealmInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibRealm {
    return new Contract(address, _abi, signerOrProvider) as LibRealm;
  }
}
