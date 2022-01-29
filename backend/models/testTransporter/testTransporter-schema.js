import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    transporter_no: {
      type: Number,
    },
    pickup: {
      type: String,
    },
    delivery: {
      type: String,
    },
    value: {
      type: Number,
    },
    metarial_type: {
      type: String,
    },
    tyre: {
      type: String,
    },
    weight: {
      type: String,
    },
    created_date: {
      type: String,

      default: new Date().toLocaleDateString(),
    },
    transporter_name: {
      type: String,
    },
    transporter_mobile: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "test_transporter",
  testSchema,
  "test-Transporter"
);
