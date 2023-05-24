const Schema = require("mongoose").Schema;

const teamSchema = new Schema(
  {
    // group: { type: String },
    name: { type: String, required: true, default: 'NA' },
    nameAbbreviation: { type: String },
    cupParticipation: { type: Number, default: 0 },
    highestScoringPlayerName: {
      type: String,
      default: "Unknown",
    },
    coach: { type: String, default: 'NA'},
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = teamSchema;
