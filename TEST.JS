
const students = [
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Sneha", marks: { math: 70, english: 75, science: 80 } },
  { name1: "Ravi", marks: { math: 95, english: 88, science: 92 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90000, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },
  { name1: "Aman", marks: { math: 90, english: 80, science: 85 } },

];

// // Each student’s summary should include:
// // Student’s name
// // Average marks
// // Highest scoring subject
// // Grade (A = 85+, B = 70–84, C = below 70)

// Each student’s summary should include:
// Student’s name
// Average marks
// Highest scoring subject
// Grade (A = 85+, B = 70–84, C = below 70)


// [

//   { name: "Aman", avg: 85, topSubject: "math", grade: "A" },

//   { name: "Sneha", avg: 75, topSubject: "science", grade: "B" },

//   { name: "Ravi", avg: 91.67, topSubject: "math", grade: "A" }

// ]
function avg(num_arr) {
  let n = num_arr.length;
  let sum = 0;
  for (let i in num_arr) {
    sum = sum + num_arr[i];
  }
  return sum / n;
}

function hig_sco(obj) {
  let sub = Object.keys(obj);
  let sub_mark = Object.values((obj));
  let max = 0;
  for (let i in sub_mark) {
    if (sub_mark[i] >= max)
      max = sub_mark[i];
  }
  return sub[sub_mark.indexOf(max)]
}

function grade(num) {
  if (num >= 85) {
    return "A";
  }
  else if (num >= 70 && num <= 84) {
    return "B";
  }
  else {
    return "C";
  }
}

function main() {

  let name2 = [];
  for (let i in students) {
    name2.push(students[i].name1);
  }

  let a = [];
  let b = [];
  let c = [];
  for (let i in students) {
    let mark_arr = [students[i].marks.math, students[i].marks.english, students[i].marks.science];
    a.push(avg(mark_arr));
    b.push(hig_sco(students[i].marks));
    c.push(grade(avg(mark_arr)));
  }

  let ans = [];
  //           { nam: name2[0], avg: a[0], highscore: b[0], grade: c[0] },
  //      { nam: name2[1], avg: a[1], highscore: b[1], grade: c[1] },
  //  { nam: name2[2], avg: a[2], highscore: b[2], grade: c[2] }
  //   ];
  for (let i in students) {
    ans[i] = { nam: name2[i], avg: a[i], highscore: b[i], grade: c[i] };
  }

  console.log(ans);
}


main();
