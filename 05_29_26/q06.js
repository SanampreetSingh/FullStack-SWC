const students = [
  { name: "Riya", score: 92 },
  { name: "Aman", score: 78 },
  { name: "Sneha", score: 88 },
  { name: "Karan", score: 65 },
  { name: "Priya", score: 95 }];

const high = students.filter((stud) => stud.score > 80).map((stud) => stud.name);

const amt = students.filter((stud) => stud.score > 80).reduce((am, stud) => am + 1, 0);

const tot = students.filter((stud) => stud.score > 80).reduce((tot, stud) => tot + stud.score, 0);

let avg = tot / amt;

console.log(high);

console.log(avg.toFixed(2));

