import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import fetch from "node-fetch";
import axios from "axios";

global.owner = [["2348098309204", "Danny", true], [""]]; //Number of owners

global.pairingNumber = "2348098309204"; //put your bot number here

global.mods = ["2348098309204", "32460248586"];
global.prems = ["2348098309204", "32460248586", "919398758484"];
global.allowed = ["2348098309204", "32460248586", "19152999993"];
global.keysZens = ["c2459db922", "37CC845916", "6fb0eff124"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = [
  "29d4b59a4aa687ca",
  "5LTV57azwaid7dXfz5fzJu",
  "cb15ed422c71a2fb",
  "5bd33b276d41d6b4",
  "HIRO",
  "kurrxd09",
  "ebb6251cc00f9c63",
];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ["GataDios"];

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: "https://api.xteam.xyz",
  dzx: "https://api.dhamzxploit.my.id",
  lol: "https://api.lolhuman.xyz",
  violetics: "https://violetics.pw",
  neoxr: "https://api.neoxr.my.id",
  zenzapis: "https://zenzapis.xyz",
  akuari: "https://api.akuari.my.id",
  akuari2: "https://apimu.my.id",
  nrtm: "https://fg-nrtm.ddns.net",
  bg: "http://bochil.ddns.net",
  fgmods: "https://api-fgmods.ddns.net",
};
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  "https://api.xteam.xyz": "d90a9e986e18778b",
  "https://api.lolhuman.xyz": "85faf717d0545d14074659ad",
  "https://api.neoxr.my.id": `${keysneoxr}`,
  "https://violetics.pw": "beta",
  "https://zenzapis.xyz": `${keysxxx}`,
  "https://api-fgmods.ddns.net": "fg-dylux",
};

// Sticker WM
global.botname = "ᴛʜᴇ kogi-ʙᴏᴛ";
global.premium = "true";
global.packname = "KOGI┃ᴮᴼᵀ";
global.author = "@Danny";
global.menuvid = "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4";
global.igfg = "";
global.dygp = "https://chat.whatsapp.com/BibVE6tUICp3qOm2a1Ur8f";
global.fgsc = "https://github.com/DannyAkintunde/GURU-BOT/tree/main";
global.fgyt = "";
global.fgpyp = "";
global.fglog = "https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg";
global.thumb = fs.readFileSync("./Assets/Gurulogo.jpg");
global.ownernum = "2348098309204";

global.wait = "*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*";
global.rwait = "⌛";
global.dmoji = "🤭";
global.done = "✅";
global.error = "❌";
global.xmoji = "🔥";

global.multiplier = 69;
global.maxwarn = "3"; // maximum amount of warns

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});