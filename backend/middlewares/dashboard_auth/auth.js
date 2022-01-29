import { CustomErrorHandler, JwtService } from "../../services";
import catchAsyncErrors from "../error_handler/catchAsyncErrors";

const auth = catchAsyncErrors(async (req, res, next) => {
  // let authHeader = req.headers.authorization;
  // console.log(authHeader);

  // let authHeader = req.cookies;

  const { access_token } = req.cookies;
  // console.log(access_token);

  if (!access_token) {
    return next(CustomErrorHandler.unAuthorize());
  }

  // const token = authHeader.split(" ")[1];

  // console.log(access_token);

  const { _id, role } = await JwtService.verify(access_token);
  if (!_id && role) {
    return next(CustomErrorHandler.unAuthorize());
  }
  // console.log(_id, role);

  const user = { _id, role };
  req.user = user;
  next();
});

export default auth;
