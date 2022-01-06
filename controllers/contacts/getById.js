const { NotFound } = require("http-errors");
const { getContactById } = require("../../model");

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await getContactById(id);
  console.log(`contact`, contact);

  if (!contact.length) {
    throw new NotFound(`Contacts with id=${id} not found`);
  }
  res.json({
    status: "Success",
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = getById;
