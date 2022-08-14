import home from "./home";
import menu from "./menu";

home();

const headerHome = document.getElementById("home");
headerHome.addEventListener("click", () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  home();
  console.log("home rendered");
});

const headerMenu = document.getElementById("menu");
