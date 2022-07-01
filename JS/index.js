// TASK - 7 - Display Tasks
const taskManager = new TaskManager();
const btnSubmit = document.getElementById('submit_taskForm');

function addTask() {
  console.log('add task');
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const assigneeName = document.getElementById('assigneeName').value;
  const taskDueDate = document.getElementById('taskDueDate').value;
  const taskStatus = document.getElementById('taskStatus').value;
  if (validateInput()) {
    const task = new Task(taskName, taskDescription, assigneeName, taskDueDate, taskStatus); taskManager.addTask(task);
    taskManager.displayTasks();
    console.log(taskManager.taskList);
  }
}
btnSubmit.addEventListener("click", addTask);

// This is for clearing the input field
const btnReset = document.getElementById('reset_taskForm');
btnReset.addEventListener("click", resetTask);

function resetTask() {
  console.log('add task');
  document.getElementById('taskName').value = "";
  document.getElementById('taskDescription').value = "";
  document.getElementById('assigneeName').value = "";
  document.getElementById('taskDueDate').value = "";
  document.getElementById('taskStatus').value = "";
}

// This is for deleting task 
const btnDelete = document.getElementById('delete_taskForm');
btnDelete.addEventListener("click", deleteTask);
function deleteTask() {
  console.log('delete task');
  // document.getElementById('taskName').value = "";
  // document.getElementById('taskDescription').value = "";
  // document.getElementById('assigneeName').value = "";
  // document.getElementById('taskDueDate').value = "";
  // document.getElementById('taskStatus').value = "";
}
function myFunction() {
  const element = document.getElementById("demo");
  element.remove();
}