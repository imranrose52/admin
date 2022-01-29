import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Loader_user_model } from "../../models";
import { io } from "../../server";
import NotificationService from "../../services/NotificationService";
import { webShoketSender } from "../../services/socket";

const loaderController = {
  async get(req, res, next) {
    // -------------------------------------------------------------------
    const loaders = await Loader_user_model.find().select(
      "-password -updatedAt -__v"
    );

    if (!loaders) {
      return next(CustomErrorHandler.sometingWrong());
      // console.log("error");
    }

    res.status(201).json({ success: true, loaders });
  },
  async create(req, res, next) {
    // validating request data using joi library--------------------------------
    // const loginSchema = Joi.object({
    //   mobile_primary: Joi.number().required(),

    // });

    // // throw validation error--------------------------------------------------------
    // const { error } = loginSchema.validate(req.body);
    // if (error) {
    //   return next(error);
    // }

    // cheack user exist or not -----------------------------------------------
    const user = await Loader_user_model.findOne({
      mobile_primary: req.body.mobile_primary,
    });

    if (user) {
      return next(CustomErrorHandler.userExist());
    } else {
      //  if user  not exist then create a new user ------------------------------------------------
      // crete new user -------------------
      let newLoader = await Loader_user_model.create(req.body);
      res.status(201).json({ success: true, newLoader });
    }
  },

  async delete(req, res, next) {
    // console.log("hello");
    // console.log(req.params.id);

    let result = await Loader_user_model.findByIdAndDelete(req.params.id);

    if (!result) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, data: result });
  },

  async update(req, res, next) {
    const id = req.params.loader_id;
    const result = await Loader_user_model.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (!result) {
      return next(CustomErrorHandler.sometingWorng());
    }

    webShoketSender(id);
    // profileUpdate(req.params.loader_id);
    // console.log("shoket id -> ", getUser(req.params.loader_id));

    // let targetUser = getUser(req.params.loader_id);

    // io.to(targetUser).emit("update", "profile updated");
    // io.emit("sendNotification", "profile updated");
    // io.to("AZRDCEEQLMSVb5_tAAAB").emit("update", "profile updated");

    NotificationService.sendNotification(
      "Account status",
      `Your account has been ${req.body.status}`,
      req.params.loader_id
    );

    res.status(201).json({ success: true, updated: true, data: result });
  },
};

export default loaderController;
