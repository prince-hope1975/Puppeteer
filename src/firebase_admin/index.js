"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToDb = exports.doesSnapshopExist = exports.readDataFromSnapShots_preserve = exports.readDataFromSnapShots = exports.readDataFromSnapShot = exports.dBase = exports.db = void 0;
const staking_f1d33_firebase_adminsdk_hnz9e_f2e618a564_json_1 = require("../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json");
const firebase_admin_1 = require("firebase-admin");
const database_1 = require("firebase-admin/database");
// import { ref, set, onValue, get, child } from "firebase/database";
// Fetch the service account key JSON file contents
// const serviceAccount = require("../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json");
// Initialize the app with a service account, granting admin privileges
try {
    firebase_admin_1.default.initializeApp({
        // credential: applicationDefault(),
        credential: firebase_admin_1.default.credential.cert(staking_f1d33_firebase_adminsdk_hnz9e_f2e618a564_json_1.default),
        // The database URL depends on the location of the database
        databaseURL: "https://staking-f1d33-default-rtdb.firebaseio.com/",
    });
}
catch (error) {
    firebase_admin_1.default.app();
}
// As an admin, the app has access to read and write all data, regardless of Security Rules
exports.db = firebase_admin_1.default.database();
exports.dBase = (0, database_1.getDatabase)();
async function readDataFromSnapShot(ref) {
    const snapShot = await ref.once("value", function (snapshot) {
        return snapshot.val();
    });
    return snapShot.val();
}
exports.readDataFromSnapShot = readDataFromSnapShot;
async function readDataFromSnapShots(...ref) {
    const snapShot = ref.map((ref) => {
        return ref.once("value", function (snapshot) {
            return snapshot.val();
        });
    });
    const snaps = await Promise.allSettled(snapShot);
    const res = snaps
        .map((snap) => {
        if (snap.status === "fulfilled") {
            return snap.value.val();
        }
        return null;
    })
        .filter((snap) => snap !== null);
    return res;
}
exports.readDataFromSnapShots = readDataFromSnapShots;
async function readDataFromSnapShots_preserve(...ref) {
    const snapShot = ref.map((ref) => {
        return ref.once("value", function (snapshot) {
            return snapshot.val();
        });
    });
    const snaps = await Promise.allSettled(snapShot);
    const res = snaps.map((snap) => {
        if (snap.status === "fulfilled") {
            return snap.value.val();
        }
        return null;
    });
    return res;
}
exports.readDataFromSnapShots_preserve = readDataFromSnapShots_preserve;
const doesSnapshopExist = async (Ref) => {
    const snapShot = await Ref.once("value", (snapshot) => {
        return snapshot.exists();
    });
    return snapShot.exists();
};
exports.doesSnapshopExist = doesSnapshopExist;
async function writeToDb({ ref, data }) {
    try {
        await ref.set(data);
    }
    catch (error) {
        console.log(error);
    }
}
exports.writeToDb = writeToDb;
