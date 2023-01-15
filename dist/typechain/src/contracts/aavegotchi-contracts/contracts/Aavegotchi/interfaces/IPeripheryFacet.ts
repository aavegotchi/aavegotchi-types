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
} from "../../../../../../common";

export interface IPeripheryFacetInterface extends utils.Interface {
  functions: {
    "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)": FunctionFragment;
    "peripherySetApprovalForAll(address,bool)": FunctionFragment;
    "peripherySetBaseURI(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "peripherySafeBatchTransferFrom"
      | "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)"
      | "peripherySafeTransferFrom"
      | "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)"
      | "peripherySetApprovalForAll"
      | "peripherySetApprovalForAll(address,bool)"
      | "peripherySetBaseURI"
      | "peripherySetBaseURI(string)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "peripherySafeBatchTransferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "peripherySafeTransferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "peripherySetApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "peripherySetApprovalForAll(address,bool)",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "peripherySetBaseURI",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "peripherySetBaseURI(string)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "peripherySafeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "peripherySafeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "peripherySetApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "peripherySetApprovalForAll(address,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "peripherySetBaseURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "peripherySetBaseURI(string)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPeripheryFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPeripheryFacetInterface;

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
    peripherySafeBatchTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    peripherySafeTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    peripherySetApprovalForAll(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "peripherySetApprovalForAll(address,bool)"(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    peripherySetBaseURI(
      _value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "peripherySetBaseURI(string)"(
      _value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  peripherySafeBatchTransferFrom(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>[],
    _values: PromiseOrValue<BigNumberish>[],
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)"(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _ids: PromiseOrValue<BigNumberish>[],
    _values: PromiseOrValue<BigNumberish>[],
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  peripherySafeTransferFrom(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)"(
    _operator: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BigNumberish>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  peripherySetApprovalForAll(
    _operator: PromiseOrValue<string>,
    _approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "peripherySetApprovalForAll(address,bool)"(
    _operator: PromiseOrValue<string>,
    _approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  peripherySetBaseURI(
    _value: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "peripherySetBaseURI(string)"(
    _value: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    peripherySafeBatchTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    peripherySafeTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    peripherySetApprovalForAll(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    "peripherySetApprovalForAll(address,bool)"(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    peripherySetBaseURI(
      _value: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "peripherySetBaseURI(string)"(
      _value: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    peripherySafeBatchTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    peripherySafeTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    peripherySetApprovalForAll(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "peripherySetApprovalForAll(address,bool)"(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    peripherySetBaseURI(
      _value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "peripherySetBaseURI(string)"(
      _value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    peripherySafeBatchTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "peripherySafeBatchTransferFrom(address,address,address,uint256[],uint256[],bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _ids: PromiseOrValue<BigNumberish>[],
      _values: PromiseOrValue<BigNumberish>[],
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    peripherySafeTransferFrom(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "peripherySafeTransferFrom(address,address,address,uint256,uint256,bytes)"(
      _operator: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BigNumberish>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    peripherySetApprovalForAll(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "peripherySetApprovalForAll(address,bool)"(
      _operator: PromiseOrValue<string>,
      _approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    peripherySetBaseURI(
      _value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "peripherySetBaseURI(string)"(
      _value: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}