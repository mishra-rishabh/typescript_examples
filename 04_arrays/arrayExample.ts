// js way
let arr = [ 10 , "abc" , '2.76' , false ] ;
console.log( arr ) ;

// ts way of above snippet( also called tuple )
// only for limited values
let arr1: [ string , number , boolean ] = [ "abc" , 10 , true ] ;
console.log( arr1 ) ;

// ts way- for unknown number of values
let arr3: any[] = [ 10 , 20 , "abcd" , 2.87 , false , true ] ;
console.log( arr3 ) ;

// ts way
// array of only strings
let arrStr: string[] = [ 'abc' , "def" , "ghi" , 'jkl' , `mno` ] ;
console.log( arrStr ) ;

arrStr.push( "pqr" ) ;
// arrStr.push( 12 ) ;  // will give error
console.log( arrStr ) ;

// array of either strings or numbers (any one)
let role: string[] | number[] = [ "admin" , "user" ] ;

