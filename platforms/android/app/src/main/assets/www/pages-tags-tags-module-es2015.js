(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tags-tags-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tags/tags.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tags/tags.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST55}}\n      </ion-title>\n            <ion-buttons slot=\"start\">\n              <app-backbutton color=\"dark\"></app-backbutton>\n            </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <div *ngFor=\"let item of tags\" [routerLink]=\"['/tposts', item.tag_id, item.tag_title]\" class=\"tags\">\n    <h1>{{item.tag_title}}</h1>\n    <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tags/tags-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tags/tags-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TagsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageRoutingModule", function() { return TagsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.page */ "./src/app/pages/tags/tags.page.ts");




const routes = [
    {
        path: '',
        component: _tags_page__WEBPACK_IMPORTED_MODULE_3__["TagsPage"]
    }
];
let TagsPageRoutingModule = class TagsPageRoutingModule {
};
TagsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TagsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tags/tags.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tags/tags.module.ts ***!
  \*******************************************/
/*! exports provided: TagsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageModule", function() { return TagsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags-routing.module */ "./src/app/pages/tags/tags-routing.module.ts");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.page */ "./src/app/pages/tags/tags.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let TagsPageModule = class TagsPageModule {
};
TagsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagsPageRoutingModule"]
        ],
        declarations: [_tags_page__WEBPACK_IMPORTED_MODULE_6__["TagsPage"]]
    })
], TagsPageModule);



/***/ }),

/***/ "./src/app/pages/tags/tags.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tags/tags.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 20px;\n  margin-bottom: 16px;\n  position: relative; }\n\n.tags h1 {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0; }\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 20px;\n  font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFncy9DOlxcVXNlcnNcXElURFxcaW9uaWMtcmVwb1xcc2l4cGFjay0yLjAuMFxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcdGFnc1xcdGFncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsK0NBQStDO0VBQy9DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsU0FBUSxFQUFBOztBQUdaO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFncy90YWdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWdze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhZ3MgaDF7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOjA7XG59XG5cbi50YWdzIGlvbi1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTRweDtcbiAgICB0b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tags/tags.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tags/tags.page.ts ***!
  \*****************************************/
/*! exports provided: TagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPage", function() { return TagsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_admob_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admob.service */ "./src/app/services/admob.service.ts");





let TagsPage = class TagsPage {
    constructor(dataService, admob) {
        this.dataService = dataService;
        this.admob = admob;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_3__["strings"];
        this.tags = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.dataService.getDataTags()
            .subscribe(resp => {
            this.tags = resp;
            this.isLoading = false;
        });
        this.admob.BannerAd();
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnDestroy() {
        this.admob.HideBannerAd();
    }
};
TagsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _services_admob_service__WEBPACK_IMPORTED_MODULE_4__["AdmobService"] }
];
TagsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags',
        template: __webpack_require__(/*! raw-loader!./tags.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tags/tags.page.html"),
        styles: [__webpack_require__(/*! ./tags.page.scss */ "./src/app/pages/tags/tags.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _services_admob_service__WEBPACK_IMPORTED_MODULE_4__["AdmobService"]])
], TagsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tags-tags-module-es2015.js.map