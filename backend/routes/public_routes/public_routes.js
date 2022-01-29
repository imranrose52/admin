import express from "express";
import { auth, catchAsyncErrors } from "../../middlewares";
import {
  registerController,
  loginController,
  refreshController,
  userController,
} from "../../controllers";

const router = express.Router();

router.get("/", function (req, res) {
  res.send("hello world");
});
// public routes--------------------------------------------
router.post("/register/new", catchAsyncErrors(registerController.register));

router.post("/login", catchAsyncErrors(loginController.login));

router.post("/refresh", catchAsyncErrors(refreshController.refresh));

// auth protected routes ------------------------------------------------------------------------

router.post("/user-self", auth, catchAsyncErrors(userController.self));

router.post("/logout", auth, catchAsyncErrors(loginController.logout));

export default router;
