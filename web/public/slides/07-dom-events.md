class: frontpage

<div>
  <h2>JavaScript Development</h2>
  <hr/>
  <h1>07 DOM Events</h1>
</div>

---

## Learning objectives

- Select DOM elements and properties
- Manipulate the DOM by using selector.
- Create DOM event handlers

---

## Events

- Most modern websites have interactive elements
- Interactivity is triggered by user events
- Browsers listen for events and execute functions when an event occurs

---

## Common DOM events

| Mouse        | Keyboard   | Form     | Document |
| ------------ | ---------- | -------- | -------- |
| `click`      | `keypress` | `submit` | `rezise` |
| `dblclicl`   | `keydown`  | `change` | `scroll` |
| `mouseenter` | `keyup`    | `focus`  |          |
| `mouseleave` |            | `blur`   |

[Full list](https://developer.mozilla.org/en-US/docs/Web/Events)

---

## Events and Listeners

Anytime a user interacts with a webpage, the browser classifies that action as an event.

In our JS code, we can listen for events in the browser and trigger functions in response using event listeners.

```javascript
// When object is clicked, the action function is called
object.addEventListener('click', action);
```

### Get, Then Listen

We'll often **get** an element and then **set** an event listener on it. Once the event occurs, the listener will execute the function it was given.

```javascript
const ga = document.getElementById('ga');

function sayHello() {
  console.log('hello!');
}

ga.addEventListener('click', sayHello);
```

---

## Events and Listeners

We called this pattern the

### The three **E**'s

1.  The **E**lement(s) we want to interact with
2.  The **E**vent we want to kick off the interaction
3.  The **E**xecution: what happens next and what elements are involved

We can write this out in "normal" language first (**Pseudocode**)

```javascript
// Element
const ga = document.getElementById('ga');

// Event
ga.addEventListener('click', sayHello);

// Execution
function sayHello() {
  console.log('hello!');
}
```

---
