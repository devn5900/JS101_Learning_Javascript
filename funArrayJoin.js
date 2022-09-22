function arrayJoin(arr,joinWith){
  let val="";
  let n=arr.length;
  for(let i=0; i<n-1;i++){
    val+=arr[i]+joinWith;
  }
  val+=arr[n-1];
  console.log(val);
}
let arr=['my','name','is','Devesh','Kumar','Mishra'];
arrayJoin(arr,'-');