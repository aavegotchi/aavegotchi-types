/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ERC20Generic,
  ERC20GenericInterface,
} from "../../../../../../src/contracts/aavegotchi-gbm-baazaar/contracts/test/ERC20Generic";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
  {
    inputs: [],
    name: "symbol",
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
  {
    inputs: [],
    name: "totalSupply",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060408051808201909152600d8082526c047656e6572696320455243323609c1b602090920191825261004591600091610085565b5060408051808201909152600580825264047454e32360dc1b602090920191825261007291600191610085565b506002805460ff19166012179055610158565b8280546100919061011e565b90600052602060002090601f0160209004810192826100b357600085556100f9565b82601f106100cc57805160ff19168380011785556100f9565b828001600101855582156100f9579182015b828111156100f95782518255916020019190600101906100de565b50610105929150610109565b5090565b5b80821115610105576000815560010161010a565b600181811c9082168061013257607f821691505b60208210810361015257634e487b7160e01b600052602260045260246000fd5b50919050565b61086a806101676000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806370a082311161006657806370a082311461012d57806394bf804d1461014d57806395d89b4114610162578063a9059cbb1461016a578063dd62ed3e1461017d57600080fd5b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100e457806323b872dd146100fb578063313ce5671461010e575b600080fd5b6100ab6101b6565b6040516100b89190610666565b60405180910390f35b6100d46100cf3660046106d7565b610244565b60405190151581526020016100b8565b6100ed60035481565b6040519081526020016100b8565b6100d4610109366004610701565b6102b0565b60025461011b9060ff1681565b60405160ff90911681526020016100b8565b6100ed61013b36600461073d565b60046020526000908152604090205481565b61016061015b36600461075f565b6104f6565b005b6100ab610551565b6100d46101783660046106d7565b61055e565b6100ed61018b36600461078b565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b600080546101c3906107b5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ef906107b5565b801561023c5780601f106102115761010080835404028352916020019161023c565b820191906000526020600020905b81548152906001019060200180831161021f57829003601f168201915b505050505081565b3360008181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061029f9086815260200190565b60405180910390a350600192915050565b6001600160a01b03831660009081526004602052604081205482111561032c5760405162461bcd60e51b815260206004820152602660248201527f7472616e7366657246726f6d3a205f66726f6d2062616c616e636520697320746044820152656f6f206c6f7760d01b60648201526084015b60405180910390fd5b6001600160a01b0384166000908152600560209081526040808320338452909152902054821115806103665750336001600160a01b038516145b6103d85760405162461bcd60e51b815260206004820152603860248201527f7472616e7366657246726f6d3a206d73672e73656e64657220616c6c6f77616e60448201527f63652077697468205f66726f6d20697320746f6f206c6f7700000000000000006064820152608401610323565b336001600160a01b0385161461043c576001600160a01b0384166000908152600560209081526040808320338452909152902054610417908390610805565b6001600160a01b03851660009081526005602090815260408083203384529091529020555b6001600160a01b038416600090815260046020526040902054610460908390610805565b6001600160a01b03808616600090815260046020526040808220939093559085168152205461049090839061081c565b6001600160a01b0380851660008181526004602052604090819020939093559151908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104e49086815260200190565b60405180910390a35060019392505050565b6001600160a01b03811660009081526004602052604090205461051a90839061081c565b6001600160a01b0382166000908152600460205260408120919091556003805484929061054890849061081c565b90915550505050565b600180546101c3906107b5565b336000908152600460205260408120548211156105cd5760405162461bcd60e51b815260206004820152602760248201527f7472616e736665723a206d73672e73656e6465722062616c616e636520697320604482015266746f6f206c6f7760c81b6064820152608401610323565b336000908152600460205260409020546105e8908390610805565b33600090815260046020526040808220929092556001600160a01b0385168152205461061590839061081c565b6001600160a01b0384166000818152600460205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061029f9086815260200190565b600060208083528351808285015260005b8181101561069357858101830151858201604001528201610677565b818111156106a5576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146106d257600080fd5b919050565b600080604083850312156106ea57600080fd5b6106f3836106bb565b946020939093013593505050565b60008060006060848603121561071657600080fd5b61071f846106bb565b925061072d602085016106bb565b9150604084013590509250925092565b60006020828403121561074f57600080fd5b610758826106bb565b9392505050565b6000806040838503121561077257600080fd5b82359150610782602084016106bb565b90509250929050565b6000806040838503121561079e57600080fd5b6107a7836106bb565b9150610782602084016106bb565b600181811c908216806107c957607f821691505b6020821081036107e957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610817576108176107ef565b500390565b6000821982111561082f5761082f6107ef565b50019056fea2646970667358221220f49d4f12075273201b646cd78c896ae5402c0b7a2047cdde5eba11f031c0abdd64736f6c634300080d0033";

type ERC20GenericConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20GenericConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Generic__factory extends ContractFactory {
  constructor(...args: ERC20GenericConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Generic> {
    return super.deploy(overrides || {}) as Promise<ERC20Generic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Generic {
    return super.attach(address) as ERC20Generic;
  }
  override connect(signer: Signer): ERC20Generic__factory {
    return super.connect(signer) as ERC20Generic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20GenericInterface {
    return new utils.Interface(_abi) as ERC20GenericInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Generic {
    return new Contract(address, _abi, signerOrProvider) as ERC20Generic;
  }
}
