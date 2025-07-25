import mongoose from "mongoose";

const { Schema, Model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin", "vendor", "deliveryBoy "],
    default: "user",
  },
});
export const UserModels =
  mongoose.models.User || mongoose.model("User", userSchema);
