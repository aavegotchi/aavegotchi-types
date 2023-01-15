/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  GHSTStakingDiamond,
  GHSTStakingDiamondInterface,
  IDiamondCut,
} from "../../../../../src/contracts/ghst-staking/contracts/GHSTStakingDiamond";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "ghstContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "uniV2PoolContract",
            type: "address",
          },
        ],
        internalType: "struct GHSTStakingDiamond.ConstructorArgs",
        name: "_args",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_newRate",
        type: "uint256",
      },
    ],
    name: "PoolTokensRate",
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026f0380380620026f0833981016040819052620000349162000db5565b80516001600160a01b0316620000675760405162461bcd60e51b81526004016200005e9062001196565b60405180910390fd5b60208101516001600160a01b0316620000945760405162461bcd60e51b81526004016200005e9062001523565b60408101516001600160a01b0316620000c15760405162461bcd60e51b81526004016200005e906200122a565b60408051600080825260208201909252620000e99184916200038a60201b620000ac1760201c565b620001038160000151620004d160201b620001dd1760201c565b60006200011a6200053360201b6200023d1760201c565b602083810151600280546001600160a01b03199081166001600160a01b039384161790915560408087015160038054909316931692909217905580518082019091528181527f68747470733a2f2f61617665676f746368692e636f6d2f6d657461646174612f908201908152919250620001979160049162000bf3565b50600e60068190556040517f94c8da75bb2326948672d6620d7453fbc802c3fb873f18033ba89949ff66cfc391620001cf9162001026565b60405180910390a16301ffc9a760e01b60009081526003820160205260408082208054600160ff1991821681179092556348e2b09360e01b845282842080548216831790556307f5828d60e41b84528284208054821683179055636cdb3d1360e11b845282842080548216831790556303a24d0760e21b84528284208054909116909117905551819033906000805160206200265c833981519152906200027a908490819062001018565b60405180910390a4604051600090819033906000805160206200265c83398151915290620002ad90600190859062001018565b60405180910390a4604051600090819033906000805160206200265c83398151915290620002e090600290859062001018565b60405180910390a4604051600090819033906000805160206200265c833981519152906200031390600390859062001018565b60405180910390a4604051600090819033906000805160206200265c833981519152906200034690600490859062001018565b60405180910390a4604051600090819033906000805160206200265c833981519152906200037990600590859062001018565b60405180910390a45050506200163d565b60006200039662000533565b600281015490915061ffff1680600080600883061115620003c857506008810460009081526001840160205260409020545b60005b875181101562000440576200043283838a8481518110620003e857fe5b6020026020010151600001518b85815181106200040157fe5b6020026020010151602001518c86815181106200041a57fe5b6020026020010151604001516200055760201b60201c565b9093509150600101620003cb565b508282146200045d5760028401805461ffff191661ffff84161790555b60078216156200047f5760088204600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673878787604051620004b49392919062000f28565b60405180910390a1620004c8868662000a8e565b50505050505050565b6000620004dd62000533565b6004810180546001600160a01b038581166001600160a01b031983168117909355604051939450169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b600080806200056562000533565b905060008451116200058b5760405162461bcd60e51b81526004016200005e90620010ee565b60008560028111156200059a57fe5b1415620006d3576001600160a01b038616620005ca5760405162461bcd60e51b81526004016200005e9062001287565b620005ef866040518060600160405280602481526020016200267c6024913962000bcf565b60005b8451811015620006cc5760008582815181106200060b57fe5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c15620006595760405162461bcd60e51b81526004016200005e90620013ce565b6001600160e01b03198281166000818152602087815260409091206001600160601b031960608e901b168f17905560078e160290811c91811c199b909b16179960e0811415620006bc5760088c04600090815260018601602052604081209b909b555b50505060019889019801620005f2565b5062000a82565b6001856002811115620006e257fe5b141562000844576001600160a01b038616620007125760405162461bcd60e51b81526004016200005e90620012d3565b6200073786604051806060016040528060288152602001620026c86028913962000bcf565b60005b8451811015620006cc5760008582815181106200075357fe5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c30811415620007a45760405162461bcd60e51b81526004016200005e90620014d4565b896001600160a01b0316816001600160a01b03161415620007d95760405162461bcd60e51b81526004016200005e906200142b565b6001600160a01b038116620008025760405162461bcd60e51b81526004016200005e9062001580565b506001600160e01b031990911660009081526020849052604090206001600160601b03919091166001600160601b031960608a901b161790556001016200073a565b60028560028111156200085357fe5b141562000a68576001600160a01b03861615620008845760405162461bcd60e51b81526004016200005e9062001477565b6008880460001960078a160160005b865181101562000a565789620008c2576000199092016000818152600185016020526040902054995091600791505b6000806000808a8581518110620008d557fe5b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c620009225760405162461bcd60e51b81526004016200005e9062001139565b606081901c301415620009495760405162461bcd60e51b81526004016200005e9062001380565b602087028f901b94506001600160e01b0319808616908316146200099a576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166001600160601b0383161790555b6001600160e01b03198216600090815260208a9052604081205561ffff811660088104945060088106602002935050505085821462000a03576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c17905562000a27565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b8462000a4357600086815260018801602052604081208190559c505b5050600019909201915060010162000893565b50600160089092020101975062000a82565b60405162461bcd60e51b81526004016200005e90620011e3565b50959694955050505050565b6001600160a01b03821662000ac55780511562000abf5760405162461bcd60e51b81526004016200005e906200104b565b62000bcb565b600081511162000ae95760405162461bcd60e51b81526004016200005e9062001323565b6001600160a01b038216301462000b1f5762000b1f82604051806060016040528060288152602001620026a06028913962000bcf565b600080836001600160a01b03168360405162000b3c919062000f0a565b600060405180830381855af49150503d806000811462000b79576040519150601f19603f3d011682016040523d82523d6000602084013e62000b7e565b606091505b5090925090508162000bc85780511562000bae578060405162461bcd60e51b81526004016200005e91906200102f565b60405162461bcd60e51b81526004016200005e90620010a8565b50505b5050565b813b818162000bc85760405162461bcd60e51b81526004016200005e91906200102f565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928262000c2b576000855562000c76565b82601f1062000c4657805160ff191683800117855562000c76565b8280016001018555821562000c76579182015b8281111562000c7657825182559160200191906001019062000c59565b5062000c8492915062000c88565b5090565b5b8082111562000c84576000815560010162000c89565b80516001600160a01b038116811462000cb757600080fd5b919050565b600082601f83011262000ccd578081fd5b8151602062000ce662000ce083620015f0565b620015cc565b828152818101908583018385028701840188101562000d03578586fd5b855b8581101562000d395781516001600160e01b03198116811462000d26578788fd5b8452928401929084019060010162000d05565b5090979650505050505050565b60006060828403121562000d58578081fd5b604051606081016001600160401b038111828210171562000d7557fe5b60405290508062000d868362000c9f565b815262000d966020840162000c9f565b602082015262000da96040840162000c9f565b60408201525092915050565b6000806080838503121562000dc8578182fd5b82516001600160401b038082111562000ddf578384fd5b818501915085601f83011262000df3578384fd5b8151602062000e0662000ce083620015f0565b82815281810190858301885b8581101562000ead57815188016060818e03601f1901121562000e33578a8bfd5b604051606081018181108a8211171562000e4957fe5b60405262000e5982880162000c9f565b815260408201516003811062000e6d578c8dfd5b8188015260608201518981111562000e83578c8dfd5b62000e938f898386010162000cbc565b604083015250855250928401929084019060010162000e12565b5050809750505062000ec28882890162000d46565b9450505050509250929050565b6001600160a01b03169052565b6000815180845262000ef68160208601602086016200160e565b601f01601f19169290920160200192915050565b6000825162000f1e8184602087016200160e565b9190910192915050565b606080825284518282018190526000919060809081850190602080820287018401818b01875b8481101562000fe557898303607f19018652815180516001600160a01b0316845284810151898501906003811062000f8257fe5b858701526040918201519185018a9052815190819052908501908a90898601905b8083101562000fcf5783516001600160e01b031916825292870192600192909201919087019062000fa3565b5097860197945050509083019060010162000f4e565b505062000ff58289018b62000ecf565b878103604089015262001009818a62000edc565b9b9a5050505050505050505050565b918252602082015260400190565b90815260200190565b60006020825262001044602083018462000edc565b9392505050565b6020808252603c908201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860408201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000606082015260800190565b60208082526026908201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656040820152651d995c9d195960d21b606082015260800190565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b60208082526037908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360408201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606082015260800190565b6020808252602d908201527f474853545374616b696e674469616d6f6e643a206f776e65722063616e27742060408201526c6265206164647265737328302960981b606082015260800190565b60208082526027908201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756040820152663a20b1ba34b7b760c91b606082015260800190565b60208082526039908201527f474853545374616b696e674469616d6f6e643a20756e695632506f6f6c436f6e60408201527f74726163742063616e2774206265206164647265737328302900000000000000606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b60208082526030908201527f4c69624469616d6f6e644375743a205265706c6163652066616365742063616e60408201526f2774206265206164647265737328302960801b606082015260800190565b6020808252603d908201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460408201527f7920627574205f696e6974206973206e6f742061646472657373283029000000606082015260800190565b6020808252602e908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560408201526d3a30b1363290333ab731ba34b7b760911b606082015260800190565b60208082526035908201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60408201527f6e207468617420616c7265616479206578697374730000000000000000000000606082015260800190565b60208082526038908201526000805160206200263c83398151915260408201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606082015260800190565b60208082526036908201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260408201527f657373206d757374206265206164647265737328302900000000000000000000606082015260800190565b6020808252602f908201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60408201526e3aba30b1363290333ab731ba34b7b760891b606082015260800190565b60208082526034908201527f474853545374616b696e674469616d6f6e643a2067687374436f6e747261637460408201527f2063616e27742062652061646472657373283029000000000000000000000000606082015260800190565b60208082526038908201526000805160206200263c83398151915260408201527f6374696f6e207468617420646f65736e27742065786973740000000000000000606082015260800190565b6040518181016001600160401b0381118282101715620015e857fe5b604052919050565b60006001600160401b038211156200160457fe5b5060209081020190565b60005b838110156200162b57818101518382015260200162001611565b8381111562000bc85750506000910152565b610fef806200164d6000396000f3fe60806040523661002a5760405162461bcd60e51b815260040161002190610cd5565b60405180910390fd5b600080356001600160e01b03191681527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6020819052604090912054819060601c806100885760405162461bcd60e51b815260040161002190610c34565b3660008037600080366000845af43d6000803e8080156100a7573d6000f35b3d6000fd5b60006100b661023d565b600281015490915061ffff16806000806008830611156100e757506008810460009081526001840160205260409020545b60005b87518110156101525761014583838a848151811061010457fe5b6020026020010151600001518b858151811061011c57fe5b6020026020010151602001518c868151811061013457fe5b602002602001015160400151610261565b90935091506001016100ea565b5082821461016e5760028401805461ffff191661ffff84161790555b600782161561018f5760088204600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738787876040516101c293929190610905565b60405180910390a16101d48686610764565b50505050505050565b60006101e761023d565b6004810180546001600160a01b038581166001600160a01b031983168117909355604051939450169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b600080600061026e61023d565b905060008451116102915760405162461bcd60e51b815260040161002190610aa9565b600085600281111561029f57fe5b14156103c9576001600160a01b0386166102cb5760405162461bcd60e51b815260040161002190610b98565b6102ed86604051806060016040528060248152602001610f466024913961088f565b60005b84518110156103c357600085828151811061030757fe5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c156103525760405162461bcd60e51b815260040161002190610d65565b6001600160e01b03198281166000818152602087815260409091206001600160601b031960608e901b168f17905560078e160290811c91811c199b909b16179960e08114156103b45760088c04600090815260018601602052604081209b909b555b505050600198890198016102f0565b50610758565b60018560028111156103d757fe5b141561052b576001600160a01b0386166104035760405162461bcd60e51b815260040161002190610be4565b61042586604051806060016040528060288152602001610f926028913961088f565b60005b84518110156103c357600085828151811061043f57fe5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c3081141561048d5760405162461bcd60e51b815260040161002190610e6d565b896001600160a01b0316816001600160a01b031614156104bf5760405162461bcd60e51b815260040161002190610dba565b6001600160a01b0381166104e55760405162461bcd60e51b815260040161002190610ebc565b506001600160e01b031990911660009081526020849052604090206bffffffffffffffffffffffff919091166001600160601b031960608a901b16179055600101610428565b600285600281111561053957fe5b1415610740576001600160a01b038616156105665760405162461bcd60e51b815260040161002190610e17565b6008880460001960078a160160005b865181101561072f57896105a2576000199092016000818152600185016020526040902054995091600791505b6000806000808a85815181106105b457fe5b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c6105fe5760405162461bcd60e51b815260040161002190610af4565b606081901c3014156106225760405162461bcd60e51b815260040161002190610d17565b602087028f901b94506001600160e01b031980861690831614610677576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166bffffffffffffffffffffffff83161790555b6001600160e01b03198216600090815260208a9052604081205561ffff81166008810494506008810660200293505050508582146106de576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c179055610702565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b8461071d57600086815260018801602052604081208190559c505b50506000199092019150600101610575565b506001600890920201019750610758565b60405162461bcd60e51b815260040161002190610b51565b50959694955050505050565b6001600160a01b038216610796578051156107915760405162461bcd60e51b815260040161002190610a06565b61088b565b60008151116107b75760405162461bcd60e51b815260040161002190610c78565b6001600160a01b03821630146107e9576107e982604051806060016040528060288152602001610f6a6028913961088f565b600080836001600160a01b03168360405161080491906108e9565b600060405180830381855af49150503d806000811461083f576040519150601f19603f3d011682016040523d82523d6000602084013e610844565b606091505b5090925090508161088857805115610870578060405162461bcd60e51b815260040161002191906109ec565b60405162461bcd60e51b815260040161002190610a63565b50505b5050565b813b81816108885760405162461bcd60e51b815260040161002191906109ec565b6001600160a01b03169052565b600081518084526108d5816020860160208601610f19565b601f01601f19169290920160200192915050565b600082516108fb818460208701610f19565b9190910192915050565b606080825284518282018190526000919060809081850190602080820287018401818b01875b848110156109bd57898303607f19018652815180516001600160a01b0316845284810151898501906003811061095d57fe5b858701526040918201519185018a9052815190819052908501908a90898601905b808310156109a85783516001600160e01b031916825292870192600192909201919087019061097e565b5097860197945050509083019060010161092b565b50506109cb8289018b6108b0565b87810360408901526109dd818a6108bd565b9b9a5050505050505050505050565b6000602082526109ff60208301846108bd565b9392505050565b6020808252603c908201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860408201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000606082015260800190565b60208082526026908201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656040820152651d995c9d195960d21b606082015260800190565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b60208082526037908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360408201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606082015260800190565b60208082526027908201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756040820152663a20b1ba34b7b760c91b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b60208082526030908201527f4c69624469616d6f6e644375743a205265706c6163652066616365742063616e60408201526f2774206265206164647265737328302960801b606082015260800190565b60208082526024908201527f474853545354616b696e673a2046756e6374696f6e20646f6573206e6f7420656040820152631e1a5cdd60e21b606082015260800190565b6020808252603d908201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460408201527f7920627574205f696e6974206973206e6f742061646472657373283029000000606082015260800190565b60208082526022908201527f474853545374616b696e673a20446f6573206e6f74206163636570742065746860408201526132b960f11b606082015260800190565b6020808252602e908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560408201526d3a30b1363290333ab731ba34b7b760911b606082015260800190565b60208082526035908201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6040820152746e207468617420616c72656164792065786973747360581b606082015260800190565b60208082526038908201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60408201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606082015260800190565b60208082526036908201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604082015275657373206d757374206265206164647265737328302960501b606082015260800190565b6020808252602f908201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60408201526e3aba30b1363290333ab731ba34b7b760891b606082015260800190565b60208082526038908201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60408201527f6374696f6e207468617420646f65736e27742065786973740000000000000000606082015260800190565b60005b83811015610f34578181015183820152602001610f1c565b83811115610888575050600091015256fe4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a2646970667358221220b82d11aec9bafab9d3c58f96ce06755b67c08f261b1aa450e8244c00bbd9399b64736f6c634300070600334c69624469616d6f6e644375743a2043616e2774207265706c6163652066756ec3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f624c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465";

type GHSTStakingDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GHSTStakingDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GHSTStakingDiamond__factory extends ContractFactory {
  constructor(...args: GHSTStakingDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _args: GHSTStakingDiamond.ConstructorArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GHSTStakingDiamond> {
    return super.deploy(
      _diamondCut,
      _args,
      overrides || {}
    ) as Promise<GHSTStakingDiamond>;
  }
  override getDeployTransaction(
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _args: GHSTStakingDiamond.ConstructorArgsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_diamondCut, _args, overrides || {});
  }
  override attach(address: string): GHSTStakingDiamond {
    return super.attach(address) as GHSTStakingDiamond;
  }
  override connect(signer: Signer): GHSTStakingDiamond__factory {
    return super.connect(signer) as GHSTStakingDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GHSTStakingDiamondInterface {
    return new utils.Interface(_abi) as GHSTStakingDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GHSTStakingDiamond {
    return new Contract(address, _abi, signerOrProvider) as GHSTStakingDiamond;
  }
}
