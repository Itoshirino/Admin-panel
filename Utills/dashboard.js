const logout = document.querySelector(".logout");

const Logout = () => {
  setTimeout(() => {
    localStorage.removeItem("token");
    window.location.href = "../index.html";
  }, 800);
};

if (logout) {
  logout.addEventListener("click", Logout);
}






const api = "https://fakestoreapi.com/products";
const elBody = document.querySelector(".table-body");

if (!elBody) {
  console.error("❌ Элемент .table-body не найден в HTML");
} else {

  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      renderTable(products);
    })
    .catch((error) => {
      console.error("Ошибка загрузки данных:", error);
      elBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center;color:red;">
            Ошибка подключения к серверу
          </td>
        </tr>
      `;
    });
}

function renderTable(products) {
  elBody.innerHTML = "";

  products.forEach(({ title, price, image, category, description }, index) => {
    const shortDescription =
      description.length > 80 ? description.slice(0, 77) + "..." : description;

    elBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${title}</td>
          <td>${category}</td>
          <td>${shortDescription}</td>
          <td>$${price.toFixed(2)}</td>
          <td>
            <img 
              src="${image}" 
              alt="${title}" 
              width="60" 
              height="60" 
              style="object-fit:contain;"
            >
          </td>
          <td class="action-buttons">
            <button class="view">View</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </td>
        </tr>
      `;
  });

}
