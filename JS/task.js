// 1. create class , create object using that class
// 2. create method to store data as array
// 3. create another method to display

// When a new task is added with valid information, the data should be stored inside a JavaScript object.
// Each task object should be added to and stored in an array variable. They should each have a unique 
// incremented id. 

// The added task should be visible on the current tasks list and should display the task information.
//create class , create object using that class
let i = 0;
class Task {
    constructor(name, description, assignee, dueDate, status) {
        this._name = name;
        this._description = description;
        this._assignee = assignee;
        this._dueDate = dueDate;
        this._status = status;

    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }

    get description() {
        return this._description
    }
    get assignee() {
        return this._assignee
    }
    get dueDate() {
        return this._dueDate
    }
    get status() {
        return this._status
    }
 
}

class TaskManager {
    constructor() {
      this._taskId = 1;
      this._taskArray = [];
    }
    get taskList() {
      return this._taskArray;
    }

    addTask = (task) => {
      console.log('testing',validateInput())
      task.id = this._taskId++;
      this._taskArray.push(task);
      

    }
       displayTasks = () => {
      const taskListContainer = document.getElementById('taskList');
      
        const task = this._taskArray[i];
        // create HTML for task card
        
        const cardContainer = document.createElement('div');
        cardContainer.className = "col-sm-6";
        cardContainer.innerHTML = `
          <div class="card">
            <div class="card-body">
             <h5 class="card-title">Task Name:${task.name}</h5>
             <h5 class = "card-text" > Id:${task.id}</h5>
					  	<p class="card-text">Description: ${task.description}</p>
              <p class="card-text"> Assignee To: ${task.assignee}</p>
              <p class="card-text taskDueDate"> Due Date: ${task.dueDate}</p>
              <p class="card-text taskStatus">Status : ${task.status}</p>
              <button onclick="document.getElementById('id01').style.display='block'" class="btn btn-sm">Delete</button>
				  		<button type="button" class="btn btn-sm" data-toggle="modal" data-target="#taskModal">Edit</a>
            </div>
          </div>`;
        taskListContainer.appendChild(cardContainer);
        i++;
      }
     
     }
  

