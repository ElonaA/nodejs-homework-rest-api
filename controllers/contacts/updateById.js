const { NotFound } = require("http-errors");
const { Contact } = require("../../model");

const updateById = async (req, res) => {
  const { id } = req.params;
  const contacts = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!contacts) {
    throw new NotFound(`Contacts with id=${id} not found`);
  }
  res.json({
    status: "Success",
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = updateById;
