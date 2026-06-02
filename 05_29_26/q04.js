const people = [
  { first: "John", last: "Doe" },
  { first: "Anna", last: "Smith" }];

const full = people.map((name) => 
     name.first + ' ' + name.last
)

console.log(full);
