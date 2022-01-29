import mongoose from "mongoose";

const transporterSchema = new mongoose.Schema(
  {
    mobile_primary: {
      type: Number,
      // required: [true, "enter a mobile number"],
      maxlength: 10,
      unique: true,
      required: true,
    },
    user_name: {
      type: String,
      required: true,

      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    mobile_secondary: {
      type: Number,
      maxlength: 10,
    },
    profile_pic: {
      type: String,
    },
    documents: {
      address_proof: {
        type: String,
      },
      id_proof: {
        type: String,
      },
    },
    rating: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "Pending",
    },
    created_date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },

    verified_by: {
      type: String,
      // required: true,
    },
    verified_at: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "transporter_user_model",
  transporterSchema,
  "transporter_users"
);
