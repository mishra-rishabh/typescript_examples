class Person {
  name: string ;

  constructor( name: string ) {
    this.name = name ;
  }
}

class Employee extends Person {
  empCode: number ;

  constructor( empCode: number , empName: string ) {
    super( empName ) ;
    this.empCode = empCode ;
  }

  displayName(): void {
    console.log( "Name: " + this.name , ", Employee Code: " + this.empCode ) ;
  }
}

let emp = new Employee( 100 , "Raushan" ) ;
emp.displayName() ;