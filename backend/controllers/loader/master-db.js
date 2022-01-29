import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Material_model, Vehicle_types_model } from "../../models";

const masterDbController = {
  async getMeterial(req, res, next) {
    // -------------------------------------------------------------------
    const materials = await Material_model.find().select("-updatedAt -__v");

    console.log(materials);

    if (!materials) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, materials });
  },

  async getVihicleType(req, res, next) {
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
};

export default masterDbController;
