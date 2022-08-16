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

*/

const btnAddProject = document.getElementById("btn-add-project");
const btnCancelProject = document.getElementById("project-btn-cancel");
const btnSubmitProject = document.getElementById("btnProjectSubmit");
const formPopup = document.querySelector(".form-popup");
const pageMask = document.getElementById("page-mask");

btnAddProject.addEventListener("click", popupNewProject);
btnCancelProject.addEventListener("click", cancelProject);
btnSubmitProject.addEventListener("click", addNewProject);

function popupNewProject() {
  formPopup.style.display = "block";
  pageMask.style.display = "block";
}

function cancelProject() {
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
}
