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

export type UpgradeQueueStruct = {
  owner: PromiseOrValue<string>;
  coordinateX: PromiseOrValue<BigNumberish>;
  coordinateY: PromiseOrValue<BigNumberish>;
  readyBlock: PromiseOrValue<BigNumberish>;
  claimed: PromiseOrValue<boolean>;
  parcelId: PromiseOrValue<BigNumberish>;
  installationId: PromiseOrValue<BigNumberish>;
};

export type UpgradeQueueStructOutput = [
  string,
  number,
  number,
  number,
  boolean,
  BigNumber,
  BigNumber
] & {
  owner: string;
  coordinateX: number;
  coordinateY: number;
  readyBlock: number;
  claimed: boolean;
  parcelId: BigNumber;
  installationId: BigNumber;
};

export interface InstallationUpgradeFacetInterface extends utils.Interface {
  functions: {
    "finalizeUpgrades(uint256[])": FunctionFragment;
    "getAllUpgradeQueue()": FunctionFragment;
    "getParcelUpgradeQueue(uint256)": FunctionFragment;
    "getUpgradeQueueId(uint256)": FunctionFragment;
    "getUpgradeQueueLength()": FunctionFragment;
    "getUserUpgradeQueue(address)": FunctionFragment;
    "getUserUpgradeQueueNew(address)": FunctionFragment;
    "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)": FunctionFragment;
    "parcelQueueEmpty(uint256)": FunctionFragment;
    "reduceUpgradeTime(uint256,uint256,uint40,bytes)": FunctionFragment;
    "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "finalizeUpgrades"
      | "finalizeUpgrades(uint256[])"
      | "getAllUpgradeQueue"
      | "getAllUpgradeQueue()"
      | "getParcelUpgradeQueue"
      | "getParcelUpgradeQueue(uint256)"
      | "getUpgradeQueueId"
      | "getUpgradeQueueId(uint256)"
      | "getUpgradeQueueLength"
      | "getUpgradeQueueLength()"
      | "getUserUpgradeQueue"
      | "getUserUpgradeQueue(address)"
      | "getUserUpgradeQueueNew"
      | "getUserUpgradeQueueNew(address)"
      | "parcelInstallationUpgrading"
      | "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)"
      | "parcelQueueEmpty"
      | "parcelQueueEmpty(uint256)"
      | "reduceUpgradeTime"
      | "reduceUpgradeTime(uint256,uint256,uint40,bytes)"
      | "upgradeInstallation"
      | "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "finalizeUpgrades",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeUpgrades(uint256[])",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllUpgradeQueue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllUpgradeQueue()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getParcelUpgradeQueue",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParcelUpgradeQueue(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpgradeQueueId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpgradeQueueId(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpgradeQueueLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUpgradeQueueLength()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUpgradeQueue",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUpgradeQueue(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUpgradeQueueNew",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserUpgradeQueueNew(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "parcelInstallationUpgrading",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "parcelQueueEmpty",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "parcelQueueEmpty(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "reduceUpgradeTime",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reduceUpgradeTime(uint256,uint256,uint40,bytes)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeInstallation",
    values: [
      UpgradeQueueStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)",
    values: [
      UpgradeQueueStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "finalizeUpgrades",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeUpgrades(uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllUpgradeQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllUpgradeQueue()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParcelUpgradeQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParcelUpgradeQueue(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpgradeQueueId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpgradeQueueId(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpgradeQueueLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpgradeQueueLength()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUpgradeQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUpgradeQueue(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUpgradeQueueNew",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserUpgradeQueueNew(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parcelInstallationUpgrading",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parcelQueueEmpty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parcelQueueEmpty(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reduceUpgradeTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reduceUpgradeTime(uint256,uint256,uint40,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeInstallation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)",
    data: BytesLike
  ): Result;

  events: {
    "UpgradeTimeReduced(uint256,uint256,uint256,uint256,uint40)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpgradeTimeReduced"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UpgradeTimeReduced(uint256,uint256,uint256,uint256,uint40)"
  ): EventFragment;
}

export interface UpgradeTimeReducedEventObject {
  _queueId: BigNumber;
  _realmId: BigNumber;
  _coordinateX: BigNumber;
  _coordinateY: BigNumber;
  _blocksReduced: number;
}
export type UpgradeTimeReducedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, number],
  UpgradeTimeReducedEventObject
>;

export type UpgradeTimeReducedEventFilter =
  TypedEventFilter<UpgradeTimeReducedEvent>;

export interface InstallationUpgradeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InstallationUpgradeFacetInterface;

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
    finalizeUpgrades(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "finalizeUpgrades(uint256[])"(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllUpgradeQueue(
      overrides?: CallOverrides
    ): Promise<[UpgradeQueueStructOutput[]]>;

    "getAllUpgradeQueue()"(
      overrides?: CallOverrides
    ): Promise<[UpgradeQueueStructOutput[]]>;

    getParcelUpgradeQueue(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    "getParcelUpgradeQueue(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    getUpgradeQueueId(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[UpgradeQueueStructOutput]>;

    "getUpgradeQueueId(uint256)"(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[UpgradeQueueStructOutput]>;

    getUpgradeQueueLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getUpgradeQueueLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserUpgradeQueue(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    "getUserUpgradeQueue(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    getUserUpgradeQueueNew(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    "getUserUpgradeQueueNew(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    parcelInstallationUpgrading(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    parcelQueueEmpty(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "parcelQueueEmpty(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    reduceUpgradeTime(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "reduceUpgradeTime(uint256,uint256,uint40,bytes)"(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeInstallation(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)"(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  finalizeUpgrades(
    _upgradeIndexes: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "finalizeUpgrades(uint256[])"(
    _upgradeIndexes: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllUpgradeQueue(
    overrides?: CallOverrides
  ): Promise<UpgradeQueueStructOutput[]>;

  "getAllUpgradeQueue()"(
    overrides?: CallOverrides
  ): Promise<UpgradeQueueStructOutput[]>;

  getParcelUpgradeQueue(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [UpgradeQueueStructOutput[], BigNumber[]] & {
      output_: UpgradeQueueStructOutput[];
      indexes_: BigNumber[];
    }
  >;

  "getParcelUpgradeQueue(uint256)"(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [UpgradeQueueStructOutput[], BigNumber[]] & {
      output_: UpgradeQueueStructOutput[];
      indexes_: BigNumber[];
    }
  >;

  getUpgradeQueueId(
    _queueId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<UpgradeQueueStructOutput>;

  "getUpgradeQueueId(uint256)"(
    _queueId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<UpgradeQueueStructOutput>;

  getUpgradeQueueLength(overrides?: CallOverrides): Promise<BigNumber>;

  "getUpgradeQueueLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  getUserUpgradeQueue(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [UpgradeQueueStructOutput[], BigNumber[]] & {
      output_: UpgradeQueueStructOutput[];
      indexes_: BigNumber[];
    }
  >;

  "getUserUpgradeQueue(address)"(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [UpgradeQueueStructOutput[], BigNumber[]] & {
      output_: UpgradeQueueStructOutput[];
      indexes_: BigNumber[];
    }
  >;

  getUserUpgradeQueueNew(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [UpgradeQueueStructOutput[], BigNumber[]] & {
      output_: UpgradeQueueStructOutput[];
      indexes_: BigNumber[];
    }
  >;

  "getUserUpgradeQueueNew(address)"(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [UpgradeQueueStructOutput[], BigNumber[]] & {
      output_: UpgradeQueueStructOutput[];
      indexes_: BigNumber[];
    }
  >;

  parcelInstallationUpgrading(
    _parcelId: PromiseOrValue<BigNumberish>,
    _installationId: PromiseOrValue<BigNumberish>,
    _x: PromiseOrValue<BigNumberish>,
    _y: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)"(
    _parcelId: PromiseOrValue<BigNumberish>,
    _installationId: PromiseOrValue<BigNumberish>,
    _x: PromiseOrValue<BigNumberish>,
    _y: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  parcelQueueEmpty(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "parcelQueueEmpty(uint256)"(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  reduceUpgradeTime(
    _upgradeIndex: PromiseOrValue<BigNumberish>,
    _gotchiId: PromiseOrValue<BigNumberish>,
    _blocks: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "reduceUpgradeTime(uint256,uint256,uint40,bytes)"(
    _upgradeIndex: PromiseOrValue<BigNumberish>,
    _gotchiId: PromiseOrValue<BigNumberish>,
    _blocks: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeInstallation(
    _upgradeQueue: UpgradeQueueStruct,
    _gotchiId: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    _gltr: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)"(
    _upgradeQueue: UpgradeQueueStruct,
    _gotchiId: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    _gltr: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    finalizeUpgrades(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "finalizeUpgrades(uint256[])"(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAllUpgradeQueue(
      overrides?: CallOverrides
    ): Promise<UpgradeQueueStructOutput[]>;

    "getAllUpgradeQueue()"(
      overrides?: CallOverrides
    ): Promise<UpgradeQueueStructOutput[]>;

    getParcelUpgradeQueue(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    "getParcelUpgradeQueue(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    getUpgradeQueueId(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<UpgradeQueueStructOutput>;

    "getUpgradeQueueId(uint256)"(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<UpgradeQueueStructOutput>;

    getUpgradeQueueLength(overrides?: CallOverrides): Promise<BigNumber>;

    "getUpgradeQueueLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    getUserUpgradeQueue(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    "getUserUpgradeQueue(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    getUserUpgradeQueueNew(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    "getUserUpgradeQueueNew(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [UpgradeQueueStructOutput[], BigNumber[]] & {
        output_: UpgradeQueueStructOutput[];
        indexes_: BigNumber[];
      }
    >;

    parcelInstallationUpgrading(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    parcelQueueEmpty(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "parcelQueueEmpty(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    reduceUpgradeTime(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "reduceUpgradeTime(uint256,uint256,uint40,bytes)"(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeInstallation(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)"(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "UpgradeTimeReduced(uint256,uint256,uint256,uint256,uint40)"(
      _queueId?: PromiseOrValue<BigNumberish> | null,
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _coordinateX?: null,
      _coordinateY?: null,
      _blocksReduced?: null
    ): UpgradeTimeReducedEventFilter;
    UpgradeTimeReduced(
      _queueId?: PromiseOrValue<BigNumberish> | null,
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _coordinateX?: null,
      _coordinateY?: null,
      _blocksReduced?: null
    ): UpgradeTimeReducedEventFilter;
  };

  estimateGas: {
    finalizeUpgrades(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "finalizeUpgrades(uint256[])"(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllUpgradeQueue(overrides?: CallOverrides): Promise<BigNumber>;

    "getAllUpgradeQueue()"(overrides?: CallOverrides): Promise<BigNumber>;

    getParcelUpgradeQueue(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParcelUpgradeQueue(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpgradeQueueId(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUpgradeQueueId(uint256)"(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpgradeQueueLength(overrides?: CallOverrides): Promise<BigNumber>;

    "getUpgradeQueueLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    getUserUpgradeQueue(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserUpgradeQueue(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserUpgradeQueueNew(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserUpgradeQueueNew(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parcelInstallationUpgrading(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parcelQueueEmpty(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "parcelQueueEmpty(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reduceUpgradeTime(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "reduceUpgradeTime(uint256,uint256,uint40,bytes)"(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeInstallation(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)"(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    finalizeUpgrades(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "finalizeUpgrades(uint256[])"(
      _upgradeIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllUpgradeQueue(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAllUpgradeQueue()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParcelUpgradeQueue(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParcelUpgradeQueue(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUpgradeQueueId(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUpgradeQueueId(uint256)"(
      _queueId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUpgradeQueueLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUpgradeQueueLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserUpgradeQueue(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserUpgradeQueue(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserUpgradeQueueNew(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserUpgradeQueueNew(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parcelInstallationUpgrading(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "parcelInstallationUpgrading(uint256,uint256,uint256,uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      _x: PromiseOrValue<BigNumberish>,
      _y: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parcelQueueEmpty(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "parcelQueueEmpty(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reduceUpgradeTime(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "reduceUpgradeTime(uint256,uint256,uint40,bytes)"(
      _upgradeIndex: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _blocks: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeInstallation(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "upgradeInstallation((address,uint16,uint16,uint40,bool,uint256,uint256),uint256,bytes,uint40)"(
      _upgradeQueue: UpgradeQueueStruct,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      _gltr: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
