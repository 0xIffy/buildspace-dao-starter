import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0xE7b3bF3F0D4ad344547E45B6A085de248500183f");

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Alpha Asset",
        description: "This NFT will give you access to AlphaDao!",
        image: readFileSync("scripts/assets/alpha.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()