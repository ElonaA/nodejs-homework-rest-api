const { Conflict } = require("http-errors");
const { User } = require("../../model");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const avatarUrl = gravatar.url(email);
  const newUser = new User({ email, avatarUrl });
  newUser.setPassword(password);
  newUser.save();

  res.status(201).json({
    status: "Created",
    code: 201,
    message: "User successfully created",
    data: {
      user: {
        email,
        avatarUrl,
        subscription: "starter",
      },
    },
  });
};

module.exports = register;
