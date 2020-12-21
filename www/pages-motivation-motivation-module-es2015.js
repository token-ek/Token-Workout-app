(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-motivation-motivation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/motivation/motivation.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/motivation/motivation.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          {{strings.ST5}}\n        </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"dark\"></app-backbutton>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content class=\"ion-padding\">\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <ion-slides *ngIf=\"!isLoading\" [options]=\"slideOpts\" mode=\"ios\">\n      <ion-slide class=\"slide\" *ngFor=\"let quote of quotes\">\n        <ion-card mode=\"ios\" class=\"card\">\n          <ion-icon name=\"md-quote\"></ion-icon>\n          <h1>{{quote.quote_title}}</h1>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/motivation/motivation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/motivation/motivation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MotivationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPageRoutingModule", function() { return MotivationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _motivation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./motivation.page */ "./src/app/pages/motivation/motivation.page.ts");




const routes = [
    {
        path: '',
        component: _motivation_page__WEBPACK_IMPORTED_MODULE_3__["MotivationPage"]
    }
];
let MotivationPageRoutingModule = class MotivationPageRoutingModule {
};
MotivationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MotivationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/motivation/motivation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/motivation/motivation.module.ts ***!
  \*******************************************************/
/*! exports provided: MotivationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPageModule", function() { return MotivationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _motivation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motivation-routing.module */ "./src/app/pages/motivation/motivation-routing.module.ts");
/* harmony import */ var _motivation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./motivation.page */ "./src/app/pages/motivation/motivation.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let MotivationPageModule = class MotivationPageModule {
};
MotivationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _motivation_routing_module__WEBPACK_IMPORTED_MODULE_5__["MotivationPageRoutingModule"]
        ],
        declarations: [_motivation_page__WEBPACK_IMPORTED_MODULE_6__["MotivationPage"]]
    })
], MotivationPageModule);



/***/ }),

/***/ "./src/app/pages/motivation/motivation.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/motivation/motivation.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n\n.slide {\n  height: 100%; }\n\n.card {\n  height: 100%;\n  width: 100%;\n  background-color: var(--ion-color-primary);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0 30px;\n  text-align: left; }\n\n.card h1 {\n  color: white;\n  font-size: 26px;\n  text-transform: uppercase; }\n\n.card ion-icon {\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 110px;\n  position: absolute;\n  top: 30px;\n  right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW90aXZhdGlvbi9DOlxcVXNlcnNcXElURFxcaW9uaWMtcmVwb1xcc2l4cGFjay0yLjAuMFxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcbW90aXZhdGlvblxcbW90aXZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxZQUFZLEVBQUE7O0FBRVo7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tb3RpdmF0aW9uL21vdGl2YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlc3tcbmhlaWdodDogMTAwJTtcbn1cbi5zbGlkZXtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJke1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2FyZCBoMXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jYXJkIGlvbi1pY29ue1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGZvbnQtc2l6ZTogMTEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzBweDtcbiAgICByaWdodDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/motivation/motivation.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/motivation/motivation.page.ts ***!
  \*****************************************************/
/*! exports provided: MotivationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotivationPage", function() { return MotivationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




let MotivationPage = class MotivationPage {
    constructor(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.quotes = [];
        this.isLoading = false;
        this.slideOpts = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            freeMode: false
        };
    }
    ngOnInit() {
        this.isLoading = true;
        this.DataService.getDataMotivation()
            .subscribe(resp => {
            this.quotes = resp;
            this.isLoading = false;
        });
    }
};
MotivationPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
MotivationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-motivation',
        template: __webpack_require__(/*! raw-loader!./motivation.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/motivation/motivation.page.html"),
        styles: [__webpack_require__(/*! ./motivation.page.scss */ "./src/app/pages/motivation/motivation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], MotivationPage);



/***/ })

}]);
//# sourceMappingURL=pages-motivation-motivation-module-es2015.js.map