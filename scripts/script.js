// Script.js

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('productData') === null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('productData', JSON.stringify(data)));
  }
});