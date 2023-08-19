"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewAssetReward_testnet = exports.viewAssetClaimed_testnet = exports.viewAssetClaimed = exports.viewAssetReward = exports._reach = exports.reach = void 0;
// @ts-ignore
const _v3_backend = require("../../builds/v3/index.main.mjs");
// @ts-ignore
const _v3_tokenBackend = require("../../builds/v3/token.main.mjs");
const dotenv_1 = require("dotenv");
const stdlib_1 = require("@reach-sh/stdlib");
exports.reach = (0, stdlib_1.loadStdlib)("ALGO");
exports.reach.setProviderByName("MainNet");
exports._reach = (0, stdlib_1.loadStdlib)("ALGO");
exports._reach.setProviderByName("TestNet");
dotenv_1.default.config();
const viewAssetReward = async (acc, ctcInfo, token, isToken) => {
    const _acc = await exports.reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
    const ctcUsers = _acc.contract(isToken ? _v3_tokenBackend : _v3_backend, exports.reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers?.unsafeViews?.Info?.userReward(acc, token);
    // console.log(total);
    return parseInt(total);
};
exports.viewAssetReward = viewAssetReward;
const viewAssetClaimed = async (acc, ctcInfo, token, isToken) => {
    const _acc = await exports.reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
    const ctcUsers = _acc.contract(isToken ? _v3_tokenBackend : _v3_backend, exports.reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers?.unsafeViews?.Info?.claimed(acc, token);
    return parseInt(total);
};
exports.viewAssetClaimed = viewAssetClaimed;
const viewAssetClaimed_testnet = async (acc, ctcInfo, token, isToken) => {
    const _acc = await exports._reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
    const ctcUsers = _acc.contract(isToken ? _v3_tokenBackend : _v3_backend, exports.reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers?.unsafeViews?.Info?.claimed(acc, token);
    return parseInt(total);
};
exports.viewAssetClaimed_testnet = viewAssetClaimed_testnet;
const viewAssetReward_testnet = async (acc, ctcInfo, token, isToken) => {
    const _acc = await exports._reach.newAccountFromMnemonic(process?.env?.MNEMONIC || "");
    const ctcUsers = _acc.contract(isToken ? _v3_tokenBackend : _v3_backend, exports.reach.bigNumberToNumber(ctcInfo));
    const total = await ctcUsers?.unsafeViews?.Info?.userReward(acc, token);
    // console.log(total);
    return parseInt(total);
};
exports.viewAssetReward_testnet = viewAssetReward_testnet;
