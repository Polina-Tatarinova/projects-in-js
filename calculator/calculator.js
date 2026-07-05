const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");
const arrayBtn = Array.from(btns);

arrayBtn.map((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "C":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = "Error";
        }
        break;
      case "±":
        display.innerText = "-"
        break;
      case "%":
        const percentages = display.innerText + "/100";
        display.innerText = eval(percentages);
        break;
      default:
        if (display.innerText === "0" && event.target.innerText !== ".") {
          display.innerText = event.target.innerText;
        } else {
          display.innerText += event.target.innerText;
        }
    }
  });
});
