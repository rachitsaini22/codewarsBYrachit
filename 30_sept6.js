// 8. Nested Object Extraction
const company = {
  name: "TechCorp",
  employees: [
    { name: "Ravi", skills: ["JavaScript", "Node.js"] },
    { name: "Neha", skills: ["Python", "Django"] }
  ]
};
// 👉 Return a flat array of all skills:

function flat(){
    let temp=[];
   for (let i in company.employees){
    temp.push(company.employees[i].skills);
   }
  console.log( temp.flat());
}
flat();