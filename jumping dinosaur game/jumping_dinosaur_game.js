//фоновый звук
const audio1 = new Audio("./music/dino-roar.mp3");
const audio2 = new Audio("./music/dinosaur-cry.mp3");
const audio3 = new Audio("./music/dinosaur-looking-for-a-prey.mp3");
const audio4 = new Audio("./music/eerie-dinosaur-howl-with-echo.mp3");
const audio5 = new Audio("./music/shocking-dinosaurs-below-4.mp3");
const audio6 = new Audio("./music/the-lingering-cry-of-a-wounded-dinosaur.mp3");
const audio7 = new Audio("./music/the-roar-of-a-dinosaur-in-the-distance.mp3");
let intervals = [];
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  if (button.classList.contains("active") === true) {
    button.textContent = "Выключить звук";
    startAllSounds();
  } else {
    button.textContent = "Включить звук";
     stopAllSounds();
  }
});

function startAllSounds() {
  stopAllSounds();

  intervals.push(
    setInterval(() => {
      audio1.volume = 0.5;
      audio1.play();
    }, 5000)
  );

  intervals.push(
    setInterval(() => {
      audio2.volume = 0.9;
      audio2.play();
    }, 17000)
  );

  intervals.push(
    setInterval(() => {
      audio3.volume = 0.3;
      audio3.play();
    }, 10000)
  );

  intervals.push(
    setInterval(() => {
      audio4.volume = 0.3;
      audio4.play();
    }, 9000)
  );

  intervals.push(
    setInterval(() => {
      audio5.volume = 1.0;
      audio5.play();
    }, 6000)
  );

  intervals.push(
    setInterval(() => {
      audio6.volume = 0.2;
      audio6.play();
    }, 9000)
  );

  intervals.push(
    setInterval(() => {
      audio7.volume = 0.8;
      audio7.play();
    }, 20000)
  );
}

function stopAllSounds() {
  intervals.forEach((interval) => clearInterval(interval));
  intervals = [];

  [audio1, audio2, audio3, audio4, audio5, audio6, audio7].forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// поменять фон
const body = document.querySelector('body')
const buttonFon = document.querySelector(".buttonFon");
buttonFon.addEventListener("click", () => {
  body.classList.toggle("buttonFonActive");
});

//реализация самой игры
