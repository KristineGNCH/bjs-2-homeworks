function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let element = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));


  return { min: min, max: max, avg: avg };
}

getArrayParams(-99, 99, 10); // { min: -99, max: 99, avg: 3.33 }
getArrayParams(1, 2, 3, -100, 10); // { min: -100, max: 10, avg: -16.80 }
getArrayParams(5); // { min: 5, max: 5, avg: 5 }

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
var arrOfArr = [...];
var func = [...];
}
