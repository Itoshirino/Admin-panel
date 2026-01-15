const api = "https://fakestoreapi.com/carts";
const elTbody = document.querySelector(".table__body");
const logoutBtn = document.querySelector(".logout");
const modal = document.querySelector(".show-product");
const cancel = document.querySelector(".modal__close");
const editModal = document.querySelector(".edit__modal");
const cancelBtnEdit = document.querySelector(".edit__cancel1");
const editBtn = document.querySelector(".edit");
editModal.style.display = "none";

const Logout = () => {
  setTimeout(() => {
    localStorage.removeItem("token");
    window.location.href = "../index.html";
  }, 800);
};

if (logoutBtn) {
  logoutBtn.addEventListener("click", Logout);
}

function innerCarts(product) {
  elTbody.innerHTML = "";

  product.map(({ id, date, userId, products }, index) => {
    elTbody.innerHTML += `
          <tr>
            <td>${id}</td>
            <td >${date}</td>
            <td >${userId}</td>
            <td >${products[0].quantity}</td>
            <td class="action__buttons">
              <button onclick="openModal(${id})" class="view">
                <i class="ri-feedback-fill"></i> View
              </button>
              <button onclick="deleteProduct(${id})" class="delete">
                <i class="ri-delete-bin-line"></i> Delete
              </button>
              <button class="edit">
              <i class="ri-pencil-line"></i> Edit
            </button>
            </td>
          </tr>`;
  });
  document.querySelectorAll(".edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      editModal.style.display = "flex";
    });
  });
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
}

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

fetch(api, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((product) => {
    innerCarts(product);
    console.log(product);
  });

const getData = async (url) => {
  try {
    const request = await axios.get(url);

    innerCarts(request.data);
  } catch (error) {
    console.error(error);
  }
  getData(api);
};

const loc1 = window.location.href;

console.log(loc1);
const link2 = document.querySelector(".nav__link2");
const icon2 = document.querySelector(".icon2");

if (link2.href === loc1) {
  link2.classList.toggle("active");
  icon2.classList.replace("ri-box-3-line", "ri-box-3-fill");
}

const viewButton = document.querySelector(".view");

async function openModal(id) {
  modal.innerHTML = "";
  modal.classList.remove("hidden");

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await res.json();
    const { title, price, category, image } = data;

    modal.innerHTML = `
      <div style="
        background: #1a1a2e;
        color: #f0f0f5;
        padding: 20px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        max-width: 400px;
        width: 90%;
        margin: -275px auto;
        display: flex;
        flex-direction: column;
        gap: 12px;
        text-align: center;
      " class="modal__content">
        <h1 style="
          font-size: 22px;
          font-weight: 700;
          margin: 0;
          color: #ffd166;
        " class="modal__title">Title: ${title}</h1>

        <p style="
          font-size: 16px;
          font-weight: 500;
          color: #06d6a0;
          margin: 0;
        " class="modal__category">Category: ${category}</p>

        <p style="
          font-size: 18px;
          font-weight: 600;
          color: #ef476f;
          margin: 0;
        " class="modal__price">Price: $${price}</p>

        <img style="
          width: 100%;
          max-width: 120px;
          border-radius: 8px;
          object-fit: contain;
          align-self: center;
          margin-top: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        " class="modal__image" src="${image}" alt="" />
      </div>
      <button onclick="closeModal()" style="
       background: #ef476f;
  color: #fff;
  border: none;
  font-size: 24px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    left: 55%;
    bottom: -130px;
    
      " class="modal__close">Close</button>
    `;
  } catch (error) {
    console.error(error);
  }
}
function closeModal() {
  modal.classList.toggle("hidden");
  modal.innerHTML = "";
}
