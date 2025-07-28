// Task 1: var vs let/const and Hoisting Pitfalls

console.log("---- Example 1: var hoisting ----");
console.log(x); //undefined
var x = 5;
console.log(x);

console.log("\n---- Example 2: let hoisting ----");
try {
  console.log(y); //wont access before initialization
} catch (e) {
  console.log("Error:", e.message);
}
let y = 10;
console.log(y);

console.log("\n---- Example 3: const hoisting ----");
try {
  console.log(z); //wont access z before initialization
} catch (e) {
  console.log("Error:", e.message);
}
const z = 15;
console.log(z);

console.log("\n---- Example 4: var inside function hoisting ----");
function testVarHoist() {
  console.log(a); //undefined
  var a = 20;
  console.log(a);
}
testVarHoist();

console.log("\n---- Example 5: let inside block scope ----");
{
  try {
    console.log(b); //wont access b before initialization
  } catch (e) {
    console.log("Error:", e.message);
  }
  let b = 25;
  console.log(b);
}

console.log("\n---- Example 6: var redeclaration ----");
var c = 1;
var c = 2;
console.log(c);// 2

console.log("\n---- Example 7: let redeclaration ----");
let d = 3;
try {
  let d = 4;
} catch (e) {
  console.log("Error:", e.message);
}
console.log(d);//3
