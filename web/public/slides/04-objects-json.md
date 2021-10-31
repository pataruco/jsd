class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>04 Objects & JSON</h1>
</div>

---

## Objects

In computer science, an object is a value in memory which is possibly referenced by an identifier.

### Properties

- A property is an association between a key and a value
- Key: name (often descriptive) used to reference the data
- Value: the data stored in that property
- A property is sometimes referred to as a key-value pair
- Method: is a function property

```js
┌────────┐         const animal = {        ┌────────┐
│Property│──────────▶type: dog, ◀───────┬──│ Values │
└────────┘     ┌────▶run: function() {◀─┘  └────────┘
┌────────┐     │         // method
│ Method │─────┘     }
└────────┘         }
```

---

## Objets

### Get and set properties

- Dot notation
- Square brackets

---

class: code-along

# Code Along

<h2>
  <a href="#" class="download-link">
    Download labs
  </a>
</h2>

???

Open 1-objects code along

- Create an empty object called person
- Add a first name key value pair
- Add a second name - value null
- Update with a second name
- Add an hobbies property with primary and secondary properties
- Add an age
- Delete the age

- Access properties with dot notation
- Access nested properties with dot notation
- Access properties with bracket notation
- Access nested properties with bracket notation
- Add a variable to the object with es6 shorthand syntax
- Add a method to the object with declaration and fat arrow syntaxes

---

class: lab

## Pair activity

- Open `2-objects-intro`
- Complete questions 1 to 4

---

## Objects = nouns

A <mark>user</mark>, browsing on a <mark>shopping website</mark>, searches for size 12 running shoes, and examines <mark>several pairs</mark> before purchasing one.

> Implicit object shopping cart

```js
const shoppingCart = {};
```

---

## Properties = adjectives

A user, browsing on a shopping website, searches for <mark>size 12 running shoes</mark>, and examines several pairs before purchasing one.

> Implicit properties
> for each pair of shoes: price and colour
> for the shopping cart: contents, total, shipping, tax

```js
const shoppingCart = {
  total: 120,
  shipping: 10,
  tax: 12.5,
  contents: [
    { price: 60, color: 'amber' },
    { price: 60, color: 'red' },
  ],
};
```

---

## Methods = verbs

A user, browsing on a shopping website, <mark>searches</mark> for size 12 running shoes, and examines several pairs before purchasing one.

> Implicit methods
> add to cart, calculate shipping, calculate tax, complete purchase, remove item

```js
const shoppingCart = {
  total: 120,
  shipping: 10,
  tax: 12.5,
  contents: [
    { price: 60, color: 'amber' },
    { price: 60, color: 'red' },
  ],
  addToCart(item) {
    this.contents.push(item);
  },
  calculateShipping: function () {
    // do something
  },
  calculateTax: function () {
    // do something
  },
};
```

---

## `this`

In JavaScript, `this` is a keyword that refers to the current object. When used in a method on an object, it will always refer to the current object.

```js
let person = {
  firstName: 'Pedro',
  lastName: 'Martin',
  sayName: function () {
    return `My name is ${this.firstName} ${this.lastName}`;
  },
};

person.sayName();
```

---

class: code-along

# Code Along

???

Introduce concept of this and talk about pair programming

Create a shopping cart object with {shoes: [], addToShoes: function to push into this.shoes}
Add some shoes to shopping cart.shoes

Do this in the same file as the last code along (02)

COMPLETE THE REMAINING QUESTIONS IN 2-OBJECTS-INTRO methods on the car object

---

class: lab

## Pair or individual

- Open `3-objects-exercise`.
- Open `monkey.js` in your editor.
- Create objects for 3 different monkeys each with the properties and methods listed in the start file.
- Practice retrieving properties and using methods with both dot notation and bracket syntax.
- **BONUS**: Rewrite your code to use a constructor function.

---

## JSON

In the past, APIs used to send data in XML format, which is where the X in AJAX comes from. XML is similar to HTML.

This was perfectly fine, but because each cheese property required an opening and closing tag, the amount of data being transferred was quite large.

As JavaScript applications increasingly consumed APIs, a more suitable way of transferring data with an API was born: JSON

JSON stands for **JavaScript Object Notation** and is a string representation of JavaScript objects and arrays.

---

## JSON

.row[
.column[

### XML

A cheese rendered in XML might look like this:

```xml
<cheese>
  <name> Gouda </name>
  <origin> Netherlands </origin>
  <strength> 4 </strength>
</cheese>
```

]
.column[

### JSON

The same cheese represented in JSON could look like this

```json
{
  "name": "Gouda",
  "origin": "Netherlands",
  "strength": 4
}
```

]
]

As you can see, it looks almost identical to a JavaScript object, except that the properties have double quotes and the string values ​​have double quotes as well.

---

## Objects vs JSON

.row[
.col[

### Object

```js
const course = {
  name: 'JSD',
  weeks: 10,
  instructor: 'Pedro Martin',
  location: 'London',
  students: ['Ash Adams', 'Chris Kelly'],
  dates: {
    start: '2020-02-03',
    end: '2020-04-12',
  },
};
```

]
.col[

### JSON

```json
{
  "name": "JSD",
  "weeks": 10,
  "instructor": "Pedro Martin",
  "location": "London",
  "students": ["Ash Adams", "Chris Kelly"],
  "dates": {
    "start": "2020-02-03",
    "end": "2020-04-12"
  }
}
```

]
]
