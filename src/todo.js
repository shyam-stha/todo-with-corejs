const task = [];
const addBtn = document.getElementById("addbtn");
const removeAll = document.getElementById("removebtn");
const display = document.querySelector(".display");
const consoleDisplay = document.querySelector(".display-console");

var userInputs;
var todolists;

addBtn.addEventListener("click", (e) => {
  userInputs = document.getElementById("input");
  let input = userInputs.ariaValueMax;

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
            <div class="todo-list">
                <input type="text" class="todo-list__input" id="todo__list--edit-input" ${val} disabled/>
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
