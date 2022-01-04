var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Magazine"] = 1] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 2] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
    else if (mediaName === 'Times Now' || mediaName === 'The Hindu') {
        return PrintMedia.Newspaper;
    }
    else {
        return PrintMedia.Book;
    }
}
var mediaType1 = getMedia("Forbes");
var mediaType2 = getMedia("Times Now");
var mediaType3 = getMedia("Zero to One");
console.log(mediaType1);
console.log(mediaType2);
console.log(mediaType3);
