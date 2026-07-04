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
        overlay.remove()
      greetingsUser.remove();
      localStorage.setItem("user", "Гость");
    });
  }
}

window.addEventListener("load", showWelcome);
