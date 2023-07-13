import servises from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const allContacts = await servises.listContacts();
          return console.log(allContacts);

    //   break;

      case 'get':
          const contactById = await servises.getContactById(id);
          return console.log(contactById);
      // ... id
      // break;

      case 'add':
          const newContact = await servises.addContact(name, email, phone);
          return console.log(newContact);
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
// invokeAction({ action: "add", name: "mango", email: "qwerty", phone: "1233"})

// invokeAction(argv);