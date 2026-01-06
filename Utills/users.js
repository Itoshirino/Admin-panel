const loc = window.location.href;

console.log(loc);

const link3 = document.querySelector(".nav__link3");
const icon3 = document.querySelector(".icon3");

if (link3.href === loc) {
  link3.classList.toggle("active");
  icon3.classList.replace("ri-file-user-line", "ri-user-fill");
}
