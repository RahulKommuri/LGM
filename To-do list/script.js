function add_todo_task() {
    const task = document.getElementById('todo-task');
    const tastlist = document.getElementById('tasklist');
    if (task.value !== '') {
        const newtask = createtask(task);
        tastlist.appendChild(newtask);
        task.value = '';
    }
}
function createtask(task) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    const label = document.createElement('label');
    label.id = 'Label'
    label.textContent = task.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', function () {
        todoItem.remove();
    });

    checkbox.addEventListener('change', e => {
        if (e.target.checked === true) {
            label.innerHTML = '<s>' + label.textContent + '</s>';
        }
        else {
            label.innerHTML = label.textContent;
        }
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(removeButton);

    return todoItem;
}
