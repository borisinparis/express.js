import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const categoriesSchema = new mongoose.Schema({
  categoryName: { type: String, require: true },
});
export const Users = mongoose.model("categories", categoriesSchema);
