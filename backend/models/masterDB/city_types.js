import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Material_model", materialSchema, "material");
