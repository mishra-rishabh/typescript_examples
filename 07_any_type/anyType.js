/*
  TypeScript has type-checking and compile-time checks.
  However, we do not always have prior knowledge about the type of some variables,
  especially when there are user-entered values from third party libraries.
  In such cases, we need a provision that can deal with dynamic content.
  The Any type comes in handy here.
*/
var anyValue = "Hello";
console.log(anyValue);
anyValue = 10;
console.log(anyValue);
anyValue = true;
console.log(anyValue);
/*
  you can create an array of type any[] if you are not sure about the types of values
  that can contain this array.
*/
var arr = ["Cat", 1, true];
arr.push(2.75);
arr.push("Elephant");
console.log(arr);
