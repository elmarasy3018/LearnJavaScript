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
