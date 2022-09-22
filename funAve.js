function average(arr){
  let sum=0;
  if(arr.length<=0){
    return 0;
  }else{
    for(let i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    return (sum/(arr.length));
  }
}
let ar=[1,2,3,4,5,6,7,9,10];
console.log(average(ar));