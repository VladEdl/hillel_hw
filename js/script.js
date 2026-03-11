const user = {
    _firstName: '',
    _lastName: '',
    createdAt: new Date().toLocaleDateString(),
};

Object.defineProperties(user, {
    '_firstName': { enumerable: false, writable: true, configurable: true },
    '_lastName': { enumerable: false, writable: true, configurable: true },
    'createdAt': { writable: false, configurable: false, enumerable: true },
    'fullName': {
        enumerable: true,
        configurable: false,
        get() {
            return `${this._firstName} ${this._lastName}`.trim() || "No Name";
        },
        set(value) {
            if (typeof value !== 'string') throw new Error("Invalid type");
            const parts = value.trim().split(' ');
            if (parts.length !== 2) throw new Error("Invalid format");
            const [first, last] = parts;
            if (first.length < 2 || last.length < 2) throw new Error("Too short");

            this._firstName = first;
            this._lastName = last;
        }
    }
});

user.lockProfile = function() {
    Object.seal(this);
};

console.log("Дескриптори всіх полів:");
console.log(Object.getOwnPropertyDescriptors(user));

user.fullName = "Taras Shevchenko";
console.log("Результат встановлення fullName:", user.fullName);

console.log("Поля в Object.keys:", Object.keys(user));

user.createdAt = "2000-01-01";
console.log("createdAt після спроби зміни:", user.createdAt);

user.lockProfile();
console.log("Чи заблоковано профіль (isSealed):", Object.isSealed(user));

user.age = 21;
console.log("Спроба додати поле age:", user.age);

delete user.fullName;
console.log("fullName після спроби видалення:", user.fullName);