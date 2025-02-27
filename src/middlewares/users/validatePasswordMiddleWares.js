export const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  if (password && password.length >= 8) {
    next();
  } else {
    res
      .status(400)
      .json({
        success: false,
        message: "Password must be 8 or more characters",
      })
      .send();
  }
};
