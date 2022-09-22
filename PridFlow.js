let prev_sum=0,curr_num=0,sum=0;
let n=9;
if(curr_num<=n){
  prev_sum=sum;
  sum=curr_num+prev_sum;
  curr_num+=1;
}
  console.log(sum);
