(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loader-loader-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/loader/loader.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/loader/loader.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>"

/***/ }),

/***/ "./src/app/pages/loader/loader-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/loader/loader-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoaderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPageRoutingModule", function() { return LoaderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.page */ "./src/app/pages/loader/loader.page.ts");




var routes = [
    {
        path: '',
        component: _loader_page__WEBPACK_IMPORTED_MODULE_3__["LoaderPage"]
    }
];
var LoaderPageRoutingModule = /** @class */ (function () {
    function LoaderPageRoutingModule() {
    }
    LoaderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoaderPageRoutingModule);
    return LoaderPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/loader/loader.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.module.ts ***!
  \***********************************************/
/*! exports provided: LoaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPageModule", function() { return LoaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loader_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader-routing.module */ "./src/app/pages/loader/loader-routing.module.ts");
/* harmony import */ var _loader_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader.page */ "./src/app/pages/loader/loader.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var LoaderPageModule = /** @class */ (function () {
    function LoaderPageModule() {
    }
    LoaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _loader_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoaderPageRoutingModule"]
            ],
            declarations: [_loader_page__WEBPACK_IMPORTED_MODULE_6__["LoaderPage"]]
        })
    ], LoaderPageModule);
    return LoaderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/loader/loader.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/loader/loader.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYWRlci9sb2FkZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/loader/loader.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/loader/loader.page.ts ***!
  \*********************************************/
/*! exports provided: LoaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderPage", function() { return LoaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderPage = /** @class */ (function () {
    function LoaderPage() {
    }
    LoaderPage.prototype.ngOnInit = function () {
    };
    LoaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! raw-loader!./loader.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/loader/loader.page.html"),
            styles: [__webpack_require__(/*! ./loader.page.scss */ "./src/app/pages/loader/loader.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderPage);
    return LoaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loader-loader-module-es5.js.map