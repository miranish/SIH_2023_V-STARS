const mongoose = require("mongoose");

const { Schema } = mongoose;

const stateSchema = new Schema(
  {
    stateID: String,
    stateName: String,
    stateDesc: String,
    ImagesData: [
      {
        cardImage: String,
        bgImage: String,
        cardTitle: String,
      }
    ],
  },
  { timestamps: true }
);

const State = mongoose.model("State", stateSchema);
module.exports = State;


