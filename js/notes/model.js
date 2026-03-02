export default class Model {
    constructor() {
        this.storageKey = 'mvc_notes';
        this.notes = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }

    _save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.notes));
    }

    create(title, category) {
        const newNote = {
            id: Date.now(),
            title,
            category,
            important: false,
            createdAt: new Date().toISOString()
        };
        this.notes.push(newNote);
        this._save();
        return newNote;
    }

    readAll() {
        return this.notes;
    }

    toggleImportant(id) {
        this.notes = this.notes.map(note =>
            note.id === id ? { ...note, important: !note.important } : note
        );
        this._save();
    }

    delete(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this._save();
    }

    clearAll() {
        this.notes = [];
        this._save();
    }
}