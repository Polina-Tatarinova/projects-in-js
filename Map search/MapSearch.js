// Функция должна быть доступна глобально
async function initMap() {
  try {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(document.getElementById("map"), {
      location: {
        center: [37.588144, 55.733842],
        zoom: 10,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer());
    console.log("Карта успешно загружена!");
  } catch (error) {
    console.error("Ошибка загрузки карты:", error);
  }
}

// Запускаем функцию при загрузке страницы
window.onload = function () {
  initMap();
};
