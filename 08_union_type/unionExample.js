/*
  TypeScript allows us to use more than one data type for a variable
  or a function parameter. This is called union type.
*/
var val;
val = "hello";
console.log(val);
val = 10;
console.log(val);
// val = true ;  // error
// union for function parameters
function combineValues(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b);
    }
    else {
        return (a.toString() + b.toString());
    }
}
var result1 = combineValues("Hello", " There");
var result2 = combineValues(10, 20);
console.log(result1);
console.log(result2);
