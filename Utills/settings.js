const loc1 = window.location.href;

console.log(loc1);
const link5 = document.querySelector(".nav__link5");
const icon5 = document.querySelector(".icon5");

if (link5.href === loc1) {
  link5.classList.toggle("active");
  icon5.classList.replace("ri-settings-4-line", "ri-settings-4-fill");
}