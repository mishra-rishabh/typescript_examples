enum PrintMedia {
  Newspaper , 
  Newsletter ,
  Magazine ,
  Book
}

/* 
  the above snippet will set the default numeric values -
  Newspaper = 0
  Newsletter = 1
  Magazine = 2
  Book = 3
*/

console.log( PrintMedia ) ;
console.log( PrintMedia.Book ) ;
console.log( PrintMedia.Magazine ) ;
console.log( PrintMedia[ 0 ] ) ;
console.log( PrintMedia[ 2 ] ) ;

// We also have the option to initialize the first numeric value ourselves.
enum Color {
  Red = 1 ,
  Green ,
  Blue
}
/* 
  the above snippet will set the initial value as 1 for the first member
  and increment the rest by 1 from the numeric value of the first value 
*/

console.log( Color ) ;