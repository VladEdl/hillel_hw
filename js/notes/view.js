export default class View {
    constructor() {
        this.form = document.getElementById('noteForm');
        this.input = document.getElementById('noteTitle');
        this.category = document.getElementById('noteCategory');
        this.list = document.getElementById('notesList');
        this.emptyState = document.getElementById('emptyState');
        this.error = document.getElementById('error-message');
        this.clearBtn = document.getElementById('clearAll');
    }

    render(notes) {
        this.list.innerHTML = '';

        if (notes.length === 0) {
            this.emptyState.classList.remove('d-none');
            return;
        }

        this.emptyState.classList.add('d-none');
        notes.forEach(note => this.renderNote(note));
    }

    renderNote(note) {
        const noteEl = document.createElement('div');
        noteEl.className = 'col-md-4';
        noteEl.innerHTML = `
            <div class="card h-100 shadow-sm ${note.important ? 'note-important' : ''}" data-id="${note.id}">
                <div class="card-body">
                    <span class="badge bg-secondary mb-2">${note.category}</span>
                    <h5 class="card-title">${note.title}</h5>
                    <p class="card-text text-muted small">${new Date(note.createdAt).toLocaleDateString()}</p>
                </div>
                <div class="card-footer bg-transparent border-0 d-flex gap-2">
                    <button class="btn btn-sm btn-warning toggle-btn">
                        ${note.important ? 'Unmark' : 'Mark important'}
                    </button>
                    <button class="btn btn-sm btn-danger delete-btn">Delete</button>
                </div>
            </div>
        `;
        this.list.appendChild(noteEl);
    }

    showError(text) {
        this.error.textContent = text;
    }

    clearInput() {
        this.input.value = '';
        this.error.textContent = '';
    }
}