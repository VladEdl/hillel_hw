export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.form.addEventListener('submit', (e) => this.handleAddNote(e));
        this.view.clearBtn.addEventListener('click', () => this.handleClearAll());

        this.view.list.addEventListener('click', (e) => this.handleListClick(e));

        this.view.render(this.model.readAll());
    }

    handleAddNote(e) {
        e.preventDefault();
        const title = this.view.input.value.trim();
        const category = this.view.category.value;

        if (title.length < 3) {
            this.view.showError('Title must be at least 3 characters');
            return;
        }

        this.model.create(title, category);
        this.view.clearInput();
        this.view.render(this.model.readAll());
    }

    handleListClick(e) {
        const id = Number(e.target.closest('.card')?.dataset.id);
        if (!id) return;

        if (e.target.classList.contains('delete-btn')) {
            this.model.delete(id);
        } else if (e.target.classList.contains('toggle-btn')) {
            this.model.toggleImportant(id);
        }

        this.view.render(this.model.readAll());
    }

    handleClearAll() {
        if (confirm('Delete all notes?')) {
            this.model.clearAll();
            this.view.render(this.model.readAll());
        }
    }
}