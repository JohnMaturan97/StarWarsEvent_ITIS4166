const mongoose = require("mongoose");

const shipSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    capacity: { type: Number, required: true },
    shipType: { type: String, required: true },
    reservedTimeSlots: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
      },
    ],

    rentPerHour: { type: Number, required: true },
  },
  { timestamps: true }
);
const shipModel = mongoose.model("ships", shipSchema);
module.exports = shipModel;
