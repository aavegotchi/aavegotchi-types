/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  OwnershipFacet,
  OwnershipFacetInterface,
} from "../../../../../../../src/contracts/aavegotchi-contracts/contracts/shared/facets/OwnershipFacet";

const _abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610296806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b14610059575b600080fd5b61004361006e565b604051610050919061020a565b60405180910390f35b61006c6100673660046101dc565b61007d565b005b6000610078610091565b905090565b6100856100ad565b61008e816100fb565b50565b600061009b61015b565b600401546001600160a01b0316919050565b6100b561015b565b600401546001600160a01b03166100ca61017f565b6001600160a01b0316146100f95760405162461bcd60e51b81526004016100f09061021e565b60405180910390fd5b565b600061010561015b565b6004810180546001600160a01b038581166001600160a01b031983168117909355604051939450169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b6000333014156101d657600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b031691506101d99050565b50335b90565b6000602082840312156101ed578081fd5b81356001600160a01b0381168114610203578182fd5b9392505050565b6001600160a01b0391909116815260200190565b60208082526022908201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60408201526132b960f11b60608201526080019056fea26469706673582212207c54f12905a75ba5ac92af4eba7703c62e6df21fa173bac6ee417293fbba6c1a64736f6c63430008010033";

type OwnershipFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnershipFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnershipFacet__factory extends ContractFactory {
  constructor(...args: OwnershipFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnershipFacet> {
    return super.deploy(overrides || {}) as Promise<OwnershipFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnershipFacet {
    return super.attach(address) as OwnershipFacet;
  }
  override connect(signer: Signer): OwnershipFacet__factory {
    return super.connect(signer) as OwnershipFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnershipFacetInterface {
    return new utils.Interface(_abi) as OwnershipFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnershipFacet {
    return new Contract(address, _abi, signerOrProvider) as OwnershipFacet;
  }
}