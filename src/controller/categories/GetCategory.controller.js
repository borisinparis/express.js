import { Categories } from "../../models/categories.model.js";

export const GetCategoryController = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error Categories" });
  }
};
