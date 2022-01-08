const { BadRequest } = require("http-errors");
const { Contact } = require("../../model");

const add = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "Success",
    code: 201,
    message: "Contact successfully created",
    data: {
      result,
    },
  });
};

module.exports = add;
