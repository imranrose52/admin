import { CustomErrorHandler } from "../../services";
import { driver_model } from "../../models";
import { get } from "mongoose";
import mongooseSequence from "mongoose-sequence";
import { transporter } from "..";

const driverController = {
  async get(req, res, next) {
    const driver = await driver_model
      .find()
      .select("-updatedAt -__v")
      .populate("transporter", "user_name");
    // console.log("#####", loads);

    if (!driver) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, driver });
  },

  // join two documents-----------------

  // create drivers-------------------
  async create(req, res, next) {
    const driver = await driver_model.create(req.body);

    if (!driver) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, driver });
  },

  // delete driver------------------------
  async delete(req, res, next) {
    let driver = await driver_model.findByIdAndDelete(req.params.id);

    if (!driver) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, data: driver });
  },

  // update driver-------------------
  async update(req, res, next) {
    const id = req.params.id;
    const driver = await driver_model.findByIdAndUpdate({ _id: id }, req.body);

    if (!driver) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, driver });
  },
};
export default driverController;
