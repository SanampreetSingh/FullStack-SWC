const items = [
  { name: "Smartphone", price: 32000 },
  { name: "Charger", price: 1200 },
  { name: "Headphones", price: 4500 },
  { name: "Power Bank", price: 1800 }
];

const dis = items.filter((items) => items.price > 1500).reduce((acc, item) => acc + (item.price - item.price * 20 / 100), 0);

console.log(dis);
