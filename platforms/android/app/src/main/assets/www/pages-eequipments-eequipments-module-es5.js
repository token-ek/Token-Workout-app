(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-eequipments-eequipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/eequipments/eequipments.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/eequipments/eequipments.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{title}}\n      </ion-title>\n            <ion-buttons slot=\"start\">\n              <app-backbutton color=\"dark\"></app-backbutton>\n            </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  \n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <app-empty *ngIf=\"exercises.length === 0\" [title]=\"strings.ST140\"></app-empty>\n\n  <ion-list lines=\"none\" class=\"ion-padding-top\">\n\n  <ion-item *ngFor=\"let item of exercises\" [routerLink]=\"['/edetails', item.exercise_id]\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"item.exercise_image | image\">\n      </ion-avatar>\n      <ion-label>{{item.exercise_title}}</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/eequipments/eequipments-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: EequipmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPageRoutingModule", function() { return EequipmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eequipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eequipments.page */ "./src/app/pages/eequipments/eequipments.page.ts");




var routes = [
    {
        path: '',
        component: _eequipments_page__WEBPACK_IMPORTED_MODULE_3__["EequipmentsPage"]
    }
];
var EequipmentsPageRoutingModule = /** @class */ (function () {
    function EequipmentsPageRoutingModule() {
    }
    EequipmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EequipmentsPageRoutingModule);
    return EequipmentsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.module.ts ***!
  \*********************************************************/
/*! exports provided: EequipmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPageModule", function() { return EequipmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eequipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eequipments-routing.module */ "./src/app/pages/eequipments/eequipments-routing.module.ts");
/* harmony import */ var _eequipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eequipments.page */ "./src/app/pages/eequipments/eequipments.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var EequipmentsPageModule = /** @class */ (function () {
    function EequipmentsPageModule() {
    }
    EequipmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _eequipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EequipmentsPageRoutingModule"]
            ],
            declarations: [_eequipments_page__WEBPACK_IMPORTED_MODULE_6__["EequipmentsPage"]]
        })
    ], EequipmentsPageModule);
    return EequipmentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 124px !important;\n  max-height: 124px !important;\n  border-radius: 0;\n  padding-top: 5px; }\n\nion-avatar img {\n  border-radius: 6px; }\n\nion-item ion-label {\n  padding-left: 0px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 13px;\n  white-space: normal !important; }\n\nion-item {\n  border-bottom: 1px solid #eee !important; }\n\nion-item {\n  --background-focused:#fff !important;\n  --background-activated:#fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\nion-item:last-child {\n  border-bottom: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWVxdWlwbWVudHMvQzpcXFVzZXJzXFxJVERcXGlvbmljLXJlcG9cXHNpeHBhY2stMi4wLjBcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGVlcXVpcG1lbnRzXFxlZXF1aXBtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsdUJBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSx3Q0FBd0MsRUFBQTs7QUFHNUM7RUFDSSxvQ0FBcUI7RUFDckIsc0NBQXVCO0VBQ3ZCLDZDQUFvQjtFQUNwQix3QkFBc0IsRUFBQTs7QUFHMUI7RUFDSSw4QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VlcXVpcG1lbnRzL2VlcXVpcG1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1hdmF0YXIgIHsgICAgIFxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxuICAgIGhlaWdodCA6IDEwMCUgIWltcG9ydGFudDsgIFxuICAgIG1heC13aWR0aDogMTI0cHggIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxMjRweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG5cbmlvbi1hdmF0YXIgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcblxufVxuXG5pb24taXRlbSBpb24tbGFiZWx7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDojZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1kZXRhaWwtaWNvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tZGV0YWlsLWljb24tb3BhY2l0eTogMTtcbiB9XG5cbmlvbi1pdGVtOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/eequipments/eequipments.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/eequipments/eequipments.page.ts ***!
  \*******************************************************/
/*! exports provided: EequipmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EequipmentsPage", function() { return EequipmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");







var EequipmentsPage = /** @class */ (function () {
    function EequipmentsPage(dataService, router, route, plt, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.exercises = [];
        this.isLoading = false;
    }
    EequipmentsPage.prototype.ngOnInit = function () {
        this.admob.BannerAd();
    };
    // tslint:disable-next-line: use-lifecycle-interface
    EequipmentsPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    EequipmentsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.title = data.title;
                    _this.getExercises();
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    EequipmentsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    EequipmentsPage.prototype.getExercises = function () {
        var _this = this;
        this.dataService.getDataExercisesByEquipment(this.id)
            .subscribe(function (resp) {
            _this.exercises = resp;
            _this.isLoading = false;
        });
    };
    EequipmentsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"] }
    ]; };
    EequipmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eequipments',
            template: __webpack_require__(/*! raw-loader!./eequipments.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/eequipments/eequipments.page.html"),
            styles: [__webpack_require__(/*! ./eequipments.page.scss */ "./src/app/pages/eequipments/eequipments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _services_admob_service__WEBPACK_IMPORTED_MODULE_6__["AdmobService"]])
    ], EequipmentsPage);
    return EequipmentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-eequipments-eequipments-module-es5.js.map