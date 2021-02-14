// Script.js

function getData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data));
}

window.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const productData = localStorage.getItem('productData');

  if (productData === null) {
    getData('https://fakestoreapi.com/products', (data) => {
      localStorage.setItem('productData', JSON.stringify(data));
      data.forEach(({image, title, price, id}) => {
        productList.appendChild(new ProductItem(image, title, price, id));
      });
    });
  } else {
    JSON.parse(productData).forEach(({image, title, price, id}) => {
        productList.appendChild(new ProductItem(image, title, price, id));
    });
  }
});