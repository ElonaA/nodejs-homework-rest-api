const { BadRequest, Unauthorized, Conflict } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../../model");

const { SECRET_KEY } = process.env;

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw new Unauthorized("Not authorized");
  }
  const { id } = jwt.verify(token, SECRET_KEY);
  const user = await User.findById(id);
  const currentSubscription = user.subscription;

  if (
    !(
      subscription === "starter" ||
      subscription === "pro" ||
      subscription === "business"
    )
  ) {
    throw new BadRequest("Subscription value must be: starter, pro, business");
  }

  if (subscription === currentSubscription) {
    throw new Conflict(`Subscription status is already *${subscription}*`);
  }

  const result = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateSubscription;
