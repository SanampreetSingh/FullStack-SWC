const cart = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 }];

const tot = cart.reduce((tot, prod) => {
     tot = tot + prod.price;
     return tot;
}, 0);

console.log(tot);
