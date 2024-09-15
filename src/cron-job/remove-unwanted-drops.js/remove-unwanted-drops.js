// src/cron-job/remove-unwanted-drops.ts
import {db} from "../../firebase_admin/index.js";
import {loadStdlib} from "@reach-sh/stdlib";
async function invalid_contracts_cron_job() {
  console.log("started");
  const d = await db.ref("airdrops/").get().then((res) => {
    const data = res.val();
    return data;
  });
  const admins = Object.entries(d.admin);
  for (let admin = 0;admin < admins?.length; admin++) {
    const [address, data] = admins[admin];
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
