const btnToggle = document.querySelector(".card-icon-toggle-img");
const targetText = document.querySelector(".c1");

// Add a button on each book’s display to change its read status.

// add event listener to card-icon-toggle img

btnToggle.addEventListener("click", toggleText);

function toggleText(e) {
  console.log(e);

  targetText.outerText = "changed";
}

/* the callback function should:
1) Toggle text of read div
2) Optional: change something in the image div to indicate status
*/
