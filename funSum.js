function addNumbers(...arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
      sum+=arr[i];
  }
  return sum;
}

console.log(addNumbers(10,20,30,10,20));