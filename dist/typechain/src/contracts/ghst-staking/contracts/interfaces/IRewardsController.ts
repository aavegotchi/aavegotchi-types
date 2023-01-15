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
} from "../../../../../common";

export interface IRewardsControllerInterface extends utils.Interface {
  functions: {
    "claimAllRewards(address[],address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimAllRewards"
      | "claimAllRewards(address[],address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimAllRewards",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAllRewards(address[],address)",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimAllRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAllRewards(address[],address)",
    data: BytesLike
  ): Result;

  events: {
    "RewardsClaimed(address,address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RewardsClaimed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RewardsClaimed(address,address,address,address,uint256)"
  ): EventFragment;
}

export interface RewardsClaimedEventObject {
  user: string;
  reward: string;
  to: string;
  claimer: string;
  amount: BigNumber;
}
export type RewardsClaimedEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  RewardsClaimedEventObject
>;

export type RewardsClaimedEventFilter = TypedEventFilter<RewardsClaimedEvent>;

export interface IRewardsController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewardsControllerInterface;

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
    claimAllRewards(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "claimAllRewards(address[],address)"(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claimAllRewards(
    assets: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "claimAllRewards(address[],address)"(
    assets: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimAllRewards(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardsList: string[];
        claimedAmounts: BigNumber[];
      }
    >;

    "claimAllRewards(address[],address)"(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        rewardsList: string[];
        claimedAmounts: BigNumber[];
      }
    >;
  };

  filters: {
    "RewardsClaimed(address,address,address,address,uint256)"(
      user?: PromiseOrValue<string> | null,
      reward?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      claimer?: null,
      amount?: null
    ): RewardsClaimedEventFilter;
    RewardsClaimed(
      user?: PromiseOrValue<string> | null,
      reward?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      claimer?: null,
      amount?: null
    ): RewardsClaimedEventFilter;
  };

  estimateGas: {
    claimAllRewards(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "claimAllRewards(address[],address)"(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimAllRewards(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "claimAllRewards(address[],address)"(
      assets: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
