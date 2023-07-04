import { TokenMetadata } from "@reach-sh/stdlib/dist/types/shared_impl";
import { BigNumber } from "ethers";

export interface wallet {
  contract(...arg: any): any;
  tokenMetadata(...arg: any): Promise<TokenMetadata>;
  getAddress(): Promise<string>;
  balanceOf(...arg: any): Promise<BigNumber>;
  balancesOf(...arg: any): Promise<BigNumber[]>;
  networkAccount: {
    addr: string;
    sk: Uint8Array;
  };
  tokenAccepted: (tok: string | number) => Promise<boolean>;
  tokenAccept: (tok: string | number) => Promise<any>;
}
