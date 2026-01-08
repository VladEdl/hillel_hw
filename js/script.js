'use strict';

const addBtn = document.getElementById('addBtn');
const input = document.getElementById('text');
const list = document.querySelector('.list');
if (addBtn) {
    addBtn.addEventListener('click', (element) => {
        if (input.value === '') return;
        const addLi = document.createElement('li');
        const addXBtn = document.createElement('button');
        addXBtn.classList.add('deleteBtn');
        addXBtn.textContent = 'X';
        addLi.textContent = input.value;
        addLi.append(addXBtn);
        list.append(addLi);
        input.value = '';
    });
}
list.addEventListener('click', (element) => {
    if (element.target.classList.contains('deleteBtn')) {
        element.target.closest('li').remove();
        return;
    }
    const item = element.target.closest('li');
    if (item){
        item.classList.toggle('selected');
    }
})
