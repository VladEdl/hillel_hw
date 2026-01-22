let contacts = [];


export const getContacts = () => {
    return structuredClone(contacts);
}


export const addContact = (data) => {
    const newContact = { ...data, id: Date.now() };
    contacts.push(newContact);
}

export const removeContact = (id) => {
    contacts = contacts.filter(c => c.id !== id);
}