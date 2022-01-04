function add(a: number, b: number) {
  return a + b;
}

// this line will give an error because '2' is string and in add() we are demanding number
// console.log( add( '2' , 3 ) ) ;

// but in javascript it will work fine as the function in js doesn't require any datatype for the arguments

console.log(add(2, 3));
