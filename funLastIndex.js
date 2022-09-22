function lastIndexOfArray(arr,find){
  let Index=0;
  for(let i=0;i<arr.length;i++){
    if(find==arr[i]){
      Index=i;
    }
  }
  console.log(Index);
}
let arr=['that','has','the','same','tthe','of' ,'inbuilt'];
let find='the';
lastIndexOfArray(arr,find);