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
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = void 0;\r\nvar Director = /** @class */ (function () {\r\n    function Director() {\r\n    }\r\n    Director.prototype.workDirectorTasks = function () {\r\n        return 'Getting to director tasks';\r\n    };\r\n    return Director;\r\n}());\r\nvar Teacher = /** @class */ (function () {\r\n    function Teacher() {\r\n    }\r\n    Teacher.prototype.workTeacherTasks = function () {\r\n        return 'Getting to work';\r\n    };\r\n    return Teacher;\r\n}());\r\nfunction createEmployee(salary) {\r\n    if (typeof salary === 'number' && salary < 500) {\r\n        return new Teacher();\r\n    }\r\n    return new Director();\r\n}\r\nexports.createEmployee = createEmployee;\r\nfunction isDirector(employee) {\r\n    return employee.workDirectorTasks !== undefined;\r\n}\r\nexports.isDirector = isDirector;\r\nfunction executeWork(employee) {\r\n    if (isDirector(employee)) {\r\n        return employee.workDirectorTasks();\r\n    }\r\n    return employee.workTeacherTasks();\r\n}\r\nexports.executeWork = executeWork;\r\nfunction teachClass(todayClass) {\r\n    if (todayClass === 'Math') {\r\n        return 'Teaching Math';\r\n    }\r\n    return 'Teaching History';\r\n}\r\nexports.teachClass = teachClass;\r\nconsole.log(teachClass('Math'));\r\nconsole.log(teachClass('History'));\r\nconsole.log(executeWork(createEmployee(200)));\r\nconsole.log(executeWork(createEmployee(1000)));\r\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;