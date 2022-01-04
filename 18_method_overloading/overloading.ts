/* 
  TypeScript provides the concept of function overloading.
  You can have multiple functions with the same name but different
  parameter types and return type. However, the number of parameters
  should be the same.
*/
// The last function should have the function implementation.

function add( a: string , b: string ): string ;

function add( a: number , b: number ): number ;

function add( a: any , b: any ): any {
  return a + b ;
}

let result1 = add( "hello " , "there" ) ;
let result2 = add( 1 , 2 ) ;

console.log( result1 ) ;
console.log( result2 ) ;

/* 
  Function overloading with different number of parameters
  and types with same name is not supported.
*/
// function display(a:string, b:string):void //Compiler Error: Duplicate function implementation
// {
//     console.log(a + b);
// }

// function display(a:number): void //Compiler Error: Duplicate function implementation
// {
//     console.log(a);
// }

