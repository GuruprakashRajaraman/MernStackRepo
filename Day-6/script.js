class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}
let obj1 =new Person("Guru",23,"Male");
let obj2 =new Person("Prakash",23,"Male");
let obj3 =new Person("Charlie",23,"Male");
let obj4 =new Person("GP",23,"Male");
console.log(`All the person names are
person 1:${obj1.name}
person 2:${obj2.name}
person 3:${obj3.name}
`);


class Car{
    drive(){
        console.log("drive the car");
    }
    brake(){
        console.log("apply the brakes");
    }
}
const car1=new Car;
car1.drive();
car1.brake();