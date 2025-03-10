export const UpdateFoodController = async (req, res) => {
  const updateObject = req.body;
  let id = req.params.id;
  db.users.update({ _id: ObjectId(id) }, { $set: updateObject });
};
