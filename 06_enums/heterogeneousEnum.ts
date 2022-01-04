enum Status {
  Active = "ACTIVE" ,
  Inactive = 2 ,
  Pending
}

console.log( Status.Active ) ;
console.log( Status[ 'Inactive' ] ) ;
console.log( Status[ 2 ] ) ;  // print Inactive
console.log( Status.Pending ) ; // print the incremented value i.e., 2 + 1 ( 2 is the value of Inactive )