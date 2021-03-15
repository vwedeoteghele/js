// a simple function to compute arithmetic operations

function computeNumbers (a, b, c) {
    if (c == "sum") {
      let sum = a + b;
      return sum;
    } if (c == "multiply") {
      let multiply = a * b;
      return multiply;
    } if (c == "divide") {
      let divide = a / b;
      return divide;
    }
  
  }
  console.log(calculatorApp(3, 5, "sum"))