import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    transporter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transporter_user_model",
    },

    driver_name: {
      type: String,
    },
    mobile_primary: {
      type: Number,
      unique: true,
    },
    mobile_secondary: {
      type: Number,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

export default mongoose.model("driver_model", driverSchema, "drivers");
