const helpBtn = document.getElementById('helpBtn');
const helpBox = document.getElementById('helpBox');
const logoutBtn = document.querySelector(".logout");
const Logout = () => {
  setTimeout(() => {
    localStorage.removeItem("token");
    window.location.href = "../index.html";
  }, 800);
};

if (logoutBtn) {
  logoutBtn.addEventListener("click", Logout);
}

helpBtn.addEventListener('click', () => {
  helpBox.classList.toggle('hidden');
});



const loc1 = window.location.href;

console.log(loc1);
const link6 = document.querySelector(".nav__link6");
const icon6 = document.querySelector(".icon6");

if (link6.href === loc1) {
  link6.classList.toggle("active");
  icon6.classList.replace("ri-question-line", "ri-question-fill");
}