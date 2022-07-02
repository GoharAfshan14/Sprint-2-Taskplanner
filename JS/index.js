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




// // This is for deleting task 
// const btnDelete = document.getElementById('delete_taskForm');
// btnDelete.addEventListener("click", deleteTask);
// function deleteTask() {
//   console.log('delete task');
//   // document.getElementById('taskName').value = "";
//   // document.getElementById('taskDescription').value = "";
//   // document.getElementById('assigneeName').value = "";
//   // document.getElementById('taskDueDate').value = "";
//   // document.getElementById('taskStatus').value = "";
// }
// function myFunction() {
//   const element = document.getElementById("demo");
//   element.remove();
// }


