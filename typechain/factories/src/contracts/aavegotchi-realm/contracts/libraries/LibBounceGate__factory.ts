/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  LibBounceGate,
  LibBounceGateInterface,
} from "../../../../../../src/contracts/aavegotchi-realm/contracts/libraries/LibBounceGate";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
    ],
    name: "EventCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint120",
        name: "_newPriority",
        type: "uint120",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "_newEndTime",
        type: "uint64",
      },
    ],
    name: "EventPriorityAndDurationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint64",
            name: "startTime",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "endTime",
            type: "uint64",
          },
          {
            internalType: "uint120",
            name: "priority",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "equipped",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "lastTimeUpdated",
            type: "uint64",
          },
        ],
        indexed: false,
        internalType: "struct BounceGate",
        name: "eventDetails",
        type: "tuple",
      },
    ],
    name: "EventStarted",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122017d8960f3d77a0ce6b946b000ff42b9dc1fd55223cd27e1fc48d6227b9fc66a464736f6c63430008090033";

type LibBounceGateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibBounceGateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibBounceGate__factory extends ContractFactory {
  constructor(...args: LibBounceGateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibBounceGate> {
    return super.deploy(overrides || {}) as Promise<LibBounceGate>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibBounceGate {
    return super.attach(address) as LibBounceGate;
  }
  override connect(signer: Signer): LibBounceGate__factory {
    return super.connect(signer) as LibBounceGate__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibBounceGateInterface {
    return new utils.Interface(_abi) as LibBounceGateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibBounceGate {
    return new Contract(address, _abi, signerOrProvider) as LibBounceGate;
  }
}
