(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ddetails-ddetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ddetails/ddetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ddetails/ddetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST129}}\n          </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"light\"></app-backbutton>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n            <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-no-padding\">\n\n      <app-loading *ngIf=\"isLoading\"></app-loading>\n\n      <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (diet.diet_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n            <div class=\"text\">\n            <p class=\"time\">{{diet.category_title}}</p>\n            <p class=\"name\">{{diet.diet_title}}</p>\n          </div>\n      </ion-row>\n      </ion-grid>\n\n      <ion-toolbar no-border-top class=\"ion-no-padding\" color=\"primary\">\n      <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" mode=\"md\">\n          <ion-segment-button value=\"0\" mode=\"md\">\n            <ion-label>{{strings.ST46}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"1\" mode=\"md\">\n            <ion-label>{{strings.ST47}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\" mode=\"md\">\n              <ion-label>{{strings.ST48}}</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n      </ion-toolbar>  \n\n      <ion-slides [options]=\"slideOpts\" #slides (ionSlideDidChange)=\"slideChanged()\" scrollbar=\"false\">  \n          <ion-slide>\n              <ion-grid fixed>\n                  <ion-row>\n                      <ion-col size=\"3\" class=\"col-icon\">\n                      <img src=\"./assets/images/caloriesf.png\">\n                      <p class=\"name\">{{strings.ST45}}</p>\n                      <p class=\"value\">{{diet.diet_calories}}</p>\n                      </ion-col>\n\n                      <ion-col size=\"3\" class=\"col-icon\">\n                          <img src=\"./assets/images/protein.png\">\n                          <p class=\"name\">{{strings.ST50}}</p>\n                          <p class=\"value\">{{diet.diet_protein}}</p>\n                          </ion-col>\n                  \n                          <ion-col size=\"3\" class=\"col-icon\">\n                              <img src=\"./assets/images/fat.png\">\n                              <p class=\"name\">{{strings.ST51}}</p>\n                              <p class=\"value\">{{diet.diet_fat}}</p>\n                              </ion-col>\n\n                              <ion-col size=\"3\" class=\"col-icon\">\n                                  <img src=\"./assets/images/carbs.png\">\n                                  <p class=\"name\">{{strings.ST52}}</p>\n                                  <p class=\"value\">{{diet.diet_carbs}}</p>\n                                  </ion-col>\n\n                  </ion-row>\n                  <ion-row>\n                      <app-html [htmlcontent]=\"diet.diet_description\" class=\"ion-text-left\"></app-html>\n                  </ion-row>\n                </ion-grid>\n\n          </ion-slide>  \n          <ion-slide> <app-html [htmlcontent]=\"diet.diet_ingredients\" class=\"ion-text-left\"></app-html> </ion-slide>  \n          <ion-slide> <app-html [htmlcontent]=\"diet.diet_directions\" class=\"ion-text-left\"></app-html> </ion-slide>  \n        </ion-slides>  \n\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ddetails/ddetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPageRoutingModule", function() { return DdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");




var routes = [
    {
        path: '',
        component: _ddetails_page__WEBPACK_IMPORTED_MODULE_3__["DdetailsPage"]
    }
];
var DdetailsPageRoutingModule = /** @class */ (function () {
    function DdetailsPageRoutingModule() {
    }
    DdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DdetailsPageRoutingModule);
    return DdetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.module.ts ***!
  \***************************************************/
/*! exports provided: DdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPageModule", function() { return DdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ddetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ddetails-routing.module */ "./src/app/pages/ddetails/ddetails-routing.module.ts");
/* harmony import */ var _ddetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ddetails.page */ "./src/app/pages/ddetails/ddetails.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var DdetailsPageModule = /** @class */ (function () {
    function DdetailsPageModule() {
    }
    DdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _ddetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["DdetailsPageRoutingModule"]
            ],
            declarations: [_ddetails_page__WEBPACK_IMPORTED_MODULE_6__["DdetailsPage"]]
        })
    ], DdetailsPageModule);
    return DdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px; }\n\n.header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0.4)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0.75) 100%);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-weight: bold;\n  font-size: 17px;\n  text-transform: capitalize; }\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\nion-segment-button ion-label {\n  font-size: 14px !important;\n  font-weight: bold !important;\n  letter-spacing: 0 !important; }\n\n.col-icon {\n  text-align: center; }\n\n.col-icon img {\n  width: 38px;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px; }\n\n.col-icon .name {\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 7px; }\n\n.col-icon .value {\n  margin: 0;\n  font-size: 14px; }\n\nion-slides {\n  min-height: 60%;\n  padding-top: 22px;\n  width: 100%; }\n\n.slide {\n  min-height: 60%;\n  width: 100%; }\n\nion-slide {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n  padding: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGRldGFpbHMvQzpcXFVzZXJzXFxJVERcXGlvbmljLXJlcG9cXHNpeHBhY2stMi4wLjBcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGRkZXRhaWxzXFxkZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBb0I7RUFDcEIsNEJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBR2xCLHlIQUFrRjtFQUFsRix3RkFBa0Y7RUFDbEYsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0EsU0FBUztFQUNULGVBQWUsRUFBQTs7QUFJYjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUVYO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFbkI7RUFDSSxtQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGtDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGRldGFpbHMvZGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46cm9vdCB7ICBcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4OyAgXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDsgIFxuICB9ICBcbiAgXG4gIC5oZWFkZXItYmd7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1iZyAudGV4dHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwLjQpIDEwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICByZ2JhKDAsMCwwLDAuNCkgMTAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIHJnYmEoMCwwLDAsMC40KSAxMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuLmhlYWRlci1iZyAubmFtZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5oZWFkZXItYmcgLnRpbWV7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbC1pY29ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbC1pY29uIGltZ3tcbiAgICB3aWR0aDogMzhweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5jb2wtaWNvbiAubmFtZXtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbn1cblxuLmNvbC1pY29uIC52YWx1ZXtcbm1hcmdpbjogMDtcbmZvbnQtc2l6ZTogMTRweDtcbiAgICBcbn1cblxuICBpb24tc2xpZGVze1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbiAgICBwYWRkaW5nLXRvcDogMjJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnNsaWRle1xuICAgICAgICBtaW4taGVpZ2h0OiA2MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xufSBcbmlvbi1zbGlkZXtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/ddetails/ddetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ddetails/ddetails.page.ts ***!
  \*************************************************/
/*! exports provided: DdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdetailsPage", function() { return DdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");








var DdetailsPage = /** @class */ (function () {
    function DdetailsPage(dataService, router, route, plt, dataFavorite, admob) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.admob = admob;
        this.segment = 0;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.diet = {};
        this.isLoading = false;
        this.icon = 'star-outline';
        this.slideOpts = {
            slidesPerView: 1,
            freeMode: false
        };
    }
    DdetailsPage.prototype.ngOnInit = function () {
        this.admob.BannerAd();
    };
    // tslint:disable-next-line: use-lifecycle-interface
    DdetailsPage.prototype.ngOnDestroy = function () {
        this.admob.HideBannerAd();
    };
    DdetailsPage.prototype.segmentChanged = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slider.slideTo(this.segment)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DdetailsPage.prototype.slideChanged = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.slider.getActiveIndex()];
                    case 1:
                        _a.segment = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DdetailsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.innerHeight = this.plt.height() / 3 + 'px';
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.getDetails();
                    _this.dataFavorite.existDiet(_this.id)
                        .then(function (exist) { return _this.icon = (exist) ? 'star' : 'star-outline'; });
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    DdetailsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    DdetailsPage.prototype.getDetails = function () {
        var _this = this;
        this.dataService.getDataDietById(this.id)
            .subscribe(function (resp) {
            _this.diet = resp[0];
            _this.isLoading = false;
        });
    };
    DdetailsPage.prototype.addToFavorites = function () {
        var diet = {
            id: this.diet.diet_id,
            title: this.diet.diet_title,
            image: this.diet.diet_image,
        };
        var exist = this.dataFavorite.saveDiet(diet);
        this.icon = (exist) ? 'star' : 'star-outline';
    };
    DdetailsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] },
        { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_7__["AdmobService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], DdetailsPage.prototype, "slider", void 0);
    DdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ddetails',
            template: __webpack_require__(/*! raw-loader!./ddetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ddetails/ddetails.page.html"),
            styles: [__webpack_require__(/*! ./ddetails.page.scss */ "./src/app/pages/ddetails/ddetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"],
            _services_admob_service__WEBPACK_IMPORTED_MODULE_7__["AdmobService"]])
    ], DdetailsPage);
    return DdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ddetails-ddetails-module-es5.js.map