import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, require: true, ref: "users" },
  totalPrice: { type: Number, require: true },
  image: { type: String, require: true },
  foodOrderItems: [{ type: mongoose.Types.ObjectId, ref: "foodOrderItem" }],
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    require: true,
  },
  category: { type: mongoose.Types.ObjectId, ref: "category" },
});
export const FoodOrder = mongoose.model("foodOrder", foodOrderSchema);
