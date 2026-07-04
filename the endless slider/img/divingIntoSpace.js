//тут есть баги по зависанию при перезагрузки и баг с вечным скроллом(позже вернуться)

//бесконечный скролл
const shell = document.querySelector(".shell");
const copyContainer = document.querySelector(".copyContainer");

//localStorage
document.addEventListener("DOMContentLoaded", () => {
setTimeout(()=>{
    const localScroll = localStorage.getItem("scroll");
  if (localScroll !== null) {
    const position = parseInt(localScroll, 10);
    if(!isNaN(position) && position>=0){
        copyContainer.scrollLeft = position
    }
  }
}, 100)
});

function wheel(event) {
  event.preventDefault();
  const delta = event.deltaY;
  copyContainer.scrollLeft += delta;
  localStorage.setItem("scroll", copyContainer.scrollLeft);
}
shell.addEventListener("wheel", wheel, { passive: false });

const clone = shell.cloneNode(true);
copyContainer.appendChild(clone);
clone.addEventListener("wheel", wheel, { passive: false });

copyContainer.addEventListener("scroll", () => {
  if (copyContainer.scrollLeft >= copyContainer.scrollWidth / 2) {
    copyContainer.scrollLeft = 0;
    localStorage.setItem("scroll", copyContainer.scrollLeft);
  }
});

//цитата 1
const anotherWorld = document.querySelector(".anotherWorld");
function handleClick() {
  const nextElement = anotherWorld.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList.contains("template") &&
    nextElement.tagName === "DIV"
  ) {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
      <h1 class="h1">Карл Саган</h1>
      <p class="p">«Космос — это всё, что есть, что когда-либо было и когда-либо будет. Одно созерцание космоса потрясает: дрожь бежит по спине, перехватывает горло, и появляется чувство, слабое, как смутное воспоминание, будто падаешь с высоты»</p>
    `;
    anotherWorld.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
anotherWorld.addEventListener("click", handleClick);

//цитата 2
const astronaut = document.querySelector(".astronaut");
function quoteFromAstronaut() {
  const nextElement = astronaut.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList.contains("template") &&
    nextElement.tagName === "DIV"
  ) {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Станислав Лем</h1>
    <p class='p'>«Сколько жутких загадок, чуждых человеческому пониманию, таит ещё космос? Неужели мы всюду должны являться, неся всеуничтожающую силу на своих кораблях, чтобы вдребезги расколотить всё, что противоречит нашим понятиям?». Или другая его мысль: «Космического диалога не будет. В космосе возможны лишь монологи»</p>
    `;
    astronaut.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}

astronaut.addEventListener("click", quoteFromAstronaut);

//цитата 3
const creation = document.querySelector(".creation");
function addingCreationQuote() {
  const nextElement = creation.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList.contains("template") &&
    nextElement.tagName === "DIV"
  ) {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
<h1 class='h1'>Нил Деграсс Тайсон</h1>
<p class='p'>«Мы — это не просто куски материи; мы — содержимое звёзд. Мы сделаны из звёздной пыли, и, по сути, мы — космос, осознающий себя».</p>
`;
    creation.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}

creation.addEventListener("click", addingCreationQuote);

//цитата 3
const diving = document.querySelector(".diving");
function addingDivingQuote() {
  const nextElement = diving.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList.contains("template") &&
    nextElement.tagName === "DIV"
  ) {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
<h1 class='h1'>Константин Циолковский</h1>
<p class='p'>«Человечество не останется вечно на Земле, но в погоне за светом и пространством сначала робко проникнет за пределы атмосферы, а затем завоюет себе все околосолнечное пространство.»</p>
`;
    diving.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
diving.addEventListener("click", addingDivingQuote);

//цитата 4
const multiverse = document.querySelector(".multiverse");
function addingMultiverseQuote() {
  const nextElement = multiverse.nextElementSibling;
  if (nextElement.classList.contains("template")) {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Блез Паскаль</h1>
    <p class='p'>«Меня ужасает вечное безмолвие этих пространств»</p>
    `;
    multiverse.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
multiverse.addEventListener("click", addingMultiverseQuote);

//цитата 5
const otherWorld = document.querySelector(".otherWorld");
function addingOtherWorld() {
  const nextElement = otherWorld.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Карл Саган</h1>
    <p class='p'>«Космос есть внутри нас, мы сделаны из звёздного вещества, мы — это способ, которым Космос познаёт себя»</p>
    `;
    otherWorld.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}

otherWorld.addEventListener("click", addingOtherWorld);

//цитата 6
const outerSpace = document.querySelector(".outerSpace");
function addingOuterSpace() {
  const nextElement = outerSpace.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Стивен Хокинг</h1>
    <p class='p'>«Смотрите на звёзды, а не под ноги. Стремитесь понять то, что видите, и задавайте себе вопросы. Будьте любопытными». Или другая: «Мы должны попытаться понять начало Вселенной с научной точки зрения. Это может быть задачей, выходящей за рамки наших возможностей, но мы должны хотя бы попробовать»</p>
    `;
    outerSpace.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
outerSpace.addEventListener("click", addingOuterSpace);

// цитата 7
const space = document.querySelector(".space");
function addingSpace() {
  const nextElement = space.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
<h1 class='h1'>Антуан де Сент-Экзюпери</h1>
<p class='p'>«Мы все уносимся вдаль на одной и той же планете — мы экипаж одного корабля»</p>
`;
    space.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
space.addEventListener("click", addingSpace);

//цитата 8
const spaceMan = document.querySelector(".spaceman");
function addingSpaceMan() {
  const nextElement = spaceMan.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Гераклит Эфесский</h1>
    <p class='p'>«Космос не создал никто из богов, никто из людей, но он всегда был, есть и будет вечно живой огонь, мерно возгорающийся, мерно угасающий»</p>
    `;
    spaceMan.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
spaceMan.addEventListener("click", addingSpaceMan);

//цитата 9
const universe = document.querySelector(".universe");
function addingUniverse() {
  const nextElement = universe.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Станислав Лем</h1>
    <p class='p'>«Подумай, мы назвали все звёзды и планеты, а может, у них уже были свои имена?»</p>
    `;
    universe.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
universe.addEventListener("click", addingUniverse);

//цитата 10

const world = document.querySelector(".world");
function addingWorld() {
  const nextElement = world.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Рэй Брэдбери</h1>
    <p class='p'>«В космосе нет времён года: нет зимы и лета, нет весны и осени. Нет здесь какого-то конкретного вечера или утра, а есть только космос и более ничего»</p>
    `;
    world.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
world.addEventListener("click", addingWorld);

//цитата 11
const waltz = document.querySelector(".waltz");
function addingWaltz() {
  const nextElement = waltz.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Анатоль Франс</h1>
    <p class='p'>«Если бы мы познали все тайны Вселенной, мы тотчас впали бы в неизлечимую скуку»</p>
    `;
    waltz.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
waltz.addEventListener("click", addingWaltz);

//цитата 12
const oxygen = document.querySelector(".oxygen");
function addingOxygen() {
  const nextElement = oxygen.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Эрленд Лу</h1>
    <p class='p'>«Если космос располагает безграничным запасом времени, это не просто означает, что может произойти всё, что угодно. Это означает, что всё когда-нибудь действительно произойдёт»</p>
    `;
    oxygen.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
oxygen.addEventListener("click", addingOxygen);

//цитата 13

const air = document.querySelector(".air");
function addingAir() {
  const nextElement = air.nextElementSibling;
  if (nextElement.tagName === "DIV") {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Харуки Мураками</h1>
    <p class='p'>«В сравнении со сложностью космоса наш мир подобен мозгам дождевого червя»</p>
    `;
    air.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
air.addEventListener("click", addingAir);

//цитата 14
const lastChance = document.querySelector(".lastChance");
function addingLastChance() {
  const nextElement = lastChance.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList.contains("template") &&
    nextElement.tagName === "DIV"
  ) {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Карл Саган</h1>
    <p class='p'>«Вселенная — довольно большое место. Если в ней только мы, она кажется ужасно пустой тратой пространства»</p>
    `;
    lastChance.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
lastChance.addEventListener("click", addingLastChance);

//цитата 15
const spaceWorld = document.querySelector(".spaceWorld");
function addingSpaceWorld() {
  const nextElement = spaceWorld.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList.contains("template") &&
    nextElement.tagName === "DIV"
  ) {
    nextElement.remove();
  } else {
    const card = document.createElement("div");
    card.className = "template";
    card.innerHTML = `
    <h1 class='h1'>Урсула Ле Гуин</h1>
    <p class='p'>«Космос оказался гораздо больше, чем нам бы хотелось»</p>
    `;
    spaceWorld.after(card);
    setTimeout(() => {
      card.remove();
    }, 10000);
  }
}
spaceWorld.addEventListener("click", addingSpaceWorld);
