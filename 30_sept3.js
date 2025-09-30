// 4. Student Average Marks
const students = {
  Riya: { Math: 85, English: 78, Science: 92 },
  Aarav: { Math: 90, English: 88, Science: 75 }
};

// 👉 Find the average marks of each student and return a new object.

function avg(arr) {
  return (arr[0] + arr[1] + arr[2]) / 3;
}

function data() {
  let nam_arr = Object.keys(students);
  let marks_arr = Object.values(students);
  let ans_obj = {}; 

  for (let i in marks_arr) {
    ans_obj[nam_arr[i]] = avg([marks_arr[i].Math, marks_arr[i].English, marks_arr[i].Science]); 
  }

  return ans_obj;
}

function main() {
  console.log(data());
}

main();
