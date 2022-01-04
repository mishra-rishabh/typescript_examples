 class Users {
   name: '' ;
   email: '' ;

   addUser( user ) {
     return `${ user } is added` ;
   }
 }

let User1 = new Users ;
let result = User1.addUser( "Vicky" ) ;
console.log( result ) ;