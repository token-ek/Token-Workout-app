(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wdetails-wdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/wdetails/wdetails.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/wdetails/wdetails.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n          <app-backbutton color=\"light\"></app-backbutton>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n            <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n              <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\n              </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (workout.workout_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n          <div class=\"text\">\n          <p class=\"name\">{{workout.workout_title}}</p>\n          <p class=\"time\">{{workout.workout_duration}}</p>\n        </div>\n        </ion-row>\n        <ion-row class=\"cols\">\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <p class=\"text\">{{strings.ST16}}</p>\n            <p class=\"value\">{{workout.goal_title}}</p>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n              <p class=\"text\">{{strings.ST17}}</p>\n              <p class=\"value\">{{workout.level_title}}</p>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"days\">\n\n      <div *ngFor=\"let item of days let i = index\">\n            <div class=\"tags\" [routerLink]=\"['/weday', workout.workout_id, i+1]\">\n                <h1>{{strings.ST87}} {{i+1}}</h1>\n                <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\n            </div>\n      </div>\n\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/wdetails/wdetails-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPageRoutingModule", function() { return WdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");




var routes = [
    {
        path: '',
        component: _wdetails_page__WEBPACK_IMPORTED_MODULE_3__["WdetailsPage"]
    }
];
var WdetailsPageRoutingModule = /** @class */ (function () {
    function WdetailsPageRoutingModule() {
    }
    WdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WdetailsPageRoutingModule);
    return WdetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.module.ts ***!
  \***************************************************/
/*! exports provided: WdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPageModule", function() { return WdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wdetails-routing.module */ "./src/app/pages/wdetails/wdetails-routing.module.ts");
/* harmony import */ var _wdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wdetails.page */ "./src/app/pages/wdetails/wdetails.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var WdetailsPageModule = /** @class */ (function () {
    function WdetailsPageModule() {
    }
    WdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _wdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["WdetailsPageRoutingModule"]
            ],
            declarations: [_wdetails_page__WEBPACK_IMPORTED_MODULE_6__["WdetailsPage"]]
        })
    ], WdetailsPageModule);
    return WdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bg {\n  background-position: center;\n  background-size: cover;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 10px 30px; }\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  font-size: 15px;\n  text-transform: capitalize; }\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-top: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold; }\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 0; }\n\n.cols .text {\n  color: #ffffff;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px; }\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: #ffffff;\n  font-size: 14px;\n  opacity: 0.7; }\n\n.days {\n  padding: 16px; }\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px; }\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2RldGFpbHMvQzpcXFVzZXJzXFxJVERcXGlvbmljLXJlcG9cXHNpeHBhY2stMi4wLjBcXGFwcC9zcmNcXGFwcFxccGFnZXNcXHdkZXRhaWxzXFx3ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0NBQXFDO0VBQ3JDLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksK0JBQStCO0VBQy9CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDQSwwQ0FBMEM7RUFDMUMsZUFBZSxFQUFBOztBQUdmO0VBQ0ksY0FBYTtFQUNiLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZGV0YWlscy93ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJne1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItYmcgLnRleHR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cblxuLmhlYWRlci1iZyAubmFtZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhlYWRlci1iZyAudGltZXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb2xze1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xucGFkZGluZzogMTBweCAwO1xufVxuXG4uY29scyAudGV4dHtcbiAgICBjb2xvcjojZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59IFxuXG4uY29scyAudmFsdWV7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6I2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3BhY2l0eTogMC43O1xufSBcblxuLmRheXN7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLnRhZ3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGFncyBoMXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46MDtcbn1cblxuLnRhZ3MgaW9uLWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNHB4O1xuICAgIHRvcDogMTFweDtcbiAgICBmb250LXNpemU6IDIycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/wdetails/wdetails.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/wdetails/wdetails.page.ts ***!
  \*************************************************/
/*! exports provided: WdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WdetailsPage", function() { return WdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/favorite.service */ "./src/app/services/favorite.service.ts");







var WdetailsPage = /** @class */ (function () {
    function WdetailsPage(dataService, router, route, plt, dataFavorite) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.workout = {};
        this.isLoading = false;
        this.days = new Array(7);
        this.icon = 'star-outline';
    }
    WdetailsPage.prototype.ngOnInit = function () {
    };
    WdetailsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isLoading = true;
                this.innerHeight = this.plt.height() / 3 + 'px';
                this.route.params.subscribe(function (data) {
                    _this.id = data.id;
                    _this.getDetails();
                    _this.dataFavorite.existWorkout(_this.id)
                        .then(function (exist) { return _this.icon = (exist) ? 'star' : 'star-outline'; });
                    if (!_this.id) {
                        _this.goBack();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    WdetailsPage.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    WdetailsPage.prototype.getDetails = function () {
        var _this = this;
        this.dataService.getDataWorkoutById(this.id)
            .subscribe(function (resp) {
            _this.workout = resp[0];
            _this.isLoading = false;
        });
    };
    WdetailsPage.prototype.addToFavorites = function () {
        var workout = {
            id: this.workout.workout_id,
            title: this.workout.workout_title,
            image: this.workout.workout_image,
        };
        var exist = this.dataFavorite.saveWorkout(workout);
        this.icon = (exist) ? 'star' : 'star-outline';
    };
    WdetailsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"] }
    ]; };
    WdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wdetails',
            template: __webpack_require__(/*! raw-loader!./wdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/wdetails/wdetails.page.html"),
            styles: [__webpack_require__(/*! ./wdetails.page.scss */ "./src/app/pages/wdetails/wdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _services_favorite_service__WEBPACK_IMPORTED_MODULE_6__["FavoriteService"]])
    ], WdetailsPage);
    return WdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-wdetails-wdetails-module-es5.js.map