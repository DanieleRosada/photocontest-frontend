(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'site';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sig_up_sig_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sig-up/sig-up.component */ "./src/app/sig-up/sig-up.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _photo_details_photo_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photo-details/photo-details.component */ "./src/app/photo-details/photo-details.component.ts");
/* harmony import */ var _rank_users_rank_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rank-users/rank-users.component */ "./src/app/rank-users/rank-users.component.ts");
/* harmony import */ var _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-user/manage-user.component */ "./src/app/manage-user/manage-user.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _rank_photos_rank_photos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rank-photos/rank-photos.component */ "./src/app/rank-photos/rank-photos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"], children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'photo/:id', component: _photo_details_photo_details_component__WEBPACK_IMPORTED_MODULE_9__["PhotoDetailsComponent"] },
            { path: 'rankusers', component: _rank_users_rank_users_component__WEBPACK_IMPORTED_MODULE_10__["RankUsersComponent"] },
            { path: 'rankphotos', component: _rank_photos_rank_photos_component__WEBPACK_IMPORTED_MODULE_13__["RankPhotosComponent"] },
            { path: 'user', component: _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_11__["ManageUserComponent"] },
        ]
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'sigup', component: _sig_up_sig_up_component__WEBPACK_IMPORTED_MODULE_5__["SigUpComponent"] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _sig_up_sig_up_component__WEBPACK_IMPORTED_MODULE_5__["SigUpComponent"],
                _photo_details_photo_details_component__WEBPACK_IMPORTED_MODULE_9__["PhotoDetailsComponent"],
                _rank_users_rank_users_component__WEBPACK_IMPORTED_MODULE_10__["RankUsersComponent"],
                _manage_user_manage_user_component__WEBPACK_IMPORTED_MODULE_11__["ManageUserComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _rank_photos_rank_photos_component__WEBPACK_IMPORTED_MODULE_13__["RankPhotosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.album{\r\n    position: relative;\r\n    padding-top: 5%;\r\n}\r\n\r\n.card{\r\n    width: 18rem;\r\n    margin: 0 auto;\r\n    float: none;\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\n.search{\r\n    margin-top:20px;\r\n    margin-left: 0px;\r\n}\r\n\r\n.search button{\r\n    margin-left: 3.3%;\r\n}\r\n\r\n@media (max-width: 767.5px) {\r\n    .search button {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n    .search {\r\n      flex-direction: column;\r\n      align-items: stretch;\r\n      margin-right: 0px;\r\n\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVFO0lBQ0U7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7TUFDRSxzQkFBc0I7TUFDdEIsb0JBQW9CO01BQ3BCLGlCQUFpQjs7SUFFbkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5hbGJ1bXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZsb2F0OiBub25lO1xyXG59XHJcblxyXG4ucG9pbnRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLnNlYXJjaCBidXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMy4zJTtcclxufVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3LjVweCkge1xyXG4gICAgLnNlYXJjaCBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline row search\" #searchForm=\"ngForm\" (ngSubmit)=\"research(searchForm)\">\r\n    <input class=\"form-control col-md-7\" placeholder=\"Search\" id=\"search\" name=\"search\" ngModel required>\r\n    <button class=\"btn btn-warning col-md-2 margin\" type=\"submit\">Search</button>\r\n    <button class=\"btn btn-warning col-md-2 margin\" type=\"button\" (click)=\"loadPhoto()\">All</button>\r\n</form>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-6 album\" *ngFor=\"let data of arrayPhoto\">\r\n        <div class=\"card\">\r\n            <a class=\"pointer\" (click)=\"photoDetail(data.ID)\" target=\"_blank\">\r\n                <img *ngIf=\"!data.thumbnail\" class=\"card-img-top\" src={{data.url}} style=\"max-height: 220px; width: 100%;\">\r\n                <img *ngIf=\"data.thumbnail\" class=\"card-img-top\" src={{data.thumbnail}} >\r\n            </a>\r\n            <div class=\"card-body\" *ngIf=\"data.voteiduser == this.user.id || data.ID_user == this.user.id\">\r\n                <p>User: {{data.username}}</p>\r\n                <p>Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(data.sumvotes/data.nvotes ||\r\n                    0).toFixed(2)}}</p>\r\n                <p>Users voted: <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{data.nvotes}}</p>\r\n            </div>\r\n            <div class=\"card-body\" *ngIf=\"data.voteiduser != this.user.id && data.ID_user != this.user.id\">\r\n                <p>User: {{data.username}}</p>\r\n                <form #likeForm=\"ngForm\" class=\"form-inline row\" (ngSubmit)=\"votePhoto(likeForm, data);\">\r\n                    <select class=\"form-control col-6\" [(ngModel)]=\"data.vote\" name=\"vote\" required>\r\n                        <option *ngFor=\"let vote of votes\" value=\"{{vote.value}}\">{{vote.value}}</option>\r\n                    </select>\r\n                    <input type=\"hidden\" name=\"id\" [(ngModel)]=\"data.ID\" />\r\n                    <button type=\"submit\" class=\"btn btn-warning col-5 offset-1\" [disabled]=\"data.isDisabled\">Vote</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.votes = [{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }, { "value": 5 }];
        this.search = [{ "value": "photo name" }, { "value": "author" }, { "value": "title" }, { "value": "description" }];
        this.user = JSON.parse(sessionStorage.getItem('token'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadPhoto();
    };
    HomeComponent.prototype.loadPhoto = function () {
        var _this = this;
        this.storage.load(this.user.id).then(function (res) { return _this.arrayPhoto = res; });
    };
    HomeComponent.prototype.research = function (data) {
        var _this = this;
        if (data.valid) {
            this.storage.search(data.value.search, this.user.id).then(function (res) { return _this.arrayPhoto = res; });
        }
    };
    HomeComponent.prototype.votePhoto = function (data, element) {
        var _this = this;
        if (data.value.vote && data.valid) {
            element.isDisabled = true;
            this.storage.vote(data.value.vote, data.value.id, this.user.id).subscribe(function () {
                _this.loadPhoto();
            }, function (err) {
                console.log(err);
            });
        }
    };
    HomeComponent.prototype.photoDetail = function (photo_id) {
        var url = "/photo/" + photo_id;
        this.router.navigateByUrl(url);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"d-flex justify-content-center h-100\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h1>Login</h1>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm);\">\r\n                    <div class=\"input-group form-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\r\n                        </div>\r\n                        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\" autocomplete=\"username\"\r\n                            ngModel required>\r\n\r\n                    </div>\r\n                    <div class=\"input-group form-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\r\n                        </div>\r\n                        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" autocomplete=\"password\"\r\n                            ngModel required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"submit\" value=\"Login\" class=\"btn float-right yellow\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                    <div class=\"alert alert-danger form-group\" role=\"alert\" *ngIf=\"loginAlert\">{{loginAlert}}</div>\r\n                <div class=\"d-flex justify-content-center links\">\r\n                    Don't have an account?<a href=\"/sigup\">Sign Up</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.loginAlert = null;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        if (data.valid) {
            this.storage
                .login(data.value.username, data.value.password)
                .subscribe(function (data) {
                _this.storage.saveToken(data);
                _this.router.navigate(['/home']);
                _this.loginAlert = null;
            }, function (err) {
                data.reset();
                _this.loginAlert = err.statusText + (err.error.message ? " - " + err.error.message : '');
            });
        }
        else {
            this.loginAlert = 'One ore more fields missing';
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manage-user/manage-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\nlabel{\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.album{\r\n    position: relative;\r\n    padding-top: 2%;\r\n}\r\n\r\n.card{\r\n    width: 18rem;\r\n    margin: 0 auto;\r\n    float: none;\r\n}\r\n\r\n.input-group-text{\r\n    width: initial;\r\n}\r\n\r\nform{\r\n    width: 100%;\r\n}\r\n\r\nh1{\r\n    margin-top:10px;\r\n}\r\n\r\n.shadow{\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\nh4{\r\n  word-wrap: break-word;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXVzZXIvbWFuYWdlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXVzZXIvbWFuYWdlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYWxidW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmbG9hdDogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgICB3aWR0aDogaW5pdGlhbDtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbmgxe1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4uc2hhZG93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcblxyXG4ucG9pbnRlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDR7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/manage-user/manage-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row shadow\">\r\n  <div class=\"col-md-12\">\r\n    <h1 class=\"center\">Insert photo</h1>\r\n  </div>\r\n\r\n  <form #uploadForm=\"ngForm\" (ngSubmit)=\"uploadPhoto(uploadForm)\">\r\n    <div class=\"input-group mb-3 col-md-12\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\" id=\"basic-addon1\">Title</span>\r\n      </div>\r\n      <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" class=\"form-control\" required>\r\n    </div>\r\n\r\n    <div class=\"input-group mb-3 col-md-12\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Description</span>\r\n      </div>\r\n      <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" aria-label=\"With textarea\" required></textarea>\r\n    </div>\r\n\r\n    <div class=\"input-group mb-3 col-md-12\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"File explorer\" aria-label=\"Insert url\" value={{fileName}}>\r\n      <div class=\"input-group-append\">\r\n        <label for=\"file-upload\" class=\"btn btn-outline-secondary yellow\">\r\n          <i class=\"far fa-folder\"></i>\r\n        </label>\r\n        <input id=\"file-upload\" type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\" required />\r\n        <button class=\"btn btn-outline-secondary yellow\" type=\"submit\" [disabled]=\"uploadDisable\">Upload</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"col-md-12\">\r\n    <h4 class=\"center\" *ngIf=\"message\">{{message}}</h4>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-md-12\">\r\n    <h1 class=\"center\">Your data & photo</h1>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <h4 class=\"center\">User: {{user.username}}</h4>\r\n  </div>\r\n  <div class=\"col-md-6 \">\r\n    <h4 class=\"center\">Email: {{user.email}}</h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-4 col-md-6 album\" *ngFor=\"let data of arrayPhoto\">\r\n    <div class=\"card\">\r\n      <a class=\"pointer\" (click)=\"photoDetail(data.ID)\" target=\"_blank\">\r\n        <img *ngIf=\"!data.thumbnail\" class=\"card-img-top\" src={{data.url}} style=\"max-height: 220px; width: 100%;\">\r\n        <img *ngIf=\"data.thumbnail\" class=\"card-img-top\" src={{data.thumbnail}}>\r\n      </a>\r\n      <div class=\"card-body\">\r\n        <p>Title: {{data.title.substr(0, 20)}}</p>\r\n        <p>Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(data.sumvotes/data.nvotes ||\r\n          0).toFixed(2)}}</p>\r\n        <button type=\"button\" class=\"btn btn-warning btn-block\" [disabled]=\"data.isDisabled\" (click)=\"deletePhoto(data.ID, data)\">Delete</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/manage-user/manage-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/manage-user/manage-user.component.ts ***!
  \******************************************************/
/*! exports provided: ManageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUserComponent", function() { return ManageUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageUserComponent = /** @class */ (function () {
    function ManageUserComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.user = JSON.parse(sessionStorage.getItem('token'));
        this.uploadDisable = false;
        this.message = null;
    }
    ManageUserComponent.prototype.ngOnInit = function () {
        this.owenPhoto();
    };
    ManageUserComponent.prototype.owenPhoto = function () {
        var _this = this;
        this.storage.owenPhoto(this.user.id).then(function (res) { return _this.arrayPhoto = res; });
    };
    ManageUserComponent.prototype.onFileChange = function (event) {
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    };
    ManageUserComponent.prototype.uploadPhoto = function (data) {
        var _this = this;
        if (this.file && data.valid) {
            this.message = "We have taken your request";
            this.uploadDisable = true;
            this.storage.upload(this.file, this.user.id, data.value.title, data.value.description).subscribe(function () {
                _this.file = null;
                _this.fileName = null;
                data.resetForm();
                _this.message = null;
                _this.uploadDisable = false;
                _this.owenPhoto();
            }, function (err) {
                console.log("err", err);
            });
        }
        else {
            this.message = "Form not valid";
        }
    };
    ManageUserComponent.prototype.deletePhoto = function (idphoto, data) {
        var _this = this;
        data.isDisabled = true;
        this.storage.deletePhoto(idphoto).subscribe(function () {
            _this.owenPhoto();
        }, function (err) {
            console.log("err", err);
        });
    };
    ManageUserComponent.prototype.photoDetail = function (photo_id) {
        var url = "/photo/" + photo_id;
        this.router.navigateByUrl(url);
    };
    ManageUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-user',
            template: __webpack_require__(/*! ./manage-user.component.html */ "./src/app/manage-user/manage-user.component.html"),
            styles: [__webpack_require__(/*! ./manage-user.component.css */ "./src/app/manage-user/manage-user.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManageUserComponent);
    return ManageUserComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-light {\r\n    background-color: #FFC312 !important;\r\n}\r\n.nav-link{\r\n    color: rgba(0,0,0,1) !important;\r\n    margin-right: 20px;\r\n}\r\n.pointer{\r\n    cursor: pointer !important;\r\n}\r\n.container{\r\n    height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTIgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LWxpbmt7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwxKSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5wb2ludGVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" routerLink=\"/home\"> <img src=\"../../favicon.ico\" style=\"max-height: 70%; max-width: 70%;\" /></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n        <a class=\"nav-link\" routerLink=\"/user\">Manage User</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n          Rank\r\n        </a>\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" routerLink=\"/rankphotos\">Photos</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/rankusers\">Users</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link pointer\" (click)=\"logout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n    <span class=\"navbar-text\">\r\n      Welcome {{user.username}}\r\n    </span>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(storage, router) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.user = JSON.parse(sessionStorage.getItem('token'));
        if (!this.user)
            this.router.navigate(['/login']);
        this.storage.user().subscribe(function () { }, function (err) {
            _this.router.navigate(['/login']);
        });
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent.prototype.logout = function () {
        this.storage.logout();
        this.router.navigate(['/login']);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/photo-details/photo-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/photo-details/photo-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 5px solid #fff;\r\n    border-radius: 4px;\r\n    width: 100%;\r\n    height: 100%\r\n  }\r\n\r\n  h2{\r\n      margin-top: 20px;\r\n      word-wrap: break-word;\r\n  }\r\n\r\n  .shadow{\r\n    background-color: rgba(0,0,0,0.6);\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZGV0YWlscy9waG90by1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtFQUNGOztFQUVBO01BQ0ksZ0JBQWdCO01BQ2hCLHFCQUFxQjtFQUN6Qjs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQyIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWRldGFpbHMvcGhvdG8tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJVxyXG4gIH1cclxuXHJcbiAgaDJ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcblxyXG4gIC5zaGFkb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/photo-details/photo-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/photo-details/photo-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row shadow\" *ngFor=\"let data of photo\">\r\n  <div class=\"col-md-6\">\r\n    <h2>User: {{data.username}}</h2>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <h2>{{data.email}}</h2>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <p>Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(data.sumvotes/data.nvotes || 0).toFixed(2)}}</p>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <p>Users voted: <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{data.nvotes}}</p>\r\n  </div>\r\n  <img  src={{data.url}}>\r\n  <div class=\"col-md-12\">\r\n    <h2>{{data.title}}</h2>\r\n    <p>{{data.description}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/photo-details/photo-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/photo-details/photo-details.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoDetailsComponent", function() { return PhotoDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoDetailsComponent = /** @class */ (function () {
    function PhotoDetailsComponent(routeid, storage, router) {
        this.routeid = routeid;
        this.storage = storage;
        this.router = router;
    }
    PhotoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeid.params.subscribe(function (params) {
            _this.loadDetail(params['id']);
        });
    };
    PhotoDetailsComponent.prototype.loadDetail = function (id) {
        var _this = this;
        this.storage.photo(id).then(function (res) { return _this.photo = res; });
    };
    PhotoDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-details',
            template: __webpack_require__(/*! ./photo-details.component.html */ "./src/app/photo-details/photo-details.component.html"),
            styles: [__webpack_require__(/*! ./photo-details.component.css */ "./src/app/photo-details/photo-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PhotoDetailsComponent);
    return PhotoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/rank-photos/rank-photos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/rank-photos/rank-photos.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".album{\r\n    position: relative;\r\n    padding-top: 2%;\r\n}\r\n\r\n.card{\r\n    width: 18rem;\r\n    margin: 0 auto;\r\n    float: none; \r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\nh1{\r\nmargin-top:20px;\r\n}\r\n\r\n.container{\r\n    height: auto;\r\n}\r\n\r\np{\r\n    font-size: 18px;\r\n    margin-top: 0px;\r\n    margin-bottom: 2px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFuay1waG90b3MvcmFuay1waG90b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcmFuay1waG90b3MvcmFuay1waG90b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZsb2F0OiBub25lOyBcclxufVxyXG5cclxuLnBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmgxe1xyXG5tYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/rank-photos/rank-photos.component.html":
/*!********************************************************!*\
  !*** ./src/app/rank-photos/rank-photos.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h1 class=\"center\">Photos ranking</h1>\r\n  </div>\r\n  <div class=\"col-md-12\" *ngIf=\"message\">\r\n    {{message}}\r\n  </div>\r\n\r\n  <div class=\"col-lg-4 col-md-6 album\" *ngFor=\"let data of photos;  index as i\">\r\n    <div class=\"card\">\r\n      <a class=\"pointer\" (click)=\"ViewphotoDetail(data.ID)\" target=\"_blank\">\r\n          <img *ngIf=\"!data.thumbnail\" class=\"card-img-top\" src={{data.url}} style=\"max-height: 220px; width: 100%;\">\r\n          <img *ngIf=\"data.thumbnail\" class=\"card-img-top\" src={{data.thumbnail}} >\r\n      </a>\r\n      <div class=\"card-body\" *ngIf=\"photos\">\r\n        <p>User: {{data.username}}</p>\r\n        <p>Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(data.sumvotes/data.nvotes ||\r\n          0).toFixed(2)}}</p>\r\n        <p>Users voted: <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{data.nvotes}}</p>\r\n        <p>Postion: <i class=\"fas fa-trophy\" aria-hidden=\"true\"></i>{{i+1}} </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rank-photos/rank-photos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/rank-photos/rank-photos.component.ts ***!
  \******************************************************/
/*! exports provided: RankPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankPhotosComponent", function() { return RankPhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RankPhotosComponent = /** @class */ (function () {
    function RankPhotosComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.message = null;
    }
    RankPhotosComponent.prototype.ngOnInit = function () {
        this.rankPhotos();
    };
    RankPhotosComponent.prototype.rankPhotos = function () {
        var _this = this;
        this.storage.photosRaking().then(function (res) {
            if (res.length == 0)
                _this.message = "Photos ranking not available";
            else
                _this.photos = res;
        });
    };
    RankPhotosComponent.prototype.ViewphotoDetail = function (photo_id) {
        var url = "/photo/" + photo_id;
        this.router.navigateByUrl(url);
    };
    RankPhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rank-photos',
            template: __webpack_require__(/*! ./rank-photos.component.html */ "./src/app/rank-photos/rank-photos.component.html"),
            styles: [__webpack_require__(/*! ./rank-photos.component.css */ "./src/app/rank-photos/rank-photos.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RankPhotosComponent);
    return RankPhotosComponent;
}());



/***/ }),

/***/ "./src/app/rank-users/rank-users.component.css":
/*!*****************************************************!*\
  !*** ./src/app/rank-users/rank-users.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: auto;\r\n}\r\n\r\nh1{\r\n    margin-top:20px\r\n}\r\n\r\np{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFuay11c2Vycy9yYW5rLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JhbmstdXNlcnMvcmFuay11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHhcclxufVxyXG5cclxucHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/rank-users/rank-users.component.html":
/*!******************************************************!*\
  !*** ./src/app/rank-users/rank-users.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h1 class=\"center\">Users ranking</h1>\r\n    </div>\r\n    <div class=\"col-md-12\" *ngIf=\"message\">\r\n      <p>{{message}}</p>\r\n    </div>\r\n\r\n    <div class=\"col-lg-12\" *ngFor=\"let user of users;  index as i\">\r\n      <p class=\"center\"><i class=\"fas fa-trophy\"></i> {{i+1}}\r\n        User: {{user.username}}\r\n        Average stars: <i class=\"fa fa-star\"></i>{{(user.sumvotes/user.nvotes ||\r\n        0).toFixed(2)}}\r\n        Users voted: <i class=\"fa fa-users\"></i>{{user.nvotes}}\r\n        Photos: <i class=\"far fa-image\"></i>{{user.nphotos}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rank-users/rank-users.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rank-users/rank-users.component.ts ***!
  \****************************************************/
/*! exports provided: RankUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankUsersComponent", function() { return RankUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RankUsersComponent = /** @class */ (function () {
    function RankUsersComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.users = null;
        this.message = null;
    }
    RankUsersComponent.prototype.ngOnInit = function () {
        this.userRaking();
    };
    RankUsersComponent.prototype.userRaking = function () {
        var _this = this;
        this.storage.userRaking().then(function (res) {
            if (res.length == 0)
                _this.message = "Users ranking not available";
            else
                _this.users = res;
        });
    };
    RankUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rank-users',
            template: __webpack_require__(/*! ./rank-users.component.html */ "./src/app/rank-users/rank-users.component.html"),
            styles: [__webpack_require__(/*! ./rank-users.component.css */ "./src/app/rank-users/rank-users.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RankUsersComponent);
    return RankUsersComponent;
}());



/***/ }),

/***/ "./src/app/sig-up/sig-up.component.css":
/*!*********************************************!*\
  !*** ./src/app/sig-up/sig-up.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnLXVwL3NpZy11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZy11cC9zaWctdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/sig-up/sig-up.component.html":
/*!**********************************************!*\
  !*** ./src/app/sig-up/sig-up.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"d-flex justify-content-center h-100\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h1>Sign Up</h1>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form #sigUpForm=\"ngForm\" (ngSubmit)=\"sigup(sigUpForm);\">\r\n                    <div class=\"input-group form-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\r\n                        </div>\r\n                        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\"\r\n                            ngModel required>\r\n                    </div>\r\n                    <div class=\"input-group form-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\r\n                        </div>\r\n                        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\"\r\n                            ngModel required>\r\n                    </div>\r\n                    <div class=\"input-group form-group\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>\r\n                        </div>\r\n                        <input type=\"email\" id=\"eamil\" name=\"email\" placeholder=\"Email\" class=\"form-control\" ngModel\r\n                            required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"submit\" value=\"Sig Up\" class=\"btn float-right yellow\">\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"alert alert-danger form-group\" role=\"alert\" *ngIf=\"sigupAlert\">{{sigupAlert}}</div>\r\n                <div class=\"d-flex justify-content-center links\">\r\n                    Do you have an account?<a href=\"/login\">Login</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sig-up/sig-up.component.ts":
/*!********************************************!*\
  !*** ./src/app/sig-up/sig-up.component.ts ***!
  \********************************************/
/*! exports provided: SigUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigUpComponent", function() { return SigUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigUpComponent = /** @class */ (function () {
    function SigUpComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.sigupAlert = null;
    }
    SigUpComponent.prototype.ngOnInit = function () {
    };
    SigUpComponent.prototype.sigup = function (data) {
        var _this = this;
        if (data.valid && this.validationUser(data.value.username) && this.validateEmail(data.value.email)) {
            this.storage
                .createUser(data.value.username, data.value.password, data.value.email)
                .subscribe(function (data) {
                _this.router.navigate(['/login']);
                _this.sigupAlert = null;
            }, function (err) {
                _this.sigupAlert = err.statusText + (err.error.message ? " - " + err.error.message : '');
            });
        }
        else {
            this.sigupAlert = 'Not valid fields';
        }
    };
    SigUpComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase()) && email.length < 64;
    };
    SigUpComponent.prototype.validationUser = function (user) {
        return user.length < 64;
    };
    SigUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sig-up',
            template: __webpack_require__(/*! ./sig-up.component.html */ "./src/app/sig-up/sig-up.component.html"),
            styles: [__webpack_require__(/*! ./sig-up.component.css */ "./src/app/sig-up/sig-up.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SigUpComponent);
    return SigUpComponent;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var StorageService = /** @class */ (function () {
    function StorageService(http) {
        this.http = http;
        this.base_url = "http://ec2-34-251-72-250.eu-west-1.compute.amazonaws.com:3000";
        this.getToken();
    }
    StorageService.prototype.getToken = function () {
        this.options = { headers: { 'x-access-token': sessionStorage.getItem('token') } };
    };
    StorageService.prototype.saveToken = function (token) {
        sessionStorage.setItem('token', JSON.stringify(token));
        this.getToken();
    };
    StorageService.prototype.login = function (username, password) {
        return this.http.post(this.base_url + '/login', { username: username, password: password });
    };
    StorageService.prototype.logout = function () {
        sessionStorage.clear();
    };
    StorageService.prototype.createUser = function (username, password, email) {
        return this.http.post(this.base_url + '/sigup', { username: username, password: password, email: email });
    };
    StorageService.prototype.upload = function (file, userid, title, description) {
        var formData = new FormData();
        formData.append('photo', file);
        formData.append('userid', userid);
        formData.append('title', title);
        formData.append('description', description);
        return this.http.post(this.base_url + '/upload', formData, this.options);
    };
    StorageService.prototype.vote = function (vote, idphoto, iduser) {
        return this.http.post(this.base_url + '/vote', { vote: vote, idphoto: idphoto, iduser: iduser }, this.options);
    };
    StorageService.prototype.deletePhoto = function (idphoto) {
        return this.http.post(this.base_url + '/deletephoto', { idphoto: idphoto }, this.options);
    };
    StorageService.prototype.load = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = JSON.stringify({ "userid": userid });
                        return [4 /*yield*/, fetch(this.base_url + '/photos', {
                                method: "POST",
                                body: form,
                                headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
                            }).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageService.prototype.photo = function (idphoto) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = JSON.stringify({ "idphoto": idphoto });
                        return [4 /*yield*/, fetch(this.base_url + '/photo', {
                                method: "POST",
                                body: form,
                                headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
                            }).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageService.prototype.photosRaking = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.base_url + '/ranking/photos', this.options).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageService.prototype.userRaking = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.base_url + '/ranking/users', this.options).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageService.prototype.owenPhoto = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = JSON.stringify({ "userid": userid });
                        return [4 /*yield*/, fetch(this.base_url + '/owenphotos', {
                                method: "POST",
                                body: form,
                                headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
                            }).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageService.prototype.search = function (name, userid) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = JSON.stringify({ "search": name, "userid": userid });
                        return [4 /*yield*/, fetch(this.base_url + '/search', {
                                method: "POST",
                                body: form,
                                headers: { 'x-access-token': sessionStorage.getItem('token'), 'Content-Type': 'application/json' }
                            }).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageService.prototype.user = function () {
        return this.http.get(this.base_url + '/user', this.options);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StorageService);
    return StorageService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\Documents\TSAC2\photocontest\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map