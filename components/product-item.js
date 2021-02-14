// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super(src, title, price);

    this.attachShadow({mode: 'open'});

    const product = document.createElement('li');
    product.className = 'product';

    const imgElem = product.appendChild(document.createElement('img'));
    imgElem.src = src;
    imgElem.alt = title;
    imgElem.width = 200;

    const titleElem = product.appendChild(document.createElement('p'));
    titleElem.className = 'title';
    titleElem.innerText = title;

    const priceElem = product.appendChild(document.createElement('p'));
    priceElem.className = 'price';
    priceElem.innerText = price;

    const buttonElem = product.appendChild(document.createElement('button'));
    buttonElem.onclick = () => alert('Added to Cart!');
    buttonElem.innerText = 'Add to Cart';
    
    const style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;

    this.shadowRoot.append(style, product);
  }
}

customElements.define('product-item', ProductItem);