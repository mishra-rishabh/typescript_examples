enum PrintMedia {
  Newspaper = "The Hindu" ,
  Book = "Zero to One"
}

console.log( PrintMedia.Newspaper ) ;
console.log( PrintMedia[ "Book" ] ) ;

/* 
  String enums are similar to numeric enums, except that the enum values are initialized
  with string values rather than numeric values.
  ----------------------------------------------------------------------------------------------------
  The difference between numeric and string enums is that numeric enum values are auto-incremented,
  while string enum values need to be individually initialized.
*/