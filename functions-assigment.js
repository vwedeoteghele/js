//output day of the weekm with a numeric input
function daysOfTheWeek(inputNumber) {
  if (inputNumber == 1) {
    console.log("monday");
  } else if (inputNumber == 2) {
    console.log("tuesday");
  } else if (inputNumber == 3) {
    console.log("wednesday");
  } else if (inputNumber == 4) {
    console.log("thursday");
  } else if (inputNumber == 5) {
    console.log("friday baba");
  } else if (inputNumber == 6) {
    console.log("saturday");
  } else if (inputNumber == 7) {
    console.log("sunday");
  } else {
    console.log("this is not a day of the week");
  }
}
daysOfTheWeek(24);
daysOfTheWeek(3);

//check for leap year

function checkForLeapYear(inputYear) {
  if (inputYear % 4 == 0 || inputYear % 100 == 0) {
    console.log(
      inputYear,
      " is a leap year and the olympics is holding that year"
    );
  } else {
    console.log(
      inputYear,
      " is not a leap year and the olympics is not holding this year"
    );
  }
}
checkForLeapYear(1996);

function determineEvenOrOddNumber(inputNumber) {
  if (inputNumber % 2 == 0) {
    let result = "number is an even number";
    return result;
  } else {
    let result = "this is a odd number";
    return result;
  }
}
determineEvenOrOddNumber(28);

//working with functions on javascript

function calculateDogAge(dogAge) {
  let result = dogAge * 7;

  console.log("your doggie's is " + result + " in dog years");
}
calculateDogAge(4);

//lifetime supply of my fav snack

function lifeTimeSupply(age, amountPerDay) {
  let result = age * amountPerDay * 365;
  console.log(
    "You will need " + result + " packets till the ripe old age of " + age
  );
}
lifeTimeSupply(120, 5);
