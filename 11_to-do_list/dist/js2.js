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

  const attachEventListenerToTaskIcons = (e) => {
    const targetDivs = document.querySelectorAll(".task-icon-trash");

    targetDivs.forEach((element) =>
      element.addEventListener("click", (e) => {
        const target = e.target;
        const targetDivsParent = target.parentElement;
        const targetDivsGrandparent = targetDivsParent.parentElement;
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

  // is this necessary?
  const resetTaskElements = () => {
    someElements = [];
  };

  const displayTasks = (projectId) => {
    // load each element of myTasks with projectId property value of the parameter.
    const container = document.getElementById("tasks-container");
    container.innerHTML = "";

    // This code is for the INITAL LOADING OF TASKS when a user selects a different project
    const theArray = findElements(projectId);
    resetTaskElements();
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
  };

  const createProjectDiv = (e) => {
    e.preventDefault();
    const container = document.getElementById("projects-container");

    // Create new project div
    const divProject = document.createElement("div");
    divProject.classList.add("project");
    divProject.setAttribute("id", count + 1);

    // Attach 'highlight' event logic to div
    divProject.addEventListener("click", () => {
      const divPrevSelected = document.querySelector(".highlight");
      // removes highlighting of previous selected div
      if (divPrevSelected) divPrevSelected.classList.remove("highlight");
      // highlights the clicked div
      divProject.classList.add("highlight");
      displayTasks(divProject.id); // this shouldn't be here SEP CONCERNS
    });

    // Styles the font of text in the div
    const divProjectText = document.createElement("div");
    divProjectText.classList.add("project-text");

    // Gets user input value for project name and stores in div's text.
    const userInputField = document.getElementById("project-name");
    const projectName = userInputField.value;
    divProjectText.innerText = projectName;
    divProject.appendChild(divProjectText);

    // Creates trash icon and adds event listener
    const divProjectIcon = document.createElement("project-icon");
    divProjectIcon.classList.add("project-icon");
    divProjectIcon.innerText = "[trash-icon]";
    divProjectIcon.addEventListener("click", deleteProject);
    divProject.appendChild(divProjectIcon);

    // Appends the project div to the container
    container.appendChild(divProject);

    // Removes the popup
    changeDisplayType("none", ["popup-project", "page-mask-project"]);

    // Not DOM stuff
    createTheProject(projectName);
  };
  return { changeDisplayType, createProjectDiv };
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
  btnSubmitProject.addEventListener("click", (e) => {
    displayController.createProjectDiv(e);
    appLogic.createProject();
  });
  //   btnSubmitTask.addEventListener("click", addNewTask);
})();
