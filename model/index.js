const { Contact, joiContactSchema, joiStatusSchema } = require("./contacts");
const { User, joiUserSchema, joiResendMailSchema } = require("./user");

module.exports = {
  Contact,
  joiContactSchema,
  joiStatusSchema,
  User,
  joiUserSchema,
  joiResendMailSchema,
};
