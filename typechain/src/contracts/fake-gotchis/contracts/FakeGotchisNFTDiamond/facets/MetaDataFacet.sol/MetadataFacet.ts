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
} from "../../../../../../../common";

export type MetadataStruct = {
  publisher: PromiseOrValue<string>;
  royalty: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  editions: PromiseOrValue<BigNumberish>;
  flagCount: PromiseOrValue<BigNumberish>;
  likeCount: PromiseOrValue<BigNumberish>;
  artist: PromiseOrValue<string>;
  createdAt: PromiseOrValue<BigNumberish>;
  status: PromiseOrValue<BigNumberish>;
  minted: PromiseOrValue<boolean>;
  name: PromiseOrValue<string>;
  description: PromiseOrValue<string>;
  externalLink: PromiseOrValue<string>;
  artistName: PromiseOrValue<string>;
  publisherName: PromiseOrValue<string>;
  fileHash: PromiseOrValue<string>;
  fileType: PromiseOrValue<string>;
  thumbnailHash: PromiseOrValue<string>;
  thumbnailType: PromiseOrValue<string>;
};

export type MetadataStructOutput = [
  string,
  [number, number],
  number,
  number,
  number,
  string,
  number,
  number,
  boolean,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
] & {
  publisher: string;
  royalty: [number, number];
  editions: number;
  flagCount: number;
  likeCount: number;
  artist: string;
  createdAt: number;
  status: number;
  minted: boolean;
  name: string;
  description: string;
  externalLink: string;
  artistName: string;
  publisherName: string;
  fileHash: string;
  fileType: string;
  thumbnailHash: string;
  thumbnailType: string;
};

export declare namespace MetadataFacet {
  export type MetadataInputStruct = {
    name: PromiseOrValue<string>;
    publisherName: PromiseOrValue<string>;
    externalLink: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    artist: PromiseOrValue<string>;
    artistName: PromiseOrValue<string>;
    royalty: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    editions: PromiseOrValue<BigNumberish>;
    fileHash: PromiseOrValue<string>;
    fileType: PromiseOrValue<string>;
    thumbnailHash: PromiseOrValue<string>;
    thumbnailType: PromiseOrValue<string>;
  };

  export type MetadataInputStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    [number, number],
    number,
    string,
    string,
    string,
    string
  ] & {
    name: string;
    publisherName: string;
    externalLink: string;
    description: string;
    artist: string;
    artistName: string;
    royalty: [number, number];
    editions: number;
    fileHash: string;
    fileType: string;
    thumbnailHash: string;
    thumbnailType: string;
  };
}

export interface MetadataFacetInterface extends utils.Interface {
  functions: {
    "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)": FunctionFragment;
    "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)": FunctionFragment;
    "declineMetadata(uint256,bool)": FunctionFragment;
    "flag(uint256)": FunctionFragment;
    "getMetadata(uint256)": FunctionFragment;
    "isBlocked(address)": FunctionFragment;
    "like(uint256)": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "passReview(uint256)": FunctionFragment;
    "togglePublishingOperator(address,bool)": FunctionFragment;
    "unblockAll()": FunctionFragment;
    "unblockSender(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMetadata"
      | "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)"
      | "addMetadataViaOperator"
      | "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)"
      | "declineMetadata"
      | "declineMetadata(uint256,bool)"
      | "flag"
      | "flag(uint256)"
      | "getMetadata"
      | "getMetadata(uint256)"
      | "isBlocked"
      | "isBlocked(address)"
      | "like"
      | "like(uint256)"
      | "mint"
      | "mint(uint256)"
      | "passReview"
      | "passReview(uint256)"
      | "togglePublishingOperator"
      | "togglePublishingOperator(address,bool)"
      | "unblockAll"
      | "unblockAll()"
      | "unblockSender"
      | "unblockSender(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMetadata",
    values: [MetadataFacet.MetadataInputStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)",
    values: [MetadataFacet.MetadataInputStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMetadataViaOperator",
    values: [
      MetadataFacet.MetadataInputStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)",
    values: [
      MetadataFacet.MetadataInputStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "declineMetadata",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "declineMetadata(uint256,bool)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "flag",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "flag(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetadata",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetadata(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlocked",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlocked(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "like",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "like(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "passReview",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "passReview(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "togglePublishingOperator",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "togglePublishingOperator(address,bool)",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "unblockAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unblockAll()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unblockSender",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unblockSender(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addMetadataViaOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "declineMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "declineMetadata(uint256,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "flag", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "flag(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetadata(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isBlocked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isBlocked(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "like", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "like(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mint(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "passReview", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "passReview(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "togglePublishingOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "togglePublishingOperator(address,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unblockAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unblockAll()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unblockSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unblockSender(address)",
    data: BytesLike
  ): Result;

  events: {
    "MetadataActionLog(uint256,tuple)": EventFragment;
    "MetadataDecline(uint256,address)": EventFragment;
    "MetadataFlag(uint256,address)": EventFragment;
    "MetadataLike(uint256,address)": EventFragment;
    "ReviewPass(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MetadataActionLog"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MetadataActionLog(uint256,tuple)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetadataDecline"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MetadataDecline(uint256,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetadataFlag"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MetadataFlag(uint256,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetadataLike"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MetadataLike(uint256,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReviewPass"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReviewPass(uint256,address)"
  ): EventFragment;
}

export interface MetadataActionLogEventObject {
  id: BigNumber;
  metaData: MetadataStructOutput;
}
export type MetadataActionLogEvent = TypedEvent<
  [BigNumber, MetadataStructOutput],
  MetadataActionLogEventObject
>;

export type MetadataActionLogEventFilter =
  TypedEventFilter<MetadataActionLogEvent>;

export interface MetadataDeclineEventObject {
  _id: BigNumber;
  _declinedBy: string;
}
export type MetadataDeclineEvent = TypedEvent<
  [BigNumber, string],
  MetadataDeclineEventObject
>;

export type MetadataDeclineEventFilter = TypedEventFilter<MetadataDeclineEvent>;

export interface MetadataFlagEventObject {
  _id: BigNumber;
  _flaggedBy: string;
}
export type MetadataFlagEvent = TypedEvent<
  [BigNumber, string],
  MetadataFlagEventObject
>;

export type MetadataFlagEventFilter = TypedEventFilter<MetadataFlagEvent>;

export interface MetadataLikeEventObject {
  _id: BigNumber;
  _likedBy: string;
}
export type MetadataLikeEvent = TypedEvent<
  [BigNumber, string],
  MetadataLikeEventObject
>;

export type MetadataLikeEventFilter = TypedEventFilter<MetadataLikeEvent>;

export interface ReviewPassEventObject {
  _id: BigNumber;
  _reviewer: string;
}
export type ReviewPassEvent = TypedEvent<
  [BigNumber, string],
  ReviewPassEventObject
>;

export type ReviewPassEventFilter = TypedEventFilter<ReviewPassEvent>;

export interface MetadataFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MetadataFacetInterface;

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
    addMetadata(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addMetadataViaOperator(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    declineMetadata(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "declineMetadata(uint256,bool)"(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flag(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "flag(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getMetadata(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[MetadataStructOutput]>;

    "getMetadata(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[MetadataStructOutput]>;

    isBlocked(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isBlocked(address)"(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    like(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "like(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "mint(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    passReview(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "passReview(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    togglePublishingOperator(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "togglePublishingOperator(address,bool)"(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unblockAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "unblockAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unblockSender(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "unblockSender(address)"(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addMetadata(
    mData: MetadataFacet.MetadataInputStruct,
    series: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)"(
    mData: MetadataFacet.MetadataInputStruct,
    series: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addMetadataViaOperator(
    mData: MetadataFacet.MetadataInputStruct,
    series: PromiseOrValue<BigNumberish>,
    _publisher: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)"(
    mData: MetadataFacet.MetadataInputStruct,
    series: PromiseOrValue<BigNumberish>,
    _publisher: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  declineMetadata(
    _id: PromiseOrValue<BigNumberish>,
    isBadFaith: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "declineMetadata(uint256,bool)"(
    _id: PromiseOrValue<BigNumberish>,
    isBadFaith: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flag(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "flag(uint256)"(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getMetadata(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MetadataStructOutput>;

  "getMetadata(uint256)"(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<MetadataStructOutput>;

  isBlocked(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isBlocked(address)"(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  like(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "like(uint256)"(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "mint(uint256)"(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  passReview(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "passReview(uint256)"(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  togglePublishingOperator(
    _operator: PromiseOrValue<string>,
    _whitelist: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "togglePublishingOperator(address,bool)"(
    _operator: PromiseOrValue<string>,
    _whitelist: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unblockAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "unblockAll()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unblockSender(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "unblockSender(address)"(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMetadata(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addMetadataViaOperator(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    declineMetadata(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "declineMetadata(uint256,bool)"(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    flag(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "flag(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getMetadata(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MetadataStructOutput>;

    "getMetadata(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<MetadataStructOutput>;

    isBlocked(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isBlocked(address)"(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    like(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "like(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    passReview(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "passReview(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    togglePublishingOperator(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "togglePublishingOperator(address,bool)"(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    unblockAll(overrides?: CallOverrides): Promise<void>;

    "unblockAll()"(overrides?: CallOverrides): Promise<void>;

    unblockSender(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "unblockSender(address)"(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MetadataActionLog(uint256,tuple)"(
      id?: PromiseOrValue<BigNumberish> | null,
      metaData?: null
    ): MetadataActionLogEventFilter;
    MetadataActionLog(
      id?: PromiseOrValue<BigNumberish> | null,
      metaData?: null
    ): MetadataActionLogEventFilter;

    "MetadataDecline(uint256,address)"(
      _id?: PromiseOrValue<BigNumberish> | null,
      _declinedBy?: null
    ): MetadataDeclineEventFilter;
    MetadataDecline(
      _id?: PromiseOrValue<BigNumberish> | null,
      _declinedBy?: null
    ): MetadataDeclineEventFilter;

    "MetadataFlag(uint256,address)"(
      _id?: PromiseOrValue<BigNumberish> | null,
      _flaggedBy?: null
    ): MetadataFlagEventFilter;
    MetadataFlag(
      _id?: PromiseOrValue<BigNumberish> | null,
      _flaggedBy?: null
    ): MetadataFlagEventFilter;

    "MetadataLike(uint256,address)"(
      _id?: PromiseOrValue<BigNumberish> | null,
      _likedBy?: null
    ): MetadataLikeEventFilter;
    MetadataLike(
      _id?: PromiseOrValue<BigNumberish> | null,
      _likedBy?: null
    ): MetadataLikeEventFilter;

    "ReviewPass(uint256,address)"(
      _id?: PromiseOrValue<BigNumberish> | null,
      _reviewer?: null
    ): ReviewPassEventFilter;
    ReviewPass(
      _id?: PromiseOrValue<BigNumberish> | null,
      _reviewer?: null
    ): ReviewPassEventFilter;
  };

  estimateGas: {
    addMetadata(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addMetadataViaOperator(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    declineMetadata(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "declineMetadata(uint256,bool)"(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flag(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "flag(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getMetadata(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMetadata(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBlocked(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isBlocked(address)"(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    like(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "like(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "mint(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    passReview(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "passReview(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    togglePublishingOperator(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "togglePublishingOperator(address,bool)"(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unblockAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "unblockAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unblockSender(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "unblockSender(address)"(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMetadata(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addMetadata((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addMetadataViaOperator(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addMetadataViaOperator((string,string,string,string,address,string,uint16[2],uint16,string,string,string,string),uint256,address)"(
      mData: MetadataFacet.MetadataInputStruct,
      series: PromiseOrValue<BigNumberish>,
      _publisher: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    declineMetadata(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "declineMetadata(uint256,bool)"(
      _id: PromiseOrValue<BigNumberish>,
      isBadFaith: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flag(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "flag(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getMetadata(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMetadata(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBlocked(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBlocked(address)"(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    like(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "like(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "mint(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    passReview(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "passReview(uint256)"(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    togglePublishingOperator(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "togglePublishingOperator(address,bool)"(
      _operator: PromiseOrValue<string>,
      _whitelist: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unblockAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "unblockAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unblockSender(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "unblockSender(address)"(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
