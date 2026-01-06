
const api = "https://fakestoreapi.com/carts";
const elTbody = document.querySelector(".table__body");

fetch(api)
  .then((res) => res.json())
  .then((product) => {
    innerCarts(product);
    console.log(product);
  });
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
            <button class="view">
              <i class="ri-feedback-fill"></i> View
            </button>
            <button class="delete">
              <i class="ri-delete-bin-line"></i> Delete
            </button>
          </td>
        </tr>`;
  });
}

const loc1 = window.location.href;

console.log(loc1);
const link2 = document.querySelector(".nav__link2");
const icon2 = document.querySelector(".icon2");

if (link2.href === loc1) {
  link2.classList.toggle("active");
  icon2.classList.replace("ri-box-3-line", "ri-box-3-fill");
}