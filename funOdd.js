function isOdd(i){
  if(i%2==1){
    return true;
  }else{
    return false;
  }
}
for(let i=0; i<15;i++){
  if(isOdd(i)){
    console.log(i);
  }
}