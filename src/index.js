import { instanceData } from './animals';

// instance_data[0].setAnimalName("at adam");
// console.log(instanceData[0].getAnimalInfo());
console.log(instanceData);

let cardElem = '';
instanceData.forEach((element) => {
  cardElem += `
    <div class="card">
      <img src="${element.image}" alt="${element}">
      <div class="info">
        <h1 class="title">${element.name}</h1>
        <p class="description">Yaşı: ${element.age}</p>
        <p class="description">Ayak Sayısı: ${element.numberOfLegs}</p>
      </div>
    </div>
    `;
  document.getElementById('contents').innerHTML = cardElem;
});

/*
const results = createAnimal(animals);
console.log(animals, results);
*/
