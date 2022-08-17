/*

Algorithm:

- 
*/

const btnAddProject = document.getElementById("btn-add-project");
const btnAddTask = document.getElementById("btn-add-task");
const btnCancelProject = document.getElementById("project-btn-cancel");
const btnCancelTask = document.getElementById("task-btn-cancel");
const btnSubmitProject = document.getElementById("btnProjectSubmit");

btnAddProject.addEventListener("click", popupNewProject);
btnAddTask.addEventListener("click", popupTask);
btnCancelProject.addEventListener("click", cancelProject);
btnCancelTask.addEventListener("click", cancelTask);
btnSubmitProject.addEventListener("click", addNewProject);

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

const projectFactory = (title) => {
  this.id = counts();
  this.title = title;
  return { id, title };
};

/*
Steps:
- When user clicks project text, clear the task information and load that project's task information.
- Each project's task information should be stored in an object.
- How to associate a task with an object's ID?

First: highlight the div when the project is selected.
*/

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
  divProject.setAttribute("id", `project-${count + 1}`);

  divProject.addEventListener("click", () => {
    const divPrevSelected = document.querySelector(".highlight");
    if (divPrevSelected) divPrevSelected.classList.remove("highlight");
    divProject.classList.add("highlight");
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
  //   divProjectIcon.setAttribute("id", count + 1);
  divProjectIcon.innerText = "[icon]";
  divProject.appendChild(divProjectIcon);

  container.appendChild(divProject);

  createTheProject(projectName);

  cancelProject();
}

function createTheProject(title) {
  const thisProject = projectFactory(title);
  myProjects.push(thisProject);
}
