const { Contact } = require("../../model");

const getAll = async (req, res) => {
  const contacts = await Contact.find({});
  res.json({
    status: "Success",
    code: 200,
    data: {
      contacts,
    },
  });
};

module.exports = getAll;
