/** @format */

import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema(
  {
    trip_no: {
      type: String,
      required: true,
    },
    transporter: {
      type: String,
      required: true,
    },
    loader: {
      type: String,
      required: true,
    },
    driver: {
      type: String,
      required: true,
    },
    pickup: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      default: 0,
    },

    startedAt: {
      type: String,
      // required: true,
    },
    endedAt: {
      type: String,
      // required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
    distanceFrom: {
      type: Number,
    },

    distanceTo: {
      type: Number,
    },

    startingLat: {
      type: Number,
    },

    startingLong: {
      type: Number,
    },

    currentLat: {
      type: Number,
    },

    currentLong: {
      type: Number,
    },

    date: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
  },

  { timestamps: true }
);

export default mongoose.model("Trips_model", tripsSchema, "trips");
