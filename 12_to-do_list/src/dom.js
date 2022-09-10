/*
Functions:

1. changeDisplayType(displayType,[elementId...])

2. updateProjectsDisplay(myProjects): Renders display for projects. First sets innerHTML to blank, then loops through each element of the array.

3. updateTasksDisplay(projectId): Renders display for tasks of element in myProjects with projectId of projectId. First sets innerHTML to blank, then loops through each element of the array.

*/

import { deleteProject, deleteTask } from "./applogic";
import { myTasks, myProjects } from "./obj";

const changeDisplayType = (displayType, ...ElementId) => {
  const arr = ElementId;
  const id1 = arr[0][0];
  const id2 = arr[0][1];
  const element1 = document.querySelector(`#${id1}`);
  const element2 = document.querySelector(`#${id2}`);
  element1.style.display = displayType;
  element2.style.display = displayType;
};

const addEventListenerToTaskTrashIcons = () => {
  const targetDivs = document.querySelectorAll(".task-icon-trash");

  targetDivs.forEach((element) =>
    element.addEventListener("click", (e) => {
      const target = e.target;
      const taskId = target.getAttribute("data-taskid");
      deleteTask(taskId);
      updateTasksDisplay(myTasks);
    })
  );
};

const updateTasksDisplay = (arr) => {
  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.innerHTML = "";
  const selectedProject = document.querySelector(".highlight");

  arr.forEach((task) => {
    if (selectedProject && task.projectId == selectedProject.id) {
      const container = document.getElementById("tasks-container");
      const divTask = document.createElement("div");

      divTask.classList.add("task");
      divTask.setAttribute("id", task.taskId);
      divTask.innerHTML = `<div class="task-title">Task title: ${task.taskTitle}</div>
    <div class="task-description">Task description: ${task.description} </div>
    <div class="task-due-date">Task due date:</div>
    <div class="task-priority">Task priority:</div>
    <div class="task-notes">Task notes: ${task.notes} </div>
    <div class="task-projectId">Project Id: ${task.projectId}</div>
    <div class="taskID">Task Id: ${task.taskId} </div>
    <div class="task-icon-container">
      <div class="task-icon-edit">[edit icon]</div>
      <div class="task-icon-trash" data-taskid="${task.taskId}">[trash icon]</div>
    </div>
  </div>`;

      container.appendChild(divTask);
    }
  });
  addEventListenerToTaskTrashIcons();
};

const updateProjectsDisplay = () => {
  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = "";

  myProjects.forEach((element) => {
    const container = document.getElementById("projects-container");
    const divProject = document.createElement("div");
    const divProjectText = document.createElement("div");
    const projectName = element.title;
    const divProjectIcon = document.createElement("div");
    const elemId = element.id;

    divProject.classList.add("project");
    divProject.setAttribute("id", element.id); // probably??

    // Handles the highlighting and unhighlighting of the new div
    divProject.addEventListener("click", () => {
      const divPrevSelected = document.querySelector(".highlight");
      if (divPrevSelected) divPrevSelected.classList.remove("highlight");
      divProject.classList.add("highlight");
      updateTasksDisplay(myTasks);
    });

    // Styles the font of text in the div
    divProjectText.classList.add("project-text");

    // Gets user input value for project name and stores in div's text.
    divProjectText.innerText = projectName;

    // Creates trash icon and adds event listener
    divProjectIcon.classList.add("project-icon");
    divProjectIcon.innerText = "[trash-icon]";
    // eventHandler.addEventListenerToProjectTrashIcon(divProjectIcon, elemId);
    divProjectIcon.addEventListener("click", () => {
      deleteProject(elemId);
      updateProjectsDisplay();
    });

    divProject.appendChild(divProjectText);
    divProject.appendChild(divProjectIcon);
    container.appendChild(divProject);
  });
};

export { changeDisplayType, updateProjectsDisplay, updateTasksDisplay };
