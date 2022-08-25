const myProjects = [];
const myTasks = [];

let count = 0;
const counts = () => {
  count++;
  return count;
};

const appLogic = (() => {
  const projectFactory = (title) => {
    this.id = counts();
    this.title = title;
    return { id, title };
  };
  const addProjects = () => {
    //
  };
})();

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

  const updateDisplayProject = (e) => {
    // THIS SHOULD LOOP THROUGH myProjects and create divs!
    const container = document.getElementById("projects-container");
    const divProject = document.createElement("div");
    const divProjectText = document.createElement("div");
    const userInputField = document.getElementById("project-name");
    const projectName = userInputField.value;
    const divProjectIcon = document.createElement("div");

    // Create div, add class and id
    divProject.classList.add("project");
    divProject.setAttribute("id", count + 1);

    // Handles the highlighting and unhighlighting of the new div
    divProject.addEventListener("click", () => {
      const divPrevSelected = document.querySelector(".highlight");
      // removes highlighting of previous selected div
      if (divPrevSelected) divPrevSelected.classList.remove("highlight");
      // highlights the clicked div
      divProject.classList.add("highlight");
      //   loadTasks(divProject.id); -- VIOLATES SEP OF CONCERNS
    });

    // Styles the font of text in the div
    divProjectText.classList.add("project-text");

    // Gets user input value for project name and stores in div's text.
    divProjectText.innerText = projectName;

    // Creates trash icon and adds event listener
    divProjectIcon.classList.add("project-icon");
    divProjectIcon.innerText = "[trash-icon]";
    // divProjectIcon.addEventListener("click", deleteProject);

    divProject.appendChild(divProjectText);
    divProject.appendChild(divProjectIcon);
    container.appendChild(divProject);
  };

  const createProject = (e) => {
    e.preventDefault();
    updateDisplayProject();
    changeDisplayType("none", ["popup-project", "page-mask-project"]); // removes popup
  };
  return { createProject, changeDisplayType };
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
  btnSubmitProject.addEventListener("click", displayController.createProject);
  //   btnSubmitTask.addEventListener("click", addNewTask);
})();
