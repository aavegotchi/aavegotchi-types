/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  StkGHSTWETH,
  StkGHSTWETHInterface,
} from "../../../../../src/contracts/ghst-staking/contracts/StkGHSTWETH";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [
      {
        internalType: "address",
        name: "_newMinter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50604051610ba6380380610ba683398101604081905261002f91610054565b600380546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b610b15806100916000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146101c0578063a9059cbb146101d3578063dd62ed3e146101e6578063fca3b5aa146101f9576100ea565b806370a082311461019257806395d89b41146101a55780639dc29fac146101ad576100ea565b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016a57806340c10f191461017d576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461012d575b600080fd5b6100f761020c565b6040516101049190610859565b60405180910390f35b61012061011b366004610825565b610239565b604051610104919061084e565b610135610291565b6040516101049190610a88565b6101206101503660046107ea565b610297565b61015d6103e3565b6040516101049190610a91565b610120610178366004610825565b6103e8565b61019061018b366004610825565b610477565b005b6101356101a0366004610797565b6104f1565b6100f761050c565b6101906101bb366004610825565b610532565b6101206101ce366004610825565b6105e6565b6101206101e1366004610825565b610689565b6101356101f43660046107b8565b610704565b610190610207366004610797565b61072f565b60408051808201909152601381527205374616b656420474853542d57455448204c5606c1b602082015290565b3360008181526002602090815260408083206001600160a01b03871680855292528083208590555191929091600080516020610ac083398151915290610280908690610a88565b60405180910390a350600192915050565b60005490565b6001600160a01b03831660008181526001602052604081205490913314610364576001600160a01b0385166000908152600260209081526040808320338452909152902054838110156103055760405162461bcd60e51b81526004016102fc90610a2b565b60405180910390fd5b6000198114610362576001600160a01b038616600081815260026020908152604080832033808552925291829020878503908190559151909291600080516020610ac0833981519152916103599190610a88565b60405180910390a35b505b828110156103845760405162461bcd60e51b81526004016102fc906108ac565b6001600160a01b038086166000818152600160205260408082208786039055928716808252908390208054870190559151600080516020610aa0833981519152906103d0908790610a88565b60405180910390a3506001949350505050565b601290565b3360009081526002602090815260408083206001600160a01b03861684529091528120548281018181101561042f5760405162461bcd60e51b81526004016102fc906109dd565b3360008181526002602090815260408083206001600160a01b038a168085529252918290208490559051909190600080516020610ac0833981519152906103d0908590610a88565b6003546001600160a01b031633146104a15760405162461bcd60e51b81526004016102fc906109ad565b6001600160a01b03821660009081526001602052604080822080548401905581548301825551339190600080516020610aa0833981519152906104e5908590610a88565b60405180910390a35050565b6001600160a01b031660009081526001602052604090205490565b60408051808201909152600c81526b0e6e8d68e90a6a85aae8aa8960a31b602082015290565b6003546001600160a01b0316331461055c5760405162461bcd60e51b81526004016102fc906109ad565b6001600160a01b038216600090815260016020526040902054818110156105955760405162461bcd60e51b81526004016102fc90610976565b6001600160a01b03831660009081526001602052604080822084840390558154849003825551339190600080516020610aa0833981519152906105d9908690610a88565b60405180910390a3505050565b3360009081526002602090815260408083206001600160a01b03861684529091528120548281101561062a5760405162461bcd60e51b81526004016102fc9061092a565b3360008181526002602090815260408083206001600160a01b03891680855292529182902093869003938490559051909190600080516020610ac083398151915290610677908590610a88565b60405180910390a35060019392505050565b33600090815260016020526040812054828110156106b95760405162461bcd60e51b81526004016102fc906108ac565b3360008181526001602052604080822086850390556001600160a01b0387168083529181902080548701905551909190600080516020610aa083398151915290610677908790610a88565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6003546001600160a01b031633146107595760405162461bcd60e51b81526004016102fc906108f3565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461079257600080fd5b919050565b6000602082840312156107a8578081fd5b6107b18261077b565b9392505050565b600080604083850312156107ca578081fd5b6107d38361077b565b91506107e16020840161077b565b90509250929050565b6000806000606084860312156107fe578081fd5b6108078461077b565b92506108156020850161077b565b9150604084013590509250925092565b60008060408385031215610837578182fd5b6108408361077b565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b8181101561088557858101830151858201604001528201610869565b818111156108965783604083870101525b50601f01601f1916929092016040019392505050565b60208082526027908201527f4e6f7420656e6f75676820474853545374616b696e67546f6b656e20746f20746040820152663930b739b332b960c91b606082015260800190565b6020808252601f908201527f4d757374206265206d696e74657220746f206368616e6765206d696e74657200604082015260600190565b6020808252602c908201527f474853545374616b696e67546f6b656e20616c6c6f77616e636520646563726560408201526b0617365642062656c6f7720360a41b606082015260800190565b6020808252601f908201527f43616e2774206275726e206d6f7265207468616e20706572736f6e2068617300604082015260600190565b602080825260169082015275135d5cdd081899481b5a5b9d195c881d1bc81b5a5b9d60521b604082015260600190565b6020808252602e908201527f474853545374616b696e67546f6b656e20616c6c6f77616e636520696e63726560408201526d185cd9481bdd995c999b1bddd95960921b606082015260800190565b60208082526037908201527f416c6c6f77616e6365206e6f7420677265617420656e6f75676820746f20747260408201527f616e7366657220474853545374616b696e67546f6b656e000000000000000000606082015260800190565b90815260200190565b60ff9190911681526020019056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a264697066735822122032d7092739acd3e40c85eb0a106ddd29adb5e77ff8a38789ace41ac79e679e4564736f6c63430007060033";

type StkGHSTWETHConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StkGHSTWETHConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StkGHSTWETH__factory extends ContractFactory {
  constructor(...args: StkGHSTWETHConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StkGHSTWETH> {
    return super.deploy(_minter, overrides || {}) as Promise<StkGHSTWETH>;
  }
  override getDeployTransaction(
    _minter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_minter, overrides || {});
  }
  override attach(address: string): StkGHSTWETH {
    return super.attach(address) as StkGHSTWETH;
  }
  override connect(signer: Signer): StkGHSTWETH__factory {
    return super.connect(signer) as StkGHSTWETH__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StkGHSTWETHInterface {
    return new utils.Interface(_abi) as StkGHSTWETHInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StkGHSTWETH {
    return new Contract(address, _abi, signerOrProvider) as StkGHSTWETH;
  }
}
