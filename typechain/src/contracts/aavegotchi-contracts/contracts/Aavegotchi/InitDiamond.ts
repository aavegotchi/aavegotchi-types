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

export declare namespace InitDiamond {
  export type ArgsStruct = {
    dao: PromiseOrValue<string>;
    daoTreasury: PromiseOrValue<string>;
    pixelCraft: PromiseOrValue<string>;
    rarityFarming: PromiseOrValue<string>;
    ghstContract: PromiseOrValue<string>;
    chainlinkKeyHash: PromiseOrValue<BytesLike>;
    chainlinkFee: PromiseOrValue<BigNumberish>;
    vrfCoordinator: PromiseOrValue<string>;
    linkAddress: PromiseOrValue<string>;
    childChainManager: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    symbol: PromiseOrValue<string>;
  };

  export type ArgsStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    string,
    string,
    string
  ] & {
    dao: string;
    daoTreasury: string;
    pixelCraft: string;
    rarityFarming: string;
    ghstContract: string;
    chainlinkKeyHash: string;
    chainlinkFee: BigNumber;
    vrfCoordinator: string;
    linkAddress: string;
    childChainManager: string;
    name: string;
    symbol: string;
  };
}

export interface InitDiamondInterface extends utils.Interface {
  functions: {
    "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "init"
      | "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "init",
    values: [InitDiamond.ArgsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))",
    values: [InitDiamond.ArgsStruct]
  ): string;

  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))",
    data: BytesLike
  ): Result;

  events: {};
}

export interface InitDiamond extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InitDiamondInterface;

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
    init(
      _args: InitDiamond.ArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))"(
      _args: InitDiamond.ArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  init(
    _args: InitDiamond.ArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))"(
    _args: InitDiamond.ArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    init(
      _args: InitDiamond.ArgsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))"(
      _args: InitDiamond.ArgsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    init(
      _args: InitDiamond.ArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))"(
      _args: InitDiamond.ArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    init(
      _args: InitDiamond.ArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "init((address,address,address,address,address,bytes32,uint256,address,address,address,string,string))"(
      _args: InitDiamond.ArgsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}