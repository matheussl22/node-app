const { User } = require("../models/user");
const queue = require("../queue");
const os = require("os");

const createUser = async (req, res, next) => {
  const os = require("os");
  const user = await User.create({
    ...req.body,
  });
  const userDTO = {
	id: parseInt(user.id),
	name: user.name,
	initialBalance: user.initialBalance
  }
  queue.sendToQueue("add-user", userDTO);
  userDTO.hostName = os.hostname();
  res.json(userDTO);
};

const getUser = async (req, res, next) => {
  const os = require("os");
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    user.hostName = os.hostname();
    return res.json(user);
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }
};

module.exports.createUser = createUser;
module.exports.getUser = getUser;
