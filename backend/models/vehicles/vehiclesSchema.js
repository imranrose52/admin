import { date } from "joi";
import mongoose from "mongoose";

const vehiclesSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      // required: true,
      unique: true,
    },
    transporter_id: {
      type: String,
      // required: true,
    },
    transporter_name: {
     
      type:mongoose.Schema.Types.ObjectId,
      ref:"transporter_user_model",

      // required: true,
    },
    vehicle_number: {
      type: String,
      required: true,
    },
    vehicle_type: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
      required: true,
    },

    body_type: {
      type: String,
      required: true,
    },
    tyre: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      // required: true,
    },
    photo: {
      type: String,
      // required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    verified_by: {
      type: String,
      // required: true,
    },
    verified_at: {
      type: String,
      // required: true,
    },
    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

const Vehicle = mongoose.model("Vehicle_model", vehiclesSchema);

module.exports = Vehicle;

export default mongoose.model(
  "Vehicle_details_model",
  vehiclesSchema,
  "vehicle_details"
);
