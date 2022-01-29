import { CustomErrorHandler, JwtService } from "../../services";
import { catchAsyncErrors } from "../../middlewares";
import { Loader_user_model } from "../../models";

const isVerified = catchAsyncErrors(async (req, res, next) => {
  const user = await Loader_user_model.findOne({ _id: req.user._id });

  console.log(user.status);
  if (user && user.status === "verified") {
    console.log(user.status);
    next();
  } else {
    return next(CustomErrorHandler.unVerified());
  }
  // console.log("is admin mmem");
  // next();
});

export default isVerified;
