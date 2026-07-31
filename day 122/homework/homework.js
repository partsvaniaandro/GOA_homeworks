function calculate(a, b, callback) {
  return callback(a, b);
}

const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;
const subtract = (x, y) => x - y;