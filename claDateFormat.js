let date = 31;
let month = 12;
for (let i = 1; i <= month; i++) {
  if (i == 2) {
    date = 28;
  } else if (i == 4 || i == 6 || i == 9 || i == 11) {
    date = 30;
  } else {
    date = 31;
  }
  for (j = 1; j <= date; j++) {

    console.log(j + "-" + i);
  }
}