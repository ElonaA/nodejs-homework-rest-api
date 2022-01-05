const { listContacts } = require("../../model");

const getAll = async (req, res) => {
  const contacts = await listContacts();
  res.json({
    status: "Success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
