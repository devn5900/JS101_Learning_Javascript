let objArr=[
  {name: "Airpods", rating:4.3, price: 20000} ,
{name: "Iphone", rating:4.0, price: 20000} ,
{name: "Mac Book", rating:4.2, price: 20000} ];
for(let i=0;i<objArr.length;i++){
  if(objArr[i].rating<=4.2){
    console.log(objArr[i].name,objArr[i].rating);
  }
}