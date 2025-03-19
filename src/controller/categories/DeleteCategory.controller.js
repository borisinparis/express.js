import { Categories } from "../../models/categories.model.js";

export const DeleteCategoryController = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const deleteCategory = await Categories.deleteOne({
      categoryName: categoryName,
    });

    if (deleteCategory.deletedCount === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    console.error("Error deleting category:", err);
    res
      .status(500)
      .json({ message: "Failed to delete category", error: err.message });
  }
};
