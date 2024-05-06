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
/* harmony import */ var _helpers_smartAImove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/smartAImove */ "./src/helpers/smartAImove.js");





class Game {
  constructor() {
    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("RandomName", true);
    this.player2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("Computer", false);
    this.lastAIshot = null;
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
        // if (this.player2.gameboard.coordinates[i][j] instanceof Ship) {
        //   const field = document.querySelector(
        //     `.player2 [data-x="${i}"][data-y="${j}"]`,
        //   );
        //   field.classList.add("ship");
        // }
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
    let moveFound = false;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.player1.gameboard.shots[i][j] === "hit") {
          if (!this.player1.gameboard.coordinates[i][j].isSunk) {
            let move = (0,_helpers_smartAImove__WEBPACK_IMPORTED_MODULE_3__.calculateMove)(this.player1.gameboard.shots, i, j);
            x = move[0];
            y = move[1];
            moveFound = true;
            break; // exit the inner loop
          }
        }
      }
      if (moveFound) {
        break; // exit the outer loop
      }
    }

    if (x === undefined) {
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (this.player1.gameboard.shots[x][y] !== null);
    }

    this.player2.makeMove([x, y], this.player1.gameboard);
    let field = this.player1.gameboard.getField(x, y);
    this.renderMove(field, this.player1.gameboard);
    this.checkIfEnd(this.player1.gameboard);
    if (this.player1.gameboard.coordinates[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      (0,_helpers_smartAImove__WEBPACK_IMPORTED_MODULE_3__.markAdjacent)(this.player1.gameboard, x, y);
    }

    return [x, y];
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");
/* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/elements */ "./src/components/elements.js");
// jest.mock("../components/elements", () => jest.fn());



class Gameboard {
  constructor(isPlayer) {
    this.coordinates = [];
    this.shots = [];
    this.#createArrays();
    this.isPlayer = isPlayer;
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
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](4, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1, this),
      new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](1, this),
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
    let fields = this.isPlayer
      ? _components_elements__WEBPACK_IMPORTED_MODULE_1__.elements.player1Fields
      : _components_elements__WEBPACK_IMPORTED_MODULE_1__.elements.player2Fields;
    for (let field of fields.childNodes) {
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
  constructor(length, gameboard, coordinates, direction) {
    this.length = length;
    this.gameboard = gameboard;
    this.coordinates = coordinates;
    this.direction = direction;
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


/***/ }),

/***/ "./src/helpers/smartAImove.js":
/*!************************************!*\
  !*** ./src/helpers/smartAImove.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateMove: () => (/* binding */ calculateMove),
/* harmony export */   evaluateDirection: () => (/* binding */ evaluateDirection),
/* harmony export */   markAdjacent: () => (/* binding */ markAdjacent)
/* harmony export */ });
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/ship */ "./src/factories/ship.js");


function evaluateDirection(board, i, j) {
  if (j + 1 < 10 && board[i][j + 1] === "hit") {
    return "horizontal";
  }
  if (i + 1 < 10 && board[i + 1][j] === "hit") {
    return "vertical";
  }
  return false;
}

function calculateMove(board, i, j) {
  let selectedOption;
  do {
    if (!evaluateDirection(board, i, j)) {
      let options = [
        [i, j + 1],
        [i, j - 1],
        [i - 1, j],
        [i + 1, j],
      ];

      options = options.filter((option) => {
        // Check if both elements of the option array are within bounds
        return option.every((coord) => coord >= 0 && coord <= 9);
      });

      let random = Math.floor(Math.random() * options.length);

      selectedOption = options[random];
    }
    if (evaluateDirection(board, i, j) === "horizontal") {
      let k = 0;
      while (board[i][j + k] === "hit") {
        k++;
      }
      let options = [
        [i, j - 1],
        [i, j + k],
      ];
      let random = Math.floor(Math.random() * 2);

      if (j === 0) random = 1;

      selectedOption = options[random];
    }
    if (evaluateDirection(board, i, j) === "vertical") {
      let k = 0;
      while (board[i + k][j] === "hit") {
        k++;
      }
      let options = [
        [i - 1, j],
        [i + k, j],
      ];
      let random = Math.floor(Math.random() * 2);

      if (i === 0) random = 1;

      selectedOption = options[random];
    }
  } while (board[selectedOption[0]][selectedOption[1]]);
  return selectedOption;
}

function markAdjacent(gameboard, x, y) {
  if (gameboard.coordinates[x][y].isSunk) {
    let start = gameboard.coordinates[x][y].coordinates;
    let length = gameboard.coordinates[x][y].length;
    let end;
    if (gameboard.coordinates[x][y].direction === "horizontal") {
      end = [start[0], start[1] + length - 1];
    } else {
      end = [start[0] + length - 1, start[1]];
    }

    for (let i = start[0] - 1; i <= end[0] + 1; i++) {
      for (let j = start[1] - 1; j <= end[1] + 1; j++) {
        if (i >= 0 && i < 10 && j >= 0 && j < 10) {
          if (gameboard.shots[i][j] === null) {
            gameboard.shots[i][j] = "adjacent";
          }
        }
      }
    }
  }
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLCtCQUErQixpQkFBaUI7QUFDaEQsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBEOzs7Ozs7O1VDekYxRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNPOztBQUVwQyxpQkFBaUIsdURBQUk7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzPzk1MWYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9pbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvbWFpbkRpdi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMvc21hcnRBSW1vdmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWxAMSZmYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xuICAtLW1haW4tY29sb3I6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCw0MCwyNDUsMSkgMCUsIHJnYmEoMCwxMSwxMzEsMSkgNTAlLCByZ2JhKDAsMCw1NCwxKSAxMDAlKTtcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmZGYwZDU7XG4gIC0tdGhpcmQtY29sb3I6ICNkYmQ4ZTM7XG4gIC0tbXJnOiAxcmVtO1xuICAtLXBkZy12OiAwLjVyZW07XG4gIC0tcGRnLWg6IDFyZW07XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiB2YXIoLS1wZGctdikgdmFyKC0tcGRnLWgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4jY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5mb290ZXIsIGhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogdmFyKC0tbXJnKTtcbn1cblxuLm1haW4tZGl2IHtcbiAgZmxleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIG1hcmdpbjogdmFyKC0tbXJnKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmJvYXJkLWZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgd2lkdGg6NTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xufVxuXG4uYm9hcmQtZmllbGQ6bm90KFtkaXNhYmxlZF0pOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDEzMiwgMTMyKTtcbn1cblxuLnN1bmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbn1cblxuLmZhLXgge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZmEtY2lyY2xlLWRvdCB7XG4gIGZvbnQtc2l6ZTogNXB4O1xuICBjb2xvcjogI0ZGRDQzQjtcbn1cblxuLmZhLXRyb3BoeSB7XG4gIGNvbG9yOiAjRkZENDNCO1xuICBtYXJnaW4tbGVmdDogdmFyKC0tbXJnKVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi1kaXYge1xuICAgIGZsZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuYm9hcmQtZmllbGQge1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUdBQXFHO0VBQ3JHLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlOml0YWxAMSZmYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XFxuICAtLW1haW4tY29sb3I6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMCw0MCwyNDUsMSkgMCUsIHJnYmEoMCwxMSwxMzEsMSkgNTAlLCByZ2JhKDAsMCw1NCwxKSAxMDAlKTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmRmMGQ1O1xcbiAgLS10aGlyZC1jb2xvcjogI2RiZDhlMztcXG4gIC0tbXJnOiAxcmVtO1xcbiAgLS1wZGctdjogMC41cmVtO1xcbiAgLS1wZGctaDogMXJlbTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IHZhcigtLXBkZy12KSB2YXIoLS1wZGctaCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvb3RlciwgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiB2YXIoLS1tcmcpO1xcbn1cXG5cXG4ubWFpbi1kaXYge1xcbiAgZmxleDogMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi50YWJsZS1oZWFkZXIge1xcbiAgbWFyZ2luOiB2YXIoLS1tcmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFibGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsIDFmcikgLyByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5ib2FyZC1maWVsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbiAgd2lkdGg6NTBweDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLmJvYXJkLWZpZWxkOm5vdChbZGlzYWJsZWRdKTpob3ZlciAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDEzMiwgMTMyKTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5mYS14IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5mYS1jaXJjbGUtZG90IHtcXG4gIGZvbnQtc2l6ZTogNXB4O1xcbiAgY29sb3I6ICNGRkQ0M0I7XFxufVxcblxcbi5mYS10cm9waHkge1xcbiAgY29sb3I6ICNGRkQ0M0I7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbXJnKVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm1haW4tZGl2IHtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm9hcmQtZmllbGQge1xcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICB9XFxuXFxuICAudGFibGUge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi9pbml0aWFsaXplclwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuXG5leHBvcnQgY29uc3QgZWxlbWVudHMgPSB7XG4gIHBsYXllcjFGaWVsZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMSAudGFibGVcIiksXG4gIHBsYXllcjJGaWVsZHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyMiAudGFibGVcIiksXG4gIHBsYXllcjFUYWJsZUhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxIC50YWJsZS1oZWFkZXJcIiksXG4gIHBsYXllcjJUYWJsZUhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyIC50YWJsZS1oZWFkZXJcIiksXG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgSXplbnRyb3Bvd3lcIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7XG4iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XG4iLCJpbXBvcnQgY3JlYXRlTWFpbkRpdiBmcm9tIFwiLi9tYWluRGl2XCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW5EaXYoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUJvYXJkKG5hbWUpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImJvYXJkLWZpZWxkXCIpO1xuICAgICAgZmllbGQuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGkpO1xuICAgICAgZmllbGQuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGopO1xuICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoZmllbGQpO1xuICAgIH1cbiAgfVxuICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwidGFibGVcIik7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZS1oZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBib2FyZC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuICBib2FyZC5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gIHJldHVybiBib2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkRpdigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tZGl2XCIpO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBjcmVhdGVCb2FyZChcIlBsYXllclwiKTtcbiAgcGxheWVyMS5jbGFzc0xpc3QuYWRkKFwicGxheWVyMVwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGNyZWF0ZUJvYXJkKFwiQ29tcHV0ZXJcIik7XG4gIHBsYXllcjIuY2xhc3NMaXN0LmFkZChcInBsYXllcjJcIik7XG5cbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChwbGF5ZXIxKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChwbGF5ZXIyKTtcbiAgcmV0dXJuIG1haW5EaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5EaXY7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgZWxlbWVudHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTW92ZSwgbWFya0FkamFjZW50IH0gZnJvbSBcIi4uL2hlbHBlcnMvc21hcnRBSW1vdmVcIjtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJSYW5kb21OYW1lXCIsIHRydWUpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiLCBmYWxzZSk7XG4gICAgdGhpcy5sYXN0QUlzaG90ID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlclNoaXBzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBbZGF0YS14PVwiJHtpfVwiXVtkYXRhLXk9XCIke2p9XCJdYCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmICh0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW2ldW2pdIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAvLyAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgLy8gICAgIGAucGxheWVyMiBbZGF0YS14PVwiJHtpfVwiXVtkYXRhLXk9XCIke2p9XCJdYCxcbiAgICAgICAgLy8gICApO1xuICAgICAgICAvLyAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU3VuayhzaGlwKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBzaGlwLmNvb3JkaW5hdGVzO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIHNoaXAuZ2FtZWJvYXJkLmdldEZpZWxkKHN0YXJ0WzBdLCBzdGFydFsxXSArIGkpLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcC5nYW1lYm9hcmQuZ2V0RmllbGQoc3RhcnRbMF0gKyBpLCBzdGFydFsxXSkuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICB9XG4gIH1cblxuICByZW5kZXJNb3ZlKGZpZWxkLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCB4ID0gZmllbGQuZGF0YXNldC54O1xuICAgIGNvbnN0IHkgPSBmaWVsZC5kYXRhc2V0Lnk7XG5cbiAgICBpZiAoZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgaWYgKGdhbWVib2FyZC5jb29yZGluYXRlc1t4XVt5XS5pc1N1bmspIHtcbiAgICAgICAgdGhpcy5yZW5kZXJTdW5rKGdhbWVib2FyZC5jb29yZGluYXRlc1t4XVt5XSk7XG4gICAgICB9XG4gICAgICBjb25zdCB4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgeEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEteFwiKTtcbiAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHhJY29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIHhJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWNpcmNsZS1kb3RcIik7XG4gICAgICBmaWVsZC5hcHBlbmRDaGlsZCh4SWNvbik7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZkVuZChnYW1lYm9hcmQpIHtcbiAgICBpZiAoZ2FtZWJvYXJkLmNoZWNrSWZBbGxTdW5rKCkpIHtcbiAgICAgIGVsZW1lbnRzLnBsYXllcjFGaWVsZHMucXVlcnlTZWxlY3RvckFsbChcIipcIikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgY2hpbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICBlbGVtZW50cy5wbGF5ZXIyRmllbGRzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGNoaWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZW5kZXJXaW5uZXIoIWdhbWVib2FyZC5pc1BsYXllcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyV2lubmVyKHBsYXllcikge1xuICAgIGNvbnN0IHhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgeEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtdHJvcGh5XCIpO1xuXG4gICAgaWYgKHBsYXllcikge1xuICAgICAgZWxlbWVudHMucGxheWVyMVRhYmxlSGVhZGVyLmFwcGVuZENoaWxkKHhJY29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudHMucGxheWVyMlRhYmxlSGVhZGVyLmFwcGVuZENoaWxkKHhJY29uKTtcbiAgICB9XG4gIH1cblxuICBtYWtlTW92ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSBlLnRhcmdldDtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmQtZmllbGRcIikpIHtcbiAgICAgIGNvbnN0IHggPSBmaWVsZC5kYXRhc2V0Lng7XG4gICAgICBjb25zdCB5ID0gZmllbGQuZGF0YXNldC55O1xuXG4gICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllcjEubWFrZU1vdmUoW3gsIHldLCB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkKTtcbiAgICAgIHRoaXMucmVuZGVyTW92ZShmaWVsZCwgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZCk7XG4gICAgICB0aGlzLmNoZWNrSWZFbmQodGhpcy5wbGF5ZXIyLmdhbWVib2FyZCk7XG4gICAgICB0aGlzLm1ha2VBSU1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgbWFrZUFJTW92ZSA9ICgpID0+IHtcbiAgICBsZXQgeCwgeTtcbiAgICBsZXQgbW92ZUZvdW5kID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5zaG90c1tpXVtqXSA9PT0gXCJoaXRcIikge1xuICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5jb29yZGluYXRlc1tpXVtqXS5pc1N1bmspIHtcbiAgICAgICAgICAgIGxldCBtb3ZlID0gY2FsY3VsYXRlTW92ZSh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnNob3RzLCBpLCBqKTtcbiAgICAgICAgICAgIHggPSBtb3ZlWzBdO1xuICAgICAgICAgICAgeSA9IG1vdmVbMV07XG4gICAgICAgICAgICBtb3ZlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7IC8vIGV4aXQgdGhlIGlubmVyIGxvb3BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb3ZlRm91bmQpIHtcbiAgICAgICAgYnJlYWs7IC8vIGV4aXQgdGhlIG91dGVyIGxvb3BcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkbyB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB9IHdoaWxlICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnNob3RzW3hdW3ldICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLnBsYXllcjIubWFrZU1vdmUoW3gsIHldLCB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkKTtcbiAgICBsZXQgZmllbGQgPSB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmdldEZpZWxkKHgsIHkpO1xuICAgIHRoaXMucmVuZGVyTW92ZShmaWVsZCwgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZCk7XG4gICAgdGhpcy5jaGVja0lmRW5kKHRoaXMucGxheWVyMS5nYW1lYm9hcmQpO1xuICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgbWFya0FkamFjZW50KHRoaXMucGxheWVyMS5nYW1lYm9hcmQsIHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG5cbiAgYWRkRmllbGRMaXN0ZW5lcnMoKSB7XG4gICAgZWxlbWVudHMucGxheWVyMkZpZWxkcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5tYWtlTW92ZSk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5pbml0aWFsaXplU2hpcHMoKTtcbiAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmluaXRpYWxpemVTaGlwcygpO1xuICAgIHRoaXMucmVuZGVyU2hpcHMoKTtcbiAgICB0aGlzLmFkZEZpZWxkTGlzdGVuZXJzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsIi8vIGplc3QubW9jayhcIi4uL2NvbXBvbmVudHMvZWxlbWVudHNcIiwgKCkgPT4gamVzdC5mbigpKTtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHNcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoaXNQbGF5ZXIpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW107XG4gICAgdGhpcy5zaG90cyA9IFtdO1xuICAgIHRoaXMuI2NyZWF0ZUFycmF5cygpO1xuICAgIHRoaXMuaXNQbGF5ZXIgPSBpc1BsYXllcjtcbiAgfVxuXG4gICNjcmVhdGVBcnJheXMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB0aGlzLmNvb3JkaW5hdGVzW2ldID0gW107XG4gICAgICB0aGlzLnNob3RzW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlc1tpXVtqXSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2hvdHNbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNoaXAuZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXSArIGldID0gc2hpcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNbMF0gKyBpXVtjb29yZGluYXRlc1sxXV0gPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09IG51bGxcbiAgICAgID8gKHRoaXMuc2hvdHNbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IFwibWlzc1wiKVxuICAgICAgOiAodGhpcy5jb29yZGluYXRlc1tjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLmhpdCgpLFxuICAgICAgICAodGhpcy5zaG90c1tjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID0gXCJoaXRcIikpO1xuICB9XG5cbiAgY2hlY2tJZkFsbFN1bmsoKSB7XG4gICAgbGV0IGNoZWNrZXIgPSB0aGlzLmNvb3JkaW5hdGVzLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4gIT09IG51bGwgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBsZXQgY2hlY2tlcjIgPSB0aGlzLnNob3RzLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4gPT09IFwiaGl0XCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY2hlY2tlcikgPT09IEpTT04uc3RyaW5naWZ5KGNoZWNrZXIyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRnJlZVNwYWNlKGJvYXJkLCBsZW5ndGgsIGRpcmVjdGlvbiwgeCwgeSkge1xuICAgIGlmICh4ICsgbGVuZ3RoID4gMTAgfHwgeSArIGxlbmd0aCA+IDEwKSByZXR1cm4gZmFsc2U7IC8vIENoZWNrIGlmIHNoaXAgZXhjZWVkcyBib2FyZCBib3VuZGFyaWVzXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSAtMTsgayA8PSAxOyBrKyspIHtcbiAgICAgICAgICBsZXQgcm93O1xuICAgICAgICAgIGxldCBjb2w7XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIHJvdyA9IHggKyBrO1xuICAgICAgICAgICAgY29sID0geSArIGkgKyBqO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3cgPSB4ICsgaSArIGo7XG4gICAgICAgICAgICBjb2wgPSB5ICsgaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgPj0gMTAgfHwgY29sIDwgMCB8fCBjb2wgPj0gMTApIGNvbnRpbnVlOyAvLyBTa2lwIGlmIHBvc2l0aW9uIGlzIG91dHNpZGUgYm9hcmQgYm91bmRhcmllc1xuXG4gICAgICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlOyAvLyBDaGVjayBpZiBuZWlnaGJvcmluZyBzcGFjZSBpcyBvY2N1cGllZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0aWFsaXplU2hpcHMoKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICBuZXcgU2hpcCg0LCB0aGlzKSxcbiAgICAgIG5ldyBTaGlwKDMsIHRoaXMpLFxuICAgICAgbmV3IFNoaXAoMywgdGhpcyksXG4gICAgICBuZXcgU2hpcCgyLCB0aGlzKSxcbiAgICAgIG5ldyBTaGlwKDIsIHRoaXMpLFxuICAgICAgbmV3IFNoaXAoMiwgdGhpcyksXG4gICAgICBuZXcgU2hpcCgxLCB0aGlzKSxcbiAgICAgIG5ldyBTaGlwKDEsIHRoaXMpLFxuICAgICAgbmV3IFNoaXAoMSwgdGhpcyksXG4gICAgICBuZXcgU2hpcCgxLCB0aGlzKSxcbiAgICBdO1xuXG4gICAgd2hpbGUgKHNoaXBzLmxlbmd0aCkge1xuICAgICAgbGV0IHNoaXAgPSBzaGlwcy5zaGlmdCgpO1xuICAgICAgbGV0IHgsIHk7XG4gICAgICBkbyB7XG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHNoaXAuZGlyZWN0aW9uID0geCAlIDIgPT09IDAgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICAhdGhpcy52YWxpZGF0ZUZyZWVTcGFjZShcbiAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLFxuICAgICAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgICAgIHNoaXAuZGlyZWN0aW9uLFxuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIFt4LCB5XSk7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzID0gW3gsIHldO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpZWxkKHgsIHkpIHtcbiAgICBsZXQgZmllbGRzID0gdGhpcy5pc1BsYXllclxuICAgICAgPyBlbGVtZW50cy5wbGF5ZXIxRmllbGRzXG4gICAgICA6IGVsZW1lbnRzLnBsYXllcjJGaWVsZHM7XG4gICAgZm9yIChsZXQgZmllbGQgb2YgZmllbGRzLmNoaWxkTm9kZXMpIHtcbiAgICAgIGlmIChmaWVsZC5kYXRhc2V0LnggPT0geCAmJiBmaWVsZC5kYXRhc2V0LnkgPT0geSkge1xuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2ZhY3Rvcmllcy9nYW1lYm9hcmRcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaXNQbGF5ZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaXNQbGF5ZXIgPSBpc1BsYXllcjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoaXNQbGF5ZXIpO1xuICB9XG5cbiAgbWFrZU1vdmUoY29vcmRpbmF0ZXMsIGVuZW15Qm9hcmQpIHtcbiAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIGdhbWVib2FyZCwgY29vcmRpbmF0ZXMsIGRpcmVjdGlvbikge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuaXNTdW5rID0gZmFsc2U7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzKys7XG4gICAgdGhpcy4jY2hlY2tTdGF0dXMoKTtcbiAgfVxuXG4gICNjaGVja1N0YXR1cygpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2ZhY3Rvcmllcy9zaGlwXCI7XG5cbmZ1bmN0aW9uIGV2YWx1YXRlRGlyZWN0aW9uKGJvYXJkLCBpLCBqKSB7XG4gIGlmIChqICsgMSA8IDEwICYmIGJvYXJkW2ldW2ogKyAxXSA9PT0gXCJoaXRcIikge1xuICAgIHJldHVybiBcImhvcml6b250YWxcIjtcbiAgfVxuICBpZiAoaSArIDEgPCAxMCAmJiBib2FyZFtpICsgMV1bal0gPT09IFwiaGl0XCIpIHtcbiAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTW92ZShib2FyZCwgaSwgaikge1xuICBsZXQgc2VsZWN0ZWRPcHRpb247XG4gIGRvIHtcbiAgICBpZiAoIWV2YWx1YXRlRGlyZWN0aW9uKGJvYXJkLCBpLCBqKSkge1xuICAgICAgbGV0IG9wdGlvbnMgPSBbXG4gICAgICAgIFtpLCBqICsgMV0sXG4gICAgICAgIFtpLCBqIC0gMV0sXG4gICAgICAgIFtpIC0gMSwgal0sXG4gICAgICAgIFtpICsgMSwgal0sXG4gICAgICBdO1xuXG4gICAgICBvcHRpb25zID0gb3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiBib3RoIGVsZW1lbnRzIG9mIHRoZSBvcHRpb24gYXJyYXkgYXJlIHdpdGhpbiBib3VuZHNcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5ldmVyeSgoY29vcmQpID0+IGNvb3JkID49IDAgJiYgY29vcmQgPD0gOSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wdGlvbnMubGVuZ3RoKTtcblxuICAgICAgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW3JhbmRvbV07XG4gICAgfVxuICAgIGlmIChldmFsdWF0ZURpcmVjdGlvbihib2FyZCwgaSwgaikgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBsZXQgayA9IDA7XG4gICAgICB3aGlsZSAoYm9hcmRbaV1baiArIGtdID09PSBcImhpdFwiKSB7XG4gICAgICAgIGsrKztcbiAgICAgIH1cbiAgICAgIGxldCBvcHRpb25zID0gW1xuICAgICAgICBbaSwgaiAtIDFdLFxuICAgICAgICBbaSwgaiArIGtdLFxuICAgICAgXTtcbiAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgICAgaWYgKGogPT09IDApIHJhbmRvbSA9IDE7XG5cbiAgICAgIHNlbGVjdGVkT3B0aW9uID0gb3B0aW9uc1tyYW5kb21dO1xuICAgIH1cbiAgICBpZiAoZXZhbHVhdGVEaXJlY3Rpb24oYm9hcmQsIGksIGopID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGxldCBrID0gMDtcbiAgICAgIHdoaWxlIChib2FyZFtpICsga11bal0gPT09IFwiaGl0XCIpIHtcbiAgICAgICAgaysrO1xuICAgICAgfVxuICAgICAgbGV0IG9wdGlvbnMgPSBbXG4gICAgICAgIFtpIC0gMSwgal0sXG4gICAgICAgIFtpICsgaywgal0sXG4gICAgICBdO1xuICAgICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgICBpZiAoaSA9PT0gMCkgcmFuZG9tID0gMTtcblxuICAgICAgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zW3JhbmRvbV07XG4gICAgfVxuICB9IHdoaWxlIChib2FyZFtzZWxlY3RlZE9wdGlvblswXV1bc2VsZWN0ZWRPcHRpb25bMV1dKTtcbiAgcmV0dXJuIHNlbGVjdGVkT3B0aW9uO1xufVxuXG5mdW5jdGlvbiBtYXJrQWRqYWNlbnQoZ2FtZWJvYXJkLCB4LCB5KSB7XG4gIGlmIChnYW1lYm9hcmQuY29vcmRpbmF0ZXNbeF1beV0uaXNTdW5rKSB7XG4gICAgbGV0IHN0YXJ0ID0gZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW3hdW3ldLmNvb3JkaW5hdGVzO1xuICAgIGxldCBsZW5ndGggPSBnYW1lYm9hcmQuY29vcmRpbmF0ZXNbeF1beV0ubGVuZ3RoO1xuICAgIGxldCBlbmQ7XG4gICAgaWYgKGdhbWVib2FyZC5jb29yZGluYXRlc1t4XVt5XS5kaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBlbmQgPSBbc3RhcnRbMF0sIHN0YXJ0WzFdICsgbGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZCA9IFtzdGFydFswXSArIGxlbmd0aCAtIDEsIHN0YXJ0WzFdXTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnRbMF0gLSAxOyBpIDw9IGVuZFswXSArIDE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0WzFdIC0gMTsgaiA8PSBlbmRbMV0gKyAxOyBqKyspIHtcbiAgICAgICAgaWYgKGkgPj0gMCAmJiBpIDwgMTAgJiYgaiA+PSAwICYmIGogPCAxMCkge1xuICAgICAgICAgIGlmIChnYW1lYm9hcmQuc2hvdHNbaV1bal0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZC5zaG90c1tpXVtqXSA9IFwiYWRqYWNlbnRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgZXZhbHVhdGVEaXJlY3Rpb24sIGNhbGN1bGF0ZU1vdmUsIG1hcmtBZGphY2VudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZmFjdG9yaWVzL2dhbWVcIjtcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5nYW1lLnN0YXJ0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9