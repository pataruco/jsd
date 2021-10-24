class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>03 Functions, scope & conditionals</h1>
</div>

---

## Learning objectives

- Describe how parameters and arguments relate to functions
- Create and call a function that accepts parameters to solve a problem
- Define and call functions defined in terms of other functions
- Return a value from a function using the return keyword
- Define and call functions with argument-dependent return values

---

## Functions

- **Modular**: Allow us to group a series of statements together to perform a specific task
- **Reusable**: We can use the same function multiple times
- **Efficient**: Not always executed when a page loads. Provide us with a way to 'store' the steps needed to achieve a task.

---

## Functions

### Declaration syntax

```js
function name(parameters) {
  // do some stuff
}
```

### Example

```js
function sayHello() {
  console.log('Hello');
}
```

---

## Functions

### Expression syntax

```js
const name = function (parameters) {
  // do some stuff
};
```

#### Example

```js
const sayHello = function () {
  console.log('Hello');
};
```

---

## Functions

### Arrow syntax

```js
const sayHello = (parameters) => {
  // do some stuff
};
```

#### Example

```js
const sayHello = () => {
  console.log('Hello');
};
```

---

## Functions

### Invoking

.row[
.column[

- When we want to execute the function (make it run), we use the function name followed by parentheses `()`
- We can say:
  - _Call_ the function
  - _Invoke_ the function
  - _Execute_ the function
    ]

```javascript
const picADescriptiveName = () => {
  console.log('👋');
};
picADescriptiveName();
// function name + parentheses
```

]

---

class: code-along

# Code Along

???
Write a `sayHello` function write in declaration, expression and arrow functions.
`console.log` a variable with each one

---

class: lab

## Pair activity

- Open `4-functions-exercise`
- Follow the instructions for the functions exercise part 1.
- Practice defining and executing functions.
- BONUS: Define the functions as expressions and fat arrows

---

## Paremeters

### Parameters make our functions reusable

- The values in the parentheses are placeholders for the data that we pass to our functions.
- When we define a function we call them **parameters**.
- They behave like variables inside our functions.
- When we invoke a function, the data we pass is given to the placeholders in the order that the parameters appear when the function is defined.
- The data we pass to the function are called **arguments**.

---

## Paremeters

### Using parameters

```js
function sayHello(name) {
  // name is the parameter
  console.log('Hello ' + name);
}

sayHello('Jen'); // 'Jen' is an argument
```

---

## Paremeters

### Using multiple parameters

```js
function add(num1, num2) {
  console.log(num1 + num2);
}

add(2, 3); // 2 and 3 are arguments
```

---

## Paremeters

### Using default parameters

```js
function add(num1, num2 = 3) {
  console.log(num1 + num2);
}

add(2);
```

---

class: code-along

# Code along

???

- Write an add function that takes 2 numbers and adds them together
- Write a sayHello function that takes a name and returns a string template
- Write a function that picks returns if a name is the member of the royal family - Elizabeth, Philip, Charles, Harry, William, Kate, Megan
- Give a default parameter so calling the function without an argument still returns a name

---

class: lab

# Pair activity

## Reading functions

- Open `4-functions-exercise`
- Given a function and a set of arguments, predict the output of a function.
- Look at Part 2 **A and B**. Predict what will happen when each function is called.

## Using parameters

- Open `4-functions-exercise`
- See if you can write one function that takes some parameters and combines the functionality of the `makeAPizza` and `makeAVeggiePizza` functions (make your own pizza).
- **BONUS**: Create your own function with parameters. This function could do anything!

---

## `return` statement

- Ends function’s execution
- Returns a value — the result of running the function
- It let’s us use the result of the function
- By contrast `console.log()` is only for us devs for debugging!

---

## `return` statement

```js
function add(num1, num2) {
  return num1 + num2;
}

const twoPlusThree = add(2, 3);
// twoPlusThree === 5
```

---

class: lab

# Pair activity

## Using parameters (round 2)

- Open `5-price-calculator`
- Write code to to calculate a customer's total cost in dollars based on product price, tax rate, shipping cost, and the currency they're using for the purchase (dollars or euros).
- **BONUS 1**: Convert your function to assume a currency of "dollar" by default.
- **BONUS 2**: Convert your code to use arrow functions.

---

## Scope

## Variables and function scope

- All variables are scoped to the functions that declare them.
- Variables declared with const and let may be further block scoped inside of a function
- Variables are available inside their local scope and any children scopes
- Variables in inner (child) scopes can override outer (parent) scope variables

---

class: code-along

# Code Along

???
Introduce closures with the MDN example of makeAdder

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

---

## Look ahead to next lesson

### Slackbot lab

- Building your own Slack Bot! 🤖

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

---
