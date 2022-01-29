import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { Loads_model, Counter_schema } from "../../models";

const createLoadsController = {
  async get(req, res, next) {
    // -------------------------------------------------------------------
    const myLoads = await Loads_model.find({ loader: req.user._id }).select(
      "-password -updatedAt -__v"
    );

    if (!myLoads) {
      return next(CustomErrorHandler.sometingWorng());
      console.log("error");
    }

    res.status(201).json({ success: true, data: myLoads });
  },

  // ------------------create loads-------------------
  async create(req, res, next) {
    // -------------------------------------------------------------------

    let newLoad = await Loads_model.create({
      pickup: req.body.pickup,
      load_no: req.body.load_no,
      delivery: req.body.delivery,
      weight: req.body.weight,
      value: req.body.value,
      date: req.body.date,
      remark: req.body.remark,
      loader: req.user._id,
      load_type: req.body.load_type,
      vehicle_type: req.body.vehicle_type,
      meterial_type: req.body.meterial_type,
    });

    if (!newLoad) {
      return next(CustomErrorHandler.sometingWorng());
      console.log("error");
    }

    console.log(newLoad);
    res.status(201).json({ success: true, data: newLoad });
  },

  async delete(req, res, next) {
    console.log("hello");
    console.log(req.params.load_id);

    let deleteLoad = await Loads_model.findByIdAndDelete(req.params.load_id);

    if (!deleteLoad) {
      return next(CustomErrorHandler.sometingWorng());
      console.log("error");
    }

    res.status(201).json({ success: true, data: deleteLoad });
  },
};

export default createLoadsController;
