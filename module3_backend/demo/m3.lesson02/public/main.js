(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./keys/map.api.ts":
/*!*************************!*\
  !*** ./keys/map.api.ts ***!
  \*************************/
/*! exports provided: GOOGLE_MAP_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_MAP_API", function() { return GOOGLE_MAP_API; });
var GOOGLE_MAP_API = 'AIzaSyBHqxqk5uWw6ZAszC_4lc-GXKXLGIlOkxY';


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_new_agent_new_agent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/new-agent/new-agent.component */ "./src/app/components/new-agent/new-agent.component.ts");
/* harmony import */ var _components_personnel_personnel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/personnel/personnel.component */ "./src/app/components/personnel/personnel.component.ts");
/* harmony import */ var _components_theme_theme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/theme/theme.component */ "./src/app/components/theme/theme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/personnel', pathMatch: 'full' },
    { path: 'personnel', component: _components_personnel_personnel_component__WEBPACK_IMPORTED_MODULE_3__["PersonnelComponent"] },
    { path: 'theme', component: _components_theme_theme_component__WEBPACK_IMPORTED_MODULE_4__["ThemeComponent"] },
    { path: 'new', component: _components_new_agent_new_agent_component__WEBPACK_IMPORTED_MODULE_2__["NewAgentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav>\r\n  <mat-progress-bar [class.visible]=\"loading\"\r\n    mode=\"indeterminate\">\r\n  </mat-progress-bar>\r\n  <button mat-button routerLink=\"/personnel\" routerLinkActive=\"selected\">\r\n    Personnel\r\n  </button>\r\n  <button mat-button routerLink=\"/new\" routerLinkActive=\"selected\">\r\n    New Agent\r\n  </button>\r\n  <button mat-button routerLink=\"/theme\" routerLinkActive=\"selected\">\r\n    Theme\r\n  </button>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n<h2>TODO</h2>\r\n<ol>\r\n  <li>Add <a target=\"_blank\" href=\"https://gist.github.com/adrianeguez/c16925db049f3bef661a4e1378fcb2a6\">Lodash + typing</a></li>\r\n  <li>Use Lodash to calculate top agent in a specific field</li>\r\n  <li>Add <a target=\"_blank\" href=\"https://www.primefaces.org/primeng/#/\">PrimeNG</a></li>\r\n  <li>Use PrimeNG accordion to display agents</li>\r\n  <li>Add <a target=\"_blank\" href=\"https://angular-maps.com/\">google map component</a></li>\r\n  <li>Add angular-material and display style kit in \"theme\" component</li>\r\n</ol>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: black; }\n  :host .selected {\n    color: #2a79ff; }\n  :host mat-progress-bar {\n    visibility: hidden; }\n  :host mat-progress-bar.visible {\n      visibility: visible; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        var _this = this;
        this.store = store;
        this.loading = false;
        this.store.select('app').subscribe(function (appState) {
            _this.loading = appState.loaderOn;
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_personnel_personnel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/personnel/personnel.component */ "./src/app/components/personnel/personnel.component.ts");
/* harmony import */ var _components_theme_theme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/theme/theme.component */ "./src/app/components/theme/theme.component.ts");
/* harmony import */ var _components_new_agent_new_agent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-agent/new-agent.component */ "./src/app/components/new-agent/new-agent.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state/state.module */ "./src/app/state/state.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_personnel_personnel_component__WEBPACK_IMPORTED_MODULE_4__["PersonnelComponent"],
                _components_theme_theme_component__WEBPACK_IMPORTED_MODULE_5__["ThemeComponent"],
                _components_new_agent_new_agent_component__WEBPACK_IMPORTED_MODULE_6__["NewAgentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].mapApiKey
                }),
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _state_state_module__WEBPACK_IMPORTED_MODULE_13__["StateModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/new-agent/new-agent.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-agent/new-agent.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>New Agent</h1>\r\n  <form (ngSubmit)=\"submitAgent()\" #f=\"ngForm\">\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Agent name\" type=\"text\" required\r\n             [(ngModel)]=\"agent.name\" name=\"name\" #name=\"ngModel\">\r\n      <mat-error *ngIf=\"(name.valid || name.pristine)\">\r\n        Name is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Agent code\" type=\"text\" required\r\n             [(ngModel)]=\"agent.code\" name=\"code\" #code=\"ngModel\">\r\n      <mat-error [hidden]=\"code.valid || code.pristine\">\r\n        Code is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Agent age\" type=\"number\" min=\"0\" max=\"120\" required\r\n             [(ngModel)]=\"agent.age\" name=\"age\" #age=\"ngModel\">\r\n      <mat-error [hidden]=\"age.valid || age.pristine\">\r\n        Age is required\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <div class=\"form-group skills\">\r\n      <p>Skills</p>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Martial Art\" min=\"0\" max=\"10\"\r\n               [(ngModel)]=\"agent.skills.martialArt\" name=\"martialArt\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Marksmanship\" class=\"form-control\" min=\"0\" max=\"10\"\r\n               [(ngModel)]=\"agent.skills.marksmanship\" name=\"marksmanship\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Explosives\" min=\"0\" max=\"10\"\r\n               [(ngModel)]=\"agent.skills.explosives\" name=\"explosives\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Medical\" min=\"0\" max=\"10\"\r\n               [(ngModel)]=\"agent.skills.medical\" name=\"medical\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Strength\" min=\"0\" max=\"10\"\r\n               [(ngModel)]=\"agent.skills.strength\" name=\"strength\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n      <input matInput type=\"number\" placeholder=\"Stealth\" min=\"0\" max=\"10\"\r\n             [(ngModel)]=\"agent.skills.stealth\" name=\"stealth\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <button mat-raised-button type=\"submit\" class=\"submit\" [disabled]=\"!f.form.valid\">Submit</button>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/new-agent/new-agent.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/new-agent/new-agent.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group.skills {\n  padding: 5px; }\n  .form-group.skills input {\n    width: 50px;\n    margin: auto 10px; }\n  .form-group.skills mat-form-field {\n    width: 60px;\n    padding: 5px; }\n  .full-width {\n  display: block;\n  width: 200px;\n  padding: 5px; }\n"

/***/ }),

/***/ "./src/app/components/new-agent/new-agent.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-agent/new-agent.component.ts ***!
  \*************************************************************/
/*! exports provided: NewAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAgentComponent", function() { return NewAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_agents_agent_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/agents/agent.model */ "./src/app/state/agents/agent.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_agents_agent_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/agents/agent.actions */ "./src/app/state/agents/agent.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAgentComponent = /** @class */ (function () {
    function NewAgentComponent(store) {
        this.store = store;
        this.agent = new _state_agents_agent_model__WEBPACK_IMPORTED_MODULE_1__["Agent"]();
    }
    NewAgentComponent.prototype.ngOnInit = function () {
    };
    NewAgentComponent.prototype.submitAgent = function () {
        this.store.dispatch(new _state_agents_agent_actions__WEBPACK_IMPORTED_MODULE_3__["AgentAction"].AddAgent(this.agent));
    };
    NewAgentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-agent',
            template: __webpack_require__(/*! ./new-agent.component.html */ "./src/app/components/new-agent/new-agent.component.html"),
            styles: [__webpack_require__(/*! ./new-agent.component.scss */ "./src/app/components/new-agent/new-agent.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NewAgentComponent);
    return NewAgentComponent;
}());



/***/ }),

/***/ "./src/app/components/personnel/personnel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/personnel/personnel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>Personnel</h1>\r\n  <div>\r\n    show top agent by:\r\n    <mat-form-field>\r\n      <mat-select [(ngModel)]=\"filter\" placeholder=\"Choose a skill\" (selectionChange)=\"filterBySkill($event)\">\r\n        <mat-option value=\"none\">-</mat-option>\r\n        <mat-option value=\"explosives\">Explosives</mat-option>\r\n        <mat-option value=\"marksmanship\">Marksmanship</mat-option>\r\n        <mat-option value=\"martialArt\">Martial Art</mat-option>\r\n        <mat-option value=\"stealth\">Stealth</mat-option>\r\n        <mat-option value=\"strength\">Strength</mat-option>\r\n        <mat-option value=\"medical\">Medical</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n\r\n    <p-accordion>\r\n      <p-accordionTab *ngFor=\"let agent of agents\">\r\n        <p-header>\r\n          <button mat-button>{{agent.name}}</button>\r\n        </p-header>\r\n        <mat-card>\r\n          <mat-card-header>\r\n            <mat-card-title>Code: {{agent.code}}</mat-card-title>\r\n            <mat-card-subtitle>Name: {{agent.name}}</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <div class=\"agent-info\">\r\n              <div>\r\n                <label>Age:</label><span>{{agent.age}}</span>\r\n              </div>\r\n              <label>Specialties:</label>\r\n              <ul>\r\n                <li *ngIf=\"agent.skills.explosives > 5\">Explosives ({{agent.skills.explosives}})</li>\r\n                <li *ngIf=\"agent.skills.marksmanship > 5\">Marksmanship ({{agent.skills.marksmanship}})</li>\r\n                <li *ngIf=\"agent.skills.martialArt > 5\">Martial Art ({{agent.skills.martialArt}})</li>\r\n                <li *ngIf=\"agent.skills.stealth > 5\">Stealth ({{agent.skills.stealth}})</li>\r\n                <li *ngIf=\"agent.skills.strength > 5\">Strength ({{agent.skills.strength}})</li>\r\n                <li *ngIf=\"agent.skills.medical > 5\">Medical ({{agent.skills.medical}})</li>\r\n              </ul>\r\n            </div>\r\n            <agm-map [latitude]=\"agent.location.lat\" [longitude]=\"agent.location.lon\"></agm-map>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/personnel/personnel.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/personnel/personnel.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-content {\n  display: flex;\n  height: 250px; }\n  mat-card-content .agent-info {\n    padding: 10px;\n    margin-left: 4px;\n    height: 100%;\n    width: 200px; }\n  mat-card-content agm-map {\n    height: 100%;\n    width: 300px; }\n"

/***/ }),

/***/ "./src/app/components/personnel/personnel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/personnel/personnel.component.ts ***!
  \*************************************************************/
/*! exports provided: PersonnelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnelComponent", function() { return PersonnelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_personnel_personnel_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/personnel/personnel.actions */ "./src/app/state/personnel/personnel.actions.ts");
/* harmony import */ var _state_app_app_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/app/app.actions */ "./src/app/state/app/app.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonnelComponent = /** @class */ (function () {
    function PersonnelComponent(store) {
        this.store = store;
    }
    PersonnelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('agents').subscribe(function (agentsCollection) {
            _this.agents = agentsCollection;
            _this.allAgents = agentsCollection;
        });
        this.store.select('personnel').subscribe(function (personnelState) {
            _this.filter = personnelState.filter;
            if (_this.filter === 'none') {
                _this.agents = _this.allAgents;
            }
            else {
                var topAgent = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["maxBy"])(_this.allAgents, function (agent) { return agent.skills[_this.filter]; });
                _this.agents = [topAgent];
            }
        });
    };
    PersonnelComponent.prototype.filterBySkill = function (event) {
        var _this = this;
        this.store.dispatch(new _state_app_app_actions__WEBPACK_IMPORTED_MODULE_4__["AppAction"].ToggleLoader(true));
        // simulate work
        setTimeout(function () {
            _this.store.dispatch(new _state_personnel_personnel_actions__WEBPACK_IMPORTED_MODULE_3__["PersonnelAction"].SetFilter(event.value));
        }, 1000);
    };
    PersonnelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personnel',
            template: __webpack_require__(/*! ./personnel.component.html */ "./src/app/components/personnel/personnel.component.html"),
            styles: [__webpack_require__(/*! ./personnel.component.scss */ "./src/app/components/personnel/personnel.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PersonnelComponent);
    return PersonnelComponent;
}());



/***/ }),

/***/ "./src/app/components/theme/theme.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/theme/theme.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>\r\n    theme\r\n  </p>\r\n  <p>\r\n    buttons\r\n    <button mat-button>Click me!</button>\r\n    <button mat-raised-button>Click me!</button>\r\n    <button mat-icon-button>Click</button>\r\n    <button mat-fab>Click</button>\r\n  </p>\r\n  <p>\r\n    Card\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"example-header-image\"></div>\r\n          <mat-card-title>Shiba Inu</mat-card-title>\r\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n        <mat-card-content>\r\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n            bred for hunting.\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-button>LIKE</button>\r\n          <button mat-button>SHARE</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/theme/theme.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/theme/theme.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/components/theme/theme.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/theme/theme.component.ts ***!
  \*****************************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThemeComponent = /** @class */ (function () {
    function ThemeComponent() {
    }
    ThemeComponent.prototype.ngOnInit = function () {
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-theme',
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/components/theme/theme.component.html"),
            styles: [__webpack_require__(/*! ./theme.component.scss */ "./src/app/components/theme/theme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/mock/agents.mock-data.ts":
/*!******************************************!*\
  !*** ./src/app/mock/agents.mock-data.ts ***!
  \******************************************/
/*! exports provided: agents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agents", function() { return agents; });
var agents = [
    {
        code: '006',
        age: 30,
        name: 'Shmerling Archer',
        skills: { martialArt: 10, marksmanship: 9, explosives: 3, medical: 5, strength: 7, stealth: 2 },
        location: { lat: 40.741895, lon: -73.989308 }
    },
    {
        code: '007',
        age: 35,
        name: 'James Bomb',
        skills: { martialArt: 10, marksmanship: 10, explosives: 8, medical: 3, strength: 8, stealth: 7 },
        location: { lat: 46.92107354423075, lon: -113.53239194680793 }
    },
    {
        code: '009',
        age: 45,
        name: 'Agent K',
        skills: { martialArt: 6, marksmanship: 6, explosives: 10, medical: 5, strength: 5, stealth: 4 },
        location: { lat: 53.342337680966416, lon: -6.266852717645634 }
    },
    {
        code: '005',
        age: 32,
        name: 'Agent J',
        skills: { martialArt: 8, marksmanship: 3, explosives: 5, medical: 3, strength: 8, stealth: 8 },
        location: { lat: 53.342337680966416, lon: -6.266852717645634 }
    },
    {
        code: '004',
        age: 29,
        name: 'DR Q',
        skills: { martialArt: 7, marksmanship: 3, explosives: 3, medical: 10, strength: 8, stealth: 4 },
        location: { lat: 39.92856219208878, lon: -4.403369938616606 }
    }
];


/***/ }),

/***/ "./src/app/state/agents/agent.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/state/agents/agent.actions.ts ***!
  \***********************************************/
/*! exports provided: AgentActionTypes, AgentAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentActionTypes", function() { return AgentActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentAction", function() { return AgentAction; });
var AgentActionTypes;
(function (AgentActionTypes) {
    AgentActionTypes["ADD_AGENT"] = "[Agent] Add Agent";
    AgentActionTypes["REMOVE_AGENT"] = "[Agent] remove Agent";
})(AgentActionTypes || (AgentActionTypes = {}));
var AddAgent = /** @class */ (function () {
    function AddAgent(payload) {
        this.payload = payload;
        this.type = AgentActionTypes.ADD_AGENT;
    }
    return AddAgent;
}());
var RemoveAgent = /** @class */ (function () {
    function RemoveAgent(payload) {
        this.payload = payload;
        this.type = AgentActionTypes.REMOVE_AGENT;
    }
    return RemoveAgent;
}());
var AgentAction = {
    AddAgent: AddAgent,
    RemoveAgent: RemoveAgent
};


/***/ }),

/***/ "./src/app/state/agents/agent.model.ts":
/*!*********************************************!*\
  !*** ./src/app/state/agents/agent.model.ts ***!
  \*********************************************/
/*! exports provided: Agent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agent", function() { return Agent; });
var Agent = /** @class */ (function () {
    function Agent() {
        this.skills = {
            martialArt: 0,
            marksmanship: 0,
            explosives: 0,
            medical: 0,
            strength: 0,
            stealth: 0
        };
        this.location = { lat: 32.0852999, lon: 34.78176759999997 };
    }
    return Agent;
}());



/***/ }),

/***/ "./src/app/state/agents/agent.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/state/agents/agent.reducer.ts ***!
  \***********************************************/
/*! exports provided: agentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentReducer", function() { return agentReducer; });
/* harmony import */ var _agent_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agent.actions */ "./src/app/state/agents/agent.actions.ts");
/* harmony import */ var _mock_agents_mock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mock/agents.mock-data */ "./src/app/mock/agents.mock-data.ts");


var initUserState = _mock_agents_mock_data__WEBPACK_IMPORTED_MODULE_1__["agents"];
function agentReducer(state, action) {
    if (state === void 0) { state = initUserState; }
    switch (action.type) {
        case _agent_actions__WEBPACK_IMPORTED_MODULE_0__["AgentActionTypes"].ADD_AGENT:
            return state.concat(action.payload);
        case _agent_actions__WEBPACK_IMPORTED_MODULE_0__["AgentActionTypes"].REMOVE_AGENT:
            return state.filter(function (agent) { return agent.code !== action.payload.code; });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/app/app.actions.ts":
/*!******************************************!*\
  !*** ./src/app/state/app/app.actions.ts ***!
  \******************************************/
/*! exports provided: AppActionTypes, AppAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppActionTypes", function() { return AppActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAction", function() { return AppAction; });
var AppActionTypes;
(function (AppActionTypes) {
    AppActionTypes["TOGGLE_LOADER"] = "[App] Toggle Loader";
})(AppActionTypes || (AppActionTypes = {}));
var ToggleLoader = /** @class */ (function () {
    function ToggleLoader(payload) {
        this.payload = payload;
        this.type = AppActionTypes.TOGGLE_LOADER;
    }
    return ToggleLoader;
}());
var AppAction = {
    ToggleLoader: ToggleLoader
};


/***/ }),

/***/ "./src/app/state/app/app.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/state/app/app.reducer.ts ***!
  \******************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.actions */ "./src/app/state/app/app.actions.ts");

var initAppState = {
    loaderOn: false,
};
function appReducer(state, action) {
    if (state === void 0) { state = initAppState; }
    switch (action.type) {
        case _app_actions__WEBPACK_IMPORTED_MODULE_0__["AppActionTypes"].TOGGLE_LOADER:
            return Object.assign({}, state, {
                loaderOn: action.payload
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/personnel/personnel.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/state/personnel/personnel.actions.ts ***!
  \******************************************************/
/*! exports provided: PersonnelActionTypes, PersonnelAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnelActionTypes", function() { return PersonnelActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnelAction", function() { return PersonnelAction; });
var PersonnelActionTypes;
(function (PersonnelActionTypes) {
    PersonnelActionTypes["SET_FILTER"] = "[Personnel] Set Filter";
})(PersonnelActionTypes || (PersonnelActionTypes = {}));
var SetFilter = /** @class */ (function () {
    function SetFilter(payload) {
        this.payload = payload;
        this.type = PersonnelActionTypes.SET_FILTER;
    }
    return SetFilter;
}());
var PersonnelAction = {
    SetFilter: SetFilter
};


/***/ }),

/***/ "./src/app/state/personnel/personnel.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/state/personnel/personnel.effects.ts ***!
  \******************************************************/
/*! exports provided: PersonnelEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnelEffects", function() { return PersonnelEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _personnel_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personnel.actions */ "./src/app/state/personnel/personnel.actions.ts");
/* harmony import */ var _app_app_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.actions */ "./src/app/state/app/app.actions.ts");
/* harmony import */ var rxjs_compat_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs-compat/add/operator/mergeMap */ "./node_modules/rxjs-compat/add/operator/mergeMap.js");
/* harmony import */ var rxjs_compat_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonnelEffects = /** @class */ (function () {
    function PersonnelEffects(actions) {
        this.actions = actions;
        this.setFilterDone = this.actions
            .ofType(_personnel_actions__WEBPACK_IMPORTED_MODULE_2__["PersonnelActionTypes"].SET_FILTER)
            .mergeMap(function () { return [
            new _app_app_actions__WEBPACK_IMPORTED_MODULE_3__["AppAction"].ToggleLoader(false)
        ]; });
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PersonnelEffects.prototype, "setFilterDone", void 0);
    PersonnelEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], PersonnelEffects);
    return PersonnelEffects;
}());



/***/ }),

/***/ "./src/app/state/personnel/personnel.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/state/personnel/personnel.reducer.ts ***!
  \******************************************************/
/*! exports provided: personnelReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personnelReducer", function() { return personnelReducer; });
/* harmony import */ var _personnel_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personnel.actions */ "./src/app/state/personnel/personnel.actions.ts");

var initPersonnelState = {
    filter: 'none'
};
function personnelReducer(state, action) {
    if (state === void 0) { state = initPersonnelState; }
    switch (action.type) {
        case _personnel_actions__WEBPACK_IMPORTED_MODULE_0__["PersonnelActionTypes"].SET_FILTER:
            return Object.assign({}, state, {
                filter: action.payload
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/state.module.ts":
/*!***************************************!*\
  !*** ./src/app/state/state.module.ts ***!
  \***************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _agents_agent_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agents/agent.reducer */ "./src/app/state/agents/agent.reducer.ts");
/* harmony import */ var _personnel_personnel_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personnel/personnel.reducer */ "./src/app/state/personnel/personnel.reducer.ts");
/* harmony import */ var _app_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.reducer */ "./src/app/state/app/app.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _personnel_personnel_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personnel/personnel.effects */ "./src/app/state/personnel/personnel.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({
                    agents: _agents_agent_reducer__WEBPACK_IMPORTED_MODULE_3__["agentReducer"],
                    personnel: _personnel_personnel_reducer__WEBPACK_IMPORTED_MODULE_4__["personnelReducer"],
                    app: _app_app_reducer__WEBPACK_IMPORTED_MODULE_5__["appReducer"]
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_personnel_personnel_effects__WEBPACK_IMPORTED_MODULE_7__["PersonnelEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument({ maxAge: 25 })
            ],
            declarations: []
        })
    ], StateModule);
    return StateModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _keys_map_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../keys/map.api */ "./keys/map.api.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    mapApiKey: _keys_map_api__WEBPACK_IMPORTED_MODULE_0__["GOOGLE_MAP_API"]
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\repos\WEBbeast2018\angular-secret-agency\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map