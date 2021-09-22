/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animals.js":
/*!************************!*\
  !*** ./src/animals.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Animal\": () => (/* binding */ Animal),\n/* harmony export */   \"dog1\": () => (/* binding */ dog1),\n/* harmony export */   \"dog2\": () => (/* binding */ dog2),\n/* harmony export */   \"duck1\": () => (/* binding */ duck1),\n/* harmony export */   \"duck2\": () => (/* binding */ duck2)\n/* harmony export */ });\nclass Animal {\r\n    constructor(name, image, numberOfLegs) {\r\n        this.name = name;\r\n        this.image = image;\r\n        this.numberOfLegs = numberOfLegs;\r\n    }\r\n    getAnimalInfo() {\r\n        return (`--- ${this.voice} ---\\nname: ${this.name}\\nNumber of Legs: ${this.numberOfLegs}\\nAge: ${this.age}`)\r\n    }\r\n    setAnimalName(name) {\r\n        return this.name = name;\r\n    }\r\n    setAnimalImage(image) {\r\n        return this.image = image;\r\n    }\r\n}\r\n\r\nclass Dog extends Animal {\r\n    constructor(name, image, numberOfLegs, age, voice = \"Hav Hav\") {\r\n        super(name, image, numberOfLegs);\r\n        this.age = age;\r\n        this.voice = voice;\r\n        // console.log(\"Dog Class\")\r\n    }\r\n}\r\n\r\nclass Duck extends Animal {\r\n    constructor(name, image, numberOfLegs, age, voice = \"Vak Vak\") {\r\n        super(name, image, numberOfLegs);\r\n        this.age = age;\r\n        this.voice = voice;\r\n        // console.log(\"Duck Class\")\r\n    }\r\n}\r\n\r\nlet dog1 = new Dog(\"Dog-1\", \"img-src\", 4, 5);\r\nlet dog2 = new Dog(\"Dog-2\", \"img-src\", 4, 7);\r\nlet duck1 = new Duck(\"Duck-1\", \"img-src\", 2, 3);\r\nlet duck2 = new Duck(\"Duck-2\", \"img-src\", 2, 6);\r\n\r\n// dog1.setAnimalName(\"murtaza\")\r\n// console.log(dog1.getAnimalInfo())\n\n//# sourceURL=webpack://Patika-SecondProject/./src/animals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals */ \"./src/animals.js\");\n\r\n\r\n_animals__WEBPACK_IMPORTED_MODULE_0__.dog1.setAnimalName(\"murtaza\");\r\nconsole.log(_animals__WEBPACK_IMPORTED_MODULE_0__.dog1.getAnimalInfo());\n\n//# sourceURL=webpack://Patika-SecondProject/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;