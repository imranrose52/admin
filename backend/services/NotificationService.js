import admin from "firebase-admin";
var serviceAccount = require("../config/trolla-v1-firebase-adminsdk-oij4l-757522812d.json");

import { Loader_device_model } from "../models";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

class NotificationService {
  constructor() {}

  static async sendNotification(title, body, user) {
    const deviceDetails = await Loader_device_model.findOne({
      loader_id: user,
    }).select("-createdAt -updatedAt -__v");

    if (deviceDetails) {
      const message = {
        notification: {
          title,
          body,
        },
        token: deviceDetails.fcm,
      };

      admin
        .messaging()
        .send(message)
        .then((res) => {
          console.log("successs....");
        })
        .catch((err) => {
          console.log("errrooorrrr", err);
        });
    }
  }
}

// -----------notification ----------------------------------------------------------------

export default NotificationService;
