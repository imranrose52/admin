import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  mobile_primary: {
    type: Number,
    required: true,
    unique: true,
  },

  user_name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  mobile_secondary: {
    type: Number,
  },
  status: {
    type: String,
    default: "pending",
  },
  address: {
    type: String,
    trim: true,
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
    license_no: {
      type: String,
    },
    license_document: {
      type: String,
    },
    ifsc: {
      type: String,
    },
    bank_account_no: {
      type: String,
    },
    bank_account_name: {
      type: String,
    },
  },

  verified_by: {
    type: String,
    required: true,
  },
  verified_at: {
    type: String,
    required: true,
  },
});

export default mongoose.model(
  "Driver_user_model",
  driverSchema,
  "driver_users"
);
