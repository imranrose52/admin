/** @format */

import express from "express";
import { catchAsyncErrors } from "../../middlewares";
import { auth } from "../../middlewares";
import {
  loaderController,
  materialController,
  vehicleTypeController,
  loadsController,
  dashboardController,
  loginController,
  refreshController,
  registerController,
  userController,
  vehicleCotroller,
  TransporterController,
  TestController,
  quoteController,
  confirmController,
  driverController,
  tripsController,
} from "../../controllers";

const adminRouter = express.Router();

// // auth unprotected routes ------------------------------------------------------------------------
// adminRouter.post(
//   "/register/new",
//   catchAsyncErrors(registerController.register)
// );
// adminRouter.post("/login", catchAsyncErrors(loginController.login));
// adminRouter.post("/refresh", catchAsyncErrors(refreshController.refresh));

// auth protected routes ------------------------------------------------------------------------
// adminRouter.post("/user-self", auth, catchAsyncErrors(userController.self));
// adminRouter.post("/logout", auth, catchAsyncErrors(loginController.logout));

// loaders ----------------------------------------------------------------------------

adminRouter.get("/loaders", auth, catchAsyncErrors(loaderController.get));
adminRouter.post("/loaders", auth, catchAsyncErrors(loaderController.create));

adminRouter.delete(
  "/loaders/:id",
  auth,
  catchAsyncErrors(loaderController.delete)
);

adminRouter.put(
  "/loaders/:loader_id",
  auth,
  catchAsyncErrors(loaderController.update)
);

// materials ----------------------------------------------------------------------

adminRouter.get("/material", auth, catchAsyncErrors(materialController.get));
adminRouter.post(
  "/material",
  auth,
  catchAsyncErrors(materialController.create)
);

adminRouter.delete(
  "/material/:id",
  auth,
  catchAsyncErrors(materialController.delete)
);

adminRouter.put(
  "/material/:id",
  auth,
  catchAsyncErrors(materialController.update)
);

// vehicles-types ----------------------------------------------------------------------

adminRouter.get(
  "/vehicle-type",
  auth,
  catchAsyncErrors(vehicleTypeController.get)
);
adminRouter.post(
  "/vehicle-type",
  auth,
  catchAsyncErrors(vehicleTypeController.create)
);

adminRouter.delete(
  "/vehicle-type/:id",
  auth,
  catchAsyncErrors(vehicleTypeController.delete)
);

adminRouter.put(
  "/vehicle-type/:id",
  auth,
  catchAsyncErrors(vehicleTypeController.update)
);

// loads ----------------------------------------------------------------------

adminRouter.get("/loads", auth, catchAsyncErrors(loadsController.get));
adminRouter.post("/loads", auth, catchAsyncErrors(loadsController.create));

adminRouter.delete(
  "/loads/:id",
  auth,
  catchAsyncErrors(loadsController.delete)
);

adminRouter.put("/loads/:id", auth, catchAsyncErrors(loadsController.update));

// dashboad get count --------------------------------------------------------------
adminRouter.get(
  "/load-count",
  auth,
  catchAsyncErrors(dashboardController.getLoadCount)
);
adminRouter.get(
  "/loader-count",
  auth,
  catchAsyncErrors(dashboardController.getLoaderCount)
);

adminRouter.get(
  "/online-users",
  auth,
  catchAsyncErrors(dashboardController.getOnlineUser)
);

//----driver-------------
adminRouter.get(
  "/driver-count",
  auth,
  catchAsyncErrors(dashboardController.getDriverCount)
);

// transporter count-------
adminRouter.get(
  "/transporter-count",
  auth,
  catchAsyncErrors(dashboardController.getTransporterCount)
);

// vehicle count--------
adminRouter.get(
  "/vehicle-count",
  auth,
  catchAsyncErrors(dashboardController.getVehicleCount)
);

// close trips count--------------------
adminRouter.get("/close-trip-count", dashboardController.getCloseTripCount);




// vehicle details----------------------
adminRouter.get("/vehicles", auth, catchAsyncErrors(vehicleCotroller.get));
adminRouter.post("/vehicles", auth, catchAsyncErrors(vehicleCotroller.create));

adminRouter.delete(
  "/vehicles/:id",
  auth,
  catchAsyncErrors(vehicleCotroller.delete)
);

adminRouter.put(
  "/vehicles/:id",
  auth,
  catchAsyncErrors(vehicleCotroller.update)
);

//---------------------------- Transporter admin---------------------------
adminRouter.get(
  "/transporters",
  auth,
  catchAsyncErrors(TransporterController.get)
);

adminRouter.post(
  "/transporters",
  auth,
  catchAsyncErrors(TransporterController.create)
);

adminRouter.delete(
  "/transporters/:id",
  auth,
  catchAsyncErrors(TransporterController.delete)
);

adminRouter.put(
  "/transporters/:id",
  auth,
  catchAsyncErrors(TransporterController.update)
);

//----------------test---------------
// adminRouter.get("/test1", auth, catchAsyncErrors(testTransporterSchema.get));
adminRouter.get("/test1", catchAsyncErrors(TestController.get));
adminRouter.post("/test1", catchAsyncErrors(TestController.create));

//---------booking quotes route------------------
adminRouter.get("/quotes", catchAsyncErrors(quoteController.get));
adminRouter.post("/quotes", catchAsyncErrors(quoteController.create));
adminRouter.delete(
  "/quotes/:id",
  auth,
  catchAsyncErrors(quoteController.delete)
);

adminRouter.put("/quotes/:id", auth, catchAsyncErrors(quoteController.update));

// --------------------booking confirm-------------------

adminRouter.get("/confirm", catchAsyncErrors(confirmController.get));
adminRouter.post("/confirm", catchAsyncErrors(confirmController.create));
adminRouter.delete(
  "/confirm/:id",
  auth,
  catchAsyncErrors(confirmController.delete)
);

adminRouter.put(
  "/confirm/:id",
  auth,
  catchAsyncErrors(confirmController.update)
);

// driver route---------------------------

adminRouter.get("/drivers", catchAsyncErrors(driverController.get));
adminRouter.post("/drivers", catchAsyncErrors(driverController.create));
adminRouter.delete(
  "/drivers/:id",
  auth,
  catchAsyncErrors(driverController.delete)
);

adminRouter.put(
  "/drivers/:id",
  auth,
  catchAsyncErrors(driverController.update)
);

// trips route---------------------
adminRouter.get("/trips", auth, catchAsyncErrors(tripsController.get));
adminRouter.post("/trips", auth, catchAsyncErrors(tripsController.create));
adminRouter.put("/trips/:id", auth, catchAsyncErrors(tripsController.update));
adminRouter.delete(
  "/trips/:id",
  auth,
  catchAsyncErrors(tripsController.delete)
);

export default adminRouter;
