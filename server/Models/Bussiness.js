const mongoose = require("mongoose");

const BussinessSchema = mongoose.Schema(
  {
    AccountAdress: {
      type: String,
      required: true,
      // unique: true,
    },
    BussinessName: {
      type: String,
      required: true,
      // unique: true,
    },
  },
  { timestamps: true }
);

const Bussiness = mongoose.model("BussinessData", BussinessSchema);
module.exports = Bussiness;
