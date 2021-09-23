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

export let instance_data = []

let dog1 = new Dog("Ralph Wolf", "https://via.placeholder.com/256x128.png?text=Ralph+Wolf", 4, 5);
let dog2 = new Dog("Sam Sheepdog", "https://via.placeholder.com/256x128.png?text=Sam+Sheepdog", 4, 7);
let duck1 = new Duck("Daffy Duck", "https://via.placeholder.com/256x128.png?text=Daffy+Duck", 2, 3);
let duck2 = new Duck("Daisy Duck", "https://via.placeholder.com/256x128.png?text=Daisy+Duck", 2, 6);

instance_data.push(dog1);
instance_data.push(dog2);
instance_data.push(duck1);
instance_data.push(duck2);

// dog1.setAnimalName("murtaza")
// console.log(dog1.getAnimalInfo())

/*
const animals = [
    {name: 'Dog-1', legs: 4, age: 5},
    {name: 'Dog-2', legs: 4, age: 7},
    {name: 'Duck-1', legs: 2, age: 3},
    {name: 'Duck-2', legs: 2, age, 6}
];
const createAnimal = (animals) => {
    return animals.filter(animal => animal.age);
}
export {createAnimal, animals as default};
*/