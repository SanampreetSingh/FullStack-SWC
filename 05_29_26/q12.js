const users = [
  { name: "rahul", age: 19, active: true },
  { name: "simran", age: 24, active: true },
  { name: "aditya", age: 32, active: false },
  { name: "kavya", age: 22, active: true }
];

const old = users.filter((user) => user.age > 21 && user.active).map((user) => user.name);

console.log(old);

const cnt = old.length

console.log(cnt);
