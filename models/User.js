import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Please fill a valid email address",
    },
  },
  mobile: {
    type: String,
    required: true,
    match: [/^\d{10}$/, "Please fill a 10-digit valid mobile number"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters long"],
    maxlength: [15, "Password must not exceed 15 characters"],
    trim: true,
    validate: {
      validator: (value) => !value.toLowerCase().includes("password"),
      message: "Password cannot contain 'password'",
    },
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
 

const User = mongoose.model("User", userSchema);
export default User;
