## infinite loop

an infinite loop is a program or set of instruction that continues to run endlessly because the increment of the loop has no ending condition or it might be intentional.An infinite loop usually results from a loop in aprogram. infinite loop may be programmed intentionally to cause a desired effect such as a bacground for a video game but most often, it result from a mathematical error or a mistake in the syntax of the program.
**example of an infinite loop**
const hot;
while(index > 0; index++) {
console.log('life is beautiful')
}

## For loop

A for loop is used to iterate through a set of conditions, a for loop usually has three conditions: an initialiser which sets the index to a starting point or position,a condition, say index < 8 and an increment which basically increases the number or decreases the number say, index++.
For loops are useful when you want to run a block of code over and over as long as it is within the boundaries of the for statement,we know how many times the for loop will iterate before terminating before it even run.
**example of a For loop**
for(let index = 0; index < 10; index++){
cosole.log("i am grateful for life");
}

## For Each Loop

The forEach loop works similarly to the for loop but usually used for a dataset like an array, it is used to loop through element in the array and carry out a secific task.
**example of a forEach loop**  
 given an array of n length
let myArray = [12,13, 15,17]
myArray.forEach((array)) => {
console.log(array)
}

## for of loop

This loop is used to iterate through an iteratable itm in like a list in a node list
**example of for of loop**
let myArray = [0,1,4,7]
for(let thom of myArray) {
console.log(thom);
}
