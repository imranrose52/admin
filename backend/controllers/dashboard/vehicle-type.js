import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Vehicle_types_model } from "../../models";

const vehicleTypeController = {
  async get(req, res, next) {
    // -------------------------------------------------------------------
    const vehicle_types = await Vehicle_types_model.find().select(
      "-updatedAt -__v"
    );
    // console.log("#####", vehicle_types);

    if (!vehicle_types) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, vehicle_types });
  },

  async create(req, res, next) {
    const vehicle_types = await Vehicle_types_model.create(req.body);

    if (!vehicle_types) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, vehicle_types });
  },

  async delete(req, res, next) {
    let vehicle_types = await Vehicle_types_model.findByIdAndDelete(
      req.params.id
    );

    if (!vehicle_types) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, data: vehicle_types });
  },

  async update(req, res, next) {
    const id = req.params.id;
    const vehicle_types = await Vehicle_types_model.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (!vehicle_types) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, vehicle_types });
  },
};

export default vehicleTypeController;
