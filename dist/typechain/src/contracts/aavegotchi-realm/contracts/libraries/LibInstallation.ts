/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface LibInstallationInterface extends utils.Interface {
  functions: {};

  events: {
    "UpgradeFinalized(uint256,uint256,uint256,uint256)": EventFragment;
    "UpgradeInitiated(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "UpgradeQueueFinalized(address,uint256,uint256)": EventFragment;
    "UpgradeQueued(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpgradeFinalized"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UpgradeFinalized(uint256,uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpgradeInitiated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UpgradeInitiated(uint256,uint256,uint256,uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpgradeQueueFinalized"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UpgradeQueueFinalized(address,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpgradeQueued"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "UpgradeQueued(address,uint256,uint256)"
  ): EventFragment;
}

export interface UpgradeFinalizedEventObject {
  _realmId: BigNumber;
  _coordinateX: BigNumber;
  _coordinateY: BigNumber;
  _newInstallationId: BigNumber;
}
export type UpgradeFinalizedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  UpgradeFinalizedEventObject
>;

export type UpgradeFinalizedEventFilter =
  TypedEventFilter<UpgradeFinalizedEvent>;

export interface UpgradeInitiatedEventObject {
  _realmId: BigNumber;
  _coordinateX: BigNumber;
  _coordinateY: BigNumber;
  blockInitiated: BigNumber;
  readyBlock: BigNumber;
  installationId: BigNumber;
}
export type UpgradeInitiatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  UpgradeInitiatedEventObject
>;

export type UpgradeInitiatedEventFilter =
  TypedEventFilter<UpgradeInitiatedEvent>;

export interface UpgradeQueueFinalizedEventObject {
  _owner: string;
  _realmId: BigNumber;
  _queueIndex: BigNumber;
}
export type UpgradeQueueFinalizedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  UpgradeQueueFinalizedEventObject
>;

export type UpgradeQueueFinalizedEventFilter =
  TypedEventFilter<UpgradeQueueFinalizedEvent>;

export interface UpgradeQueuedEventObject {
  _owner: string;
  _realmId: BigNumber;
  _queueIndex: BigNumber;
}
export type UpgradeQueuedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  UpgradeQueuedEventObject
>;

export type UpgradeQueuedEventFilter = TypedEventFilter<UpgradeQueuedEvent>;

export interface LibInstallation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibInstallationInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "UpgradeFinalized(uint256,uint256,uint256,uint256)"(
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _coordinateX?: null,
      _coordinateY?: null,
      _newInstallationId?: null
    ): UpgradeFinalizedEventFilter;
    UpgradeFinalized(
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _coordinateX?: null,
      _coordinateY?: null,
      _newInstallationId?: null
    ): UpgradeFinalizedEventFilter;

    "UpgradeInitiated(uint256,uint256,uint256,uint256,uint256,uint256)"(
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _coordinateX?: null,
      _coordinateY?: null,
      blockInitiated?: null,
      readyBlock?: null,
      installationId?: null
    ): UpgradeInitiatedEventFilter;
    UpgradeInitiated(
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _coordinateX?: null,
      _coordinateY?: null,
      blockInitiated?: null,
      readyBlock?: null,
      installationId?: null
    ): UpgradeInitiatedEventFilter;

    "UpgradeQueueFinalized(address,uint256,uint256)"(
      _owner?: PromiseOrValue<string> | null,
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _queueIndex?: PromiseOrValue<BigNumberish> | null
    ): UpgradeQueueFinalizedEventFilter;
    UpgradeQueueFinalized(
      _owner?: PromiseOrValue<string> | null,
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _queueIndex?: PromiseOrValue<BigNumberish> | null
    ): UpgradeQueueFinalizedEventFilter;

    "UpgradeQueued(address,uint256,uint256)"(
      _owner?: PromiseOrValue<string> | null,
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _queueIndex?: PromiseOrValue<BigNumberish> | null
    ): UpgradeQueuedEventFilter;
    UpgradeQueued(
      _owner?: PromiseOrValue<string> | null,
      _realmId?: PromiseOrValue<BigNumberish> | null,
      _queueIndex?: PromiseOrValue<BigNumberish> | null
    ): UpgradeQueuedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
