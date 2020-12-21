(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"openMenu()\">\n              <ion-icon name=\"md-menu\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-justify-content-center ion-align-items-center row-header-bg\" [ngStyle]=\"{'height': innerHeight}\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <img src=\"./assets/images/logo.png\" class=\"col-header-logo\">\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class=\"menu-cols align-items-stretch\">\n          <ion-col size=\"6\" [routerLink]=\"['/workouts']\">\n            <img src=\"./assets/images/workouts.png\">\n            <ion-label>{{strings.ST1}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/exercises']\">\n              <img src=\"./assets/images/exercises.png\">\n              <ion-label>{{strings.ST2}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/diets']\">\n              <img src=\"./assets/images/diets.png\">\n              <ion-label>{{strings.ST3}}</ion-label>\n          </ion-col>\n            \n          <ion-col size=\"6\" [routerLink]=\"['/posts']\">\n              <img src=\"./assets/images/blog.png\">\n              <ion-label>{{strings.ST4}}</ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" [routerLink]=\"['/calculator']\">\n              <img src=\"./assets/images/calculator.png\">\n              <ion-label>{{strings.ST105}}</ion-label>\n          </ion-col>\n            \n          <ion-col size=\"6\" [routerLink]=\"['/motivation']\">\n              <img src=\"./assets/images/quotes.png\">\n              <ion-label>{{strings.ST5}}</ion-label>\n          </ion-col>\n\n      </ion-row>\n  \n    </ion-grid>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-header-bg {\n  background-image: url('header.jpg');\n  background-size: cover;\n  background-position: center; }\n\n.header-md:after {\n  display: none !important; }\n\n.col-header-logo {\n  max-width: 130px; }\n\n.menu-cols {\n  padding-top: 30px; }\n\n.menu-cols ion-col {\n  text-align: center;\n  padding: 20px 10px; }\n\n.menu-cols ion-col img {\n  max-width: 55px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.menu-cols ion-label {\n  text-transform: uppercase;\n  opacity: 0.5;\n  font-size: 14px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXElURFxcaW9uaWMtcmVwb1xcc2l4cGFjay0yLjAuMFxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBMEQ7RUFDMUQsc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNBLGdCQUFnQixFQUFBOztBQUdoQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNBLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctaGVhZGVyLWJne1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXJ7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29sLWhlYWRlci1sb2dve1xubWF4LXdpZHRoOiAxMzBweDtcbn1cblxuLm1lbnUtY29sc3tcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLm1lbnUtY29scyBpb24tY29se1xudGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4ubWVudS1jb2xzIGlvbi1jb2wgaW1ne1xuICAgIG1heC13aWR0aDogNTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn07XG5cbi5tZW51LWNvbHMgaW9uLWxhYmVse1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");




let HomePage = class HomePage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true, 'customMenu');
    }
    ngOnInit() {
        this.innerHeight = window.innerHeight / 3 + 'px';
    }
    openMenu() {
        this.menuCtrl.enable(true, 'customMenu');
        this.menuCtrl.open('customMenu');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map