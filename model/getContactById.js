const listContacts = require("./listContacts");

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.filter((contact) => contact.id === parseInt(id));
  return result;
};

module.exports = getContactById;
