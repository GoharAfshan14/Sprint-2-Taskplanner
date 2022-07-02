// TASK - 4 - Task Form Inputs Validation
let taskName1 = document.querySelector('#taskName');
let assigneeName1 = document.querySelector('#assigneeName');
let taskDescription1 = document.querySelector('#taskDescription');
let taskStatus1 = document.querySelector('#taskStatus');
let taskDueDate1 = document.querySelector('#taskDueDate');
let submit_taskForm1 = document.querySelector('#submit_taskForm');
submit_taskForm1.addEventListener('click', validateInput);


//error mmessages
let errMsg1 = document.querySelector('#errMsgName');
errMsg1.style.color = "#FF0000";
let errMsg2 = document.querySelector('#errMsgDescription');
errMsg2.style.color = "#FF0000";
let errMsg3 = document.querySelector('#errMsgAssignee');
errMsg3.style.color = "#FF0000";
let errMsg4 = document.querySelector('#errMsgDueDate');
errMsg4.style.color = "#FF0000";
let errMsg5 = document.querySelector('#errMsgStatus');
errMsg5.style.color = "#FF0000";

//Task validating input
function validateInput() {
    let nameFlag = false
    let descriptionFlag = false;
    let assigneeFlag = false;
    let dueDateFlag = false;
    let statusFlag = false;
    if (taskName1.value.length === 0) {
        errMsg1.innerHTML = " Enter the Task Name";
        taskName1.focus();
        nameFlag = true;

    }
    else if (taskName1.value.length < 9) {
        errMsg1.innerHTML = "";
        errMsg1.innerHTML = "Name should not be less than 8 characters";
        taskName1.focus();
        nameFlag = true;
    }

    else  {
        errMsg1.innerHTML = "";
        nameFlag = false;
    }
    if (taskDescription1.value.length === 0) {
        errMsg2.innerHTML = "";
        errMsg2.innerHTML = "Enter the Task Description";
        taskDescription1.focus();
        descriptionFlag = true;

    }
    else if (taskDescription1.value.length < 16) {
        errMsg2.innerHTML = "";
        errMsg2.innerHTML = "Description should not be less than 15 characters";
        taskName1.focus();
        descriptionFlag = true;
    }
    else {
        errMsg2.innerHTML = "";
        descriptionFlag = false;
    }


     if (assigneeName1.value.length === 0) {
        errMsg3.innerHTML = "";
        errMsg3.innerHTML = "Enter the Assignee Name";
        assigneeName1.focus();
        assigneeFlag = true;
        
    }

    else if (assigneeName1.value.length < 9) {
        errMsg3.innerHTML = "";
        errMsg3.innerHTML = "Name should not be less than 8 characters";
        taskName1.focus();
        assigneeFlag =true;
    }
    else  {
        errMsg3.innerHTML = "";
        assigneeFlag = false;
    }
    if (taskDueDate1.value.length === 0) {
        errMsg4.innerHTML = "";
        errMsg4.innerHTML = "Select Due-Date";
        taskDueDate1.focus();
        dueDateFlag = true;
    }
    else {
        errMsg4.innerHTML = "";
        dueDateFlag = false;

    }

    if (taskStatus1.value.length === 0) {
        errMsg5.innerHTML = "";
        errMsg5.innerHTML = "Select Task Status";
        taskStatus1.focus();
        statusFlag = true;
    }
    else {

        errMsg5.innerHTML = "";
        statusFlag = false;
    }
    if (!(nameFlag) && !(descriptionFlag) && !(assigneeFlag) && !(dueDateFlag) && !(statusFlag)){
        return  true;
      }
  
}

// TASK -5 - Displaying Date 
let currentDate = new Date();
let disDate = document.getElementById('currentDate');
let day = currentDate.getDate();

// To display st, nd, rd, th for the day
let rem = day % 10;
let hint = " ";
if (day === 11 || day === 12 || day === 13){
    hint = "th";
}
else if (rem === 1) {
    hint = "st";
} else if (rem === 2) {
    hint = "nd";
} else if (rem === 3) {
    hint = "rd";
} else {
    hint = "th";
}

let month = currentDate.toLocaleString('default', { month: 'long' });
let year = currentDate.getFullYear();
disDate.innerHTML = day + hint + ' ' + month + ' ' + year;


// Calendar date shows today's date to prompt user to select current or a future date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; // January is 0 so need to add 1 to make it 1
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = yyyy + '-' + mm + '-' + dd;

document.getElementById("taskDueDate").setAttribute("min", today);

//  clearing the input fields on click of Reset Button

const btnReset = document.getElementById('reset_taskForm');
btnReset.addEventListener("click", resetTask);

function resetTask() {
  console.log('add task');
  document.getElementById('taskName').value = "";
  document.getElementById('taskDescription').value = "";
  document.getElementById('assigneeName').value = "";
  document.getElementById('taskDueDate').value = "";
  document.getElementById('taskStatus').value = "";
  errMsg1.innerHTML = "";
  errMsg2.innerHTML = "";
  errMsg3.innerHTML = "";
  errMsg4.innerHTML = "";
  errMsg5.innerHTML = "";
}