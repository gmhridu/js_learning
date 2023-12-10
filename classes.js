class person {
  constructor(name, age){
    this.name = name ;
    this.age = age;
  }
  play(status) {
    console.log(`${this.name} aged ${this.age} is playing ${status}`);
  }
}

const person1 = new person("Sakib", 35);
const person2 = new person ("Tamim", 36);

// person1.play("bad");
person2.play("well");

