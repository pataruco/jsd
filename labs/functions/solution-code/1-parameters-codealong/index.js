'use strict';
console.log('working');

// write a function call add
// it should take 2 parameters a and b
// it should console log a + b

function multiply(a, b) {
  console.log(a, b);
}

// invoke the function with 2 numbers

multiply(1, 2);

// write a function called sayHello
// it should take 1 parameter - we can call it name (or anything else we like)
// it should console log hello + name

const sayHello = (name = 'user') => {
  console.log('hello ' + name);
};

sayHello();

// invoke the funciton with a name

// INTRO TO SWITCH STATEMENTS AND CONDITIONALS

// check if the name is a member
// if it is a member return a string to say it is
// if it's not, return a string to say it isn't

const members = ['Eliabeth', 'Philip', 'Charles', 'William', 'Harry', 'Megan'];

const isRoyal = function (name) {
  switch (name) {
    case 'Elizabeth':
    case 'William':
    case 'Harry':
      console.log('are alright I guess');
      break;

    default:
      console.log('that is not a royal member');
  }
};

isRoyal('Harry');
