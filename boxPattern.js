let i = 1, j = 1;
let pat = "";
for (i; i <= 5; i++) {
  for (j = 1; j <=5; j++) {
    if(i==1||i==5||j==1||j==5)
     pat+="*"+" ";
  else
    pat+="  ";
  }
 pat+="\n";
}
console.log(pat);