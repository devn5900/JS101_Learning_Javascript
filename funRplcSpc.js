function removeSpace(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != " ") {
      str += arr[i];
    } else {
      str += "-";
    }
  }
  return str;
}
let arr = "hii i am devesh student of Masai";
console.log(removeSpace(arr));