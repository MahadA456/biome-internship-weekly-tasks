// Task 1: Using union types and type guards

// This function takes a string OR number
function format(input: string | number): string {
  // Check if input is a string
  if (typeof input === 'string') {
    // Convert string to uppercase
    return "String: " + input.toUpperCase();
  } else {
    // Format number to 2 decimal places
    return "Number: " + input.toFixed(2);
  }
}

// Call the function with both types
console.log(format("hello"));   // Output: String: HELLO
console.log(format(42.567));    // Output: Number: 42.57

//-------------------------------------------------------------

// Task 2: Custom type guard

// This function checks if the input is an array of strings
function isStringArray(x: unknown): x is string[] {
  // Check if x is an array AND every element is a string
  return Array.isArray(x) && x.every(item => typeof item === "string");
}

// Test data
const test1: unknown = ["a", "b", "c"];      // Should pass
const test2: unknown = [1, 2, "c"];          // Should fail

// Check first data
if (isStringArray(test1)) {
  console.log("test1 is a string array");
  console.log(test1.map(str => str.toUpperCase()));  // Use safely
} else {
  console.log("test1 is NOT a string array");
}

// Check second data
if (isStringArray(test2)) {
  console.log("test2 is a string array");
} else {
  console.log("test2 is NOT a string array");
}
