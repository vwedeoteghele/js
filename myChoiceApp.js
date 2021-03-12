// a simple calculator to compute =,*,/

function calculatorApp(a, b, c) {
  if (c == "sum") {
    let sum = a + b;
    return sum;
  } else if (c == "multiply") {
    let multiply = a * b;
    return multiply;
  } else if (c == "divide") {
    let divide = a / b;
    return divide;
  }

}
console.log(calculatorApp(3, 5, "sum"))