import {
  changeDisplayType,
  updateProjectsDisplay,
  updateTasksDisplay,
} from "./dom";
import { createProject, createTask } from "./applogic";
import { myProjects, myTasks } from "./obj";

const btnAddProject = document.getElementById("btn-add-project");
const btnAddTask = document.getElementById("btn-add-task");
const btnCancelProject = document.getElementById("project-btn-cancel");
const btnCancelTask = document.getElementById("task-btn-cancel");
const btnSubmitProject = document.getElementById("btnProjectSubmit");
const btnSubmitTask = document.getElementById("btnTaskSubmit");

btnAddProject.addEventListener("click", () => {
  changeDisplayType("block", ["popup-project", "page-mask-project"]);
});
btnAddTask.addEventListener("click", () => {
  changeDisplayType("block", ["formAddTask", "page-mask-task"]);
});
btnCancelProject.addEventListener("click", () => {
  changeDisplayType("none", ["popup-project", "page-mask-project"]);
});
btnCancelTask.addEventListener("click", () => {
  changeDisplayType("none", ["formAddTask", "page-mask-task"]);
});
btnSubmitProject.addEventListener("click", (e) => {
  createProject(e);
  // Removes the popup
  changeDisplayType("none", ["popup-project", "page-mask-project"]);
  updateProjectsDisplay(myProjects);
});
btnSubmitTask.addEventListener("click", (e) => {
  createTask(e);
  // removes popup
  changeDisplayType("none", ["formAddTask", "page-mask-task"]);
  // update dom
  updateTasksDisplay(myTasks);
});

// const addEventListenerToTaskTrashIcons = () => {
//   const targetDivs = document.querySelectorAll(".task-icon-trash");

//   targetDivs.forEach((element) =>
//     element.addEventListener("click", (e) => {
//       const target = e.target;
//       const taskId = target.getAttribute("data-taskid");
//       appLogic.deleteTask(taskId);
//       displayController.updateTasksDisplay(appLogic.myTasks);
//     })
//   );
// };

// const addEventListenerToProjectTrashIcon = (divProjectIcon, elemId) => {
//   divProjectIcon.addEventListener("click", () => {
//     deleteProject(elemId);
//     updateProjectsDisplay(myProjects);
//   });
// };

// const addEventListenerToHighlightProjectDiv = (divProject) => {
//   divProject.addEventListener("click", () => {
//     const divPrevSelected = document.querySelector(".highlight");
//     if (divPrevSelected) divPrevSelected.classList.remove("highlight");
//     divProject.classList.add("highlight");
//     // displayController.updateTasksDisplay(appLogic.myTasks);
//   });
// };

// return {
//   addEventListenerToTaskTrashIcons,
//   addEventListenerToProjectTrashIcon,
//   addEventListenerToHighlightProjectDiv,
// };
