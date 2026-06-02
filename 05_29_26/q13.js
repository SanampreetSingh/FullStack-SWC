const players = [
  { name: "Rohit", score: 168 },
  { name: "Virat", score: 142 },
  { name: "Shubman", score: 185 },
  { name: "Ishan", score: 134 }
];

const ppl = players.filter((pp) => pp.score > 150).map((pp) => pp.name + '(' + pp.score + ')')

console.log(ppl);

const tot = players.filter((pp) => pp.score > 150).reduce((tot, pp) => tot + pp.score, 0);

console.log(tot);
