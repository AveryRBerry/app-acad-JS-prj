/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/getWeatherData */ \"./src/scripts/getWeatherData.js\");\n// import Example from \"./scripts/example\";\n\ndocument.addEventListener(\"DOMContentLoaded\", async function () {\n  const main = document.getElementById(\"main\");\n  const weather = new _scripts_getWeatherData__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const weatherData = await weather.checkWeather();\n  console.log(weatherData.main.temp);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNtRDtBQUVuREMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBaUI7RUFDM0QsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFFNUMsTUFBTUMsT0FBTyxHQUFHLElBQUlMLCtEQUFXLENBQUMsQ0FBQztFQUNqQyxNQUFNTSxXQUFXLEdBQUcsTUFBTUQsT0FBTyxDQUFDRSxZQUFZLENBQUMsQ0FBQztFQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFdBQVcsQ0FBQ0gsSUFBSSxDQUFDTyxJQUFJLENBQUM7QUFDdEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLWFjYWQtanMtcHJqLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5pbXBvcnQgV2VhdGhlckRhdGEgZnJvbSBcIi4vc2NyaXB0cy9nZXRXZWF0aGVyRGF0YVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gICAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyRGF0YSgpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5jaGVja1dlYXRoZXIoKVxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLm1haW4udGVtcClcbn0pOyJdLCJuYW1lcyI6WyJXZWF0aGVyRGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsIndlYXRoZXIiLCJ3ZWF0aGVyRGF0YSIsImNoZWNrV2VhdGhlciIsImNvbnNvbGUiLCJsb2ciLCJ0ZW1wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/getWeatherData.js":
/*!***************************************!*\
  !*** ./src/scripts/getWeatherData.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass WeatherData {\n  constructor() {\n    // this.ele = ele\n    // this.ele.innerHTML = \"<h1>Whats the weather</h1>\";\n    // this.ele.addEventListener(\"click\", this.handleClick.bind(this))\n\n    this.apiKey = \"7dff519f917b5485d7f4dfe9e415db09\";\n    this.apiURL = \"https://api.openweathermap.org/data/2.5/weather?units=imperial&q=New%20York\";\n  }\n  checkWeather = async () => {\n    const response = await fetch(this.apiURL + `&appid=${this.apiKey}`);\n    const WeatherData = await response.json();\n    return WeatherData;\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherData);\n\n// handleClick = async () => {\n//     this.getTemp()\n//     // console.log(await this.getTemp())\n// }\n\n// getTemp = async () => {\n//     const WeatherData = await this.checkWeather();\n//     // this.ele.children[0].innerText = `Temp ${temp}`;\n//     return WeatherData.main.temp\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nZXRXZWF0aGVyRGF0YS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBVyxDQUFDO0VBQ2RDLFdBQVdBLENBQUEsRUFBSTtJQUNYO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUNDLE1BQU0sR0FBRyxrQ0FBa0M7SUFDaEQsSUFBSSxDQUFDQyxNQUFNLEdBQUcsNkVBQTZFO0VBQy9GO0VBRUFDLFlBQVksR0FBRyxNQUFBQSxDQUFBLEtBQVk7SUFDdkIsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxJQUFJLENBQUNILE1BQU0sR0FBSSxVQUFTLElBQUksQ0FBQ0QsTUFBTyxFQUFDLENBQUM7SUFDbkUsTUFBTUYsV0FBVyxHQUFHLE1BQU1LLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDekMsT0FBT1AsV0FBVztFQUN0QixDQUFDO0FBRUw7QUFDQSwrREFBZUEsV0FBVzs7QUFLdEI7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC1hY2FkLWpzLXByai8uL3NyYy9zY3JpcHRzL2dldFdlYXRoZXJEYXRhLmpzP2UyNDkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV2VhdGhlckRhdGEge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gdGhpcy5lbGUgPSBlbGVcbiAgICAgICAgLy8gdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+V2hhdHMgdGhlIHdlYXRoZXI8L2gxPlwiO1xuICAgICAgICAvLyB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKVxuXG4gICAgICAgIHRoaXMuYXBpS2V5ID0gXCI3ZGZmNTE5ZjkxN2I1NDg1ZDdmNGRmZTllNDE1ZGIwOVwiO1xuICAgICAgICB0aGlzLmFwaVVSTCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9aW1wZXJpYWwmcT1OZXclMjBZb3JrXCJcbiAgICB9XG5cbiAgICBjaGVja1dlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5hcGlVUkwgKyBgJmFwcGlkPSR7dGhpcy5hcGlLZXl9YCk7XG4gICAgICAgIGNvbnN0IFdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gV2VhdGhlckRhdGE7XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyRGF0YVxuXG5cblxuXG4gICAgLy8gaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuZ2V0VGVtcCgpXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGF3YWl0IHRoaXMuZ2V0VGVtcCgpKVxuICAgIC8vIH1cblxuXG5cbiAgICAvLyBnZXRUZW1wID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBXZWF0aGVyRGF0YSA9IGF3YWl0IHRoaXMuY2hlY2tXZWF0aGVyKCk7XG4gICAgLy8gICAgIC8vIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IGBUZW1wICR7dGVtcH1gO1xuICAgIC8vICAgICByZXR1cm4gV2VhdGhlckRhdGEubWFpbi50ZW1wXG4gICAgLy8gfVxuIl0sIm5hbWVzIjpbIldlYXRoZXJEYXRhIiwiY29uc3RydWN0b3IiLCJhcGlLZXkiLCJhcGlVUkwiLCJjaGVja1dlYXRoZXIiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/getWeatherData.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAtYWNhZC1qcy1wcmovLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;