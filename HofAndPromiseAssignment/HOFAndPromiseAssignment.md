## Higher Order Function

**_what are higher order function with examples_**  
Higher Order Function are functions which accepts other function as arguments or returns other functions in the code block. Higher order function is what allows for functional programming, it does composition of functions,it abstracts away other functions, makes your code clean and concise.
**_example_**

```js
function doOperation(operation, number1, number2) {
  return operation(number1, number2);
}

function sumBothNumbers(number1, number2) {
  return number1 + number2;
}

doOperation(sumBothNumbers, 3, 5); //8
```

## Explain SetTimeOut()

set time out is a javascript function that sets a specified time in milliseconds before a snippet of code or function is called,this is useful when you want a user to see an alert in your site after browsing your site a some time,say 5 minutes.

## Explain Promises with Examples

Promises are functions in javascript which are usually used to replace callback function, a promise is like making a promise to your kid that you will get them chocolate, it has three states: a pending state, a resolved state, which is when you actually fulfill your promise and a reject state which is when you did not fulfill your promise and you let them know the reason you didn't.
**_example_**

```js
const myPromise = new Promise((resolve, reject)=>{
    let connection == true;

    if (connection) {
        resolve('connection is stable');
    }else {
        reject('connection is lost')
    }
});


myPromise.then((message) => {
    console.log (message);
}).catch((message) => {
    console.log(message)
});
```

## Side Effects in programming

there are pure functions which allows produce the same value every time it is called and there are functions with side effects which are functions which modifies a mutable data structure or variable,uses io,throws an exception,or halt an error.Without side effects,functions do only calculations,we need side effects to connects to database,integrate to external systems or write files.
**_example of side effects in javascript_**
