// const taskArr = [];
// let taskId = 1;

const taskManager = new TaskManager();
const btnSubmit = document.getElementById('submit_taskForm');
//function submitForm(event) {
  //event.preventDefault(); // Prevent form submission
//   // 1. Validate input (if required)
//   // 2. Add task (call addTask function)
//addTask();
//   // 3. Close new task form 
//   $('#taskModal').modal('hide');
//}

// btnSubmit.addEventListener("submit", e => {
//   console.log("btnSubmit working");
//   e.preventDefault();});

function addTask() {
  console.log('add task');
  const taskName = document.getElementById('taskName').value;
  const taskDescription = document.getElementById('taskDescription').value;
  const assigneeName = document.getElementById('assigneeName').value;
  const taskDueDate = document.getElementById('taskDueDate').value;
  const taskStatus = document.getElementById('taskStatus').value;

  // const task = {
  //   id: taskId,
  //   name: taskName,
  //   description: taskDescription,
  //   assignee: assigneeName,
  //   dueDate: taskDueDate,
  //   status: taskTastus,
  // };

  // taskArr.push(task);
  // taskId += 1;

  

  const task = new Task(taskName, taskDescription, assigneeName, taskDueDate, taskStatus);
  taskManager.addTask(task);
  taskManager.displayTasks();

  console.log(taskManager.taskList);
}



btnSubmit.addEventListener("click", addTask);
