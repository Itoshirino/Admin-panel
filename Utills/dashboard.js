const logoutBtn = document.querySelector(".logout");
const editBtn = document.querySelector(".edit");

editBtn.addEventListener("click", () => {
  alert("Edit function is not working now.");
});

const Logout = () => {
  setTimeout(() => {
    localStorage.removeItem("token");
    window.location.href = "../index.html";
  }, 800);
};

if (logoutBtn) {
  logoutBtn.addEventListener("click", Logout);
}

const api = "https://fakestoreapi.com/products";
const elBody = document.querySelector(".table__body");

fetch(api)
  .then((response) => response.json())
  .then((product) => {
    innerData(product);
  });

function innerData(product) {
  elBody.innerHTML = "";

  product.map(({ id, title, price, image, category, description }, index) => {
    elBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${title}</td>
          <td>${category}</td>
          <td>${description}...</td>
          <td>$${price}</td>
          <td>
            <img src="${image}" width="60" height="60" style="object-fit:contain;">
          </td>
          <td class="action__buttons">
            <button class="delete" onclick="deleteProduct(${id})">
              <i class="ri-delete-bin-line"></i> Delete
            </button>
             <button class="edit">
                      <i class="ri-pencil-line"></i> Edit
                    </button>
          </td>
        </tr>
      `;
  });
}
function deleteProduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      console.log(res);
    })
    .then((data) => {
      Toastify({
        text: "Product deleted",
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #b00000, red)",
        },
      }).showToast();

      console.log(data);
    });
}

const modal = document.querySelector(".modal");
const createBtn = document.querySelector(".create__btn");
const taskCreateBtn = document.querySelector(".task__create");
const cancelBtn = document.querySelector(".task__cancel");
const deleteBtn = document.querySelector(".delete");

modal.style.display = "none";

const Create = () => {
  modal.style.display = "flex";
};

if (createBtn) {
  createBtn.addEventListener("click", Create);
}

const cancel = () => {
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.add("none");
  }, 800);
};

if (cancelBtn) {
  cancelBtn.addEventListener("click", cancel);
}
const Delete = () => {
  setTimeout(() => {
    if (tr) {
      tr.remove();
    }
  }, 800);
};
if (deleteBtn) {
  deleteBtn.addEventListener("click", Delete);
}

taskCreateBtn.addEventListener("click", () => {
  const titleInput = document.querySelector(".task__title");
  const categoryInput = document.querySelector(".task__category");
  const descInput = document.querySelector(".task__desc");
  const priceInput = document.querySelector(".task__price");
  const imageInput = document.querySelector(".task__image");

  const title = titleInput.value.trim();
  const category = categoryInput.value.trim();
  const desc = descInput.value.trim();
  const price = priceInput.value.trim();
  const image = imageInput.value.trim();

  if (!title || !desc || !price || !category || !image) {
    Toastify({
      text: "Fill the inputs",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #b00000, red)",
      },
    }).showToast();
    return;
  }

  Toastify({
    text: "Success! Product Created.",
    duration: 3000,
    style: {
      background: "linear-gradient(to right, #96c93d, #00b038ff)",
    },
  }).showToast();

  modal.style.display = "none";

  const product = {
    title,
    price,
    description: desc,
    image,
    category,
  };

  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      map(data);
      console.log(data);
    });

  clearModalInputs();
  modal.classList.add("none");
});

function map({ id, title, price, image, category, description }) {
  elBody.innerHTML += `
    <tr>
      <td>${id}</td>
      <td>${title}</td>
      <td>${category}</td>
      <td>${description}</td>
      <td>$${price}</td>
      <td>
        <img src="${image || "https://via.placeholder.com/60"}" width="60">
      </td>
      <td>
        <button
          class="delete"
          style="
            background: rgba(244, 67, 54, 0.75);
            color: #ffe5e3;
            border: none;
            padding: 5px;
            border-radius: 12px;
          "
         onclick="deleteProduct(${id})"
        >
          <i class="ri-delete-bin-line"></i> Delete
        </button>
         <button class="edit" style="   background: rgb(219 227 30 / 88%);
  border: none;
  padding: 9px;
  border-radius: 12px;
  color: #eaffef;
  margin-top: 10px; ">
                      <i class="ri-pencil-line"></i> Edit
                    </button>
      </td>
    </tr>
  `;
}

function clearModalInputs() {
  document.querySelector(".task__title").value = "";
  document.querySelector(".task__category").value = "";
  document.querySelector(".task__desc").value = "";
  document.querySelector(".task__price").value = "";
  document.querySelector(".task__image").value = "";
}
