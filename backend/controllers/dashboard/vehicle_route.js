import express from "express";
import { get } from "mongoose";

import { Vehicle_details_model } from "../../models";


import { getClientTimeZone,getDateTimeFormat } from "../../utils";


const vehicleController = {
  // async get(req, res, next) {
  //   // -------------------------------------------------------------------
  //   const vehicle = await Vehicle_details_model.find().select(
  //     "-updatedAt -__v"
  //   );
  //   // console.log("#####", vehicle_types);

  //   if (!vehicle) {
  //     return next(CustomErrorHandler.sometingWrong());
  //     // console.log("error");
  //   }

  //   res.status(201).json({ success: true, vehicle });
  // },

  // join two documents----------------

  async get(req, res, next) {
    const vehicle = await Vehicle_details_model.aggregate([
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $addFields: {
          createdAt: {
            $dateToString: {
              format: getDateTimeFormat(),
              date: "$createdAt",
              timezone: getClientTimeZone(),
            },
          },
        },
      },

      {
        $project: {
          __v: 0,
        },
      },


      {
        $lookup: {
          from: "transporter_users",
          localField: "transporter_name",
          foreignField: "_id",
          as: "transporter_name",
          pipeline: [
            {
              $project: {
                user_name: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$transporter_name",
      },
    ]);

    if (!vehicle) {
      return next(CustomErrorHandler.sometingWrong());
    }
    res.status(201).json({ success: true, vehicle });
  },

  async create(req, res, next) {
    const vehicle = await Vehicle_details_model.create(req.body);

    if (!vehicle) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, vehicle });
  },

  async delete(req, res, next) {
    let vehicle = await Vehicle_details_model.findByIdAndDelete(req.params.id);

    if (!vehicle) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, data: vehicle });
  },

  async update(req, res, next) {
    const id = req.params.id;
    const vehicle = await Vehicle_details_model.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (!vehicle) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, vehicle });
  },
};

export default vehicleController;
