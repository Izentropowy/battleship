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
  cursor: pointer;
  padding: var(--pdg-v) var(--pdg-h);
  background-color: black;
  border: none;
}

button:not([disabled]):hover {
  opacity: 0.7;
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

.player2 > .table-header {
  display: flex;
  justify-content: right;
}

.ship {
  background-color: rgb(133, 132, 132);
}

.fa-x {
  color: red;
  font-size: 15px;
}
.fa-circle-dot {
  font-size: 5px;
  color: #FFD43B;
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

  .player2 > .table-header {
    display: flex;
    justify-content: left;
  }
}

`, "",{"version":3,"sources":["webpack://./src/assets/styles.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;EACnB,qGAAqG;EACrG,0BAA0B;EAC1B,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;;;EAGE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,iCAAiC;EACjC,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gDAAgD;AAClD;;AAEA;EACE,qCAAqC;EACrC,uBAAuB;EACvB,UAAU;EACV,eAAe;EACf,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;AACA;EACE,cAAc;EACd,cAAc;AAChB;;;AAGA;EACE;IACE,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;IACb,qBAAqB;EACvB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&family=Roboto:wght@500&display=swap\");\n\n:root {\n  --font-color: white;\n  --main-color: radial-gradient(circle, rgba(0,40,245,1) 0%, rgba(0,11,131,1) 50%, rgba(0,0,54,1) 100%);\n  --secondary-color: #fdf0d5;\n  --third-color: #dbd8e3;\n  --mrg: 1rem;\n  --pdg-v: 0.5rem;\n  --pdg-h: 1rem;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  color: var(--font-color);\n  background: var(--main-color);\n}\n\nbutton {\n  cursor: pointer;\n  padding: var(--pdg-v) var(--pdg-h);\n  background-color: black;\n  border: none;\n}\n\nbutton:not([disabled]):hover {\n  opacity: 0.7;\n}\n\nbutton:not([disabled]):active {\n  transform: scale(0.9);\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nfooter, header {\n  display: grid;\n  place-items: center;\n  margin: var(--mrg);\n}\n\n.main-div {\n  flex: 2;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 50px;\n}\n\n.table-header {\n  margin: var(--mrg);\n}\n\n.table {\n  display: grid;\n  place-items: center;\n  grid-template: repeat(10, 1fr) / repeat(10, 1fr);\n}\n\n.board-field {\n  background-color: rgba(0, 0, 0, 0.25);\n  border: 1px solid white;\n  padding: 0;\n  min-width: 30px;\n  width:50px;\n  aspect-ratio: 1;\n}\n\n.board-field:not([disabled]):hover  {\n  background-color: white;\n}\n\n.player2 > .table-header {\n  display: flex;\n  justify-content: right;\n}\n\n.ship {\n  background-color: rgb(133, 132, 132);\n}\n\n.fa-x {\n  color: red;\n  font-size: 15px;\n}\n.fa-circle-dot {\n  font-size: 5px;\n  color: #FFD43B;\n}\n\n\n@media screen and (max-width: 600px) {\n  .main-div {\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .board-field {\n    min-height: 2rem;\n    aspect-ratio: 1;\n  }\n\n  .table {\n    margin: 10px;\n  }\n\n  .player2 > .table-header {\n    display: flex;\n    justify-content: left;\n  }\n}\n\n"],"sourceRoot":""}]);
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
      }
    }
  }

  addFieldListeners() {
    _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player2Fields.addEventListener("click", this.makeMove);
    _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player2Fields.addEventListener("click", this.makeAIMove);
  }

  makeMove = (e) => {
    const field = e.target;
    if (e.target.classList.contains("board-field")) {
      const x = field.dataset.x;
      const y = field.dataset.y;
      if (this.player2.gameboard.coordinates[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        const xIcon = document.createElement("i");
        xIcon.classList.add("fa-solid", "fa-x");
        field.appendChild(xIcon);
      } else {
        const xIcon = document.createElement("i");
        xIcon.classList.add("fa-solid", "fa-circle-dot");
        field.appendChild(xIcon);
      }
      field.disabled = true;
      this.player1.makeMove([x, y], this.player2.gameboard);
    }
  };

  makeAIMove = () => {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.player1.gameboard.shots[x][y] !== null);
    for (let field of _components_elements__WEBPACK_IMPORTED_MODULE_2__.elements.player1Fields.childNodes) {
      if (field.dataset.x == x && field.dataset.y == y) {
        if (this.player1.gameboard.coordinates[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_1__["default"]) {
          const xIcon = document.createElement("i");
          xIcon.classList.add("fa-solid", "fa-x");
          field.appendChild(xIcon);
        } else {
          const xIcon = document.createElement("i");
          xIcon.classList.add("fa-solid", "fa-circle-dot");
          field.appendChild(xIcon);
        }
        this.player2.makeMove([x, y], this.player1.gameboard);
      }
    }
  };

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
  constructor() {
    this.coordinates = [];
    this.shots = [];
    this.#createArrays();
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
      this.coordinates[coordinates[0] + i][coordinates[1]] = ship;
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

  validateFreeSpace(board, length, x, y) {
    if (x + length > 10 || y + length > 10) return false; // Check if ship exceeds board boundaries

    for (let i = 0; i < length; i++) {
      for (let j = -1; j <= 1; j++) {
        for (let k = -1; k <= 1; k++) {
          const row = x + i + j;
          const col = y + k;

          if (row < 0 || row >= 10 || col < 0 || col >= 10) continue; // Skip if position is outside board boundaries

          if (board[row][col] !== null) return false; // Check if neighboring space is occupied
        }
      }
    }

    return true;
  }

  initializeShips() {
    const ships = [
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](4),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](3),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](2),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
      new _ship__WEBPACK_IMPORTED_MODULE_1__["default"](1),
    ];

    while (ships.length) {
      let ship = ships.shift();
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!this.validateFreeSpace(this.coordinates, ship.length, x, y));
      this.placeShip(ship, [x, y]);
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
    this.gameboard = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
  constructor(length) {
    this.length = length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ087O0FBRXBDLGlCQUFpQix1REFBSTtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3M/OTUxZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2luaXRpYWxpemVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9tYWluRGl2LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTppdGFsQDEmZmFtaWx5PVJvYm90bzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcbiAgLS1tYWluLWNvbG9yOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDAsNDAsMjQ1LDEpIDAlLCByZ2JhKDAsMTEsMTMxLDEpIDUwJSwgcmdiYSgwLDAsNTQsMSkgMTAwJSk7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmRmMGQ1O1xuICAtLXRoaXJkLWNvbG9yOiAjZGJkOGUzO1xuICAtLW1yZzogMXJlbTtcbiAgLS1wZGctdjogMC41cmVtO1xuICAtLXBkZy1oOiAxcmVtO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiB2YXIoLS1wZGctdikgdmFyKC0tcGRnLWgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG5idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuI2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuZm9vdGVyLCBoZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IHZhcigtLW1yZyk7XG59XG5cbi5tYWluLWRpdiB7XG4gIGZsZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDUwcHg7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBtYXJnaW46IHZhcigtLW1yZyk7XG59XG5cbi50YWJsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmJvYXJkLWZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgd2lkdGg6NTBweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xufVxuXG4uYm9hcmQtZmllbGQ6bm90KFtkaXNhYmxlZF0pOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucGxheWVyMiA+IC50YWJsZS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzMsIDEzMiwgMTMyKTtcbn1cblxuLmZhLXgge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uZmEtY2lyY2xlLWRvdCB7XG4gIGZvbnQtc2l6ZTogNXB4O1xuICBjb2xvcjogI0ZGRDQzQjtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi1kaXYge1xuICAgIGZsZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuYm9hcmQtZmllbGQge1xuICAgIG1pbi1oZWlnaHQ6IDJyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICB9XG5cbiAgLnRhYmxlIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cblxuICAucGxheWVyMiA+IC50YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICB9XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFHQUFxRztFQUNyRywwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0U7SUFDRSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGlicmUrQmFza2VydmlsbGU6aXRhbEAxJmZhbWlseT1Sb2JvdG86d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIC0tbWFpbi1jb2xvcjogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgwLDQwLDI0NSwxKSAwJSwgcmdiYSgwLDExLDEzMSwxKSA1MCUsIHJnYmEoMCwwLDU0LDEpIDEwMCUpO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmZGYwZDU7XFxuICAtLXRoaXJkLWNvbG9yOiAjZGJkOGUzO1xcbiAgLS1tcmc6IDFyZW07XFxuICAtLXBkZy12OiAwLjVyZW07XFxuICAtLXBkZy1oOiAxcmVtO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogdmFyKC0tcGRnLXYpIHZhcigtLXBkZy1oKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9vdGVyLCBoZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IHZhcigtLW1yZyk7XFxufVxcblxcbi5tYWluLWRpdiB7XFxuICBmbGV4OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRhYmxlLWhlYWRlciB7XFxuICBtYXJnaW46IHZhcigtLW1yZyk7XFxufVxcblxcbi50YWJsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKSAvIHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxuICB3aWR0aDo1MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cXG4uYm9hcmQtZmllbGQ6bm90KFtkaXNhYmxlZF0pOmhvdmVyICB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYXllcjIgPiAudGFibGUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMzLCAxMzIsIDEzMik7XFxufVxcblxcbi5mYS14IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5mYS1jaXJjbGUtZG90IHtcXG4gIGZvbnQtc2l6ZTogNXB4O1xcbiAgY29sb3I6ICNGRkQ0M0I7XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubWFpbi1kaXYge1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ib2FyZC1maWVsZCB7XFxuICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gIH1cXG5cXG4gIC50YWJsZSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG5cXG4gIC5wbGF5ZXIyID4gLnRhYmxlLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL2luaXRpYWxpemVyXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG5cbmV4cG9ydCBjb25zdCBlbGVtZW50cyA9IHtcbiAgcGxheWVyMUZpZWxkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxIC50YWJsZVwiKSxcbiAgcGxheWVyMkZpZWxkczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIyIC50YWJsZVwiKSxcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCBJemVudHJvcG93eVwiO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyQ29udGVudC50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCBjcmVhdGVNYWluRGl2IGZyb20gXCIuL21haW5EaXZcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluRGl2KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7XG4iLCJmdW5jdGlvbiBjcmVhdGVCb2FyZChuYW1lKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1maWVsZFwiKTtcbiAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBpKTtcbiAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBqKTtcbiAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGZpZWxkKTtcbiAgICB9XG4gIH1cbiAgdGFibGUuY2xhc3NMaXN0LmFkZChcInRhYmxlXCIpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwidGFibGUtaGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBuYW1lO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGFibGUpO1xuICByZXR1cm4gYm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWRpdlwiKTtcblxuICBjb25zdCBwbGF5ZXIxID0gY3JlYXRlQm9hcmQoXCJQbGF5ZXJcIik7XG4gIHBsYXllcjEuY2xhc3NMaXN0LmFkZChcInBsYXllcjFcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBjcmVhdGVCb2FyZChcIkNvbXB1dGVyXCIpO1xuICBwbGF5ZXIyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXIyXCIpO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocGxheWVyMSk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocGxheWVyMik7XG4gIHJldHVybiBtYWluRGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluRGl2O1xuIiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZWxlbWVudHNcIjtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoXCJSYW5kb21OYW1lXCIsIHRydWUpO1xuICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiLCBmYWxzZSk7XG4gIH1cblxuICByZW5kZXJTaGlwcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5jb29yZGluYXRlc1tpXVtqXSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgW2RhdGEteD1cIiR7aX1cIl1bZGF0YS15PVwiJHtqfVwiXWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZEZpZWxkTGlzdGVuZXJzKCkge1xuICAgIGVsZW1lbnRzLnBsYXllcjJGaWVsZHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubWFrZU1vdmUpO1xuICAgIGVsZW1lbnRzLnBsYXllcjJGaWVsZHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubWFrZUFJTW92ZSk7XG4gIH1cblxuICBtYWtlTW92ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSBlLnRhcmdldDtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYm9hcmQtZmllbGRcIikpIHtcbiAgICAgIGNvbnN0IHggPSBmaWVsZC5kYXRhc2V0Lng7XG4gICAgICBjb25zdCB5ID0gZmllbGQuZGF0YXNldC55O1xuICAgICAgaWYgKHRoaXMucGxheWVyMi5nYW1lYm9hcmQuY29vcmRpbmF0ZXNbeF1beV0gaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgIGNvbnN0IHhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIHhJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXhcIik7XG4gICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHhJY29uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIHhJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWNpcmNsZS1kb3RcIik7XG4gICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHhJY29uKTtcbiAgICAgIH1cbiAgICAgIGZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucGxheWVyMS5tYWtlTW92ZShbeCwgeV0sIHRoaXMucGxheWVyMi5nYW1lYm9hcmQpO1xuICAgIH1cbiAgfTtcblxuICBtYWtlQUlNb3ZlID0gKCkgPT4ge1xuICAgIGxldCB4LCB5O1xuICAgIGRvIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKHRoaXMucGxheWVyMS5nYW1lYm9hcmQuc2hvdHNbeF1beV0gIT09IG51bGwpO1xuICAgIGZvciAobGV0IGZpZWxkIG9mIGVsZW1lbnRzLnBsYXllcjFGaWVsZHMuY2hpbGROb2Rlcykge1xuICAgICAgaWYgKGZpZWxkLmRhdGFzZXQueCA9PSB4ICYmIGZpZWxkLmRhdGFzZXQueSA9PSB5KSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmNvb3JkaW5hdGVzW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIGNvbnN0IHhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgICAgeEljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEteFwiKTtcbiAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh4SWNvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgeEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgICB4SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1jaXJjbGUtZG90XCIpO1xuICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHhJY29uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllcjIubWFrZU1vdmUoW3gsIHldLCB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQuaW5pdGlhbGl6ZVNoaXBzKCk7XG4gICAgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5pbml0aWFsaXplU2hpcHMoKTtcbiAgICB0aGlzLnJlbmRlclNoaXBzKCk7XG4gICAgdGhpcy5hZGRGaWVsZExpc3RlbmVycygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJpbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2VsZW1lbnRzXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBbXTtcbiAgICB0aGlzLnNob3RzID0gW107XG4gICAgdGhpcy4jY3JlYXRlQXJyYXlzKCk7XG4gIH1cblxuICAjY3JlYXRlQXJyYXlzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy5jb29yZGluYXRlc1tpXSA9IFtdO1xuICAgICAgdGhpcy5zaG90c1tpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXNbaV1bal0gPSBudWxsO1xuICAgICAgICB0aGlzLnNob3RzW2ldW2pdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXNbMF0gKyBpXVtjb29yZGluYXRlc1sxXV0gPSBzaGlwO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLmNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09IG51bGxcbiAgICAgID8gKHRoaXMuc2hvdHNbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IFwibWlzc1wiKVxuICAgICAgOiAodGhpcy5jb29yZGluYXRlc1tjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLmhpdCgpLFxuICAgICAgICAodGhpcy5zaG90c1tjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID0gXCJoaXRcIikpO1xuICB9XG5cbiAgY2hlY2tJZkFsbFN1bmsoKSB7XG4gICAgbGV0IGNoZWNrZXIgPSB0aGlzLmNvb3JkaW5hdGVzLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4gIT09IG51bGwgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBsZXQgY2hlY2tlcjIgPSB0aGlzLnNob3RzLm1hcCgocm93KSA9PiB7XG4gICAgICByZXR1cm4gcm93Lm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgIHJldHVybiBjb2x1bW4gPT09IFwiaGl0XCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY2hlY2tlcikgPT09IEpTT04uc3RyaW5naWZ5KGNoZWNrZXIyKTtcbiAgfVxuXG4gIHZhbGlkYXRlRnJlZVNwYWNlKGJvYXJkLCBsZW5ndGgsIHgsIHkpIHtcbiAgICBpZiAoeCArIGxlbmd0aCA+IDEwIHx8IHkgKyBsZW5ndGggPiAxMCkgcmV0dXJuIGZhbHNlOyAvLyBDaGVjayBpZiBzaGlwIGV4Y2VlZHMgYm9hcmQgYm91bmRhcmllc1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDw9IDE7IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gLTE7IGsgPD0gMTsgaysrKSB7XG4gICAgICAgICAgY29uc3Qgcm93ID0geCArIGkgKyBqO1xuICAgICAgICAgIGNvbnN0IGNvbCA9IHkgKyBrO1xuXG4gICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID49IDEwIHx8IGNvbCA8IDAgfHwgY29sID49IDEwKSBjb250aW51ZTsgLy8gU2tpcCBpZiBwb3NpdGlvbiBpcyBvdXRzaWRlIGJvYXJkIGJvdW5kYXJpZXNcblxuICAgICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0gIT09IG51bGwpIHJldHVybiBmYWxzZTsgLy8gQ2hlY2sgaWYgbmVpZ2hib3Jpbmcgc3BhY2UgaXMgb2NjdXBpZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdGlhbGl6ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgbmV3IFNoaXAoNCksXG4gICAgICBuZXcgU2hpcCgzKSxcbiAgICAgIG5ldyBTaGlwKDMpLFxuICAgICAgbmV3IFNoaXAoMiksXG4gICAgICBuZXcgU2hpcCgyKSxcbiAgICAgIG5ldyBTaGlwKDIpLFxuICAgICAgbmV3IFNoaXAoMSksXG4gICAgICBuZXcgU2hpcCgxKSxcbiAgICAgIG5ldyBTaGlwKDEpLFxuICAgICAgbmV3IFNoaXAoMSksXG4gICAgXTtcblxuICAgIHdoaWxlIChzaGlwcy5sZW5ndGgpIHtcbiAgICAgIGxldCBzaGlwID0gc2hpcHMuc2hpZnQoKTtcbiAgICAgIGxldCB4LCB5O1xuICAgICAgZG8ge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgfSB3aGlsZSAoIXRoaXMudmFsaWRhdGVGcmVlU3BhY2UodGhpcy5jb29yZGluYXRlcywgc2hpcC5sZW5ndGgsIHgsIHkpKTtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIFt4LCB5XSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4uL2ZhY3Rvcmllcy9nYW1lYm9hcmRcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaXNQbGF5ZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaXNQbGF5ZXIgPSBpc1BsYXllcjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIG1ha2VNb3ZlKGNvb3JkaW5hdGVzLCBlbmVteUJvYXJkKSB7XG4gICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmlzU3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cysrO1xuICAgIHRoaXMuI2NoZWNrU3RhdHVzKCk7XG4gIH1cblxuICAjY2hlY2tTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2ZhY3Rvcmllcy9nYW1lXCI7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuZ2FtZS5zdGFydEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==