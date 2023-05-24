require("dotenv").config();
require("./database");

const Team = require("../models/Team");

(async function () {

  // await Team.deleteMany({});
  const team = await Team.create([
    {
      group: "H",
      name: "Germany",
      nameAbbreviation: "GER",
      cupParticipation: 5,
      // teams: teams[0],
      highestScoringPlayerName: 'Alexandra Popp',
      coach: 'Martina Voss-Tecklenburg'
    },
    {
      group: "B",
      name: "Nigeria",
      nameAbbreviation: "NGA",
      cupParticipation: 10,
      // teams: teams[0],
      highestScoringPlayerName: 'Unknown',
      coach: 'Randy Waldrum'
    },
  ]);

  console.log(team);

  process.exit();
})();
