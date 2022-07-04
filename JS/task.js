// 1. create class , create object using that class
// 2. create method to store data as array
// 3. create another method to display

// When a new task is added with valid information, the data should be stored inside a JavaScript object.
// Each task object should be added to and stored in an array variable. They should each have a unique 
// incremented id. 

// The added task should be visible on the current tasks list and should display the task information.
//create class , create object using that class


// TASK - 6 -  Create a Class Using JavaScript and Add Tasks programmatically 
let i = 0;
class Task {
    constructor(id,name, description, assignee, dueDate, status) {
        this._id = id;
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
      this._taskId = 0;
      this._taskArray = JSON.parse(localStorage.getItem("task"))|| [];
      if (localStorage.getItem('task')){
        JSON.parse(localStorage.getItem('task')).forEach(element => {
          this._taskId = element.id; // 2
        });
      }
     // this._taskId = element.id;
    }
    get taskList() {
      return this._taskArray;
    }

    addTask = (name,description, assignee, dueDate, status) => {
      console.log(name,description, assignee, dueDate, status)
     
     // console.log('testing',task)
      if(validateInput()){
        if (localStorage.getItem('task')){
          JSON.parse(localStorage.getItem('task')).forEach(element => {
            console.log(element)
            this._taskId = element._id;
          });
        }
        console.log(this._taskId)
       this._taskId++;
      let  task = new Task(this._taskId,name,description, assignee, dueDate, status);
      
      this._taskArray.push(task);
      localStorage.setItem("task",JSON.stringify(this._taskArray))
      }
    }

    deleteTask(id){
      
      let isConfirm = confirm("Are you sure want to delete this record?")
      if (isConfirm){
        let index = this._taskArray.findIndex(task=>task._id===id);
        alert('test delete'+index);

        if (index > -1){
          this._taskArray.splice(index,1);
        }
        console.log(this._taskArray);
        localStorage.setItem('task',JSON.stringify(this._taskArray));
        location.reload();
      }
    }

// TASK - 7 - Display Tasks
       displayTasks = () => {
      const taskListContainer = document.getElementById('taskList');
      
        const task = this._taskArray[i];
        // create HTML for task card
        
        let localStorageTasks = JSON.parse(localStorage.getItem("task"))|| [];
        localStorageTasks.forEach((task)=>{
        const cardContainer = document.createElement('div');
        cardContainer.className = "col-sm-6";
        cardContainer.innerHTML = `
          <div class="card">
            <div class="card-body">
             <h5 class="card-title">Task Name:${task._name}</h5>
             <h5 class = "card-text" > Id:${task._id}</h5>
					  	<p class="card-text">Description: ${task._description}</p>
              <p class="card-text"> Assignee To: ${task._assignee}</p>
              <p class="card-text taskDueDate"> Due Date: ${task._dueDate}</p>
              <p class="card-text taskStatus">Status : ${task._status}</p>
              <button onclick="taskManager.deleteTask(${task._id})" class="btn btn-sm">Delete</button>
				  		<button type="button" class="btn btn-sm">Edit</a>
            </div>
          </div>`;
        taskListContainer.appendChild(cardContainer);
        
      });

      
      
    }

    
    
 }



  
   
