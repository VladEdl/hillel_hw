'use strict';

const profileModel = {};

let _data = {
    firstName: "",
    lastName: "",
    email: ""
};

Object.defineProperties(profileModel, {
    firstName: {
        get() { return _data.firstName; },
        set(val) {
            if (val.length < 2) throw new Error("First Name too short");
            _data.firstName = val;
        },
        enumerable: true
    },
    lastName: {
        get() { return _data.lastName; },
        set(val) {
            if (val.length < 2) throw new Error("Last Name too short");
            _data.lastName = val;
        },
        enumerable: true
    },
    email: {
        get() { return _data.email; },
        set(val) {
            if (!val.includes("@") || !val.includes(".")) throw new Error("Invalid Email");
            _data.email = val;
        },
        enumerable: true
    },
    fullName: {
        get() { return `${_data.firstName} ${_data.lastName}`.trim() || "Not set"; },
        configurable: false
    }
});

const inputs = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email')
};
const errorBox = document.getElementById('errorBox');
const saveBtn = document.getElementById('saveBtn');
const freezeBtn = document.getElementById('freezeBtn');

function updateCard() {
    document.getElementById('viewFullName').textContent = profileModel.fullName;
    document.getElementById('viewEmail').textContent = profileModel.email;
    document.getElementById('lastUpdated').textContent = new Date().toLocaleTimeString();
}

saveBtn.addEventListener('click', () => {
    errorBox.textContent = "";

    if (Object.isFrozen(profileModel)) {
        errorBox.textContent = "Model is frozen! Changes cannot be applied.";
        return;
    }

    try {
        profileModel.firstName = inputs.firstName.value;
        profileModel.lastName = inputs.lastName.value;
        profileModel.email = inputs.email.value;

        Object.values(inputs).forEach(input => input.classList.remove('invalid'));
        updateCard();

    } catch (e) {
        errorBox.textContent = e.message;
        highlightErrors(e.message);
    }
});

function highlightErrors(msg) {
    if (msg.includes("First Name")) inputs.firstName.classList.add('invalid');
    if (msg.includes("Last Name")) inputs.lastName.classList.add('invalid');
    if (msg.includes("Email")) inputs.email.classList.add('invalid');
}

freezeBtn.addEventListener('click', () => {
    Object.freeze(profileModel);
    freezeBtn.textContent = "Frozen";
    freezeBtn.disabled = true;
});

Object.values(inputs).forEach(input => {
    input.addEventListener('input', () => input.classList.remove('invalid'));
});