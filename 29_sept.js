const employees = [
  { name: "Ravi", dept: "IT", salary: 40000 },
  { name: "Neha", dept: "HR", salary: 35000 },
  { name: "Arjun", dept: "Finance", salary: 50000 }
];
// 👉 Increase each employee’s salary by 10% and return a new array with updated salaries.

let a= [];
for (let i in employees){
    a.push((employees[i].salary/10)+employees[i].salary);
}

const new_employees = [
  { name: "Ravi", dept: "IT", salary: a[0] },
  { name: "Neha", dept: "HR", salary: a[1] },
  { name: "Arjun", dept: "Finance", salary: a[2]}
];
console.log(new_employees);