// Group Employees by Department
const employees = [
  { name: "Ravi", dept: "IT" },
  { name: "Neha", dept: "HR" },
  { name: "Aman", dept: "IT" },
  { name: "Meera", dept: "Finance" }
];
// 👉 Return an object grouping employees by department.
// Expected Output
//freq[char] = (freq[char] || 0) + 1;
function group (){
    frq ={};
    for (let i in employees){
        frq[employees[i].dept] = (frq[employees[i].dept] ||0) +1;
        }
}

function main(){

}