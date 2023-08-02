const top_elem = document.querySelector(".top");
const lvl = document.querySelectorAll(".lvl-input");
const startButton = document.querySelector(".start-game-button");
const menu = document.querySelector(".menu");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    top_elem.innerHTML = "";
    top_elem.appendChild(gameHeader);
    if (window.level === "1") {
      console.log("1");
    } else if (window.level === "2") {
      console.log("2");
    } else {
      console.log("3");
    }
  });