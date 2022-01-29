import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Country_model", countrySchema, "countries");
