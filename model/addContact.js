const listContacts = require("./listContacts");
const updateContact = require("./updateContact");
const { v4 } = require("uuid");

const addContact = async (name, email, phone, error) => {
  const contacts = await listContacts();
  const newContact = {
    name: name,
    email: email,
    phone: phone,
    id: v4(),
  };
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};

module.exports = addContact;
