/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface BridgeFacetInterface extends utils.Interface {
  functions: {
    "TRANSFER_ERC1155_BATCH_EVENT_SIG()": FunctionFragment;
    "WITHDRAW_ERC721_BATCH_EVENT_SIG()": FunctionFragment;
    "exitTokens(address,address,bytes)": FunctionFragment;
    "lockTokens(address,address,address,bytes)": FunctionFragment;
    "rootChainManager()": FunctionFragment;
    "setRootChainManager(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "TRANSFER_ERC1155_BATCH_EVENT_SIG"
      | "TRANSFER_ERC1155_BATCH_EVENT_SIG()"
      | "WITHDRAW_ERC721_BATCH_EVENT_SIG"
      | "WITHDRAW_ERC721_BATCH_EVENT_SIG()"
      | "exitTokens"
      | "exitTokens(address,address,bytes)"
      | "lockTokens"
      | "lockTokens(address,address,address,bytes)"
      | "rootChainManager"
      | "rootChainManager()"
      | "setRootChainManager"
      | "setRootChainManager(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "TRANSFER_ERC1155_BATCH_EVENT_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_ERC1155_BATCH_EVENT_SIG()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_ERC721_BATCH_EVENT_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_ERC721_BATCH_EVENT_SIG()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exitTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exitTokens(address,address,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lockTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lockTokens(address,address,address,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rootChainManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rootChainManager()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRootChainManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRootChainManager(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "TRANSFER_ERC1155_BATCH_EVENT_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_ERC1155_BATCH_EVENT_SIG()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_ERC721_BATCH_EVENT_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_ERC721_BATCH_EVENT_SIG()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exitTokens(address,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockTokens(address,address,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rootChainManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rootChainManager()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRootChainManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRootChainManager(address)",
    data: BytesLike
  ): Result;

  events: {
    "ERC1155SendToBridge(address,address,uint256[],uint256[])": EventFragment;
    "ERC721SendToBridge(address,address,uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC1155SendToBridge"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC1155SendToBridge(address,address,uint256[],uint256[])"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721SendToBridge"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ERC721SendToBridge(address,address,uint256[])"
  ): EventFragment;
}

export interface ERC1155SendToBridgeEventObject {
  depositor: string;
  receiver: string;
  ids: BigNumber[];
  values: BigNumber[];
}
export type ERC1155SendToBridgeEvent = TypedEvent<
  [string, string, BigNumber[], BigNumber[]],
  ERC1155SendToBridgeEventObject
>;

export type ERC1155SendToBridgeEventFilter =
  TypedEventFilter<ERC1155SendToBridgeEvent>;

export interface ERC721SendToBridgeEventObject {
  depositor: string;
  receiver: string;
  ids: BigNumber[];
}
export type ERC721SendToBridgeEvent = TypedEvent<
  [string, string, BigNumber[]],
  ERC721SendToBridgeEventObject
>;

export type ERC721SendToBridgeEventFilter =
  TypedEventFilter<ERC721SendToBridgeEvent>;

export interface BridgeFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeFacetInterface;

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
    TRANSFER_ERC1155_BATCH_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "TRANSFER_ERC1155_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    WITHDRAW_ERC721_BATCH_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "WITHDRAW_ERC721_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    exitTokens(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "exitTokens(address,address,bytes)"(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockTokens(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "lockTokens(address,address,address,bytes)"(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rootChainManager(overrides?: CallOverrides): Promise<[string]>;

    "rootChainManager()"(overrides?: CallOverrides): Promise<[string]>;

    setRootChainManager(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setRootChainManager(address)"(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  TRANSFER_ERC1155_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

  "TRANSFER_ERC1155_BATCH_EVENT_SIG()"(
    overrides?: CallOverrides
  ): Promise<string>;

  WITHDRAW_ERC721_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

  "WITHDRAW_ERC721_BATCH_EVENT_SIG()"(
    overrides?: CallOverrides
  ): Promise<string>;

  exitTokens(
    arg0: PromiseOrValue<string>,
    rootToken: PromiseOrValue<string>,
    log: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "exitTokens(address,address,bytes)"(
    arg0: PromiseOrValue<string>,
    rootToken: PromiseOrValue<string>,
    log: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockTokens(
    depositor: PromiseOrValue<string>,
    depositReceiver: PromiseOrValue<string>,
    rootToken: PromiseOrValue<string>,
    depositData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "lockTokens(address,address,address,bytes)"(
    depositor: PromiseOrValue<string>,
    depositReceiver: PromiseOrValue<string>,
    rootToken: PromiseOrValue<string>,
    depositData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rootChainManager(overrides?: CallOverrides): Promise<string>;

  "rootChainManager()"(overrides?: CallOverrides): Promise<string>;

  setRootChainManager(
    _newRootChainManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setRootChainManager(address)"(
    _newRootChainManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    TRANSFER_ERC1155_BATCH_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<string>;

    "TRANSFER_ERC1155_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<string>;

    WITHDRAW_ERC721_BATCH_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

    "WITHDRAW_ERC721_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<string>;

    exitTokens(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "exitTokens(address,address,bytes)"(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockTokens(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "lockTokens(address,address,address,bytes)"(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    rootChainManager(overrides?: CallOverrides): Promise<string>;

    "rootChainManager()"(overrides?: CallOverrides): Promise<string>;

    setRootChainManager(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRootChainManager(address)"(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ERC1155SendToBridge(address,address,uint256[],uint256[])"(
      depositor?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      ids?: null,
      values?: null
    ): ERC1155SendToBridgeEventFilter;
    ERC1155SendToBridge(
      depositor?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      ids?: null,
      values?: null
    ): ERC1155SendToBridgeEventFilter;

    "ERC721SendToBridge(address,address,uint256[])"(
      depositor?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      ids?: null
    ): ERC721SendToBridgeEventFilter;
    ERC721SendToBridge(
      depositor?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      ids?: null
    ): ERC721SendToBridgeEventFilter;
  };

  estimateGas: {
    TRANSFER_ERC1155_BATCH_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "TRANSFER_ERC1155_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    WITHDRAW_ERC721_BATCH_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "WITHDRAW_ERC721_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exitTokens(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "exitTokens(address,address,bytes)"(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockTokens(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "lockTokens(address,address,address,bytes)"(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rootChainManager(overrides?: CallOverrides): Promise<BigNumber>;

    "rootChainManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    setRootChainManager(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setRootChainManager(address)"(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    TRANSFER_ERC1155_BATCH_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "TRANSFER_ERC1155_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WITHDRAW_ERC721_BATCH_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "WITHDRAW_ERC721_BATCH_EVENT_SIG()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exitTokens(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "exitTokens(address,address,bytes)"(
      arg0: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      log: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockTokens(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "lockTokens(address,address,address,bytes)"(
      depositor: PromiseOrValue<string>,
      depositReceiver: PromiseOrValue<string>,
      rootToken: PromiseOrValue<string>,
      depositData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rootChainManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rootChainManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRootChainManager(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setRootChainManager(address)"(
      _newRootChainManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
