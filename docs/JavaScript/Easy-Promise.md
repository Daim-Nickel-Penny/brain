---
title: Easy Promise
id: Js-Intro
slug: /javascript/Easy Promise
---

import Highlight from "@site/src/components/Highlight/Index.js";
import { Colors } from "@site/src/components/Colors/Index.js";
import useBaseUrl from "@docusaurus/useBaseUrl";

A **promise** is like a gift that you order from an online store. When you order the gift, it's in a **"pending"** state, because it hasn't arrived yet. Once the gift arrives and you receive it, the promise is **"fulfilled"** and you can open the gift. If the gift never arrives, the promise is **"rejected."**

In <Highlight color={Colors.JavaScriptYellow}>JavaScript</Highlight>, you can use a promise to perform a task that takes some time _(like loading data from a website)_, and then do something with the result when the task is complete. You can use the `then()` method to specify what should happen when the promise is fulfilled, and you can use the `catch()` method to specify what should happen if the promise is rejected.

## How to write promise?

1. First, we create a new `promise object` called myPromise using the Promise constructor.
2. The Promise constructor takes a function called the "executor function," which has two arguments: **resolve** and **reject**. The executor function is responsible for performing a task (in this case, a task that takes some time), and then calling either the resolve function or the reject function depending on the result of the task.
3. Inside the executor function, we define a variable called success and set it to true.
4. We then use an if statement to check the value of success. If success is true, we call the resolve function and pass it a string argument: 'The task was successful'. If success is false, we call the reject function and pass it a string argument: 'The task failed'.
5. Outside of the executor function, we use the `then()` method on myPromise to specify what should happen if the promise is fulfilled. The `then()` method takes a function as an argument, which we can use to access the value that was passed to the resolve function. In this case, we simply log the value to the console.
6. We also use the `catch()` method on myPromise to specify what should happen if the promise is rejected. The `catch()` method takes a function as an argument, which we can use to access the value that was passed to the reject function. In this case, we also log the value to the console.

## Code example

```js
let myPromise = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    resolve("The task was successful");
  } else {
    reject("The task failed");
  }
});

myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
```

This code creates a new promise object called **myPromise**, which will be either fulfilled or rejected based on the value of the success variable. If the promise is fulfilled, the value passed to the resolve function will be logged to the console. If the promise is rejected, the value passed to the reject function will be logged to the console.

## Return Promise Array in TS

Here's an example of a <Highlight color={Colors.TypeScriptBlue}>TypeScript</Highlight> method that returns a promise that resolves to an array of numbers:

```js
function getNumbers(): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}
```

This method, called `getNumbers()`, returns a new promise that will be fulfilled with an array of numbers after a 1-second delay.

Here's how you might use the getNumbers() method:

```ts
getNumbers().then((numbers) => {
  console.log(numbers); // logs: [1, 2, 3, 4, 5]
});
```

In this example, we use the `then()` method on the returned promise to specify what should happen when the promise is fulfilled. The `then()` method takes a function as an argument, which will be called with the resolved value (in this case, the array of numbers) as an argument. We simply log the array of numbers to the console.

## Types of Promise

In <Highlight color={Colors.TypeScriptBlue}>TypeScript</Highlight>, the Promise type is a built-in type that represents the type of a promise. It is a `generic` type, which means that you can specify the type of the value that the promise will resolve to when you create a new promise.

Here's an example of how you might use the Promise type in TypeScript:

```ts
let myPromise: Promise<string> = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello, world!");
  }, 1000);
});

myPromise.then(function (value) {
  console.log(value); // logs: 'Hello, world!'
});
```

In this example, we create a new promise called **myPromise** that will resolve to a string. We use the Promise type and specify that the promise will resolve to a string by using the angle bracket syntax: `Promise<string>`. This tells TypeScript that the value passed to the resolve function will be a string.

We can also use the Promise type to specify the return type of a function that returns a promise. For example:

```ts
function getData(): Promise<Data> {
  return fetch("https://example.com/data.json").then((response) =>
    response.json()
  );
}
```

In this example, the `getData()` function returns a promise that will resolve to a value of type Data.
