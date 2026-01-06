const elForm = document.querySelector(".form");
const api = "https://fakestoreapi.com/auth/login";
const adminBtn = document.querySelector(".form__btn");
const userBtn = document.querySelector(".form__btn2");
const loginBtn = document.querySelector(".btn");
const securityForm = document.querySelector(".security");
const securityBtn = document.querySelector(".security__btn");
const exitBtn = document.querySelector(".security__btn2");
const securityInput = document.querySelector(".security__input");
const userInput = document.querySelector(".username");
const passwd = document.querySelector(".passwd");
const passwordIcon = document.querySelector(".passwd__icon");

exitBtn.addEventListener("click", () => {
  securityForm.style.display = "none";
  elForm.style.display = "block";
});

passwordIcon.addEventListener("click", (e) => {
  e.preventDefault();

  if (passwd.type === "password") {
    passwd.type = "text";
    passwordIcon.classList.replace("ri-eye-line", "ri-eye-off-line");
  } else {
    passwd.type = "password";
    passwordIcon.classList.replace("ri-eye-off-line", "ri-eye-line");
  }
});

securityBtn.addEventListener("click", () => {
  if (securityInput.value.trim() === "admin") {
    Toastify({
      text: "Success! Please wait...",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    setTimeout(() => {
      securityForm.style.display = "none";
      elForm.style.display = "block";

      userInput.value = "derek";
      passwd.value = "jklg*_56";
      securityInput.value = "";
    }, 1000);
  } else {
    Toastify({
      text: "Wrong Security Key!",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #b00000, red)",
      },
    }).showToast();

    securityInput.value = "";
  }
});

adminBtn.addEventListener("click", () => {
  securityForm.style.display = "block";
  elForm.style.display = "none";
});

userBtn.addEventListener("click", () => {
  Toastify({
    text: "For User Login",
    duration: 3000,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();

  userInput.value = "user";
  passwd.value = "user123";
});

const deleteProducta = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        const elItems = document.querySelectorAll(".table-light");
        elItems[id - 1].classList.add("none");
      }
    });
};

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = userInput.value.trim();
  const password = passwd.value.trim();
  if (!username || !password) {
    Toastify({
      text: "Please fill the inputs",
      duration: 3000,
      style: { background: "red" },
    }).showToast();
    return;
  }

  if (username === "derek" && password === "jklg*_56") {
    Toastify({
      text: "Admin login success",
      duration: 2000,
      style: { background: "green" },
    }).showToast();

    setTimeout(() => {
      window.location.href = "../Pages/dashboard.html";
    }, 500);
    return;
  }

  if (username === "user" && password === "user123") {
    Toastify({
      text: "User login success",
      duration: 2000,
      style: { background: "green" },
    }).showToast();

    setTimeout(() => {
      window.location.href = "./Pages/user.html";
    }, 500);
    return;
  }

  Toastify({
    text: "Username or password is incorrect",
    duration: 3000,
    style: { background: "red" },
  }).showToast();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});




