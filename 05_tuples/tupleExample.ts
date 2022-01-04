let role: [ string , number , number , boolean ] =  [ "admin" , 1 , 0 , true ] ;
console.log( role ) ;

// when we use ? with type (see below) we can add any values
let tupleArr: [ string , string , number , boolean , boolean? ] = [ "abc" , "xyz" , 10 , true ] ;
tupleArr.push( false ) ;
tupleArr.push( 12 ) ;

console.log( tupleArr ) ;
