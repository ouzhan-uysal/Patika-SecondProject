import { instance_data } from "./animals";

// instance_data[0].setAnimalName("at adam");
console.log(instance_data[0].getAnimalInfo());
console.log(instance_data);

let cardElem = "";
instance_data.forEach(element => {
    cardElem += `
    <div class="grid-item">
    <img src="${element.image}" alt="${element}">
    <p class="title">${element.name}</p>
    <p class="description">Yaşı: ${element.age}</p>
    <p class="description">Ayak Sayısı: ${element.numberOfLegs}</p>
    </div>
    `;
    document.getElementById("contents").innerHTML = cardElem;
});

/*
const results = createAnimal(animals);
console.log(animals, results);
*/