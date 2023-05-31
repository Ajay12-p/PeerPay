const mongoose = require("mongoose");

const PaymentDataSchema = mongoose.Schema(
  {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    flowrate: {
      type: String,
      required: true,
    },
    Buyer: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    coin: {
      type: String,
      required: true,
    },
    Product: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    Active: {
      type: Boolean,
      required: true,
    },
    Amount: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("PaymentData", PaymentDataSchema);
module.exports = Payment;
