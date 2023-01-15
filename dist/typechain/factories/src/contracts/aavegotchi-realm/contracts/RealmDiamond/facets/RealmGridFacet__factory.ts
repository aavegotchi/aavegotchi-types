/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  RealmGridFacet,
  RealmGridFacetInterface,
} from "../../../../../../../src/contracts/aavegotchi-realm/contracts/RealmDiamond/facets/RealmGridFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_parcelIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_gridType",
        type: "uint256",
      },
    ],
    name: "batchGetGrid",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[64][64]",
            name: "coords",
            type: "uint256[64][64]",
          },
        ],
        internalType: "struct RealmGridFacet.ParcelCoordinates[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_parcelIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_x",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_y",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "_isTile",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "fixGridStartPositions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_parcelId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gridType",
        type: "uint256",
      },
    ],
    name: "getHumbleGrid",
    outputs: [
      {
        internalType: "uint256[8][8]",
        name: "output_",
        type: "uint256[8][8]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_parcelId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gridType",
        type: "uint256",
      },
    ],
    name: "getPaartnerGrid",
    outputs: [
      {
        internalType: "uint256[64][64]",
        name: "output_",
        type: "uint256[64][64]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_parcelId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gridType",
        type: "uint256",
      },
    ],
    name: "getReasonableGrid",
    outputs: [
      {
        internalType: "uint256[16][16]",
        name: "output_",
        type: "uint256[16][16]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_parcelId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gridType",
        type: "uint256",
      },
    ],
    name: "getSpaciousHorizontalGrid",
    outputs: [
      {
        internalType: "uint256[64][32]",
        name: "output_",
        type: "uint256[64][32]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_parcelId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gridType",
        type: "uint256",
      },
    ],
    name: "getSpaciousVerticalGrid",
    outputs: [
      {
        internalType: "uint256[32][64]",
        name: "output_",
        type: "uint256[32][64]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_parcelId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_y",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isTile",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "isGridStartPosition",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611504806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639202a81a1161005b5780639202a81a1461010b578063ad3d0f651461012e578063c36712161461014e578063c96fd9c51461016e57600080fd5b80631ef25f941461008d5780632d7e1301146100b65780634d34e1db146100d65780637690a6b3146100eb575b600080fd5b6100a061009b366004611001565b61018e565b6040516100ad9190611058565b60405180910390f35b6100c96100c4366004611001565b610325565b6040516100ad9190611091565b6100e96100e43660046111b8565b6104ba565b005b6100fe6100f9366004611001565b6106bf565b6040516100ad9190611276565b61011e6101193660046112ce565b610841565b60405190151581526020016100ad565b61014161013c366004611001565b6108c9565b6040516100ad9190611315565b61016161015c366004611001565b610a60565b6040516100ad9190611349565b61018161017c3660046113a1565b610bec565b6040516100ad919061141c565b610196610e87565b6000838152600160205260409020600601546004146101fc5760405162461bcd60e51b815260206004820152601860248201527f5265616c6d46616365743a204e6f742070616172746e6572000000000000000060448201526064015b60405180910390fd5b60005b604081101561031e5760005b604081101561030b57836102865760008581526001602052604090819020600701908290811061023d5761023d61148f565b6040020182604081106102525761025261148f565b01548383604081106102665761026661148f565b6020020151826040811061027c5761027c61148f565b60200201526102f9565b83600114156102f957600085815260016020526040908190206110070190829081106102b4576102b461148f565b6040020182604081106102c9576102c961148f565b01548383604081106102dd576102dd61148f565b602002015182604081106102f3576102f361148f565b60200201525b80610303816114a5565b91505061020b565b5080610316816114a5565b9150506101ff565b5092915050565b61032d610eb5565b6000838152600160205260409020600601546002146103985760405162461bcd60e51b815260206004820152602160248201527f5265616c6d46616365743a204e6f742073706163696f757320766572746963616044820152601b60fa1b60648201526084016101f3565b60005b604081101561031e5760005b60208110156104a75783610422576000858152600160205260409081902060070190829081106103d9576103d961148f565b6040020182604081106103ee576103ee61148f565b01548383604081106104025761040261148f565b602002015182602081106104185761041861148f565b6020020152610495565b836001141561049557600085815260016020526040908190206110070190829081106104505761045061148f565b6040020182604081106104655761046561148f565b01548383604081106104795761047961148f565b6020020151826020811061048f5761048f61148f565b60200201525b8061049f816114a5565b9150506103a7565b50806104b2816114a5565b91505061039b565b6104c2610dfe565b835185511480156104d4575082518551145b6105205760405162461bcd60e51b815260206004820152601d60248201527f5265616c6d46616365743a204d69736d6174636865642061727261797300000060448201526064016101f3565b81156105f15760005b85518110156105eb578181815181106105445761054461148f565b6020026020010151600060010160008884815181106105655761056561148f565b60200260200101518152602001908152602001600020613024018683815181106105915761059161148f565b6020026020010151604081106105a9576105a961148f565b604002018583815181106105bf576105bf61148f565b6020026020010151604081106105d7576105d761148f565b0155806105e3816114a5565b915050610529565b506106b8565b60005b85518110156106b65781818151811061060f5761060f61148f565b6020026020010151600060010160008884815181106106305761063061148f565b602002602001015181526020019081526020016000206120240186838151811061065c5761065c61148f565b6020026020010151604081106106745761067461148f565b6040020185838151811061068a5761068a61148f565b6020026020010151604081106106a2576106a261148f565b0155806106ae816114a5565b9150506105f4565b505b5050505050565b6106c7610ee3565b6000838152600160205260409020600601541561071f5760405162461bcd60e51b81526020600482015260166024820152755265616c6d46616365743a204e6f742068756d626c6560501b60448201526064016101f3565b60005b600881101561031e5760005b600881101561082e57836107a9576000858152600160205260409081902060070190829081106107605761076061148f565b6040020182604081106107755761077561148f565b01548383600881106107895761078961148f565b6020020151826008811061079f5761079f61148f565b602002015261081c565b836001141561081c57600085815260016020526040908190206110070190829081106107d7576107d761148f565b6040020182604081106107ec576107ec61148f565b01548383600881106108005761080061148f565b602002015182600881106108165761081661148f565b60200201525b80610826816114a5565b91505061072e565b5080610839816114a5565b915050610722565b600082156108945781600060010160008881526020019081526020016000206130240186604081106108755761087561148f565b60400201856040811061088a5761088a61148f565b01541490506108c0565b81600060010160008881526020019081526020016000206120240186604081106108755761087561148f565b95945050505050565b6108d1610f11565b60008381526001602052604090206006015460031461093e5760405162461bcd60e51b815260206004820152602360248201527f5265616c6d46616365743a204e6f742073706163696f757320686f72697a6f6e6044820152621d185b60ea1b60648201526084016101f3565b60005b602081101561031e5760005b6040811015610a4d57836109c85760008581526001602052604090819020600701908290811061097f5761097f61148f565b6040020182604081106109945761099461148f565b01548383602081106109a8576109a861148f565b602002015182604081106109be576109be61148f565b6020020152610a3b565b8360011415610a3b57600085815260016020526040908190206110070190829081106109f6576109f661148f565b604002018260408110610a0b57610a0b61148f565b0154838360208110610a1f57610a1f61148f565b60200201518260408110610a3557610a3561148f565b60200201525b80610a45816114a5565b91505061094d565b5080610a58816114a5565b915050610941565b610a68610f3f565b60008381526001602081905260409091206006015414610aca5760405162461bcd60e51b815260206004820152601a60248201527f5265616c6d46616365743a204e6f7420726561736f6e61626c6500000000000060448201526064016101f3565b60005b601081101561031e5760005b6010811015610bd95783610b5457600085815260016020526040908190206007019082908110610b0b57610b0b61148f565b604002018260408110610b2057610b2061148f565b0154838360108110610b3457610b3461148f565b60200201518260108110610b4a57610b4a61148f565b6020020152610bc7565b8360011415610bc75760008581526001602052604090819020611007019082908110610b8257610b8261148f565b604002018260408110610b9757610b9761148f565b0154838360108110610bab57610bab61148f565b60200201518260108110610bc157610bc161148f565b60200201525b80610bd1816114a5565b915050610ad9565b5080610be4816114a5565b915050610acd565b606060008367ffffffffffffffff811115610c0957610c096110f2565b604051908082528060200260200182016040528015610c4257816020015b610c2f610f6d565b815260200190600190039081610c275790505b50905060005b84811015610df55760005b6040811015610de25760005b6040811015610dcf5785610d125760016000898986818110610c8357610c8361148f565b9050602002013581526020019081526020016000206007018160408110610cac57610cac61148f565b604002018260408110610cc157610cc161148f565b0154848481518110610cd557610cd561148f565b6020026020010151600001518360408110610cf257610cf261148f565b60200201518260408110610d0857610d0861148f565b6020020152610dbd565b8560011415610dbd5760016000898986818110610d3157610d3161148f565b905060200201358152602001908152602001600020611007018160408110610d5b57610d5b61148f565b604002018260408110610d7057610d7061148f565b0154848481518110610d8457610d8461148f565b6020026020010151600001518360408110610da157610da161148f565b60200201518260408110610db757610db761148f565b60200201525b80610dc7816114a5565b915050610c5f565b5080610dda816114a5565b915050610c53565b5080610ded816114a5565b915050610c48565b50949350505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c600401546001600160a01b03163314610e855760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201526132b960f11b60648201526084016101f3565b565b6040518061080001604052806040905b610e9f610f85565b815260200190600190039081610e975790505090565b6040518061080001604052806040905b610ecd610fa4565b815260200190600190039081610ec55790505090565b6040518061010001604052806008905b610efb610fc3565b815260200190600190039081610ef35790505090565b6040518061040001604052806020905b610f29610f85565b815260200190600190039081610f215790505090565b6040518061020001604052806010905b610f57610fe2565b815260200190600190039081610f4f5790505090565b6040518060200160405280610f80610e87565b905290565b6040518061080001604052806040906020820280368337509192915050565b6040518061040001604052806020906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b6040518061020001604052806010906020820280368337509192915050565b6000806040838503121561101457600080fd5b50508035926020909101359150565b60008282825b6040811015611048578151835260209283019290910190600101611029565b5050506108008301905092915050565b620200008101818360005b604081101561108857611077838351611023565b925060209190910190600101611063565b50505092915050565b62010000810181836000805b60408110156110e857825184835b60208082106110ba57506110ce565b8351835292830192909101906001016110ab565b50505061040093909301926020929092019160010161109d565b5050505092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261111957600080fd5b8135602067ffffffffffffffff80831115611136576111366110f2565b8260051b604051601f19603f8301168101818110848211171561115b5761115b6110f2565b60405293845285810183019383810192508785111561117957600080fd5b83870191505b848210156111985781358352918301919083019061117f565b979650505050505050565b803580151581146111b357600080fd5b919050565b600080600080600060a086880312156111d057600080fd5b853567ffffffffffffffff808211156111e857600080fd5b6111f489838a01611108565b9650602088013591508082111561120a57600080fd5b61121689838a01611108565b9550604088013591508082111561122c57600080fd5b61123889838a01611108565b9450611246606089016111a3565b9350608088013591508082111561125c57600080fd5b5061126988828901611108565b9150509295509295909350565b610800810181836000805b600880821061129057506110e8565b835185845b838110156112b3578251825260209283019290910190600101611295565b50505061010094909401935060209290920191600101611281565b600080600080600060a086880312156112e657600080fd5b853594506020860135935060408601359250611304606087016111a3565b949793965091946080013592915050565b620100008101818360005b602080821061132f5750611088565b61133a848451611023565b93509190910190600101611320565b612000810181836000805b601080821061136357506110e8565b835185845b83811015611386578251825260209283019290910190600101611368565b50505061020094909401935060209290920191600101611354565b6000806000604084860312156113b657600080fd5b833567ffffffffffffffff808211156113ce57600080fd5b818601915086601f8301126113e257600080fd5b8135818111156113f157600080fd5b8760208260051b850101111561140657600080fd5b6020928301989097509590910135949350505050565b60208082528251828201819052600091906040908185019086840185805b838110156114815782515185835b888110156114695761145b828451611023565b928a01929150600101611448565b5050506202000094909401939186019160010161143a565b509298975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156114c757634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220076102c204039587e70804d6276378146c7e4670fc13c1bf9e2a4d38aa1600fb64736f6c63430008090033";

type RealmGridFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RealmGridFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RealmGridFacet__factory extends ContractFactory {
  constructor(...args: RealmGridFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RealmGridFacet> {
    return super.deploy(overrides || {}) as Promise<RealmGridFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RealmGridFacet {
    return super.attach(address) as RealmGridFacet;
  }
  override connect(signer: Signer): RealmGridFacet__factory {
    return super.connect(signer) as RealmGridFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RealmGridFacetInterface {
    return new utils.Interface(_abi) as RealmGridFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RealmGridFacet {
    return new Contract(address, _abi, signerOrProvider) as RealmGridFacet;
  }
}
