const { BadRequest } = require("http-errors");
const { Contact } = require("../../model");

const add = async (req, res) => {
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
