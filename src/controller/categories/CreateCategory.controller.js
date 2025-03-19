import { Categories } from "../../models/categories.model.js";

export const CreateCategoryController = async (req, res) => {
  const { categoryName } = req.body;

  // Check if categoryName is provided
  if (!categoryName) {
    return res.status(400).json({ message: "Category name is required" }); // Better error handling
  }

  // Log request body to ensure it's coming through correctly
  console.log("Received category data:", req.body); // Log to check what was sent

  try {
    // Create category
    const category = await Categories.create({
      categoryName: categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(201).json(category); // Return 201 (created) status
  } catch (err) {
    console.error("Error creating category:", err); // Log the error
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
