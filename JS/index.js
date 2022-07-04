// TASK - 7 - Adding  Tasks to the Array

const taskManager = new TaskManager();
const btnSubmit = document.getElementById('submit_taskForm');

function addTask() {
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const assigneeName = document.getElementById('assigneeName').value;
  const taskDueDate = document.getElementById('taskDueDate').value;
  const taskStatus = document.getElementById('taskStatus').value;
  if (validateInput()) {
    taskManager.addTask(taskName, taskDescription, assigneeName, taskDueDate, taskStatus); 
    console.log(taskManager.taskList);
    // Reloads the Current document
    location.reload()

  }
}
btnSubmit.addEventListener("click", addTask);







