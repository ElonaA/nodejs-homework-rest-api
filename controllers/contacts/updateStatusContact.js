const { NotFound } = require("http-errors");
const { Contact } = require("../../model");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;

  if (!favorite) {
    res.status(400).json({
      status: "error",
      code: 400,
      message: "missing field favorite",
      data: "Not found",
    });
  }

  const contacts = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );

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

module.exports = updateStatusContact;
