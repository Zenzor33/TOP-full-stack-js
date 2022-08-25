/*
Algorithm:
- Three objects:
1) eventHandler - stores eventListeners for html
2) displayController
- updateProjectDisplay: loops through myProjects array
- updateTaskDisplay: loops through myTasks array, and displays the appropriate tasks (matched to projectId selected)
- changeDisplayType: makes popups disappear
3) appLogic
- createProject: pushes project to myProjects and updateProjectDisplay()
- createTask: pushes task to myTasks
4) global variables:
- myProjects
- myTasks
*/

const myProjects = [];
const myTasks = [];

let count = 0;
const counts = () => {
  count++;
  return count;
};

const displayController = (() => {
  const changeDisplayType = (displayType, ...ElementId) => {
    const arr = ElementId;
    const id1 = arr[0][0];
    const id2 = arr[0][1];
    const element1 = document.querySelector(`#${id1}`);
    const element2 = document.querySelector(`#${id2}`);
    element1.style.display = displayType;
    element2.style.display = displayType;
  };

  let currentTasksInDom = [];
  const updateTasksDisplay = (projectId) => {
    // Get the project.id from each task
    // If project.id === task.projectId && !currentTasksInDom.includes(task.projectId) {addTaskToDom; add task.projectId to currentTasksInDom }
    myTasks.forEach((task) => {
      if (
        task.projectId == projectId &&
        !currentTasksInDom.includes(task.projectId)
      ) {
        const container = document.getElementById("tasks-container");
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
        currentTasksInDom.push(task.projectId);
      }
    });
  };

  let currentProjectsInDOM = [];
  const updateProjectsDisplay = () => {
    // This logic determines what happens when myProjects array is modified
    // for each i, create projects div and append to container
    // create an array that contains the element.id of each element in myProjects

    myProjects.forEach((element) => {
      // create an array that contains the element.id of each element in myProjects
      // if element.id is not a value of myProjects.id, continue
      if (!currentProjectsInDOM.includes(element.id)) {
        currentProjectsInDOM.push(element.id);
        const container = document.getElementById("projects-container");
        const divProject = document.createElement("div");
        const divProjectText = document.createElement("div");
        const userInputField = document.getElementById("project-name");
        const projectName = userInputField.value;
        const divProjectIcon = document.createElement("div");

        divProject.classList.add("project");
        divProject.setAttribute("id", element.id); // probably??

        // Handles the highlighting and unhighlighting of the new div
        divProject.addEventListener("click", () => {
          const divPrevSelected = document.querySelector(".highlight");
          if (divPrevSelected) divPrevSelected.classList.remove("highlight");
          divProject.classList.add("highlight");
        });
        // Styles the font of text in the div
        divProjectText.classList.add("project-text");

        // Gets user input value for project name and stores in div's text.
        divProjectText.innerText = projectName;

        // Creates trash icon and adds event listener
        divProjectIcon.classList.add("project-icon");
        divProjectIcon.innerText = "[trash-icon]";
        //   divProjectIcon.addEventListener("click", deleteProject);

        divProject.appendChild(divProjectText);
        divProject.appendChild(divProjectIcon);
        container.appendChild(divProject);
      }
    });
  };
  return { changeDisplayType, updateProjectsDisplay, updateTasksDisplay };
})();

const appLogic = (() => {
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

  const createTask = (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const notes = document.getElementById("task-notes").value;
    const selectedProject = document.querySelector(".highlight");
    const projectId = selectedProject.getAttribute("id");
    // push task to myTasks and execute displayController.updateTasksDisplay()
    const thisTask = taskFactory(projectId, taskTitle, description, notes);
    myTasks.push(thisTask);
    // removes popup
    displayController.changeDisplayType("none", [
      "formAddTask",
      "page-mask-task",
    ]);
    // update dom
    displayController.updateTasksDisplay(projectId);
  };

  const createProject = (e) => {
    // createProject: pushes project to myProjects and updateProjectDisplay()
    e.preventDefault();
    const userInputField = document.getElementById("project-name");
    const projectName = userInputField.value;
    const thisProject = projectFactory(projectName);
    myProjects.push(thisProject);

    // Removes the popup
    displayController.changeDisplayType("none", [
      "popup-project",
      "page-mask-project",
    ]);
    displayController.updateProjectsDisplay();
  };
  return { createProject, createTask };
})();

const eventHandler = (() => {
  const btnAddProject = document.getElementById("btn-add-project");
  const btnAddTask = document.getElementById("btn-add-task");
  const btnCancelProject = document.getElementById("project-btn-cancel");
  const btnCancelTask = document.getElementById("task-btn-cancel");
  const btnSubmitProject = document.getElementById("btnProjectSubmit");
  const btnSubmitTask = document.getElementById("btnTaskSubmit");

  btnAddProject.addEventListener("click", () => {
    displayController.changeDisplayType("block", [
      "popup-project",
      "page-mask-project",
    ]);
  });
  btnAddTask.addEventListener("click", () => {
    displayController.changeDisplayType("block", [
      "formAddTask",
      "page-mask-task",
    ]);
  });
  btnCancelProject.addEventListener("click", () => {
    displayController.changeDisplayType("none", [
      "popup-project",
      "page-mask-project",
    ]);
  });
  btnCancelTask.addEventListener("click", () => {
    displayController.changeDisplayType("none", [
      "formAddTask",
      "page-mask-task",
    ]);
  });
  btnSubmitProject.addEventListener("click", appLogic.createProject);
  btnSubmitTask.addEventListener("click", appLogic.createTask);
})();
