"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
const productName = "fanny pack";
const product = products_1.default.filter(
  (item) => item.name === productName
)[0];
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = "575 Broadway, New York City, New York";
console.log(product);
if (product.preOrder === true) {
  console.log("We will send you a message when your product is on its way.");
}
if (product.price > 25) {
  shipping = 0;
  console.log("Your shipping price is free");
} else {
  shipping = 5;
  console.log(`Your shipping price is ${shipping}`);
}
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
  taxTotal = product.price * taxPercent;
  total = product.price + taxTotal + shipping;
} else {
  taxPercent = 0.05;
  taxTotal = product.price * taxPercent;
  total = product.price + taxTotal + shipping;
}
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
