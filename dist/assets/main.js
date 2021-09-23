"use strict";

var _animals = require("./animals");

// instance_data[0].setAnimalName("at adam");
console.log(_animals.instanceData[0].getAnimalInfo());
console.log(_animals.instanceData);
var cardElem = '';

_animals.instanceData.forEach(function (element) {
  cardElem += "\n    <div class=\"grid-item\">\n    <img src=\"".concat(element.image, "\" alt=\"").concat(element, "\">\n    <p class=\"title\">").concat(element.name, "</p>\n    <p class=\"description\">Ya\u015F\u0131: ").concat(element.age, "</p>\n    <p class=\"description\">Ayak Say\u0131s\u0131: ").concat(element.numberOfLegs, "</p>\n    </div>\n    ");
  document.getElementById('contents').innerHTML = cardElem;
});
/*
const results = createAnimal(animals);
console.log(animals, results);
*/
