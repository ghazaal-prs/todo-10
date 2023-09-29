import { contactsListDrawer, contactNameInput, phoneNumberInput, dviceStorageInput, concatsListElement, } from "./importer.js";
import { contactsList } from "./state.js";
export const showContactsDrawerHandler = () => {
    contactsListDrawer?.classList.remove("hidden");
};
export const closeContactsDrawerHandler = () => {
    contactsListDrawer?.classList.add("hidden");
};
export const handleCreateContact = () => {
    const newContact = {
        id: crypto.randomUUID(),
        contactName: contactNameInput?.value ?? "",
        phoneNumber: phoneNumberInput?.value ?? "",
        storage: dviceStorageInput?.checked ? "Device" : "SIM"
    };
    contactsList.push(newContact);
    const listItem = document.createElement("li");
    listItem.className = "py-4 px-2 bg-slate-100 rounded-lg";
    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-700";
    contactNameElement.innerText = newContact.contactName;
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className = "text-slate-500";
    contactPhoneNumberElement.innerText = newContact.phoneNumber.toString();
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneNumberElement);
    concatsListElement?.appendChild(listItem);
};
//# sourceMappingURL=events.js.map