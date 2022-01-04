class Car {
  name: string ;

  constructor( name: string ) {
    this.name = name ;
  }

  run( speed: number = 0 ) {
    console.log( this.name + " is moving at " + speed + " kmph!" ) ;
  }
}

class Mercedes extends Car {
  constructor( name: string ) {
    super( name ) ;
  }

  run( speed = 150 ) {
    console.log( "Mercedes started!" ) ;
    super.run( speed ) ;
  }
}

class Honda extends Car {
  constructor( name: string ) {
    super( name ) ;
  }

  run( speed = 100 ) {
    console.log( "Honda started!" ) ;
    super.run( speed ) ;
  }
}

let mercedesObj = new Mercedes( "Mercedes BoatTail" ) ;
let hondaObj = new Honda( "City" ) ;

mercedesObj.run() ;
hondaObj.run() ;