/*

Algorithm:
- Add event listener to add project button
- On click, it displays a popup overlay with a text field with label: 'Project Name' and two buttons: 'Submit' and 'Cancel'.

Change CSS properties of .form-popup and #page-mask:
-- Remove display:none 

Add event listener to project submit button #btnProjectSubmit:
- Create three new divs: .project, .project-text, .project-icon 
- .project-text has innerText of the project's name
- .project-icon (temporarily) has innertext of '[trash icon]'
- append .project-text and .project-icon to .project
- append .project as last child to #projects-container 

Create a factory function for new projects. Each project has properties for:
- title, task description, due date, priority, notes

Seperate object for tasks? No. Separate location for tasks.

Create popup for tasks #btn-add-task

*/

const btnAddProject = document.getElementById("btn-add-project");
const btnAddTask = document.getElementById("btn-add-task");
const btnCancelProject = document.getElementById("project-btn-cancel");
const btnSubmitProject = document.getElementById("btnProjectSubmit");

btnAddProject.addEventListener("click", popupNewProject);
btnAddTask.addEventListener("click", popupTask);
btnCancelProject.addEventListener("click", cancelProject);
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

function popupTask() {
  console.log("tasks");
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

function addNewProject(e) {
  e.preventDefault();

  const container = document.getElementById("projects-container");

  const divProject = document.createElement("div");
  divProject.classList.add("project");

  const divProjectText = document.createElement("div");
  divProjectText.classList.add("project-text");
  // change below this line
  const userInputField = document.getElementById("project-name");
  const projectName = userInputField.value;
  divProjectText.innerText = projectName;
  // change above this line
  divProject.appendChild(divProjectText);

  const divProjectIcon = document.createElement("project-icon");
  divProjectIcon.classList.add("project-icon");
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
