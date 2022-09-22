let arr= [1,2,3,4,5,22,87,46,20,100];
let count=0;
let sum=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    sum+=arr[i];
    count++;
  }
}
let ave= sum/count;
console.log(ave);