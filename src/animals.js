export class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }

  getAnimalInfo() {
    return (`--- ${this.voice} ---\nname: ${this.name}\nNumber of Legs: ${this.numberOfLegs}\nAge: ${this.age}`);
  }

  setAnimalName(name) {
    return this.name === name;
  }

  setAnimalImage(image) {
    return this.image === image;
  }
}

class Dog extends Animal {
  constructor(name, image, numberOfLegs, age, voice = 'Hav Hav') {
    super(name, image, numberOfLegs);
    this.age = age;
    this.voice = voice;
  }
}

class Duck extends Animal {
  constructor(name, image, numberOfLegs, age, voice = 'Vak Vak') {
    super(name, image, numberOfLegs);
    this.age = age;
    this.voice = voice;
  }
}

export const instanceData = [];

const dog1 = new Dog('Dog - 1', 'https://t3.ftcdn.net/jpg/04/21/79/28/360_F_421792832_1Za7PX7xO2LiAU6tbKTCew1jQPCXMH0E.jpg', 4, 1);
const dog2 = new Dog('Dog - 2', 'https://static.wixstatic.com/media/bce34a_3d5a97747c1147ec810e19855d58f7e0~mv2.png/v1/fill/w_280,h_360,al_c,q_85,usm_0.66_1.00_0.01/dark%20blue.webp', 4, 2);
const dog3 = new Dog('Dog - 3', 'https://www.alcatrazeast.com/wp-content/uploads/2016/05/mcgruff-the-crime-dog.jpg', 4, 7);
const dog4 = new Dog('Dog - 4', 'https://static.wixstatic.com/media/e00a6b_f48866f727ed41059fad94485dc9eb94~mv2.jpg/v1/fit/w_280,h_362,q_90/e00a6b_f48866f727ed41059fad94485dc9eb94~mv2.jpg', 4, 3);
const dog5 = new Dog('Dog - 5', 'https://cdn.shopify.com/s/files/1/1395/8415/collections/d_grande.png?v=1493063823', 4, 4);

const duck1 = new Duck('Duck - 1', 'https://t4.ftcdn.net/jpg/04/37/07/59/360_F_437075928_KslM943OCzDjWE0zeMNYj4mxGAuuZ4Aj.jpg', 2, 3);
const duck2 = new Duck('Duck - 2', 'https://t4.ftcdn.net/jpg/00/68/72/49/360_F_68724918_VQXqdN0gRSJibARpOYqBJsPfQrzvRfIn.jpg', 2, 4);
const duck3 = new Duck('Duck - 3', 'https://t3.ftcdn.net/jpg/03/47/93/38/360_F_347933856_sKeawBGBzSjqvLqGoMj00pP6MPHahrwP.jpg', 2, 5);
const duck4 = new Duck('Duck - 4', 'https://t3.ftcdn.net/jpg/02/87/36/78/360_F_287367846_0SvTQFetvEjeXVISeyM9I6MaX3jm2WRs.jpg', 2, 6);
const duck5 = new Duck('Duck - 5', 'https://d3rf6j5nx5r04a.cloudfront.net/8ZKplcGXNBeK9FOISG1zF6Vb0C0=/280x360/product/2/6/d480aa2260954e41b141b261d4ebe03f_opt.jpg', 2, 3);

instanceData.push(dog1);
instanceData.push(dog2);
instanceData.push(dog3);
instanceData.push(dog4);
instanceData.push(dog5);
instanceData.push(duck1);
instanceData.push(duck2);
instanceData.push(duck3);
instanceData.push(duck4);
instanceData.push(duck5);
