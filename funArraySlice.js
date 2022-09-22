function arraySlice(arr,ar){
  let newArr=[];
  if(ar[0]<0&&ar[1]>0){
    ar=0;
  }
  for(let i=ar[0];i<ar[1];i++){
  newArr.push(arr[i]);
}
  console.log(newArr);
}

let arr=[ 'the','same','behavior','of','inbuilt','Array','Slice','Function'];
let start=2;
let end=6;
arraySlice(arr,[start,end]);