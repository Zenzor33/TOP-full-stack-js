/*

Algorithm:
- Add event listener to add project button
- On click, it displays a popup overlay with a text field with label: 'Project Name' and two buttons: 'Submit' and 'Cancel'.

*/

const btnAddProject = document.getElementById("btn-add-project");

btnAddProject.addEventListener("click", displayPopupProject);

function displayPopupProject() {
  console.log("helo");
}
