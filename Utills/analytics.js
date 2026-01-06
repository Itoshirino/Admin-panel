const loc1 = window.location.href;

console.log(loc1);
const link4 = document.querySelector(".nav__link4");
const icon4 = document.querySelector(".icon4");

if (link4.href === loc1) {
  link4.classList.toggle("active");
  icon4.classList.replace("ri-bar-chart-2-line", "ri-bar-chart-2-fill");
}