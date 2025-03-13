import { Categories } from "../../models/categories.model.js";
export const CreateUserController = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await Categories.create(categoryName);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error", error: "error" });
  }
};
