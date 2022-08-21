const myProjects = [];
const myTasks = [];

let count = 0;
const counts = () => {
  count++;
  return count;
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

const loadTasks = (projectId) => {
  // load each element of myTasks with projectId property value of the parameter.
  const container = document.getElementById("tasks-container");
  container.innerHTML = "";

  // This code is for the INITAL LOADING OF TASKS when a user selects a different project
  const theArray = findElements(projectId); // returns someElements -- contains all elements in myTasks with a specified projectId
  resetSomeElements(); // someElements = []
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

const appLogic = (() => {
  const removeTasksFromArray = (projectId) => {
    // remove tasks from array
    for (let i = 0; i < myTasks.length; i++) {
      console.log(myTasks.length);
      if (projectId == myTasks[i].projectId) {
        const indexValue = myTasks.indexOf(myTasks[i]);
        myTasks.splice(indexValue, 1);
        i--;
      }
    }
  };

  const removeProjectFromArray = (projectId) => {
    for (let i = 0; i < myProjects.length; i++) {
      // Note the ==
      if (projectId == myProjects[i].id) {
        let indexValue = myProjects.indexOf(myProjects[i]);
        myProjects.splice(indexValue, 1);
      }
    }
  };
  const deleteProject = (e) => {
    // Assign projectId and projectContainer element to unique variables
    const target = e.target;
    const projectId = target.parentElement.id;
    const projectDiv = target.parentElement;

    removeProjectFromArray(projectId);
    removeTasksFromArray(projectId);
    removeElementFromDisplay(projectDiv);
  };
  return { deleteProject };
})();

const displayController = (() => {
  const removeElementFromDisplay = (element) => element.remove();
  const changeDisplayType = (displayType, ...ElementId) => {
    const arr = ElementId;
    const id1 = arr[0][0];
    const id2 = arr[0][1];
    const element1 = document.querySelector(`#${id1}`);
    const element2 = document.querySelector(`#${id2}`);
    element1.style.display = displayType;
    element2.style.display = displayType;
  };
  const addHighlightEventListener = (element) => {
    element.addEventListener("click", () => {
      const divPrevSelected = document.querySelector(".highlight");
      if (divPrevSelected) divPrevSelected.classList.remove("highlight");
      element.classList.add("highlight");
      // below should not be here
      loadTasks(divProject.id);
    });
  };

  const createProject = (e) => {
    e.preventDefault();
    const container = document.getElementById("projects-container");

    const divProject = document.createElement("div"); // new div
    divProject.classList.add("project");
    divProject.setAttribute("id", count + 1);

    addHighlightEventListener(divProject);

    // Creates div for text and adds styling
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
    divProjectIcon.addEventListener("click", appLogic.deleteProject);
    divProject.appendChild(divProjectIcon);

    container.appendChild(divProject); // Appends the project div to the container

    // Removes the popup
    changeDisplayType("none", ["popup-project", "page-mask-project"]);

    // Not DOM stuff
    // createTheProject(projectName);
  };
  return { changeDisplayType, createProject, removeElementFromDisplay };
})();

const eventHandler = (() => {
  const btnAddProject = document.getElementById("btn-add-project");
  const btnAddTask = document.getElementById("btn-add-task");
  const btnCancelProject = document.getElementById("project-btn-cancel");
  const btnCancelTask = document.getElementById("task-btn-cancel");
  const btnSubmitProject = document.getElementById("btnProjectSubmit");

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

  btnSubmitProject.addEventListener("click", displayController.createProject);
})();
