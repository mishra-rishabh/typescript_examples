let data: any ;
data = 20 ;
// data = "hello" ;

let item: string ;
item = data ; // implicitly converts item to the type of variable data 

console.log( item ) ;
console.log( typeof item ) ;

// in above example everything seems to be working fine
// but if we use unknown then there will be an issue

let data1: unknown ;
data1 = 20 ;
data1 = "hello" ;

let item1: string ;
// item1 = data1 ;  // this will give an error because item1 wants only string