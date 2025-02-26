import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const foodOrderItemSchema = new mongoose.Schema({
  food: { type: mongoose.Types.ObjectId, ref: "foods" },
  quantity: { type: Number, require: true },
});
export const Users = mongoose.model("foodOrderItem", foodOrderItemSchema);
