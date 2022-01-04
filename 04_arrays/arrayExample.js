// js way
var arr = [10, "abc", '2.76', false];
console.log(arr);
// ts way of above snippet
// only for limited values
var arr1 = ["abc", 10, true];
console.log(arr1);
// ts way- for unknown number of values
var arr3 = [10, 20, "abcd", 2.87, false, true];
console.log(arr3);
// ts way
// array of only strings
var arrStr = ['abc', "def", "ghi", 'jkl', "mno"];
console.log(arrStr);
arrStr.push("pqr");
// arrStr.push( 12 ) ;  // will give error
console.log(arrStr);
// array of either strings or numbers (any one)
var role = ["admin", "user"];
