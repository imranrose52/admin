/** @format */

import expres from "express";
import { get } from "mongoose";
import { Trips_model } from "../../../../models";

const tripsController = {
    // get trips---------------

  async get(req, res, next) {
    const trips = await Trips_model.find().select("-updatedAt -__v");
    if (!trips) {
      return next(CustomErrorHandler.sometingWrong());
    }
    res.status(201).json({ success: true, trips });
  },



   // create trips----------------------
   async create(req, res, next) {
    const trips = await Trips_model.create(req.body);

    if (!trips) {
      return next(CustomErrorHandler.sometingWrong());
    }
    res.status(201).json({ success: true, trips });
  },



  // delete trips-----------------

  async delete(req, res, next) {
    let trips = await Trips_model.findByIdAndDelete(req.params.id);

    if (!trips) {
      return next(CustomErrorHandler.sometingWrong());
    }

    res.status(201).json({ success: true, data: trips });
  },



  // update trips-------------------------
  async update(req, res, next) {
    const id = req.params.id;
    const trips = await Trips_model.findByIdAndUpdate({ _id: id }, req.body);

    if (!trips) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, trips });
  },
};

 export default tripsController;