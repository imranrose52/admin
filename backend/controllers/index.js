export { default as transporter } from "../controllers/transporter/transporter";
// dashboard
export { default as registerController } from "../controllers/dashboard/auth/registerController";
export { default as loginController } from "../controllers/dashboard/auth/loginController";
export { default as userController } from "../controllers/dashboard/auth/userController";
export { default as refreshController } from "../controllers/dashboard/auth/refreshController";
export { default as dashboardController } from "../controllers/dashboard/dashboard";




// dashboard loader ----------------------------------------------------------------
export { default as loaderController } from "../controllers/dashboard/loader";
export { default as materialController } from "../controllers/dashboard/materials";
export { default as vehicleTypeController } from "../controllers/dashboard/vehicle-type";
export { default as loadsController } from "../controllers/dashboard/loads";




// loader app --------------------------------------------------------------------------------------

export { default as loaderKycUpdate } from "../controllers/loader/kyc";
export { default as loaderLoginController } from "../controllers/loader/auth/loginController";
export { default as loaderUserController } from "../controllers/loader/auth/userController";
export { default as loaderDocmumentUploader } from "../controllers/loader/uploader";
export { default as deviceInfoController } from "../controllers/loader/device-info";

export { default as loads } from "./loader/loads";
export { default as masterDb } from "./loader/master-db";




// ------------vehicle ----------------------------------------------------------------
export { default as vehicleCotroller } from "../controllers/dashboard/vehicle_route";




//-------------admin Transporter----------------------------
export { default as TransporterController } from "../controllers/transporter/userTransporter";




// --------test transporter----------------------
export { default as TestController } from "../controllers/testTransporter/test-controller";




// ------------booking quote controller--------------

export { default as quoteController } from "../controllers/dashboard/booking/quoted";
export { default as confirmController } from "../controllers/dashboard/booking/confirm";
export {default as tripsController} from "../controllers/dashboard/booking/trips/trips"



//---------- driver cobtroller-----------------

export { default as driverController } from "../controllers/driver/driver-controller";
