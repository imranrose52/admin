import mongoose from "mongoose";

const materialSchema = new mongoose.Schema(
  {
    material_name: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Material_types_model",
  materialSchema,
  "material_types"
);
