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

export declare namespace VoucherMigrationFacet {
  export type VouchersOwnerStruct = {
    owner: PromiseOrValue<string>;
    ids: PromiseOrValue<BigNumberish>[];
    values: PromiseOrValue<BigNumberish>[];
  };

  export type VouchersOwnerStructOutput = [string, BigNumber[], BigNumber[]] & {
    owner: string;
    ids: BigNumber[];
    values: BigNumber[];
  };
}

export interface VoucherMigrationFacetInterface extends utils.Interface {
  functions: {
    "migrateVouchers((address,uint256[],uint256[])[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "migrateVouchers"
      | "migrateVouchers((address,uint256[],uint256[])[])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "migrateVouchers",
    values: [VoucherMigrationFacet.VouchersOwnerStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateVouchers((address,uint256[],uint256[])[])",
    values: [VoucherMigrationFacet.VouchersOwnerStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "migrateVouchers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateVouchers((address,uint256[],uint256[])[])",
    data: BytesLike
  ): Result;

  events: {
    "MigrateVouchers(address,uint256[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MigrateVouchers"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MigrateVouchers(address,uint256[],uint256[])"
  ): EventFragment;
}

export interface MigrateVouchersEventObject {
  _owner: string;
  _ids: BigNumber[];
  _values: BigNumber[];
}
export type MigrateVouchersEvent = TypedEvent<
  [string, BigNumber[], BigNumber[]],
  MigrateVouchersEventObject
>;

export type MigrateVouchersEventFilter = TypedEventFilter<MigrateVouchersEvent>;

export interface VoucherMigrationFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VoucherMigrationFacetInterface;

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
    migrateVouchers(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "migrateVouchers((address,uint256[],uint256[])[])"(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  migrateVouchers(
    _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "migrateVouchers((address,uint256[],uint256[])[])"(
    _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    migrateVouchers(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    "migrateVouchers((address,uint256[],uint256[])[])"(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MigrateVouchers(address,uint256[],uint256[])"(
      _owner?: PromiseOrValue<string> | null,
      _ids?: null,
      _values?: null
    ): MigrateVouchersEventFilter;
    MigrateVouchers(
      _owner?: PromiseOrValue<string> | null,
      _ids?: null,
      _values?: null
    ): MigrateVouchersEventFilter;
  };

  estimateGas: {
    migrateVouchers(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "migrateVouchers((address,uint256[],uint256[])[])"(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    migrateVouchers(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "migrateVouchers((address,uint256[],uint256[])[])"(
      _vouchersOwners: VoucherMigrationFacet.VouchersOwnerStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}