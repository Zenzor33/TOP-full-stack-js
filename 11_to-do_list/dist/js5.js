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

  const updateTasksDisplay = (myTasks) => {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";
    const selectedProject = document.querySelector(".highlight");

    myTasks.forEach((task) => {
      if (selectedProject && task.projectId == selectedProject.id) {
        const container = document.getElementById("tasks-container");
        const divTask = document.createElement("div");

        divTask.classList.add("task");
        divTask.setAttribute("id", taskId);
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
    eventHandler.addEventListenerToTaskTrashIcons();
  };

  const updateProjectsDisplay = (myProjects) => {
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
      eventHandler.addEventListenerToHighlightProjectDiv(divProject);

      // Styles the font of text in the div
      divProjectText.classList.add("project-text");

      // Gets user input value for project name and stores in div's text.
      divProjectText.innerText = projectName;

      // Creates trash icon and adds event listener
      divProjectIcon.classList.add("project-icon");
      divProjectIcon.innerText = "[trash-icon]";
      eventHandler.addEventListenerToProjectTrashIcon(divProjectIcon, elemId);

      divProject.appendChild(divProjectText);
      divProject.appendChild(divProjectIcon);
      container.appendChild(divProject);
    });
  };
  return {
    changeDisplayType,
    updateProjectsDisplay,
    updateTasksDisplay,
  };
})();

const appLogic = (() => {
  let count = 0;

  const counts = () => {
    count++;
    return count;
  };

  const deleteTask = (taskIconId) => {
    appLogic.myTasks = appLogic.myTasks.filter(
      (task) => taskIconId != task.taskId
    );
  };

  const deleteProject = (projectId) => {
    // delete projects from myProjects that match projectId
    appLogic.myProjects = appLogic.myProjects.filter(
      (project) => projectId != project.id
    );

    // delete tasks (with projectId) from myTasks array
    appLogic.myTasks = appLogic.myTasks.filter(
      (tasks) => projectId != tasks.projectId
    );
  };
  const projectFactory = (title) => {
    this.id = counts();
    this.title = title;
    return { id, title };
  };

  const taskFactory = (projectId, taskTitle, description, notes) => {
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

    const thisTask = taskFactory(projectId, taskTitle, description, notes);
    appLogic.myTasks.push(thisTask);
    // removes popup
    displayController.changeDisplayType("none", [
      "formAddTask",
      "page-mask-task",
    ]);
    // update dom
    displayController.updateTasksDisplay(appLogic.myTasks);
  };

  const createProject = (e) => {
    // pushes project to myProjects and updateProjectDisplay()
    e.preventDefault();
    const userInputField = document.getElementById("project-name");
    const projectName = userInputField.value;
    const thisProject = projectFactory(projectName);
    appLogic.myProjects.push(thisProject);

    // Removes the popup
    displayController.changeDisplayType("none", [
      "popup-project",
      "page-mask-project",
    ]);
    displayController.updateProjectsDisplay(appLogic.myProjects);
  };
  return {
    createProject,
    createTask,
    deleteProject,
    deleteTask,
    myProjects: [],
    myTasks: [],
    counts,
  };
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

  const addEventListenerToTaskTrashIcons = () => {
    const targetDivs = document.querySelectorAll(".task-icon-trash");

    targetDivs.forEach((element) =>
      element.addEventListener("click", (e) => {
        const target = e.target;
        const taskId = target.getAttribute("data-taskid");
        appLogic.deleteTask(taskId);
        displayController.updateTasksDisplay(appLogic.myTasks);
      })
    );
  };

  const addEventListenerToProjectTrashIcon = (divProjectIcon, elemId) => {
    divProjectIcon.addEventListener("click", () => {
      appLogic.deleteProject(elemId);
      displayController.updateProjectsDisplay(appLogic.myProjects);
    });
  };

  const addEventListenerToHighlightProjectDiv = (divProject) => {
    divProject.addEventListener("click", () => {
      const divPrevSelected = document.querySelector(".highlight");
      if (divPrevSelected) divPrevSelected.classList.remove("highlight");
      divProject.classList.add("highlight");
      displayController.updateTasksDisplay(appLogic.myTasks);
    });
  };

  return {
    addEventListenerToTaskTrashIcons,
    addEventListenerToProjectTrashIcon,
    addEventListenerToHighlightProjectDiv,
  };
})();
