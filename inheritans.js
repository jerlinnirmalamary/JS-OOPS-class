//Parent class or Super class or base class
class Vechicle{
    constructor(gear,speed){
        this.gear=gear;
        this.speed=speed;
    }
    display(){ return `No of Gears = ${this.gear} spead = ${this.speed}`;  }
}


// BMW it child class or Sub class
class BMW extends Vechicle{
    constructor(gear,speed,wheels){
        // Super method parent la iruka constactor ku call pannuim value pass panuim
        super(gear,speed)
        this.wheels=wheels;
    }
display(){return `${super.display()} No of Wheels = ${this.wheels}`; }
}
let obj1= new BMW(5,100,2);
console.log(`${obj1.display()}`);


console.log(`gear ${obj1.gear} , speed ${obj1.speed},wheels ${obj1.wheels}`);
