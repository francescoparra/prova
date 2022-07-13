const { User } = require("../models");

const newUser = async (req, res) => {
  let { username, email, password } = req.body;
  try {
    const result = await User.create({username, email, password});
    res.send(result.toObject())
  } catch (error) {
    console.log(error);
    res.send("{'error':'error'}");
  }
};

module.exports = {
  newUser
};
