import mongoose from "mongoose";

const confirmSchema = new mongoose.Schema(
  {
    quote_details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quoted_model",
    },
    load_no: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Load_model",
    },
    transporter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transporter_user-model",
    },
    // loader_name: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref:""
    // },
    // quoted_price: {
    //   type: String,
    // },
    paid: {
      type: String,
    },
    balance: {
      type: String,
    },

    payment_mode: {
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
      default: new Date().toLocaleDateString(),
    },
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },

    quote_details: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quoted_model",
      index: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model(
  "Booking_Confirm_model",
  confirmSchema,
  "booking_Confirm"
);
