/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../common";

export type WhitelistStruct = {
  owner: PromiseOrValue<string>;
  name: PromiseOrValue<string>;
  addresses: PromiseOrValue<string>[];
};

export type WhitelistStructOutput = [string, string, string[]] & {
  owner: string;
  name: string;
  addresses: string[];
};

export interface WhitelistFacetInterface extends utils.Interface {
  functions: {
    "createWhitelist(string,address[])": FunctionFragment;
    "getBorrowLimit(uint32)": FunctionFragment;
    "getWhitelist(uint32)": FunctionFragment;
    "getWhitelistAccessRight(uint32,uint256)": FunctionFragment;
    "getWhitelistsLength()": FunctionFragment;
    "isWhitelisted(uint32,address)": FunctionFragment;
    "removeAddressesFromWhitelist(uint32,address[])": FunctionFragment;
    "setBorrowLimit(uint32,uint256)": FunctionFragment;
    "setWhitelistAccessRight(uint32,uint256,uint256)": FunctionFragment;
    "transferOwnershipOfWhitelist(uint32,address)": FunctionFragment;
    "updateWhitelist(uint32,address[])": FunctionFragment;
    "whitelistExists(uint32)": FunctionFragment;
    "whitelistOwner(uint32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createWhitelist"
      | "createWhitelist(string,address[])"
      | "getBorrowLimit"
      | "getBorrowLimit(uint32)"
      | "getWhitelist"
      | "getWhitelist(uint32)"
      | "getWhitelistAccessRight"
      | "getWhitelistAccessRight(uint32,uint256)"
      | "getWhitelistsLength"
      | "getWhitelistsLength()"
      | "isWhitelisted"
      | "isWhitelisted(uint32,address)"
      | "removeAddressesFromWhitelist"
      | "removeAddressesFromWhitelist(uint32,address[])"
      | "setBorrowLimit"
      | "setBorrowLimit(uint32,uint256)"
      | "setWhitelistAccessRight"
      | "setWhitelistAccessRight(uint32,uint256,uint256)"
      | "transferOwnershipOfWhitelist"
      | "transferOwnershipOfWhitelist(uint32,address)"
      | "updateWhitelist"
      | "updateWhitelist(uint32,address[])"
      | "whitelistExists"
      | "whitelistExists(uint32)"
      | "whitelistOwner"
      | "whitelistOwner(uint32)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createWhitelist",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createWhitelist(string,address[])",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowLimit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowLimit(uint32)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelist",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelist(uint32)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistAccessRight",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistAccessRight(uint32,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWhitelistsLength()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted(uint32,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAddressesFromWhitelist",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAddressesFromWhitelist(uint32,address[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setBorrowLimit",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBorrowLimit(uint32,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelistAccessRight",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelistAccessRight(uint32,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipOfWhitelist",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipOfWhitelist(uint32,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWhitelist",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWhitelist(uint32,address[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistExists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistExists(uint32)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistOwner",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistOwner(uint32)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createWhitelist(string,address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowLimit(uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelist(uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistAccessRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistAccessRight(uint32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWhitelistsLength()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted(uint32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAddressesFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAddressesFromWhitelist(uint32,address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowLimit(uint32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelistAccessRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelistAccessRight(uint32,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipOfWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipOfWhitelist(uint32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWhitelist(uint32,address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistExists(uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistOwner(uint32)",
    data: BytesLike
  ): Result;

  events: {
    "WhitelistCreated(uint32)": EventFragment;
    "WhitelistOwnershipTransferred(uint32,address)": EventFragment;
    "WhitelistUpdated(uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WhitelistCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistCreated(uint32)"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "WhitelistOwnershipTransferred"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "WhitelistOwnershipTransferred(uint32,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistUpdated(uint32)"): EventFragment;
}

export interface WhitelistCreatedEventObject {
  whitelistId: number;
}
export type WhitelistCreatedEvent = TypedEvent<
  [number],
  WhitelistCreatedEventObject
>;

export type WhitelistCreatedEventFilter =
  TypedEventFilter<WhitelistCreatedEvent>;

export interface WhitelistOwnershipTransferredEventObject {
  whitelistId: number;
  newOwner: string;
}
export type WhitelistOwnershipTransferredEvent = TypedEvent<
  [number, string],
  WhitelistOwnershipTransferredEventObject
>;

export type WhitelistOwnershipTransferredEventFilter =
  TypedEventFilter<WhitelistOwnershipTransferredEvent>;

export interface WhitelistUpdatedEventObject {
  whitelistId: number;
}
export type WhitelistUpdatedEvent = TypedEvent<
  [number],
  WhitelistUpdatedEventObject
>;

export type WhitelistUpdatedEventFilter =
  TypedEventFilter<WhitelistUpdatedEvent>;

export interface WhitelistFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhitelistFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createWhitelist(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "createWhitelist(string,address[])"(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBorrowLimit(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[WhitelistStructOutput]>;

    "getWhitelist(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[WhitelistStructOutput]>;

    getWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getWhitelistAccessRight(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWhitelistsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getWhitelistsLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isWhitelisted(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "isWhitelisted(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeAddressesFromWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeAddressesFromWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setBorrowLimit(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setWhitelistAccessRight(uint32,uint256,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnershipOfWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnershipOfWhitelist(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whitelistExists(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { exists: boolean }>;

    "whitelistExists(uint32)"(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { exists: boolean }>;

    whitelistOwner(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "whitelistOwner(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createWhitelist(
    _name: PromiseOrValue<string>,
    _whitelistAddresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "createWhitelist(string,address[])"(
    _name: PromiseOrValue<string>,
    _whitelistAddresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBorrowLimit(
    _whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBorrowLimit(uint32)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWhitelist(
    _whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<WhitelistStructOutput>;

  "getWhitelist(uint32)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<WhitelistStructOutput>;

  getWhitelistAccessRight(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _actionRight: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getWhitelistAccessRight(uint32,uint256)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _actionRight: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getWhitelistsLength(overrides?: CallOverrides): Promise<BigNumber>;

  "getWhitelistsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  isWhitelisted(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "isWhitelisted(uint32,address)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeAddressesFromWhitelist(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistAddresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeAddressesFromWhitelist(uint32,address[])"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistAddresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBorrowLimit(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _borrowlimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setBorrowLimit(uint32,uint256)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _borrowlimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWhitelistAccessRight(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _actionRight: PromiseOrValue<BigNumberish>,
    _accessRight: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setWhitelistAccessRight(uint32,uint256,uint256)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _actionRight: PromiseOrValue<BigNumberish>,
    _accessRight: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnershipOfWhitelist(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnershipOfWhitelist(uint32,address)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateWhitelist(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistAddresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateWhitelist(uint32,address[])"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    _whitelistAddresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  whitelistExists(
    whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "whitelistExists(uint32)"(
    whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  whitelistOwner(
    _whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "whitelistOwner(uint32)"(
    _whitelistId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createWhitelist(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "createWhitelist(string,address[])"(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBorrowLimit(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<WhitelistStructOutput>;

    "getWhitelist(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<WhitelistStructOutput>;

    getWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getWhitelistAccessRight(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "getWhitelistsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhitelisted(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAddressesFromWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "removeAddressesFromWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBorrowLimit(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setWhitelistAccessRight(uint32,uint256,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnershipOfWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnershipOfWhitelist(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "updateWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    whitelistExists(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "whitelistExists(uint32)"(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    whitelistOwner(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "whitelistOwner(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "WhitelistCreated(uint32)"(
      whitelistId?: PromiseOrValue<BigNumberish> | null
    ): WhitelistCreatedEventFilter;
    WhitelistCreated(
      whitelistId?: PromiseOrValue<BigNumberish> | null
    ): WhitelistCreatedEventFilter;

    "WhitelistOwnershipTransferred(uint32,address)"(
      whitelistId?: PromiseOrValue<BigNumberish> | null,
      newOwner?: PromiseOrValue<string> | null
    ): WhitelistOwnershipTransferredEventFilter;
    WhitelistOwnershipTransferred(
      whitelistId?: PromiseOrValue<BigNumberish> | null,
      newOwner?: PromiseOrValue<string> | null
    ): WhitelistOwnershipTransferredEventFilter;

    "WhitelistUpdated(uint32)"(
      whitelistId?: PromiseOrValue<BigNumberish> | null
    ): WhitelistUpdatedEventFilter;
    WhitelistUpdated(
      whitelistId?: PromiseOrValue<BigNumberish> | null
    ): WhitelistUpdatedEventFilter;
  };

  estimateGas: {
    createWhitelist(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "createWhitelist(string,address[])"(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBorrowLimit(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getWhitelist(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getWhitelistAccessRight(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWhitelistsLength(overrides?: CallOverrides): Promise<BigNumber>;

    "getWhitelistsLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isWhitelisted(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeAddressesFromWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeAddressesFromWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setBorrowLimit(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setWhitelistAccessRight(uint32,uint256,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnershipOfWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnershipOfWhitelist(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    whitelistExists(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "whitelistExists(uint32)"(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistOwner(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "whitelistOwner(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createWhitelist(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "createWhitelist(string,address[])"(
      _name: PromiseOrValue<string>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBorrowLimit(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getWhitelist(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getWhitelistAccessRight(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWhitelistsLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getWhitelistsLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isWhitelisted(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAddressesFromWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeAddressesFromWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBorrowLimit(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setBorrowLimit(uint32,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _borrowlimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelistAccessRight(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setWhitelistAccessRight(uint32,uint256,uint256)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _accessRight: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnershipOfWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnershipOfWhitelist(uint32,address)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateWhitelist(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateWhitelist(uint32,address[])"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      _whitelistAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    whitelistExists(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "whitelistExists(uint32)"(
      whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistOwner(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "whitelistOwner(uint32)"(
      _whitelistId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
