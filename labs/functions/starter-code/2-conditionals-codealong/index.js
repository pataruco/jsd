'use strict';
console.log('working!');

// write an if/else statement that takes an age as a parameter
// if the age is equal to or over 17, console log('can drive!')
// if the age is under 17, console log('can not drive!')

// function decideIfCanDrive(age) {
//   if(age >= 17) {
//     console.log('can drive');
//   }

//   console.log('can not drive');
// }

// decideIfCanDrive(30);

// refactor the function into a turnery statement

const announce = (decision) => console.log(decision);

const canDrive = (age) =>
  age >= 17 ? announce('can drive') : announce('can not drive');

canDrive(7);

// write a switch statement

// const driverSwitch = function(age) {
//   switch(age) {
//     case 1: console.log('can not get in the car');
//       break;
//     case 2:
//     case 3:
//     case 4:
//     case 5: console.log('goes in the boot');
//       break;
//     case 6:
//     case 7:
//     case 8:
//     case 9: console.log('needs a car seat')
//      default: console.log('go karts only')
//   }
// }

// driverSwitch(7)
