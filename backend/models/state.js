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
      },
    ],
    detail: [{
      detailTitle: String,
      detailDescription: Array,
      detailAdditionalInfo: String,
      detailImages: [
        {
          detailImage: String,
          detailImageDescription: String,
        },
      ],
    }],
  },
  { timestamps: true }
);

const State = mongoose.model("State", stateSchema);
module.exports = State;
