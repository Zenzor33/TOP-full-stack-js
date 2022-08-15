import home from "./home";
import menu from "./menu";

const body = document.querySelector(".body");

home();

const headerHome = document.getElementById("home");
headerHome.addEventListener("click", () => {
  body.innerHTML = "";
  home();
  console.log("home rendered");
});

const headerMenu = document.getElementById("menu");
headerMenu.addEventListener("click", () => {
  body.innerHTML = "";
  menu();
  console.log("menu rendered");
});
