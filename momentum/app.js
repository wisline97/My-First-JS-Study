const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(2, 3);
console.log(addResult);

const minusResult = calculator.minus(addResult, 3);
console.log(minusResult);

const divideResult = calculator.divide(12, minusResult);
console.log(divideResult);

const multiResult = calculator.multi(4, divideResult);
console.log(multiResult);

const powerofResult = calculator.powerof(multiResult, divideResult);
console.log(powerofResult);
