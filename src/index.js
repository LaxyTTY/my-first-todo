let toDoContainer = document.querySelector('.container_list');
let inputField = document.querySelector('.task_input');
let addToDoBtn = document.querySelector('.save_btn');
let allTasks = document.querySelectorAll('.todo_element');
let clearStorageBtn = document.querySelector('.clear_storage');
const todos = JSON.parse(localStorage.getItem('myTodos'))

function checkLocalTodos() {
    if (todos) {
        for (const todo of todos) {
            const div = document.createElement('div');
            div.className = "todo_element";
            div.innerHTML = `
                <p class="todo_element_title">${todo.todoName}</p>
                <div class="todo_element_buttons"  >
                    <button>+</button>
                    <button class="delete_task">-</button>
                </div>
                `;
            toDoContainer.appendChild(div);
        }
    }
    else {
        console.log('Stoareg is empty')
        return
    }
}

checkLocalTodos()



addToDoBtn.onclick = function () {

    const div = document.createElement('div');
    div.className = "todo_element";
    div.innerHTML = `
        <p class="todo_element_title">${inputField.value}</p>
        <div class="todo_element_buttons"  >
            <button>+</button>
            <button class="delete_task">-</button>
        </div>
     `;

    if (todos) {
        const newTodos = [...todos, { todoName: inputField.value }]
        localStorage.setItem('myTodos', JSON.stringify(newTodos))
    } else {
        localStorage.setItem('myTodos', [{
            todoName: inputField.value,
        }])
    }

    toDoContainer.appendChild(div);
    inputField.value = '';

}



toDoContainer.addEventListener('click', function (e) {
    const item = e.target
    if (item.classList[0] === "delete_task") {
        const itemToDelete = item.parentElement.parentElement
        const textValue = itemToDelete.children[0].innerHTML
        if (todos) {
            const filteredTodos = todos.filter(todo => todo.todoName !== textValue)
            localStorage.setItem('myTodos', JSON.stringify(filteredTodos))

        }
        itemToDelete.remove()
    }
})

clearStorageBtn.onclick = function () {
    localStorage.removeItem('myTodos')
    console.log('storage value were removed')
}