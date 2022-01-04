// void function returns nothing

// void function
function sayHi() {
  console.log( "Hi" ) ;

  // return 10 ;  // this will not give an error
}

// explicitly define void function
function sayHello(): void {
  console.log( "hello" ) ;

  // return 1 ; // this will give an error
}