const rangeBtns = document.querySelectorAll("#rangeBtn");

rangeBtns.forEach((rangeBtn) => {
  const imageBlock = rangeBtn.closest(".image-block");
  const imageAfter = imageBlock.querySelector(".image-after");
  const imgTwo = imageAfter.querySelector(".img");

  imgTwo.style.width = "500px";
  imgTwo.style.height = "500px";

  function changingImage() {
    const sliderValue = rangeBtn.value;
    imageAfter.style.width = sliderValue + "%";
  }

  rangeBtn.addEventListener("input", changingImage);

  changingImage();
});
