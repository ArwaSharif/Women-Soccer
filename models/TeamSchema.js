//from itemSchema
// const team = require("./Team");
const Schema = require("mongoose").Schema;

const teamSchema = new Schema(
  {
    group: { type: String },
    name: { type: String, required: true },
    nameAbbreviation: { type: String, required: true },
    cupParticipation: { type: Number, default: 0 },
    highestScoringPlayerName: {
      type: String,
      default: "Unknown",
    },
    coach: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = teamSchema;

//Adding Plyers Schema later
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
