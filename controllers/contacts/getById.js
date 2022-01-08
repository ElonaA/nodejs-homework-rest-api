const { NotFound } = require("http-errors");
const { Contact } = require("../../model");

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id, "_id name email phone favorite");

  if (!contact) {
    throw new NotFound(`Contacts with id=${id} not found`);
  }
  res.json({
    status: "Success",
    code: 200,
    data: {
      contact,
    },
  });
};

module.exports = getById;
