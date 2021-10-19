const allNumButtons = Array.from(document.querySelectorAll(".numButton"));
const allOpButtons = Array.from(document.querySelectorAll(".opButton"));
const allOtherButtons = Array.from(document.querySelectorAll(".otherButton"));
const evalButton = document.querySelector(".evalButton");
let outputText = document.getElementById("output");
let lastButton = "";
let reset = false;
let addedDot = false;

allNumButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // if (reset) {
    //   outputText.textContent = event.target.textContent;
    //   reset = false;
    // } else 
    outputText.textContent += event.target.textContent;
    lastButton = "";
  });
});

allOpButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.textContent == "." && !addedDot) {
      outputText.textContent += event.target.textContent;
      addedDot = true;
    } else if (
      outputText.textContent != "" &&
      lastButton != "op" &&
      event.target.textContent != "."
    ) {
      outputText.textContent += event.target.textContent;
      lastButton = "op";
      addedDot = false;
    }
  });
});

allOtherButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.textContent)
    switch (event.target.textContent) {
      case "<=":
        console.log(outputText.textContent[outputText.textContent.length - 1]);
        if (
          outputText.textContent[outputText.textContent.length - 1] == "+" ||
          outputText.textContent[outputText.textContent.length - 1] == "-" ||
          outputText.textContent[outputText.textContent.length - 1] == "*" ||
          outputText.textContent[outputText.textContent.length - 1] == "/"
        ) {
          lastButton = "";
        }
        if (outputText.textContent[outputText.textContent.length - 1] == ".")
          addedDot = false;
        outputText.textContent = Array.from(outputText.textContent)
          .splice(0, outputText.textContent.length - 1)
          .join("");
        break;
      case "C":
        outputText.textContent = "";
        lastButton = "";
        break;
    }
  });
});

evalButton.addEventListener("click", (event) => {
  outputText.textContent = eval(outputText.textContent);
  reset = true;
});

window.addEventListener("keyup", (event) => {
  if (event.key >= 0 && event.key <= 10) {
    outputText.textContent += event.key;
  }
  if (event.key == "Backspace") {
    console.log(outputText.textContent[outputText.textContent.length - 1]);
    if (
      outputText.textContent[outputText.textContent.length - 1] == "+" ||
      outputText.textContent[outputText.textContent.length - 1] == "-" ||
      outputText.textContent[outputText.textContent.length - 1] == "*" ||
      outputText.textContent[outputText.textContent.length - 1] == "/"
    ) {
      lastButton = "";
    }
    if (outputText.textContent[outputText.textContent.length - 1] == ".")
      addedDot = false;
    outputText.textContent = Array.from(outputText.textContent)
      .splice(0, outputText.textContent.length - 1)
      .join("");
  }
});