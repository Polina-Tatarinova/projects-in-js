const inputText = document.querySelector('#text')
const inputPassword = document.querySelector("#password");
const btn = document.querySelector('.butn')

btn.addEventListener("click", () => {
    const login = inputText.value
    const password = inputPassword.value
    if (login === "Projects_Polina" && password === "Projects0909123"){
        window.location = "./projectsLists.html";
    } else {
        alert('Пароль или логин не верны, проверьте введёные данные')
    }
  });
