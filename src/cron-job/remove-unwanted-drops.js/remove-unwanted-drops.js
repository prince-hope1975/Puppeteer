// staking-f1d33-firebase-adminsdk-hnz9e-f2e618a564.json
var staking_f1d33_firebase_adminsdk_hnz9e_f2e618a564_default = {
  type: "service_account",
  project_id: "staking-f1d33",
  private_key_id: "904442903f05a74a01b48bed58cd2b9548432a6d",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQD7YNFBmZqEMdaC\nIKjjqWUNNhkeyoG0BkW1OhPshcsyy3VwGEwvF0Qu7PGEWS/HGftLxFmjVWCL6/4B\nitcXQ2qfizQ702mRELkr5lDB0iGIM8KHMIItLWujqWEI2weYV8NI2xV2NanIHLs+\nujY407gIPB+lt4VU22DM/NwbXnhR4pqSfh42H/odYkosMEEE/YKrSLO8kwTRxmkB\nMsYwnbWZXmrhcfipg5H0ptJZh4bBISLstXEsRCAJZAdRIFpx8KcsNq3TIGxTYl5V\n42ECDnT6onM9J2oUnxfzzEAxKNR0vxctNslI2oiBo62I2S8z1yRgAHtIoIUS6omd\ntoA091U3AgMBAAECggEABTP9UNLJmHfhnULozAGLFmlqvrDpW10P307q76fbS1tb\nvGy8UvMz1ZbQ7vDbpM7cXTactl1DiNHjKYwCpLggAlpiw+Q92KNUedykCkb7q7KK\nkbrGzwGUK0iLuh+yegxC/gSO3qoAsCQsGgHHsohrVDxOWWNBjr6Vs9h+A9ECQ4uX\nMA9XgDCeR+oNJhiS79ZnNnrorxBAA85U1UhP+qKt0ccSEM0qxbZEeBL8vnXlVLdY\nZ6hSX3SlH4IioDURI5vDlRzocQL5ySOzXRb5YTZlJrJdrdsOvUluBDLFOWCq6rM/\nidymnW8vZQvfCwifJ0+rf2r02jju1MtpyuPNLzKACQKBgQD+DXDTCAvRc9RHwsLo\n6aIKGOihHsrQv9GgugjDcwIQpr5zFflLsIUiqSri3KLs3AaVD+l1RKYXZSliR6GE\nxgDqfVZU/lSPDasBKMCjB+7aWF63ttne5TCksde28/fRZ5azupqaxAdaEb6BsINe\n4qLkOF/mo/VISPL8hb07wO0SrwKBgQD9TiDowYquXW/9qn5qzpP7wT/dZviYdYkX\nPHlRip+dsLAJ76lyNXixGBDe4+iCYMbtiyHYp+utddltlTT6uOHUfDTiPDsnUtW/\nWcyAm4W6UlaIn1uuCJ4LiALMlaCt3msOaHpPh2kO4ILs1IeZyhz6yIVCa+eGEGh7\n9QrmF9Cn+QKBgEIVDu7lneVagrIz1+0rsGl99yzJzKml64oqOdNVHAlmxg07fwAQ\nJ2FPrYcbKwn/ZXrqi6hkNevJ9YzJ4xqdQmm8NnOfQDGBtaR0jD8b9iY3bFPPLTbM\nWO3OELVXGnQOxOV1OXfeW6czDGHBnzpUK1i/zTo6Fbg6uXGz+/gKA+CjAoGAYXQz\nmRkNP/RW5+M2a+U6bft1lLrPHejqa3QqwMJyknqt38TDDlugKZI2u2o3xCFzp2SG\nCxLfy4axtkVXcra6u8NlnTzLDWADOHFWCozLMFoJTNryrMxH8evMF+XhQcN2sL5l\ngD96neymsnM6EGMAL0QCcQGOu7eIW1h1bvzunBECgYAmlnzO6u68gq298QNVyaIl\nTgdLxwpaX3Y7QFAbuqE4O4m2RWgM2w+OlIa+VmbRXor/a7FFgeGiUlHig6US48Dk\ncdLb3dg9aqVskZfMMtgflyc26yq6qMxHBeGi5JnkppZlHgT/YSVAwDdAX5T1OUeW\nYuSl58PW5ZVjeVOJWckgEQ==\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-dbt7b@staking-f1d33.iam.gserviceaccount.com",
  client_id: "102930864226204410383",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dbt7b%40staking-f1d33.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

// src/firebase_admin/index.ts
import admin from "firebase-admin";
import {getDatabase} from "firebase-admin/database";
try {
  admin.initializeApp({
    credential: admin.credential.cert(staking_f1d33_firebase_adminsdk_hnz9e_f2e618a564_default),
    databaseURL: "https://staking-f1d33-default-rtdb.firebaseio.com/"
  });
} catch (error) {
  admin.app();
}
var db = admin.database();
var dBase = getDatabase();

// src/cron-job/remove-unwanted-drops.ts
import {loadStdlib} from "@reach-sh/stdlib";
async function invalid_contracts_cron_job() {
  console.log("started");
  const d = await db.ref("airdrops/").get().then((res) => {
    const data = res.val();
    return data;
  });
  const admins = Object.entries(d.admin);
  for (let admin2 = 0;admin2 < admins?.length; admin2++) {
    const [address, data] = admins[admin2];
    const dataEntries = Object.entries(data);
    for (let index = 0;index < dataEntries?.length; index++) {
      const [asset, specificData] = dataEntries[index];
      const userData = d.users?.[specificData?.reciever]?.[asset];
      if (specificData?.claimed == true) {
        if (userData?.claimed == true)
          continue;
      }
      const reach = loadStdlib("ALGO");
      reach.setProviderByName(specificData?.network ?? "MainNet");
      const indexer = (await reach.getProvider()).indexer;
      const app = await indexer.searchForApplications().index(specificData.ctcInfo).do();
      const activeApplication = app?.applications?.find((res) => res?.deleted == false);
      const isActive = !!activeApplication;
      if (!isActive) {
        const CONTRACT_REF = db.ref("airdrops/users").child(`${specificData.reciever}/${specificData.ctcInfo}`);
        const CONTRACT_REF_ADMIN = db.ref("airdrops/admin").child(`${specificData.deployer}/${specificData?.ctcInfo}`);
        await Promise.all([
          await CONTRACT_REF.set({ ...specificData, claimed: true }),
          await CONTRACT_REF_ADMIN.set({ ...specificData, claimed: true })
        ]);
      }
    }
  }
  console.log("Ended");
}
try {
  invalid_contracts_cron_job();
} catch (error) {
  console.error(error);
}
setInterval(() => {
  try {
    invalid_contracts_cron_job();
  } catch (error) {
    console.error(error);
  }
}, 86400000);
