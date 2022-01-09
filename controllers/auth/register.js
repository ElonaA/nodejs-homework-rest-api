const { Conflict } = require("http-errors");
const { User } = require("../../model");
const { sendEmail } = require("../../helpers/sendEmail");
const gravatar = require("gravatar");
const nanoid = require("nanoid");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const avatarUrl = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = new User({ email, avatarUrl, verificationToken });

  newUser.setPassword(password);

  newUser.save();

  const mail = {
    to: email,
    subject: "Verificated your email address",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Verification token</a>`,
  };

  await sendEmail(mail);

  res.status(201).json({
    status: "Created",
    code: 201,
    message: "User successfully created",
    data: {
      user: {
        email,
        avatarUrl,
        subscription: "starter",
        verificationToken,
      },
    },
  });
};

module.exports = register;
