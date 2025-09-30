// 7. Find the Oldest Person
const people = [
  { name: "Riya", age: 25 },
  { name: "Arjun", age: 30 },
  { name: "Dev", age: 28 }
];
// 👉 Find and return the name of the oldest person.

function old(){
    oldest= -1;
    for (let i in people){
        if(people[i].age >= oldest){
            oldest = people[i].age;
            oldest_person = people[i].name;
        }
    }
    console.log (oldest_person)
}
old();