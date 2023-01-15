/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ERC1155Generic,
  ERC1155GenericInterface,
} from "../../../../../../src/contracts/aavegotchi-gbm-baazaar/contracts/test/ERC1155Generic";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600280546001600160a01b0319163317905560408051808201909152600f8082526e47656e65726963204552433131353560881b60209092019182526200005c9160009162000094565b506040805180820190915260078082526647454e3131353560c81b60209092019182526200008d9160019162000094565b5062000176565b828054620000a2906200013a565b90600052602060002090601f016020900481019282620000c6576000855562000111565b82601f10620000e157805160ff191683800117855562000111565b8280016001018555821562000111579182015b8281111562000111578251825591602001919060010190620000f4565b506200011f92915062000123565b5090565b5b808211156200011f576000815560010162000124565b600181811c908216806200014f57607f821691505b6020821081036200017057634e487b7160e01b600052602260045260246000fd5b50919050565b6116f880620001866000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c80634e1273f4116100715780634e1273f4146101855780638da5cb5b146101a557806395d89b41146101d0578063a22cb465146101d8578063e985e9c5146101eb578063f242432a1461022757600080fd5b8062fdd58e146100b857806301ffc9a71461010157806306fdde03146101355780631b2ef1ca1461014a5780632eb2c2d61461015f5780633d5d190c14610172575b600080fd5b6100ee6100c636600461104e565b6001600160a01b03919091166000908152600360209081526040808320938352929052205490565b6040519081526020015b60405180910390f35b61012561010f366004611091565b6001600160e01b031916636cdb3d1360e11b1490565b60405190151581526020016100f8565b61013d61023a565b6040516100f891906110b5565b61015d61015836600461110a565b6102c8565b005b61015d61016d3660046111ba565b6103f5565b61015d610180366004611275565b610902565b610198610193366004611275565b610aec565b6040516100f891906112e1565b6002546101b8906001600160a01b031681565b6040516001600160a01b0390911681526020016100f8565b61013d610c32565b61015d6101e6366004611325565b610c3f565b6101256101f9366004611361565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b61015d610235366004611394565b610cab565b600080546102479061140c565b80601f01602080910402602001604051908101604052809291908181526020018280546102739061140c565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081565b3360009081526003602090815260408083208584529091529020546102ee90829061145c565b33600081815260036020908152604080832087845282528083209490945583518681529081018590529192909183917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461035133610ff6565b156103f15760405163f23a6e6160e01b808252336004830181905260248301819052604483018590526064830184905260a06084840152600060a4840152909163f23a6e619060c4016020604051808303816000875af11580156103b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dd9190611474565b6001600160e01b031916146103f157600080fd5b5050565b336001600160a01b038916148061042f57506001600160a01b038816600090815260046020908152604080832033845290915290205460ff165b6104ba5760405162461bcd60e51b815260206004820152604b60248201527f7361666542617463685472616e7366657246726f6d3a206d73672e73656e646560448201527f72206973206e6f7420616c6c6f77656420746f206d616e6970756c617465205f60648201526a66726f6d20746f6b656e7360a81b608482015260a4015b60405180910390fd5b6001600160a01b0387166105265760405162461bcd60e51b815260206004820152602d60248201527f7361666542617463685472616e7366657246726f6d3a2063616e6e6f7420747260448201526c0616e7366657220746f2030783609c1b60648201526084016104b1565b84831461059b5760405162461bcd60e51b815260206004820152603760248201527f7361666542617463685472616e7366657246726f6d3a205f69647320616e642060448201527f5f76616c756573206c656e676874206d69736d6174636800000000000000000060648201526084016104b1565b60005b858110156107fb576001600160a01b0389166000908152600360205260408120908888848181106105d1576105d1611491565b905060200201358152602001908152602001600020548585838181106105f9576105f9611491565b90506020020135111561068a5760405162461bcd60e51b815260206004820152604d60248201527f7361666542617463685472616e7366657246726f6d3a2042616c616e6365206f60448201527f66205f66726f6d20697320746f6f206c6f7720746f207472616e73666572205f60648201526c76616c75657320746f6b656e7360981b608482015260a4016104b1565b84848281811061069c5761069c611491565b90506020020135600360008b6001600160a01b03166001600160a01b0316815260200190815260200160002060008989858181106106dc576106dc611491565b905060200201358152602001908152602001600020546106fc91906114a7565b6001600160a01b038a1660009081526003602052604081209089898581811061072757610727611491565b9050602002013581526020019081526020016000208190555084848281811061075257610752611491565b90506020020135600360008a6001600160a01b03166001600160a01b03168152602001908152602001600020600089898581811061079257610792611491565b905060200201358152602001908152602001600020546107b2919061145c565b6001600160a01b0389166000908152600360205260408120908989858181106107dd576107dd611491565b9050602002013581526020019081526020016000208190555061059e565b876001600160a01b0316896001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8a8a8a8a60405161084e94939291906114f4565b60405180910390a461085f88610ff6565b156108f75760405163bc197c8160e01b808252906001600160a01b038a169063bc197c81906108a09033908e908d908d908d908d908d908d9060040161154f565b6020604051808303816000875af11580156108bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e39190611474565b6001600160e01b031916146108f757600080fd5b505050505050505050565b8281146109605760405162461bcd60e51b815260206004820152602660248201527f6d696e743a205f69647320616e64205f76616c756573206c656e676874206d696044820152650e6dac2e8c6d60d31b60648201526084016104b1565b60005b83811015610a0b5782828281811061097d5761097d611491565b336000908152600360209081526040822092029390930135929091508787858181106109ab576109ab611491565b905060200201358152602001908152602001600020546109cb919061145c565b336000908152600360205260408120908787858181106109ed576109ed611491565b90506020020135815260200190815260200160002081905550610963565b604051339060009082907f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb90610a48908a908a908a908a906114f4565b60405180910390a4610a5933610ff6565b15610ae55760405163bc197c8160e01b80825290339063bc197c8190610a8e9083906000908b908b908b908b906004016115b3565b6020604051808303816000875af1158015610aad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad19190611474565b6001600160e01b03191614610ae557600080fd5b5050505050565b606083826000610afc8284611612565b67ffffffffffffffff811115610b1457610b14611631565b604051908082528060200260200182016040528015610b3d578160200160208202803683370190505b5090506000805b84821015610c24575b83811015610c0f57600360008b8b85818110610b6b57610b6b611491565b9050602002016020810190610b809190611647565b6001600160a01b03166001600160a01b031681526020019081526020016000206000898984818110610bb457610bb4611491565b9050602002013581526020019081526020016000205483828685610bd89190611612565b610be2919061145c565b81518110610bf257610bf2611491565b602090810291909101015280610c0781611662565b915050610b4d565b50600081610c1c81611662565b925050610b44565b509098975050505050505050565b600180546102479061140c565b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b336001600160a01b0387161480610ce557506001600160a01b038616600090815260046020908152604080832033845290915290205460ff165b610d665760405162461bcd60e51b815260206004820152604660248201527f736166655472616e7366657246726f6d3a206d73672e73656e6465722069732060448201527f6e6f7420616c6c6f77656420746f206d616e6970756c617465205f66726f6d20606482015265746f6b656e7360d01b608482015260a4016104b1565b6001600160a01b038516610dcd5760405162461bcd60e51b815260206004820152602860248201527f736166655472616e7366657246726f6d3a2063616e6e6f74207472616e73666560448201526707220746f203078360c41b60648201526084016104b1565b6001600160a01b0386166000908152600360209081526040808320878452909152902054831115610e765760405162461bcd60e51b815260206004820152604760248201527f736166655472616e7366657246726f6d3a2042616c616e6365206f66205f667260448201527f6f6d20697320746f6f206c6f7720746f207472616e73666572205f76616c756560648201526620746f6b656e7360c81b608482015260a4016104b1565b6001600160a01b0386166000908152600360209081526040808320878452909152902054610ea59084906114a7565b6001600160a01b0380881660009081526003602081815260408084208a8552825280842095909555928916825282528281208782529091522054610eea90849061145c565b6001600160a01b0386811660008181526003602090815260408083208a845282529182902094909455805188815293840187905290929189169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610f5a85610ff6565b15610fee5760405163f23a6e6160e01b808252906001600160a01b0387169063f23a6e6190610f979033908b908a908a908a908a9060040161167b565b6020604051808303816000875af1158015610fb6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fda9190611474565b6001600160e01b03191614610fee57600080fd5b505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061102a57508115155b949350505050565b80356001600160a01b038116811461104957600080fd5b919050565b6000806040838503121561106157600080fd5b61106a83611032565b946020939093013593505050565b6001600160e01b03198116811461108e57600080fd5b50565b6000602082840312156110a357600080fd5b81356110ae81611078565b9392505050565b600060208083528351808285015260005b818110156110e2578581018301518582016040015282016110c6565b818111156110f4576000604083870101525b50601f01601f1916929092016040019392505050565b6000806040838503121561111d57600080fd5b50508035926020909101359150565b60008083601f84011261113e57600080fd5b50813567ffffffffffffffff81111561115657600080fd5b6020830191508360208260051b850101111561117157600080fd5b9250929050565b60008083601f84011261118a57600080fd5b50813567ffffffffffffffff8111156111a257600080fd5b60208301915083602082850101111561117157600080fd5b60008060008060008060008060a0898b0312156111d657600080fd5b6111df89611032565b97506111ed60208a01611032565b9650604089013567ffffffffffffffff8082111561120a57600080fd5b6112168c838d0161112c565b909850965060608b013591508082111561122f57600080fd5b61123b8c838d0161112c565b909650945060808b013591508082111561125457600080fd5b506112618b828c01611178565b999c989b5096995094979396929594505050565b6000806000806040858703121561128b57600080fd5b843567ffffffffffffffff808211156112a357600080fd5b6112af8883890161112c565b909650945060208701359150808211156112c857600080fd5b506112d58782880161112c565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b81811015611319578351835292840192918401916001016112fd565b50909695505050505050565b6000806040838503121561133857600080fd5b61134183611032565b91506020830135801515811461135657600080fd5b809150509250929050565b6000806040838503121561137457600080fd5b61137d83611032565b915061138b60208401611032565b90509250929050565b60008060008060008060a087890312156113ad57600080fd5b6113b687611032565b95506113c460208801611032565b94506040870135935060608701359250608087013567ffffffffffffffff8111156113ee57600080fd5b6113fa89828a01611178565b979a9699509497509295939492505050565b600181811c9082168061142057607f821691505b60208210810361144057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561146f5761146f611446565b500190565b60006020828403121561148657600080fd5b81516110ae81611078565b634e487b7160e01b600052603260045260246000fd5b6000828210156114b9576114b9611446565b500390565b81835260006001600160fb1b038311156114d757600080fd5b8260051b8083602087013760009401602001938452509192915050565b6040815260006115086040830186886114be565b828103602084015261151b8185876114be565b979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0389811682528816602082015260a06040820181905260009061157c908301888a6114be565b828103606084015261158f8187896114be565b905082810360808401526115a4818587611526565b9b9a5050505050505050505050565b6001600160a01b0387811682528616602082015260a0604082018190526000906115e090830186886114be565b82810360608401526115f38185876114be565b8381036080909401939093525050600081526020019695505050505050565b600081600019048311821515161561162c5761162c611446565b500290565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561165957600080fd5b6110ae82611032565b60006001820161167457611674611446565b5060010190565b6001600160a01b03878116825286166020820152604081018590526060810184905260a0608082018190526000906116b69083018486611526565b9897505050505050505056fea26469706673582212201a9344701c6061adc2ba98d20ebe02805f4968e1a4627df2702dea73890ff1ad64736f6c634300080d0033";

type ERC1155GenericConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155GenericConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Generic__factory extends ContractFactory {
  constructor(...args: ERC1155GenericConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Generic> {
    return super.deploy(overrides || {}) as Promise<ERC1155Generic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155Generic {
    return super.attach(address) as ERC1155Generic;
  }
  override connect(signer: Signer): ERC1155Generic__factory {
    return super.connect(signer) as ERC1155Generic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155GenericInterface {
    return new utils.Interface(_abi) as ERC1155GenericInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Generic {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Generic;
  }
}
