import { getDefaultProvider } from "@ethersproject/providers";

export const diamondAddress = {
  137: "0x86935F11C86623deC8a25696E1C19a8659CbF95d",
};

export const addresses = {
  diamond: {
    137: "0x86935F11C86623deC8a25696E1C19a8659CbF95d",
  },
};

const defaultProvider = (url?: string) => {
  if (!url) url = "https://rpc-mainnet.maticvigil.com";
  return getDefaultProvider(url);
};

export default {
  defaultProvider,
  diamondAddress,
  addresses,
};
