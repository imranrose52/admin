

import mongoose from "mongoose";

const loaderSchema = new mongoose.Schema(
  {
    mobile_primary: {
      type: Number,
      unique: true,
      maxlength: 10,
      required: true,
    },

    user_name: {
      type: String,
      trim: true,
      default: "loader",
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },
    mobile_secondary: {
      type: Number,
      default: null,
    },
    status: {
      type: String,
      default: "Pending",
    },
    address: {
      type: String,
      trim: true,
      default: null,
    },
    profile_pic: {
      type: String,
      default: null,
    },
    documents: {
      address_proof: {
        type: String,
        default: null,
      },
      id_proof: {
        type: String,
        default: null,
      },
    },
    verified_by: {
      type: String,
    },
    verified_at: {
      type: String,
    },
    created_date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },
  { timestamps: true }
);

// loaderSchema.pre("findOneAndUpdate", function (next) {
//   // this.user_name.charAt(0).toUpperCase() + this.user_name.slice(1);
//   this.set({ address: "testing" });
//   this.email = "tebhjebjkeee" + this.email;
//   console.log("hehheehehehehehehe");
//   next();
// });

export default mongoose.model(
  "Loader_user_model",
  loaderSchema,
  "loader_users"
);
