import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import {
  Loader_user_model,
  Loads_model,
  driver_model,
  Transporter_user_model,
  Vehicle_details_model,
  Trips_model
} from "../../models";
// import { io } from "../../server";
// import NotificationService from "../../services/NotificationService";
// import { webShoketSender } from "../../services/socket";
import { getOnlineUserId } from "../../services/socket";

const dashboardController = {

  // -------------load count-----------------------------------------
  async getLoadCount(req, res, next) {
    
    const count = await Loads_model.count();

    if (!count) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, count });
  },

  // ----------------Loader Count---------------------------------------------

  async getLoaderCount(req, res, next) {
    const count = await Loader_user_model.count();

    if (!count) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, count });
  },

  // -------------Online user----------------------------------------------

  async getOnlineUser(req, res, next) {
    let onlineUsers = getOnlineUserId();
    const user = await Loader_user_model.find({ _id: onlineUsers });
    // if (!user) {
    //   return next(CustomErrorHandler.sometingWorng());
    //   // console.log("error");
    // }
    res.status(201).json({ success: true, onlineUsers, user });
  },



  // ------driver total count--------------

  async getDriverCount(req, res, next) {
    const count = await driver_model.count();

    if (!count) {
      return next(CustomErrorHandler.sometingWrong());
      // console.log("error");
    }

    res.status(201).json({ success: true, count });
  },



  // transporter count----------

  async getTransporterCount(req, res, next) {
    const count = await Transporter_user_model.count();

    if (!count) {
      return next(CustomErrorHandler.sometingWrong());
      // console.log("error");
    }

    res.status(201).json({ success: true, count });
  },



  // vehicle count------------
  async getVehicleCount(req, res, next) {
    const count = await Vehicle_details_model.count();

    if (!count) {
      return next(CustomErrorHandler.sometingWrong());
      // console.log("error");
    }

    res.status(201).json({ success: true, count });
  },


  // close trips count-------------

  async getCloseTripCount(req, res, next) {
    const count = await Trips_model.count();

    if (!count) {
      return next(CustomErrorHandler.sometingWrong());
      // console.log("error");
    }

    res.status(201).json({ success: true, count });
  },



};

export default dashboardController;
