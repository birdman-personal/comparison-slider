document.querySelector(".slider input").addEventListener("input", function() {
  document.querySelector(".slider__ori--img").style.width = this.value + "%";
});
