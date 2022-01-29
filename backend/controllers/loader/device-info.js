import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Loads_model, Loader_device_model } from "../../models";

const deviceInfoController = {
  async getFCM(req, res, next) {
    // -------------------------------------------------------------------
    const fcm = await Loader_device_model.find({
      loader_id: req.user._id,
    }).select("-createdAt -updatedAt -__v");

    console.log(fcm);

    if (!fcm) {
      return next(CustomErrorHandler.sometingWorng());
      console.log("error");
    }

    res.status(201).json({ success: true, data: fcm });
  },
  async setFCM(req, res, next) {
    // -------------------------------------------------------------------

    // cheack id exist old device token -----------------------------------------
    let isExist = await Loader_device_model.exists({ loader_id: req.user._id });

    let fcm;

    // if old fcm token is in the database then update old one with new device fmc token----
    if (isExist) {
      fcm = await Loader_device_model.findOneAndUpdate(
        { loader_id: req.user._id },
        { fcm: req.body.fcm }
      );
    } else {
      // if user or token not exist then create a new one------------------------
      fcm = await Loader_device_model.create({
        fcm: req.body.fcm,
        loader_id: req.user._id,
      });
    }

    if (!fcm) {
      return next(CustomErrorHandler.sometingWorng());
      console.log("error");
    }

    // console.log(fcm);
    res.status(201).json({ success: true });
  },
};

export default deviceInfoController;
