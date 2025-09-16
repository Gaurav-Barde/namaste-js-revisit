// console.log(n);
// console.log(square);

// var n = 2;

// function square(num) {
//   var ans = num * num;
//   return ans;
// }

// var square2 = square(n);
// var square4 = square(4);

// What is a block
{
}

// Block Scoped variables
// {
//   let a = 10; //block scoped
//   const b = 10; //block scoped
//   var c = 10; //not a block scoped
// }
// console.log(a); // will be an error because of block scope

// Shadowing
// let a = 10;
// {
//   // this a shadows outer a
//   let a = 20;
//   console.log(a); // output 20
// }

// console.log(a); // output 10

// Illegal Shadowing
// let a = 10;
// {
//   // will be an error
//   var a = 20;
//   console.log(a); // output 20
// }

// console.log(a); // output 10

// Closure
let b = 100;
function x() {
  let a = 100;
  function inner() {
    console.log(a);
  }
  return inner;
}

// a = 200;

var z = x();
z(); //output will be 7 because function y will form closure with its lexical environment
