import serviceAccount from "../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json" assert { type: "json" };
import admin from "firebase-admin";
import { getDatabase, Reference } from "firebase-admin/database";

// import { ref, set, onValue, get, child } from "firebase/database";

// Fetch the service account key JSON file contents
// const serviceAccount = require("../../staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json");

// Initialize the app with a service account, granting admin privileges

try {
  admin.initializeApp({
    // credential: applicationDefault(),
    credential: admin.credential.cert(serviceAccount),
    // The database URL depends on the location of the database
    databaseURL: "https://staking-f1d33-default-rtdb.firebaseio.com/",
  });
} catch (error) {
  admin.app();
}

// As an admin, the app has access to read and write all data, regardless of Security Rules
export const db = admin.database();
export const dBase = getDatabase();

export async function readDataFromSnapShot<T>(ref: Reference): Promise<T> {
  const snapShot = await ref.once("value", function (snapshot: any) {
    return snapshot.val();
  });
  return snapShot.val();
}

export async function readDataFromSnapShots<T>(
  ...ref: Reference[]
): Promise<T[]> {
  const snapShot = ref.map((ref) => {
    return ref.once("value", function (snapshot: any) {
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
export async function readDataFromSnapShots_preserve<T>(
  ...ref: Reference[]
): Promise<T[]> {
  const snapShot = ref.map((ref) => {
    return ref.once("value", function (snapshot: any) {
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
export const doesSnapshopExist = async (Ref: Reference): Promise<boolean> => {
  const snapShot = await Ref.once("value", (snapshot) => {
    return snapshot.exists();
  });
  return snapShot.exists();
};

export async function writeToDb({ ref, data }: { ref: any; data: number[] }) {
  try {
    await ref.set(data);
  } catch (error) {
    console.log(error);
  }
}
