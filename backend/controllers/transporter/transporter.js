import { json } from "express";
import Transporter from "../../models/users/transporter_user_schema";
import { CustomErrorHandler } from "../../services";
import Joi from "joi";

const transporter = {
  async creteTransporter(req, res, next) {
    const creteTransporterValidate = Joi.object({
      user_name: Joi.string().required(),
    });

    const { error } = creteTransporterValidate.validate(req.body);
    if (error) {
      return next(error);
    }

    const transporter = await Transporter.create(req.body);

    res.status(201).json({ success: true, sms: "working" });
  },

  async updateTransporter(req, res, next) {
    let transporter = await Transporter.findById(req.params.id);

    if (!transporter) {
      return next(CustomErrorHandler.resourceNotFound("user not found"));
    }

    res.status(201).json({ success: true, transporter });
  },
};

// --------------------update  transporter------------------------------------------------

// all async fuction are handelded by try catchAsyncErrors function

export default transporter;
