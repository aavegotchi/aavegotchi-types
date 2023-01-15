/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  GHSTStakingTokenFacet,
  GHSTStakingTokenFacetInterface,
} from "../../../../../../src/contracts/ghst-staking/contracts/facets/GHSTStakingTokenFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
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
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
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
        name: "remaining_",
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
        name: "success_",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance_",
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
    stateMutability: "pure",
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
    name: "decreaseAllowance",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
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
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b5061094c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b411461014f578063a457c2d714610157578063a9059cbb1461016a578063dd62ed3e1461017d576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ec57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b6610190565b6040516100c3919061074e565b60405180910390f35b6100df6100da36600461071a565b6101bf565b6040516100c39190610743565b6100f4610228565b6040516100c391906108df565b6100df61010f3660046106df565b61022e565b61011c6103a5565b6040516100c391906108e8565b6100df61013736600461071a565b6103aa565b6100f461014a36600461068c565b610446565b6100b6610464565b6100df61016536600461071a565b61048b565b6100df61017836600461071a565b61053c565b6100f461018b3660046106ad565b6105eb565b60408051808201909152601481527305374616b656420474853542d515549434b204c560641b60208201525b90565b6000806101ca610614565b6001600160a01b03808216600081815260208181526040808320948a1680845294909152908190208790555192935090916000805160206108f7833981519152906102169087906108df565b60405180910390a35060019392505050565b60055490565b600080610239610614565b6001600160a01b038087166000818152602081905260409020600301549293509083161461030c576001600160a01b0380871660009081526020818152604080832093861683529290522054848110156102ae5760405162461bcd60e51b81526004016102a590610882565b60405180910390fd5b600019811461030a576001600160a01b0380881660008181526020818152604080832094881680845294909152908190208885039081905590516000805160206108f783398151915291610301916108df565b60405180910390a35b505b8381101561032c5760405162461bcd60e51b81526004016102a5906107a1565b6001600160a01b038087166000818152602081905260408082208886036003918201559389168083529181902090930180548801905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906103919088906108df565b60405180910390a350600195945050505050565b601290565b6000806103b5610614565b6001600160a01b0380821660009081526020818152604080832093891683529290522054909150838101818110156103ff5760405162461bcd60e51b81526004016102a590610834565b6001600160a01b03808416600081815260208181526040808320948b168084529490915290819020849055516000805160206108f7833981519152906103919085906108df565b6001600160a01b031660009081526020819052604090206003015490565b60408051808201909152600d81526c73746b474853542d515549434b60981b602082015290565b600080610496610614565b6001600160a01b0380821660009081526020818152604080832093891683529290522054909150838110156104dd5760405162461bcd60e51b81526004016102a5906107e8565b6001600160a01b03808316600081815260208181526040808320948a1680845294909152908190209387900393849055516000805160206108f7833981519152906105299085906108df565b60405180910390a3506001949350505050565b600080610547610614565b6001600160a01b038116600090815260208190526040902060030154909150838110156105865760405162461bcd60e51b81526004016102a5906107a1565b6001600160a01b038083166000818152602081905260408082208886036003918201559389168083529181902090930180548801905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906105299088906108df565b6001600160a01b0391821660009081526020818152604080832093909416825291909152205490565b60003330141561066b57600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b031691506101bc9050565b503390565b80356001600160a01b038116811461068757600080fd5b919050565b60006020828403121561069d578081fd5b6106a682610670565b9392505050565b600080604083850312156106bf578081fd5b6106c883610670565b91506106d660208401610670565b90509250929050565b6000806000606084860312156106f3578081fd5b6106fc84610670565b925061070a60208501610670565b9150604084013590509250925092565b6000806040838503121561072c578182fd5b61073583610670565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b8181101561077a5785810183015185820160400152820161075e565b8181111561078b5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526027908201527f4e6f7420656e6f75676820474853545374616b696e67546f6b656e20746f20746040820152663930b739b332b960c91b606082015260800190565b6020808252602c908201527f474853545374616b696e67546f6b656e20616c6c6f77616e636520646563726560408201526b0617365642062656c6f7720360a41b606082015260800190565b6020808252602e908201527f474853545374616b696e67546f6b656e20616c6c6f77616e636520696e63726560408201526d185cd9481bdd995c999b1bddd95960921b606082015260800190565b60208082526037908201527f416c6c6f77616e6365206e6f7420677265617420656e6f75676820746f20747260408201527f616e7366657220474853545374616b696e67546f6b656e000000000000000000606082015260800190565b90815260200190565b60ff9190911681526020019056fe8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a2646970667358221220e105d3154e1b6525ed828bf00599e46635c403f9888887887a5e5b8104e3aa7464736f6c63430007060033";

type GHSTStakingTokenFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GHSTStakingTokenFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GHSTStakingTokenFacet__factory extends ContractFactory {
  constructor(...args: GHSTStakingTokenFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GHSTStakingTokenFacet> {
    return super.deploy(overrides || {}) as Promise<GHSTStakingTokenFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GHSTStakingTokenFacet {
    return super.attach(address) as GHSTStakingTokenFacet;
  }
  override connect(signer: Signer): GHSTStakingTokenFacet__factory {
    return super.connect(signer) as GHSTStakingTokenFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GHSTStakingTokenFacetInterface {
    return new utils.Interface(_abi) as GHSTStakingTokenFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GHSTStakingTokenFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GHSTStakingTokenFacet;
  }
}