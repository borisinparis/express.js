import { Users } from "../../models/comment.model";

export const validateId = async (req, res, next) => {
  const { id } = req.body;
  try {
    if (!id) {
      res.status(303).json({ success: false, message: "invalid input" });
    } else {
      const user = await Users.findbyId(new mongoose.Types.ObjectId(id));
      console.log(user);
      if (!user) {
        res.status(404).json({ success: false, message: "not found by id" });
      } else {
        next();
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, message: `not found by id ${err}` });
  }
};
