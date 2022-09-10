/*

1. createProject: 
2. deleteProject

*/

import { changeDisplayType } from "./dom";
import {
  myProjects,
  myTasks,
  updateMyProjects,
  updateMyTasks,
  changeMyProjects,
  changeMyTasks,
} from "./obj";

let count = 0;

const counts = () => {
  count++;
  return count;
};

class Task {
  constructor(projectId, taskTitle, description, notes) {
    this.projectId = projectId;
    this.taskId = counts();
    this.taskTitle = taskTitle;
    this.description = description;
    this.notes = notes;
  }
}

const createTask = (e) => {
  e.preventDefault();
  const taskTitle = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;
  const notes = document.getElementById("task-notes").value;
  const selectedProject = document.querySelector(".highlight");
  const projectId = selectedProject.getAttribute("id");

  const thisTask = new Task(projectId, taskTitle, description, notes);
  updateMyTasks(thisTask);
  console.log(myTasks);
  //   appLogic.myTasks.push(thisTask);
};

const deleteTask = (taskIconId) => {
  const arr = myTasks.filter((task) => taskIconId != task.taskId);
  changeMyTasks(arr);
};

const deleteProject = (elemId) => {
  // delete projects from myProjects that match projectId
  const arr = myProjects.filter((project) => elemId != project.id);
  changeMyProjects(arr);
  // delete tasks (with projectId) from myTasks array
  const arr2 = myTasks.filter((tasks) => elemId != tasks.projectId);
  changeMyTasks(arr2);
};

function Project(id, title) {
  this.id = id;
  this.title = title;
  //   return { id: id, title: varTitle };
}

const createProject = (e) => {
  // pushes project to myProjects and updateProjectDisplay()
  e.preventDefault();
  const userInputField = document.getElementById("project-name");
  const projectName = userInputField.value;
  const tempCounts = counts();
  const thisProjectId = tempCounts;
  const thisProject = new Project(thisProjectId, projectName);
  updateMyProjects(thisProject);
  console.log(myProjects);
};

export { createProject, deleteProject, createTask, deleteTask };
