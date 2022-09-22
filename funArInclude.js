function arrayIncludes(arr,finds){
  let flag=false;
  for(let i=0;i<arr.length;i++){
    if(finds==arr[i]){
      flag=true;
    }
  }
  console.log(flag);
}
let arr=['my','name','is','Devesh','Kumar','Mishra'];
let finds= 'myi';
arrayIncludes(arr,finds);