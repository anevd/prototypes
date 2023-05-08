function Animal(name, sex, breed) {
	this.name = name;
	this.sex = sex;
	this.breed = breed;
}

function Dog(name, sex, breed, walksNumber, favoriteTrick) {
	Animal.call(this, name, sex, breed);
	this.walksNumber = walksNumber;
	this.favoriteTrick = favoriteTrick;
	this.sound = "Woof";
}

Dog.prototype.sayHi = function () {
	return `${this.sound}! My name is ${this.name}`;
};

function Cat(name, sex, breed, damagedFlowersNumber, favoriteBed) {
	Animal.call(this, name, sex, breed);
	this.damagedFlowersNumber = damagedFlowersNumber;
	this.favoriteBed = favoriteBed;
	this.sound = "Meow";
}

Cat.prototype.sayHi = function () {
	return `${this.sound}! My name is ${this.name}`;
};

Object.setPrototypeOf(Dog.prototype, Animal.prototype);
Object.setPrototypeOf(Cat.prototype, Animal.prototype);

const max = new Dog("Max", "male", "beagle", 3, "sit");
const peach = new Cat("Peach", "female", "brittish longhair", 10, "box");

// console.log(max);
// console.log(peach);
// console.log(max.sayHi());
// console.log(peach.sayHi());
