function subString(str,arr){
  let st="";
    if(arr[1]==undefined){
  for(let i=arr[0];i<str.length;i++){
    st+=str[i]; 
  }
    }if(arr[0]!=undefined && arr[1]!=undefined){
      for(let i=arr[0];i<arr[1];i++){
    st+=str[i]; 
  }
    }
    console.log(st);
}


let str="devesh";

subString(str,[2,3]);