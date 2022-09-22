let num=100;
let i=1;
let ave=0;
while(i<=num){
  if(i%2==0){
    ave=ave+i;
  }
  i++;
}
console.log(ave/(num/2));