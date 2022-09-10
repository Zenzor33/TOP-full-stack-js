let myProjects = [];
let myTasks = [];

function changeMyTasks(obj) {
  myTasks = obj;
}

function changeMyProjects(obj) {
  myProjects = obj;
}

function updateMyTasks(obj) {
  myTasks.push(obj);
}

function updateMyProjects(obj) {
  myProjects.push(obj);
}

export {
  myProjects,
  myTasks,
  updateMyProjects,
  updateMyTasks,
  changeMyProjects,
  changeMyTasks,
};
