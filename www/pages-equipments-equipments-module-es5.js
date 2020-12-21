(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipments-equipments-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/equipments/equipments.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n          {{strings.ST38}}\n        </ion-title>\n              <ion-buttons slot=\"start\">\n                <app-backbutton color=\"dark\"></app-backbutton>\n              </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding-top\">\n  \n    <app-loading *ngIf=\"isLoading\"></app-loading>\n\n\n    <ion-list lines=\"none\" class=\"ion-padding-top\">\n\n    <ion-item *ngFor=\"let item of equipments\" [routerLink]=\"['/eequipments', item.equipment_id, item.equipment_title]\" style=\"margin-bottom: 30px;\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"item.equipment_image | image\">\n        </ion-avatar>\n        <ion-label>{{item.equipment_title}}</ion-label>\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/equipments/equipments-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/equipments/equipments-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EquipmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageRoutingModule", function() { return EquipmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");




var routes = [
    {
        path: '',
        component: _equipments_page__WEBPACK_IMPORTED_MODULE_3__["EquipmentsPage"]
    }
];
var EquipmentsPageRoutingModule = /** @class */ (function () {
    function EquipmentsPageRoutingModule() {
    }
    EquipmentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EquipmentsPageRoutingModule);
    return EquipmentsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/equipments/equipments.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.module.ts ***!
  \*******************************************************/
/*! exports provided: EquipmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPageModule", function() { return EquipmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./equipments-routing.module */ "./src/app/pages/equipments/equipments-routing.module.ts");
/* harmony import */ var _equipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipments.page */ "./src/app/pages/equipments/equipments.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var EquipmentsPageModule = /** @class */ (function () {
    function EquipmentsPageModule() {
    }
    EquipmentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsPageRoutingModule"]
            ],
            declarations: [_equipments_page__WEBPACK_IMPORTED_MODULE_6__["EquipmentsPage"]]
        })
    ], EquipmentsPageModule);
    return EquipmentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 50px !important;\n  max-height: 50px !important; }\n\nion-avatar img {\n  border-radius: 0; }\n\nion-item ion-label {\n  padding-left: 20px;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 14px; }\n\nion-item {\n  --background-focused:#fff !important;\n  --background-activated:#fff !important;\n  --detail-icon-color: var(--ion-color-primary);\n  --detail-icon-opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXF1aXBtZW50cy9DOlxcVXNlcnNcXElURFxcaW9uaWMtcmVwb1xcc2l4cGFjay0yLjAuMFxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcZXF1aXBtZW50c1xcZXF1aXBtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBcUI7RUFDckIsdUJBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksb0NBQXFCO0VBQ3JCLHNDQUF1QjtFQUN2Qiw2Q0FBb0I7RUFDcEIsd0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcXVpcG1lbnRzL2VxdWlwbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciAgeyAgICAgXG4gICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OyAgXG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50OyAgXG4gICAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbmlvbi1hdmF0YXIgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVse1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC0tZGV0YWlsLWljb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWRldGFpbC1pY29uLW9wYWNpdHk6IDE7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/equipments/equipments.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/equipments/equipments.page.ts ***!
  \*****************************************************/
/*! exports provided: EquipmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsPage", function() { return EquipmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");




var EquipmentsPage = /** @class */ (function () {
    function EquipmentsPage(DataService) {
        this.DataService = DataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.equipments = [];
        this.isLoading = false;
    }
    EquipmentsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.DataService.getDataEquipments()
            .subscribe(function (resp) {
            _this.equipments = resp;
            _this.isLoading = false;
        });
    };
    EquipmentsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    EquipmentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipments',
            template: __webpack_require__(/*! raw-loader!./equipments.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/equipments/equipments.page.html"),
            styles: [__webpack_require__(/*! ./equipments.page.scss */ "./src/app/pages/equipments/equipments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], EquipmentsPage);
    return EquipmentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-equipments-equipments-module-es5.js.map