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

eval("\r\nvar teacher3 = {\r\n    firstName: 'John',\r\n    lastName: 'Doe',\r\n    fullTimeEmployee: false,\r\n    location: 'London',\r\n    contract: false,\r\n};\r\nconsole.log(teacher3);\r\nvar director1 = {\r\n    firstName: 'John',\r\n    lastName: 'Doe',\r\n    location: 'London',\r\n    fullTimeEmployee: true,\r\n    numberOfReports: 17,\r\n};\r\nconsole.log(director1);\r\nvar printTeacher = function (firstName, lastName) {\r\n    return \"\".concat(firstName.charAt(0), \".\").concat(lastName, \"}\");\r\n};\r\nconsole.log(printTeacher(\"John\", \"Doe\"));\r\nvar StudentClass = /** @class */ (function () {\r\n    function StudentClass(firstName, lastName) {\r\n        this.firstName = firstName;\r\n        this.lastName = lastName;\r\n    }\r\n    StudentClass.prototype.workOnHomework = function () {\r\n        return \"Currently working\";\r\n    };\r\n    StudentClass.prototype.displayName = function () {\r\n        return this.firstName;\r\n    };\r\n    return StudentClass;\r\n}());\r\nvar student = new StudentClass(\"Sandra\", \"Malilo\");\r\nconsole.log(student.displayName());\r\nconsole.log(student.workOnHomework);\r\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

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