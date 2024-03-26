const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FirstName: String,
    LastName: String,
    Mobile: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "LGBTQ"],
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
