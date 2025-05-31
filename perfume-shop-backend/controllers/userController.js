const User = require("../models/user");

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  res.json(user);
};
