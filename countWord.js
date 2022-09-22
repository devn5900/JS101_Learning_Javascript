let name= "dev esh";
let count=0;
for(let i=0;i<name.length;i++){
  if(name[i]==0){
    continue;
  }
  count++;
}
console.log(count);