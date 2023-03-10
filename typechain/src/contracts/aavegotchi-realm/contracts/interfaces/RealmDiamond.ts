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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../common";

export interface RealmDiamondInterface extends utils.Interface {
  functions: {
    "addUpgradeQueueLength(uint256)": FunctionFragment;
    "checkCoordinates(uint256,uint256,uint256,uint256)": FunctionFragment;
    "getAlchemicaAddresses()": FunctionFragment;
    "getAltarId(uint256)": FunctionFragment;
    "getParcelUpgradeQueueCapacity(uint256)": FunctionFragment;
    "getParcelUpgradeQueueLength(uint256)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "subUpgradeQueueLength(uint256)": FunctionFragment;
    "tokenIdsOfOwner(address)": FunctionFragment;
    "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "verifyAccessRight(uint256,uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addUpgradeQueueLength"
      | "addUpgradeQueueLength(uint256)"
      | "checkCoordinates"
      | "checkCoordinates(uint256,uint256,uint256,uint256)"
      | "getAlchemicaAddresses"
      | "getAlchemicaAddresses()"
      | "getAltarId"
      | "getAltarId(uint256)"
      | "getParcelUpgradeQueueCapacity"
      | "getParcelUpgradeQueueCapacity(uint256)"
      | "getParcelUpgradeQueueLength"
      | "getParcelUpgradeQueueLength(uint256)"
      | "ownerOf"
      | "ownerOf(uint256)"
      | "subUpgradeQueueLength"
      | "subUpgradeQueueLength(uint256)"
      | "tokenIdsOfOwner"
      | "tokenIdsOfOwner(address)"
      | "upgradeInstallation"
      | "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)"
      | "verifyAccessRight"
      | "verifyAccessRight(uint256,uint256,uint256,address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addUpgradeQueueLength",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addUpgradeQueueLength(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkCoordinates",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkCoordinates(uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAlchemicaAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAlchemicaAddresses()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAltarId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAltarId(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParcelUpgradeQueueCapacity",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParcelUpgradeQueueCapacity(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParcelUpgradeQueueLength",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getParcelUpgradeQueueLength(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "subUpgradeQueueLength",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "subUpgradeQueueLength(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenIdsOfOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenIdsOfOwner(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeInstallation",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccessRight",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyAccessRight(uint256,uint256,uint256,address)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addUpgradeQueueLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUpgradeQueueLength(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkCoordinates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkCoordinates(uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAlchemicaAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAlchemicaAddresses()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAltarId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAltarId(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParcelUpgradeQueueCapacity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParcelUpgradeQueueCapacity(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParcelUpgradeQueueLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getParcelUpgradeQueueLength(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerOf(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subUpgradeQueueLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subUpgradeQueueLength(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenIdsOfOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenIdsOfOwner(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeInstallation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAccessRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyAccessRight(uint256,uint256,uint256,address)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RealmDiamond extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RealmDiamondInterface;

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
    addUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "addUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkCoordinates(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkCoordinates(uint256,uint256,uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    getAlchemicaAddresses(
      overrides?: CallOverrides
    ): Promise<[[string, string, string, string]]>;

    "getAlchemicaAddresses()"(
      overrides?: CallOverrides
    ): Promise<[[string, string, string, string]]>;

    getAltarId(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getAltarId(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getParcelUpgradeQueueCapacity(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getParcelUpgradeQueueCapacity(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getParcelUpgradeQueueLength(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getParcelUpgradeQueueLength(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { owner_: string }>;

    "ownerOf(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { owner_: string }>;

    subUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "subUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenIdsOfOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { tokenIds_: BigNumber[] }>;

    "tokenIdsOfOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { tokenIds_: BigNumber[] }>;

    upgradeInstallation(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyAccessRight(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "verifyAccessRight(uint256,uint256,uint256,address)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  addUpgradeQueueLength(
    _realmId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "addUpgradeQueueLength(uint256)"(
    _realmId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkCoordinates(
    _tokenId: PromiseOrValue<BigNumberish>,
    _coordinateX: PromiseOrValue<BigNumberish>,
    _coordinateY: PromiseOrValue<BigNumberish>,
    _installationId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkCoordinates(uint256,uint256,uint256,uint256)"(
    _tokenId: PromiseOrValue<BigNumberish>,
    _coordinateX: PromiseOrValue<BigNumberish>,
    _coordinateY: PromiseOrValue<BigNumberish>,
    _installationId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  getAlchemicaAddresses(
    overrides?: CallOverrides
  ): Promise<[string, string, string, string]>;

  "getAlchemicaAddresses()"(
    overrides?: CallOverrides
  ): Promise<[string, string, string, string]>;

  getAltarId(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAltarId(uint256)"(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getParcelUpgradeQueueCapacity(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getParcelUpgradeQueueCapacity(uint256)"(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getParcelUpgradeQueueLength(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getParcelUpgradeQueueLength(uint256)"(
    _parcelId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownerOf(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "ownerOf(uint256)"(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  subUpgradeQueueLength(
    _realmId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "subUpgradeQueueLength(uint256)"(
    _realmId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenIdsOfOwner(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "tokenIdsOfOwner(address)"(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  upgradeInstallation(
    _realmId: PromiseOrValue<BigNumberish>,
    _prevInstallationId: PromiseOrValue<BigNumberish>,
    _nextInstallationId: PromiseOrValue<BigNumberish>,
    _coordinateX: PromiseOrValue<BigNumberish>,
    _coordinateY: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)"(
    _realmId: PromiseOrValue<BigNumberish>,
    _prevInstallationId: PromiseOrValue<BigNumberish>,
    _nextInstallationId: PromiseOrValue<BigNumberish>,
    _coordinateX: PromiseOrValue<BigNumberish>,
    _coordinateY: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyAccessRight(
    _realmId: PromiseOrValue<BigNumberish>,
    _gotchiId: PromiseOrValue<BigNumberish>,
    _actionRight: PromiseOrValue<BigNumberish>,
    _sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<void>;

  "verifyAccessRight(uint256,uint256,uint256,address)"(
    _realmId: PromiseOrValue<BigNumberish>,
    _gotchiId: PromiseOrValue<BigNumberish>,
    _actionRight: PromiseOrValue<BigNumberish>,
    _sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    addUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "addUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checkCoordinates(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkCoordinates(uint256,uint256,uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAlchemicaAddresses(
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    "getAlchemicaAddresses()"(
      overrides?: CallOverrides
    ): Promise<[string, string, string, string]>;

    getAltarId(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAltarId(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParcelUpgradeQueueCapacity(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParcelUpgradeQueueCapacity(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParcelUpgradeQueueLength(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParcelUpgradeQueueLength(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "ownerOf(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    subUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "subUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenIdsOfOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "tokenIdsOfOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    upgradeInstallation(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyAccessRight(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "verifyAccessRight(uint256,uint256,uint256,address)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "addUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkCoordinates(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkCoordinates(uint256,uint256,uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAlchemicaAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    "getAlchemicaAddresses()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAltarId(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAltarId(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParcelUpgradeQueueCapacity(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParcelUpgradeQueueCapacity(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParcelUpgradeQueueLength(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParcelUpgradeQueueLength(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ownerOf(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "subUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenIdsOfOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenIdsOfOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeInstallation(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyAccessRight(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyAccessRight(uint256,uint256,uint256,address)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "addUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkCoordinates(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkCoordinates(uint256,uint256,uint256,uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      _installationId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAlchemicaAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAlchemicaAddresses()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAltarId(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAltarId(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParcelUpgradeQueueCapacity(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParcelUpgradeQueueCapacity(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParcelUpgradeQueueLength(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParcelUpgradeQueueLength(uint256)"(
      _parcelId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerOf(uint256)"(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subUpgradeQueueLength(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "subUpgradeQueueLength(uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenIdsOfOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenIdsOfOwner(address)"(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradeInstallation(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "upgradeInstallation(uint256,uint256,uint256,uint256,uint256)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _prevInstallationId: PromiseOrValue<BigNumberish>,
      _nextInstallationId: PromiseOrValue<BigNumberish>,
      _coordinateX: PromiseOrValue<BigNumberish>,
      _coordinateY: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyAccessRight(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyAccessRight(uint256,uint256,uint256,address)"(
      _realmId: PromiseOrValue<BigNumberish>,
      _gotchiId: PromiseOrValue<BigNumberish>,
      _actionRight: PromiseOrValue<BigNumberish>,
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
