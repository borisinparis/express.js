import { FoodOrder } from "../../models/foodOrder.model.js";

export const GetFoodOrderController = async (req, res) => {
  const { userId } = req.body;

  try {
    const orderFood = await FoodOrder.find({ user: userId })
      .populate("foodOrderItems")
      .execPopulate();

    if (!orderFood || orderFood.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res
      .status(200)
      .json({ message: "Orders fetched successfully", orders: orderFood });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
};
