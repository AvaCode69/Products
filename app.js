const url = "https://course-api.com/javascript-store-products";

const productDom = document.querySelector(".products-center");

const fetchProducts = async () => {
  productDom.innerHTML = `<div class="loading"></div>
`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch {
    productDom.innerHTML = `<p class="error">There was an Error </p>`;
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a class="single-product" href="product.html?id=${id}">
    <img src="${img}" class="single-product-img img" title="${title}">
    <footer>
    <h5 class="name">${title}</h5>
    <span class="price">$${formatPrice}</span>
    </footer>
    </a>`;
    })
    .join("");
  productDom.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
