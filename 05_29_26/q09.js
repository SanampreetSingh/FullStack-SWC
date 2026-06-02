const employees = [
  { name: "Vikram", department: "Engineering", salary: 1800000 },
  { name: "Neha", department: "Marketing", salary: 950000 },
  { name: "Arjun", department: "Engineering", salary: 1350000 },
  { name: "Pooja", department: "Engineering", salary: 980000 }
];

const emol = employees.filter((emp) => emp.department === 'Engineering' & emp.salary > 1200000).map((emp) => emp.name);

console.log(emol);

const tot = employees.filter((emp) => emp.department === 'Engineering' & emp.salary > 1200000).reduce((tot, emp) => tot + emp.salary, 0);

console.log(tot);

