import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Unit_types_model", unitSchema, "unit_types");
