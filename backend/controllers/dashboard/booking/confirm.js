import express from "express";

import { Booking_Confirm_model } from "../../../models";

import { getClientTimeZone, getDateTimeFormat } from "../../../utils";

const confirmController = {
  // async get(req, res, next) {
  //   const confirm = await Booking_Confirm_model.find();

  //   if (!confirm) {
  //     next(CustomErrorHandler.somwthingWrong());
  //   }
  //   res.status(201).json({ confirm: [...confirm], success: true, confirm });
  //   console.log(confirm);
  // },

  // join two documents------------------
  async get(req, res, next) {
    const confirm = await Booking_Confirm_model.aggregate([
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
      //------------ join quots collection--------------------
      {
        $lookup: {
          from: "booking_quotes",
          localField: "quote_details",
          foreignField: "_id",
          as: "quote_details",
          pipeline: [
            {
              $project: {
                quote_no: 1,

                user_name: 1,
                loader_name: 1,
                weight: 1,
                pickup: 1,
                destination: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$quote_details",
      },

      // ----------- join trabsporter collection-----------------------
      {
        $lookup: {
          from: "loads",
          localField: "load_no",
          foreignField: "_id",
          as: "load_no",
          pipeline: [
            {
              $project: {
                load_no: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: "$load_no",
      },

      // ---join transporter collection-----------------
      {
        $lookup: {
          from: "transporter_users",
          localField: "transporter",
          foreignField: "_id",
          as: "transporter",
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
        $unwind: "$transporter",
      },
    ]);

    if (!confirm) {
      return next(CustomErrorHandler.sometingWrong());
    }
    res.status(201).json({ success: true, confirm });
  },

  // create confirm-------------
  async create(req, res, next) {
    const confirm = await Booking_Confirm_model.create(req.body);

    // await Quoted_model.updateOne(
    //   { _id: id },
    //   {
    //     $push: { quote_details: confirm._id },
    //   }
    // );

    if (!confirm) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, confirm });
  },

  // delete quote----------------
  async delete(req, res, next) {
    let confirm = await Booking_Confirm_model.findByIdAndDelete(req.params.id);

    if (!confirm) {
      return next(CustomErrorHandler.sometingWrong());
    }

    res.status(201).json({ success: true, data: confirm });
  },

  // update confirm----------
  async update(req, res, next) {
    const id = req.params.id;
    const confirm = await Booking_Confirm_model.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (!confirm) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, confirm });
  },
};

export default confirmController;
