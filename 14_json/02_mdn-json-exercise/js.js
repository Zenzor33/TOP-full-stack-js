const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";
const request = new Request(requestURL);
const response = await fetch(request);

