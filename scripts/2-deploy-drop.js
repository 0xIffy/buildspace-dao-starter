import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xE2ac0fE2aADD2a64Cab946f1683941DBcd569bec");

const deploy = async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "AlphaDao Membership",
      description: "A Dao for people looking to promote and find new projects",
      image: readFileSync("scripts/assets/alpha.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch(e) {
    console.log("Failed to deploy:", e);
  }
}

deploy();