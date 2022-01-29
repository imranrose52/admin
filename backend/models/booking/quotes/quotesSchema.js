import mongoose from "mongoose";
const AutoIncrement = require("mongoose-sequence")(mongoose);

const quoteSchema = new mongoose.Schema(
  {
    quote_no: {
      type: Number,
      unique: true,
    },
    load_no: {
      type: mongoose.Types.ObjectId,
      ref: "Load_model",
    },
    transporter: {
      type: mongoose.Types.ObjectId,
      ref: "transporter_user_model",
    },
    loader_name: {
      type: String,
    },
    quoted_price: {
      type: String,
    },
    pickup: {
      type: String,
    },
    destination: {
      type: String,
    },
    weight: {
      type: String,
    },
    value: {
      type: String,
    },
    start_date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    end_date: {
      type: String,
      // default: new Date().toLocaleDateString(),
    },
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

quoteSchema.plugin(AutoIncrement, { inc_field: "quote_no" });

export default mongoose.model("Quoted_model", quoteSchema, "booking_quotes");
