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
  constructor(name, image, numberOfLegs, age, voice = 'Hav Hav') {
    super(name, image, numberOfLegs);
    this.age = age;
    this.voice = voice;
    // console.log("Dog Class")
  }
}

class Duck extends Animal {
  constructor(name, image, numberOfLegs, age, voice = 'Vak Vak') {
    super(name, image, numberOfLegs);
    this.age = age;
    this.voice = voice;
    // console.log("Duck Class")
  }
}

export const instanceData = [];

const dog1 = new Dog('Ralph Wolf', 'https://via.placeholder.com/256x128.png?text=Ralph+Wolf', 4, 5);
const dog2 = new Dog('Sam Sheepdog', 'https://via.placeholder.com/256x128.png?text=Sam+Sheepdog', 4, 7);
const dog3 = new Dog('x3', 'https://via.placeholder.com/256x128.png?text=x3', 4, 7);
const dog4 = new Dog('x4', 'https://via.placeholder.com/256x128.png?text=x4', 4, 7);

const duck1 = new Duck('Daffy Duck', 'https://via.placeholder.com/256x128.png?text=Daffy+Duck', 2, 3);
const duck2 = new Duck('Daisy Duck', 'https://via.placeholder.com/256x128.png?text=Daisy+Duck', 2, 6);
const duck3 = new Duck('x5', 'https://via.placeholder.com/256x128.png?text=x5', 2, 3);
const duck4 = new Duck('x6', 'https://via.placeholder.com/256x128.png?text=x6', 2, 3);


instanceData.push(dog1);
instanceData.push(dog2);
instanceData.push(dog3);
instanceData.push(dog4);
instanceData.push(duck1);
instanceData.push(duck2);
instanceData.push(duck3);
instanceData.push(duck4);

// dog1.setAnimalName("murtaza");
// console.log(dog1.getAnimalInfo());

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
