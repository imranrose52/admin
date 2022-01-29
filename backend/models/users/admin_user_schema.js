import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "enter a mobile number"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin_users_model", adminSchema, "admin_users");
