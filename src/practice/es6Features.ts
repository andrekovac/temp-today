// es6Features.ts

// ========================================
// Part 1: Let vs. Const
// ========================================

console.log("=== Part 1: Let vs. Const ===");

// Using let
let mutableNumber = 5;
mutableNumber = 10; // Works because 'let' allows reassignment
console.log(`mutableNumber: ${mutableNumber}`); // Output: 10

// Using const
const immutableNumber = 15;
// immutableNumber = 20; // Uncommenting this will throw an error because 'const' variables cannot be reassigned

console.log(`immutableNumber: ${immutableNumber}`); // Output: 15

// ========================================
// Part 2: Arrow Functions
// ========================================

console.log("\n=== Part 2: Arrow Functions ===");

// Traditional function
function multiply(a: number, b: number): number {
  return a * b;
}

// Arrow function
const multiplyArrow = (a: number, b: number): number => a * b;

console.log(`multiply(2, 3): ${multiply(2, 3)}`); // Output: 6
console.log(`multiplyArrow(2, 3): ${multiplyArrow(2, 3)}`); // Output: 6

// ========================================
// Part 3: Template Literals
// ========================================

console.log("\n=== Part 3: Template Literals ===");

const firstName = "Jane";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(`Full Name: ${fullName}`); // Output: Jane Doe

// ========================================
// Part 4: Destructuring and Spread/Rest Operators
// ========================================

console.log("\n=== Part 4: Destructuring and Spread/Rest Operators ===");

// Object destructuring
const user = { username: "jdoe", email: "jdoe@example.com", age: 28 };
const { username, email } = user;
console.log(`Username: ${username}`); // Output: jdoe
console.log(`Email: ${email}`); // Output: jdoe@example.com

// Array destructuring
const colors = ["red", "green", "blue"];
const [primaryColor, secondaryColor] = colors;
console.log(`Primary Color: ${primaryColor}`); // Output: red
console.log(`Secondary Color: ${secondaryColor}`); // Output: green

// Spread operator to merge arrays
const moreColors = ["yellow", "purple"];
const allColors = [...colors, ...moreColors];
console.log(`All Colors: ${allColors.join(", ")}`); // Output: red, green, blue, yellow, purple

// ========================================
// Part 5: Primitives vs. Reference Types
// ========================================

console.log("\n=== Part 5: Primitives vs. Reference Types ===");

// Primitives
let string1 = "Hello";
let string2 = string1;
string2 = "World";
console.log(`string1: ${string1}`); // Output: Hello
console.log(`string2: ${string2}`); // Output: World

// Reference types
let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log(`array1: [${array1}]`); // Output: array1: [1, 2, 3, 4]
console.log(`array2: [${array2}]`); // Output: array2: [1, 2, 3, 4]

// ========================================
// Part 6: Understanding null, undefined, and NaN
// ========================================

console.log("\n=== Part 6: Understanding null, undefined, and NaN ===");

let uninitializedVariable;
let emptyVariable = null;

console.log(`uninitializedVariable: ${uninitializedVariable}`); // Output: undefined
console.log(`emptyVariable: ${emptyVariable}`); // Output: null

const result = parseFloat("abc");
console.log(`result: ${result}`); // Output: NaN
console.log(`isNaN(result): ${isNaN(result)}`); // Output: true
