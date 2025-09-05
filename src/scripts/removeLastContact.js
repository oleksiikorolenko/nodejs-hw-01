import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contacts = await readContacts();
    const numberOfContacts = contacts.length;
    console.log(contacts);
    if (numberOfContacts > 0) {
        contacts.pop();
        await writeContacts(contacts);
        console.log("The last contact deleted");
    } else {
    console.log("No contacts to delete");
  }
};

removeLastContact();
