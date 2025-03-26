import { FoodOrder } from "../../models/foodOrder.model.js";

export const GetUserController = async (req, res) => {
  try {
    const orderFood = await FoodOrder.find({});
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
};
