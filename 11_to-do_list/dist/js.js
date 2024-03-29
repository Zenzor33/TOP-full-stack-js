/*

Principles for refactoring:

1) Single responsibility
- A class (or object or module.. you get the point) should only have one responsibility. This doesn’t mean that an object can only do one thing, but it does mean that everything an object does should be part of one responsibility.

2) Separate your DOM stuff from the application logic.

3. S.O.L.I.D
------
S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle

Understanding the program

Backend:
- A factory function creates new projects
- A factory function creates new tasks

DOM manipulation:
- Separate the DOM manipulation from the backend, via a module?

How to refactor the code using object orietned programming:

DisplayController object:
- function addNewTask handles DOM for when user presses the 'submit' button in the Task popup.

appLogic object:
- 
*/

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

  const loadTasks = (projectId) => {
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

  const createProject = (e) => {
    e.preventDefault();
    const container = document.getElementById("projects-container");

    // DOM stuff start

    // Create div, add class and id
    const divProject = document.createElement("div");
    divProject.classList.add("project");
    divProject.setAttribute("id", count + 1);

    // Handles the highlighting and unhighlighting of the new div
    divProject.addEventListener("click", () => {
      const divPrevSelected = document.querySelector(".highlight");
      // removes highlighting of previous selected div
      if (divPrevSelected) divPrevSelected.classList.remove("highlight");
      // highlights the clicked div
      divProject.classList.add("highlight");
      loadTasks(divProject.id);
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
    const divProjectIcon = document.createElement("div");
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

  const addNewTask = (e) => {
    e.preventDefault();
    const container = document.getElementById("tasks-container");

    const taskTitle = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const notes = document.getElementById("task-notes").value;
    const selectedProject = document.querySelector(".highlight");
    const projectId = selectedProject.getAttribute("id");

    // not Dom stuff below
    const thisTask = taskFactory(projectId, taskTitle, description, notes);
    myTasks.push(thisTask);

    // the taskId is generated in the taskFactory function
    const taskId = thisTask.taskId;
    // not DOM stuff above

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
    // Here, we need to add an event listener individually or run the attach all.
    attachEventListenerToTaskIcons();

    changeDisplayType("none", ["formAddTask", "page-mask-task"]);
  };

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
  btnSubmitProject.addEventListener("click", createProject);
  btnSubmitTask.addEventListener("click", addNewTask);
})();

const myProjects = [];
const myTasks = [];

let count = 0;
const counts = () => {
  count++;
  return count;
};

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

let someElements = [];
function findElements(id) {
  for (let i = 0; i < myTasks.length; i++) {
    if (myTasks[i].projectId === id) {
      someElements.push(myTasks[i]);
    }
  }
  return someElements;
}

function resetTaskElements() {
  someElements = [];
}

function deleteProject(e) {
  // get the projectId
  const test = e.target;
  const testParent = test.parentElement.id;
  const projectId = testParent;
  const projectDiv = test.parentElement;

  // delete project from myProject arrray
  for (let i = 0; i < myProjects.length; i++) {
    // Note the ==
    if (projectId == myProjects[i].id) {
      let indexValue = myProjects.indexOf(myProjects[i]);
      myProjects.splice(indexValue, 1);
    }
  }
  // delete tasks (with projectId) from myTasks array
  for (let i = 0; i < myTasks.length; i++) {
    console.log(myTasks.length);
    if (projectId == myTasks[i].projectId) {
      const indexValue = myTasks.indexOf(myTasks[i]);
      myTasks.splice(indexValue, 1);
      i--;
    }
  }

  // remove project div from the display
  projectDiv.remove();
}

function createTheProject(title) {
  const thisProject = projectFactory(title);
  myProjects.push(thisProject);
}
