import { CustomErrorHandler } from "../../services";
import Joi from "joi";
import { test_transporter } from "../../models";

const TestController = {
  async get(req, res, next) {
    // -------------------------------------------------------------------
    const testTrans = await test_transporter.find().select("-updatedAt -__v");
    // console.log("#####", transporter);

    if (!testTrans) {
      return next(CustomErrorHandler.sometingWorng());
      // console.log("error");
    }

    res.status(201).json({ success: true, testTrans });
  },

  async create(req, res, next) {
    const testTrans = await test_transporter.create(req.body);

    if (!testTrans) {
      return next(CustomErrorHandler.sometingWorng());
    }
    res.status(201).json({ success: true, testTrans });
  },
};

export default TestController;
