import { db } from "../firebase_admin";
import { loadStdlib } from "@reach-sh/stdlib";
import { Indexer } from "algosdk";

async function invalid_contracts_cron_job() {
  console.log("started")
  const d = await db
    .ref("airdrops/")
    .get()
    .then((res) => {
      const data = res.val() as Record<
        "users" | "admin",
        Record<
          string,
          Record<
            string,
            {
              contract: "algo" | "token";
              ctcInfo: number;
              assetId: string | number;
              deployer: string;
              name: string;
              network: "TestNet" | "MainNet";
              reciever: "string";
              amount: number;
              claimed: boolean;
              version: "v1" | "v2" | "v3" | "v4";
            }
          >
        >
      >;
      return data;
    });
  const admins = Object.entries(d.admin);
  for (let admin = 0; admin < admins?.length; admin++) {
    const [address, data] = admins[admin];
    const dataEntries = Object.entries(data);

    for (let index = 0; index < dataEntries?.length; index++) {
      const [asset, specificData] = dataEntries[index];
      const userData = d.users?.[specificData?.reciever]?.[asset];

      if (specificData?.claimed == true) {
        if (userData?.claimed == true) continue;
      }

      // We run checks for those that are left in the database but have already been claimed
      const reach = loadStdlib("ALGO");
      reach.setProviderByName(specificData?.network ?? "MainNet");
      const indexer: Indexer = (await reach.getProvider()).indexer;
      const app = await indexer
        .searchForApplications()
        .index(specificData.ctcInfo)
        .do();
      const activeApplication = app?.applications?.find(
        (res) => res?.deleted == false
      );
      const isActive = !!activeApplication;

      // // @ts-ignore
      // const mainData = specificData?.[asset];
      // if (mainData) {
      //     const CONTRACT_REF = db
      //   .ref("airdrops/users")
      //   .child(`${mainData.reciever}/${mainData.ctcInfo}`);
      // const CONTRACT_REF_ADMIN = db
      //   .ref("airdrops/admin")
      //   .child(`${mainData.deployer}/${mainData?.ctcInfo}`);
      //   await Promise.all([
      //     await CONTRACT_REF.set({ ...mainData }),
      //     await CONTRACT_REF_ADMIN.set({ ...mainData }),
      //   ]);
      // }

      if (!isActive) {
        const CONTRACT_REF = db
          .ref("airdrops/users")
          .child(`${specificData.reciever}/${specificData.ctcInfo}`);
        const CONTRACT_REF_ADMIN = db
          .ref("airdrops/admin")
          .child(`${specificData.deployer}/${specificData?.ctcInfo}`);

        await Promise.all([
          await CONTRACT_REF.set({ ...specificData, claimed: true }),
          await CONTRACT_REF_ADMIN.set({ ...specificData, claimed: true }),
        ]);
      }
    }
  }

  console.log("Ended");
}

try {
  invalid_contracts_cron_job();
} catch (error) {
  console.error(error)
}

setInterval(() => {
  try {
    invalid_contracts_cron_job();
  } catch (error) {
    console.error(error)
  }
}, 1000 * 60 * 60 * 24);
