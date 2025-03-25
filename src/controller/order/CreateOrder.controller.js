import { FoodOrder } from "../../models/foodOrder.model.js";

export const OrderController = async (req, res) => {
  const { totalPrice, foodOrderItems, status, user } = req.body;
  try {
    const foodOrder = new FoodOrder({
      totalPrice,
      foodOrderItems,
      status,
      user,
    });
    await foodOrder.save();
    res.status(201).json({
      message: "Food order created successfully",
      foodOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create food order",
      error: error.message,
    });
  }
};
