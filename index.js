import servises from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await servises.listContacts();
      return console.log(allContacts);

    //   break;

    case "get":
      const contactById = await servises.getContactById(id);
      return console.log(contactById);

    // break;

    case "add":
      const newContact = await servises.addContact(name, email, phone);
      return console.log(newContact);

    // break;

    case "remove":
      const removeContact = await servises.removeContact(id);
      return console.log(removeContact);

    // break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
// invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW"})
// invokeAction({
//   action: "add",
//   name: "Helen",
//   email: "qwerty",
//   phone: "123",
// });

// invokeAction(argv);
