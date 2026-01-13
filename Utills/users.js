const loc = window.location.href;

console.log(loc);

const link3 = document.querySelector(".nav__link3");
const icon3 = document.querySelector(".icon3");

if (link3.href === loc) {
  link3.classList.toggle("active");
  icon3.classList.replace("ri-account-box-line", "ri-account-box-fill");
}

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
