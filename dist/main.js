/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/styles.css ***!
  \******************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n\n\n/* #region Remove button Styling */\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n/* #endregion */\n\nbutton {\n  background-color: #ffffff00;\n}\n\nheader {\n  position: sticky;\n  width: 100vw;\n  padding: 0;\n  height: fit-content;\n  background-color: #5544b8;\n  color: white;\n  top: 0;\n  z-index: 2;\n  display: grid;\n  grid-template-areas: \"left center right\";\n}\n\nheader h1 {\n  margin: 1%;\n}\n\nheader .logo {\n  float: none;\n  display: block;\n  justify-self: center;\n  margin: 0px;\n  width: fit-content;\n  grid-area: center;\n}\n\nheader .bars {\n  grid-area: left;\n  text-align: left;\n}\n\nheader .add {\n  display: none;\n}\n\n.menu {\n  /* display: none; */\n  flex-direction: column;\n  align-items: stretch;\n  height: fit-content;\n  width: 100%;\n  padding-inline-start: 0;\n}\n\n.menu-item {\n  display: block;\n  margin: 0;\n}\n\n/* .menu-item h3 {\n  margin: 0;\n  border-bottom: 1px solid lightgrey;\n  padding: 2%;\n} */\n\n/* .menu-item h4 {\n  margin: 0;\n  padding: 2% 2% 2% 10%;\n  border-bottom: 1px solid lightgrey\n} */\n\n\n.done {\n  text-decoration: line-through;\n}\n\n.menu-shaded {\n  background-color: rgb(241, 235, 235);\n  display: flex;\n  justify-content: space-between;\n}\n\n.menu-icon-right {\n  margin-right: 4vw;\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(230, 230, 230);\n  text-align: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.clickable {\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.clickable:hover {\n  transform: translate(0, -2px);\n  color: rgb(20, 44, 114);\n}\n\n.grow { transition: all .1s ease-in-out; }\n.grow:hover { transform: scale(1.5); }\n\n.blurred {\n  filter: blur(10px);\n  -webkit-filter: blur(10px);\n}\n\n/* #region Project View */\n.page-title {\n  margin: 3% 2% 3% 2%;\n}\n\n.item-box {\n  margin: -1px 0 0 0;\n  padding: 2% 2% 1% 2%;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n}\n\n.indented {\n  padding-left: 10%;\n}\n\n.task-item {\n  /* display: flex;\n  align-items: center;\n  justify-content: space-between; */\n  display: grid;\n  grid-template-columns: 1fr 10fr 4fr;\n  grid-template-areas: \n    \"gridCircle gridTitle gridDate\"\n    \".......... gridIcons ........\";\n}\n\n.task-item p {\n  margin: 0;\n}\n\n.task-item .task-name {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  flex-wrap: nowrap;\n  width: 100%;\n  grid-area: gridTitle;\n}\n\n.task-checkcircle-icon {\n  grid-area: gridCircle;\n}\n\n.task-title {\n  padding-left: 5%;\n}\n\n.task-date {\n  color: rgb(90, 90, 90);\n  font-size: smaller;\n  justify-self: flex-end;\n  text-align: right;\n  width: 100%;\n  grid-area: gridDate;\n}\n\n.task-icon-area {\n  grid-area: gridIcons;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.task-icon-area * {\n  padding-left: 2%;\n}\n\n.task-checkbox-icon {\n  color: gray;\n  font-size: 4px;\n}\n\n.task-add-btn {\n  position: fixed;\n  bottom: 4%;\n  right: 4%;\n  color: rgb(151, 18, 18);\n}\n\n/* #endregion */\n\n/* #region Edit Task View */\n  .edit-task-view {\n    display: grid;\n    grid-template-areas: \n      \"taskname    taskname\"\n      \"project     ........\"\n      \"description description\"\n      \"date        priority\"\n      \"notes       notes\"\n      \"notes       notes\"\n      \"checklist   checklist\";\n    margin: 5%;\n  }\n\n  .edit-task-view > * {\n    margin: 3% 0 3% 0;\n  }\n\n  .edit-task-project {\n    grid-area: project;\n    background: none;\n  }\n\n  .edit-task-name {\n    grid-area: taskname;\n    display: flex;\n    align-items: center;\n  }\n\n  .edit-task-name input {\n    font-size: large;\n    margin-left: 3%;\n  }\n\n  .edit-task-description {\n    grid-area: description;\n  }\n\n  .edit-task-date {\n    grid-area: date;\n    width: fit-content;\n    height: fit-content;\n  }\n\n  .edit-task-priority {\n    grid-area: priority;\n    justify-self: end;\n  }\n\n  .edit-task-notes {\n    grid-area: notes;\n  }\n\n  .edit-task-checklist {\n    grid-area: checklist;\n    display: grid;\n    grid-template-columns: 1fr 15fr;\n  }\n\n  .subtask-title {\n    grid-column: 1 / 3;\n    margin: 0;\n  }\n\n  .edit-task-view p {\n    margin: 0;\n  }\n\n  .destyled-input {\n    border: none;\n    -webkit-appearance:     none;\n    -moz-appearance:        none;\n    -ms-appearance:         none;\n    -o-appearance:          none;\n    appearance:             none;\n  }\n\n  .destyled-input::placeholder {\n    color: black;\n    opacity: 1;\n  }\n\n  .priority-high {\n    background: red;\n    color: white;\n    width: fit-content;\n    height: fit-content;\n    border-radius: 5px;\n    padding: 5%;\n    font-weight: bold;\n  }\n\n  .priority-medium {\n    background: rgb(255, 166, 0);\n    color: white;\n    width: fit-content;\n    height: fit-content;\n    border-radius: 5px;\n    padding: 5%;\n    font-weight: bold;\n  }\n \n  .priority-low {\n    background: yellowgreen;\n    color: white;\n    width: fit-content;\n    height: fit-content;\n    border-radius: 5px;\n    padding: 5%;\n    font-weight: bold;\n  }\n\n/* #endregion */\n\n\n/* #region Edit Project View */\n.edit-project-view{\n  padding: 5% 3% 5% 3%;\n  display: grid;\n  grid: \"name  name   color\"\n        \"desc  desc   .....\"\n        \"save  cancel ....\"\n        / 1fr 1fr 1fr;\n  justify-content: left;\n  align-items: center;\n}\n\n.edit-project-view label {\n  display: none;\n}\n\n.edit-project-name {\n  font-size: x-large;\n  border: 1px solid rgba(255, 255, 255, 0);\n  grid-area: name;\n  margin-right: 3%;\n}\n\n.edit-project-name:hover {\n  border: 1px solid rgb(209, 170, 170);\n}\n\n.edit-project-color {\n  grid-area: color;\n}\n\n#edit-project-save-btn {\n  grid-area: save;\n}\n\n#edit-project-cancel-btn {\n  grid-area: cancel;\n}\n\n.edit-project-view button {\n  background-color: #5544b8;\n  border: none;\n  color: white;\n  padding: 2% 4%;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  width: 5em;\n  height: 2em;\n}\n\n.edit-project-description {\n  border: 1px solid rgba(255, 255, 255, 0);\n  grid-area: desc;\n  margin: 10% 0 10% 0;\n}\n\n.edit-project-description:hover {\n  border: 1px solid rgb(209, 170, 170);\n}\n\n/* #endregion */\n\n@media only screen and (min-width: 800px) {\n  body {\n    display: grid;\n    grid-template-areas:\n      \"header header header\"\n      \"menu content content\"\n      \"menu content content\"\n      \"menu content content\"\n      \"menu content content\"\n      \"footer footer footer\";\n    grid-template-rows: auto 1fr 1fr 1fr 1fr auto;\n\n    margin: 0;\n    min-height: 100vh;\n    /* overflow: scroll; */\n  }\n  \n  header {\n    overflow: hidden;\n    background-color: #5544b8;\n    width: 100vw;\n    padding-right: 1%;\n    top: 0;\n    position: sticky;\n    z-index: 2;\n    display: flex;\n    justify-content: center;\n    grid-area: header;\n    color: white;\n    align-items: center;\n  }\n\n  header > .bars {\n    display: none;\n  }\n  \n  footer {\n    grid-area: footer;\n  }\n  \n  .menu {\n    grid-area: menu;\n    background-color:rgba(168, 168, 168, 0.185);\n    height: 100%;\n  }\n\n\n  \n  .content {\n    grid-area: content;\n  }\n\n\n  .new-task {\n    display: grid;\n    border: none;\n  }\n\n  .new-task i {\n    visibility: hidden;\n  }\n\n  .new-task input::placeholder {\n    font-style: italic;\n    color: rgb(87, 87, 87);\n  }\n\n  .new-task:hover {\n    display: grid;\n    border-top: 1px solid lightgrey;\n    border-bottom: 1px solid lightgrey;\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/CSS/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;;;AAIA,kCAAkC;AAClC;CACC,gBAAgB;CAChB,cAAc;CACd,YAAY;CACZ,UAAU;CACV,aAAa;CACb,eAAe;CACf,gBAAgB;AACjB;AACA,eAAe;;AAEf;EACE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,MAAM;EACN,UAAU;EACV,aAAa;EACb,wCAAwC;AAC1C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,cAAc;EACd,oBAAoB;EACpB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,SAAS;AACX;;AAEA;;;;GAIG;;AAEH;;;;GAIG;;;AAGH;EACE,6BAA6B;AAC/B;;AAEA;EACE,oCAAoC;EACpC,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,OAAO;EACP,SAAS;EACT,WAAW;EACX,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA,QAAQ,+BAA+B,EAAE;AACzC,cAAc,qBAAqB,EAAE;;AAErC;EACE,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA,yBAAyB;AACzB;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,+BAA+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE;;mCAEiC;EACjC,aAAa;EACb,mCAAmC;EACnC;;mCAEiC;AACnC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,SAAS;EACT,uBAAuB;AACzB;;AAEA,eAAe;;AAEf,2BAA2B;EACzB;IACE,aAAa;IACb;;;;;;;6BAOyB;IACzB,UAAU;EACZ;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;IACnB,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,oBAAoB;IACpB,aAAa;IACb,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,SAAS;EACX;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;EAC9B;;EAEA;IACE,YAAY;IACZ,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;EACnB;;AAEF,eAAe;;;AAGf,8BAA8B;AAC9B;EACE,oBAAoB;EACpB,aAAa;EACb;;;qBAGmB;EACnB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA,eAAe;;AAEf;EACE;IACE,aAAa;IACb;;;;;;4BAMwB;IACxB,6CAA6C;;IAE7C,SAAS;IACT,iBAAiB;IACjB,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;IACjB,MAAM;IACN,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,2CAA2C;IAC3C,YAAY;EACd;;;;EAIA;IACE,kBAAkB;EACpB;;;EAGA;IACE,aAAa;IACb,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,+BAA+B;IAC/B,kCAAkC;EACpC;AACF;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n\n\n/* #region Remove button Styling */\nbutton, input[type=\"submit\"], input[type=\"reset\"] {\n\tbackground: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n/* #endregion */\n\nbutton {\n  background-color: #ffffff00;\n}\n\nheader {\n  position: sticky;\n  width: 100vw;\n  padding: 0;\n  height: fit-content;\n  background-color: #5544b8;\n  color: white;\n  top: 0;\n  z-index: 2;\n  display: grid;\n  grid-template-areas: \"left center right\";\n}\n\nheader h1 {\n  margin: 1%;\n}\n\nheader .logo {\n  float: none;\n  display: block;\n  justify-self: center;\n  margin: 0px;\n  width: fit-content;\n  grid-area: center;\n}\n\nheader .bars {\n  grid-area: left;\n  text-align: left;\n}\n\nheader .add {\n  display: none;\n}\n\n.menu {\n  /* display: none; */\n  flex-direction: column;\n  align-items: stretch;\n  height: fit-content;\n  width: 100%;\n  padding-inline-start: 0;\n}\n\n.menu-item {\n  display: block;\n  margin: 0;\n}\n\n/* .menu-item h3 {\n  margin: 0;\n  border-bottom: 1px solid lightgrey;\n  padding: 2%;\n} */\n\n/* .menu-item h4 {\n  margin: 0;\n  padding: 2% 2% 2% 10%;\n  border-bottom: 1px solid lightgrey\n} */\n\n\n.done {\n  text-decoration: line-through;\n}\n\n.menu-shaded {\n  background-color: rgb(241, 235, 235);\n  display: flex;\n  justify-content: space-between;\n}\n\n.menu-icon-right {\n  margin-right: 4vw;\n}\n\nfooter {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgb(230, 230, 230);\n  text-align: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.clickable {\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.clickable:hover {\n  transform: translate(0, -2px);\n  color: rgb(20, 44, 114);\n}\n\n.grow { transition: all .1s ease-in-out; }\n.grow:hover { transform: scale(1.5); }\n\n.blurred {\n  filter: blur(10px);\n  -webkit-filter: blur(10px);\n}\n\n/* #region Project View */\n.page-title {\n  margin: 3% 2% 3% 2%;\n}\n\n.item-box {\n  margin: -1px 0 0 0;\n  padding: 2% 2% 1% 2%;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n}\n\n.indented {\n  padding-left: 10%;\n}\n\n.task-item {\n  /* display: flex;\n  align-items: center;\n  justify-content: space-between; */\n  display: grid;\n  grid-template-columns: 1fr 10fr 4fr;\n  grid-template-areas: \n    \"gridCircle gridTitle gridDate\"\n    \".......... gridIcons ........\";\n}\n\n.task-item p {\n  margin: 0;\n}\n\n.task-item .task-name {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  flex-wrap: nowrap;\n  width: 100%;\n  grid-area: gridTitle;\n}\n\n.task-checkcircle-icon {\n  grid-area: gridCircle;\n}\n\n.task-title {\n  padding-left: 5%;\n}\n\n.task-date {\n  color: rgb(90, 90, 90);\n  font-size: smaller;\n  justify-self: flex-end;\n  text-align: right;\n  width: 100%;\n  grid-area: gridDate;\n}\n\n.task-icon-area {\n  grid-area: gridIcons;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n\n.task-icon-area * {\n  padding-left: 2%;\n}\n\n.task-checkbox-icon {\n  color: gray;\n  font-size: 4px;\n}\n\n.task-add-btn {\n  position: fixed;\n  bottom: 4%;\n  right: 4%;\n  color: rgb(151, 18, 18);\n}\n\n/* #endregion */\n\n/* #region Edit Task View */\n  .edit-task-view {\n    display: grid;\n    grid-template-areas: \n      \"taskname    taskname\"\n      \"project     ........\"\n      \"description description\"\n      \"date        priority\"\n      \"notes       notes\"\n      \"notes       notes\"\n      \"checklist   checklist\";\n    margin: 5%;\n  }\n\n  .edit-task-view > * {\n    margin: 3% 0 3% 0;\n  }\n\n  .edit-task-project {\n    grid-area: project;\n    background: none;\n  }\n\n  .edit-task-name {\n    grid-area: taskname;\n    display: flex;\n    align-items: center;\n  }\n\n  .edit-task-name input {\n    font-size: large;\n    margin-left: 3%;\n  }\n\n  .edit-task-description {\n    grid-area: description;\n  }\n\n  .edit-task-date {\n    grid-area: date;\n    width: fit-content;\n    height: fit-content;\n  }\n\n  .edit-task-priority {\n    grid-area: priority;\n    justify-self: end;\n  }\n\n  .edit-task-notes {\n    grid-area: notes;\n  }\n\n  .edit-task-checklist {\n    grid-area: checklist;\n    display: grid;\n    grid-template-columns: 1fr 15fr;\n  }\n\n  .subtask-title {\n    grid-column: 1 / 3;\n    margin: 0;\n  }\n\n  .edit-task-view p {\n    margin: 0;\n  }\n\n  .destyled-input {\n    border: none;\n    -webkit-appearance:     none;\n    -moz-appearance:        none;\n    -ms-appearance:         none;\n    -o-appearance:          none;\n    appearance:             none;\n  }\n\n  .destyled-input::placeholder {\n    color: black;\n    opacity: 1;\n  }\n\n  .priority-high {\n    background: red;\n    color: white;\n    width: fit-content;\n    height: fit-content;\n    border-radius: 5px;\n    padding: 5%;\n    font-weight: bold;\n  }\n\n  .priority-medium {\n    background: rgb(255, 166, 0);\n    color: white;\n    width: fit-content;\n    height: fit-content;\n    border-radius: 5px;\n    padding: 5%;\n    font-weight: bold;\n  }\n \n  .priority-low {\n    background: yellowgreen;\n    color: white;\n    width: fit-content;\n    height: fit-content;\n    border-radius: 5px;\n    padding: 5%;\n    font-weight: bold;\n  }\n\n/* #endregion */\n\n\n/* #region Edit Project View */\n.edit-project-view{\n  padding: 5% 3% 5% 3%;\n  display: grid;\n  grid: \"name  name   color\"\n        \"desc  desc   .....\"\n        \"save  cancel ....\"\n        / 1fr 1fr 1fr;\n  justify-content: left;\n  align-items: center;\n}\n\n.edit-project-view label {\n  display: none;\n}\n\n.edit-project-name {\n  font-size: x-large;\n  border: 1px solid rgba(255, 255, 255, 0);\n  grid-area: name;\n  margin-right: 3%;\n}\n\n.edit-project-name:hover {\n  border: 1px solid rgb(209, 170, 170);\n}\n\n.edit-project-color {\n  grid-area: color;\n}\n\n#edit-project-save-btn {\n  grid-area: save;\n}\n\n#edit-project-cancel-btn {\n  grid-area: cancel;\n}\n\n.edit-project-view button {\n  background-color: #5544b8;\n  border: none;\n  color: white;\n  padding: 2% 4%;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  width: 5em;\n  height: 2em;\n}\n\n.edit-project-description {\n  border: 1px solid rgba(255, 255, 255, 0);\n  grid-area: desc;\n  margin: 10% 0 10% 0;\n}\n\n.edit-project-description:hover {\n  border: 1px solid rgb(209, 170, 170);\n}\n\n/* #endregion */\n\n@media only screen and (min-width: 800px) {\n  body {\n    display: grid;\n    grid-template-areas:\n      \"header header header\"\n      \"menu content content\"\n      \"menu content content\"\n      \"menu content content\"\n      \"menu content content\"\n      \"footer footer footer\";\n    grid-template-rows: auto 1fr 1fr 1fr 1fr auto;\n\n    margin: 0;\n    min-height: 100vh;\n    /* overflow: scroll; */\n  }\n  \n  header {\n    overflow: hidden;\n    background-color: #5544b8;\n    width: 100vw;\n    padding-right: 1%;\n    top: 0;\n    position: sticky;\n    z-index: 2;\n    display: flex;\n    justify-content: center;\n    grid-area: header;\n    color: white;\n    align-items: center;\n  }\n\n  header > .bars {\n    display: none;\n  }\n  \n  footer {\n    grid-area: footer;\n  }\n  \n  .menu {\n    grid-area: menu;\n    background-color:rgba(168, 168, 168, 0.185);\n    height: 100%;\n  }\n\n\n  \n  .content {\n    grid-area: content;\n  }\n\n\n  .new-task {\n    display: grid;\n    border: none;\n  }\n\n  .new-task i {\n    visibility: hidden;\n  }\n\n  .new-task input::placeholder {\n    font-style: italic;\n    color: rgb(87, 87, 87);\n  }\n\n  .new-task:hover {\n    display: grid;\n    border-top: 1px solid lightgrey;\n    border-bottom: 1px solid lightgrey;\n  }\n}\n\n.hidden {\n  display: none;\n}\n\n\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/styles.css":
/*!****************************!*\
  !*** ./src/CSS/styles.css ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/styles.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/JavaScript/factories.js":
/*!*************************************!*\
  !*** ./src/JavaScript/factories.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Todo = (title, description, dueDate, priority, notes, project) => {
  const props = {
    _title: title,
    _description: description,
    _dueDate: dueDate,
    _priority: priority,
    _notes: notes,
    _checklist: [],
    _project: project || 'default',
    _done: false
  }

  const changeProp = (prop, val) => {
    props[`_${prop}`] = val;
  };

  const getProps = () => {
    return props;
  };

  const toggleDone = () => {
    props._done = !props._done;
  };
    
  const newCheckBox = (text) => {
    props._checklist.push(text);
  }
  
  const moveCheckBox = (index, direction) => {
    const arr = props._checklist;
    const element = arr[index];
    arr.splice(index, 1);
    if (direction == 'up') {
      arr.splice(index-1, 0, element);
    } else if (direction == 'down') {
      arr.splice(index+1, 0, element);
    }
    props._checklist = arr;
  };

  return {changeProp, getProps, toggleDone, newCheckBox, moveCheckBox};
};

const Project = (title, description, color) => {
  //nest the ToDo object inside of here
  const props = {
    _title: title,
    _description: description,
    _color: color,
    _todos: [],
  }

  const changeProp = (prop, val) => {
    props[`_${prop}`] = val;
  };

  const getProps = () => {
    return props;
  };

  const editTodo = (index, prop, val) => {
    props._todos[index][`_${prop}`] = val;
  };

  const toggleDone = (index) => {
    props._todos[index].toggleDone();

  };

  const createTodo = (title, description, dueDate, priority, notes) => {
    const newTodo = Todo(title, description, dueDate, priority, notes);
    props._todos.push(newTodo);
  };

  const createCheckBox = (index, text) => {
    props._todos[index].newCheckBox(text);
  };

  const moveCheckBox = (index, checkIndex, direction) => {
    props._todos[index].moveCheckBox(checkIndex, direction);
  };

  const Todo = (title, description, dueDate, priority, notes) => ({
    
    _title: title,
    _description: description,
    _dueDate: dueDate,
    _priority: priority,
    _notes: notes,
    _checklist: [],
    _done: false,
    
    toggleDone()  {
      console.log(this._done)
      this._done = !this._done;
      console.log(this._done);
    },
      
    newCheckBox(text) {
      this._checklist.push(text);
    },
    
    moveCheckBox(index, direction) {
      const arr = this._checklist;
      const element = arr[index];
      arr.splice(index, 1);
      if (direction == 'up') {
        arr.splice(index-1, 0, element);
      } else if (direction == 'down') {
        arr.splice(index+1, 0, element);
      }
      this._checklist = arr;
    }
    //return {changeProp, getProps, toggleDone, newCheckBox, moveCheckBox};
  });

  return { changeProp, getProps, createTodo, editTodo, toggleDone, createCheckBox, moveCheckBox }
}




/***/ }),

/***/ "./src/JavaScript/header.js":
/*!**********************************!*\
  !*** ./src/JavaScript/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
const loadHeader = () => {
  const body = document.getElementById('body');

  const header = document.createElement('header');
  header.innerHTML = `
  <button class="header-item icon bars">
    <i class="fa fa-bars"></i>
  </button>
  <div class="header-item logo"><h1>YouDo</h1></div>
  <button class="header-item icon add"></button>
  `;

  header.classList.add("grid1", "header");
  body.appendChild(header);
}



/***/ }),

/***/ "./src/JavaScript/menu.js":
/*!********************************!*\
  !*** ./src/JavaScript/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
const loadMenu = () => {
  const body = document.getElementById("body");

  const menuDiv = document.createElement('div');
  menuDiv.classList.add("menu");
  menuDiv.innerHTML = `
    <div class="menu-item" id="inbox">
      <h3 class="clickable item-box">
        <i class="fa fa-inbox" aria-hidden="true"></i>
        Inbox
      </h3>
    </div>
    <div class="menu-item" id="today">
      <h3 class="clickable item-box">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        Today
      </h3>
    </div>
    <div class="menu-item" id="projects">
      <h3 class="menu-shaded item-box">Projects 
        <span>
          <i class="fa fa-lg fa-angle-down menu-icon-right clickable grow" aria-hidden="true"></i>
          <i class="fa fa-plus-circle menu-icon-right clickable grow" aria-hidden="true"></i>
        </span>
      </h3>
      <h4 class="clickable item-box indented">E2E</h4>
      <h4 class="clickable item-box indented">The Odin Project</h4>
    </div>
    <div class="menu-item" id="labels">
      <h3 class="menu-shaded item-box">Labels
        <span>
          <i class="fa fa-lg fa-angle-down menu-icon-right clickable grow" aria-hidden="true"></i>
          <i class="fa fa-plus-circle menu-icon-right clickable grow" aria-hidden="true"></i>
        </span>
      </h3>
      <h4 class="clickable item-box indented">High Priority</h4>
      <h4 class="clickable item-box indented">Medium Priority</h4>
      <h4 class="clickable item-box indented">Low Priority</h4>
    </div>
  `;

  body.appendChild(menuDiv);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JavaScript_factories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JavaScript/factories.js */ "./src/JavaScript/factories.js");
/* harmony import */ var _CSS_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSS/styles.css */ "./src/CSS/styles.css");
/* harmony import */ var _JavaScript_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JavaScript/header.js */ "./src/JavaScript/header.js");
/* harmony import */ var _JavaScript_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JavaScript/menu.js */ "./src/JavaScript/menu.js");





const project = (0,_JavaScript_factories_js__WEBPACK_IMPORTED_MODULE_0__.Project)("TestProject", "This is a test", "#0000ff");
console.log(project.getProps());
project.createTodo("test1", "test2", "test3", "test4", "test5", "test6", "test7");
console.log(project.getProps());
project.editTodo(0, 'title', 'Project test Title');
console.log(project.getProps());
project.toggleDone(0);
console.log(project.getProps());
project.createCheckBox(0, "baltimore wedding");
project.createCheckBox(0, "do the thing");
console.log(project.getProps());
project.moveCheckBox(0,0, "down");
console.log(project.getProps());

// const todoTwo = Todo("test1", "test2", "test3", "test4", "test5", "test6", "test7");
// console.log(todoTwo);
// todoTwo.changeProp('title', 'newTitle');
// todoTwo.changeProp('dueDate', '9/21/2021');
// todoTwo.toggleDone();
// todoTwo.newCheckBox('this is check item');
// todoTwo.newCheckBox('another check item');
// todoTwo.moveCheckBox(1, 'up');
// todoTwo.moveCheckBox(0, 'down');
// console.log(todoTwo.getProps());

(0,_JavaScript_header_js__WEBPACK_IMPORTED_MODULE_2__.loadHeader)();
//loadMenu();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLE1BQU0sUUFBUSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLHNCQUFzQix3QkFBd0IsTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssTUFBTSxPQUFPLFdBQVcsWUFBWSxPQUFPLE9BQU8sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxZQUFZLE1BQU0sVUFBVSxXQUFXLE9BQU8sV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxV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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxLQUFLO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxLQUFLO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxHQUFHOztBQUVILFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7O1VDM0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNObUQ7QUFDMUI7QUFDMkI7QUFDSjs7QUFFaEQsZ0JBQWdCLGlFQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBVTtBQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9DU1Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9DU1Mvc3R5bGVzLmNzcz9hYzA1Iiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9KYXZhU2NyaXB0L2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0phdmFTY3JpcHQvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvSmF2YVNjcmlwdC9tZW51LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG5cXG4vKiAjcmVnaW9uIFJlbW92ZSBidXR0b24gU3R5bGluZyAqL1xcbmJ1dHRvbiwgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0sIGlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl0ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU0NGI4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibGVmdCBjZW50ZXIgcmlnaHRcXFwiO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAuYmFycyB7XFxuICBncmlkLWFyZWE6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5oZWFkZXIgLmFkZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudSB7XFxuICAvKiBkaXNwbGF5OiBub25lOyAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIC5tZW51LWl0ZW0gaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gIHBhZGRpbmc6IDIlO1xcbn0gKi9cXG5cXG4vKiAubWVudS1pdGVtIGg0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIlIDIlIDIlIDEwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXlcXG59ICovXFxuXFxuXFxuLmRvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5tZW51LXNoYWRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMzUsIDIzNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubWVudS1pY29uLXJpZ2h0IHtcXG4gIG1hcmdpbi1yaWdodDogNHZ3O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jbGlja2FibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNsaWNrYWJsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMnB4KTtcXG4gIGNvbG9yOiByZ2IoMjAsIDQ0LCAxMTQpO1xcbn1cXG5cXG4uZ3JvdyB7IHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7IH1cXG4uZ3Jvdzpob3ZlciB7IHRyYW5zZm9ybTogc2NhbGUoMS41KTsgfVxcblxcbi5ibHVycmVkIHtcXG4gIGZpbHRlcjogYmx1cigxMHB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cXG5cXG4vKiAjcmVnaW9uIFByb2plY3QgVmlldyAqL1xcbi5wYWdlLXRpdGxlIHtcXG4gIG1hcmdpbjogMyUgMiUgMyUgMiU7XFxufVxcblxcbi5pdGVtLWJveCB7XFxuICBtYXJnaW46IC0xcHggMCAwIDA7XFxuICBwYWRkaW5nOiAyJSAyJSAxJSAyJTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbn1cXG5cXG4uaW5kZW50ZWQge1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgLyogZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImdyaWRDaXJjbGUgZ3JpZFRpdGxlIGdyaWREYXRlXFxcIlxcbiAgICBcXFwiLi4uLi4uLi4uLiBncmlkSWNvbnMgLi4uLi4uLi5cXFwiO1xcbn1cXG5cXG4udGFzay1pdGVtIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1pdGVtIC50YXNrLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBncmlkVGl0bGU7XFxufVxcblxcbi50YXNrLWNoZWNrY2lyY2xlLWljb24ge1xcbiAgZ3JpZC1hcmVhOiBncmlkQ2lyY2xlO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDUlO1xcbn1cXG5cXG4udGFzay1kYXRlIHtcXG4gIGNvbG9yOiByZ2IoOTAsIDkwLCA5MCk7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtYXJlYTogZ3JpZERhdGU7XFxufVxcblxcbi50YXNrLWljb24tYXJlYSB7XFxuICBncmlkLWFyZWE6IGdyaWRJY29ucztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1pY29uLWFyZWEgKiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIlO1xcbn1cXG5cXG4udGFzay1jaGVja2JveC1pY29uIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiA0cHg7XFxufVxcblxcbi50YXNrLWFkZC1idG4ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA0JTtcXG4gIHJpZ2h0OiA0JTtcXG4gIGNvbG9yOiByZ2IoMTUxLCAxOCwgMTgpO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuLyogI3JlZ2lvbiBFZGl0IFRhc2sgVmlldyAqL1xcbiAgLmVkaXQtdGFzay12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgXFxcInRhc2tuYW1lICAgIHRhc2tuYW1lXFxcIlxcbiAgICAgIFxcXCJwcm9qZWN0ICAgICAuLi4uLi4uLlxcXCJcXG4gICAgICBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiXFxuICAgICAgXFxcImRhdGUgICAgICAgIHByaW9yaXR5XFxcIlxcbiAgICAgIFxcXCJub3RlcyAgICAgICBub3Rlc1xcXCJcXG4gICAgICBcXFwibm90ZXMgICAgICAgbm90ZXNcXFwiXFxuICAgICAgXFxcImNoZWNrbGlzdCAgIGNoZWNrbGlzdFxcXCI7XFxuICAgIG1hcmdpbjogNSU7XFxuICB9XFxuXFxuICAuZWRpdC10YXNrLXZpZXcgPiAqIHtcXG4gICAgbWFyZ2luOiAzJSAwIDMlIDA7XFxuICB9XFxuXFxuICAuZWRpdC10YXNrLXByb2plY3Qge1xcbiAgICBncmlkLWFyZWE6IHByb2plY3Q7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICB9XFxuXFxuICAuZWRpdC10YXNrLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IHRhc2tuYW1lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay1uYW1lIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICB9XFxuXFxuICAuZWRpdC10YXNrLWRhdGUge1xcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gIC5lZGl0LXRhc2stcHJpb3JpdHkge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG5cXG4gIC5lZGl0LXRhc2stbm90ZXMge1xcbiAgICBncmlkLWFyZWE6IG5vdGVzO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay1jaGVja2xpc3Qge1xcbiAgICBncmlkLWFyZWE6IGNoZWNrbGlzdDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTVmcjtcXG4gIH1cXG5cXG4gIC5zdWJ0YXNrLXRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuZWRpdC10YXNrLXZpZXcgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5kZXN0eWxlZC1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiAgICAgbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiAgICAgICAgbm9uZTtcXG4gICAgLW1zLWFwcGVhcmFuY2U6ICAgICAgICAgbm9uZTtcXG4gICAgLW8tYXBwZWFyYW5jZTogICAgICAgICAgbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogICAgICAgICAgICAgbm9uZTtcXG4gIH1cXG5cXG4gIC5kZXN0eWxlZC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAucHJpb3JpdHktaGlnaCB7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5LW1lZGl1bSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDE2NiwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gXFxuICAucHJpb3JpdHktbG93IHtcXG4gICAgYmFja2dyb3VuZDogeWVsbG93Z3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuXFxuLyogI3JlZ2lvbiBFZGl0IFByb2plY3QgVmlldyAqL1xcbi5lZGl0LXByb2plY3Qtdmlld3tcXG4gIHBhZGRpbmc6IDUlIDMlIDUlIDMlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IFxcXCJuYW1lICBuYW1lICAgY29sb3JcXFwiXFxuICAgICAgICBcXFwiZGVzYyAgZGVzYyAgIC4uLi4uXFxcIlxcbiAgICAgICAgXFxcInNhdmUgIGNhbmNlbCAuLi4uXFxcIlxcbiAgICAgICAgLyAxZnIgMWZyIDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lZGl0LXByb2plY3QtdmlldyBsYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGdyaWQtYXJlYTogbmFtZTtcXG4gIG1hcmdpbi1yaWdodDogMyU7XFxufVxcblxcbi5lZGl0LXByb2plY3QtbmFtZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA5LCAxNzAsIDE3MCk7XFxufVxcblxcbi5lZGl0LXByb2plY3QtY29sb3Ige1xcbiAgZ3JpZC1hcmVhOiBjb2xvcjtcXG59XFxuXFxuI2VkaXQtcHJvamVjdC1zYXZlLWJ0biB7XFxuICBncmlkLWFyZWE6IHNhdmU7XFxufVxcblxcbiNlZGl0LXByb2plY3QtY2FuY2VsLWJ0biB7XFxuICBncmlkLWFyZWE6IGNhbmNlbDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC12aWV3IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU0NGI4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMiUgNCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNWVtO1xcbiAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5lZGl0LXByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGdyaWQtYXJlYTogZGVzYztcXG4gIG1hcmdpbjogMTAlIDAgMTAlIDA7XFxufVxcblxcbi5lZGl0LXByb2plY3QtZGVzY3JpcHRpb246aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwOSwgMTcwLCAxNzApO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgIFxcXCJtZW51IGNvbnRlbnQgY29udGVudFxcXCJcXG4gICAgICBcXFwibWVudSBjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgICAgXFxcIm1lbnUgY29udGVudCBjb250ZW50XFxcIlxcbiAgICAgIFxcXCJtZW51IGNvbnRlbnQgY29udGVudFxcXCJcXG4gICAgICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDFmciAxZnIgMWZyIGF1dG87XFxuXFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIC8qIG92ZXJmbG93OiBzY3JvbGw7ICovXFxuICB9XFxuICBcXG4gIGhlYWRlciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTQ0Yjg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgcGFkZGluZy1yaWdodDogMSU7XFxuICAgIHRvcDogMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBoZWFkZXIgPiAuYmFycyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIGZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgfVxcbiAgXFxuICAubWVudSB7XFxuICAgIGdyaWQtYXJlYTogbWVudTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2OCwgMTY4LCAxNjgsIDAuMTg1KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcblxcbiAgXFxuICAuY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gIH1cXG5cXG5cXG4gIC5uZXctdGFzayB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gIH1cXG5cXG4gIC5uZXctdGFzayBpIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcblxcbiAgLm5ldy10YXNrIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHJnYig4NywgODcsIDg3KTtcXG4gIH1cXG5cXG4gIC5uZXctdGFzazpob3ZlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0NTUy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOzs7O0FBSUEsa0NBQWtDO0FBQ2xDO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBQ0EsZUFBZTs7QUFFZjtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLE1BQU07RUFDTixVQUFVO0VBQ1YsYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTs7OztHQUlHOztBQUVIOzs7O0dBSUc7OztBQUdIO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOztBQUVBLFFBQVEsK0JBQStCLEVBQUU7QUFDekMsY0FBYyxxQkFBcUIsRUFBRTs7QUFFckM7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFOzttQ0FFaUM7RUFDakMsYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7bUNBRWlDO0FBQ25DOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOztBQUVBLGVBQWU7O0FBRWYsMkJBQTJCO0VBQ3pCO0lBQ0UsYUFBYTtJQUNiOzs7Ozs7OzZCQU95QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7QUFFRixlQUFlOzs7QUFHZiw4QkFBOEI7QUFDOUI7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiOzs7cUJBR21CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxlQUFlOztBQUVmO0VBQ0U7SUFDRSxhQUFhO0lBQ2I7Ozs7Ozs0QkFNd0I7SUFDeEIsNkNBQTZDOztJQUU3QyxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLDJDQUEyQztJQUMzQyxZQUFZO0VBQ2Q7Ozs7RUFJQTtJQUNFLGtCQUFrQjtFQUNwQjs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0NBQWtDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuLyogI3JlZ2lvbiBSZW1vdmUgYnV0dG9uIFN0eWxpbmcgKi9cXG5idXR0b24sIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NDRiODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxlZnQgY2VudGVyIHJpZ2h0XFxcIjtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIG1hcmdpbjogMSU7XFxufVxcblxcbmhlYWRlciAubG9nbyB7XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGdyaWQtYXJlYTogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgLmJhcnMge1xcbiAgZ3JpZC1hcmVhOiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuaGVhZGVyIC5hZGQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1lbnUge1xcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiAubWVudS1pdGVtIGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICBwYWRkaW5nOiAyJTtcXG59ICovXFxuXFxuLyogLm1lbnUtaXRlbSBoNCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyJSAyJSAyJSAxMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5XFxufSAqL1xcblxcblxcbi5kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ubWVudS1zaGFkZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM1LCAyMzUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1lbnUtaWNvbi1yaWdodCB7XFxuICBtYXJnaW4tcmlnaHQ6IDR2dztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5jbGlja2FibGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTJweCk7XFxuICBjb2xvcjogcmdiKDIwLCA0NCwgMTE0KTtcXG59XFxuXFxuLmdyb3cgeyB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0OyB9XFxuLmdyb3c6aG92ZXIgeyB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IH1cXG5cXG4uYmx1cnJlZCB7XFxuICBmaWx0ZXI6IGJsdXIoMTBweCk7XFxuICAtd2Via2l0LWZpbHRlcjogYmx1cigxMHB4KTtcXG59XFxuXFxuLyogI3JlZ2lvbiBQcm9qZWN0IFZpZXcgKi9cXG4ucGFnZS10aXRsZSB7XFxuICBtYXJnaW46IDMlIDIlIDMlIDIlO1xcbn1cXG5cXG4uaXRlbS1ib3gge1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAwO1xcbiAgcGFkZGluZzogMiUgMiUgMSUgMiU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG59XFxuXFxuLmluZGVudGVkIHtcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIC8qIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJncmlkQ2lyY2xlIGdyaWRUaXRsZSBncmlkRGF0ZVxcXCJcXG4gICAgXFxcIi4uLi4uLi4uLi4gZ3JpZEljb25zIC4uLi4uLi4uXFxcIjtcXG59XFxuXFxuLnRhc2staXRlbSBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2staXRlbSAudGFzay1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtYXJlYTogZ3JpZFRpdGxlO1xcbn1cXG5cXG4udGFzay1jaGVja2NpcmNsZS1pY29uIHtcXG4gIGdyaWQtYXJlYTogZ3JpZENpcmNsZTtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgcGFkZGluZy1sZWZ0OiA1JTtcXG59XFxuXFxuLnRhc2stZGF0ZSB7XFxuICBjb2xvcjogcmdiKDkwLCA5MCwgOTApO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLWFyZWE6IGdyaWREYXRlO1xcbn1cXG5cXG4udGFzay1pY29uLWFyZWEge1xcbiAgZ3JpZC1hcmVhOiBncmlkSWNvbnM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2staWNvbi1hcmVhICoge1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG59XFxuXFxuLnRhc2stY2hlY2tib3gtaWNvbiB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogNHB4O1xcbn1cXG5cXG4udGFzay1hZGQtYnRuIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNCU7XFxuICByaWdodDogNCU7XFxuICBjb2xvcjogcmdiKDE1MSwgMTgsIDE4KTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbi8qICNyZWdpb24gRWRpdCBUYXNrIFZpZXcgKi9cXG4gIC5lZGl0LXRhc2stdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgIFxcXCJ0YXNrbmFtZSAgICB0YXNrbmFtZVxcXCJcXG4gICAgICBcXFwicHJvamVjdCAgICAgLi4uLi4uLi5cXFwiXFxuICAgICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIlxcbiAgICAgIFxcXCJkYXRlICAgICAgICBwcmlvcml0eVxcXCJcXG4gICAgICBcXFwibm90ZXMgICAgICAgbm90ZXNcXFwiXFxuICAgICAgXFxcIm5vdGVzICAgICAgIG5vdGVzXFxcIlxcbiAgICAgIFxcXCJjaGVja2xpc3QgICBjaGVja2xpc3RcXFwiO1xcbiAgICBtYXJnaW46IDUlO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay12aWV3ID4gKiB7XFxuICAgIG1hcmdpbjogMyUgMCAzJSAwO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay1wcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay1uYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiB0YXNrbmFtZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lZGl0LXRhc2stbmFtZSBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXG4gIH1cXG5cXG4gIC5lZGl0LXRhc2stZGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay1kYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAuZWRpdC10YXNrLXByaW9yaXR5IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuXFxuICAuZWRpdC10YXNrLW5vdGVzIHtcXG4gICAgZ3JpZC1hcmVhOiBub3RlcztcXG4gIH1cXG5cXG4gIC5lZGl0LXRhc2stY2hlY2tsaXN0IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2xpc3Q7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1ZnI7XFxuICB9XFxuXFxuICAuc3VidGFzay10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLmVkaXQtdGFzay12aWV3IHAge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAuZGVzdHlsZWQtaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogICAgIG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogICAgICAgIG5vbmU7XFxuICAgIC1tcy1hcHBlYXJhbmNlOiAgICAgICAgIG5vbmU7XFxuICAgIC1vLWFwcGVhcmFuY2U6ICAgICAgICAgIG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6ICAgICAgICAgICAgIG5vbmU7XFxuICB9XFxuXFxuICAuZGVzdHlsZWQtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5LWhpZ2gge1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5wcmlvcml0eS1tZWRpdW0ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxNjYsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuIFxcbiAgLnByaW9yaXR5LWxvdyB7XFxuICAgIGJhY2tncm91bmQ6IHllbGxvd2dyZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcblxcbi8qICNyZWdpb24gRWRpdCBQcm9qZWN0IFZpZXcgKi9cXG4uZWRpdC1wcm9qZWN0LXZpZXd7XFxuICBwYWRkaW5nOiA1JSAzJSA1JSAzJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkOiBcXFwibmFtZSAgbmFtZSAgIGNvbG9yXFxcIlxcbiAgICAgICAgXFxcImRlc2MgIGRlc2MgICAuLi4uLlxcXCJcXG4gICAgICAgIFxcXCJzYXZlICBjYW5jZWwgLi4uLlxcXCJcXG4gICAgICAgIC8gMWZyIDFmciAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LXZpZXcgbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBncmlkLWFyZWE6IG5hbWU7XFxuICBtYXJnaW4tcmlnaHQ6IDMlO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LW5hbWU6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwOSwgMTcwLCAxNzApO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWNvbG9yIHtcXG4gIGdyaWQtYXJlYTogY29sb3I7XFxufVxcblxcbiNlZGl0LXByb2plY3Qtc2F2ZS1idG4ge1xcbiAgZ3JpZC1hcmVhOiBzYXZlO1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LWNhbmNlbC1idG4ge1xcbiAgZ3JpZC1hcmVhOiBjYW5jZWw7XFxufVxcblxcbi5lZGl0LXByb2plY3QtdmlldyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NDRiODtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIlIDQlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDVlbTtcXG4gIGhlaWdodDogMmVtO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBncmlkLWFyZWE6IGRlc2M7XFxuICBtYXJnaW46IDEwJSAwIDEwJSAwO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWRlc2NyaXB0aW9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDksIDE3MCwgMTcwKTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICBcXFwibWVudSBjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgICAgXFxcIm1lbnUgY29udGVudCBjb250ZW50XFxcIlxcbiAgICAgIFxcXCJtZW51IGNvbnRlbnQgY29udGVudFxcXCJcXG4gICAgICBcXFwibWVudSBjb250ZW50IGNvbnRlbnRcXFwiXFxuICAgICAgXFxcImZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxZnIgMWZyIDFmciBhdXRvO1xcblxcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBvdmVyZmxvdzogc2Nyb2xsOyAqL1xcbiAgfVxcbiAgXFxuICBoZWFkZXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU0NGI4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xcbiAgICB0b3A6IDA7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgaGVhZGVyID4gLmJhcnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICBmb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIH1cXG4gIFxcbiAgLm1lbnUge1xcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjgsIDE2OCwgMTY4LCAwLjE4NSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG5cXG4gIFxcbiAgLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICB9XFxuXFxuXFxuICAubmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuICAubmV3LXRhc2sgaSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG5cXG4gIC5uZXctdGFzayBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiByZ2IoODcsIDg3LCA4Nyk7XFxuICB9XFxuXFxuICAubmV3LXRhc2s6aG92ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIF90aXRsZTogdGl0bGUsXG4gICAgX2Rlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBfZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICBfcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIF9ub3Rlczogbm90ZXMsXG4gICAgX2NoZWNrbGlzdDogW10sXG4gICAgX3Byb2plY3Q6IHByb2plY3QgfHwgJ2RlZmF1bHQnLFxuICAgIF9kb25lOiBmYWxzZVxuICB9XG5cbiAgY29uc3QgY2hhbmdlUHJvcCA9IChwcm9wLCB2YWwpID0+IHtcbiAgICBwcm9wc1tgXyR7cHJvcH1gXSA9IHZhbDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9wcyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRG9uZSA9ICgpID0+IHtcbiAgICBwcm9wcy5fZG9uZSA9ICFwcm9wcy5fZG9uZTtcbiAgfTtcbiAgICBcbiAgY29uc3QgbmV3Q2hlY2tCb3ggPSAodGV4dCkgPT4ge1xuICAgIHByb3BzLl9jaGVja2xpc3QucHVzaCh0ZXh0KTtcbiAgfVxuICBcbiAgY29uc3QgbW92ZUNoZWNrQm94ID0gKGluZGV4LCBkaXJlY3Rpb24pID0+IHtcbiAgICBjb25zdCBhcnIgPSBwcm9wcy5fY2hlY2tsaXN0O1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJbaW5kZXhdO1xuICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmIChkaXJlY3Rpb24gPT0gJ3VwJykge1xuICAgICAgYXJyLnNwbGljZShpbmRleC0xLCAwLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSAnZG93bicpIHtcbiAgICAgIGFyci5zcGxpY2UoaW5kZXgrMSwgMCwgZWxlbWVudCk7XG4gICAgfVxuICAgIHByb3BzLl9jaGVja2xpc3QgPSBhcnI7XG4gIH07XG5cbiAgcmV0dXJuIHtjaGFuZ2VQcm9wLCBnZXRQcm9wcywgdG9nZ2xlRG9uZSwgbmV3Q2hlY2tCb3gsIG1vdmVDaGVja0JveH07XG59O1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgY29sb3IpID0+IHtcbiAgLy9uZXN0IHRoZSBUb0RvIG9iamVjdCBpbnNpZGUgb2YgaGVyZVxuICBjb25zdCBwcm9wcyA9IHtcbiAgICBfdGl0bGU6IHRpdGxlLFxuICAgIF9kZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgX2NvbG9yOiBjb2xvcixcbiAgICBfdG9kb3M6IFtdLFxuICB9XG5cbiAgY29uc3QgY2hhbmdlUHJvcCA9IChwcm9wLCB2YWwpID0+IHtcbiAgICBwcm9wc1tgXyR7cHJvcH1gXSA9IHZhbDtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9wcyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvcHM7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoaW5kZXgsIHByb3AsIHZhbCkgPT4ge1xuICAgIHByb3BzLl90b2Rvc1tpbmRleF1bYF8ke3Byb3B9YF0gPSB2YWw7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRG9uZSA9IChpbmRleCkgPT4ge1xuICAgIHByb3BzLl90b2Rvc1tpbmRleF0udG9nZ2xlRG9uZSgpO1xuXG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcykgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKTtcbiAgICBwcm9wcy5fdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDaGVja0JveCA9IChpbmRleCwgdGV4dCkgPT4ge1xuICAgIHByb3BzLl90b2Rvc1tpbmRleF0ubmV3Q2hlY2tCb3godGV4dCk7XG4gIH07XG5cbiAgY29uc3QgbW92ZUNoZWNrQm94ID0gKGluZGV4LCBjaGVja0luZGV4LCBkaXJlY3Rpb24pID0+IHtcbiAgICBwcm9wcy5fdG9kb3NbaW5kZXhdLm1vdmVDaGVja0JveChjaGVja0luZGV4LCBkaXJlY3Rpb24pO1xuICB9O1xuXG4gIGNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+ICh7XG4gICAgXG4gICAgX3RpdGxlOiB0aXRsZSxcbiAgICBfZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIF9kdWVEYXRlOiBkdWVEYXRlLFxuICAgIF9wcmlvcml0eTogcHJpb3JpdHksXG4gICAgX25vdGVzOiBub3RlcyxcbiAgICBfY2hlY2tsaXN0OiBbXSxcbiAgICBfZG9uZTogZmFsc2UsXG4gICAgXG4gICAgdG9nZ2xlRG9uZSgpICB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl9kb25lKVxuICAgICAgdGhpcy5fZG9uZSA9ICF0aGlzLl9kb25lO1xuICAgICAgY29uc29sZS5sb2codGhpcy5fZG9uZSk7XG4gICAgfSxcbiAgICAgIFxuICAgIG5ld0NoZWNrQm94KHRleHQpIHtcbiAgICAgIHRoaXMuX2NoZWNrbGlzdC5wdXNoKHRleHQpO1xuICAgIH0sXG4gICAgXG4gICAgbW92ZUNoZWNrQm94KGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICAgIGNvbnN0IGFyciA9IHRoaXMuX2NoZWNrbGlzdDtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJbaW5kZXhdO1xuICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBpZiAoZGlyZWN0aW9uID09ICd1cCcpIHtcbiAgICAgICAgYXJyLnNwbGljZShpbmRleC0xLCAwLCBlbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09ICdkb3duJykge1xuICAgICAgICBhcnIuc3BsaWNlKGluZGV4KzEsIDAsIGVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2hlY2tsaXN0ID0gYXJyO1xuICAgIH1cbiAgICAvL3JldHVybiB7Y2hhbmdlUHJvcCwgZ2V0UHJvcHMsIHRvZ2dsZURvbmUsIG5ld0NoZWNrQm94LCBtb3ZlQ2hlY2tCb3h9O1xuICB9KTtcblxuICByZXR1cm4geyBjaGFuZ2VQcm9wLCBnZXRQcm9wcywgY3JlYXRlVG9kbywgZWRpdFRvZG8sIHRvZ2dsZURvbmUsIGNyZWF0ZUNoZWNrQm94LCBtb3ZlQ2hlY2tCb3ggfVxufVxuXG5cbmV4cG9ydCB7IFByb2plY3QgfSIsImNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIGNsYXNzPVwiaGVhZGVyLWl0ZW0gaWNvbiBiYXJzXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1iYXJzXCI+PC9pPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlci1pdGVtIGxvZ29cIj48aDE+WW91RG88L2gxPjwvZGl2PlxuICA8YnV0dG9uIGNsYXNzPVwiaGVhZGVyLWl0ZW0gaWNvbiBhZGRcIj48L2J1dHRvbj5cbiAgYDtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImdyaWQxXCIsIFwiaGVhZGVyXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmV4cG9ydCB7bG9hZEhlYWRlcn07IiwiY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5cbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBtZW51RGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgaWQ9XCJpbmJveFwiPlxuICAgICAgPGgzIGNsYXNzPVwiY2xpY2thYmxlIGl0ZW0tYm94XCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaW5ib3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIEluYm94XG4gICAgICA8L2gzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBpZD1cInRvZGF5XCI+XG4gICAgICA8aDMgY2xhc3M9XCJjbGlja2FibGUgaXRlbS1ib3hcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhci1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICBUb2RheVxuICAgICAgPC9oMz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgPGgzIGNsYXNzPVwibWVudS1zaGFkZWQgaXRlbS1ib3hcIj5Qcm9qZWN0cyBcbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1sZyBmYS1hbmdsZS1kb3duIG1lbnUtaWNvbi1yaWdodCBjbGlja2FibGUgZ3Jvd1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMtY2lyY2xlIG1lbnUtaWNvbi1yaWdodCBjbGlja2FibGUgZ3Jvd1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMz5cbiAgICAgIDxoNCBjbGFzcz1cImNsaWNrYWJsZSBpdGVtLWJveCBpbmRlbnRlZFwiPkUyRTwvaDQ+XG4gICAgICA8aDQgY2xhc3M9XCJjbGlja2FibGUgaXRlbS1ib3ggaW5kZW50ZWRcIj5UaGUgT2RpbiBQcm9qZWN0PC9oND5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgaWQ9XCJsYWJlbHNcIj5cbiAgICAgIDxoMyBjbGFzcz1cIm1lbnUtc2hhZGVkIGl0ZW0tYm94XCI+TGFiZWxzXG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbGcgZmEtYW5nbGUtZG93biBtZW51LWljb24tcmlnaHQgY2xpY2thYmxlIGdyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZSBtZW51LWljb24tcmlnaHQgY2xpY2thYmxlIGdyb3dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvaDM+XG4gICAgICA8aDQgY2xhc3M9XCJjbGlja2FibGUgaXRlbS1ib3ggaW5kZW50ZWRcIj5IaWdoIFByaW9yaXR5PC9oND5cbiAgICAgIDxoNCBjbGFzcz1cImNsaWNrYWJsZSBpdGVtLWJveCBpbmRlbnRlZFwiPk1lZGl1bSBQcmlvcml0eTwvaDQ+XG4gICAgICA8aDQgY2xhc3M9XCJjbGlja2FibGUgaXRlbS1ib3ggaW5kZW50ZWRcIj5Mb3cgUHJpb3JpdHk8L2g0PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbn1cblxuZXhwb3J0IHtsb2FkTWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL0phdmFTY3JpcHQvZmFjdG9yaWVzLmpzJ1xuaW1wb3J0ICcuL0NTUy9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgbG9hZEhlYWRlciB9IGZyb20gJy4vSmF2YVNjcmlwdC9oZWFkZXIuanMnO1xuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tICcuL0phdmFTY3JpcHQvbWVudS5qcyc7XG5cbmNvbnN0IHByb2plY3QgPSBQcm9qZWN0KFwiVGVzdFByb2plY3RcIiwgXCJUaGlzIGlzIGEgdGVzdFwiLCBcIiMwMDAwZmZcIik7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFByb3BzKCkpO1xucHJvamVjdC5jcmVhdGVUb2RvKFwidGVzdDFcIiwgXCJ0ZXN0MlwiLCBcInRlc3QzXCIsIFwidGVzdDRcIiwgXCJ0ZXN0NVwiLCBcInRlc3Q2XCIsIFwidGVzdDdcIik7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFByb3BzKCkpO1xucHJvamVjdC5lZGl0VG9kbygwLCAndGl0bGUnLCAnUHJvamVjdCB0ZXN0IFRpdGxlJyk7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFByb3BzKCkpO1xucHJvamVjdC50b2dnbGVEb25lKDApO1xuY29uc29sZS5sb2cocHJvamVjdC5nZXRQcm9wcygpKTtcbnByb2plY3QuY3JlYXRlQ2hlY2tCb3goMCwgXCJiYWx0aW1vcmUgd2VkZGluZ1wiKTtcbnByb2plY3QuY3JlYXRlQ2hlY2tCb3goMCwgXCJkbyB0aGUgdGhpbmdcIik7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFByb3BzKCkpO1xucHJvamVjdC5tb3ZlQ2hlY2tCb3goMCwwLCBcImRvd25cIik7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFByb3BzKCkpO1xuXG4vLyBjb25zdCB0b2RvVHdvID0gVG9kbyhcInRlc3QxXCIsIFwidGVzdDJcIiwgXCJ0ZXN0M1wiLCBcInRlc3Q0XCIsIFwidGVzdDVcIiwgXCJ0ZXN0NlwiLCBcInRlc3Q3XCIpO1xuLy8gY29uc29sZS5sb2codG9kb1R3byk7XG4vLyB0b2RvVHdvLmNoYW5nZVByb3AoJ3RpdGxlJywgJ25ld1RpdGxlJyk7XG4vLyB0b2RvVHdvLmNoYW5nZVByb3AoJ2R1ZURhdGUnLCAnOS8yMS8yMDIxJyk7XG4vLyB0b2RvVHdvLnRvZ2dsZURvbmUoKTtcbi8vIHRvZG9Ud28ubmV3Q2hlY2tCb3goJ3RoaXMgaXMgY2hlY2sgaXRlbScpO1xuLy8gdG9kb1R3by5uZXdDaGVja0JveCgnYW5vdGhlciBjaGVjayBpdGVtJyk7XG4vLyB0b2RvVHdvLm1vdmVDaGVja0JveCgxLCAndXAnKTtcbi8vIHRvZG9Ud28ubW92ZUNoZWNrQm94KDAsICdkb3duJyk7XG4vLyBjb25zb2xlLmxvZyh0b2RvVHdvLmdldFByb3BzKCkpO1xuXG5sb2FkSGVhZGVyKCk7XG4vL2xvYWRNZW51KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=