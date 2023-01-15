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

export interface LibERC1155TileInterface extends utils.Interface {
  functions: {};

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "MintTile(address,uint256,uint256)": EventFragment;
    "MintTiles(address,uint256,uint16)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferFromParent(address,uint256,uint256,uint256)": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "TransferToParent(address,uint256,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ApprovalForAll(address,address,bool)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintTile"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MintTile(address,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintTiles"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MintTiles(address,uint256,uint16)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferBatch(address,address,address,uint256[],uint256[])"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferFromParent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferFromParent(address,uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferSingle(address,address,address,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferToParent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransferToParent(address,uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI(string,uint256)"): EventFragment;
}

export interface ApprovalForAllEventObject {
  _owner: string;
  _operator: string;
  _approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface MintTileEventObject {
  _owner: string;
  _tileType: BigNumber;
  _tileId: BigNumber;
}
export type MintTileEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  MintTileEventObject
>;

export type MintTileEventFilter = TypedEventFilter<MintTileEvent>;

export interface MintTilesEventObject {
  _owner: string;
  _tileId: BigNumber;
  _amount: number;
}
export type MintTilesEvent = TypedEvent<
  [string, BigNumber, number],
  MintTilesEventObject
>;

export type MintTilesEventFilter = TypedEventFilter<MintTilesEvent>;

export interface TransferBatchEventObject {
  _operator: string;
  _from: string;
  _to: string;
  _ids: BigNumber[];
  _values: BigNumber[];
}
export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  TransferBatchEventObject
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export interface TransferFromParentEventObject {
  _fromContract: string;
  _fromTokenId: BigNumber;
  _tokenTypeId: BigNumber;
  _value: BigNumber;
}
export type TransferFromParentEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  TransferFromParentEventObject
>;

export type TransferFromParentEventFilter =
  TypedEventFilter<TransferFromParentEvent>;

export interface TransferSingleEventObject {
  _operator: string;
  _from: string;
  _to: string;
  _id: BigNumber;
  _value: BigNumber;
}
export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TransferSingleEventObject
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export interface TransferToParentEventObject {
  _toContract: string;
  _toTokenId: BigNumber;
  _tokenTypeId: BigNumber;
  _value: BigNumber;
}
export type TransferToParentEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  TransferToParentEventObject
>;

export type TransferToParentEventFilter =
  TypedEventFilter<TransferToParentEvent>;

export interface URIEventObject {
  _value: string;
  _tokenId: BigNumber;
}
export type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface LibERC1155Tile extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibERC1155TileInterface;

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
    "ApprovalForAll(address,address,bool)"(
      _owner?: PromiseOrValue<string> | null,
      _operator?: PromiseOrValue<string> | null,
      _approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      _owner?: PromiseOrValue<string> | null,
      _operator?: PromiseOrValue<string> | null,
      _approved?: null
    ): ApprovalForAllEventFilter;

    "MintTile(address,uint256,uint256)"(
      _owner?: PromiseOrValue<string> | null,
      _tileType?: PromiseOrValue<BigNumberish> | null,
      _tileId?: null
    ): MintTileEventFilter;
    MintTile(
      _owner?: PromiseOrValue<string> | null,
      _tileType?: PromiseOrValue<BigNumberish> | null,
      _tileId?: null
    ): MintTileEventFilter;

    "MintTiles(address,uint256,uint16)"(
      _owner?: PromiseOrValue<string> | null,
      _tileId?: PromiseOrValue<BigNumberish> | null,
      _amount?: null
    ): MintTilesEventFilter;
    MintTiles(
      _owner?: PromiseOrValue<string> | null,
      _tileId?: PromiseOrValue<BigNumberish> | null,
      _amount?: null
    ): MintTilesEventFilter;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      _operator?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _ids?: null,
      _values?: null
    ): TransferBatchEventFilter;
    TransferBatch(
      _operator?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _ids?: null,
      _values?: null
    ): TransferBatchEventFilter;

    "TransferFromParent(address,uint256,uint256,uint256)"(
      _fromContract?: PromiseOrValue<string> | null,
      _fromTokenId?: PromiseOrValue<BigNumberish> | null,
      _tokenTypeId?: PromiseOrValue<BigNumberish> | null,
      _value?: null
    ): TransferFromParentEventFilter;
    TransferFromParent(
      _fromContract?: PromiseOrValue<string> | null,
      _fromTokenId?: PromiseOrValue<BigNumberish> | null,
      _tokenTypeId?: PromiseOrValue<BigNumberish> | null,
      _value?: null
    ): TransferFromParentEventFilter;

    "TransferSingle(address,address,address,uint256,uint256)"(
      _operator?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _id?: null,
      _value?: null
    ): TransferSingleEventFilter;
    TransferSingle(
      _operator?: PromiseOrValue<string> | null,
      _from?: PromiseOrValue<string> | null,
      _to?: PromiseOrValue<string> | null,
      _id?: null,
      _value?: null
    ): TransferSingleEventFilter;

    "TransferToParent(address,uint256,uint256,uint256)"(
      _toContract?: PromiseOrValue<string> | null,
      _toTokenId?: PromiseOrValue<BigNumberish> | null,
      _tokenTypeId?: PromiseOrValue<BigNumberish> | null,
      _value?: null
    ): TransferToParentEventFilter;
    TransferToParent(
      _toContract?: PromiseOrValue<string> | null,
      _toTokenId?: PromiseOrValue<BigNumberish> | null,
      _tokenTypeId?: PromiseOrValue<BigNumberish> | null,
      _value?: null
    ): TransferToParentEventFilter;

    "URI(string,uint256)"(
      _value?: null,
      _tokenId?: PromiseOrValue<BigNumberish> | null
    ): URIEventFilter;
    URI(
      _value?: null,
      _tokenId?: PromiseOrValue<BigNumberish> | null
    ): URIEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
