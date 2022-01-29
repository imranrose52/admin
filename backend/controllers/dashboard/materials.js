import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Material_model } from "../../models";

const materialController = {
  async get(req, res, next) {
    // -------------------------------------------------------------------
    const materials = await Material_model.find().select("-updatedAt -__v");

    if (!materials) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, materials });
  },

  async create(req, res, next) {
    const materials = await Material_model.create(req.body);

    if (!materials) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, materials });
  },

  async delete(req, res, next) {
    let materials = await Material_model.findByIdAndDelete(req.params.id);

    if (!materials) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, data: materials });
  },

  async update(req, res, next) {
    const id = req.params.id;
    const result = await Material_model.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    if (!result) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, data: result });
  },
};

export default materialController;
