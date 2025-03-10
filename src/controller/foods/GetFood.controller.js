import { Food } from "../../models/food.model.js";
export const GetFoodController = async (req, res) => {
  res.send(Food).status(200);
};
