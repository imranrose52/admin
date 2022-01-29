import { CustomErrorHandler, JwtService } from "../../../services";
import Joi from "joi";
import { Loader_user_model } from "../../../models";
import bcrypt from "bcrypt";

const userController = {
  async self(req, res, next) {
    // cheack user exist or not -----------------------------------------------
    const user = await Loader_user_model.findOne({ _id: req.user._id }).select(
      "-password -updatedAt -__v"
    );

    if (!user) {
      return next(CustomErrorHandler.notFound());
    }
    console.log("hello for user self -----");

    /*
      sent respone login success

    */

    res.status(201).json({ success: true, data: user });
  },
};

export default userController;
