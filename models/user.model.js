import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is Required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email Required."],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password Required"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);

export default user;
