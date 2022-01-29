import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Loads_model } from "../../models";

const loadsController = {
  async get(req, res, next) {
    // -------------------------------------------------------------------
    const loads = await Loads_model.find()
      .select("-updatedAt -__v")
      .populate("loader", "user_name");
    // console.log("#####", loads);

    if (!loads) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, loads });
  },

  async create(req, res, next) {
    const loads = await Loads_model.create(req.body);

    if (!loads) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, loads });
  },

  async delete(req, res, next) {
    let loads = await Loads_model.findByIdAndDelete(req.params.id);

    if (!loads) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, data: loads });
  },

  async update(req, res, next) {
    const id = req.params.id;
    const loads = await Loads_model.findByIdAndUpdate({ _id: id }, req.body);

    if (!loads) {
      return next(CustomErrorHandler.sometingWorng());
    }

    res.status(201).json({ success: true, updated: true, loads });
  },
};

export default loadsController;
