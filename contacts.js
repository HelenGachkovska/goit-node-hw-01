import fs, { constants } from "fs/promises";
import path from "path";

const contactsPath = path.resolve("nd", "contacts.json");


// Повертає масив контактів.
async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

// Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    return result || null;

}

// Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
function removeContact(contactId) {
  
}

// Повертає об'єкт доданого контакту. 
function addContact(name, email, phone) {
  
}

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact
}