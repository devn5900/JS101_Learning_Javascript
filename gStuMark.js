let arr = [
  {
    grade: "V",
    students: [
      { name: "Nrupul", marks: [10, 20, 30] },
      { name: "Prateek", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VI",
    students: [
      { name: "Aman", marks: [10, 20, 30] },
      { name: "Albert", marks: [20, 30, 40] }
    ]
  },
  {
    grade: "VII",
    students: [
      { name: "Yogesh", marks: [10, 20, 30] },
      { name: "Sandhya", marks: [20, 30, 40] }
    ]
  }
]
let grade = [];
let name = [];
let mark = [];
for (let i = 0; i < arr.length; i++) {
  grade.push(arr[i].grade);
  for (let j = 0; j < arr[i].students.length; j++) {
    name.push(arr[i].students[j].name);
    sum = 0;
    for (let k = 0; k < arr[i].students[1].marks.length; k++) {
      let ar = arr[i].students[j].marks[k];
      sum += ar;
    }
    mark.push(sum);
  }

}

for (let i = 0; i < grade.length; i++) {

  for (let j = 0; j < mark.length; j++) {
    if (mark[j] != 60) {
      console.log(grade[i] + '-' + name[j] + '-' + mark[j]);
    }
  }
}
