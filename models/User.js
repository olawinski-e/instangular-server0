const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection & schema
let User = new Schema(
  {
    name: {
      type: String,
    },
    password: String,
    username: {
      type: String,
    },
    website: {
      type: String,
    },
    biography: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    gender: {
      type: String,
    },
  },
  {
    collection: "users",
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
