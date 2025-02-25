import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber: { type: String, require: false },
  phoneNumber: {
    type: String,
    require: true,
    enum: ["User", "Admin"],
    default: "User",
  },
  address: { type: String, require: false },
  orderFoods: [
    {
      name: String,
      type: {
        type: { type: String },
      },
    },
  ],
  isVerified: { type: Boolean, require: false, default: false },
  createAt: { type: Date, require: Date.now },
});
export const Users = mongoose.model("users", usersSchema);
