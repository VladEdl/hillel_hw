'use strict';

const user = {
    name: 'Vova',
    age: 20,
}

let {name} = user; // Vova
let {age: year} = user; // 20


// IFFE
// Global Scope
(function(){
    // Just for example
    const validationRegExps = {
        'fullName': /^(?=.{2,80}$)[\p{L}]+(?:[ '\-][\p{L}]+){0,3}$/u,
        'phone': /^\+[1-9]\d{7,14}$/,
        'address': /^(?=.{5,120}$)[\p{L}\d][\p{L}\d\s.,'’\-\/#]+$/u
    }

    const errorMessages = {
        'fullName': 'Full Name Required',
        'phone': 'Phone Number Required',
        'address': 'Address Required',
    }

    // UI Handling

    const uiContactsListHandler = () => {
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

        const addElement = (data) => {
            const element = createItemTemplate(data)
            contactsList.prepend(element)
            contactsList.classList.remove('d-none');
            contactsAlert.classList.add('d-none');
        }

        const removeElement = (id) => {
            const el = contactsList.querySelector(`[data-contact-id="${id}"]`);
            if (el) el.remove();
            if (contactsList.children.length === 0) {
                contactsList.classList.add('d-none');
                contactsAlert.classList.remove('d-none');
            }
        }

        return {
            addElement,
            removeElement,
        }

    }
    const listHandler = uiContactsListHandler()


    // General Variables
    const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'))
    const addContactModalSelector = '#addContactModal';
    const addContactModal = new bootstrap.Modal(addContactModalSelector, {
        keyboard: false,
        backdrop: 'static'
    });
    const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');
    const deleteContactModal = new bootstrap.Modal('#deleteContactModal', {keyboard: false});
    const confirmDeleteBtn = document.querySelector('#confirmDeleteBtn');
    let contactIdToDelete = null;



    // State management
    const contactsManagement = () => {
        let contacts = [];

        const getContacts = () => {
            return structuredClone(contacts);
        }

        const addContact = (data) => {
            const newContact = { ...data, id: Date.now() };
            contacts.push(newContact);
        }

        const removeContact = (id) => {
            contacts = contacts.filter(c => c.id !== id);
        }


        return {
            getContacts,
            addContact,
            removeContact
        }
    }
    const contactService = contactsManagement();



    // Events
    modalTrigger.addEventListener('click', () => {
        addContactModal.show()
    })

    addContactModal._element.querySelector(`form#add-contact-form`)
        .addEventListener('submit', evt => {
            evt.preventDefault();

            document.querySelectorAll('.error-validation').forEach(item => item.remove());

            let formValidated = true;
            const inputs = evt.target.querySelectorAll('input, textarea');

            const data = Array.from(inputs).reduce((acc, input) => {
                const {name, parentElement: wrapper} = input;

                const value = input.value.trim();

                if (validationRegExps[name]) {
                    if(validationRegExps[name].test(value)) {
                        acc[name] = value;
                    } else {
                        const errBlock = document.createElement('div');
                        errBlock.innerHTML = errorMessages[name];
                        errBlock.classList.add('text-danger', 'error-validation');
                        wrapper.append(errBlock);
                        formValidated = false;
                    }
                }
                return acc;
            }, {})

            if(!formValidated) return null;

            contactService.addContact(data);
            const allContacts = contactService.getContacts();
            const savedContact = allContacts[allContacts.length - 1];

            listHandler.addElement(savedContact);

            addContactModal.hide();
            toastAdded.show();
            evt.target.reset();

            document.querySelectorAll('.error-validation').forEach(item => item.remove());
        })
    document.querySelector('[data-contacts-list]').addEventListener('click', (evt) => {
        const btn = evt.target.closest('[data-delete-btn]');
        if (btn) {
            contactIdToDelete = Number(btn.dataset.id);
            deleteContactModal.show();
        }
    });

    confirmDeleteBtn.addEventListener('click', () => {
        if (contactIdToDelete) {
            contactService.removeContact(contactIdToDelete);
            listHandler.removeElement(contactIdToDelete);
            deleteContactModal.hide();
            contactIdToDelete = null;
        }
    });


})()
// Global Scope