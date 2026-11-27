import fs from "node:fs";
import path from "node:path";

const text = 'Someone was up before daylight to mend the fire.\nThe room is already warm,\nand on the deal table by the window\nsits an earthenware bowl of water,\ndrawn fresh from the well, perfectly clear and still.\n\nOutside, the frost on the orchard grass is blue in the dawn,\ncold enough to crack underfoot,\nbut here the dry pine smells of summer heat,\nand the hearthstones hold the warmth like bread in a cloth.\n\nYou did not have to split the wood or carry the pail.\nIt was all done quietly, without a sound,\nso that when you arrived,\nthere was nothing left to answer,\nand nothing you had to prove.\n\nDrink if you are thirsty;\notherwise, just sit by the embers.\nThe morning has been given to you, whole.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
const charCount = [...text].length;
if (charCount < 1 || charCount > 1000) {
  throw new Error("Invalid text length: " + charCount);
}
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
console.log("Successfully wrote entry.txt (" + charCount + " characters) to " + outDir);
