/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  MetaTransactionsFacet,
  MetaTransactionsFacetInterface,
} from "../../../../../../../src/contracts/aavegotchi-contracts/contracts/Aavegotchi/facets/MetaTransactionsFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "relayerAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "functionSignature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "sigR",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "sigS",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "sigV",
        type: "uint8",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107d0806100206000396000f3fe6080604052600436106100295760003560e01c80630c53c51c1461002e5780632d0335ab14610057575b600080fd5b61004161003c3660046103e1565b610084565b60405161004e91906105d1565b60405180910390f35b34801561006357600080fd5b506100776100723660046103c0565b610231565b60405161004e91906106e4565b606060006100918661024c565b90506000356001600160e01b031990811690821614156100cc5760405162461bcd60e51b81526004016100c39061061b565b60405180910390fd5b6001600160a01b0387166000818152601560209081526040918290205482516060810184528181529182019390935290810188905261010e898289898961026c565b61012a5760405162461bcd60e51b81526004016100c3906106a3565b6101358260016106ed565b6001600160a01b038a16600090815260156020908152604080832093909355915190918291309161016a918d918f9101610508565b60408051601f1981840301815290829052610184916104ec565b6000604051808303816000865af19150503d80600081146101c1576040519150601f19603f3d011682016040523d82523d6000602084013e6101c6565b606091505b5091509150816101e85760405162461bcd60e51b81526004016100c3906105e4565b7f5845892132946850460bff5a0083f71031bc5bf9aadcd40f1de79423eac9b10b8b338c60405161021b9392919061055a565b60405180910390a19a9950505050505050505050565b6001600160a01b031660009081526015602052604090205490565b600081516000141561026057506000610267565b5060208101515b919050565b600080600161028261027d88610318565b610376565b848787604051600081526020016040526040516102a294939291906105b3565b6020604051602081039080840390855afa1580156102c4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166102f75760405162461bcd60e51b81526004016100c390610678565b866001600160a01b0316816001600160a01b03161491505095945050505050565b60006040518060800160405280604381526020016107586043913980516020918201208351848301516040808701518051908601209051610359950161058f565b604051602081830303815290604052805190602001209050919050565b6000610380610392565b8260405160200161035992919061053f565b60225490565b80356001600160a01b038116811461026757600080fd5b803560ff8116811461026757600080fd5b6000602082840312156103d1578081fd5b6103da82610398565b9392505050565b600080600080600060a086880312156103f8578081fd5b61040186610398565b9450602086013567ffffffffffffffff8082111561041d578283fd5b818801915088601f830112610430578283fd5b81358181111561044257610442610741565b604051601f8201601f19908116603f0116810190838211818310171561046a5761046a610741565b816040528281528b6020848701011115610482578586fd5b82602086016020830137918201602001859052509550505060408601359250606086013591506104b4608087016103af565b90509295509295909350565b600081518084526104d8816020860160208601610711565b601f01601f19169290920160200192915050565b600082516104fe818460208701610711565b9190910192915050565b6000835161051a818460208801610711565b60609390931b6bffffffffffffffffffffffff19169190920190815260140192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b03848116825283166020820152606060408201819052600090610586908301846104c0565b95945050505050565b93845260208401929092526001600160a01b03166040830152606082015260800190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082526103da60208301846104c0565b6020808252601c908201527f46756e6374696f6e2063616c6c206e6f74207375636365737366756c00000000604082015260600190565b6020808252603d908201527f66756e6374696f6e5369676e61747572652063616e206e6f74206265206f662060408201527f657865637574654d6574615472616e73616374696f6e206d6574686f64000000606082015260800190565b602080825260119082015270496e76616c6964207369676e617475726560781b604082015260600190565b60208082526021908201527f5369676e657220616e64207369676e617475726520646f206e6f74206d6174636040820152600d60fb1b606082015260800190565b90815260200190565b6000821982111561070c57634e487b7160e01b81526011600452602481fd5b500190565b60005b8381101561072c578181015183820152602001610714565b8381111561073b576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfe4d6574615472616e73616374696f6e2875696e74323536206e6f6e63652c616464726573732066726f6d2c62797465732066756e6374696f6e5369676e617475726529a2646970667358221220bd7389b1f77d9cf68c212b226e019afd9b503fcc8f6882cf52b49d1d877804a564736f6c63430008010033";

type MetaTransactionsFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaTransactionsFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaTransactionsFacet__factory extends ContractFactory {
  constructor(...args: MetaTransactionsFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MetaTransactionsFacet> {
    return super.deploy(overrides || {}) as Promise<MetaTransactionsFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MetaTransactionsFacet {
    return super.attach(address) as MetaTransactionsFacet;
  }
  override connect(signer: Signer): MetaTransactionsFacet__factory {
    return super.connect(signer) as MetaTransactionsFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaTransactionsFacetInterface {
    return new utils.Interface(_abi) as MetaTransactionsFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaTransactionsFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MetaTransactionsFacet;
  }
}
