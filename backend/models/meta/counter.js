import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  seq: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Counter_schema", counterSchema, "counters");
