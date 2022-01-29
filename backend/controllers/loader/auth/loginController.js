import { CustomErrorHandler, JwtService } from "../../../services";
import Joi from "joi";
import { Refresh_token_model, Loader_user_model } from "../../../models";
import bcrypt from "bcrypt";

const loginController = {
  async login(req, res, next) {
    // validating request data using joi library--------------------------------
    const loginSchema = Joi.object({
      mobile_primary: Joi.number().required(),
    });

    // throw validation error--------------------------------------------------------
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return next(error);
    }

    // cheack user exist or not -----------------------------------------------
    const user = await Loader_user_model.findOne({
      mobile_primary: req.body.mobile_primary,
    });

    if (user) {
      // ganarate access token----------------------------------------------------------------
      const accesToken = JwtService.sign({ _id: user._id }, "1y");

      res
        .status(201)
        // .cookie("access_token", accesToken, JwtService.setToken())
        .json({ success: true, accesToken });
    } else {
      //  if user  not exist then create a new user ------------------------------------------------
      // crete new user -------------------
      let newUser = await Loader_user_model.create({
        mobile_primary: req.body.mobile_primary,
      });

      const accesToken = JwtService.sign({ _id: newUser._id }, "1y");

      // // sing refresh token for 1 year validity-------------------------------------

      // const refreshToken = JwtService.sign(
      //   { _id: newUser._id },
      //   "1y",
      //   process.env.JWT_REFRESH_TOKEN
      // );

      // // whitelist refresh token in database------------------------------------------

      // await Refresh_token_model.create({ token: refreshToken });

      // send and verify otp -------------------------------------------------------

      // ---------------------------------------------------------------

      res
        .status(201)
        .cookie("access_token", accesToken, JwtService.setToken())
        .json({ success: true, accesToken });
    }

    // send and verify otp -------------------------------------------------------

    // ---------------------------------------------------------------
  },

  async logout(req, res, next) {
    // // validating request data using joi library--------------------------------
    // const refreshTokenSchema = Joi.object({
    //   refresh_token: Joi.string().required(),
    // });

    // // throw validation error--------------------------------------------------------
    // const { error } = refreshTokenSchema.validate(req.body);
    // if (error) {
    //   return next(error);
    // }

    // const { refresh_token } = req.cookies;

    /*

    send refresh token in req body from device

    */

    // console.log(refresh_token);

    // if (!refresh_token) {
    //   return next(CustomErrorHandler.unAuthorize());
    // }

    // let respone = await Refresh_token_model.deleteOne({
    //   token: refresh_token,
    // });

    // if (respone.deletedCount === 0) {
    //   return next(CustomErrorHandler.sometingWorng());
    // }

    res
      .status(201)
      .cookie("access_token", null, JwtService.deleteToken())
      .json({ success: true, data: "deleted" });
  },

  async test(req, res, next) {
    res.status(201).json({ success: true, data: "tested" });
  },
};

export default loginController;
