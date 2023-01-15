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

export interface ShopFacetInterface extends utils.Interface {
  functions: {
    "buyPortals(address,uint256)": FunctionFragment;
    "mintPortals(address,uint256)": FunctionFragment;
    "purchaseItemsWithGhst(address,uint256[],uint256[])": FunctionFragment;
    "purchaseTransferItemsWithGhst(address,uint256[],uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyPortals"
      | "buyPortals(address,uint256)"
      | "mintPortals"
      | "mintPortals(address,uint256)"
      | "purchaseItemsWithGhst"
      | "purchaseItemsWithGhst(address,uint256[],uint256[])"
      | "purchaseTransferItemsWithGhst"
      | "purchaseTransferItemsWithGhst(address,uint256[],uint256[])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyPortals",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "buyPortals(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintPortals",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintPortals(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseItemsWithGhst",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseItemsWithGhst(address,uint256[],uint256[])",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseTransferItemsWithGhst",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "purchaseTransferItemsWithGhst(address,uint256[],uint256[])",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "buyPortals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyPortals(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintPortals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintPortals(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseItemsWithGhst",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseItemsWithGhst(address,uint256[],uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseTransferItemsWithGhst",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "purchaseTransferItemsWithGhst(address,uint256[],uint256[])",
    data: BytesLike
  ): Result;

  events: {
    "BuyPortals(address,address,uint256,uint256,uint256)": EventFragment;
    "MintPortals(address,address,uint256,uint256,uint256)": EventFragment;
    "PurchaseItemsWithGhst(address,address,uint256[],uint256[],uint256)": EventFragment;
    "PurchaseItemsWithVouchers(address,address,uint256[],uint256[])": EventFragment;
    "PurchaseTransferItemsWithGhst(address,address,uint256[],uint256[],uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyPortals"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BuyPortals(address,address,uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintPortals"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MintPortals(address,address,uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PurchaseItemsWithGhst"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "PurchaseItemsWithGhst(address,address,uint256[],uint256[],uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PurchaseItemsWithVouchers"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "PurchaseItemsWithVouchers(address,address,uint256[],uint256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "PurchaseTransferItemsWithGhst"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "PurchaseTransferItemsWithGhst(address,address,uint256[],uint256[],uint256)"
  ): EventFragment;
}

export interface BuyPortalsEventObject {
  _from: string;
  _to: string;
  _tokenId: BigNumber;
  _numAavegotchisToPurchase: BigNumber;
  _totalPrice: BigNumber;
}
export type BuyPortalsEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  BuyPortalsEventObject
>;

export type BuyPortalsEventFilter = TypedEventFilter<BuyPortalsEvent>;

export interface MintPortalsEventObject {
  _from: string;
  _to: string;
  _tokenId: BigNumber;
  _numAavegotchisToPurchase: BigNumber;
  _hauntId: BigNumber;
}
export type MintPortalsEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  MintPortalsEventObject
>;

export type MintPortalsEventFilter = TypedEventFilter<MintPortalsEvent>;

export interface PurchaseItemsWithGhstEventObject {
  _buyer: string;
  _to: string;
  _itemIds: BigNumber[];
  _quantities: BigNumber[];
  _totalPrice: BigNumber;
}
export type PurchaseItemsWithGhstEvent = TypedEvent<
  [string, string, BigNumber[], BigNumber[], BigNumber],
  PurchaseItemsWithGhstEventObject
>;

export type PurchaseItemsWithGhstEventFilter =
  TypedEventFilter<PurchaseItemsWithGhstEvent>;

export interface PurchaseItemsWithVouchersEventObject {
  _buyer: string;
  _to: string;
  _itemIds: BigNumber[];
  _quantities: BigNumber[];
}
export type PurchaseItemsWithVouchersEvent = TypedEvent<
  [string, string, BigNumber[], BigNumber[]],
  PurchaseItemsWithVouchersEventObject
>;

export type PurchaseItemsWithVouchersEventFilter =
  TypedEventFilter<PurchaseItemsWithVouchersEvent>;

export interface PurchaseTransferItemsWithGhstEventObject {
  _buyer: string;
  _to: string;
  _itemIds: BigNumber[];
  _quantities: BigNumber[];
  _totalPrice: BigNumber;
}
export type PurchaseTransferItemsWithGhstEvent = TypedEvent<
  [string, string, BigNumber[], BigNumber[], BigNumber],
  PurchaseTransferItemsWithGhstEventObject
>;

export type PurchaseTransferItemsWithGhstEventFilter =
  TypedEventFilter<PurchaseTransferItemsWithGhstEvent>;

export interface ShopFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShopFacetInterface;

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
    buyPortals(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "buyPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintPortals(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "mintPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    purchaseItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "purchaseItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    purchaseTransferItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "purchaseTransferItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buyPortals(
    _to: PromiseOrValue<string>,
    _ghst: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "buyPortals(address,uint256)"(
    _to: PromiseOrValue<string>,
    _ghst: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintPortals(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "mintPortals(address,uint256)"(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  purchaseItemsWithGhst(
    _to: PromiseOrValue<string>,
    _itemIds: PromiseOrValue<BigNumberish>[],
    _quantities: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "purchaseItemsWithGhst(address,uint256[],uint256[])"(
    _to: PromiseOrValue<string>,
    _itemIds: PromiseOrValue<BigNumberish>[],
    _quantities: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  purchaseTransferItemsWithGhst(
    _to: PromiseOrValue<string>,
    _itemIds: PromiseOrValue<BigNumberish>[],
    _quantities: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "purchaseTransferItemsWithGhst(address,uint256[],uint256[])"(
    _to: PromiseOrValue<string>,
    _itemIds: PromiseOrValue<BigNumberish>[],
    _quantities: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyPortals(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "buyPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mintPortals(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    purchaseItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "purchaseItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    purchaseTransferItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "purchaseTransferItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BuyPortals(address,address,uint256,uint256,uint256)"(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _numAavegotchisToPurchase?: null,
      _totalPrice?: null
    ): BuyPortalsEventFilter;
    BuyPortals(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _numAavegotchisToPurchase?: null,
      _totalPrice?: null
    ): BuyPortalsEventFilter;

    "MintPortals(address,address,uint256,uint256,uint256)"(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _numAavegotchisToPurchase?: null,
      _hauntId?: null
    ): MintPortalsEventFilter;
    MintPortals(
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _tokenId?: null,
      _numAavegotchisToPurchase?: null,
      _hauntId?: null
    ): MintPortalsEventFilter;

    "PurchaseItemsWithGhst(address,address,uint256[],uint256[],uint256)"(
      _buyer?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _itemIds?: null,
      _quantities?: null,
      _totalPrice?: null
    ): PurchaseItemsWithGhstEventFilter;
    PurchaseItemsWithGhst(
      _buyer?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _itemIds?: null,
      _quantities?: null,
      _totalPrice?: null
    ): PurchaseItemsWithGhstEventFilter;

    "PurchaseItemsWithVouchers(address,address,uint256[],uint256[])"(
      _buyer?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _itemIds?: null,
      _quantities?: null
    ): PurchaseItemsWithVouchersEventFilter;
    PurchaseItemsWithVouchers(
      _buyer?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _itemIds?: null,
      _quantities?: null
    ): PurchaseItemsWithVouchersEventFilter;

    "PurchaseTransferItemsWithGhst(address,address,uint256[],uint256[],uint256)"(
      _buyer?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _itemIds?: null,
      _quantities?: null,
      _totalPrice?: null
    ): PurchaseTransferItemsWithGhstEventFilter;
    PurchaseTransferItemsWithGhst(
      _buyer?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _itemIds?: null,
      _quantities?: null,
      _totalPrice?: null
    ): PurchaseTransferItemsWithGhstEventFilter;
  };

  estimateGas: {
    buyPortals(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "buyPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintPortals(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "mintPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    purchaseItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "purchaseItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    purchaseTransferItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "purchaseTransferItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyPortals(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "buyPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _ghst: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintPortals(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "mintPortals(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    purchaseItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "purchaseItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    purchaseTransferItemsWithGhst(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "purchaseTransferItemsWithGhst(address,uint256[],uint256[])"(
      _to: PromiseOrValue<string>,
      _itemIds: PromiseOrValue<BigNumberish>[],
      _quantities: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}