const listContacts = require("./listContacts");
const updateContact = require("./updateContact");

const removeContact = async (id) => {
  const contactId = isNaN(id) ? id : Number(id);
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  contacts.splice(idx, 1);
  await updateContact(contacts);
  return true;
};

module.exports = removeContact;
