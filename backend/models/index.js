/** @format */

// user--------------------------------------------------------------------------------
export { default as Transporter_user_model } from "./users/transporter_user_schema";
export { default as Admin_user_model } from "./users/admin_user_schema";
export { default as Refresh_token_model } from "./users/refresh_token_schema";
export { default as Loader_user_model } from "./users/loader_user_schema";

//---------------------------------- loads-------------------------------------------------------------------------------

export { default as Loads_model } from "./loads/loadSchema";

//----------------------------- vehicle details-------------------------------------------------------------------------------

export { default as Vehicle_details_model } from "./vehicles/vehiclesSchema";
//----------------------------- device ------------------------------------------------------------------------------

export { default as Loader_device_model } from "./device/loader-device-info-schema";

//------------------------------ meta data-------------------------------------------------------------------

export { default as Counter_schema } from "./meta/counter";

//----------------------------- master db --------------------------------------------------------------------

export { default as Material_model } from "./masterDB/material_types_schema";
export { default as Vehicle_types_model } from "./masterDB/vehicle_types";

//----------------------------- test transporter--------------
export { default as test_transporter } from "./testTransporter/testTransporter-schema";

//---------------------------- Booking quoted admin------------------------------------------------------------------------------------

export { default as Quoted_model } from "./booking/quotes/quotesSchema";
export { default as Booking_Confirm_model } from "./booking/complete/confirmSchema";

// ---------------------driver schema---------------------
export { default as driver_model } from "./driver/driverSchema";


//---------------------- trips schema------------------------------------------------------

export { default as Trips_model } from "./booking/trips/tripsSchema";
