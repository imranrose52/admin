import mongoose from "mongoose";

const loaderDevice = new mongoose.Schema(
  {
    loader_id: {
      type: String,
    },
    fcm: {
      type: String,
    },
  },
  { timestamps: true }
);

// loadSchema.pre("save", function (next) {
//   console.log("hhhwwwwwwwwwwwwwwwwww");
//   this.remark = "working,,,,";
//   next();
// });

export default mongoose.model(
  "Loader_device_model",
  loaderDevice,
  "loader-device"
);
