---
title: "How to Capitalize the First Letter in JavaScript"
date: "2023-02-18"
---

When programming, it's often necessary to capitalize the first letter of a string. This can be important for formatting names or titles correctly, or for converting user input to a proper format. Luckily, JavaScript offers various approaches for capitalizing the first letter of a string.

The easiest way to capitalize the first letter of a string is to use the `toUpperCase()` method. This method converts a string to uppercase and returns the result. Here's how you can capitalize the first letter of a string using this method:

```js
let str = "hello world"
let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1)

console.log(capitalizedStr) // "Hello world"
```

We declare a variable `str` with the original string value. Then, we use the `charAt()` method to select the first letter of the string at index 0 and capitalize it with the `toUpperCase()` method. Next, we concatenate this uppercase character with the rest of the string, which we extract using `slice()` method starting at index 1.
Lastly we assign the resulting value to a new variable called `capitalizedStr` and log it to the console.

Another way to capitalize the first letter of a string in JavaScript is to use the `slice()` and `toUpperCase()` methods together. Here's an example of how to use this method:

```js
let str = "hello world"
let capitalizeStr = str.slice(0, 1).toUpperCase() + str.slice(1)

console.log(capitalizedStr) // "Hello world"
```

This method is similar to the previous one, except we use the `slice()` method to extract the first character of the string and convert it to uppercase.

## Capitalize Function

To streamline the code, we can create a utitlity function for the capitalize method and utitlize it whereever needed.

Here's an example:

```js
function capitalize(str) {
  if (typeof str !== "string") {
    return ""
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Using the function
capitalize("hello world") // "Hello world" ✅
capitalize(12345) // "" ❌
```

Similarly to the previous code examples, the above code capitalizes the first letter of a string. However, it differs by introducing a reusable capitalize function that can be called from anywhere in the application. Additionally, it includes error handling to check the type of the input value using the `typeof` keyword.
