import servises from "./contacts.js";
import { program } from "commander";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await servises.listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await servises.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await servises.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const removeContact = await servises.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
