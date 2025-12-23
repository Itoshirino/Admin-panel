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

const api = "https://fakestoreapi.com/products";
const elBody = document.querySelector(".table__body");

fetch(api)
  .then((respone) => respone.json())
  .then((product) => {
    innerData(product);
  });

function innerData(product) {
  elBody.innerHTML = "";

  product.map(({ id, title, price, image, category, description }, index) => {
    elBody.innerHTML += `
        <tr data-id="${id}">
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
          </td>
        </tr>
      `;
  });
}



function deleteProduct(id) {
  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
    });
}
























const modal = document.querySelector(".modal");
const createBtn = document.querySelector(".create__btn");
const taskCreateBtn = document.querySelector(".task__create");

modal.style.display = "none";


const Create = () => {
  modal.style.display = "flex";
};

if (createBtn) {
  createBtn.addEventListener("click", Create);
}

const cancelBtn = document.querySelector(".task__cancel");

const cancel = () => {
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.add("none");
  }, 800);
};

if (cancelBtn) {
  cancelBtn.addEventListener("click", cancel);
}

taskCreateBtn.addEventListener("click", () => {
  const title = document.querySelector(".task__title").value.trim();
  const category = document.querySelector(".task__category").value.trim();
  const desc = document.querySelector(".task__desc").value.trim();
  const price = document.querySelector(".task__price").value.trim();
  const image = document.querySelector(".task__image").value.trim();

  if (!title || !category) {
    alert("Fill required fields");
    return;
  }

  elBody.innerHTML += `
    <tr>
      <td>${elBody.innerHTML.length + 1}</td>
      <td>${title}</td>
      <td>${category}</td>
      <td>${desc}</td>
      <td>$${price}</td>
      <td>
        <img src="${image || "https://via.placeholder.com/60"}" width="60">
      </td>
      <td>
        <button class="delete" onclick="this.closest('tr').remove()">
          <i class="ri-delete-bin-line"></i> Delete
        </button>
      </td>
    </tr>
  `;

  clearModalInputs();
  modal.classList.add("none");
});

function clearModalInputs() {
  document.querySelector(".task__title").value = "";
  document.querySelector(".task__category").value = "";
  document.querySelector(".task__desc").value = "";
  document.querySelector(".task__price").value = "";
  document.querySelector(".task__image").value = "";
  modal.style.display = "none";
}
