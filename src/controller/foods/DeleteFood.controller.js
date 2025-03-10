import { Food } from "../../models/food.model.js";

export const DeleteFoodController = async (req, res) => {
  const { _id } = req.body;
  try {
    const DeleteFood = await Food.deleteOne(_id);
    res
      .status(200)
      .json({
        success: true,
        Food: DeleteFood,
      })
      .send();
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "food server errors",
      })
      .send();
  }
};
