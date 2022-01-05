const { NotFound } = require("http-errors");
const { removeContact } = require("../../model");

const removeById = async (req, res) => {
  const { id } = req.params;
  const contacts = await removeContact(id);

  if (!contacts) {
    throw new NotFound(`Contacts with id=${id} not found`);
  }
  res.json({
    status: "Success",
    code: 200,
    message: `Contact with ${id} deleted successfully!`,
  });
};

module.exports = removeById;
