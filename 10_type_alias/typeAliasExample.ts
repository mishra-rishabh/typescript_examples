function combine(
  a: string | number , b: string | number ,
  c: string | number , d: string | number
) {
  if( typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number' ) {
    return ( a + b + c + d ) ;
  }
  else {
    return a.toString() + b.toString() + c.toString() + d.toString() ;
  }
}

let result1 = combine( 1 , 2 , 3 , 4 ) ;
let result2 = combine( "I " , "Love" , " My " , "India." ) ;

console.log( result1 ) ;
console.log( result2 ) ;

// in the above function we can see that, types are redundant
// and we have to write the same type again and again for every variable
// we can define these type into a single variable

// type aliasing
type varType = string | number ;

function combine2(
  a: varType , b: varType ,
  c: varType , d: varType
) {
  if( typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number' ) {
    return ( a + b + c + d ) ;
  }
  else {
    return a.toString() + b.toString() + c.toString() + d.toString() ;
  }
}
