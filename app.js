console.log("products starter");
const url = "https://course-api.com/javascript-store-productss";

const productDom = document.querySelector(".products-center");

const fetchProducts = async () => {
  productDom.innerHTML = `<div class="loading"></div>
`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch {
    productDom.innerHTML = `<p class="error">There was an Error </p>`;
  }
};

fetchProducts();
