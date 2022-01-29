import mongoose from "mongoose";

const AutoIncrement = require("mongoose-sequence")(mongoose);
import loader_user_schema from "../users/loader_user_schema";

const loadSchema = new mongoose.Schema(
  {
    load_no: {
      type: Number,
    },
    loader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Loader_user_model",
      // required: true,
    },
    pickup: {
      address: {
        type: String,
        required: true,
        trim: true,
      },
      lat: {
        type: String,
      },
      lng: {
        type: String,
      },
    },
    delivery: {
      address: {
        type: String,
        required: true,
        trim: true,
      },
      lat: {
        type: String,
        // required: true,
      },
      lng: {
        type: String,
        // required: true,
      },
    },
    // load_type: {
    //   type: String,
    //   required: true,
    // },
    vehicle_type: {
      type: String,
      required: true,
    },
    meterial_type: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    created_date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    expected_date: {
      type: String,
    },
    date: {
      type: String,
      // required: true,
      default: new Date().toLocaleDateString(),
    },
    remark: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

loadSchema.plugin(AutoIncrement, { inc_field: "load_no" });

// loadSchema.pre("save", function (next) {

//   this.load_no = this.load_no + 1
//   next();
// });

export default mongoose.model("Load_model", loadSchema, "loads");
