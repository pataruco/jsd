class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>06 The DOM</h1>
</div>

---

## Learning objectives

- Describe the differences between the DOM and HTML.
- Use vanilla JavaScript methods and properties to create and modify DOM nodes.
- Use the browser’s developer tools to navigate and interact with the DOM

---

## The DOM

.row[
.column[

- The browser receives the HTML document, analyzes it, and creates an object model of the page in memory.
- This model is called the Document Object Model (DOM).
- The DOM is structured like a tree.

  ]
  .column[

```txt
                  ┌──────────────┐
                  │   Document   │
                  └──────────────┘
                          │
                  ┌───────┴──────┐
                  │     html     │
                  └──────────────┘
     ┌────┐               │             ┌────┐
     │head│───────────────┴─────────────│body│
     └────┘                             └────┘
┌─────┐ │ ┌────┐                           │
│title│─┴─│meta│                   ┌───────┼───────┐
└─────┘   └────┘                   │       │       │
                                ┌────┐  ┌────┐  ┌────┐
                                │ h1 │  │img │  │ ul │
                                └────┘  └────┘  └────┘
                                                   │
                                           ┌───────┼────────┐
                                           │       │        │
                                         ┌─┴──┐  ┌─┴──┐  ┌──┴─┐
                                         │ li │  │ li │  │ li │
                                         └────┘  └────┘  └────┘
```

]
]

---

## DOM nodes

.row[
.col[

- Each element in the HTML document is represented by a **DOM node**.
- Nodes can be accessed and changed using JavaScript.
- When the model is updated, those changes are reflected on screen.
  ]
  .col[

```txt
                  ┌──────────────┐
                  │   Document   │
                  └──────────────┘
                          │
                  ┌───────┴──────┐
                  │     html     │
                  └──────────────┘
     ┌────┐               │             ┌────┐
     │head│───────────────┴─────────────│body│
     └────┘                             └────┘
┌─────┐ │ ┌────┐                           │
│title│─┴─│meta│                   ┌───────┼───────┐
└─────┘   └────┘                   │       │       │
                                ┌────┐  ┌────┐  ┌────┐
                                │ h1 │  │img │  │ ul │
                                └────┘  └────┘  └────┘
                                                   │
                                           ┌───────┼────────┐
                                           │       │        │
                                         ┌─┴──┐  ┌─┴──┐  ┌──┴─┐
                  DOM node   ─────────▶  │ li │  │ li │  │ li │
                                         └────┘  └────┘  └────┘
```

]
]

---

## Developer tools

To see a visual representation of the DOM tree

.row[
.column[

### Chrome

.image-one-fourth[![Chrome](https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg)]

View > Developer > Inspect elements

or

<kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>I</kbd>
]

.column[

### Firefox

.image-one-fourth[![Chrome](https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg)]

Tools > Browser Tools > Web Developer Tools

or

<kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>I</kbd>
]
]

---

## DOM

.row[
.col[

### Web page elements

```html
<html>
  <head>
    <title>JavaScript Basics</title>
  </head>
  <body>
    <picture>
      <img src="logo.png" alt="JS	Basics" />
    </picture>
    <p>First, master HTML and CSS.</p>
  </body>
</html>
```

]
.col[

### DOM tree

```txt
             ┌──────────────┐
             │     html     │
             └──────────────┘
┌────┐               │             ┌────┐
│head│───────────────┴─────────────│body│
└────┘                             └────┘
   │                                  │
   │                          ┌───────┴────────┐
┌─────┐                       │                │
│title│                   ┌───────┐          ┌───┐
└─────┘                   │picture│          │ p │
                          └───────┘          └───┘
                              │
                              │
                           ┌────┐
                           │img │
                           └────┘

```

]
]

---

## DOM

.row[
.col[

### Web page elements

```html
<html>
  <head>
    <title>JavaScript Basics</title>
  </head>
  <body>
    <picture>
      <img src="logo.png" alt="JS	Basics" />
    </picture>
    <p>First, master HTML and CSS.</p>
  </body>
</html>
```

]
.col[

### DOM tree

```txt
             ┌──────────────┐
             │     html     │
             └──────────────┘
┌────┐               │             ┌────┐
│head│───────────────┴─────────────│body│
└────┘                             └────┘
   │                                  │
   │                          ┌───────┴────────┐
┌─────┐                       │                │
│title│                   ┌───────┐          ┌───┐
└─────┘                   │picture│          │ p │
                          └───────┘          └───┘
                              │
                              │
                           ┌────┐
                           │img │
                           └────┘
                              │
                        ┌─────┴────┐
                        │          │
                    ┌───────┐    ┌───┐
                    │  src  │    │alt│
                    └───────┘    └───┘

```

]
]

---

## DOM

.row[
.col[

### Web page elements

```html
<html>
  <head>
    <title>JavaScript Basics</title>
  </head>
  <body>
    <picture>
      <img src="logo.png" alt="JS	Basics" />
    </picture>
    <p>First, master HTML and CSS.</p>
  </body>
</html>
```

]
.col[

### DOM tree

```txt
                ┌──────────────┐
                │     html     │
                └──────────────┘
   ┌────┐               │             ┌────┐
   │head│───────────────┴─────────────│body│
   └────┘                             └────┘
      │                                  │
      │                    ┌─────────────┴──┐
   ┌─────┐                 │                │
   │title│             ┌───────┐          ┌───┐
   └─────┘             │picture│          │ p │
      │                └───────┘          └───┘
      │                    │                 │
┌───────────┐              │                 │
│"JavaScript│           ┌────┐               │
│  Basics"  │           │img │        ┌─────────────┐
└───────────┘           └────┘        │"First master│
                           │          │HTML and CSS"│
                     ┌─────┴────┐     └─────────────┘
                     │          │
                 ┌───────┐    ┌───┐
                 │  src  │    │alt│
                 └───────┘    └───┘

```

]
]

---

## The DOM

.row[
.col[

## The DOM **is** ✅

- Created by the browser
- Contains all web page elements as descendant objects
- Also includes its own properties and methods
  ]

.col[

## The DOM **is not** ❌

- The page HTML
- A visual representation of the page
- What is displayed in the browser developer tools
  ]
  ]

---

class: lab

## Pair activity

- Discuss how the DOM is different to the pages HTML
- Add the differences to the slack thread

---

## DOM manipulation

Selecting elements in the DOM

```javascript
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
// Lets us select DOM  elements using CSS selector  syntax
document.querySelector();
document.querySelectorAll();
```

---

## CSS selectors

| Selector | element                                      |
| -------- | -------------------------------------------- |
| `#main`  | Select an element with an id of `main`       |
| `.auth`  | Select all element with class of `auth`      |
| `p, l`   | Select all paragraphs and list item elements |
| `div ul` | Select unordered lists within divs           |

---

class: lab

## Individual activity

Complete levels **1-10** of CSS dinner [https://flukeout.github.io/](https://flukeout.github.io/)

---

## `document.querySelector`

Takes a single argument, a string containing CSS selector

.row[
.col[

```html
<body id="main">
  … …
</body>
```

]
.col[

```js
document.querySelector('#main');
```

]
]

---

## `document.querySelector`

Selects the first DOM element that matches the selector

.row[
.col[

```html
<body id="main">
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
  </ul>
</body>
```

]
.col[

```js
document.querySelector('li');
```

]
]

---

## DOM manipulation

- Get and set the HTML within it with the `innerHTML` property
- Get and set its attribute values by referencing them directly (`id`, `src`, etc.)

---

## `innerHTML`

1. Gets the existing content of an element, including any nested HTML tags
2. Sets new content in an element

```js
const item = document.querySelector('li');
console.log(item.innerHTML); // Gets value: 'Lorem ipsum'
item.innerHTML = 'Apples'; // Sets value: 'Apples'
```

---

## `className`

Gets/sets an element’s class attribute value

```js
const item = document.querySelector('li');
console.log(item.className); // Gets value: ''
item.className = 'selected'; // Sets value: 'selected'
```

---

class: code-along

# Code along

???

OPEN 00-dom-codealong

`innerHtml: document.querySelector('.artist').innerHTML = 'pedro';`

`className: document.querySelector('.artist').className = 'new-class';`

Add highlight: `document.querySelector(‘.artist').classList.add('bright');`

Add highlight to all:
`const artists = document.querySelectorAll('.artist');`

```js
artists.forEach((artist) => {
  artist.classList.add('bright');
});
```

---

class: lab

## Pair activity

- Open the starter code `01-dom-exercise` in your editor.
- Follow the instructions to write code that selects and modifies the indicated elements and content IN PARTS 1-3.
- BONUS - target the 3rd element by reading up on the css selector `nth-of-type`

---

class: lab

## Individual activity

- Open the starter code `02-dom-attributes-exercise` in your editor.
- Follow the instructions to write code that selects and modifies the indicated elements and content.
- BONUS - use a `forEach` loop to iterate through DOM elements

---

## Create content

.row[
.col[
Create a new element with

```js
document.createElement();
```

]
.col[

```txt
┌───┐
│ p │
└───┘
```

]
]

---

## Create content

.row[
.col[

1. Create a new element with

   ```js
   const p = document.createElement('p');
   ```

2. Add text content to that element with the `innerText` property.

   ```js
   p.innerText = 'Hola';
   ```

]
.col[

```txt
  ┌───┐
  │ p │
  └───┘
    │
    │
    │
┌───────┐
│"hola" │
└───────┘
```

]
]

---

## Create content

.row[
.col[

1. Create a new element with

   ```js
   const p = document.createElement('p');
   ```

2. Add text content to that element with the `innerText` property.

   ```js
   p.innerText = 'Hola';
   ```

3. Attach the new element to the DOM with `appendChild()`

   ```js
   document.body.appendChild(p);
   ```

]
.col[

```txt
           ┌────┐
           │body│
           └────┘
              │
              │
    ┌─────────┴────┐
    │              │
    │              │
┌───────┐        ┌───┐
│picture│        │ p │
└───────┘        └───┘
    │              │
    │              │
    │              │
 ┌────┐        ┌───────┐
 │img │        │"hola" │
 └────┘        └───────┘
```

]
]

---

## `createElement()`

- Creates a new element in memory (itʼs not attached to the DOM)
- Assign it to a variable so you can reference it later

```js
const item1 = document.createElement('li');
const item2 = document.createElement('li');
```

---

## `innerHTML`

- Specifies text content of an element
- May include nested HTML tags

```js
item1.innerHTML = 'Bananas'; // Sets value: 'Bananas'
item2.innerHTML = 'Apples'; // Sets value: 'Apples'
```

---

## `appendChild()`

- Attaches element or node as child of a selected element in the DOM
- Syntax signature: `parent.appendChild(child)`

```js
const list = document.querySelector('ul');
list.appendChild(item1);
list.appendChild(item2);
```

---

class: code-along

# Code along

???

Open 03-create-append-codealong

---

class: lab

## Individual activity

- Open `create-append-homework`
- Open preview.png. Your task is to use DOM manipulation to build the sidebar shown in the image and add it to the blog.html web page.
- Open app.js in your editor, then follow the instructions to create and the “About us” heading and the 2 paragraphs of text to the sidebar.
- **BONUS 1**: Open preview-bonus.png, then write JavaScript code to add the image shown to the sidebar. (Filename and location in app.js.)
- **BONUS 2**: Create and append the “Recent issues” heading and list.

---

## Homework

---

class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>End of presentation</h1>
</div>

---
