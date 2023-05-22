//from itemSchema
const Schema = require("mongoose").Schema;

// const playersRosterSchema = new Schema(
//   {
//     playerName: {
//       type: String,
//     },
//     playerNum: {
//       type: Number,
//     },
//     playerAge: {
//       type: String,
//     },
//     playerPosition: {
//       type: String,
//     },
//     playerClub: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const teamSchema = new Schema(
  {
    group: { type: String, required: true },
    name: { type: String, required: true },
    // group: { type: String, required: true },
    nameAbbreviation: { type: String, required: true },
    teams: { type: Schema.Types.ObjectId, ref: "Teams" },
    cupParticipation: { type: Number, required: true, default: 0 },
    highestScoringPlayerName: { type: String, required: true, default: "Unknown" },
    coach: { type: String, required: true },
    // playersRoster: [playersRosterSchema],
  },
  {
    timestamps: true,
  }
);

// const Team = model("Flight", teamSchema);

// module.exports = Team;
module.exports = teamSchema;
