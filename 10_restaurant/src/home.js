const createHeaderTab = (div, classe, textNode) => {
  const header = document.querySelector(".header");
  div.classList.add(classe);
  let text = document.createTextNode(textNode);
  div.appendChild(text);
  header.appendChild(div);
};

const generateHome = () => {
  const content = document.querySelector("#content");

  // // HEADER

  let header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  // header tabs

  // home
  const home = document.createElement("div");
  createHeaderTab(home, "headerTab", "Home");

  // Menu
  const menu = document.createElement("div");
  createHeaderTab(menu, "headerTab", "Menu");

  // Contact
  const contact = document.createElement("div");
  createHeaderTab(contact, "headerTab", "Contact");

  // // BODY
  const body = document.createElement("div");
  body.classList.add("body");
  content.appendChild(body);

  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("bodyContainer");
  body.appendChild(bodyContainer);

  const displayTitleContainer = document.createElement("div");
  displayTitleContainer.classList.add("display-title-container");
  bodyContainer.appendChild(displayTitleContainer);
};

export default generateHome;
