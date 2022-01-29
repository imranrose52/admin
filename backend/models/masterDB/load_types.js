import mongoose from "mongoose";

const loadTypeSchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Load_types_model", loadTypeSchema, "load_types");
