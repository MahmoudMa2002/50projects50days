const addBtn = document.getElementById('add');
const emptyState = document.getElementById('empty-state');
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => addNewNote(note));
}
updateEmptyState();

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button class="edit" title="Edit note">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete" title="Delete note">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea placeholder="Start writing your note..." class="${text ? "hidden" : ""}"></textarea>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this note?')) {
            note.remove();
            updateLS();
        }
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);
        updateLS();
    });

    document.body.insertBefore(note, emptyState);
    updateEmptyState();
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
    updateEmptyState();
}

function updateEmptyState() {
    const hasNotes = document.querySelectorAll('.note').length > 0;
    emptyState.style.display = hasNotes ? 'none' : 'flex';
}
