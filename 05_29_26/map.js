const product = [
     {name: "A", price: 1000},
     {name: "B", price: 500},
     {name: "C", price: 700}
];

const prices = product.map((product) => product.price * 2);

const high_prices = product.filter((product) => product.price > 500);

const total = product.reduce((tot, product) => {
     tot = tot + product.price;
     return tot;
}, 0);

console.log(total);