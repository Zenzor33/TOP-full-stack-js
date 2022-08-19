/*

Principles for refactoring:

1) Single responsibility
- A class (or object or module.. you get the point) should only have one responsibility. This doesn’t mean that an object can only do one thing, but it does mean that everything an object does should be part of one responsibility.

2) Separate your DOM stuff from the application logic.

3. S.O.L.I.D
------
S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle

Understanding the program

Backend:
- A factory function creates new projects
- A factory function creates new tasks

DOM manipulation:
- Separate the DOM manipulation from the backend, via a module?
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
    attachEventListenerToTaskIcons();
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

  const divTask = document.createElement("div");
  divTask.classList.add("task");
  divTask.setAttribute("id", taskId);
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
  // Here, we need to add an event listener individually or run the attach all.
  attachEventListenerToTaskIcons();

  cancelTask();
}

function attachEventListenerToTaskIcons(e) {
  const targetDivs = document.querySelectorAll(".task-icon-trash");

  targetDivs.forEach((element) =>
    element.addEventListener("click", (e) => {
      const target = e.target;
      const targetDivsParent = target.parentElement;
      const targetDivsGrandparent = targetDivsParent.parentElement;
      console.log("here");
      for (let i = 0; i < myTasks.length; i++) {
        if (targetDivsGrandparent.id == myTasks[i].taskId) {
          const index = myTasks.indexOf(myTasks[i]);
          myTasks.splice(index, 1);
          i--;
        }
      }
      targetDivsGrandparent.remove();
    })
  );
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
  const projectDiv = test.parentElement;

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

  // remove project div from the display
  projectDiv.remove();
}

function createTheProject(title) {
  const thisProject = projectFactory(title);
  myProjects.push(thisProject);
}
