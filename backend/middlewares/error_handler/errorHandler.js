import { CustomErrorHandler } from "../../services";

import { ValidationError } from "joi";
import multer from "multer";

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    ...(process.env.DEBUG_MODE === "true" && { originalMessage: err.message }),
  };

  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }
  if (err instanceof multer.MulterError) {
    statusCode = 422;
    data = {
      message: err.message,
    };
  }

  if (err instanceof CustomErrorHandler) {
    statusCode = err.statusCode;
    data = {
      message: err.message,
    };
  }

  // Handle Wrong MongoDB id error ---------------------------------------------------------------

  if (err.name === "CastError") {
    statusCode = 409;
    data = {
      message: "id not found",
    };
  }

  //   if env PRODUCTION=true then don't show stack-----------------------
  return res.status(statusCode).json(data);
};

// const errorHandler = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.message = err.message || "Internal server error";

//   // Handle Wrong MongoDB id error ---------------------------------------------------------------

//   if (err.name === "CastError") {
//     const message = `Resource Not Found . Invalid ${
//       process.env.PRODUCTION === "true" ? "" : err.path
//     }`;
//     err = new ErrorHandler(message, 400);
//   }

//   //   if env PRODUCTION=true then don't show stack-----------------------
//   res.status(err.statusCode).json({
//     success: false,
//     error: process.env.PRODUCTION == "true" ? err.message : err.stack,
//   });
// };

export default errorHandler;
