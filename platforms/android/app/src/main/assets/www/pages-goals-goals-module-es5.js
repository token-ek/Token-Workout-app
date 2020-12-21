(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-goals-goals-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/goals/goals.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/goals/goals.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST10}}\n      </ion-title>\n            <ion-buttons slot=\"start\">\n              <app-backbutton color=\"dark\"></app-backbutton>\n            </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col *ngFor=\"let item of goals\" [routerLink]=\"['/wgoals', item.goal_id, item.goal_title]\" size=\"12\" [ngStyle]=\"{'height': height}\">\n        <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.goal_image | image) + ')'\">\n          <div class=\"overlay\">\n          <div class=\"texts\">\n          <h1>{{item.goal_title}}</h1>\n          </div>\n        </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/goals/goals-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/goals/goals-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GoalsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsPageRoutingModule", function() { return GoalsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _goals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals.page */ "./src/app/pages/goals/goals.page.ts");




var routes = [
    {
        path: '',
        component: _goals_page__WEBPACK_IMPORTED_MODULE_3__["GoalsPage"]
    }
];
var GoalsPageRoutingModule = /** @class */ (function () {
    function GoalsPageRoutingModule() {
    }
    GoalsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GoalsPageRoutingModule);
    return GoalsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/goals/goals.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/goals/goals.module.ts ***!
  \*********************************************/
/*! exports provided: GoalsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsPageModule", function() { return GoalsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _goals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goals-routing.module */ "./src/app/pages/goals/goals-routing.module.ts");
/* harmony import */ var _goals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goals.page */ "./src/app/pages/goals/goals.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









var GoalsPageModule = /** @class */ (function () {
    function GoalsPageModule() {
    }
    GoalsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                _goals_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoalsPageRoutingModule"]
            ],
            declarations: [_goals_page__WEBPACK_IMPORTED_MODULE_6__["GoalsPage"]]
        })
    ], GoalsPageModule);
    return GoalsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/goals/goals.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/goals/goals.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\nion-row {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts:before {\n  content: \"\";\n  background: var(--ion-color-primary);\n  height: 3px;\n  display: block;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: 0;\n  margin-bottom: 10px; }\n\n.cardcategory .texts {\n  padding-bottom: 15px;\n  width: 100%;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  position: relative; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29hbHMvQzpcXFVzZXJzXFxJVERcXGlvbmljLXJlcG9cXHNpeHBhY2stMi4wLjBcXGFwcC9zcmNcXGFwcFxccGFnZXNcXGdvYWxzXFxnb2Fscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBTztVQUFQLE9BQU8sRUFBQTs7QUFHWDtFQUNJLG1CQUFPO1VBQVAsT0FBTyxFQUFBOztBQUdYO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSw4QkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osU0FBUztFQUNULGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ29hbHMvZ29hbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XG4gICAgZmxleDogMTtcbn1cblxuaW9uLXJvd3tcbiAgICBmbGV4OiAxO1xufVxuXG4uY2FyZGNhdGVnb3J5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uY2FyZGNhdGVnb3J5IC5vdmVybGF5e1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jYXJkY2F0ZWdvcnkgLnRleHRzOmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZGNhdGVnb3J5IC50ZXh0c3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/goals/goals.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/goals/goals.page.ts ***!
  \*******************************************/
/*! exports provided: GoalsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsPage", function() { return GoalsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var GoalsPage = /** @class */ (function () {
    function GoalsPage(router, DataService, plt) {
        this.router = router;
        this.DataService = DataService;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.goals = [];
        this.isLoading = false;
    }
    GoalsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.height = this.plt.height() / 4.4 + 'px';
        this.DataService.getDataGoals()
            .subscribe(function (resp) {
            _this.goals = resp;
            if (_this.goals.length === 0) {
                _this.height = '167.273px';
            }
            else if (_this.goals.length === 3 || _this.goals.length === 2) {
                _this.height = 'inherit !important';
            }
            else if (_this.goals.length >= 4) {
                _this.height = _this.plt.height() / 4.4 + 'px';
            }
            _this.isLoading = false;
        });
    };
    GoalsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    GoalsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goals',
            template: __webpack_require__(/*! raw-loader!./goals.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/goals/goals.page.html"),
            styles: [__webpack_require__(/*! ./goals.page.scss */ "./src/app/pages/goals/goals.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], GoalsPage);
    return GoalsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-goals-goals-module-es5.js.map