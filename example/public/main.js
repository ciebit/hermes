/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/source/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Hermes.ts":
/*!***********************!*\
  !*** ./app/Hermes.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    var Hermes = (function () {\n        function Hermes() {\n            this.listeners = {};\n        }\n        Hermes.prototype.addListener = function (eventName, callback, singleCall, key) {\n            if (singleCall === void 0) { singleCall = false; }\n            if (key === void 0) { key = ''; }\n            if (!(eventName in this.listeners)) {\n                this.listeners[eventName] = [];\n            }\n            this.listeners[eventName].push({\n                'callback': callback,\n                'key': key,\n                'singleCall': singleCall,\n            });\n            return this;\n        };\n        Hermes.prototype.dispatch = function (eventName) {\n            var args = [];\n            for (var _i = 1; _i < arguments.length; _i++) {\n                args[_i - 1] = arguments[_i];\n            }\n            if (!this.listeners[eventName]) {\n                return this;\n            }\n            for (var key in this.listeners[eventName]) {\n                var item = this.listeners[eventName][key];\n                item.callback.apply(item.callback, args);\n                if (item.singleCall) {\n                    delete this.listeners[eventName][key];\n                }\n            }\n            return this;\n        };\n        Hermes.prototype.remove = function (eventName, callback) {\n            if (!(eventName in this.listeners)) {\n                return this;\n            }\n            for (var key in this.listeners[eventName]) {\n                var listener = this.listeners[eventName][key];\n                if (listener.callback === callback) {\n                    delete this.listeners[eventName][key];\n                }\n            }\n            return this;\n        };\n        return Hermes;\n    }());\n    exports.default = Hermes;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./app/Hermes.ts?");

/***/ }),

/***/ "./example/source/index.ts":
/*!*********************************!*\
  !*** ./example/source/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./../../app/Hermes */ \"./app/Hermes.ts\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Hermes_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", { value: true });\n    document.addEventListener('DOMContentLoaded', function () {\n        var printContainer = document.querySelector('.print');\n        var hermes = new Hermes_1.default;\n        var countPrint = 0;\n        hermes.addListener('print', printRecursive);\n        print('Text');\n        function print(text) {\n            var p = document.createElement('p');\n            p.textContent = text;\n            printContainer.appendChild(p);\n            hermes.dispatch('print', p);\n        }\n        function printRecursive(p) {\n            countPrint++;\n            p.textContent += ' ' + countPrint;\n            if (countPrint >= 5) {\n                hermes.remove('print', printRecursive);\n            }\n            print('Recursive');\n        }\n    });\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./example/source/index.ts?");

/***/ })

/******/ });