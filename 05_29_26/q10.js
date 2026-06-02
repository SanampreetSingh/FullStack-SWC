const tasks = [
  { title: "Database Migration", priority: "high", completed: true },
  { title: "UI Redesign", priority: "medium", completed: true },
  { title: "API Testing", priority: "high", completed: false },
  { title: "Security Audit", priority: "high", completed: true }
];

const hpp = tasks.filter((task) => task.priority == 'high' && task.completed == true).reduce((op, task, index, array) => {
     if(index != array.length - 1) op = op + task.title + ', ';
     else op = op + task.title;
     return op;
},'');

console.log(hpp);
