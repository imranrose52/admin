import { CustomErrorHandler, JwtService } from "../../services";
import catchAsyncErrors from "../error_handler/catchAsyncErrors";

const auth = catchAsyncErrors(async (req, res, next) => {
  /* *******************************************************************

   pass access token from device async storage in request

 ******************************************************************* */
  // get tiken using cokkie
  // const { access_token } = req.cookies;
  // console.log(access_token);

  let authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader) {
    return next(CustomErrorHandler.unAuthorize());
  }

  const access_token = authHeader.split(" ")[1];

  // console.log(access_token);

  const { _id } = await JwtService.verify(access_token);
  if (!_id) {
    return next(CustomErrorHandler.unAuthorize());
  }
  // console.log(_id);

  const user = { _id };
  req.user = user;
  next();
});

export default auth;
