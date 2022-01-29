import mongoose from "mongoose";

const vehicleTypeSchema = new mongoose.Schema(
  {
    vehicle_type: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
    },
    body_type: {
      type: String,
      default: "Full",
    },
    tyre: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      default: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Vehicle_types_model",
  vehicleTypeSchema,
  "vehicle_types"
);
