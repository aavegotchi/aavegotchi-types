/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ERC721WithRoyalties,
  ERC721WithRoyaltiesInterface,
} from "../../../../../../src/contracts/aavegotchi-contracts/contracts/test/ERC721WithRoyalties";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "address",
        name: "royaltyRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyValue",
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
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "royaltyRecipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "royaltyValues",
        type: "uint256[]",
      },
    ],
    name: "mintBatch",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
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
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
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
        name: "interfaceId",
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
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001b4a38038062001b4a8339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000287565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b6020821081036200028157634e487b7160e01b600052602260045260246000fd5b50919050565b6118b380620002976000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a0823111610097578063c6c3bbe611610066578063c6c3bbe61461023c578063c87b56dd1461024f578063ccee286d14610262578063e985e9c51461027557600080fd5b806370a08231146101ed57806395d89b411461020e578063a22cb46514610216578063b88d4fde1461022957600080fd5b806323b872dd116100d357806323b872dd146101825780632a55205a1461019557806342842e0e146101c75780636352211e146101da57600080fd5b806301ffc9a71461010557806306fdde031461012d578063081812fc14610142578063095ea7b31461016d575b600080fd5b6101186101133660046111fc565b6102b1565b60405190151581526020015b60405180910390f35b6101356102dc565b6040516101249190611271565b610155610150366004611284565b61036e565b6040516001600160a01b039091168152602001610124565b61018061017b3660046112b9565b610408565b005b6101806101903660046112e3565b61051d565b6101a86101a336600461131f565b61054e565b604080516001600160a01b039093168352602083019190915201610124565b6101806101d53660046112e3565b6105ac565b6101556101e8366004611284565b6105c7565b6102006101fb366004611341565b61063e565b604051908152602001610124565b6101356106c5565b61018061022436600461135c565b6106d4565b6101806102373660046113df565b6106e3565b61018061024a3660046112e3565b61071b565b61013561025d366004611284565b610761565b610180610270366004611535565b610849565b610118610283366004611613565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b600063152a902d60e11b6001600160e01b0319831614806102d657506102d682610971565b92915050565b6060600080546102eb90611646565b80601f016020809104026020016040519081016040528092919081815260200182805461031790611646565b80156103645780601f1061033957610100808354040283529160200191610364565b820191906000526020600020905b81548152906001019060200180831161034757829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103ec5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610413826105c7565b9050806001600160a01b0316836001600160a01b0316036104805760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103e3565b336001600160a01b038216148061049c575061049c8133610283565b61050e5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103e3565b61051883836109c1565b505050565b6105273382610a2f565b6105435760405162461bcd60e51b81526004016103e390611680565b610518838383610b26565b60008281526007602090815260408083208151808301909252546001600160a01b038116808352600160a01b90910462ffffff1692820183905292916127109061059890866116e7565b6105a2919061171c565b9150509250929050565b610518838383604051806020016040528060008152506106e3565b6000818152600260205260408120546001600160a01b0316806102d65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016103e3565b60006001600160a01b0382166106a95760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016103e3565b506001600160a01b031660009081526003602052604090205490565b6060600180546102eb90611646565b6106df338383610cc2565b5050565b6106ed3383610a2f565b6107095760405162461bcd60e51b81526004016103e390611680565b61071584848484610d90565b50505050565b6000600654905061073c848260405180602001604052806000815250610dc3565b811561074d5761074d818484610df6565b610758816001611730565b60065550505050565b6000818152600260205260409020546060906001600160a01b03166107e05760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103e3565b60006107f760408051602081019091526000815290565b905060008151116108175760405180602001604052806000815250610842565b8061082184610e9f565b604051602001610832929190611748565b6040516020818303038152906040525b9392505050565b6006548251845114801561085e575081518451145b6108aa5760405162461bcd60e51b815260206004820152601e60248201527f4552433732313a20417272617973206c656e677468206d69736d61746368000060448201526064016103e3565b60005b8451811015610968576108e98582815181106108cb576108cb611777565b60200260200101518360405180602001604052806000815250610dc3565b60008382815181106108fd576108fd611777565b60200260200101511115610948576109488285838151811061092157610921611777565b602002602001015185848151811061093b5761093b611777565b6020026020010151610df6565b816109528161178d565b92505080806109609061178d565b9150506108ad565b50600655505050565b60006001600160e01b031982166380ac58cd60e01b14806109a257506001600160e01b03198216635b5e139f60e01b145b806102d657506301ffc9a760e01b6001600160e01b03198316146102d6565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906109f6826105c7565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610aa85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103e3565b6000610ab3836105c7565b9050806001600160a01b0316846001600160a01b03161480610afa57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610b1e5750836001600160a01b0316610b138461036e565b6001600160a01b0316145b949350505050565b826001600160a01b0316610b39826105c7565b6001600160a01b031614610b9d5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103e3565b6001600160a01b038216610bff5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103e3565b610c0a6000826109c1565b6001600160a01b0383166000908152600360205260408120805460019290610c339084906117a6565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c61908490611730565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b031603610d235760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103e3565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610d9b848484610b26565b610da784848484610fa0565b6107155760405162461bcd60e51b81526004016103e3906117bd565b610dcd83836110a1565b610dda6000848484610fa0565b6105185760405162461bcd60e51b81526004016103e3906117bd565b612710811115610e485760405162461bcd60e51b815260206004820152601a60248201527f45524332393831526f79616c746965733a20546f6f206869676800000000000060448201526064016103e3565b6040805180820182526001600160a01b03938416815262ffffff928316602080830191825260009687526007905291909420935184549151909216600160a01b026001600160b81b03199091169190921617179055565b606081600003610ec65750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610ef05780610eda8161178d565b9150610ee99050600a8361171c565b9150610eca565b60008167ffffffffffffffff811115610f0b57610f0b611398565b6040519080825280601f01601f191660200182016040528015610f35576020820181803683370190505b5090505b8415610b1e57610f4a6001836117a6565b9150610f57600a8661180f565b610f62906030611730565b60f81b818381518110610f7757610f77611777565b60200101906001600160f81b031916908160001a905350610f99600a8661171c565b9450610f39565b60006001600160a01b0384163b1561109657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fe4903390899088908890600401611823565b6020604051808303816000875af192505050801561101f575060408051601f3d908101601f1916820190925261101c91810190611860565b60015b61107c573d80801561104d576040519150601f19603f3d011682016040523d82523d6000602084013e611052565b606091505b5080516000036110745760405162461bcd60e51b81526004016103e3906117bd565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b1e565b506001949350505050565b6001600160a01b0382166110f75760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103e3565b6000818152600260205260409020546001600160a01b03161561115c5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103e3565b6001600160a01b0382166000908152600360205260408120805460019290611185908490611730565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b0319811681146111f957600080fd5b50565b60006020828403121561120e57600080fd5b8135610842816111e3565b60005b8381101561123457818101518382015260200161121c565b838111156107155750506000910152565b6000815180845261125d816020860160208601611219565b601f01601f19169290920160200192915050565b6020815260006108426020830184611245565b60006020828403121561129657600080fd5b5035919050565b80356001600160a01b03811681146112b457600080fd5b919050565b600080604083850312156112cc57600080fd5b6112d58361129d565b946020939093013593505050565b6000806000606084860312156112f857600080fd5b6113018461129d565b925061130f6020850161129d565b9150604084013590509250925092565b6000806040838503121561133257600080fd5b50508035926020909101359150565b60006020828403121561135357600080fd5b6108428261129d565b6000806040838503121561136f57600080fd5b6113788361129d565b91506020830135801515811461138d57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156113d7576113d7611398565b604052919050565b600080600080608085870312156113f557600080fd5b6113fe8561129d565b9350602061140d81870161129d565b935060408601359250606086013567ffffffffffffffff8082111561143157600080fd5b818801915088601f83011261144557600080fd5b81358181111561145757611457611398565b611469601f8201601f191685016113ae565b9150808252898482850101111561147f57600080fd5b808484018584013760008482840101525080935050505092959194509250565b600067ffffffffffffffff8211156114b9576114b9611398565b5060051b60200190565b600082601f8301126114d457600080fd5b813560206114e96114e48361149f565b6113ae565b82815260059290921b8401810191818101908684111561150857600080fd5b8286015b8481101561152a5761151d8161129d565b835291830191830161150c565b509695505050505050565b60008060006060848603121561154a57600080fd5b833567ffffffffffffffff8082111561156257600080fd5b61156e878388016114c3565b945060209150818601358181111561158557600080fd5b611591888289016114c3565b9450506040860135818111156115a657600080fd5b86019050601f810187136115b957600080fd5b80356115c76114e48261149f565b81815260059190911b820183019083810190898311156115e657600080fd5b928401925b82841015611604578335825292840192908401906115eb565b80955050505050509250925092565b6000806040838503121561162657600080fd5b61162f8361129d565b915061163d6020840161129d565b90509250929050565b600181811c9082168061165a57607f821691505b60208210810361167a57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611701576117016116d1565b500290565b634e487b7160e01b600052601260045260246000fd5b60008261172b5761172b611706565b500490565b60008219821115611743576117436116d1565b500190565b6000835161175a818460208801611219565b83519083019061176e818360208801611219565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161179f5761179f6116d1565b5060010190565b6000828210156117b8576117b86116d1565b500390565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60008261181e5761181e611706565b500690565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061185690830184611245565b9695505050505050565b60006020828403121561187257600080fd5b8151610842816111e356fea2646970667358221220fc7deaf66ee6a48a51162065e6e83cbc403fe60c0502d956beda70d1548169a464736f6c634300080d0033";

type ERC721WithRoyaltiesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721WithRoyaltiesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721WithRoyalties__factory extends ContractFactory {
  constructor(...args: ERC721WithRoyaltiesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721WithRoyalties> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC721WithRoyalties>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721WithRoyalties {
    return super.attach(address) as ERC721WithRoyalties;
  }
  override connect(signer: Signer): ERC721WithRoyalties__factory {
    return super.connect(signer) as ERC721WithRoyalties__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721WithRoyaltiesInterface {
    return new utils.Interface(_abi) as ERC721WithRoyaltiesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721WithRoyalties {
    return new Contract(address, _abi, signerOrProvider) as ERC721WithRoyalties;
  }
}