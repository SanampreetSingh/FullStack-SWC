const cart = [
  { name: "Monitor", price: 14500, inStock: true },
  { name: "Keyboard", price: 3200, inStock: false },
  { name: "Mouse", price: 1800, inStock: true },
  { name: "Webcam", price: 4200, inStock: true }
];

const tot = cart.filter((item) => item.inStock).reduce((tot, item) => tot + (item.price - item.price * 15 / 100), 0);

console.log(tot);
