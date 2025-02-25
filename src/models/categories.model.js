import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
});
export const Users = mongoose.model("users", usersSchema);
