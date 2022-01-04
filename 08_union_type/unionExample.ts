/* 
  TypeScript allows us to use more than one data type for a variable
  or a function parameter. This is called union type.
*/

let val: ( string | number ) ;

val = "hello" ;
console.log( val ) ;

val = 10 ;
console.log( val ) ;

// val = true ;  // error

// union for function parameters
function combineValues( a: ( string | number ) , b: ( string | number ) ) {
  if( typeof a === 'number' && typeof b === 'number' ) {
    return ( a + b ) ;
  }
  else {
    return ( a.toString() + b.toString() ) ;
  }
}

let result1 = combineValues( "Hello" , " There" ) ; 
let result2 = combineValues( 10 , 20 ) ; 

console.log( result1 ) ;
console.log( result2 ) ;