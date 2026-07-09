const horizontalLine = document.querySelector(".horizontal-line");
const verticalLine = document.querySelector(".vertical-line");
const robocopWrapper = document.querySelector(".robocopWrapper");

const audio = new Audio("./music/выстрел.mp3");

function mouseTracking(event) {
  const coordinatesElement = robocopWrapper.getBoundingClientRect();
  const x = event.clientX - coordinatesElement.left;
  const y = event.clientY - coordinatesElement.top;

  verticalLine.style.left = x + "px";
  horizontalLine.style.top = y + "px";
}

robocopWrapper.addEventListener("mousemove", mouseTracking);


robocopWrapper.addEventListener("click", (event) => {
  audio.currentTime = 0;
  audio.volume = 1.0;
  audio.play();
//НИЖЕ КОД ДИПСИКА МОЙ ВОТ ДОСЮДОВА , ДИПСИКА ПОПРОСИЛА ЧИСТО ВЗРЫВ СДЕЛАТЬ ПРИ ВЫСТРЕЛЕ до 22-ой строчки включительно мой код, остальное это чисто для визуала уже нейронка сделала по запросу
  // 2. Получаем координаты для эффекта
  const x = event.clientX;
  const y = event.clientY;

  // 3. Создаем взрыв (основной эффект)
  createBlastEffect(x, y);

  // 4. Создаем вспышку
  createFlashEffect(x, y);

  // 5. Создаем искры
  createSparksEffect(x, y);

  // 6. Тряска экрана
  shakeScreen();
});

// Функция 1: Взрыв (основной круг)
function createBlastEffect(x, y) {
  const blast = document.createElement("div");
  blast.style.cssText = `
        position: fixed;
        left: ${x - 30}px;
        top: ${y - 30}px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: radial-gradient(circle, 
            rgba(255, 200, 0, 0.9) 0%, 
            rgba(255, 100, 0, 0.6) 40%, 
            rgba(255, 0, 0, 0.3) 70%, 
            transparent 100%
        );
        pointer-events: none;
        z-index: 1000;
        animation: blastAnim 0.6s ease-out forwards;
        box-shadow: 0 0 50px rgba(255, 200, 0, 0.8);
    `;
  document.body.appendChild(blast);

  setTimeout(() => blast.remove(), 600);
}

// Функция 2: Вспышка (белый круг)
function createFlashEffect(x, y) {
  const flash = document.createElement("div");
  flash.style.cssText = `
        position: fixed;
        left: ${x - 100}px;
        top: ${y - 100}px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(255, 255, 255, 0.3) 50%, 
            transparent 100%
        );
        pointer-events: none;
        z-index: 999;
        animation: flashAnim 0.3s ease-out forwards;
    `;
  document.body.appendChild(flash);

  setTimeout(() => flash.remove(), 300);
}

// Функция 3: Искры (много маленьких частиц)
function createSparksEffect(x, y) {
  const colors = ["#FFD700", "#FF6B00", "#FF0000", "#FFAA00", "#FFFFFF"];
  const sparkCount = 20;

  for (let i = 0; i < sparkCount; i++) {
    const spark = document.createElement("div");
    const angle = Math.random() * 2 * Math.PI;
    const distance = 50 + Math.random() * 100;
    const size = 3 + Math.random() * 6;
    const color = colors[Math.floor(Math.random() * colors.length)];

    spark.style.cssText = `
            position: fixed;
            left: ${x - size / 2}px;
            top: ${y - size / 2}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${color};
            pointer-events: none;
            z-index: 1001;
            box-shadow: 0 0 5px ${color};
            animation: sparkAnim ${0.3 + Math.random() * 0.5}s ease-out forwards;
            --angle: ${angle}rad;
            --distance: ${distance}px;
        `;
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 800);
  }
}

// Функция 4: Тряска экрана
function shakeScreen() {
  const intensity = 5;
  const duration = 100;
  const startTime = Date.now();

  function shake() {
    const elapsed = Date.now() - startTime;
    if (elapsed >= duration) {
      document.body.style.transform = "translate(0, 0)";
      return;
    }

    const x = (Math.random() - 0.5) * intensity * 2;
    const y = (Math.random() - 0.5) * intensity * 2;
    document.body.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(shake);
  }

  shake();
}
