const loc = window.location.href;
const elBody = document.querySelector(".table__body");
const api = "https://fakestoreapi.com/users";
const editModal = document.querySelector(".edit__modal");
const cancelBtnEdit = document.querySelector(".task__cancel1");

editModal.style.display = "none";

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

function innerData(product) {
  elBody.innerHTML = "";
  product.map(({ id, username, email, password }, index) => {
    elBody.innerHTML += `
         <td>${id}</td>
                  <td>${username}</td>
                  <td>${email}</td>
                  <td>${password}</td>
                  <td class="action__buttons">
                    <button class="edit__btn">
                      <i class="ri-pencil-line"></i> Edit
                    </button>
                    <button onclick="deleteProduct(${id})" class="delete">
                <i class="ri-delete-bin-line"></i> Delete
              </button>

                  </td>`;
  });
  document.querySelectorAll(".edit__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      editModal.style.display = "flex";
    });
  });
}
  document.querySelectorAll(".task__create1").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (editModal) {
        Toastify({
          text: "Edited Successfully",
          duration: 2000,
          gravity: "top",
          position: "center",
          style: {
            background: "linear-gradient(to right, #96c93d, #00b038ff)",
          },
        }).showToast();
        editModal.style.display = "none";
      }
    });
  });
  document.querySelectorAll(".task__cancel1").forEach((btn) => {
    btn.addEventListener("click", () => {
      editModal.style.display = "none";
    });
  });


async function deleteProduct(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    Toastify({
      text: "Product deleted",
      duration: 2000,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #b00000, red)",
      },
    }).showToast();
  } catch (error) {
    console.error(error);
  }
}

fetch(api)
  .then((response) => response.json())
  .then((product) => {
    innerData(product);
  });

const getData = async (url) => {
  try {
    const request = await axios.get(url);
    innerData(request.data);
  } catch (error) {
    console.error(error);
  }
  getData(api);
};
