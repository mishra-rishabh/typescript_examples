class EmployeeClass {
  empCode: string ;
  empName: string ;

  constructor( empCode: string , empName: string ) {
    this.empCode = empCode ;
    this.empName = empName ;
  }

  getSalary(): number {
    return 10000 ;
  }
}

let emp1 = new EmployeeClass( "JW123" , "Joe West" ) ;
console.log( emp1 ) ;
console.log( emp1.empName ) ;
console.log( emp1.empCode ) ;
console.log( emp1.getSalary() ) ;



