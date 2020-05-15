const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection & schema
let userSchema = new Schema(
  {
    //username: { type: String, required: true },
    //fullName: { type: String },
    email: { type: String, required: true, unique: true },
    //encryptedPassword: { type: String, required: true },
    //biography: { type: String },
    //website: { type: String },
    //profilePic: {
    //  type: String,
    //  default:
    //    "https://scontent-frx5-1.cdninstagram.com/vp/973f5d72a5217d4b771ed4a941e6f138/5D0566F1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com",
    //},
    //phoneNumber: { type: Number, minlength: 10 },
    //gender: {
    //  type: String,
    //  enum: ["Male", "Female", "Undefined", "Prefer not to say"],
    //},
    // facebookAccount: { type: String },
    //following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    //followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    // taggedPics: [{ type: Schema.Types.ObjectId, ref: "Post" }]
  },
  {
    collection: "users",
  },
  {
    timestamps: true,
  },
  { typeKey: "$type" }
);

module.exports = mongoose.model("User", userSchema);
