//the numbers match

var d = 23;
var e = 34;
var theNumberMatch;

if (d == e){
  theNumbermatch = true;
}else {
  theNumberMatch = false;
}
console.log(theNumberMatch)
//regular or name function
function multiply (firstNum, secondNum){
  let mult = firstNum * secondNum;
  console.log(mult)
  return mult;
}
 multiply(250, 60)


 //anonymous function 
 let divide = function (){
   let result = (18000 / 600)
   console.log(result)
 }
 divide()

//anonymous function for addition
 let diva = function (){
   const didi = ( 18000 + 30000)
   console.log(didi)
 }
 diva()



 //biggest fraction comparison with function

 function biggestFraction() {
   const firstFrac = 3/5;
 const secondFrac = 9/7;

firstFrac > secondFrac ? console.log("the biggest fraction is ", firstFrac) : console.log("the biggest fraction is the second ", secondFrac)
 
 }

 biggestFraction()

 //fraction function that has argument
 function largestFraction(a,b){


   a > b ? console.log("a ", a) : console.log("b ", b)
 }
 const firstFc = 9/2;
 const secondFc = 2/4;
 
 largestFraction(firstFc,secondFc);
 largestFraction(2/3,5/7);

 //functio with three argument

 function threeparams(a,b,c){
   const firstNumber = 17;
   const secondNunber =23;
   const choice = ;
   if(choice == "multiply"){a * b}else if
     (choice == "divide"){a/b} else (choice == "sum"){a+b}
}