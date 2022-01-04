/*
  TypeScript provides the concept of function overloading.
  You can have multiple functions with the same name but different
  parameter types and return type. However, the number of parameters
  should be the same.
*/
// The last function should have the function implementation.
function add(a, b) {
    return a + b;
}
var result1 = add("hello ", "there");
var result2 = add(1, 2);
console.log(result1);
console.log(result2);
