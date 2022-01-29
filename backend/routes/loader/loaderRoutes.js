import express from "express";
import { appAuth, catchAsyncErrors, isVerified } from "../../middlewares";
import {
  loaderLoginController,
  loaderUserController,
  loaderKycUpdate,
  loaderDocmumentUploader,
  loads,
  masterDb,
  deviceInfoController,
} from "../../controllers";

const router = express.Router();

/* 

#appAuth middleware verify access token and bind user id on req object.

#isVerified middleware cheack user os verified or not.

*/

router.get("/test", catchAsyncErrors(loaderLoginController.test));
// store device related info ----------------------------------------------------------------
router.post(
  "/device-fnc",
  appAuth,
  catchAsyncErrors(deviceInfoController.setFCM)
);
router.get(
  "/device-fnc",
  appAuth,
  catchAsyncErrors(deviceInfoController.getFCM)
);

// auth -----------------------------------------------------------------------------------------------
router.post("/login", catchAsyncErrors(loaderLoginController.login));

router.post("/user-self", appAuth, catchAsyncErrors(loaderUserController.self));

// router.post("/refresh", catchAsyncErrors(refreshController.refresh));

router.post("/logout", catchAsyncErrors(loaderLoginController.logout));

// kyc -----------------------------------------------------------------------------------------------------

router.post("/kyc-update", appAuth, catchAsyncErrors(loaderKycUpdate.update));

router.post(
  "/profile-uploader",
  appAuth,
  catchAsyncErrors(loaderDocmumentUploader.profile)
);

router.post(
  "/id-proof-uploader",
  appAuth,
  catchAsyncErrors(loaderDocmumentUploader.idProof)
);
router.post(
  "/adress-proof-uploader",
  appAuth,
  catchAsyncErrors(loaderDocmumentUploader.adressProof)
);

router.get("/my-loads", appAuth, catchAsyncErrors(loads.get));
// create loads ------------------------------------------------------------------------------------------
router.post("/create-load", appAuth, catchAsyncErrors(loads.create));
router.delete("/delete-load/:load_id", appAuth, catchAsyncErrors(loads.delete));

// master db ------------------------------------------------------
router.get("/material", appAuth, catchAsyncErrors(masterDb.getMeterial));
router.get(
  "/vehicle-types",
  appAuth,
  catchAsyncErrors(masterDb.getVihicleType)
);

export default router;
