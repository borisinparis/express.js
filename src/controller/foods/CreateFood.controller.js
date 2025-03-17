import { Food } from "../../models/food.model.js";

export const CreateFoodController = async (req, res) => {
  const { uploadImage, foodName, price, ingredients, category } = req.body;
  try {
    const food = await Food.create({
      foodName: foodName,
      price: price,
      ingredients: ingredients,
      category: category,
      image: uploadImage,
    });
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Internal Server Error food", error: "error" });
  }
};
