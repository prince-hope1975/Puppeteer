import { BigNumber } from "ethers";
// @ts-ignore
import * as _v3_backend from "../../builds/v3/index.main.mjs";
// @ts-ignore
import * as _v3_tokenBackend from "../../builds/v3/token.main.mjs";
import dotenv from "dotenv";
import { loadStdlib } from "@reach-sh/stdlib";
export const reach = loadStdlib("ALGO");
reach.setProviderByName("MainNet");
export const _reach = loadStdlib("ALGO");
_reach.setProviderByName("TestNet");

dotenv.config();

export const viewAssetReward = async (
  acc: string,
  ctcInfo: BigNumber,
  token: number,
  isToken: boolean
) => {
  const _acc = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
  const ctcUsers = _acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    reach.bigNumberToNumber(ctcInfo)
  );
  const total: string = await ctcUsers?.unsafeViews?.Info?.userReward(
    acc,
    token
  );
  // console.log(total);
  return parseInt(total);
};

export const viewAssetClaimed = async (
  acc: string,
  ctcInfo: BigNumber,
  token: number,
  isToken: boolean
) => {
  const _acc = await reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
  const ctcUsers = _acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    reach.bigNumberToNumber(ctcInfo)
  );
  const total: string = await ctcUsers?.unsafeViews?.Info?.claimed(acc, token);
  return parseInt(total);
};
export const viewAssetClaimed_testnet = async (
  acc: string,
  ctcInfo: BigNumber,
  token: number,
  isToken: boolean
) => {
  const _acc = await _reach.newAccountFromMnemonic(
    process?.env?.MNEMONIC || ""
  );
  const ctcUsers = _acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    reach.bigNumberToNumber(ctcInfo)
  );
  const total: string = await ctcUsers?.unsafeViews?.Info?.claimed(acc, token);
  return parseInt(total);
};

export const viewAssetReward_testnet = async (
  acc: string,
  ctcInfo: BigNumber,
  token: number,
  isToken: boolean
) => {
  const _acc = await _reach.newAccountFromMnemonic(
    process?.env?.MNEMONIC || ""
  );
  const ctcUsers = _acc.contract(
    isToken ? _v3_tokenBackend : _v3_backend,
    reach.bigNumberToNumber(ctcInfo)
  );
  const total: string = await ctcUsers?.unsafeViews?.Info?.userReward(
    acc,
    token
  );
  // console.log(total);
  return parseInt(total);
};
