function cnvrtLowerCase(arr) {
  let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower='abcdefghijklmnopqrstuvwxyz';
  let str=" ";
for(let j=0;j<arr.length;j++){
  for(let i=0;i<upper.length;i++){
      if(arr[j]==upper[i]){
        str+=lower[i];
        break;
      }if( arr[j]==lower[i]){
        str+=upper[i];
      }
  }
}
  return str;
}

console.log(cnvrtLowerCase("Test"));