function charIsSmall(ch) {
  let arr = 'abcdefghijklmnopqrstuvwxyz';
  let count=0;
  for (let i = 0; i < arr.length; i++) {
    if (ch == arr[i]) {
      count++;
    } 
  }
  if(count>0){
    return true;
  }else{
    return false;
  }
}
let ch='A';
if(charIsSmall(ch)){
  console.log("Char is Small Case");
}else{
   console.log("Char is Not Small Case");
}