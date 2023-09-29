export type contactProps = {
    id : string;
    contactName : string;
    phoneNumber : string | number;
    storage : "SIM" | "Device"
};
export type contactsListType = contactProps[];