//ЗАДАЧА 1 
const table = document.querySelector("#diagonalTable");
table.rows[0].cells[0].style.backgroundColor = "red";
table.rows[1].cells[1].style.backgroundColor = "red";
table.rows[2].cells[2].style.backgroundColor = "red";
table.rows[3].cells[3].style.backgroundColor = "red";
table.rows[4].cells[4].style.backgroundColor = "red";

//ЗАДАЧА 2

/*
Как найти?…
• Таблицу с id="age-table".
• Все элементы label внутри этой таблицы (их три).
• Первый td в этой таблице (со словом «Age»).
• Форму form с именем name="search".
• Первый input в этой форме.
• Последний input в этой форме.
*/

//Таблицу с id="age-table".
const ageTable = document.querySelector("#age-table");
// Все элементы label внутри этой таблицы (их три).
const label = document.querySelectorAll('#label')
//Первый td в этой таблице (со словом «Age»)
const age = document.querySelector("#age");
//Форму form с именем name="search"
const search = document.querySelector("#search");
//Первый input в этой форме.
const firstInput = search.querySelector("input");
//Последний input в этой форме
const lastInput = search.querySelector("#lastInput");

// задача 3
const links = document.querySelectorAll('#href')
links.forEach(link=>{
    const href = link.getAttribute('href')
    if(href && href.includes('://') && !href.startsWith('http://internal.com')){
        link.style.color = 'orange'
    }
}
)

//ЗАДАЧА 4

document.addEventListener('DOMContentLoaded', function() {
  let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };

  function createTree(container, data) {
    container.innerHTML = '';
    const ul = document.createElement('ul');
    ul.style.margin = '0';
    ul.style.paddingLeft = '20px';
    ul.style.listStyleType = 'disc';
    function buildTree(obj, parent, isRoot = false) {
      for (let key in obj) {
        const li = document.createElement('li');
        li.textContent = key;
        li.style.margin = '5px 0';
        if (isRoot) {
          li.style.fontWeight = 'bold';
        }
        
        if (Object.keys(obj[key]).length > 0) {
          const childUl = document.createElement('ul');
          childUl.style.margin = '5px 0';
          childUl.style.paddingLeft = '20px';
          childUl.style.listStyleType = 'circle';
          buildTree(obj[key], childUl, false);
          li.appendChild(childUl);
        }
        
        parent.appendChild(li);
      }
    }
    
    buildTree(data, ul, true);
    container.appendChild(ul);
  }

  const container = document.getElementById('container');
  createTree(container, data);
});