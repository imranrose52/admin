import express from "express";

const app = express();

import path from "path";

import { errorHandler } from "./middlewares";

import { publicRouter, loaderRouter } from "./routes";
import cookieParser from "cookie-parser";
import NotificationService from "./services/NotificationService";
import adminRouter from "./routes/admin_routes/admin_routes";

app.use(express.urlencoded({ extended: false })); //for multipart data
app.use(express.json());
app.use(cookieParser());

global.appRoot = path.resolve(__dirname); // set global variable appRoot holding root directory

app.use(express.static("./public")); // make public folder publicly available

// app.use(publicRouter);   // init public route for login and other pages

app.use("/api/v1", publicRouter); // init public route for login and other pages

app.use("/api/v1/admin/", adminRouter); // admin dashboard routes

app.use("/api/v1/loader/", loaderRouter); // loader app routes

// middleware error---------------------------

app.use(errorHandler); // error handler for handle all error

export default app;
