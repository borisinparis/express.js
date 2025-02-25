import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const FoodSchema = new mongoose.Schema({
  foodName: { type: String, require: true },
  price: { type: String, require: true },
  ingredients: { type: String, require: true },
  category: { type: mongoose.Types.ObjectId, ref: "categories" },
  image: { type: String, require: false },
});
export const Users = mongoose.model("foods", FoodSchema);
