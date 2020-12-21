(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exercises-exercises-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/exercises/exercises.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/exercises/exercises.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          {{strings.ST2}}\n        </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"dark\"></app-backbutton>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n      <ion-grid>\n        \n          <ion-row>\n            <ion-col [routerLink]=\"['/bodyparts']\">\n              <div class=\"card-center-image\" style=\"background-image: url('./assets/images/bodyparts.jpg');\">\n                <div class=\"card-center-bg\">\n                  <div class=\"card-center-text\">\n                  <p class=\"title\">{{strings.ST37}}</p>\n                  <p class=\"subtitle\">{{strings.ST40}}</p>\n                </div>\n                </div>\n              </div>\n              \n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n              <ion-col [routerLink]=\"['/equipments']\">\n                  <div class=\"card-center-image\" style=\"background-image: url('./assets/images/equipments.jpg');\">\n                      <div class=\"card-center-bg\">\n                        <div class=\"card-center-text\">\n                            <p class=\"title\">{{strings.ST38}}</p>\n                            <p class=\"subtitle\">{{strings.ST39}}</p>\n                      </div>\n                      </div>\n                    </div>\n              </ion-col>\n            </ion-row>\n  \n        </ion-grid>\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/pages/exercises/exercises-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/exercises/exercises-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ExercisesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageRoutingModule", function() { return ExercisesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercises.page */ "./src/app/pages/exercises/exercises.page.ts");




var routes = [
    {
        path: '',
        component: _exercises_page__WEBPACK_IMPORTED_MODULE_3__["ExercisesPage"]
    }
];
var ExercisesPageRoutingModule = /** @class */ (function () {
    function ExercisesPageRoutingModule() {
    }
    ExercisesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExercisesPageRoutingModule);
    return ExercisesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/exercises/exercises.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/exercises/exercises.module.ts ***!
  \*****************************************************/
/*! exports provided: ExercisesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageModule", function() { return ExercisesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercises-routing.module */ "./src/app/pages/exercises/exercises-routing.module.ts");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercises.page */ "./src/app/pages/exercises/exercises.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var ExercisesPageModule = /** @class */ (function () {
    function ExercisesPageModule() {
    }
    ExercisesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExercisesPageRoutingModule"]
            ],
            declarations: [_exercises_page__WEBPACK_IMPORTED_MODULE_6__["ExercisesPage"]]
        })
    ], ExercisesPageModule);
    return ExercisesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/exercises/exercises.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/exercises/exercises.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n  ion-grid ion-row {\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhlcmNpc2VzL0M6XFxVc2Vyc1xcSVREXFxpb25pYy1yZXBvXFxzaXhwYWNrLTIuMC4wXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxleGVyY2lzZXNcXGV4ZXJjaXNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUgxQjtJQU1RLG1CQUFZO1lBQVosWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhlcmNpc2VzL2V4ZXJjaXNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/exercises/exercises.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/exercises/exercises.page.ts ***!
  \***************************************************/
/*! exports provided: ExercisesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPage", function() { return ExercisesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



var ExercisesPage = /** @class */ (function () {
    function ExercisesPage() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
    }
    ExercisesPage.prototype.ngOnInit = function () {
    };
    ExercisesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exercises',
            template: __webpack_require__(/*! raw-loader!./exercises.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/exercises/exercises.page.html"),
            styles: [__webpack_require__(/*! ./exercises.page.scss */ "./src/app/pages/exercises/exercises.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExercisesPage);
    return ExercisesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-exercises-exercises-module-es5.js.map