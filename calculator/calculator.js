const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");
const arrayBtn = Array.from(btns);

const localStoreData = localStorage.getItem("display");
if (localStoreData === null) {
  display.innerText = "0";
} else{
    display.innerText = localStoreData;
}

arrayBtn.map((button) => {
  button.addEventListener("click", (event) => {
    
      switch (event.target.innerText) {
        case "C":
          display.innerText = "0";
          localStorage.setItem('display', display.innerText);
          break;
        case "=":
          try {
            display.innerText = eval(display.innerText);
            localStorage.setItem("display", display.innerText);
          } catch (error) {
            display.innerText = "Error";
            localStorage.setItem("display", display.innerText);
          }
          break;
        case "±":
          display.innerText = "-";
          localStorage.setItem("display", display.innerText);
          break;
        case "%":
          const percentages = display.innerText + "/100";
          display.innerText = eval(percentages);
          localStorage.setItem("display", display.innerText);
          break;
        default:
          if (display.innerText === "0" && event.target.innerText !== ".") {
            display.innerText = event.target.innerText;
            localStorage.setItem("display", display.innerText);
          } else {
            display.innerText += event.target.innerText;
            localStorage.setItem("display", display.innerText);
          }
      }
  });
});
