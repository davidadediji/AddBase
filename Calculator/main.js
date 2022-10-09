let display = document.querySelector("#display .calculate");
let result = document.querySelector("#display .result");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "C") {
      display.innerText = result.innerText = "";
    } else if (e.target.innerText === "←") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (e.target.innerText === "=") {
      try {
        result.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Syntax Error !";
      }
    } else {
      display.innerText += e.target.innerText;
    }
  });
});
