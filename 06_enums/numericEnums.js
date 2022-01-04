var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
/*
  the above snippet will set the default numeric values -
  Newspaper = 0
  Newsletter = 1
  Magazine = 2
  Book = 3
*/
console.log(PrintMedia);
console.log(PrintMedia.Book);
console.log(PrintMedia.Magazine);
console.log(PrintMedia[0]);
console.log(PrintMedia[2]);
// We also have the option to initialize the first numeric value ourselves.
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
/*
  the above snippet will set the initial value as 1 for the first member
  and increment the rest by 1 from the numeric value of the first value
*/
console.log(Color);
