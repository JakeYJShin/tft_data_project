// import challenger_info from "./challenger_info.json";
// import player_data from "./player_data.json";

const challenger_info = require("./challenger_info.json");
const player_data = require("./player_data.json");
const updated_challenger_info = require("./updated_challenger_info.json");
const match_master_sheet = require("./match_master_sheet.json");

console.log(match_master_sheet[0].Champions[8].Name);

match_master_sheet[0].Champions;
// Code below used for fixing match_master_sheet champions and traits field

// Code below used for concatenating the data

// var i = 0;

// for (i = 0; i < challenger_info.length; i++) {
//   for (j = 0; j < player_data.length; j++) {
//     if (player_data[j].Summoner_Name == challenger_info[i].Summoner_Name) {
//       challenger_info[i]["PUUID"] = player_data[j]["PUUID"];
//       break;
//     }
//   }
// }

// const fs = require("fs");

// fs.writeFileSync(
//   "./challenger_info_test.json",
//   JSON.stringify(challenger_info)
// );
