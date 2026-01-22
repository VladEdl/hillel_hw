'use strict';

import { validationRegExps, errorMessages } from './constants.js';
import { addElement, removeElement } from './UI.js';
import { getContacts, addContact, removeContact } from "./storage.js";

const toastAdded = new bootstrap.Toast(document.querySelector('#contactAdded'));
const addContactModalSelector = '#addContactModal';
const addContactModal = new bootstrap.Modal(addContactModalSelector, {
    keyboard: false,
    backdrop: 'static'
});
const modalTrigger = document.querySelector('[data-add-contact-modal-btn]');
const deleteContactModal = new bootstrap.Modal('#deleteContactModal', { keyboard: false });
const confirmDeleteBtn = document.querySelector('#confirmDeleteBtn');
let contactIdToDelete = null;


modalTrigger.addEventListener('click', () => {
    addContactModal.show();
});

addContactModal._element.querySelector(`form#add-contact-form`)
    .addEventListener('submit', evt => {
        evt.preventDefault();

        document.querySelectorAll('.error-validation').forEach(item => item.remove());

        let formValidated = true;
        const inputs = evt.target.querySelectorAll('input, textarea');

        const data = Array.from(inputs).reduce((acc, input) => {
            const { name, parentElement: wrapper } = input;
            const value = input.value.trim();

            if (validationRegExps[name]) {
                if (validationRegExps[name].test(value)) {
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
        }, {});

        if (!formValidated) return null;

        addContact(data);

        const allContacts = getContacts();
        const savedContact = allContacts[allContacts.length - 1];

        addElement(savedContact);

        addContactModal.hide();
        toastAdded.show();
        evt.target.reset();

        document.querySelectorAll('.error-validation').forEach(item => item.remove());
    });

document.querySelector('[data-contacts-list]').addEventListener('click', (evt) => {
    const btn = evt.target.closest('[data-delete-btn]');
    if (btn) {
        contactIdToDelete = Number(btn.dataset.id);
        deleteContactModal.show();
    }
});

confirmDeleteBtn.addEventListener('click', () => {
    if (contactIdToDelete) {
        removeContact(contactIdToDelete);
        removeElement(contactIdToDelete);

        deleteContactModal.hide();
        contactIdToDelete = null;
    }
});