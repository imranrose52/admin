import express from "express";
import { get } from "mongoose";
import { Quoted_model } from "../../../models";
import { getClientTimeZone, getDateTimeFormat } from "../../../utils";

const quoteController = {
  // async get(req, res, next) {
  //   // -------------------------------------------------------------------
  //   const quote = await Quoted_model.find().select("-updatedAt -__v");
  //   // console.log("#####", vehicle_types);

  //   if (!quote) {
  //     return next(CustomErrorHandler.sometingWorng());
  //     // console.log("error");
  //   }

  //   res.status(201).json({ success: true, quote });
  // },

  // join  documents------------------
  async get(req, res, next) {
    const quote = await Quoted_model.aggregate([
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
      //------------ join transporters collection--------------------
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

      //----------- join loads collection-----------------------
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
    ]);

    if (!quote) {
      return next(CustomErrorHandler.sometingWrong());
    }
    res.status(201).json({ success: true, quote });
  },

  // create quote----------------------
  async create(req, res, next) {
    const quote = await Quoted_model.create(req.body);

    if (!quote) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, quote });
  },

  // delete quote----------------
  async delete(req, res, next) {
    let quote = await Quoted_model.findByIdAndDelete(req.params.id);

    if (!quote) {
      return next(CustomErrorHandler.sometingWrong());
    }

    res.status(201).json({ success: true, data: quote });
  },

  // update quote-------------------

  async update(req, res, next) {
    const id = req.params.id;
    const quote = await Quoted_model.findByIdAndUpdate({ _id: id }, req.body);

    if (!quote) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, quote });
  },
};

export default quoteController;
