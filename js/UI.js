const contactsAlert = document.querySelector('[data-contacts-alert]');
const contactsList = document.querySelector('[data-contacts-list]');


const createItemTemplate = ({fullName, phone, address, id}) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    li.setAttribute('data-contact-id', id);

    li.innerHTML = `
        <span>${fullName} | ${phone} | ${address}</span>
        <button class="btn btn-danger btn-sm" data-delete-btn data-id="${id}">Delete</button>
    `;

    return li;
}


export const addElement = (data) => {
    const element = createItemTemplate(data);
    contactsList.prepend(element);
    contactsList.classList.remove('d-none');
    contactsAlert.classList.add('d-none');
}


export const removeElement = (id) => {
    const el = contactsList.querySelector(`[data-contact-id="${id}"]`);
    if (el) el.remove();
    if (contactsList.children.length === 0) {
        contactsList.classList.add('d-none');
        contactsAlert.classList.remove('d-none');
    }
}