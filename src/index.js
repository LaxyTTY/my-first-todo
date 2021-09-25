let toDoContainer = document.querySelector('.container_list')
let inputField = document.querySelector('.task_input')
let addToDoBtn = document.querySelector('.save_btn')
let allTasks = document.querySelectorAll('.todo_element')

addToDoBtn.onclick = function () {
    const div = document.createElement('div');
    div.className = "todo_element";
    div.innerHTML = `
      <p class="todo_element_title">${inputField.value}</p>
      <div class="todo_element_buttons" >
        <button>+</button>
        <button class="delete_task">-</button>
      </div>
    `;
    inputField.value = ''
    toDoContainer.appendChild(div)
}

toDoContainer.addEventListener('click', function (e) {
    const item = e.target
    if(item.classList[0] === "delete_task") {
        item.parentElement.parentElement.remove()
    }
})






