enum PrintMedia {
  Newspaper ,
  Magazine ,
  Book
}

function getMedia( mediaName: string ): PrintMedia {
  if( mediaName === 'Forbes'|| mediaName === 'Outlook' ) {
    return PrintMedia.Magazine ;
  }
  else if( mediaName === 'Times Now' || mediaName === 'The Hindu' ) {
    return PrintMedia.Newspaper ;
  }
  else {
    return PrintMedia.Book ;
  }
}

let mediaType1: PrintMedia = getMedia( "Forbes" ) ;
let mediaType2: PrintMedia = getMedia( "Times Now" ) ;
let mediaType3: PrintMedia = getMedia( "Zero to One" ) ;

console.log( mediaType1 ) ;
console.log( mediaType2 ) ;
console.log( mediaType3 ) ;