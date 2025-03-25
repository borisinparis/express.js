import mongoose from "mongoose";
//schema buyu model gej nerlej bna
//collection ==> table
// cluster dotor => database ternii dotor => collection
const foodSchema = new mongoose.Schema({
  foodName: { type: String, require: true },
  price: { type: String, require: true },
  ingredients: { type: String, require: true },
  category: { type: mongoose.Types.ObjectId, ref: "categories" },
  image: { type: String, require: true },
});
export const Food = mongoose.model("foods", foodSchema);
