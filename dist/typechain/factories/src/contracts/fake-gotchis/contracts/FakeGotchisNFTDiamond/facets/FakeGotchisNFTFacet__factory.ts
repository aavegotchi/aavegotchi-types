/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  FakeGotchisNFTFacet,
  FakeGotchisNFTFacetInterface,
} from "../../../../../../../src/contracts/fake-gotchis/contracts/FakeGotchisNFTDiamond/facets/FakeGotchisNFTFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_aavegotchiDiamond",
        type: "address",
      },
    ],
    name: "AavegotchiAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_fakeGotchisCardDiamond",
        type: "address",
      },
    ],
    name: "FakeGotchisCardAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_ghstContract",
        type: "address",
      },
    ],
    name: "GhstAddressUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "burnTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "approved_",
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
        name: "approved_",
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
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "multiRoyaltyInfo",
    outputs: [
      {
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "royaltyAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
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
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransfer",
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
        name: "_tokenId",
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
        name: "_tokenId",
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
        name: "_aavegotchiDiamond",
        type: "address",
      },
    ],
    name: "setAavegotchiAddress",
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
        internalType: "address",
        name: "_fakeGotchisCardDiamond",
        type: "address",
      },
    ],
    name: "setFakeGotchisCardAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ghstContract",
        type: "address",
      },
    ],
    name: "setGhstAddress",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId_",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "tokenIdsOfOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds_",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
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
    inputs: [],
    name: "totalSupply",
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
        name: "_tokenId",
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
  "0x608060405234801561001057600080fd5b506134b9806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806367a53173116100b85780639e59e5981161007c5780639e59e598146102d0578063a22cb465146102f0578063acbd62bc14610303578063b88d4fde14610324578063c87b56dd14610337578063e985e9c51461034a57600080fd5b806367a531731461025057806370a08231146102635780637ab8678c1461028c57806381eebadb1461029f57806395d89b41146102b257600080fd5b806323b872dd116100ff57806323b872dd146101db5780633d17599f146101ee57806342842e0e146102015780634f6ccce7146102145780636352211e1461022757600080fd5b806306fdde031461013c57806307255d5914610176578063081812fc1461018b578063095ea7b3146101b657806318160ddd146101c9575b600080fd5b60408051808201909152600c81526b46414b4520476f746368697360a01b60208201525b60405161016d919061279a565b60405180910390f35b6101896101843660046127c9565b610396565b005b61019e6101993660046127e4565b6103f3565b6040516001600160a01b03909116815260200161016d565b6101896101c43660046127fd565b61048b565b600d545b60405190815260200161016d565b6101896101e9366004612827565b6105ac565b6101896101fc3660046127c9565b610648565b61018961020f366004612827565b61069e565b6101cd6102223660046127e4565b6106d2565b61019e6102353660046127e4565b6000908152600f60205260409020546001600160a01b031690565b61018961025e3660046128a8565b610761565b6101cd6102713660046127c9565b6001600160a01b031660009081526011602052604090205490565b61018961029a3660046127c9565b6108a1565b6101896102ad36600461292c565b6108f7565b604080518082019091526002815261464760f01b6020820152610160565b6102e36102de3660046127c9565b610942565b60405161016d91906129f8565b6101896102fe366004612a0b565b6109ae565b610316610311366004612a47565b610a2c565b60405161016d929190612a69565b610189610332366004612ac9565b6111d2565b6101606103453660046127e4565b6112b3565b610386610358366004612b38565b6001600160a01b03918216600090815260126020908152604080832093909416825291909152205460ff1690565b604051901515815260200161016d565b61039e611c59565b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527f655ce99b4f0dfa7fb192ab859e83aa7a742c625af5cddee8e48c3b3c0d78fe41906020015b60405180910390a150565b6000818152600f60205260408120546001600160a01b031661046f5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a20746f6b656e496420697320696e76616c6964206f72206973604482015269081b9bdd081bdddb995960b21b60648201526084015b60405180910390fd5b506000908152601360205260409020546001600160a01b031690565b6000818152600f60205260408120546001600160a01b0316906104ac611ce2565b9050806001600160a01b0316826001600160a01b031614806104f357506001600160a01b0380831660009081526012602090815260408083209385168352929052205460ff165b61054f5760405162461bcd60e51b815260206004820152602760248201527f4552433732313a204e6f74206f776e6572206f72206f70657261746f72206f66604482015266103a37b5b2b71760c91b6064820152608401610466565b60008381526013602052604080822080546001600160a01b0319166001600160a01b0388811691821790925591518693918616917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a450505050565b60006105b6611ce2565b90506105c481858585611d3e565b6001546001600160a01b03161561064257600154604051631f76b1ad60e11b8152306004820152602481018490526001600160a01b03868116604483015290911690633eed635a90606401600060405180830381600087803b15801561062957600080fd5b505af115801561063d573d6000803e3d6000fd5b505050505b50505050565b610650611c59565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fc4e5e10e2bcff94f0aa255be641cd51343f5ded1678907a674def1814a670e41906020016103e8565b60006106a8611ce2565b90506106b681858585611d3e565b6105c481858585604051806020016040528060008152506121bc565b600d54600090821061073b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a205f696e6465782069732067726561746572207468616e207460448201526b37ba30b61039bab838363c9760a11b6064820152608401610466565b600d80548390811061074f5761074f612b6b565b90600052602060002001549050919050565b60005b8181101561089c576107dc610777611ce2565b600f600086868681811061078d5761078d612b6b565b90506020020135815260200190815260200160002060009054906101000a90046001600160a01b03166001600160a01b038686868181106107d0576107d0612b6b565b90506020020135611d3e565b6001546001600160a01b03161561088a576001546001600160a01b0316633eed635a3085858581811061081157610811612b6b565b90506020020135610820611ce2565b60405160e085901b6001600160e01b03191681526001600160a01b03938416600482015260248101929092529091166044820152606401600060405180830381600087803b15801561087157600080fd5b505af1158015610885573d6000803e3d6000fd5b505050505b8061089481612b97565b915050610764565b505050565b6108a9611c59565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f85ccc603dd847f57dfe0cb1f8e4db5dba4a1ee0b35de9ca03f1603d5b3841d82906020016103e8565b60005b8381101561093957610927878787878581811061091957610919612b6b565b9050602002013586866111d2565b8061093181612b97565b9150506108fa565b50505050505050565b6001600160a01b0381166000908152601160209081526040918290208054835181840281018401909452808452606093928301828280156109a257602002820191906000526020600020905b81548152602001906001019080831161098e575b50505050509050919050565b60006109b8611ce2565b6001600160a01b03818116600081815260126020908152604080832094891680845294825291829020805460ff19168815159081179091559151918252939450919290917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6000828152600e602090815260408083205483526006825280832081516102408101835281546001600160a01b0316815282518084019384905260609586959094929392908401919060018401906002908288855b82829054906101000a900461ffff1661ffff1681526020019060020190602082600101049283019260010382029150808411610a8157505050928452505050600282015461ffff8116602083015262010000810463ffffffff908116604084015266010000000000008083049091166060840152600160501b9091046001600160a01b03166080830152600383015464ffffffffff811660a084015265010000000000810460ff90811660c085015291900416151560e082015260048201805461010090920191610b5190612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7d90612bb0565b8015610bca5780601f10610b9f57610100808354040283529160200191610bca565b820191906000526020600020905b815481529060010190602001808311610bad57829003601f168201915b50505050508152602001600582018054610be390612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0f90612bb0565b8015610c5c5780601f10610c3157610100808354040283529160200191610c5c565b820191906000526020600020905b815481529060010190602001808311610c3f57829003601f168201915b50505050508152602001600682018054610c7590612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca190612bb0565b8015610cee5780601f10610cc357610100808354040283529160200191610cee565b820191906000526020600020905b815481529060010190602001808311610cd157829003601f168201915b50505050508152602001600782018054610d0790612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3390612bb0565b8015610d805780601f10610d5557610100808354040283529160200191610d80565b820191906000526020600020905b815481529060010190602001808311610d6357829003601f168201915b50505050508152602001600882018054610d9990612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610dc590612bb0565b8015610e125780601f10610de757610100808354040283529160200191610e12565b820191906000526020600020905b815481529060010190602001808311610df557829003601f168201915b50505050508152602001600982018054610e2b90612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5790612bb0565b8015610ea45780601f10610e7957610100808354040283529160200191610ea4565b820191906000526020600020905b815481529060010190602001808311610e8757829003601f168201915b50505050508152602001600a82018054610ebd90612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee990612bb0565b8015610f365780601f10610f0b57610100808354040283529160200191610f36565b820191906000526020600020905b815481529060010190602001808311610f1957829003601f168201915b50505050508152602001600b82018054610f4f90612bb0565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7b90612bb0565b8015610fc85780601f10610f9d57610100808354040283529160200191610fc8565b820191906000526020600020905b815481529060010190602001808311610fab57829003601f168201915b50505050508152602001600c82018054610fe190612bb0565b80601f016020809104026020016040519081016040528092919081815260200182805461100d90612bb0565b801561105a5780601f1061102f5761010080835404028352916020019161105a565b820191906000526020600020905b81548152906001019060200180831161103d57829003601f168201915b5050505050815250509050600267ffffffffffffffff81111561107f5761107f612bea565b6040519080825280602002602001820160405280156110a8578160200160208202803683370190505b5060408051600280825260608201835292955091906020830190803683370190505091508060000151836000815181106110e4576110e4612b6b565b60200260200101906001600160a01b031690816001600160a01b0316815250508060a001518360018151811061111c5761111c612b6b565b6001600160a01b0392909216602092830291909101820152810151516127109061114a9061ffff1686612c00565b6111549190612c35565b8260008151811061116757611167612b6b565b602002602001018181525050612710816020015160016002811061118d5761118d612b6b565b60200201516111a09061ffff1686612c00565b6111aa9190612c35565b826001815181106111bd576111bd612b6b565b602002602001018181525050505b9250929050565b60006111dc611ce2565b90506111ea81878787611d3e565b61122d8187878787878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506121bc92505050565b6001546001600160a01b0316156112ab57600154604051631f76b1ad60e11b8152306004820152602481018690526001600160a01b03888116604483015290911690633eed635a90606401600060405180830381600087803b15801561129257600080fd5b505af11580156112a6573d6000803e3d6000fd5b505050505b505050505050565b6000818152600e602090815260408083205483526006825280832081516102408101835281546001600160a01b031681528251808401938490526060959491939184019160018401906002908288855b82829054906101000a900461ffff1661ffff168152602001906002019060208260010104928301926001038202915080841161130357505050928452505050600282015461ffff8116602083015262010000810463ffffffff908116604084015266010000000000008083049091166060840152600160501b9091046001600160a01b03166080830152600383015464ffffffffff811660a084015265010000000000810460ff90811660c085015291900416151560e0820152600482018054610100909201916113d390612bb0565b80601f01602080910402602001604051908101604052809291908181526020018280546113ff90612bb0565b801561144c5780601f106114215761010080835404028352916020019161144c565b820191906000526020600020905b81548152906001019060200180831161142f57829003601f168201915b5050505050815260200160058201805461146590612bb0565b80601f016020809104026020016040519081016040528092919081815260200182805461149190612bb0565b80156114de5780601f106114b3576101008083540402835291602001916114de565b820191906000526020600020905b8154815290600101906020018083116114c157829003601f168201915b505050505081526020016006820180546114f790612bb0565b80601f016020809104026020016040519081016040528092919081815260200182805461152390612bb0565b80156115705780601f1061154557610100808354040283529160200191611570565b820191906000526020600020905b81548152906001019060200180831161155357829003601f168201915b5050505050815260200160078201805461158990612bb0565b80601f01602080910402602001604051908101604052809291908181526020018280546115b590612bb0565b80156116025780601f106115d757610100808354040283529160200191611602565b820191906000526020600020905b8154815290600101906020018083116115e557829003601f168201915b5050505050815260200160088201805461161b90612bb0565b80601f016020809104026020016040519081016040528092919081815260200182805461164790612bb0565b80156116945780601f1061166957610100808354040283529160200191611694565b820191906000526020600020905b81548152906001019060200180831161167757829003601f168201915b505050505081526020016009820180546116ad90612bb0565b80601f01602080910402602001604051908101604052809291908181526020018280546116d990612bb0565b80156117265780601f106116fb57610100808354040283529160200191611726565b820191906000526020600020905b81548152906001019060200180831161170957829003601f168201915b50505050508152602001600a8201805461173f90612bb0565b80601f016020809104026020016040519081016040528092919081815260200182805461176b90612bb0565b80156117b85780601f1061178d576101008083540402835291602001916117b8565b820191906000526020600020905b81548152906001019060200180831161179b57829003601f168201915b50505050508152602001600b820180546117d190612bb0565b80601f01602080910402602001604051908101604052809291908181526020018280546117fd90612bb0565b801561184a5780601f1061181f5761010080835404028352916020019161184a565b820191906000526020600020905b81548152906001019060200180831161182d57829003601f168201915b50505050508152602001600c8201805461186390612bb0565b80601f016020809104026020016040519081016040528092919081815260200182805461188f90612bb0565b80156118dc5780601f106118b1576101008083540402835291602001916118dc565b820191906000526020600020905b8154815290600101906020018083116118bf57829003601f168201915b5050509190925250508151919250506001600160a01b03166119405760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20496e76616c696420746f6b656e20696400000000000000006044820152606401610466565b600061195a82600001516001600160a01b031660146122ab565b60405160200161196a9190612c49565b604051602081830303815290604052905080826101a00151604051602001611993929190612ca7565b6040516020818303038152906040529050806119bd8360a001516001600160a01b031660146122ab565b6040516020016119ce929190612d21565b6040516020818303038152906040529050808261018001516040516020016119f7929190612d8a565b604051602081830303815290604052905080826101600151604051602001611a20929190612e01565b604051602081830303815290604052905080826101e00151604051602001611a49929190612e7a565b604051602081830303815290604052905080826102000151604051602001611a72929190612ed8565b604051602081830303815290604052905080826102200151604051602001611a9b929190612f67565b604051602081830303815290604052905080611abe836040015161ffff1661244e565b604051602001611acf929190612fe6565b604051602081830303815290604052905080611af58360c0015164ffffffffff1661244e565b604051602001611b0692919061305a565b604051602081830303815290604052905080611b2b836060015163ffffffff1661244e565b604051602001611b3c9291906130d0565b604051602081830303815290604052905080611b61836080015163ffffffff1661244e565b604051602001611b7292919061312a565b604051602081830303815290604052905080604051602001611b94919061319f565b6040516020818303038152906040529050816101c0015181604051602001611bbd9291906131e2565b6040516020818303038152906040529050611bdc826101400151612557565b81604051602001611bee929190613248565b604051602081830303815290604052905081610120015181604051602001611c179291906132a1565b6040516020818303038152906040529050611c31816125ef565b604051602001611c419190613302565b60405160208183030381529060405292505050919050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b03163314611ce05760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b6064820152608401610466565b565b6000303303611d3857600080368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050503601516001600160a01b03169150611d3b9050565b50335b90565b60006001600160a01b038316611da25760405162461bcd60e51b815260206004820152602360248201527f4552433732313a2043616e2774207472616e7366657220746f2030206164647260448201526265737360e81b6064820152608401610466565b6000828152600f820160205260409020546001600160a01b031680611e215760405162461bcd60e51b815260206004820152602f60248201527f4552433732313a20496e76616c696420746f6b656e4964206f722063616e277460448201526e081899481d1c985b9cd9995c9c9959608a1b6064820152608401610466565b806001600160a01b0316866001600160a01b03161480611e6857506001600160a01b0380821660009081526012840160209081526040808320938a168352929052205460ff165b80611e8e575060008381526013830160205260409020546001600160a01b038781169116145b611eef5760405162461bcd60e51b815260206004820152602c60248201527f4c69624552433732313a204e6f74206f776e6572206f7220617070726f76656460448201526b103a37903a3930b739b332b960a11b6064820152608401610466565b806001600160a01b0316856001600160a01b031614611f645760405162461bcd60e51b815260206004820152602b60248201527f4552433732313a205f66726f6d206973206e6f74206f776e65722c207472616e60448201526a1cd9995c8819985a5b195960aa1b6064820152608401610466565b6000838152600f83016020908152604080832080546001600160a01b0319166001600160a01b0389811691909117909155881680845260108601835281842087855283528184205490845260118601909252822054909190611fc890600190613347565b6001600160a01b038816600090815260118601602052604081208054929350909183908110611ff957611ff9612b6b565b60009182526020808320909101546001600160a01b03808b16845260118901808452604080862054928e1680875260108c01865281872085885286528187208a90558652935291909220805492935090918391908690811061205d5761205d612b6b565b60009182526020808320909101929092556001600160a01b038b1680825260108901835260408083208b8452845280832083905590825260118901909252208054806120ab576120ab61335e565b6000828152602080822083016000199081018390559092019092556001600160a01b03808b1680845260108a01835260408085208c8652845280852086905590845260118a0183528084208054600181018255908552838520018b90558a845260138a01909252912054161561216f57600087815260138701602052604080822080546001600160a01b0319169055518891906001600160a01b038816907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925908390a45b86886001600160a01b03168a6001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050505050505050565b823b80156112ab57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906121f6908990899088908890600401613374565b6020604051808303816000875af1158015612215573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061223991906133a7565b6001600160e01b031916630a85bd0160e11b146112ab5760405162461bcd60e51b815260206004820152602a60248201527f4c69624552433732313a205472616e736665722072656a65637465642f6661696044820152696c6564206279205f746f60b01b6064820152608401610466565b606060006122ba836002612c00565b6122c59060026133d1565b67ffffffffffffffff8111156122dd576122dd612bea565b6040519080825280601f01601f191660200182016040528015612307576020820181803683370190505b509050600360fc1b8160008151811061232257612322612b6b565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061235157612351612b6b565b60200101906001600160f81b031916908160001a9053506000612375846002612c00565b6123809060016133d1565b90505b60018111156123f8576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106123b4576123b4612b6b565b1a60f81b8282815181106123ca576123ca612b6b565b60200101906001600160f81b031916908160001a90535060049490941c936123f1816133e9565b9050612383565b5083156124475760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610466565b9392505050565b6060816000036124755750506040805180820190915260018152600360fc1b602082015290565b8160005b811561249f578061248981612b97565b91506124989050600a83612c35565b9150612479565b60008167ffffffffffffffff8111156124ba576124ba612bea565b6040519080825280601f01601f1916602001820160405280156124e4576020820181803683370190505b5090505b841561254f576124f9600183613347565b9150612506600a86613400565b6125119060306133d1565b60f81b81838151811061252657612526612b6b565b60200101906001600160f81b031916908160001a905350612548600a86612c35565b94506124e8565b949350505050565b6060808260005b81518110156125e65781818151811061257957612579612b6b565b6020910101516001600160f81b031916600560f91b146125d457828282815181106125a6576125a6612b6b565b602001015160f81c60f81b6040516020016125c2929190613414565b60405160208183030381529060405292505b806125de81612b97565b91505061255e565b50909392505050565b6060815160000361260e57505060408051602081019091526000815290565b6000604051806060016040528060408152602001613444604091399050600060038451600261263d91906133d1565b6126479190612c35565b612652906004612c00565b67ffffffffffffffff81111561266a5761266a612bea565b6040519080825280601f01601f191660200182016040528015612694576020820181803683370190505b509050600182016020820185865187015b80821015612700576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453506001830192506126a5565b505060038651066001811461271c576002811461272f57612737565b603d6001830353603d6002830353612737565b603d60018303535b509195945050505050565b60005b8381101561275d578181015183820152602001612745565b838111156106425750506000910152565b60008151808452612786816020860160208601612742565b601f01601f19169290920160200192915050565b602081526000612447602083018461276e565b80356001600160a01b03811681146127c457600080fd5b919050565b6000602082840312156127db57600080fd5b612447826127ad565b6000602082840312156127f657600080fd5b5035919050565b6000806040838503121561281057600080fd5b612819836127ad565b946020939093013593505050565b60008060006060848603121561283c57600080fd5b612845846127ad565b9250612853602085016127ad565b9150604084013590509250925092565b60008083601f84011261287557600080fd5b50813567ffffffffffffffff81111561288d57600080fd5b6020830191508360208260051b85010111156111cb57600080fd5b600080602083850312156128bb57600080fd5b823567ffffffffffffffff8111156128d257600080fd5b6128de85828601612863565b90969095509350505050565b60008083601f8401126128fc57600080fd5b50813567ffffffffffffffff81111561291457600080fd5b6020830191508360208285010111156111cb57600080fd5b6000806000806000806080878903121561294557600080fd5b61294e876127ad565b955061295c602088016127ad565b9450604087013567ffffffffffffffff8082111561297957600080fd5b6129858a838b01612863565b9096509450606089013591508082111561299e57600080fd5b506129ab89828a016128ea565b979a9699509497509295939492505050565b600081518084526020808501945080840160005b838110156129ed578151875295820195908201906001016129d1565b509495945050505050565b60208152600061244760208301846129bd565b60008060408385031215612a1e57600080fd5b612a27836127ad565b915060208301358015158114612a3c57600080fd5b809150509250929050565b60008060408385031215612a5a57600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b82811015612aab5781516001600160a01b031684529284019290840190600101612a86565b50505083810382850152612abf81866129bd565b9695505050505050565b600080600080600060808688031215612ae157600080fd5b612aea866127ad565b9450612af8602087016127ad565b935060408601359250606086013567ffffffffffffffff811115612b1b57600080fd5b612b27888289016128ea565b969995985093965092949392505050565b60008060408385031215612b4b57600080fd5b612b54836127ad565b9150612b62602084016127ad565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612ba957612ba9612b81565b5060010190565b600181811c90821680612bc457607f821691505b602082108103612be457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6000816000190483118215151615612c1a57612c1a612b81565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612c4457612c44612c1f565b500490565b7f7b2274726169745f74797065223a225075626c6973686572222c2276616c7565815262111d1160e91b602082015260008251612c8d816023850160208701612742565b62089f4b60ea1b6023939091019283015250602601919050565b60008351612cb9818460208801612742565b80830190507f7b2274726169745f74797065223a225075626c6973686572204e616d65222c228152673b30b63ab2911d1160c11b60208201528351612d05816028840160208801612742565b62089f4b60ea1b60289290910191820152602b01949350505050565b60008351612d33818460208801612742565b80830190507f7b2274726169745f74797065223a22417274697374222c2276616c7565223a2281528351612d6e816020840160208801612742565b62089f4b60ea1b60209290910191820152602301949350505050565b60008351612d9c818460208801612742565b80830190507f7b2274726169745f74797065223a22417274697374204e616d65222c2276616c8152643ab2911d1160d91b60208201528351612de5816025840160208801612742565b62089f4b60ea1b60259290910191820152602801949350505050565b60008351612e13818460208801612742565b80830190507f7b2274726169745f74797065223a2245787465726e616c204c696e6b222c227681526630b63ab2911d1160c91b60208201528351612e5e816027840160208801612742565b62089f4b60ea1b60279290910191820152602a01949350505050565b60008351612e8c818460208801612742565b80830190507f7b2274726169745f74797065223a2246696c65204d494d452054797065222c228152673b30b63ab2911d1160c11b60208201528351612d05816028840160208801612742565b60008351612eea818460208801612742565b80830190507f7b2274726169745f74797065223a225468756d626e61696c204c696e6b222c2281527f76616c7565223a2268747470733a2f2f617277656176652e6e65742f0000000060208201528351612f4b81603c840160208801612742565b62089f4b60ea1b603c9290910191820152603f01949350505050565b60008351612f79818460208801612742565b80830190507f7b2274726169745f74797065223a225468756d626e61696c204d494d4520547981526c38329116113b30b63ab2911d1160991b60208201528351612fca81602d840160208801612742565b62089f4b60ea1b602d9290910191820152603001949350505050565b60008351612ff8818460208801612742565b80830190507f7b2274726169745f74797065223a2245646974696f6e73222c2276616c7565228152611d1160f11b6020820152835161303e816022840160208801612742565b62089f4b60ea1b60229290910191820152602501949350505050565b6000835161306c818460208801612742565b80830190507f7b2274726169745f74797065223a2243726561746564204174222c2276616c7581526332911d1160e11b602082015283516130b4816024840160208801612742565b62089f4b60ea1b60249290910191820152602701949350505050565b600083516130e2818460208801612742565b80830190507f7b2274726169745f74797065223a22466c616720436f756e74222c2276616c7581526332911d1160e11b602082015283516130b4816024840160208801612742565b6000835161313c818460208801612742565b80830190507f7b2274726169745f74797065223a224c696b6520436f756e74222c2276616c7581526332911d1160e11b60208201528351613184816024840160208801612742565b61227d60f01b60249290910191820152602601949350505050565b6e2261747472696275746573223a205b60881b815281516000906131ca81600f850160208701612742565b605d60f81b600f939091019283015250601001919050565b7f22696d616765223a2268747470733a2f2f617277656176652e6e65742f00000081526000835161321a81601d850160208801612742565b61088b60f21b601d91840191820152835161323c81601f840160208801612742565b01601f01949350505050565b6e113232b9b1b934b83a34b7b7111d1160891b8152825160009061327381600f850160208801612742565b61088b60f21b600f918401918201528351613295816011840160208801612742565b01601101949350505050565b683d913730b6b2911d1160b91b815282516000906132c6816009850160208801612742565b61088b60f21b60099184019182015283516132e881600b840160208801612742565b607d60f81b600b9290910191820152600c01949350505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c00000081526000825161333a81601d850160208701612742565b91909101601d0192915050565b60008282101561335957613359612b81565b500390565b634e487b7160e01b600052603160045260246000fd5b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612abf9083018461276e565b6000602082840312156133b957600080fd5b81516001600160e01b03198116811461244757600080fd5b600082198211156133e4576133e4612b81565b500190565b6000816133f8576133f8612b81565b506000190190565b60008261340f5761340f612c1f565b500690565b60008351613426818460208801612742565b6001600160f81b031993909316919092019081526001019291505056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220e3f17bf57eba3540fd34dd5c6e5870c8d7a9223a3ca1d8ab0adcd2c5fed0755564736f6c634300080d0033";

type FakeGotchisNFTFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FakeGotchisNFTFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FakeGotchisNFTFacet__factory extends ContractFactory {
  constructor(...args: FakeGotchisNFTFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FakeGotchisNFTFacet> {
    return super.deploy(overrides || {}) as Promise<FakeGotchisNFTFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FakeGotchisNFTFacet {
    return super.attach(address) as FakeGotchisNFTFacet;
  }
  override connect(signer: Signer): FakeGotchisNFTFacet__factory {
    return super.connect(signer) as FakeGotchisNFTFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeGotchisNFTFacetInterface {
    return new utils.Interface(_abi) as FakeGotchisNFTFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeGotchisNFTFacet {
    return new Contract(address, _abi, signerOrProvider) as FakeGotchisNFTFacet;
  }
}