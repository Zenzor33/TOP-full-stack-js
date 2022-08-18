/*

Algorithm:

- Make project div disappear when trash icon is clicked
- Delete task from myTasks when trash icon is clicked
- Delete the innerHtml for the task
*/

const btnAddProject = document.getElementById("btn-add-project");
const btnAddTask = document.getElementById("btn-add-task");
const btnCancelProject = document.getElementById("project-btn-cancel");
const btnCancelTask = document.getElementById("task-btn-cancel");
const btnSubmitProject = document.getElementById("btnProjectSubmit");
const btnSubmitTask = document.getElementById("btnTaskSubmit");

btnAddProject.addEventListener("click", popupNewProject);
btnAddTask.addEventListener("click", popupTask);
btnCancelProject.addEventListener("click", cancelProject);
btnCancelTask.addEventListener("click", cancelTask);
btnSubmitProject.addEventListener("click", addNewProject);
btnSubmitTask.addEventListener("click", addNewTask);

/*
Create a factory function for new projects. Each project has properties for:
- title, task description, due date, priority, notes
*/

let count = 0;
const counts = () => {
  count++;
  return count;
};

const myProjects = [];
const myTasks = [];

const projectFactory = (title) => {
  this.id = counts();
  this.title = title;
  return { id, title };
};

const taskFactory = (projectId, taskTitle, description, notes, dueDate) => {
  this.projectId = projectId;
  this.taskId = counts();
  this.taskTitle = taskTitle;
  this.description = description;
  this.notes = notes;
  return { projectId, taskId, description, taskTitle, notes };
};

let someElements = [];
function findElements(id) {
  for (let i = 0; i < myTasks.length; i++) {
    if (myTasks[i].projectId === id) {
      someElements.push(myTasks[i]);
    }
  }
  return someElements;
}

function resetSomeElements() {
  someElements = [];
}

// function addNewTask() should attach to the submit button
// function loadTasks() should attach to the project div

function loadTasks(projectId) {
  // load each element of myTasks with projectId property value of the parameter.
  const container = document.getElementById("tasks-container");
  container.innerHTML = "";
  console.log("reset");

  // This code is for the INITAL LOADING OF TASKS when a user selects a different project
  const theArray = findElements(projectId);
  resetSomeElements();
  theArray.forEach((element) => {
    const divTask = document.createElement("div");
    divTask.classList.add("task");
    divTask.innerHTML = `<div class="task-title">Task title: ${element.taskTitle}</div>
  <div class="task-description">Task description: ${element.description} </div>
  <div class="task-due-date">Task due date:</div>
  <div class="task-priority">Task priority:</div>
  <div class="task-notes">Task notes: ${element.notes} </div>
  <div class="task-projectId">Project Id: ${element.projectId}</div>
  <div class="taskID">Task Id: ${element.taskId} </div>
  <div class="task-icon-container">
    <div class="task-icon-edit">[edit icon]</div>
    <div class="task-icon-trash">[trash icon]</div>
  </div>
</div>`;
    container.appendChild(divTask);
  });
}

function addNewTask(e) {
  // create new div with class task
  // append the innerhtml to this div
  e.preventDefault();
  const container = document.getElementById("tasks-container");

  // get info from form and create instance of object taskFactory
  const taskTitle = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const notes = document.getElementById("task-notes").value;
  const selectedProject = document.querySelector(".highlight");
  const projectId = selectedProject.getAttribute("id");

  const thisTask = taskFactory(projectId, taskTitle, description, notes);
  myTasks.push(thisTask);

  const taskId = thisTask.taskId;
  console.log(`taskId: ${taskId}`);

  const divTask = document.createElement("div");
  divTask.classList.add("task");
  divTask.innerHTML = `<div class="task-title">Task title: ${taskTitle}</div>
  <div class="task-description">Task description: ${description} </div>
  <div class="task-due-date">Task due date:</div>
  <div class="task-priority">Task priority:</div>
  <div class="task-notes">Task notes: ${notes} </div>
  <div class="task-projectId">Project Id: ${projectId}</div>
  <div class="taskID">Task Id: ${taskId} </div>
  <div class="task-icon-container">
    <div class="task-icon-edit">[edit icon]</div>
    <div class="task-icon-trash">[trash icon]</div>
  </div>
</div>`;
  container.appendChild(divTask);

  cancelTask();
}

function popupTask() {
  const formPopup = document.querySelector("#formAddTask");
  const pageMask = document.querySelector("#page-mask-task");
  formPopup.style.display = "block";
  pageMask.style.display = "block";
}

// use ID's
function popupNewProject() {
  const formPopup = document.querySelector("#popup-project");
  const pageMask = document.querySelector("#page-mask-project");
  formPopup.style.display = "block";
  pageMask.style.display = "block";
}

// use ID's
function cancelProject() {
  const formPopup = document.querySelector("#popup-project");
  const pageMask = document.querySelector("#page-mask-project");
  formPopup.style.display = "none";
  pageMask.style.display = "none";
}

function cancelTask() {
  const formPopup = document.querySelector("#formAddTask");
  const pageMask = document.querySelector("#page-mask-task");
  formPopup.style.display = "none";
  pageMask.style.display = "none";
}

function addNewProject(e) {
  e.preventDefault();

  const container = document.getElementById("projects-container");

  const divProject = document.createElement("div");
  divProject.classList.add("project");
  divProject.setAttribute("id", count + 1);

  divProject.addEventListener("click", () => {
    const divPrevSelected = document.querySelector(".highlight");
    if (divPrevSelected) divPrevSelected.classList.remove("highlight");
    divProject.classList.add("highlight");
    loadTasks(divProject.id);
  });

  const divProjectText = document.createElement("div");
  divProjectText.classList.add("project-text");
  //   divProjectText.setAttribute("id", count + 1);

  // change below this line
  const userInputField = document.getElementById("project-name");
  const projectName = userInputField.value;
  divProjectText.innerText = projectName;
  // change above this line
  divProject.appendChild(divProjectText);

  const divProjectIcon = document.createElement("project-icon");
  divProjectIcon.classList.add("project-icon");
  divProjectIcon.innerText = "[trash-icon]";

  divProject.appendChild(divProjectIcon);

  container.appendChild(divProject);

  createTheProject(projectName);

  divProjectIcon.addEventListener("click", deleteProject);

  cancelProject();
}

function deleteProject(e) {
  // get the projectId
  const test = e.target;
  const testParent = test.parentElement.id;
  const projectId = testParent;

  // delete project from myProject arrray
  for (let i = 0; i < myProjects.length; i++) {
    // Note the ==
    if (projectId == myProjects[i].id) {
      let indexValue = myProjects.indexOf(myProjects[i]);
      myProjects.splice(indexValue, 1);
    }
  }
  // delete tasks (with projectId) from myTasks array
  for (let i = 0; i < myTasks.length; i++) {
    console.log(myTasks.length);
    if (projectId == myTasks[i].projectId) {
      console.log(`myTasks.length = ${myTasks.length}`);
      console.log(`i = ${i}`);
      const indexValue = myTasks.indexOf(myTasks[i]);
      myTasks.splice(indexValue, 1);
      i--;
    }
  }
}

function createTheProject(title) {
  const thisProject = projectFactory(title);
  myProjects.push(thisProject);
}
