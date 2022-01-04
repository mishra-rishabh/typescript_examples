// normal declaration
const person = {
  name: "barry allen" ,
  age: 28 ,
  email: "barry@gmail.com"
}

console.log( person ) ;
console.log( person.name ) ;

// we can also tell the type of the object that we are going to use
const user: { name: string , age: number , email: string } = {
  name: "joe west" ,
  age: 56 ,
  email: "joe@yahoo.in"
}

console.log( user ) ;
console.log( user.name ) ;

// another method
type objType = { name: string , age: number , email: string } ;

const user1: objType = {
  name: "iris west" ,
  age: 23 ,
  email: "iris@yahoo.in"
}

const user2: objType = {
  name: "cisco ramon" ,
  age: 28 ,
  email: "cisco@yahoo.in"
}

console.log( user1 ) ;
console.log( user2 ) ;