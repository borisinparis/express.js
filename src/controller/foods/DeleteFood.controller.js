import { Food } from "../../models/food.model.js";

export const DeleteFoodController = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const deleteFood = await Food.findByIdAndDelete(id);

    console.log(deleteFood);
    res
      .status(200)
      .json({
        success: true,
        food: deleteFood,
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
