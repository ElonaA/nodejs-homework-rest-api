const { BadRequest } = require("http-errors");
const { addContact } = require("../../model");

const add = async (reg, res) => {
  const contacts = await addContact(reg.body);
  if (!contacts) {
    throw new BadRequest(`Missing required field`);
  }
  res.status(201).json({
    status: "Success",
    code: 201,
    message: "Contact successfully created",
    data: {
      contacts,
    },
  });
};

module.exports = add;
