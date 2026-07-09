function showWelcome() {
  const name = localStorage.getItem("user");
  if (name === null) {
    const overlay = document.createElement("div");
    overlay.classList = "overlay";

    const greetingsUser = document.createElement("div");
    greetingsUser.className = "greetingsUser";
    greetingsUser.innerHTML = `
<p class='hellow'>Добро пожаловать на страницу с моими проектами</p>
<button class='hellowBtn'>перейти к проектам</button>
`;
    overlay.appendChild(greetingsUser);
    document.body.appendChild(overlay);

    const hellowBtn = document.querySelector(".hellowBtn");
    hellowBtn.addEventListener("click", () => {
      overlay.remove();
      greetingsUser.remove();
      localStorage.setItem("user", "Гость");
    });
  }
}

window.addEventListener("load", showWelcome);

const content = document.querySelector(".content");
const div = document.createElement("div");
div.classList = "dateDiv";
div.innerHTML = `
<p class='dateNow'>
</p>
<p class='timeNow'>
</p>
`;
content.prepend(div);

function timeUpdate() {
  const now = new Date();
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth()).padStart(2, '0')
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const second = now.getSeconds();

  const dateNow = document.querySelector(".dateNow");
  const timeNow = document.querySelector(".timeNow");

  dateNow.textContent = `Сегодняшняя дата: ${date}/${month}/${year}`;
  timeNow.textContent = `Время: ${hours}:${minutes}:${second}`
}

timeUpdate();

setInterval(timeUpdate, 1000);