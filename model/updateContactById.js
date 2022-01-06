const listContacts = require("./listContacts");
const updateContact = require("./updateContact");

const updateContactById = async (id, name, email, phone, error) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { name: name, email: email, phone: phone };
  await updateContact(contacts);
  return contacts[idx];
};

module.exports = updateContactById;
