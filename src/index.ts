import express from "express";
import { getFloor, verifyAsset } from "./puppeteer/index.js";
import { db, readDataFromSnapShots_preserve } from "./firebase_admin/index.js";
import { parseLocaleNumber } from "./utils/formatter.js";
import {
  reach,
  viewAssetClaimed,
  viewAssetClaimed_testnet,
  viewAssetReward,
  viewAssetReward_testnet,
} from "./utils/reach/index.js";
import { z } from "zod";
import bodyParser from "body-parser";
const app = express();

// Example data for floor price and rewards

// Get floor price by collection name

import path from "path";

app.use(function (_, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
const _path = path.resolve(`./src`);

app.use(express.static(`${_path}/swagger-ui-dist`));
// Endpoint for serving documentation
app.get("/", (_, res) => {
  console.log("dirname", _path);
  res.sendFile(path.resolve(`${_path}/swagger-ui-dist/index.html`));
});

app.get("/floor-price/:collection", async (req, res) => {
  try {
    const _collection: string = req?.params?.collection;
    const collection = _collection.split(".").join("");
    const FLOOR_REF = db.ref(`floorPriceCollection/${collection}`);
    const [_floor] = await readDataFromSnapShots_preserve(FLOOR_REF);

    if (_floor) {
      return res.status(200).json({ data: _floor });
    }
    const floor = await getFloor(collection);
    if (floor) {
      const floor_price = parseLocaleNumber(floor?.at(1), "en-US");
      await FLOOR_REF.set(floor_price);
      return res.json({ data: floor_price });
    } else {
      return res.status(404).json({ error: "Collection not found" });
    }
  } catch (error: any) {
    if (error?.message) {
      const data = JSON.parse(error?.message);
      return res
        .status(500)
        .json({ error: `${data?.[0]?.code} expected ${data?.[0]?.expected}` });
    }
    return res.status(500).json({ err: "failed" });
  }
});
app.get("/asset/:assetID", async (req, res) => {
  try {
    const _asset: string = req?.params?.assetID;
    const asset = _asset;
    const ASSET_REF = db.ref(`verifiedAssets/${asset}`);
    const [_assetID] = await readDataFromSnapShots_preserve(ASSET_REF);

    if (_assetID) {
      return res.status(200).json({ data: _assetID });
    }
    const assetCollection = await verifyAsset(asset);
    if (assetCollection) {
      await ASSET_REF.set({ collection: assetCollection });
      return res.json({ data: { collection: assetCollection } });
    } else {
      return res.status(404).json({ error: "Couldn't find asset" });
    }
  } catch (error: any) {
    if (error?.message) {
      const data = JSON.parse(error?.message);
      return res
        .status(500)
        .json({ error: `${data?.[0]?.code} expected ${data?.[0]?.expected}` });
    }
    return res.status(500).json({ err: "failed" });
  }
});

// Get rewards to collect by wallet address and asset id
const requestBodySchema = z.object({
  walletAddress: z.string(),
  assetId: z.string(),
  contract: z.string(),
  isToken: z.boolean(),
  isTestNet: z.optional(z.boolean()),
});

app.post("/rewards-to-collect/", bodyParser.json(), async (req, res) => {
  console.log({ res: req?.body });
  const { walletAddress, assetId, contract, isToken, isTestNet } =
    requestBodySchema.parse(req.body);
  let value = 0;
  if (isTestNet) {
    value = await viewAssetReward_testnet(
      walletAddress,
      reach.bigNumberify(z.number().parse(+contract)),
      z.number().parse(+assetId),
      isToken
    );
  } else {
    value = await viewAssetReward(
      walletAddress,
      reach.bigNumberify(z.number().parse(+contract)),
      z.number().parse(+assetId),
      isToken
    );
  }

  if (value) {
    res.json({ data: value });
  } else {
    res.status(404).json({ error: "Reward not found or already collected" });
  }
});

// Get rewards collected by wallet address and asset id
app.post("/rewards-collected/", bodyParser.json(), async (req, res) => {
  try {
    console.log({ res: req?.body });
    const { walletAddress, assetId, contract, isToken, isTestNet } =
      requestBodySchema.parse(req.body);
    let value = 0;
    if (isTestNet) {
      value = await viewAssetClaimed_testnet(
        walletAddress,
        reach.bigNumberify(z.number().parse(+contract)),
        z.number().parse(+assetId),
        isToken
      );
    } else {
      value = await viewAssetClaimed(
        walletAddress,
        reach.bigNumberify(z.number().parse(+contract)),
        z.number().parse(+assetId),
        isToken
      );
    }
    if (value) {
      res.json({ data: value });
    } else {
      res.status(404).json({ error: "Reward not found or not yet collected" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

// Get history of items collected by wallet address
app.get("/history/:walletAddress/:network", async (req, res) => {
  const { walletAddress, network } = req.params;
  console.log(req.params);
  const _network = !network
    ? "mainnet"
    : network === "testnet"
    ? "testnet"
    : "mainnet";
  const HISTORY_REF = db.ref(`history/${walletAddress}/${_network}/all`);

  const [data] = await readDataFromSnapShots_preserve(HISTORY_REF);
  console.log({ data });

  if (data) {
    res.json({ data });
  } else {
    res.status(404).json({ error: "No collected items found" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// {
//     "walletAddress": "YIAZAYLN73TRG5AKSCQR7E6JMMAMJHJJIWJEGUAJLPMRSZZVQR246Q6RPE",
//     "assetId": "390451443",
//     "contract": "248920227",
//     "isToken": true,
//     "isTestNet": true
// }
