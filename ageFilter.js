let nm= ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let ag= [32, 30, 26, 28, 44];
let arr=[];
for(let i=0;i<nm.length;i++){
let obj={};
  obj['name']=nm[i];
  obj['age']=ag[i];
  arr.push(obj);
  
}
console.log(arr);
