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

export type AavegotchiCollateralTypeInfoStruct = {
  modifiers: PromiseOrValue<BigNumberish>[];
  primaryColor: PromiseOrValue<BytesLike>;
  secondaryColor: PromiseOrValue<BytesLike>;
  cheekColor: PromiseOrValue<BytesLike>;
  svgId: PromiseOrValue<BigNumberish>;
  eyeShapeSvgId: PromiseOrValue<BigNumberish>;
  conversionRate: PromiseOrValue<BigNumberish>;
  delisted: PromiseOrValue<boolean>;
};

export type AavegotchiCollateralTypeInfoStructOutput = [
  number[],
  string,
  string,
  string,
  number,
  number,
  number,
  boolean
] & {
  modifiers: number[];
  primaryColor: string;
  secondaryColor: string;
  cheekColor: string;
  svgId: number;
  eyeShapeSvgId: number;
  conversionRate: number;
  delisted: boolean;
};

export type AavegotchiCollateralTypeIOStruct = {
  collateralType: PromiseOrValue<string>;
  collateralTypeInfo: AavegotchiCollateralTypeInfoStruct;
};

export type AavegotchiCollateralTypeIOStructOutput = [
  string,
  AavegotchiCollateralTypeInfoStructOutput
] & {
  collateralType: string;
  collateralTypeInfo: AavegotchiCollateralTypeInfoStructOutput;
};

export interface CollateralFacetInterface extends utils.Interface {
  functions: {
    "collateralBalance(uint256)": FunctionFragment;
    "collateralInfo(uint256,uint256)": FunctionFragment;
    "collaterals(uint256)": FunctionFragment;
    "decreaseAndDestroy(uint256,uint256)": FunctionFragment;
    "decreaseStake(uint256,uint256)": FunctionFragment;
    "getAllCollateralTypes()": FunctionFragment;
    "getCollateralInfo(uint256)": FunctionFragment;
    "increaseStake(uint256,uint256)": FunctionFragment;
    "setCollateralEyeShapeSvgId(address,uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "collateralBalance"
      | "collateralBalance(uint256)"
      | "collateralInfo"
      | "collateralInfo(uint256,uint256)"
      | "collaterals"
      | "collaterals(uint256)"
      | "decreaseAndDestroy"
      | "decreaseAndDestroy(uint256,uint256)"
      | "decreaseStake"
      | "decreaseStake(uint256,uint256)"
      | "getAllCollateralTypes"
      | "getAllCollateralTypes()"
      | "getCollateralInfo"
      | "getCollateralInfo(uint256)"
      | "increaseStake"
      | "increaseStake(uint256,uint256)"
      | "setCollateralEyeShapeSvgId"
      | "setCollateralEyeShapeSvgId(address,uint8)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "collateralBalance",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralBalance(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralInfo(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collaterals",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collaterals(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAndDestroy",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAndDestroy(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseStake",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseStake(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCollateralTypes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCollateralTypes()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralInfo(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseStake",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseStake(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCollateralEyeShapeSvgId",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCollateralEyeShapeSvgId(address,uint8)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "collateralBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralBalance(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralInfo(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collaterals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collaterals(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAndDestroy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAndDestroy(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseStake(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCollateralTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCollateralTypes()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralInfo(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseStake(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollateralEyeShapeSvgId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCollateralEyeShapeSvgId(address,uint8)",
    data: BytesLike
  ): Result;

  events: {
    "DecreaseStake(uint256,uint256)": EventFragment;
    "ExperienceTransfer(uint256,uint256,uint256)": EventFragment;
    "IncreaseStake(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DecreaseStake"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DecreaseStake(uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExperienceTransfer"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ExperienceTransfer(uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseStake"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "IncreaseStake(uint256,uint256)"
  ): EventFragment;
}

export interface DecreaseStakeEventObject {
  _tokenId: BigNumber;
  _reduceAmount: BigNumber;
}
export type DecreaseStakeEvent = TypedEvent<
  [BigNumber, BigNumber],
  DecreaseStakeEventObject
>;

export type DecreaseStakeEventFilter = TypedEventFilter<DecreaseStakeEvent>;

export interface ExperienceTransferEventObject {
  _fromTokenId: BigNumber;
  _toTokenId: BigNumber;
  experience: BigNumber;
}
export type ExperienceTransferEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  ExperienceTransferEventObject
>;

export type ExperienceTransferEventFilter =
  TypedEventFilter<ExperienceTransferEvent>;

export interface IncreaseStakeEventObject {
  _tokenId: BigNumber;
  _stakeAmount: BigNumber;
}
export type IncreaseStakeEvent = TypedEvent<
  [BigNumber, BigNumber],
  IncreaseStakeEventObject
>;

export type IncreaseStakeEventFilter = TypedEventFilter<IncreaseStakeEvent>;

export interface CollateralFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CollateralFacetInterface;

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
    collateralBalance(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        collateralType_: string;
        escrow_: string;
        balance_: BigNumber;
      }
    >;

    "collateralBalance(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        collateralType_: string;
        escrow_: string;
        balance_: BigNumber;
      }
    >;

    collateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [AavegotchiCollateralTypeIOStructOutput] & {
        collateralInfo_: AavegotchiCollateralTypeIOStructOutput;
      }
    >;

    "collateralInfo(uint256,uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [AavegotchiCollateralTypeIOStructOutput] & {
        collateralInfo_: AavegotchiCollateralTypeIOStructOutput;
      }
    >;

    collaterals(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { collateralTypes_: string[] }>;

    "collaterals(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { collateralTypes_: string[] }>;

    decreaseAndDestroy(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "decreaseAndDestroy(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    decreaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "decreaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllCollateralTypes(overrides?: CallOverrides): Promise<[string[]]>;

    "getAllCollateralTypes()"(overrides?: CallOverrides): Promise<[string[]]>;

    getCollateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [AavegotchiCollateralTypeIOStructOutput[]] & {
        collateralInfo_: AavegotchiCollateralTypeIOStructOutput[];
      }
    >;

    "getCollateralInfo(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [AavegotchiCollateralTypeIOStructOutput[]] & {
        collateralInfo_: AavegotchiCollateralTypeIOStructOutput[];
      }
    >;

    increaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "increaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCollateralEyeShapeSvgId(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setCollateralEyeShapeSvgId(address,uint8)"(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  collateralBalance(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      collateralType_: string;
      escrow_: string;
      balance_: BigNumber;
    }
  >;

  "collateralBalance(uint256)"(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      collateralType_: string;
      escrow_: string;
      balance_: BigNumber;
    }
  >;

  collateralInfo(
    _hauntId: PromiseOrValue<BigNumberish>,
    _collateralId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<AavegotchiCollateralTypeIOStructOutput>;

  "collateralInfo(uint256,uint256)"(
    _hauntId: PromiseOrValue<BigNumberish>,
    _collateralId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<AavegotchiCollateralTypeIOStructOutput>;

  collaterals(
    _hauntId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "collaterals(uint256)"(
    _hauntId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  decreaseAndDestroy(
    _tokenId: PromiseOrValue<BigNumberish>,
    _toId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "decreaseAndDestroy(uint256,uint256)"(
    _tokenId: PromiseOrValue<BigNumberish>,
    _toId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  decreaseStake(
    _tokenId: PromiseOrValue<BigNumberish>,
    _reduceAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "decreaseStake(uint256,uint256)"(
    _tokenId: PromiseOrValue<BigNumberish>,
    _reduceAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllCollateralTypes(overrides?: CallOverrides): Promise<string[]>;

  "getAllCollateralTypes()"(overrides?: CallOverrides): Promise<string[]>;

  getCollateralInfo(
    _hauntId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<AavegotchiCollateralTypeIOStructOutput[]>;

  "getCollateralInfo(uint256)"(
    _hauntId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<AavegotchiCollateralTypeIOStructOutput[]>;

  increaseStake(
    _tokenId: PromiseOrValue<BigNumberish>,
    _stakeAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "increaseStake(uint256,uint256)"(
    _tokenId: PromiseOrValue<BigNumberish>,
    _stakeAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCollateralEyeShapeSvgId(
    _collateralToken: PromiseOrValue<string>,
    _svgId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setCollateralEyeShapeSvgId(address,uint8)"(
    _collateralToken: PromiseOrValue<string>,
    _svgId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    collateralBalance(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        collateralType_: string;
        escrow_: string;
        balance_: BigNumber;
      }
    >;

    "collateralBalance(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        collateralType_: string;
        escrow_: string;
        balance_: BigNumber;
      }
    >;

    collateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<AavegotchiCollateralTypeIOStructOutput>;

    "collateralInfo(uint256,uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<AavegotchiCollateralTypeIOStructOutput>;

    collaterals(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "collaterals(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    decreaseAndDestroy(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "decreaseAndDestroy(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    decreaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "decreaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllCollateralTypes(overrides?: CallOverrides): Promise<string[]>;

    "getAllCollateralTypes()"(overrides?: CallOverrides): Promise<string[]>;

    getCollateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<AavegotchiCollateralTypeIOStructOutput[]>;

    "getCollateralInfo(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<AavegotchiCollateralTypeIOStructOutput[]>;

    increaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "increaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCollateralEyeShapeSvgId(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCollateralEyeShapeSvgId(address,uint8)"(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DecreaseStake(uint256,uint256)"(
      _tokenId?: PromiseOrValue<BigNumberish> | null,
      _reduceAmount?: null
    ): DecreaseStakeEventFilter;
    DecreaseStake(
      _tokenId?: PromiseOrValue<BigNumberish> | null,
      _reduceAmount?: null
    ): DecreaseStakeEventFilter;

    "ExperienceTransfer(uint256,uint256,uint256)"(
      _fromTokenId?: PromiseOrValue<BigNumberish> | null,
      _toTokenId?: PromiseOrValue<BigNumberish> | null,
      experience?: null
    ): ExperienceTransferEventFilter;
    ExperienceTransfer(
      _fromTokenId?: PromiseOrValue<BigNumberish> | null,
      _toTokenId?: PromiseOrValue<BigNumberish> | null,
      experience?: null
    ): ExperienceTransferEventFilter;

    "IncreaseStake(uint256,uint256)"(
      _tokenId?: PromiseOrValue<BigNumberish> | null,
      _stakeAmount?: null
    ): IncreaseStakeEventFilter;
    IncreaseStake(
      _tokenId?: PromiseOrValue<BigNumberish> | null,
      _stakeAmount?: null
    ): IncreaseStakeEventFilter;
  };

  estimateGas: {
    collateralBalance(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateralBalance(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collateralInfo(uint256,uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collaterals(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "collaterals(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decreaseAndDestroy(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "decreaseAndDestroy(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    decreaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "decreaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllCollateralTypes(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllCollateralTypes()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCollateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateralInfo(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "increaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCollateralEyeShapeSvgId(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setCollateralEyeShapeSvgId(address,uint8)"(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collateralBalance(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralBalance(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collateralInfo(uint256,uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      _collateralId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collaterals(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "collaterals(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreaseAndDestroy(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "decreaseAndDestroy(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _toId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    decreaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "decreaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _reduceAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllCollateralTypes(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllCollateralTypes()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralInfo(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollateralInfo(uint256)"(
      _hauntId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseStake(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "increaseStake(uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCollateralEyeShapeSvgId(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setCollateralEyeShapeSvgId(address,uint8)"(
      _collateralToken: PromiseOrValue<string>,
      _svgId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
