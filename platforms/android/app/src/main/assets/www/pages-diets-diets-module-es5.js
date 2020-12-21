(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-diets-diets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/diets/diets.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/diets/diets.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header *ngIf=\"!isLoading\" class=\"darkheader\" mode=\"ios\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST3}}\n          </ion-title>\n        <ion-buttons slot=\"start\">\n          <app-backbutton color=\"light\"></app-backbutton>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"['/categories']\">\n              <ion-icon mode=\"md\" name=\"md-search\" slot=\"end\">\n              </ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content class=\"ion-no-padding\">\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <ion-slides *ngIf=\"isReady\" [options]=\"slideOpts\" mode=\"ios\">\n    <ion-slide *ngFor=\"let item of diets\" [routerLink]=\"['/ddetails', item.diet_id]\">\n      <div class=\"card\" [style.background-image]=\"'url(' + (item.diet_image | image) + ')'\">\n        <div class=\"overlay\">\n        <div class=\"texts\">\n        <p>{{item.category_title}}</p>\n        <h1>{{item.diet_title}}</h1>\n        </div>\n      </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-list style=\"margin: 0; padding: 0;\">\n      <ion-list-header color=\"primary\">\n        <ion-label style=\"font-weight: bold; letter-spacing: 0;\">{{strings.ST41}}</ion-label>\n      </ion-list-header>\n    </ion-list>\n\n <ion-grid>\n   <ion-row>\n     <ion-col size=\"6\" *ngFor=\"let item of categories\" [routerLink]=\"['/cdiets', item.category_id, item.category_title]\">\n        <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.category_image | image) + ')'\">\n            <div class=\"overlay\">\n            <div class=\"texts\">\n            <h1>{{item.category_title}}</h1>\n            </div>\n          </div>\n          </div>\n     </ion-col>\n   </ion-row>\n </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/diets/diets-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/diets/diets-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DietsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsPageRoutingModule", function() { return DietsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _diets_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diets.page */ "./src/app/pages/diets/diets.page.ts");




var routes = [
    {
        path: '',
        component: _diets_page__WEBPACK_IMPORTED_MODULE_3__["DietsPage"]
    }
];
var DietsPageRoutingModule = /** @class */ (function () {
    function DietsPageRoutingModule() {
    }
    DietsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DietsPageRoutingModule);
    return DietsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/diets/diets.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/diets/diets.module.ts ***!
  \*********************************************/
/*! exports provided: DietsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsPageModule", function() { return DietsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diets_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diets-routing.module */ "./src/app/pages/diets/diets-routing.module.ts");
/* harmony import */ var _diets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diets.page */ "./src/app/pages/diets/diets.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var DietsPageModule = /** @class */ (function () {
    function DietsPageModule() {
    }
    DietsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _diets_routing_module__WEBPACK_IMPORTED_MODULE_5__["DietsPageRoutingModule"]
            ],
            declarations: [_diets_page__WEBPACK_IMPORTED_MODULE_6__["DietsPage"]]
        })
    ], DietsPageModule);
    return DietsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/diets/diets.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/diets/diets.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 100%;\n  height: 250px;\n  background-size: cover;\n  background-position: center;\n  position: relative; }\n\n.card .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 250px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left; }\n\n.card .texts {\n  padding: 30px 15px; }\n\n.card .texts p {\n  color: var(--ion-color-primary);\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 6px; }\n\n.card .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 18px; }\n\n.cardcategory {\n  width: 100%;\n  height: 100px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlldHMvQzpcXFVzZXJzXFxJVERcXGlvbmljLXJlcG9cXHNpeHBhY2stMi4wLjBcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGRpZXRzXFxkaWV0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBR0kseUhBQWtGO0VBQWxGLHdGQUFrRjtFQUNsRixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksK0JBQThCO0VBQzlCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFHSSw0R0FBK0U7RUFBL0UscUZBQStFO0VBQy9FLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBaUI7RUFBakIsNkJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBRWhCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpZXRzL2RpZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZCAub3ZlcmxheXtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDAuNCkgMTAlLCByZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMC40KSAxMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgwLDAsMCwwLjQpIDEwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2FyZCAudGV4dHN7XG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xufVxuXG4uY2FyZCAudGV4dHMgcHtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmNhcmQgLnRleHRzIGgxe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2FyZGNhdGVnb3J5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhcmRjYXRlZ29yeSAub3ZlcmxheXtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDApIDAlLCByZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgwLDAsMCwwKSAwJSxyZ2JhKDAsMCwwLDAuNzUpIDEwMCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNhcmRjYXRlZ29yeSAudGV4dHN7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/diets/diets.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/diets/diets.page.ts ***!
  \*******************************************/
/*! exports provided: DietsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietsPage", function() { return DietsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var DietsPage = /** @class */ (function () {
    function DietsPage(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.diets = [];
        this.categories = [];
        this.isLoading = false;
        this.isReady = true;
        this.slideOpts = {
            slidesPerView: 1,
            freeMode: false
        };
    }
    DietsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.DataService.getDataFeaturedDiets()
            .subscribe(function (resp) {
            _this.diets = resp;
            _this.isReady = true;
        });
        this.DataService.getDataCategories()
            .subscribe(function (resp) {
            _this.categories = resp;
            _this.isLoading = false;
        });
    };
    DietsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    DietsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diets',
            template: __webpack_require__(/*! raw-loader!./diets.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/diets/diets.page.html"),
            styles: [__webpack_require__(/*! ./diets.page.scss */ "./src/app/pages/diets/diets.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], DietsPage);
    return DietsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-diets-diets-module-es5.js.map