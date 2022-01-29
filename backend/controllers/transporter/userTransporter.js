import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Transporter_user_model } from "../../models";

const TransporterController = {
  async get(req, res, next) {
    // -------------------------------------------------------------------
    const transporter = await Transporter_user_model.find().select(
      "-updatedAt -__v"
    );
    // console.log("#####", transporter);

    if (!transporter) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, transporter });
  },

  async create(req, res, next) {
    const transporter = await Transporter_user_model.create(req.body);

    if (!transporter) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, transporter });
  },

  async delete(req, res, next) {
    let transporter = await Transporter_user_model.findByIdAndDelete(
      req.params.id
    );

    if (!transporter) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, data: transporter });
  },

  async update(req, res, next) {
    const id = req.params.id;
    const transporter = await Transporter_user_model.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (!transporter) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, transporter });
  },
};

export default TransporterController;
