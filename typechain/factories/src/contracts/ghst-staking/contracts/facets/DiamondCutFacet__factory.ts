/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../../../../../../src/contracts/ghst-staking/contracts/facets/DiamondCutFacet";

const _abi = [
  {
    anonymous: false,
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
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
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
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506111fb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004361003e366004610927565b610045565b005b61004d61022a565b6000610057610268565b600281015490915061ffff168060008060088306111561008857506008810460009081526001840160205260409020545b60005b888110156101635761015683838c8c858181106100a457fe5b90506020028101906100b69190611110565b6100c4906020810190610906565b8d8d868181106100d057fe5b90506020028101906100e29190611110565b6100f39060408101906020016109f9565b8e8e878181106100ff57fe5b90506020028101906101119190611110565b61011f9060408101906110c2565b8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061028c92505050565b909350915060010161008b565b5082821461017f5760028401805461ffff191661ffff84161790555b60078216156101a05760088204600090815260018501602052604090208190555b7f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb67389898989896040516101d7959493929190610ab3565b60405180910390a161021f8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061078f92505050565b505050505050505050565b610232610268565b600401546001600160a01b031633146102665760405162461bcd60e51b815260040161025d90610c96565b60405180910390fd5b565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c90565b6000806000610299610268565b905060008451116102bc5760405162461bcd60e51b815260040161025d90610cd8565b60008560028111156102ca57fe5b14156103f4576001600160a01b0386166102f65760405162461bcd60e51b815260040161025d90610dc7565b61031886604051806060016040528060248152602001611152602491396108ba565b60005b84518110156103ee57600085828151811061033257fe5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c1561037d5760405162461bcd60e51b815260040161025d90610f0e565b6001600160e01b03198281166000818152602087815260409091206001600160601b031960608e901b168f17905560078e160290811c91811c199b909b16179960e08114156103df5760088c04600090815260018601602052604081209b909b555b5050506001988901980161031b565b50610783565b600185600281111561040257fe5b1415610556576001600160a01b03861661042e5760405162461bcd60e51b815260040161025d90610e13565b6104508660405180606001604052806028815260200161119e602891396108ba565b60005b84518110156103ee57600085828151811061046a57fe5b6020908102919091018101516001600160e01b03198116600090815291859052604090912054909150606081901c308114156104b85760405162461bcd60e51b815260040161025d90611016565b896001600160a01b0316816001600160a01b031614156104ea5760405162461bcd60e51b815260040161025d90610f63565b6001600160a01b0381166105105760405162461bcd60e51b815260040161025d90611065565b506001600160e01b031990911660009081526020849052604090206bffffffffffffffffffffffff919091166001600160601b031960608a901b16179055600101610453565b600285600281111561056457fe5b141561076b576001600160a01b038616156105915760405162461bcd60e51b815260040161025d90610fc0565b6008880460001960078a160160005b865181101561075a57896105cd576000199092016000818152600185016020526040902054995091600791505b6000806000808a85815181106105df57fe5b6020908102919091018101516001600160e01b031981166000908152918a9052604090912054909150606081901c6106295760405162461bcd60e51b815260040161025d90610d23565b606081901c30141561064d5760405162461bcd60e51b815260040161025d90610ec0565b602087028f901b94506001600160e01b0319808616908316146106a2576001600160e01b03198516600090815260208a90526040902080546001600160601b0319166bffffffffffffffffffffffff83161790555b6001600160e01b03198216600090815260208a9052604081205561ffff8116600881049450600881066020029350505050858214610709576000828152600188016020526040902080546001600160e01b031980841c19909116908516831c17905561072d565b80836001600160e01b031916901c816001600160e01b031960001b901c198e16179c505b8461074857600086815260018801602052604081208190559c505b505060001990920191506001016105a0565b506001600890920201019750610783565b60405162461bcd60e51b815260040161025d90610d80565b50959694955050505050565b6001600160a01b0382166107c1578051156107bc5760405162461bcd60e51b815260040161025d90610bf3565b6108b6565b60008151116107e25760405162461bcd60e51b815260040161025d90610e63565b6001600160a01b03821630146108145761081482604051806060016040528060288152602001611176602891396108ba565b600080836001600160a01b03168360405161082f9190610a97565b600060405180830381855af49150503d806000811461086a576040519150601f19603f3d011682016040523d82523d6000602084013e61086f565b606091505b509092509050816108b35780511561089b578060405162461bcd60e51b815260040161025d9190610bc0565b60405162461bcd60e51b815260040161025d90610c50565b50505b5050565b813b81816108b35760405162461bcd60e51b815260040161025d9190610bc0565b80356001600160a01b03811681146108f257600080fd5b919050565b8035600381106108f257600080fd5b600060208284031215610917578081fd5b610920826108db565b9392505050565b60008060008060006060868803121561093e578081fd5b853567ffffffffffffffff80821115610955578283fd5b818801915088601f830112610968578283fd5b813581811115610976578384fd5b60208a81828402860101111561098a578485fd5b808401985081975061099d818b016108db565b965060408a01359350828411156109b2578485fd5b838a0193508a601f8501126109c5578485fd5b83359150828211156109d5578485fd5b8a818386010111156109e5578485fd5b979a96995094975050909401935090919050565b600060208284031215610a0a578081fd5b610920826108f7565b6001600160a01b03169052565b60008284526020808501945082825b85811015610a625781356001600160e01b03198116808214610a4f578586fd5b8852509582019590820190600101610a2f565b509495945050505050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b60008251610aa9818460208701611125565b9190910192915050565b60608082528181018690526000906020608080850190828a028601018a855b8b811015610b9057878303607f190184528135368e9003605e19018112610af7578788fd5b8d016001600160a01b03610b0a826108db565b168452610b188682016108f7565b60038110610b2257fe5b8487015260408181013536839003601e19018112610b3e57898afd5b8201803567ffffffffffffffff811115610b56578a8bfd5b8881023603841315610b66578a8bfd5b8983880152610b7a8a8801828b8501610a20565b9789019796505050928601925050600101610ad2565b5050610b9e8387018a610a13565b8581036040870152610bb181888a610a6d565b9b9a5050505050505050505050565b6000602082528251806020840152610bdf816040850160208701611125565b601f01601f19169190910160400192915050565b6020808252603c908201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860408201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000606082015260800190565b60208082526026908201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656040820152651d995c9d195960d21b606082015260800190565b60208082526022908201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60408201526132b960f11b606082015260800190565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b60208082526037908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360408201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606082015260800190565b60208082526027908201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756040820152663a20b1ba34b7b760c91b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b60208082526030908201527f4c69624469616d6f6e644375743a205265706c6163652066616365742063616e60408201526f2774206265206164647265737328302960801b606082015260800190565b6020808252603d908201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460408201527f7920627574205f696e6974206973206e6f742061646472657373283029000000606082015260800190565b6020808252602e908201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560408201526d3a30b1363290333ab731ba34b7b760911b606082015260800190565b60208082526035908201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6040820152746e207468617420616c72656164792065786973747360581b606082015260800190565b60208082526038908201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60408201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606082015260800190565b60208082526036908201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604082015275657373206d757374206265206164647265737328302960501b606082015260800190565b6020808252602f908201527f4c69624469616d6f6e644375743a2043616e2774207265706c61636520696d6d60408201526e3aba30b1363290333ab731ba34b7b760891b606082015260800190565b60208082526038908201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60408201527f6374696f6e207468617420646f65736e27742065786973740000000000000000606082015260800190565b6000808335601e198436030181126110d8578283fd5b83018035915067ffffffffffffffff8211156110f2578283fd5b602090810192508102360382131561110957600080fd5b9250929050565b60008235605e19833603018112610aa9578182fd5b60005b83811015611140578181015183820152602001611128565b838111156108b3575050600091015256fe4c69624469616d6f6e644375743a2041646420666163657420686173206e6f20636f64654c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a205265706c61636520666163657420686173206e6f20636f6465a264697066735822122044cea867e3dc7a13b452d735d3eed14e86b39a280740b319939185b58766985464736f6c63430007060033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  override connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}