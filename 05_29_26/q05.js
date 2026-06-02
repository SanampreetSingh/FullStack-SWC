const products = [
  { name: "iPhone 14", price: 1200, inStock: true },
  { name: "MacBook", price: 1800, inStock: false },
  { name: "AirPods", price: 250, inStock: true },
  { name: "iPad Pro", price: 1100, inStock: true }];

const result = products.filter((prod) => prod.inStock == true & prod.price > 1000).map((prod) => prod.name);

console.log(result);
