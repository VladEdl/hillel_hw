'use strict';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirm = document.getElementById('confirmPassword');
const ageInput = document.getElementById('age');
const citySelect = document.getElementById('city');
const checkboxInput = document.getElementById('privacyPolicy');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const listForm = document.getElementById('finalForm');


const showError = (input, message) => {
    const parent = input.parentElement;
    const errorDiv = parent.querySelector('.error-message');

    parent.classList.add('error');
    if (errorDiv) {
        errorDiv.innerText = message;
    }
};

const showSuccess = (input) => {
    const parent = input.parentElement;
    const errorDiv = parent.querySelector('.error-message');

    parent.classList.remove('error');
    if (errorDiv) {
        errorDiv.innerText = '';
    }
};



const checkEmail = () => {
    const value = emailInput.value.trim();
    if (value === '') {
        showError(emailInput, 'Email cannot be empty');
        return false;
    } else if (!value.includes('@')) {
        showError(emailInput, 'Email must contain @');
        return false;
    } else {
        showSuccess(emailInput);
        return true;
    }
};

const checkPassword = () => {
    const value = passwordInput.value.trim();

    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    let checkNum = false;
    let checkLet = false;

    for (const sym of value) {
        if (numbers.includes(sym)) {
            checkNum = true;
        }
        if (letters.includes(sym.toLowerCase())) {
            checkLet = true;
        }
    }

    if (value === '') {
        showError(passwordInput, 'Password cannot be empty');
        return false;
    } else if (value.length < 8) {
        showError(passwordInput, 'Min 8 characters');
        return false;
    } else if (!checkNum) {
        showError(passwordInput, 'Must contain at least 1 number');
        return false;
    } else if (!checkLet) {
        showError(passwordInput, 'Must contain at least 1 letter');
        return false;
    } else {
        showSuccess(passwordInput);
        return true;
    }
};

const checkConfirmPassword = () => {
    const value = passwordConfirm.value.trim();
    if (value === '') {
        showError(passwordConfirm, 'Please confirm password');
        return false;
    } else if (value !== passwordInput.value) {
        showError(passwordConfirm, 'Passwords do not match');
        return false;
    } else {
        showSuccess(passwordConfirm);
        return true;
    }
};

const checkAge = () => {
    const value = ageInput.value.trim();
    if (value === '') {
        showError(ageInput, 'Enter your age');
        return false;
    } else if (value < 16 || value > 120) {
        showError(ageInput, 'Age must be 16-120');
        return false;
    } else {
        showSuccess(ageInput);
        return true;
    }
};

const checkCity = () => {
    if (citySelect.value === '') {
        showError(citySelect, 'Select a city');
        return false;
    } else {
        showSuccess(citySelect);
        return true;
    }
};

const checkCheckbox = () => {
    if (!checkboxInput.checked) {
        checkboxInput.parentElement.classList.add('errorCheckbox');
        return false;
    } else {
        checkboxInput.parentElement.classList.remove('errorCheckbox');
        return true;
    }
};



emailInput.addEventListener('input', () => {
    checkEmail();
    saveToLocalStorage();
});

passwordInput.addEventListener('input', () => {
    checkPassword();

    if (passwordConfirm.value !== '') checkConfirmPassword();
    saveToLocalStorage();
});

passwordConfirm.addEventListener('input', () => {
    checkConfirmPassword();
    saveToLocalStorage();
});

ageInput.addEventListener('input', () => {
    checkAge();
    saveToLocalStorage();
});

citySelect.addEventListener('change', () => {
    checkCity();
    saveToLocalStorage();
});

checkboxInput.addEventListener('change', () => {
    checkCheckbox();
    saveToLocalStorage();
});


function saveToLocalStorage() {
    const formData = {
        email: emailInput.value,
        password: passwordInput.value,
        confirm: passwordConfirm.value,
        age: ageInput.value,
        city: citySelect.value,
        agreed: checkboxInput.checked
    };
    localStorage.setItem('myForm', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedDraft = localStorage.getItem('myForm');
    if (savedDraft) {
        const data = JSON.parse(savedDraft);
        emailInput.value = data.email || '';
        passwordInput.value = data.password || '';
        passwordConfirm.value = data.confirm || '';
        ageInput.value = data.age || '';
        citySelect.value = data.city || '';
        checkboxInput.checked = data.agreed || false;
    }
});


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmValid = checkConfirmPassword();
    const isAgeValid = checkAge();
    const isCityValid = checkCity();
    const isCheckboxValid = checkCheckbox();

    const isFormValid = isEmailValid && isPasswordValid && isConfirmValid && isAgeValid && isCityValid && isCheckboxValid;

    if (isFormValid) {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
            age: ageInput.value,
            city: citySelect.value,
            agreed: checkboxInput.checked
        };

        localStorage.removeItem('myForm');

        listForm.classList.remove('hidden');
        listForm.innerHTML = `
            <h3>Дані користувача:</h3>
            <ul class="listForm">
                <li><b>Email:</b> ${formData.email}</li>
                <li><b>Age:</b> ${formData.age}</li>
                <li><b>City:</b> ${formData.city}</li>
            </ul>
        `;

        emailInput.value = '';
        passwordInput.value = '';
        passwordConfirm.value = '';
        ageInput.value = '';
        citySelect.value = '';
        checkboxInput.checked = false;

        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        alert('You have successfully registered!');
    }
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    emailInput.value = '';
    passwordInput.value = '';
    passwordConfirm.value = '';
    ageInput.value = '';
    citySelect.value = '';
    checkboxInput.checked = false;

    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.errorCheckbox').forEach(el => el.classList.remove('errorCheckbox'));

    document.querySelectorAll('.error-message').forEach(el => el.innerText = '');

    localStorage.removeItem('myForm');
    listForm.innerHTML = ``;
    listForm.classList.add('hidden');
});