import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, require: true, ref: "users" },
  totalPrice: { type: Number, require: true },
  foodOrderItems: [
    {
      food: { type: mongoose.Types.ObjectId, ref: "food" },
      quatity: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    require: true,
  },
});
export const FoodOrder = mongoose.model("foodOrder", foodOrderSchema);
