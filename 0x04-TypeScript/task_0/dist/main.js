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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\r\nvar student1 = {\r\n    firstName: 'Alice',\r\n    lastName: 'Smith',\r\n    age: 21,\r\n    location: 'Nairobi',\r\n};\r\nvar student2 = {\r\n    firstName: 'Bob',\r\n    lastName: 'Johnson',\r\n    age: 23,\r\n    location: 'Mombasa',\r\n};\r\nvar studentsList = [student1, student2];\r\nvar table = document.createElement('table');\r\nstudentsList.forEach(function (student) {\r\n    var row = document.createElement('tr');\r\n    var firstNameCell = document.createElement('td');\r\n    firstNameCell.textContent = student.firstName;\r\n    var locationCell = document.createElement('td');\r\n    locationCell.textContent = student.location;\r\n    row.appendChild(firstNameCell);\r\n    row.appendChild(locationCell);\r\n    table.appendChild(row);\r\n});\r\ndocument.body.appendChild(table);\r\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;