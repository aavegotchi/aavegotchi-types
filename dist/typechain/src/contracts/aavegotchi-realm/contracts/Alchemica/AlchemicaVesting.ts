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
} from "../../../../../common";

export interface AlchemicaVestingInterface extends utils.Interface {
  functions: {
    "batchPartialRelease(address[],uint256[])": FunctionFragment;
    "batchRelease(address[])": FunctionFragment;
    "beneficiary()": FunctionFragment;
    "decayFactor()": FunctionFragment;
    "initialize(address,uint256,uint256,bool)": FunctionFragment;
    "owner()": FunctionFragment;
    "partialRelease(address,uint256)": FunctionFragment;
    "releasableAmount(address)": FunctionFragment;
    "release(address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "replaceBeneficiary(address)": FunctionFragment;
    "revocable()": FunctionFragment;
    "revoke(address)": FunctionFragment;
    "revoked(address)": FunctionFragment;
    "start()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "batchPartialRelease"
      | "batchPartialRelease(address[],uint256[])"
      | "batchRelease"
      | "batchRelease(address[])"
      | "beneficiary"
      | "beneficiary()"
      | "decayFactor"
      | "decayFactor()"
      | "initialize"
      | "initialize(address,uint256,uint256,bool)"
      | "owner"
      | "owner()"
      | "partialRelease"
      | "partialRelease(address,uint256)"
      | "releasableAmount"
      | "releasableAmount(address)"
      | "release"
      | "release(address)"
      | "released"
      | "released(address)"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "replaceBeneficiary"
      | "replaceBeneficiary(address)"
      | "revocable"
      | "revocable()"
      | "revoke"
      | "revoke(address)"
      | "revoked"
      | "revoked(address)"
      | "start"
      | "start()"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchPartialRelease",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchPartialRelease(address[],uint256[])",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRelease",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRelease(address[])",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiary()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decayFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decayFactor()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize(address,uint256,uint256,bool)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "partialRelease",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "partialRelease(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "releasableAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "releasableAmount(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "release(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "released",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "released(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "replaceBeneficiary",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "replaceBeneficiary(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "revocable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "revocable()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revoke(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revoked",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revoked(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "start()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchPartialRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchPartialRelease(address[],uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchRelease(address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decayFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decayFactor()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialize(address,uint256,uint256,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "partialRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "partialRelease(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasableAmount(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "release(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "released(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replaceBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replaceBeneficiary(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revocable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revocable()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revoke(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revoked(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenVestingRevoked(address)": EventFragment;
    "TokensReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized(uint8)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenVestingRevoked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TokenVestingRevoked(address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensReleased"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TokensReleased(address,uint256)"
  ): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenVestingRevokedEventObject {
  token: string;
}
export type TokenVestingRevokedEvent = TypedEvent<
  [string],
  TokenVestingRevokedEventObject
>;

export type TokenVestingRevokedEventFilter =
  TypedEventFilter<TokenVestingRevokedEvent>;

export interface TokensReleasedEventObject {
  token: string;
  amount: BigNumber;
}
export type TokensReleasedEvent = TypedEvent<
  [string, BigNumber],
  TokensReleasedEventObject
>;

export type TokensReleasedEventFilter = TypedEventFilter<TokensReleasedEvent>;

export interface AlchemicaVesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AlchemicaVestingInterface;

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
    batchPartialRelease(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "batchPartialRelease(address[],uint256[])"(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batchRelease(
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "batchRelease(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    "beneficiary()"(overrides?: CallOverrides): Promise<[string]>;

    decayFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    "decayFactor()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,uint256,uint256,bool)"(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    partialRelease(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "partialRelease(address,uint256)"(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    releasableAmount(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "releasableAmount(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    release(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    released(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    replaceBeneficiary(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "replaceBeneficiary(address)"(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revocable(overrides?: CallOverrides): Promise<[boolean]>;

    "revocable()"(overrides?: CallOverrides): Promise<[boolean]>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "revoke(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revoked(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "revoked(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    start(overrides?: CallOverrides): Promise<[BigNumber]>;

    "start()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  batchPartialRelease(
    _tokens: PromiseOrValue<string>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "batchPartialRelease(address[],uint256[])"(
    _tokens: PromiseOrValue<string>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batchRelease(
    tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "batchRelease(address[])"(
    tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  "beneficiary()"(overrides?: CallOverrides): Promise<string>;

  decayFactor(overrides?: CallOverrides): Promise<BigNumber>;

  "decayFactor()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    beneficiary_: PromiseOrValue<string>,
    start_: PromiseOrValue<BigNumberish>,
    decayFactor_: PromiseOrValue<BigNumberish>,
    revocable_: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,uint256,uint256,bool)"(
    beneficiary_: PromiseOrValue<string>,
    start_: PromiseOrValue<BigNumberish>,
    decayFactor_: PromiseOrValue<BigNumberish>,
    revocable_: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  partialRelease(
    token: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "partialRelease(address,uint256)"(
    token: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  releasableAmount(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "releasableAmount(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  release(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "release(address)"(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  released(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "released(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  replaceBeneficiary(
    newBeneficiary_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "replaceBeneficiary(address)"(
    newBeneficiary_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revocable(overrides?: CallOverrides): Promise<boolean>;

  "revocable()"(overrides?: CallOverrides): Promise<boolean>;

  revoke(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "revoke(address)"(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revoked(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "revoked(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  start(overrides?: CallOverrides): Promise<BigNumber>;

  "start()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    batchPartialRelease(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "batchPartialRelease(address[],uint256[])"(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    batchRelease(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "batchRelease(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    beneficiary(overrides?: CallOverrides): Promise<string>;

    "beneficiary()"(overrides?: CallOverrides): Promise<string>;

    decayFactor(overrides?: CallOverrides): Promise<BigNumber>;

    "decayFactor()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint256,uint256,bool)"(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    partialRelease(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "partialRelease(address,uint256)"(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    releasableAmount(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasableAmount(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    release(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    released(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    replaceBeneficiary(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "replaceBeneficiary(address)"(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revocable(overrides?: CallOverrides): Promise<boolean>;

    "revocable()"(overrides?: CallOverrides): Promise<boolean>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "revoke(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revoked(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "revoked(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "start()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokenVestingRevoked(address)"(
      token?: null
    ): TokenVestingRevokedEventFilter;
    TokenVestingRevoked(token?: null): TokenVestingRevokedEventFilter;

    "TokensReleased(address,uint256)"(
      token?: null,
      amount?: null
    ): TokensReleasedEventFilter;
    TokensReleased(token?: null, amount?: null): TokensReleasedEventFilter;
  };

  estimateGas: {
    batchPartialRelease(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "batchPartialRelease(address[],uint256[])"(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batchRelease(
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "batchRelease(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;

    decayFactor(overrides?: CallOverrides): Promise<BigNumber>;

    "decayFactor()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "initialize(address,uint256,uint256,bool)"(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    partialRelease(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "partialRelease(address,uint256)"(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    releasableAmount(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasableAmount(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    release(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    released(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    replaceBeneficiary(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "replaceBeneficiary(address)"(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revocable(overrides?: CallOverrides): Promise<BigNumber>;

    "revocable()"(overrides?: CallOverrides): Promise<BigNumber>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "revoke(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revoked(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "revoked(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "start()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchPartialRelease(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "batchPartialRelease(address[],uint256[])"(
      _tokens: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batchRelease(
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "batchRelease(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decayFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decayFactor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint256,uint256,bool)"(
      beneficiary_: PromiseOrValue<string>,
      start_: PromiseOrValue<BigNumberish>,
      decayFactor_: PromiseOrValue<BigNumberish>,
      revocable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    partialRelease(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "partialRelease(address,uint256)"(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    releasableAmount(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "releasableAmount(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    release(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "release(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    released(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "released(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    replaceBeneficiary(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "replaceBeneficiary(address)"(
      newBeneficiary_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revocable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "revocable()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revoke(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "revoke(address)"(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revoked(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "revoked(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "start()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}