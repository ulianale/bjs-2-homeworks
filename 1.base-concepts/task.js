"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c; // дискриминант
  if (D > 0) {
    arr[0] = ((-b + Math.sqrt(D)) / (2 * a));
    arr[1] = ((-b - Math.sqrt(D)) / (2 * a));
  } else if (D == 0) {
    arr[0] = (-b + Math.sqrt(D)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseInt(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);
  countMonths = parseInt(countMonths);
  let S = amount - contribution;   // тело кредита
  let P = 1 / 12 * percent / 100;  // процентная ставка в месяц в диапазоне от 0 до 1
  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));    // ежемесячнвя плата
  if (Number.isNaN(monthlyPayment)) {
    return false
  }
  return +((monthlyPayment * countMonths).toFixed(2)); 
}