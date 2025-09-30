// 10. Find Most Popular Course
const courses = [
  { name: "JavaScript", students: 120 },
  { name: "Python", students: 150 },
  { name: "Java", students: 100 }
];
// 👉 Find the course with the highest number of students.
function pop(){
    let max= -1;
    let ans ={};
    let pop_lang;
for(let i in courses){
    if(courses[i].students >= max){
        max= courses[i].students;
        pop_lang= courses[i].name;
    }
}
console.log(pop_lang);
}
pop();