/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// const Sequencer = require('./scripts/sequencer');\nconst Track = __webpack_require__(/*! ./scripts/track */ \"./src/scripts/track.js\");\n\nconst Step = __webpack_require__(/*! ./scripts/step.js */ \"./src/scripts/step.js\");\n\nconst PatternGrid = __webpack_require__(/*! ./scripts/pattern_grid.js */ \"./src/scripts/pattern_grid.js\"); // window.Step = require('./scripts/step.js');\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Welcome to stepSeq\");\n  const audioContext = new AudioContext();\n  const sampleRate = audioContext.sampleRate;\n  const buffer = audioContext.createBuffer(1, sampleRate * 1, sampleRate);\n  const channelData = buffer.getChannelData(0);\n\n  for (let i = 0; i < buffer.length; i++) {\n    channelData[i] = Math.random() * 2 - 1;\n  }\n\n  const primaryGainControl = audioContext.createGain();\n  primaryGainControl.gain.setValueAtTime(0.05, 0);\n  primaryGainControl.connect(audioContext.destination);\n  const button = document.createElement('button');\n  button.innerText = \"White Noise\";\n  button.addEventListener(\"click\", () => {\n    const whiteNoiseSource = audioContext.createBufferSource();\n    whiteNoiseSource.buffer = buffer;\n    whiteNoiseSource.connect(primaryGainControl);\n    whiteNoiseSource.start();\n  });\n  document.body.appendChild(button); //working on step to show up\n\n  const testStep = new Step();\n  console.log(testStep.test());\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsK0NBQUQsQ0FBckI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxtQkFBTyxDQUFDLGdEQUFELENBQXBCOztBQUNBLE1BQU1FLFdBQVcsR0FBR0YsbUJBQU8sQ0FBQyxnRUFBRCxDQUEzQixDLENBQ0E7OztBQUdBRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2pEQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtFQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxZQUFKLEVBQXJCO0VBQ0EsTUFBTUMsVUFBVSxHQUFHRixZQUFZLENBQUNFLFVBQWhDO0VBQ0EsTUFBTUMsTUFBTSxHQUFHSCxZQUFZLENBQUNJLFlBQWIsQ0FBMEIsQ0FBMUIsRUFBNkJGLFVBQVUsR0FBRyxDQUExQyxFQUE2Q0EsVUFBN0MsQ0FBZjtFQUVBLE1BQU1HLFdBQVcsR0FBR0YsTUFBTSxDQUFDRyxjQUFQLENBQXNCLENBQXRCLENBQXBCOztFQUVBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osTUFBTSxDQUFDSyxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF3QztJQUNyQ0YsV0FBVyxDQUFDRSxDQUFELENBQVgsR0FBaUJFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixDQUFoQixHQUFvQixDQUFyQztFQUNGOztFQUlELE1BQU1DLGtCQUFrQixHQUFHWCxZQUFZLENBQUNZLFVBQWIsRUFBM0I7RUFDQUQsa0JBQWtCLENBQUNFLElBQW5CLENBQXdCQyxjQUF4QixDQUF1QyxJQUF2QyxFQUE2QyxDQUE3QztFQUdBSCxrQkFBa0IsQ0FBQ0ksT0FBbkIsQ0FBMkJmLFlBQVksQ0FBQ2dCLFdBQXhDO0VBRUEsTUFBTUMsTUFBTSxHQUFHckIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixRQUF2QixDQUFmO0VBQ0FELE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQixhQUFuQjtFQUNBRixNQUFNLENBQUNwQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxNQUFNO0lBQ3BDLE1BQU11QixnQkFBZ0IsR0FBR3BCLFlBQVksQ0FBQ3FCLGtCQUFiLEVBQXpCO0lBQ0FELGdCQUFnQixDQUFDakIsTUFBakIsR0FBMEJBLE1BQTFCO0lBQ0FpQixnQkFBZ0IsQ0FBQ0wsT0FBakIsQ0FBeUJKLGtCQUF6QjtJQUVBUyxnQkFBZ0IsQ0FBQ0UsS0FBakI7RUFDRixDQU5EO0VBUUExQixRQUFRLENBQUMyQixJQUFULENBQWNDLFdBQWQsQ0FBMEJQLE1BQTFCLEVBL0JpRCxDQW9DakQ7O0VBRUEsTUFBTVEsUUFBUSxHQUFHLElBQUkvQixJQUFKLEVBQWpCO0VBQ0FJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEIsUUFBUSxDQUFDQyxJQUFULEVBQVo7QUFVRixDQWpERCIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBTZXF1ZW5jZXIgPSByZXF1aXJlKCcuL3NjcmlwdHMvc2VxdWVuY2VyJyk7XG5jb25zdCBUcmFjayA9IHJlcXVpcmUoJy4vc2NyaXB0cy90cmFjaycpO1xuY29uc3QgU3RlcCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9zdGVwLmpzJyk7XG5jb25zdCBQYXR0ZXJuR3JpZCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9wYXR0ZXJuX2dyaWQuanMnKTtcbi8vIHdpbmRvdy5TdGVwID0gcmVxdWlyZSgnLi9zY3JpcHRzL3N0ZXAuanMnKTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICBjb25zb2xlLmxvZyhcIldlbGNvbWUgdG8gc3RlcFNlcVwiKVxuXG4gICBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICBjb25zdCBzYW1wbGVSYXRlID0gYXVkaW9Db250ZXh0LnNhbXBsZVJhdGU7XG4gICBjb25zdCBidWZmZXIgPSBhdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyKDEsIHNhbXBsZVJhdGUgKiAxLCBzYW1wbGVSYXRlKSBcblxuICAgY29uc3QgY2hhbm5lbERhdGEgPSBidWZmZXIuZ2V0Q2hhbm5lbERhdGEoMClcblxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYW5uZWxEYXRhW2ldID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgfVxuXG4gICBcblxuICAgY29uc3QgcHJpbWFyeUdhaW5Db250cm9sID0gYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgIHByaW1hcnlHYWluQ29udHJvbC5nYWluLnNldFZhbHVlQXRUaW1lKDAuMDUsIDApO1xuXG4gICBcbiAgIHByaW1hcnlHYWluQ29udHJvbC5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgYnV0dG9uLmlubmVyVGV4dCA9IFwiV2hpdGUgTm9pc2VcIjtcbiAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3Qgd2hpdGVOb2lzZVNvdXJjZSA9IGF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgIHdoaXRlTm9pc2VTb3VyY2UuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgd2hpdGVOb2lzZVNvdXJjZS5jb25uZWN0KHByaW1hcnlHYWluQ29udHJvbCk7XG5cbiAgICAgIHdoaXRlTm9pc2VTb3VyY2Uuc3RhcnQoKTtcbiAgIH0pXG5cbiAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXG5cblxuICAgLy93b3JraW5nIG9uIHN0ZXAgdG8gc2hvdyB1cFxuXG4gICBjb25zdCB0ZXN0U3RlcCA9IG5ldyBTdGVwKCk7XG4gICBjb25zb2xlLmxvZyh0ZXN0U3RlcC50ZXN0KCkpO1xuXG5cblxuXG5cblxuXG5cbiAgIFxufSk7Il0sIm5hbWVzIjpbIlRyYWNrIiwicmVxdWlyZSIsIlN0ZXAiLCJQYXR0ZXJuR3JpZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJhdWRpb0NvbnRleHQiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwiYnVmZmVyIiwiY3JlYXRlQnVmZmVyIiwiY2hhbm5lbERhdGEiLCJnZXRDaGFubmVsRGF0YSIsImkiLCJsZW5ndGgiLCJNYXRoIiwicmFuZG9tIiwicHJpbWFyeUdhaW5Db250cm9sIiwiY3JlYXRlR2FpbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJ3aGl0ZU5vaXNlU291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwic3RhcnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0ZXN0U3RlcCIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/pattern_grid.js":
/*!*************************************!*\
  !*** ./src/scripts/pattern_grid.js ***!
  \*************************************/
/***/ (function(module) {

eval("class PatternGrid {\n  constructor() {}\n\n}\n\nmodule.exports = PatternGrid;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYXR0ZXJuX2dyaWQuanMuanMiLCJuYW1lcyI6WyJQYXR0ZXJuR3JpZCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3BhdHRlcm5fZ3JpZC5qcz9iNWYzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBhdHRlcm5HcmlkIHtcbiAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGF0dGVybkdyaWQ7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxXQUFOLENBQWtCO0VBQ2ZDLFdBQVcsR0FBRyxDQUViOztBQUhjOztBQU1sQkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxXQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/pattern_grid.js\n");

/***/ }),

/***/ "./src/scripts/step.js":
/*!*****************************!*\
  !*** ./src/scripts/step.js ***!
  \*****************************/
/***/ (function(module) {

eval("class Step {\n  constructor() {\n    let pitch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;\n    let velocity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n    let glide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    this.pitch = pitch;\n    this.velocity = velocity;\n    this.glide = glide;\n  }\n\n  test() {\n    const hello = console.log(\"saying hi\");\n    return hello;\n  }\n\n}\n\nmodule.exports = Step;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdGVwLmpzLmpzIiwibmFtZXMiOlsiU3RlcCIsImNvbnN0cnVjdG9yIiwicGl0Y2giLCJ2ZWxvY2l0eSIsImdsaWRlIiwidGVzdCIsImhlbGxvIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9zdGVwLmpzPzRjZmMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3RlcCB7XG4gICBjb25zdHJ1Y3RvcihwaXRjaCA9IDUwLCB2ZWxvY2l0eSA9IDEwMCwgZ2xpZGUgPSBmYWxzZSkge1xuICAgICAgdGhpcy5waXRjaCA9IHBpdGNoO1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgICAgdGhpcy5nbGlkZSA9IGdsaWRlO1xuICAgfVxuXG4gICB0ZXN0KCkge1xuICAgICAgY29uc3QgaGVsbG8gPSBjb25zb2xlLmxvZyhcInNheWluZyBoaVwiKTtcbiAgICAgIHJldHVybiBoZWxsbztcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGVwOyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBTixDQUFXO0VBQ1JDLFdBQVcsR0FBNEM7SUFBQSxJQUEzQ0MsS0FBMkMsdUVBQW5DLEVBQW1DO0lBQUEsSUFBL0JDLFFBQStCLHVFQUFwQixHQUFvQjtJQUFBLElBQWZDLEtBQWUsdUVBQVAsS0FBTztJQUNwRCxLQUFLRixLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtFQUNGOztFQUVEQyxJQUFJLEdBQUc7SUFDSixNQUFNQyxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosQ0FBZDtJQUNBLE9BQU9GLEtBQVA7RUFDRjs7QUFWTzs7QUFhWEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixJQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/step.js\n");

/***/ }),

/***/ "./src/scripts/track.js":
/*!******************************!*\
  !*** ./src/scripts/track.js ***!
  \******************************/
/***/ (function(module) {

eval("class Track {\n  constructor() {\n    let stepCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;\n    this.stepCount = stepCount;\n  } // step(pitch, velocity, glide) {\n  // }\n\n\n  grid(subDivision) {\n    const grid = [];\n\n    for (let i = 0; i < this.length; i++) {\n      grid.push();\n    }\n  }\n\n}\n\nmodule.exports = Track;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90cmFjay5qcy5qcyIsIm5hbWVzIjpbIlRyYWNrIiwiY29uc3RydWN0b3IiLCJzdGVwQ291bnQiLCJncmlkIiwic3ViRGl2aXNpb24iLCJpIiwibGVuZ3RoIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy90cmFjay5qcz8zMTNlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRyYWNrIHtcbiAgIGNvbnN0cnVjdG9yKHN0ZXBDb3VudCA9IDMyKSB7XG4gICAgICB0aGlzLnN0ZXBDb3VudCA9IHN0ZXBDb3VudDtcbiAgIH1cblxuICAgLy8gc3RlcChwaXRjaCwgdmVsb2NpdHksIGdsaWRlKSB7XG5cbiAgIC8vIH1cblxuICAgZ3JpZChzdWJEaXZpc2lvbikge1xuICAgICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBncmlkLnB1c2goKVxuICAgICAgfVxuICAgfVxuXG5cblxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFjazsiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQU4sQ0FBWTtFQUNUQyxXQUFXLEdBQWlCO0lBQUEsSUFBaEJDLFNBQWdCLHVFQUFKLEVBQUk7SUFDekIsS0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7RUFDRixDQUhRLENBS1Q7RUFFQTs7O0VBRUFDLElBQUksQ0FBQ0MsV0FBRCxFQUFjO0lBQ2YsTUFBTUQsSUFBSSxHQUFHLEVBQWI7O0lBQ0EsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtDLE1BQXpCLEVBQWlDRCxDQUFDLEVBQWxDLEVBQXNDO01BQ25DRixJQUFJLENBQUNJLElBQUw7SUFDRjtFQUNIOztBQWRROztBQXNCWkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVCxLQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/track.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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