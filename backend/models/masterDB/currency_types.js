import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  materialName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Currency_model", currencySchema, "currencies");
