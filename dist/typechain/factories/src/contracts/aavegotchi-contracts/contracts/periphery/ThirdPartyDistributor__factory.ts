/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ThirdPartyDistributor,
  ThirdPartyDistributorInterface,
} from "../../../../../../src/contracts/aavegotchi-contracts/contracts/periphery/ThirdPartyDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "proportion",
            type: "uint32",
          },
        ],
        internalType: "struct ThirdPartyDistributor.Distribution[]",
        name: "_distributions",
        type: "tuple[]",
      },
      {
        internalType: "enum ThirdPartyDistributor.ReleaseAccess",
        name: "_releaseAccess",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "BeneficiaryDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "enum ThirdPartyDistributor.ReleaseAccess",
        name: "access",
        type: "uint8",
      },
    ],
    name: "ImproperAccess",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotEnoughBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "sum",
        type: "uint256",
      },
    ],
    name: "SumOfDistributionsNot100",
    type: "error",
  },
  {
    inputs: [],
    name: "Unknown",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DistributionsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "beneficiaryDistribution",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "proportion",
            type: "uint32",
          },
        ],
        internalType: "struct ThirdPartyDistributor.Distribution",
        name: "distribution",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "distributions",
    outputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "proportion",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "isBeneficiary",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numBeneficiaries",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "partialReleaseToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ThirdPartyDistributor.ReleaseParams[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "partialReleaseTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseAccess",
    outputs: [
      {
        internalType: "enum ThirdPartyDistributor.ReleaseAccess",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "releaseToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
    ],
    name: "releaseTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "proportion",
            type: "uint32",
          },
        ],
        internalType: "struct ThirdPartyDistributor.Distribution[]",
        name: "_distributions",
        type: "tuple[]",
      },
    ],
    name: "updateDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum ThirdPartyDistributor.ReleaseAccess",
        name: "_releaseAccess",
        type: "uint8",
      },
    ],
    name: "updateReleaseAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b9938038062001b998339810160408190526200003491620002aa565b6200003f3362000085565b6200004a8362000085565b6200005582620000d5565b6002805482919060ff19166001836003811115620000775762000077620003cb565b02179055505050506200041e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000805b8251811015620001db5760006001600160a01b0316838281518110620001035762000103620003e1565b6020026020010151600001516001600160a01b031603620001375760405163d92e233d60e01b815260040160405180910390fd5b8281815181106200014c576200014c620003e1565b60200260200101516020015163ffffffff16826200016b9190620003f7565b91506001838281518110620001845762000184620003e1565b602090810291909101810151825460018181018555600094855293839020825191018054929093015163ffffffff16600160a01b026001600160c01b03199092166001600160a01b039091161717905501620000d9565b5080606414620002055760405163b588a87f60e01b81526004810182905260240160405180910390fd5b5050565b80516001600160a01b03811681146200022157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171562000261576200026162000226565b60405290565b604051601f8201601f191681016001600160401b038111828210171562000292576200029262000226565b604052919050565b8051600481106200022157600080fd5b600080600060608486031215620002c057600080fd5b620002cb8462000209565b602085810151919450906001600160401b0380821115620002eb57600080fd5b818701915087601f8301126200030057600080fd5b81518181111562000315576200031562000226565b62000325848260051b0162000267565b818152848101925060069190911b8301840190898211156200034657600080fd5b928401925b81841015620003ac576040848b031215620003665760008081fd5b620003706200023c565b6200037b8562000209565b81528585015163ffffffff81168114620003955760008081fd5b81870152835260409390930192918401916200034b565b8096505050505050620003c2604085016200029a565b90509250925092565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600082198211156200041957634e487b7160e01b600052601160045260246000fd5b500190565b61176b806200042e6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063a0a3e44b11610066578063a0a3e44b1461020f578063cb22d41b14610229578063e545f9411461023a578063f2fde38b1461024d57600080fd5b80638da5cb5b146101be578063985bb8a7146101d95780639d19b226146101ec57600080fd5b80634487d3df116100c85780634487d3df146101595780636d9634b714610190578063715018a6146101a35780638bf02c27146101ab57600080fd5b806321f56b57146100ef5780633acc25fe146101045780633d26dd5414610146575b600080fd5b6101026100fd366004611225565b610260565b005b610117610112366004611262565b6102ba565b6040805182516001600160a01b0316815260209283015163ffffffff1692810192909252015b60405180910390f35b610102610154366004611311565b610391565b61016c6101673660046113dc565b6103f8565b604080516001600160a01b03909316835263ffffffff90911660208301520161013d565b61010261019e3660046113f5565b610430565b61010261063b565b6101026101b936600461146a565b610671565b6000546040516001600160a01b03909116815260200161013d565b6101026101e7366004611494565b6107b6565b6101ff6101fa366004611262565b6109ba565b604051901515815260200161013d565b60025461021c9060ff1681565b60405161013d919061157e565b60015460405190815260200161013d565b610102610248366004611262565b610a19565b61010261025b366004611262565b610b57565b6000546001600160a01b031633146102935760405162461bcd60e51b815260040161028a90611592565b60405180910390fd5b6002805482919060ff191660018360038111156102b2576102b2611546565b021790555050565b604080518082019091526000808252602082015260005b60015481101561036c57826001600160a01b0316600182815481106102f8576102f86115c7565b6000918252602090912001546001600160a01b0316036103645760018181548110610325576103256115c7565b6000918252602091829020604080518082019091529101546001600160a01b0381168252600160a01b900463ffffffff16918101919091529392505050565b6001016102d1565b50604051632131ba9160e21b81526001600160a01b038316600482015260240161028a565b6000546001600160a01b031633146103bb5760405162461bcd60e51b815260040161028a90611592565b6103c3610bf2565b6103cc81610c3f565b6040517fe5ffe98b7db255cde2a7abfabd672ba710f02524f5743f34849efbfb411d32ef90600090a150565b6001818154811061040857600080fd5b6000918252602090912001546001600160a01b0381169150600160a01b900463ffffffff1682565b600061043b336109ba565b905060006104516000546001600160a01b031690565b6001600160a01b031633149050600060025460ff16600381111561047757610477611546565b036104c45760005b838110156104be576104b685858381811061049c5761049c6115c7565b90506020020160208101906104b19190611262565b610d5c565b60010161047f565b50610635565b600160025460ff1660038111156104dd576104dd611546565b03610533578061050b576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b60005b838110156104be5761052b85858381811061049c5761049c6115c7565b60010161050e565b6002805460ff16600381111561054b5761054b611546565b036105a15781610579576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b60005b838110156104be5761059985858381811061049c5761049c6115c7565b60010161057c565b600360025460ff1660038111156105ba576105ba611546565b0361061c57801580156105cb575081155b156105f4576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b60005b838110156104be5761061485858381811061049c5761049c6115c7565b6001016105f7565b60405163019ec8b360e31b815260040160405180910390fd5b50505050565b6000546001600160a01b031633146106655760405162461bcd60e51b815260040161028a90611592565b61066f6000610dcf565b565b600061067c336109ba565b905060006106926000546001600160a01b031690565b6001600160a01b031633149050600060025460ff1660038111156106b8576106b8611546565b036106cc576106c78484610e1f565b610635565b600160025460ff1660038111156106e5576106e5611546565b0361071d5780610713576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b6106c78484610e1f565b6002805460ff16600381111561073557610735611546565b036107635781610713576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b600360025460ff16600381111561077c5761077c611546565b0361061c578015801561078d575081155b15610713576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b60006107c1336109ba565b905060006107d76000546001600160a01b031690565b6001600160a01b031633149050600060025460ff1660038111156107fd576107fd611546565b0361085a5760005b835181101561063557610852848281518110610823576108236115c7565b602002602001015160000151858381518110610841576108416115c7565b602002602001015160200151610e1f565b600101610805565b600160025460ff16600381111561087357610873611546565b036108ca57806108a1576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b60005b8351811015610635576108c2848281518110610823576108236115c7565b6001016108a4565b6002805460ff1660038111156108e2576108e2611546565b036109395781610910576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b60005b835181101561063557610931848281518110610823576108236115c7565b600101610913565b600360025460ff16600381111561095257610952611546565b0361061c5780158015610963575081155b1561098c576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b60005b8351811015610635576109ad848281518110610823576108236115c7565b60010161098f565b505050565b6000805b600154811015610a1057826001600160a01b0316600182815481106109e5576109e56115c7565b6000918252602090912001546001600160a01b031603610a085750600192915050565b6001016109be565b50600092915050565b6000610a24336109ba565b90506000610a3a6000546001600160a01b031690565b6001600160a01b031633149050600060025460ff166003811115610a6057610a60611546565b03610a6e576109b583610d5c565b600160025460ff166003811115610a8757610a87611546565b03610abe5780610ab5576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b6109b583610d5c565b6002805460ff166003811115610ad657610ad6611546565b03610b045781610ab5576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b600360025460ff166003811115610b1d57610b1d611546565b0361061c5780158015610b2e575081155b15610ab5576002546040516308caefc960e01b815261028a91339160ff909116906004016115dd565b6000546001600160a01b03163314610b815760405162461bcd60e51b815260040161028a90611592565b6001600160a01b038116610be65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161028a565b610bef81610dcf565b50565b60015460005b81811015610c3b576001805480610c1157610c116115fa565b600082815260209020810160001990810180546001600160c01b0319169055019055600101610bf8565b5050565b6000805b8251811015610d375760006001600160a01b0316838281518110610c6957610c696115c7565b6020026020010151600001516001600160a01b031603610c9c5760405163d92e233d60e01b815260040160405180910390fd5b828181518110610cae57610cae6115c7565b60200260200101516020015163ffffffff1682610ccb9190611626565b91506001838281518110610ce157610ce16115c7565b602090810291909101810151825460018181018555600094855293839020825191018054929093015163ffffffff16600160a01b026001600160c01b03199092166001600160a01b039091161717905501610c43565b5080606414610c3b5760405163b588a87f60e01b81526004810182905260240161028a565b6040516370a0823160e01b8152306004820152610bef9082906001600160a01b038216906370a0823190602401602060405180830381865afa158015610da6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dca919061163e565b610e1f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516370a0823160e01b815230600482015282906001600160a01b038216906370a0823190602401602060405180830381865afa158015610e65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e89919061163e565b821115610ebb576040516312c35e8760e21b81526001600160a01b03841660048201526024810183905260440161028a565b60005b600154811015610f4d57600060648460018481548110610ee057610ee06115c7565b600091825260209091200154610f039190600160a01b900463ffffffff16611657565b610f0d9190611676565b9050610f4460018381548110610f2557610f256115c7565b6000918252602090912001546001600160a01b03858116911683610f95565b50600101610ebe565b50604080516001600160a01b0385168152602081018490527fc7798891864187665ac6dd119286e44ec13f014527aeeb2b8eb3fd413df93179910160405180910390a1505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526109b5928692916000916110259185169084906110a2565b8051909150156109b557808060200190518101906110439190611698565b6109b55760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161028a565b60606110b184846000856110bb565b90505b9392505050565b60608247101561111c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161028a565b6001600160a01b0385163b6111735760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161028a565b600080866001600160a01b0316858760405161118f91906116e6565b60006040518083038185875af1925050503d80600081146111cc576040519150601f19603f3d011682016040523d82523d6000602084013e6111d1565b606091505b50915091506111e18282866111ec565b979650505050505050565b606083156111fb5750816110b4565b82511561120b5782518084602001fd5b8160405162461bcd60e51b815260040161028a9190611702565b60006020828403121561123757600080fd5b8135600481106110b457600080fd5b80356001600160a01b038116811461125d57600080fd5b919050565b60006020828403121561127457600080fd5b6110b482611246565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156112b6576112b661127d565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156112e5576112e561127d565b604052919050565b600067ffffffffffffffff8211156113075761130761127d565b5060051b60200190565b6000602080838503121561132457600080fd5b823567ffffffffffffffff81111561133b57600080fd5b8301601f8101851361134c57600080fd5b803561135f61135a826112ed565b6112bc565b81815260069190911b8201830190838101908783111561137e57600080fd5b928401925b828410156111e1576040848903121561139c5760008081fd5b6113a4611293565b6113ad85611246565b81528585013563ffffffff811681146113c65760008081fd5b8187015282526040939093019290840190611383565b6000602082840312156113ee57600080fd5b5035919050565b6000806020838503121561140857600080fd5b823567ffffffffffffffff8082111561142057600080fd5b818501915085601f83011261143457600080fd5b81358181111561144357600080fd5b8660208260051b850101111561145857600080fd5b60209290920196919550909350505050565b6000806040838503121561147d57600080fd5b61148683611246565b946020939093013593505050565b600060208083850312156114a757600080fd5b823567ffffffffffffffff8111156114be57600080fd5b8301601f810185136114cf57600080fd5b80356114dd61135a826112ed565b81815260069190911b820183019083810190878311156114fc57600080fd5b928401925b828410156111e1576040848903121561151a5760008081fd5b611522611293565b61152b85611246565b81528486013586820152825260409093019290840190611501565b634e487b7160e01b600052602160045260246000fd5b6004811061157a57634e487b7160e01b600052602160045260246000fd5b9052565b6020810161158c828461155c565b92915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0383168152604081016110b4602083018461155c565b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561163957611639611610565b500190565b60006020828403121561165057600080fd5b5051919050565b600081600019048311821515161561167157611671611610565b500290565b60008261169357634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156116aa57600080fd5b815180151581146110b457600080fd5b60005b838110156116d55781810151838201526020016116bd565b838111156106355750506000910152565b600082516116f88184602087016116ba565b9190910192915050565b60208152600082518060208401526117218160408501602087016116ba565b601f01601f1916919091016040019291505056fea2646970667358221220bb9a060212ed6cc05f0096bd4a3cac9fad8fad4145fd64fccdd79cc230acb3d564736f6c634300080d0033";

type ThirdPartyDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ThirdPartyDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ThirdPartyDistributor__factory extends ContractFactory {
  constructor(...args: ThirdPartyDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _distributions: ThirdPartyDistributor.DistributionStruct[],
    _releaseAccess: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ThirdPartyDistributor> {
    return super.deploy(
      _owner,
      _distributions,
      _releaseAccess,
      overrides || {}
    ) as Promise<ThirdPartyDistributor>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _distributions: ThirdPartyDistributor.DistributionStruct[],
    _releaseAccess: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _distributions,
      _releaseAccess,
      overrides || {}
    );
  }
  override attach(address: string): ThirdPartyDistributor {
    return super.attach(address) as ThirdPartyDistributor;
  }
  override connect(signer: Signer): ThirdPartyDistributor__factory {
    return super.connect(signer) as ThirdPartyDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ThirdPartyDistributorInterface {
    return new utils.Interface(_abi) as ThirdPartyDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ThirdPartyDistributor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ThirdPartyDistributor;
  }
}