import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Material = mongoose.model("MATERIAL", materialSchema);

module.exports = Material;

export default mongoose.model("States_model", stateSchema, "states");
