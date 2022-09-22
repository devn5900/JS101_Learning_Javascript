function primeNumber(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return false;

  } else {
    return true;
  }
}

let num = 13;
for (let i = 2; i <= num; i++) {

  if (primeNumber(i)) {
    console.log(i);
  }

}