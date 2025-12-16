const elForm = document.querySelector(".form");
const api = `https://fakestoreapi.com/auth/login`;
const btn = document.querySelector(".form__btn");
const loginBtn = document.querySelector(".btn");
document.querySelector(".password__icon").addEventListener("click", () => {
  const passwd = document.querySelector(".passwd");
  const icon = document.querySelector(".passwd__icon");
  if (passwd.type === "password") {
    passwd.type = "text";
    icon.classList.remove("ri-eye-line");
    icon.classList.add("ri-eye-off-line");
  } else {
    passwd.type = "password";
    icon.classList.remove("ri-eye-off-line");
    icon.classList.add("ri-eye-line");
  }
});

btn.addEventListener("click", () => {
  Toastify({
    text: `Username: derek 
     Password: jklg*_56`,
    duration: 7000,
    style: {
      background: "linear-gradient(to right, #b00000ff, red)",
    },
  }).showToast();
});

loginBtn.addEventListener("click", () => {
  if (elForm["username"].value === "" || elForm["password"].value === "") {
    Toastify({
      text: `Please fill the inputs`,
      duration: 7000,
      style: {
        background: "linear-gradient(to right, #b00000ff, red)",
      },
    }).showToast();
    return;
  }
});
const handleSubmit = (e) => {
  e.preventDefault();

  const username = elForm["username"].value.trim();
  const password = elForm["password"].value.trim();
  const user = {
    username,
    password,
  };

  axios.post(api, user).then((data) => {
    const token = data.data.token;

    localStorage.setItem("token", token);

    window.location.href = "../Pages/dashboard.html";
  });
};

elForm.addEventListener("submit", handleSubmit);
