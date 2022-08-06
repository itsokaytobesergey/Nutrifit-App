let offset = -665;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 225;
  if (offset > 10) {
    offset = -665;
  }
  document.getElementsByClassName("slider_line")[0].style.left = offset + "px";
});
document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 225;
  if (offset < -1340) {
    offset = -665;
  }
  document.getElementsByClassName("slider_line")[0].style.left = offset + "px";
});
