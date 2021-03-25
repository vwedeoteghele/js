# Higher Order Function

### Explain are higher order function with example

Higher order function are function which accepts other functions as arguments, return functions and pass functions around .This is the bedrock of functional programming which uses functions to achieve fewer codes.When a function accepts function as argument,it is called a caalback back function, There are also built higher order functions in javascript like reduce,map,filter. The function can work as much as possible in javascript because it is a first class citizen which means it can do everything that a number or an object can.
**_Example of higher order function_**

```js
function stewRice() {
  console.log("serve rice HOT!");
}
function regulateTemperature(riceType) {
  if (riceType) {
    consloe.log("rice is sweet");
  }
} //Rice is sweet
```

## Maps

### Explain maps with examples

Maps are inbuilt higher order function in javascript,they are array methods and they literally map an array i.e duplicate an array using a given function

**_Example of map_**

```js
let numberArray = [2, 3, 5];
numberArrayMap = numberArray.map(math, sqrt);
console.log(numberArrayMap);
```

## Reduce

### Explain Reduce with example

Reduce is a javascript array method that that compute the total value of elements in an array, it is a higher order function because it accepts function as arguments
**_example of reduce_**

```js
function simpleArraySum(ar) {
  var sum = [1, 2, 3, 4, 10, 11].reduce((a, b) => a + b, 0);
  return sum;
} //49
```
