import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  _id: { type: mongoose.Types.ObjectId, ref: "categories" },
  createdAt: { type: Date, require: true },
  updatedAt: { type: Date, require: true },
});

export const Categories = mongoose.model("category", categoriesSchema);
