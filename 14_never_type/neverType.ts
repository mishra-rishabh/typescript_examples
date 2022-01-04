/* 
  The never type is used when you are sure that something is never going to occur.
  For example, you write a function which will not return to its end point or
  always throws an exception. 
*/

function throwError( errorMsg: string ): never {
  throw new Error( errorMsg ) ;
}

function keepProcessing(): never {
  while( true ) {
    console.log( 'I am an infinite loop' ) ;
  }
}

throwError( "I am an error" ) ;
keepProcessing() ;