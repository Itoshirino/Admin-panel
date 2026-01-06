const helpBtn = document.getElementById('helpBtn');
const helpBox = document.getElementById('helpBox');

helpBtn.addEventListener('click', () => {
  helpBox.classList.toggle('hidden');
});



const loc1 = window.location.href;

console.log(loc1);
const link6 = document.querySelector(".nav__link6");
const icon6 = document.querySelector(".icon6");

if (link6.href === loc1) {
  link6.classList.toggle("active");
  icon6.classList.replace("ri-box-3-line", "ri-box-3-fill");
}