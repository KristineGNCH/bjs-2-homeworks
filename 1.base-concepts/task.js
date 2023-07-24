"use strict"
function solveEquation(a, b, c) {
  "use strict"
  let arr = [];
  let x;
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    arr.length = 0;
  } else if (d > 0) {
    x = (-b + Math.sqrt(d) ) / (2 * a);
    arr.push(x);
    x = (-b - Math.sqrt(d) ) / ( 2 * a);
    arr.push(x);
  } else if (d === 0) {
    x = -b / ( 2 * a );
    arr.push(x);
  }
  
  console.log(arr);
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let P = percent / 100 / 12; // процентная ставка
  let S = amount - contribution;  // тело кредита
  let n = countMonths; // кол-во месяцев
  let monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1)); // ежемесячный платеж 
  let totalyPayment = (monthlyPayment * n).toFixed(2) // общая сумма, к. необходимо заплатить по кредиту  = ежемесячный платеж * кол-во месяцев 
  let tP = Number(totalyPayment); // преобразуем в число
  return(tP);
}

calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);

