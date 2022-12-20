const task = [];
const addBtn = document.getElementById("addbtn");
const removeAll = document.getElementById("removebtn");
const display = document.querySelector(".display");
const consoleDisplay = document.querySelector(".display-console");

var userInputs;
var todolists;

addBtn.addEventListener("click", (e) => {
  userInputs = document.getElementById("input");
  let input = userInputs.value;
  if (input === "") {
    alert("Please Add Task...");
  } else {
    task.push(input);
    display.innerHTML = "";
    displayTodoList();
  }
});

consoleDisplay.addEventListener("click", (e) => {
  console.log("Final Todo List", task);
});

const displayTodoList = () => {
  task.forEach((val) => {
    display.innerHTML += `
            <div class='todo-list'>
                <input class="todo-list__input" id="todo__list--edit-input" value =${val} disabled/>
                    <div class="todo-list__btn">
                       <button class="todo-list__btn--edit">
                            Edit
                        </button>
                        <button class="todo-list__btn--delete">
                             Delete
                        </button>
                        <button class="todo-list__btn--save" hidden>
                             Save
                        </button>
                    </div>
            </div>
        `;
    userInputs.value = "";
  });
  getTodoList();
};

const getTodoList = () => {
  todolists = document.querySelectorAll(".todo-list");
  todolists.forEach((list, key) => {
    let editBtn = list.children[1].children[0];
    let deleteBtn = list.children[1].children[1];
    let saveBtn = list.children[1].children[2];

    editBtn.addEventListener("click", (e) => {
      saveBtn.hidden = false;
      editInput = list.children[0];
      editInput.disabled = false;
      document.getElementById("todo__list--edit-input").focus();
    });

    deleteBtn.addEventListener("click", (e) => {
      task.splice(key, 1);
      display.innerHTML = "";
      displayTodoList();
    });

    saveBtn.addEventListener("click", (e) => {
      editInput.disabled = true;
      task.splice(key, 1, editInput.value);
      saveBtn.hidden = true;
    });
  });
};
