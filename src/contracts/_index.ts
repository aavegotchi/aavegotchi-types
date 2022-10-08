import { getDefaultProvider } from "@ethersproject/providers";

export const diamondAddress = {
  137: "0x86935F11C86623deC8a25696E1C19a8659CbF95d",
};

export const addresses = {
  treasury: {
    1: "0xffe6280ae4e864d9af836b562359fd828ece8020",
    137: "0xb208f8BB431f580CC4b216826AFfB128cd1431aB",
  },
  maticBurnAddress: { 137: "0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF" },
  maticPlayerRewardsAddress: {
    137: "0x27DF5C6dcd360f372e23d5e63645eC0072D0C098",
  },
  maticRealmRewardsAddress: {
    137: "0x48eA1d45142fC645fDcf78C133Ac082eF159Fe14",
  },
  frenStaking: { 137: "0xA02d547512Bb90002807499F05495Fe9C4C3943f" },
  gltrStaking: { 137: "0x1fE64677Ab1397e20A1211AFae2758570fEa1B8c" },
  installationsDiamond: { 137: "0x19f870bd94a34b3adaa9caa439d333da18d6812a" },
  tilesDiamond: { 137: "0x9216c31d8146bCB3eA5a9162Dc1702e8AEDCa355" },
  aavegotchiDiamond: { 137: "0x86935F11C86623deC8a25696E1C19a8659CbF95d" },
  // same as aavegotchiDiamond
  diamond: {
    137: "0x86935F11C86623deC8a25696E1C19a8659CbF95d",
  },
};

const defaultProvider = (url?: string) => {
  if (!url) url = "https://polygon-rpc.com";
  return getDefaultProvider(url);
};

export default {
  defaultProvider,
  diamondAddress,
  addresses,
};
