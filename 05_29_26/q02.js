const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Alex", age: 32 },
  { name: "Mia", age: 15 }];

const old = users.filter((user) => user.age > 18).map((user) => user.name);

console.log(old);
