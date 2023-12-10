/*const car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "White",
  start: function(){
    console.log("car has started");
  },
  drive: function(){
    console.log("Car is driving");
  },
};

console.log(car["name"]);
console.log(car.model);
console.log(car.weight);
console.log(car.color);
car.start();
car.drive();*/

const person = {
  firstName : "John",
  lastName  : "Doe",
  id        : 5566,
  fullName  : function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.firstName);
person.fullName();


