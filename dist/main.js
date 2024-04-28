/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Roboto:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --font-color: white;
  --main-color: radial-gradient(circle, rgba(0,40,245,1) 0%, rgba(0,11,131,1) 50%, rgba(0,0,54,1) 100%);
  --secondary-color: #fdf0d5;
  --third-color: #dbd8e3;
  --mrg: 1rem;
  --pdg-v: 0.5rem;
  --pdg-h: 1rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: var(--font-color);
  background: var(--main-color);
}

button {
  padding: var(--pdg-v) var(--pdg-h);
  background-color: black;
  border: none;
}

button:not([disabled]):hover {
  opacity: 0.7;
  cursor: pointer;
}

button:not([disabled]):active {
  transform: scale(0.9);
}

#content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

footer, header {
  display: grid;
  place-items: center;
  margin: var(--mrg);
}

.main-div {
  flex: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
}

.table-header {
  margin: var(--mrg);
  display: flex;
  justify-content: center;
}

.table {
  display: grid;
  place-items: center;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
}

.board-field {
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid white;
  padding: 0;
  min-width: 30px;
  width:50px;
  aspect-ratio: 1;
}

.board-field:not([disabled]):hover  {
  background-color: white;
}

.ship {
  background-color: rgb(133, 132, 132);
}

.sunk {
  background-color: rgba(255, 0, 0, 0.5);
}

.fa-x {
  color: red;
  font-size: 15px;
}
.fa-circle-dot {
  font-size: 5px;
  color: #FFD43B;
}

.fa-trophy {
  color: #FFD43B;
  margin-left: var(--mrg)
}

@media screen and (max-width: 600px) {
  .main-div {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .board-field {
    min-height: 2rem;
    aspect-ratio: 1;
  }

  .table {
    margin: 10px;
  }
}

`, "",{"version":3,"sources":["webpack://./src/assets/styles.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,qGAAqG;EACrG,0BAA0B;EAC1B,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,iCAAiC;EACjC,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,kCAAkC;EAClC,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gDAAgD;AAClD;;AAEA;EACE,qCAAqC;EACrC,uBAAuB;EACvB,UAAU;EACV,eAAe;EACf,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;AACA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,cAAc;EACd;AACF;;AAEA;EACE;IACE,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Roboto:wght@500&display=swap\");\n\n:root {\n  --font-color: white;\n  --main-color: radial-gradient(circle, rgba(0,40,245,1) 0%, rgba(0,11,131,1) 50%, rgba(0,0,54,1) 100%);\n  --secondary-color: #fdf0d5;\n  --third-color: #dbd8e3;\n  --mrg: 1rem;\n  --pdg-v: 0.5rem;\n  --pdg-h: 1rem;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  color: var(--font-color);\n  background: var(--main-color);\n}\n\nbutton {\n  padding: var(--pdg-v) var(--pdg-h);\n  background-color: black;\n  border: none;\n}\n\nbutton:not([disabled]):hover {\n  opacity: 0.7;\n  cursor: pointer;\n}\n\nbutton:not([disabled]):active {\n  transform: scale(0.9);\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nfooter, header {\n  display: grid;\n  place-items: center;\n  margin: var(--mrg);\n}\n\n.main-div {\n  flex: 2;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 50px;\n}\n\n.table-header {\n  margin: var(--mrg);\n  display: flex;\n  justify-content: center;\n}\n\n.table {\n  display: grid;\n  place-items: center;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.board-field {\n  background-color: rgba(0, 0, 0, 0.25);\n  border: 1px solid white;\n  padding: 0;\n  min-width: 30px;\n  width:50px;\n  aspect-ratio: 1;\n}\n\n.board-field:not([disabled]):hover  {\n  background-color: white;\n}\n\n.ship {\n  background-color: rgb(133, 132, 132);\n}\n\n.sunk {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\n.fa-x {\n  color: red;\n  font-size: 15px;\n}\n.fa-circle-dot {\n  font-size: 5px;\n  color: #FFD43B;\n}\n\n.fa-trophy {\n  color: #FFD43B;\n  margin-left: var(--mrg)\n}\n\n@media screen and (max-width: 600px) {\n  .main-div {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .board-field {\n    min-height: 2rem;\n    aspect-ratio: 1;\n  }\n\n  .table {\n    margin: 10px;\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles.css":
/*!*******************************!*\
  !*** ./src/assets/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/elements.js":
/*!************************************!*\
  !*** ./src/components/elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elements: () => (/* binding */ elements)
/* harmony export */ });
/* harmony import */ var _initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializer */ "./src/components/initializer.js");


(0,_initializer__WEBPACK_IMPORTED_MODULE_0__["default"])();

const elements = {
  player1Fields: document.querySelector(".player1 .table"),
  player2Fields: document.querySelector(".player2 .table"),
  player1TableHeader: document.querySelector(".player1 .table-header"),
  player2TableHeader: document.querySelector(".player2 .table-header"),
};


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createFooter() {
  const footer = document.createElement("footer");
  const footerContent = document.createElement("h6");
  footerContent.textContent = "Copyright Izentropowy";
  footer.appendChild(footerContent);
  return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeader() {
  const header = document.createElement("header");
  const headerContent = document.createElement("h1");
  headerContent.textContent = "Battleship";
  header.appendChild(headerContent);
  return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/components/initializer.js":
/*!***************************************!*\
  !*** ./src/components/initializer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mainDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDiv */ "./src/components/mainDiv.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");




function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__["default"])());
  content.appendChild((0,_mainDiv__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);


/***/ }),

/***/ "./src/components/mainDiv.js":
/*!***********************************!*\
  !*** ./src/components/mainDiv.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createBoard(name) {
  const headerDiv = document.createElement("div");
  const header = document.createElement("h4");
  const table = document.createElement("div");
  const board = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let field = document.createElement("button");
      field.classList.add("board-field");
      field.setAttribute("data-x", i);
      field.setAttribute("data-y", j);
      table.appendChild(field);
    }
  }
  table.classList.add("table");
  board.classList.add("board");
  headerDiv.classList.add("table-header");
  header.textContent = name;
  headerDiv.appendChild(header);
  board.appendChild(headerDiv);
  board.appendChild(table);
  return board;
}

function createMainDiv() {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-div");

  const player1 = createBoard("Player");
  player1.classList.add("player1");
  const player2 = createBoard("Computer");
  player2.classList.add("player2");

  mainDiv.appendChild(player1);
  mainDiv.appendChild(player2);
  return mainDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainDiv);


/***/ }),

/***/ "./src/factories/game.js":
/*!*******************************!*\
  !*** ./src/factories/game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/factories/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");
/* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/elements */ "./src/components/elements.js");




class Game {
  constructor() {
    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("RandomName", true);
    this.player2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("Computer", false);
  }

  renderShips() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.player1.gameboard.coordinates[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
          const field = document.querySelector(
            `[data-x="${i}"][data-y="${j}"]`,
          );
          field.classList.add("ship");
        }
        if (this.player2.gameboard.coordinates[i][j] instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
          const field = document.querySelector(
            `.player2 [data-x="${i}"][data-y="${j}"]`,
          );
          field.classList.add("ship");
        }
      }
    }
  }

  renderSunk(ship) {
    const start = ship.coordinates;
    const length = ship.length;
    for (let i = 0; i < length; i++)
      if (ship.direction === "horizontal") {
        ship.gameboard.getField(start[0], start[1] + i).classList.add("sunk");
      } else {
        ship.gameboard.getField(start[0] + i, start[1]).classList.add("sunk");
      }
  }

  renderMove(field, gameboard) {
    const x = field.dataset.x;
    const y = field.dataset.y;

    if (gameboard.coordinates[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      if (gameboard.coordinates[x][y].isSunk) {
        this.renderSunk(gameboard.coordinates[x][y]);
      }
      const xIcon = document.createElement("i");
      xIcon.classList.add("fa-solid", "fa-x");
      field.appendChild(xIcon);
    } else {
      const xIcon = document.createElement("i");
      xIcon.classList.add("fa-solid", "fa-circle-dot");
      field.appendChild(xIcon);
    }
  }

  checkIfEnd(gameboard) {
    if (gameboard.checkIfAllSunk()) {
      _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player1Fields.querySelectorAll("*").forEach((child) => {
        child.disabled = true;
      });
      _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player2Fields.querySelectorAll("*").forEach((child) => {
        child.disabled = true;
      });
      this.renderWinner(!gameboard.isPlayer);
    }
  }

  renderWinner(player) {
    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-trophy");

    if (player) {
      _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player1TableHeader.appendChild(xIcon);
    } else {
      _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player2TableHeader.appendChild(xIcon);
    }
  }

  makeMove = (e) => {
    const field = e.target;
    if (e.target.classList.contains("board-field")) {
      const x = field.dataset.x;
      const y = field.dataset.y;

      field.disabled = true;
      this.player1.makeMove([x, y], this.player2.gameboard);
      this.renderMove(field, this.player2.gameboard);
      this.checkIfEnd(this.player2.gameboard);
      this.makeAIMove();
    }
  };

  makeAIMove = () => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.player1.gameboard.shots[x][y] !== null);
    this.player2.makeMove([x, y], this.player1.gameboard);
    let field = this.player1.gameboard.getField(x, y);
    this.renderMove(field, this.player1.gameboard);
    this.checkIfEnd(this.player1.gameboard);
  };

  addFieldListeners() {
    _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player2Fields.addEventListener("click", this.makeMove);
  }

  startGame() {
    this.player1.gameboard.initializeShips();
    this.player2.gameboard.initializeShips();
    this.renderShips();
    this.addFieldListeners();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/elements */ "./src/components/elements.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");



class Gameboard {
  constructor(isPlayer) {
    this.coordinates = [];
    this.shots = [];
    this.#createArrays();
    this.isPlayer = isPlayer;
    this.fields = isPlayer ? _components_elements__WEBPACK_IMPORTED_MODULE_0__.elements.player1Fields : _components_elements__WEBPACK_IMPORTED_MODULE_0__.elements.player2Fields;
  }

  #createArrays() {
    for (let i = 0; i < 10; i++) {
      this.coordinates[i] = [];
      this.shots[i] = [];
      for (let j = 0; j < 10; j++) {
        this.coordinates[i][j] = null;
        this.shots[i][j] = null;
      }
    }
  }

  placeShip(ship, coordinates) {
    for (let i = 0; i < ship.length; i++) {
      if (ship.direction === "horizontal") {
        this.coordinates[coordinates[0]][coordinates[1] + i] = ship;
      } else {
        this.coordinates[coordinates[0] + i][coordinates[1]] = ship;
      }
    }
  }

  receiveAttack(coordinates) {
    this.coordinates[coordinates[0]][coordinates[1]] === null
      ? (this.shots[coordinates[0]][coordinates[1]] = "miss")
      : (this.coordinates[coordinates[0]][coordinates[1]].hit(),
        (this.shots[coordinates[0]][coordinates[1]] = "hit"));
  }

  checkIfAllSunk() {
    let checker = this.coordinates.map((row) => {
      return row.map((column) => {
        return column !== null ? true : false;
      });
    });
    let checker2 = this.shots.map((row) => {
      return row.map((column) => {
        return column === "hit" ? true : false;
      });
    });
    return JSON.stringify(checker) === JSON.stringify(checker2);
  }

  validateFreeSpace(board, length, direction, x, y) {
    if (x + length > 10 || y + length > 10) return false; // Check if ship exceeds board boundaries

    for (let i = 0; i < length; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          let row;
          let col;
          if (direction === "horizontal") {
            row = x + k;
            col = y + i + j;
          } else {
            row = x + i + j;
            col = y + k;
          }

          if (row < 0 || row >= 10 || col < 0 || col >= 10) continue; // Skip if position is outside board boundaries

          if (board[row][col] !== null) return false; // Check if neighboring space is occupied
        }
      }
    }

    return true;
  }

  initializeShips() {
    const ships = [
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1, this),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1, this),
    ];

    while (ships.length) {
      let ship = ships.shift();
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        ship.direction = x % 2 === 0 ? "vertical" : "horizontal";
      } while (
        !this.validateFreeSpace(
          this.coordinates,
          ship.length,
          ship.direction,
          x,
          y,
        )
      );
      this.placeShip(ship, [x, y]);
      ship.coordinates = [x, y];
    }
  }

  getField(x, y) {
    for (let field of this.fields.childNodes) {
      if (field.dataset.x == x && field.dataset.y == y) {
        return field;
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/gameboard */ "./src/factories/gameboard.js");


class Player {
  constructor(name, isPlayer) {
    this.name = name;
    this.isPlayer = isPlayer;
    this.gameboard = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](isPlayer);
  }

  makeMove(coordinates, enemyBoard) {
    enemyBoard.receiveAttack(coordinates);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length, gameboard, coordinates) {
    this.length = length;
    this.gameboard = gameboard;
    this.coordinates = coordinates;
    this.hits = 0;
    this.isSunk = false;
  }

  hit() {
    this.hits++;
    this.#checkStatus();
  }

  #checkStatus() {
    if (this.hits === this.length) {
      this.isSunk = true;
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles.css */ "./src/assets/styles.css");
/* harmony import */ var _factories_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/game */ "./src/factories/game.js");



const game = new _factories_game__WEBPACK_IMPORTED_MODULE_1__["default"]();
game.startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUhzQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQVM7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNkdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDckJwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNPOztBQUVwQyxpQkFBaUIsdURBQUk7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzPzk1MWYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9pbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvbWFpbkRpdi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6aXRhbEAxJmZhbWlseT1Sb2JvdG86d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XG4gIC0tbWFpbi1jb2xvcjogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLDQwLDI0NSwxKSAwJSwgcmdiYSgwLDExLDEzMSwxKSA1MCUsIHJnYmEoMCwwLDU0LDEpIDEwMCUpO1xuICAtLXNlY29uZGFyeS1jb2xvcjogI2ZkZjBkNTtcbiAgLS10aGlyZC1jb2xvcjogI2RiZDhlMztcbiAgLS1tcmc6IDFyZW07XG4gIC0tcGRnLXY6IDAuNXJlbTtcbiAgLS1wZGctaDogMXJlbTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBkZy12KSB2YXIoLS1wZGctaCk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbiNjb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmZvb3RlciwgaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiB2YXIoLS1tcmcpO1xufVxuXG4ubWFpbi1kaXYge1xuICBmbGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgbWFyZ2luOiB2YXIoLS1tcmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpIC8gcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uYm9hcmQtZmllbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICB3aWR0aDo1MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG59XG5cbi5ib2FyZC1maWVsZDpub3QoW2Rpc2FibGVkXSk6aG92ZXIgIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMTMyLCAxMzIpO1xufVxuXG4uc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xufVxuXG4uZmEteCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5mYS1jaXJjbGUtZG90IHtcbiAgZm9udC1zaXplOiA1cHg7XG4gIGNvbG9yOiAjRkZENDNCO1xufVxuXG4uZmEtdHJvcGh5IHtcbiAgY29sb3I6ICNGRkQ0M0I7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tcmcpXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLWRpdiB7XG4gICAgZmxleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5ib2FyZC1maWVsZCB7XG4gICAgbWluLWhlaWdodDogMnJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gIH1cblxuICAudGFibGUge1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxR0FBcUc7RUFDckcsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6aXRhbEAxJmZhbWlseT1Sb2JvdG86d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIC0tbWFpbi1jb2xvcjogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLDQwLDI0NSwxKSAwJSwgcmdiYSgwLDExLDEzMSwxKSA1MCUsIHJnYmEoMCwwLDU0LDEpIDEwMCUpO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmZGYwZDU7XFxuICAtLXRoaXJkLWNvbG9yOiAjZGJkOGUzO1xcbiAgLS1tcmc6IDFyZW07XFxuICAtLXBkZy12OiAwLjVyZW07XFxuICAtLXBkZy1oOiAxcmVtO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogdmFyKC0tcGRnLXYpIHZhcigtLXBkZy1oKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9vdGVyLCBoZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IHZhcigtLW1yZyk7XFxufVxcblxcbi5tYWluLWRpdiB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRhYmxlLWhlYWRlciB7XFxuICBtYXJnaW46IHZhcigtLW1yZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YWJsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICB3aWR0aDo1MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cXG4uYm9hcmQtZmllbGQ6bm90KFtkaXNhYmxlZF0pOmhvdmVyICB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMywgMTMyLCAxMzIpO1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmZhLXgge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuLmZhLWNpcmNsZS1kb3Qge1xcbiAgZm9udC1zaXplOiA1cHg7XFxuICBjb2xvcjogI0ZGRDQzQjtcXG59XFxuXFxuLmZhLXRyb3BoeSB7XFxuICBjb2xvcjogI0ZGRDQzQjtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tcmcpXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubWFpbi1kaXYge1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib2FyZC1maWVsZCB7XFxuICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gIH1cXG5cXG4gIC50YWJsZSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL2luaXRpYWxpemVyXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG5cbmV4cG9ydCBjb25zdCBlbGVtZW50cyA9IHtcbiAgcGxheWVyMUZpZWxkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxIC50YWJsZVwiKSxcbiAgcGxheWVyMkZpZWxkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyIC50YWJsZVwiKSxcbiAgcGxheWVyMVRhYmxlSGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjEgLnRhYmxlLWhlYWRlclwiKSxcbiAgcGxheWVyMlRhYmxlSGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjIgLnRhYmxlLWhlYWRlclwiKSxcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCBJemVudHJvcG93eVwiO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyQ29udGVudC50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCBjcmVhdGVNYWluRGl2IGZyb20gXCIuL21haW5EaXZcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluRGl2KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7XG4iLCJmdW5jdGlvbiBjcmVhdGVCb2FyZChuYW1lKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1maWVsZFwiKTtcbiAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBpKTtcbiAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBqKTtcbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICB9XG4gIH1cbiAgdGFibGUuY2xhc3NMaXN0LmFkZChcInRhYmxlXCIpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwidGFibGUtaGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBuYW1lO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGFibGUpO1xuICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWRpdlwiKTtcblxuICBjb25zdCBwbGF5ZXIxID0gY3JlYXRlQm9hcmQoXCJQbGF5ZXJcIik7XG4gIHBsYXllcjEuY2xhc3NMaXN0LmFkZChcInBsYXllcjFcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBjcmVhdGVCb2FyZChcIkNvbXB1dGVyXCIpO1xuICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXIyXCIpO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocGxheWVyMSk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocGxheWVyMik7XG4gIHJldHVybiBtYWluRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluRGl2O1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHNcIjtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJSYW5kb21OYW1lXCIsIHRydWUpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiLCBmYWxzZSk7XG4gIH1cblxuICByZW5kZXJTaGlwcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5jb29yZGluYXRlc1tpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEteD1cIiR7aX1cIl1bZGF0YS15PVwiJHtqfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5jb29yZGluYXRlc1tpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLnBsYXllcjIgW2RhdGEteD1cIiR7aX1cIl1bZGF0YS15PVwiJHtqfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclN1bmsoc2hpcCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gc2hpcC5jb29yZGluYXRlcztcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBzaGlwLmdhbWVib2FyZC5nZXRGaWVsZChzdGFydFswXSwgc3RhcnRbMV0gKyBpKS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXAuZ2FtZWJvYXJkLmdldEZpZWxkKHN0YXJ0WzBdICsgaSwgc3RhcnRbMV0pLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgfVxuICB9XG5cbiAgcmVuZGVyTW92ZShmaWVsZCwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgeCA9IGZpZWxkLmRhdGFzZXQueDtcbiAgICBjb25zdCB5ID0gZmllbGQuZGF0YXNldC55O1xuXG4gICAgaWYgKGdhbWVib2FyZC5jb29yZGluYXRlc1t4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIGlmIChnYW1lYm9hcmQuY29vcmRpbmF0ZXNbeF1beV0uaXNTdW5rKSB7XG4gICAgICAgIHRoaXMucmVuZGVyU3VuayhnYW1lYm9hcmQuY29vcmRpbmF0ZXNbeF1beV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgeEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIHhJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhcIik7XG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZCh4SWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICB4SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1jaXJjbGUtZG90XCIpO1xuICAgICAgZmllbGQuYXBwZW5kQ2hpbGQoeEljb24pO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZFbmQoZ2FtZWJvYXJkKSB7XG4gICAgaWYgKGdhbWVib2FyZC5jaGVja0lmQWxsU3VuaygpKSB7XG4gICAgICBlbGVtZW50cy5wbGF5ZXIxRmllbGRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNoaWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgZWxlbWVudHMucGxheWVyMkZpZWxkcy5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKS5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBjaGlsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVuZGVyV2lubmVyKCFnYW1lYm9hcmQuaXNQbGF5ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcldpbm5lcihwbGF5ZXIpIHtcbiAgICBjb25zdCB4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHhJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXRyb3BoeVwiKTtcblxuICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgIGVsZW1lbnRzLnBsYXllcjFUYWJsZUhlYWRlci5hcHBlbmRDaGlsZCh4SWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnRzLnBsYXllcjJUYWJsZUhlYWRlci5hcHBlbmRDaGlsZCh4SWNvbik7XG4gICAgfVxuICB9XG5cbiAgbWFrZU1vdmUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpZWxkID0gZS50YXJnZXQ7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJvYXJkLWZpZWxkXCIpKSB7XG4gICAgICBjb25zdCB4ID0gZmllbGQuZGF0YXNldC54O1xuICAgICAgY29uc3QgeSA9IGZpZWxkLmRhdGFzZXQueTtcblxuICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5ZXIxLm1ha2VNb3ZlKFt4LCB5XSwgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZCk7XG4gICAgICB0aGlzLnJlbmRlck1vdmUoZmllbGQsIHRoaXMucGxheWVyMi5nYW1lYm9hcmQpO1xuICAgICAgdGhpcy5jaGVja0lmRW5kKHRoaXMucGxheWVyMi5nYW1lYm9hcmQpO1xuICAgICAgdGhpcy5tYWtlQUlNb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIG1ha2VBSU1vdmUgPSAoKSA9PiB7XG4gICAgbGV0IHgsIHk7XG4gICAgZG8ge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfSB3aGlsZSAodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5zaG90c1t4XVt5XSAhPT0gbnVsbCk7XG4gICAgdGhpcy5wbGF5ZXIyLm1ha2VNb3ZlKFt4LCB5XSwgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZCk7XG4gICAgbGV0IGZpZWxkID0gdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5nZXRGaWVsZCh4LCB5KTtcbiAgICB0aGlzLnJlbmRlck1vdmUoZmllbGQsIHRoaXMucGxheWVyMS5nYW1lYm9hcmQpO1xuICAgIHRoaXMuY2hlY2tJZkVuZCh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkKTtcbiAgfTtcblxuICBhZGRGaWVsZExpc3RlbmVycygpIHtcbiAgICBlbGVtZW50cy5wbGF5ZXIyRmllbGRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm1ha2VNb3ZlKTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmluaXRpYWxpemVTaGlwcygpO1xuICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQuaW5pdGlhbGl6ZVNoaXBzKCk7XG4gICAgdGhpcy5yZW5kZXJTaGlwcygpO1xuICAgIHRoaXMuYWRkRmllbGRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IHsgZWxlbWVudHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9lbGVtZW50c1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcihpc1BsYXllcikge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXTtcbiAgICB0aGlzLnNob3RzID0gW107XG4gICAgdGhpcy4jY3JlYXRlQXJyYXlzKCk7XG4gICAgdGhpcy5pc1BsYXllciA9IGlzUGxheWVyO1xuICAgIHRoaXMuZmllbGRzID0gaXNQbGF5ZXIgPyBlbGVtZW50cy5wbGF5ZXIxRmllbGRzIDogZWxlbWVudHMucGxheWVyMkZpZWxkcztcbiAgfVxuXG4gICNjcmVhdGVBcnJheXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldID0gW107XG4gICAgICB0aGlzLnNob3RzW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2hvdHNbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXSArIGldID0gc2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNbMF0gKyBpXVtjb29yZGluYXRlc1sxXV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09IG51bGxcbiAgICAgID8gKHRoaXMuc2hvdHNbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IFwibWlzc1wiKVxuICAgICAgOiAodGhpcy5jb29yZGluYXRlc1tjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLmhpdCgpLFxuICAgICAgICAodGhpcy5zaG90c1tjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID0gXCJoaXRcIikpO1xuICB9XG5cbiAgY2hlY2tJZkFsbFN1bmsoKSB7XG4gICAgbGV0IGNoZWNrZXIgPSB0aGlzLmNvb3JkaW5hdGVzLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4gIT09IG51bGwgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBsZXQgY2hlY2tlcjIgPSB0aGlzLnNob3RzLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4gPT09IFwiaGl0XCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY2hlY2tlcikgPT09IEpTT04uc3RyaW5naWZ5KGNoZWNrZXIyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRnJlZVNwYWNlKGJvYXJkLCBsZW5ndGgsIGRpcmVjdGlvbiwgeCwgeSkge1xuICAgIGlmICh4ICsgbGVuZ3RoID4gMTAgfHwgeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7IC8vIENoZWNrIGlmIHNoaXAgZXhjZWVkcyBib2FyZCBib3VuZGFyaWVzXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSAtMTsgayA8PSAxOyBrKyspIHtcbiAgICAgICAgICBsZXQgcm93O1xuICAgICAgICAgIGxldCBjb2w7XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIHJvdyA9IHggKyBrO1xuICAgICAgICAgICAgY29sID0geSArIGkgKyBqO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cgPSB4ICsgaSArIGo7XG4gICAgICAgICAgICBjb2wgPSB5ICsgaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgPj0gMTAgfHwgY29sIDwgMCB8fCBjb2wgPj0gMTApIGNvbnRpbnVlOyAvLyBTa2lwIGlmIHBvc2l0aW9uIGlzIG91dHNpZGUgYm9hcmQgYm91bmRhcmllc1xuXG4gICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlOyAvLyBDaGVjayBpZiBuZWlnaGJvcmluZyBzcGFjZSBpcyBvY2N1cGllZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0aWFsaXplU2hpcHMoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICBuZXcgU2hpcCg0LCB0aGlzKSxcbiAgICAgIG5ldyBTaGlwKDMsIHRoaXMpLFxuICAgICAgbmV3IFNoaXAoMywgdGhpcyksXG4gICAgICBuZXcgU2hpcCgyLCB0aGlzKSxcbiAgICAgIG5ldyBTaGlwKDIsIHRoaXMpLFxuICAgICAgbmV3IFNoaXAoMiwgdGhpcyksXG4gICAgICBuZXcgU2hpcCgxLCB0aGlzKSxcbiAgICAgIG5ldyBTaGlwKDEsIHRoaXMpLFxuICAgICAgbmV3IFNoaXAoMSwgdGhpcyksXG4gICAgICBuZXcgU2hpcCgxLCB0aGlzKSxcbiAgICBdO1xuXG4gICAgd2hpbGUgKHNoaXBzLmxlbmd0aCkge1xuICAgICAgbGV0IHNoaXAgPSBzaGlwcy5zaGlmdCgpO1xuICAgICAgbGV0IHgsIHk7XG4gICAgICBkbyB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHNoaXAuZGlyZWN0aW9uID0geCAlIDIgPT09IDAgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICAhdGhpcy52YWxpZGF0ZUZyZWVTcGFjZShcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLFxuICAgICAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgICAgIHNoaXAuZGlyZWN0aW9uLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIFt4LCB5XSk7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW3gsIHldO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpZWxkKHgsIHkpIHtcbiAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLmZpZWxkcy5jaGlsZE5vZGVzKSB7XG4gICAgICBpZiAoZmllbGQuZGF0YXNldC54ID09IHggJiYgZmllbGQuZGF0YXNldC55ID09IHkpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9mYWN0b3JpZXMvZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzUGxheWVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlzUGxheWVyID0gaXNQbGF5ZXI7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKGlzUGxheWVyKTtcbiAgfVxuXG4gIG1ha2VNb3ZlKGNvb3JkaW5hdGVzLCBlbmVteUJvYXJkKSB7XG4gICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBnYW1lYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMrKztcbiAgICB0aGlzLiNjaGVja1N0YXR1cygpO1xuICB9XG5cbiAgI2NoZWNrU3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzU3VuayA9IHRydWU7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9mYWN0b3JpZXMvZ2FtZVwiO1xuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbmdhbWUuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=