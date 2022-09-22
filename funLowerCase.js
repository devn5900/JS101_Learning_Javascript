function tolower(ch) {

  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < upper.length; i++) {
    if (ch == upper[i]) {
      return lower[i];
    } if (ch == lower[i]) {
      return lower[i];
    }
  }
}

function convertLowerCase(arr) {

  let str = " ";

  for (let j = 0; j < arr.length; j++) {
    str += tolower(arr[j]);
  }
  return str;
}

let arr = ["MA", "SA", "I", "SCH", "OOL"];
let ar = [];
for (let i = 0; i < arr.length; i++) {

  ar.push(convertLowerCase(arr[i]));

}
console.log(ar);