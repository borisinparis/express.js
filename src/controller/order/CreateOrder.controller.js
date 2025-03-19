import { FoodOrder } from "../../models/foodOrder.model.js";
export const OrderController = async (req, res) => {
  const {} = req.body;
  try {
    const foodOrder = await FoodOrder.patch();
  } catch (error) {}
};
