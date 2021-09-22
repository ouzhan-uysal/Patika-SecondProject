export class Animal {
    constructor(name, image, numberOfLegs) {
        this.name = name;
        this.image = image;
        this.numberOfLegs = numberOfLegs;
    }
    getAnimalInfo() {
        return (`--- ${this.voice} ---\nname: ${this.name}\nNumber of Legs: ${this.numberOfLegs}\nAge: ${this.age}`)
    }
    setAnimalName(name) {
        return this.name = name;
    }
    setAnimalImage(image) {
        return this.image = image;
    }
}

class Dog extends Animal {
    constructor(name, image, numberOfLegs, age, voice = "Hav Hav") {
        super(name, image, numberOfLegs);
        this.age = age;
        this.voice = voice;
        // console.log("Dog Class")
    }
}

class Duck extends Animal {
    constructor(name, image, numberOfLegs, age, voice = "Vak Vak") {
        super(name, image, numberOfLegs);
        this.age = age;
        this.voice = voice;
        // console.log("Duck Class")
    }
}

export let dog1 = new Dog("Dog-1", "img-src", 4, 5);
export let dog2 = new Dog("Dog-2", "img-src", 4, 7);
export let duck1 = new Duck("Duck-1", "img-src", 2, 3);
export let duck2 = new Duck("Duck-2", "img-src", 2, 6);

// dog1.setAnimalName("murtaza")
// console.log(dog1.getAnimalInfo())