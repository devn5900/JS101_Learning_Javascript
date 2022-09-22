let arr = "devesh";
let count = 1;
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if(!obj[arr[i]]){
    obj[arr[i]]=1;
  } else{
   obj[arr[i]]++;
  }
  
}
console.log(obj);