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

eval("\n/// <reference path=\"./subjects/Teacher.ts\" />\n/// <reference path=\"./subjects/Subjects.ts\" />\n/// <reference path=\"./subjects/cpp.ts\" />\n/// <reference path=\"./subjects/react.ts\" />\n/// <reference path=\"./subjects/java.ts\" />\nvar cppTeacher = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    experienceTeachingC: 10,\n};\nvar cpp = new Subjects.Cpp();\ncpp.setTeacher = cppTeacher; // ✅ Assign, not call\nconsole.log(\"Cpp:\");\nconsole.log(cpp.getRequirements());\nconsole.log(cpp.getAvailableTeacher());\n\n\n//# sourceURL=webpack://task_4/./js/main.ts?");

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