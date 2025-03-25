import { Categories } from "../../models/categories.model.js";

export const CreateCategoryController = async (req, res) => {
  const { categoryName } = req.body;

  if (!categoryName) {
    return res.status(400).json({ message: "Category name is required" });
  }

  console.log("Received category data:", req.body);

  try {
    const category = await Categories.create({
      categoryName: categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(201).json(category);
  } catch (err) {
    console.error("Error creating category:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
