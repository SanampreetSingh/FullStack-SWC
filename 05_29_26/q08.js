const products = [
  { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
  { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
  { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
];

const prods = products.map((prod) => prod.brand + ' ' + prod.model);

console.log(prods);

const tot = products.reduce((tot, prod) => tot + (prod.price * prod.quantity) , 0)

console.log(tot);
