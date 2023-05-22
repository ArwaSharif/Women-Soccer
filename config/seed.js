require("dotenv").config();
require("./database");

const Teams = require("../models/Teams");
const Team = require("../models/Team");

(async function () {
  await Teams.deleteMany({});
  const teams = await Teams.create([
    { name: "FWWC23", sortOrder: 10 },
    { name: "OtherTeams", sortOrder: 20 },
    { name: "FavoriteTeams", sortOrder: 30 },
  ]);

  // await Teams.deleteMany({});
  // const teams = await Teams.create([
  //   {name: '23WCTeams', sortOrder: 10},
  //   {name: 'NewTeams', sortOrder: 20},
  //   {name: 'FavoriteTeams', sortOrder: 30},
  // ]);

  await Team.deleteMany({});
  const team = await Team.create([
    {
      group: "H",
      name: "Germany",
      nameAbbreviation: "GER",
      cupParticipation: 5,
      teams: teams[0],
      highestScoringPlayerName: '	Alexandra Popp',
      coach: 'Martina Voss-Tecklenburg'
    },
    {
      group: "B",
      name: "Nigeria",
      nameAbbreviation: "NGA",
      cupParticipation: 10,
      teams: teams[0],
      highestScoringPlayerName: '	Unknown',
      coach: 'Randy Waldrum'
    },
    // {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
    // {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
    // {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95},
    // {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95},
    // {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 25.95},
    // {name: 'Taco', emoji: '🌮', category: categories[2], price: 1.95},
    // {name: 'Burrito', emoji: '🌯', category: categories[2], price: 4.95},
    // {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 3.95},
    // {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 7.95},
    // {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 1.95},
    // {name: 'French Fries', emoji: '🍟', category: categories[4], price: 2.95},
    // {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
    // {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 1.95},
    // {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 0.95},
    // {name: 'Custard', emoji: '🍮', category: categories[5], price: 2.95},
    // {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 3.95},
    // {name: 'Milk', emoji: '🥛', category: categories[6], price: 0.95},
    // {name: 'Coffee', emoji: '☕', category: categories[6], price: 0.95},
    // {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 8.95},
    // {name: 'Beer', emoji: '🍺', category: categories[6], price: 3.95},
    // {name: 'Wine', emoji: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(team);

  process.exit();
})();
