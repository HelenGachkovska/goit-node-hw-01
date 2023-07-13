import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("nd", "contacts.json");

// Повертає масив контактів.
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

// Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
async function getContactById(id) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
}

// Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
function removeContact(contactId) {}

// Повертає об'єкт доданого контакту.
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    phone,
    email,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
