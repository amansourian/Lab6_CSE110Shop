// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('productData') === null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('productData', JSON.stringify(data)));
  }

  const productData = localStorage.getItem('productData');
  const productList = document.getElementById('product-list');
  productData.forEach(({src, title, price}) => {
    productList.appendChild(new ProductItem(src, title, price));
  });
});