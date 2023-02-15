const url = "https://course-api.com/javascript-store-single-product";

const productsDom = document.querySelector(".product");

const fetchProducts = async () => {
  try {
    productsDom.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const resp = await fetch(`${url}?id=${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDom.innerHTML = `<p class="error">There was an Error </p>`;
  }
};

const displayProducts = (product) => {
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  //const{url:img}=product.fields.image[0];
  document.title = title.toUpperCase();
  const getColors = colors
    .map((item) => {
      return `            <span class="product-color" style="background: ${item}"></span>
`;
    })
    .join("");

  productsDom.innerHTML = ` <div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price}</span>
          <div class="color">

${getColors}          
</div>
          <p>${description}</p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};
start();
