const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}



let suma = (a,b) => a+b;

let resta = (a,b) => a-b;

let multiplicacion = (a,b) => a*b;

let division = (a,b) => a/b;

let value = division(resta(multiplicacion(suma(2,4),suma(5,2)),2),5);

log(value)

