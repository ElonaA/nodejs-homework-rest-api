const { Conflict } = require("http-errors");
const { User } = require("../../model");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const newUser = new User({ email });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "Created",
    code: 201,
    message: "User successfully created",
    data: {
      user: {
        email,
        subscription: "starter",
      },
    },
  });
};

module.exports = register;
