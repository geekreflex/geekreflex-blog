---
title: "Creating LocalStorage Helper Functions"
date: "2023-02-17"
---

LocalStorage is a powerful feature of modern web browsers that allows web developers to store key-value pairs in the client-side browser storage. This feature is essential for building web applications that require persistent data storage, as it allows developers to store data that persists after the user refreshes the page, navigates away from the website or even closes the browser.

In this article, we'll explore how to create helper functions for `localStorage` get and set operations, which will simplify our code and make it easier to use `localStorage` in our web applications.

## Understanding LocalStorage

The main features of `localStorage` are:

- Shared between all tabs and windows from the same origin.
- Persistent data storage that remains even after the browser or OS is restarted.

Before we dive into creating our helper functions, it's essential to understand what `localStorage` is an how it works. `localStorage` is a key-value storage that is implemented in modern web browsers. It allows developers to store data on the user's computer, which can be retrieved and used later by the web application.

`localStorage` is very simple to use. We can set a key-value pair using the following syntax:

```js
localStorage.setItem("key", "value")
```

And we can retrieve the value from a key using the following syntax:

```js
const value = localStorage.getItem("key")
```

If the key doesn't exist in `localStorage`, the `getItem` method will return `null`.

## The Problem with Direct Usage

While `localStorage` is very useful, direct usage of these methods can be cumbersome and error-prone, especially if you need to access `localStorage` data frequently in your application. This is where helper functions can come in handy.

A helper function is a function that performs a specific task and is designed to be used in conjuction with other functions to make it easier to accomplish a specific task. In the case of `localStorage`, we can create two helper functions: one for getting a value from `localStorage` and another for setting a value in `localStorage`.

## Creating the Helper Functions

Let's start with the `get` helper function. This function should take a key as an argument an return the value for that key from `localStorage`. If the key doesn't exist, it should return a default value.

```js
function getFromLocalStorage(key, defaultValue = null) {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : defaultValue
}
```

In this function, we first get the value for the key from `localStorage`. If the value exists, we parse it from a string to a JavaScript object using `JSON.parse`. If the value doesn't exist, we return the default value passed to the function.

Next, let's create the `set` helper function. This function should take a key and a value as arguments and set the key-value pair in `localStorage`.

```js
function setInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
```

In this function, we use the `setItem` method to set the key-value pair in `localStorage`. We stringify the value using `JSON.stringify` so thet we can store any JavaScript object in `localStorage`.

## Using the Helper Functions

Now that we have created the `get` and `set` helper functions, we can use them in our web applications to simplify our code and make it easier to work with `localStorage`

For example, let's say we have a web application that allows the user to customize the background color. We can use the `get` helper function to retrieve the background color from `localStorage`, and the `set` helper function to set the background color in `localStorage`.

```js
const defaultBgColor = "#ffffff"

// get the background color from localStorage
const bgColor = getFromLocalStorage("bgColor", defaultBgColor)

// set the background color in localStorage
setInLocalStorage("bgColor", bgColor)
```

By using these helper functions, we can reduce the amount of code we need to write and make it easier to work with `localStorage`. This can also make our code more maintainable and less error-prone since we can use the same helper functions throughout our application.

Let's take a look at another example of using our helper functions:

Suppose you're building a todo list application that allows users to add, delete, and modify tasks. To ensure that the user's tasks are persisted even if they close or refresh the page, you decide to use `localStoragee to store the tasks.

Here's an example using the helper functions for `get` and `set`

```js
// Get the user's tasks from localStorage
let tasks = getFromLocalStorage("tasks");

// Add a new task to the user's list
tasks.push("Buy groceries");

// Save the updated task list to localStorage
setInLocalStorage("tasks", tasks);

...
```

In this example, the `getFromLocalStorage` function retrieves the user's tasks from `localStorage`, then `push` method adds a new task to the list, and the `setInLocalStorage` function saves the updated task list back to `localStorage`.

Using helper function for `get` and `set` operations can simplify our code and make it more readable, allowing you to focus on building a great user experience for your application.

## Error Handling & Type Checking

We can also add additional functionality to these helper functions, such as type checking and error handling, depending on our specific use case. For example, we could modify the `setInLocalStorage` helper function to throw an error if the key or value is not provided, or we could modify the `getFromLocalStorage` helper function to check that the value returned from `localStorage` is of the expected type.

```js
function setInLocalStorage(key, value) {
  if (!key || !value) {
    throw new Error("Key and value are required")
  }
  localStorage.setItem(key, JSON.stringify(value))
}

function getFromLocalStorage(key, defaultValue = null) {
  const value = localStorage.getItem(key)
  if (value && typeof value !== "string") {
    throw new Error("Value must be a string.")
  }
  return value ? JSON.parse(value) : defaultValue
}
```

By adding these checks, we can ensure that our helper functions are used correctly and prevent potential errors from occuring.

## Removing Data from LocalStorage

In addition to storing and retrieving data from `localStorage`, there may be times when we need to remove data from `localStorage`. To do this, we can create a helper function that utilizes the `removeItem` method to remove the data associated with a given key.

```js
function removeFromLocalStorage(key) {
  if (!key) {
    throw new Error("Key is required")
  }
  localStorage.removeItm(key)
}
```

This function takes a `key` parameter that identifies the data we want to remove from `localStorage`. We can then call this function whenever we need to remove data from `localStorage`.

For example, let's say we have a form that allows users to save their preferences. When the user decides to clear their preferences, we call the `remmoveFromLocalStorage` function to remove the preference data from `localStorage`.

```js
// Remove the preference data from localStorage
removeFromLocalStorage("preferences")

// Reload the page to reflect the changes
location.reload()
```

## Conclusion

Creating helper functions for `localStorage` get and set operations are a valueable tool for any web developer looking to streamline their workflows and simplify their code. By using these functions, you can reduce the amount of code you need to write and maintain, and eliminate common errors.

In this article we've explored how to create and use these helper functions in your web applications, and have also highlighted some advanced techniques for working with `localStorage`. By putting these tips and tricks into practice, you can improve the performance and user experience of you applications, while making development process smoother and more efficient.
