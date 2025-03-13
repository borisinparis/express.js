import { Food } from "../../models/food.model.js";

export const GetFoodController = async (req, res) => {
  try {
    const foods = await Food.find({});

    if (foods.length === 0) {
      return res.status(404).json({ message: "No foods found" });
    }

    res.status(200).json(foods);
  } catch (err) {
    console.error("Error fetching foods:", err.message);
    res.status(500).json({
      message: "Internal Server Error while fetching foods",
      error: err.message || "Unknown error",
    });
  }
};
