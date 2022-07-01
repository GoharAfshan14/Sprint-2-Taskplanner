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