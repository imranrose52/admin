import { CustomErrorHandler, JwtService } from "../../services";
import Joi from "joi";
import { Loader_user_model } from "../../models";
import { loader_kyc_uploder, loader_profile_uploder } from "../../utils";
import multer from "multer";
import fs from "fs";
import { request } from "http";

const kycController = {
  async update(req, res, next) {
    // validating request data using joi library--------------------------------
    // const kycSchema = Joi.object({
    //   user_name: Joi.string(),
    //   email: Joi.string().email().required(),
    //   mobile_secondary: Joi.number(),
    //   address: Joi.string().required(),
    // });
    // // throw validation error--------------------------------------------------------
    // const { error } = kycSchema.validate(req.body);
    // if (error) {
    //   return next(error);
    // }

    // -------------------------------------------------------------------

    const { user_name, email, mobile_secondary, address } = req.body;
    const loader = await Loader_user_model.findByIdAndUpdate(
      { _id: req.user._id },
      { user_name, email, mobile_secondary, address }
    );

    if (!loader) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, data: loader });
  },
};

export default kycController;
