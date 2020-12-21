(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calculator-calculator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calculator/calculator.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"darkheader\" mode=\"ios\" no-border>\n    <ion-toolbar mode=\"ios\">\n        <ion-title class=\"ion-text-capitalize\">\n            {{strings.ST105}}\n          </ion-title>\n        <ion-buttons slot=\"start\">\n            <app-backbutton color=\"light\"></app-backbutton>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n          <ion-icon mode=\"md\" name=\"md-information-circle-outline\" [routerLink]=\"'/bmiinfo'\" slot=\"end\">\n          </ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"col1\" [ngStyle]=\"{'background-color': color}\">\n\n        <div class=\"image\">\n          <img [src]=\"icon\">\n        </div>\n\n        <p class=\"name\">{{resultText}}</p>\n\n          <div class=\"circle\">\n              <p class=\"number\">{{resultNumber}}</p>\n              <p class=\"text\">BMI</p>\n          </div>\n\n      </ion-col>\n      <ion-col size=\"12\" class=\"col2\">\n\n        <div class=\"inputs\">\n          \n          <ion-list class=\"line-input\" mode=\"md\"> \n              <ion-item mode=\"md\">\n                <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"3\" [placeholder]=\"strings.ST136\" [(ngModel)]=\"height\" type=\"text\"></ion-input>\n              </ion-item> \n            </ion-list>\n\n            <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">\n                  <ion-input class=\"ion-text-center\" maxlength=\"3\" minlength=\"2\" [placeholder]=\"strings.ST137\" [(ngModel)]=\"weight\" type=\"text\"></ion-input>\n                </ion-item> \n              </ion-list>\n\n              <ion-button mode=\"ios\" (click)=\"MetricCalculate()\" type=\"submit\" color=\"dark\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n                  {{strings.ST138}}\n              </ion-button>\n\n              <p class=\"footertext\">{{strings.ST139}}</p>\n\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/calculator/calculator-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/calculator/calculator-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CalculatorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageRoutingModule", function() { return CalculatorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");




var routes = [
    {
        path: '',
        component: _calculator_page__WEBPACK_IMPORTED_MODULE_3__["CalculatorPage"]
    }
];
var CalculatorPageRoutingModule = /** @class */ (function () {
    function CalculatorPageRoutingModule() {
    }
    CalculatorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CalculatorPageRoutingModule);
    return CalculatorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/calculator/calculator.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.module.ts ***!
  \*******************************************************/
/*! exports provided: CalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPageModule", function() { return CalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/pages/calculator/calculator-routing.module.ts");
/* harmony import */ var _calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator.page */ "./src/app/pages/calculator/calculator.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var CalculatorPageModule = /** @class */ (function () {
    function CalculatorPageModule() {
    }
    CalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _calculator_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalculatorPageRoutingModule"]
            ],
            declarations: [_calculator_page__WEBPACK_IMPORTED_MODULE_6__["CalculatorPage"]]
        })
    ], CalculatorPageModule);
    return CalculatorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/calculator/calculator.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/calculator/calculator.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\n.col1 {\n  height: 55%;\n  background-color: var(--ion-color-primary);\n  position: relative; }\n\n.col2 {\n  height: 45%; }\n\n.image {\n  max-width: 120px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 22%; }\n\n.name {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-transform: uppercase; }\n\n.circle {\n  background-color: var(--ion-color-dark);\n  position: absolute;\n  bottom: -70px;\n  left: 50%;\n  width: 140px;\n  height: 140px;\n  margin-left: -67px;\n  border-radius: 100px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  border: 10px solid #ffffff;\n  z-index: 9; }\n\n.circle p {\n  display: block;\n  color: white;\n  margin: 0; }\n\n.circle .number {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 6px; }\n\n.circle .text {\n  font-weight: bold;\n  font-size: 14px; }\n\n.inputs {\n  display: block;\n  max-width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 70px; }\n\n.line-input {\n  margin-bottom: 0 !important; }\n\n.line-input ion-item {\n    --border-color: transparent!important;\n    --highlight-height: 0;\n    border: 1px solid #cccccc;\n    border-radius: 50px; }\n\n.line-input ion-item.item-has-focus {\n      border: 1px solid var(--ion-color-primary); }\n\n.line-input ion-item ion-label {\n      color: #cccccc !important;\n      font-size: 14px !important; }\n\n.line-input ion-item ion-input {\n      --placeholder-color: #757575 !important; }\n\n.footertext {\n  color: #cccccc !important;\n  font-size: 14px !important;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsY3VsYXRvci9DOlxcVXNlcnNcXElURFxcaW9uaWMtcmVwb1xcc2l4cGFjay0yLjAuMFxcYXBwL3NyY1xcYXBwXFxwYWdlc1xcY2FsY3VsYXRvclxcY2FsY3VsYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTLEVBQUE7O0FBR2I7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLDJCQUEwQixFQUFBOztBQUQ5QjtJQUdRLHFDQUFlO0lBQ2YscUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUIsRUFBQTs7QUFOM0I7TUFTWSwwQ0FBMEMsRUFBQTs7QUFUdEQ7TUFhWSx5QkFBd0I7TUFDeEIsMEJBQXlCLEVBQUE7O0FBZHJDO01Ba0JZLHVDQUFvQixFQUFBOztBQVFoQztFQUNJLHlCQUF3QjtFQUN4QiwwQkFBeUI7RUFDekIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxjdWxhdG9yL2NhbGN1bGF0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tcm93e1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbDF7XG4gICAgaGVpZ2h0OiA1NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbDJ7XG4gICAgaGVpZ2h0OiA0NSU7XG59XG5cbi5pbWFnZXtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAyMiU7XG59XG5cbi5uYW1le1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jaXJjbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC03MHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTY3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmZmZmO1xuICAgIHotaW5kZXg6IDk7XG59XG5cbi5jaXJjbGUgcHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlIC5udW1iZXJ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmNpcmNsZSAudGV4dHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbnB1dHN7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5saW5lLWlucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogI2NjY2NjYyFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5cbi5mb290ZXJ0ZXh0e1xuICAgIGNvbG9yOiAjY2NjY2NjIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/calculator/calculator.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/calculator/calculator.page.ts ***!
  \*****************************************************/
/*! exports provided: CalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorPage", function() { return CalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



var CalculatorPage = /** @class */ (function () {
    function CalculatorPage() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.resultNumber = '00.0';
        this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST131;
        this.icon = './assets/images/normal.png';
        this.color = 'var(--ion-color-primary)';
    }
    CalculatorPage.prototype.ngOnInit = function () {
    };
    CalculatorPage.prototype.MetricCalculate = function () {
        var height = this.height;
        var weight = this.weight;
        if (Number(height) && Number(weight)) {
            var imc = ((weight / height / height) * 10000);
            this.resultNumber = imc.toFixed(2);
            if (imc < 18.5) {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST132;
                this.color = '#22a6b3';
                this.icon = './assets/images/underweight.png';
            }
            else if (imc > 18.5 && imc < 25) {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST133;
                this.color = '#6ab04c';
                this.icon = './assets/images/normal.png';
            }
            else if (imc >= 25 && imc < 30) {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST134;
                this.color = '#f0932b';
                this.icon = './assets/images/overweight.png';
            }
            else {
                this.resultText = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST135;
                this.color = '#eb4d4b';
                this.icon = './assets/images/obesity.png';
            }
        }
    };
    CalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! raw-loader!./calculator.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calculator/calculator.page.html"),
            styles: [__webpack_require__(/*! ./calculator.page.scss */ "./src/app/pages/calculator/calculator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalculatorPage);
    return CalculatorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-calculator-calculator-module-es5.js.map