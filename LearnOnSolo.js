///// Find the smallest positive number missing /////
function nSqr(arr) {
  let i = 1;
  while (true) {
    if (arr.indexOf(i) == -1) {
      return i;
    }
    i++;
  }
}

function nlogn(arr) {
  arr = arr.sort();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      return arr[i - 1] + 1;
    }
  }
}

const arr = [-1, 5, 3, 2, 1, 0];
const nSqrResult = nSqr(arr);
nSqrResult;

const nlognResult = nlogn(arr);
nlognResult;

///// Calculate the clock angle /////
function calcAngle(hour, minute) {
  if (hour >= 12) {
    hour -= 12;
  }
  const hAngle = hour * (360 / 12) + minute * (360 / 12 / 60);
  hAngle;
  const mAngle = minute * (360 / 60);
  mAngle;
  abs = Math.abs(hAngle - mAngle);
  return Math.min(abs, 360 - abs);
}

const hour = 3;
const minute = 15;
const calcAngleResult = calcAngle(hour, minute);
calcAngleResult;
