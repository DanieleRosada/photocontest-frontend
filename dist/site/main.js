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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n"

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
/* harmony import */ var _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photo-detail/photo-detail.component */ "./src/app/photo-detail/photo-detail.component.ts");
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ranking/ranking.component */ "./src/app/ranking/ranking.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'photo/:id', component: _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_9__["PhotoDetailComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'sigup', component: _sig_up_sig_up_component__WEBPACK_IMPORTED_MODULE_5__["SigUpComponent"] },
    { path: 'ranking', component: _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_10__["RankingComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
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
                _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_9__["PhotoDetailComponent"],
                _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_10__["RankingComponent"]
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

module.exports = "\r\n.icon{\r\n    -webkit-appearance: none; \r\n    font-size:48px;\r\n    padding: 1%;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\nlabel{\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.album{\r\n    position: relative;\r\n    padding-top: 5%;\r\n}\r\n\r\n.card{\r\n    width: 18rem;\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\n.center{\r\n    margin-top:2px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h1>Photo Contest, welcome {{this.user.username}}</h1>\n        </div>\n        <div class=\"col-md-4 text-right\">\n            <i type=\"submit\" class=\"fas fa-trophy icon\" (click)=\"this.router.navigate(['/ranking']);\"></i>\n            <i type=\"submit\" class=\"fas fas fa-sign-out-alt icon\" (click)=\"logout()\"></i>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Insert url\" aria-label=\"Insert url\" value={{fileName}}>\n                <div class=\"input-group-append\">\n                    <label for=\"file-upload\" class=\"btn btn-outline-secondary yellow\">\n                        <i class=\"fa fa-cloud-upload\"></i> Browser\n                    </label>\n                    <input id=\"file-upload\" type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\" />\n                    <button class=\"btn btn-outline-secondary yellow\" type=\"submit\" [disabled]=\"uploadDisable\" (click)=\"uploadPhoto()\">Upload</button>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h6 *ngIf=\"message\">{{message}}</h6>\n        </div>\n        <div class=\"col-lg-4 col-md-6 album\" *ngFor=\"let data of arrayPhoto\">\n            <div class=\"card\">\n                <a class=\"pointer\" (click)=\"photoDetail(data.ID)\" target=\"_blank\">\n                    <img class=\"card-img-top\" src={{data.url}} style=\"max-height: 220px; width: 100%;\">\n                </a>\n                <div class=\"card-body\" *ngIf=\"data.voteiduser == this.user.id\">\n                    <p>User: {{data.username}}</p>\n                    <p>Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(data.sumvotes/data.nvotes).toFixed(2)}}</p>\n                    <p>Users voted: <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{data.nvotes}}</p>\n                </div>\n                <div class=\"card-body\" *ngIf=\"data.voteiduser != this.user.id\">\n                    <p>User: {{data.username}}</p>\n                    <form #likeForm=\"ngForm\" (ngSubmit)=\"votePhoto(likeForm, data);\">\n                        <select class=\"form-control\" [(ngModel)]=\"data.vote\" name=\"vote\" required>\n                            <option *ngFor=\"let vote of votes\" value=\"{{vote.value}}\">{{vote.value}}</option>\n                        </select>\n                        <input type=\"hidden\" name=\"id\" [(ngModel)]=\"data.ID\" />\n                        <button type=\"submit\" class=\"btn btn-warning yellow center\" [disabled]=\"data.isDisabled\">Vote</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        this.user = JSON.parse(sessionStorage.getItem('token'));
        this.uploadDisable = false;
        this.message = null;
        if (!this.user) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.loadPhoto();
        }
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.loadPhoto = function () {
        var _this = this;
        this.storage.load(this.user.id).then(function (res) { return _this.arrayPhoto = res; });
    };
    HomeComponent.prototype.logout = function () {
        this.storage.logout();
        this.router.navigate(['/login']);
    };
    HomeComponent.prototype.onFileChange = function (event) {
        this.file = event.target.files[0];
        this.fileName = this.file.name;
    };
    HomeComponent.prototype.uploadPhoto = function () {
        var _this = this;
        if (this.file) {
            this.message = "We have taken your request";
            this.uploadDisable = true;
            this.storage.upload(this.file, this.user.id).subscribe(function () {
                setTimeout(function () { return _this.loadPhoto(); }, 1000);
                setTimeout(function () { return _this.message = null; }, 1000);
                setTimeout(function () { return _this.uploadDisable = false; }, 1000);
            }, function (err) {
                console.log("err", err);
            });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
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

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h3>Sign In</h3>\n                <div class=\"d-flex justify-content-end social_icon\">\n                    <span><i class=\"fab fa-facebook-square\"></i></span>\n                    <span><i class=\"fab fa-google-plus-square\"></i></span>\n                    <span><i class=\"fab fa-twitter-square\"></i></span>\n                </div>\n            </div>\n            <div class=\"card-body\">\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm);\">\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                        </div>\n                        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\"\n                            ngModel required>\n\n                    </div>\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n                        </div>\n                        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\"\n                            ngModel required>\n                    </div>\n                    <div class=\"row align-items-center remember\">\n                        <input type=\"checkbox\">Remember Me\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" value=\"Login\" class=\"btn float-right yellow\">\n                    </div>\n                </form>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"d-flex justify-content-center links\">\n                    Don't have an account?<a href=\"/sigup\">Sign Up</a>\n                </div>\n                <div class=\"d-flex justify-content-center\">\n                    <a href=\"#\">Forgot your password?</a>\n                </div>\n            <div class=\"alert alert-danger form-group\" role=\"alert\" *ngIf=\"loginAlert\">{{loginAlert}}</div>\n            </div>\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/photo-detail/photo-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/photo-detail/photo-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 5px solid #fff;\r\n    border-radius: 4px;\r\n  }\r\n.right{\r\n    float: right;\r\n}\r\n.left{\r\n    float:left;\r\n}"

/***/ }),

/***/ "./src/app/photo-detail/photo-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/photo-detail/photo-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let data of photo\">\n    <div class=\"col-md-12\" >\n      <h1 class=\"left\">User: {{data.username}}</h1>\n      <button class=\"btn btn-outline-secondary yellow right\" type=\"submit\" (click)=\"back()\">Home</button>\n    </div>\n    <div class=\"col-md-12\">\n      <p>Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(data.sumvotes/data.nvotes).toFixed(2)}}</p>\n      <p>Users voted: <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{data.nvotes}}</p>\n      <img class=\"card-img-top\" src={{data.url}} width=\"100%\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/photo-detail/photo-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/photo-detail/photo-detail.component.ts ***!
  \********************************************************/
/*! exports provided: PhotoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoDetailComponent", function() { return PhotoDetailComponent; });
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




var PhotoDetailComponent = /** @class */ (function () {
    function PhotoDetailComponent(routeid, storage, router) {
        var _this = this;
        this.routeid = routeid;
        this.storage = storage;
        this.router = router;
        this.routeid.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.loadDetail();
    }
    PhotoDetailComponent.prototype.ngOnInit = function () {
    };
    PhotoDetailComponent.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    PhotoDetailComponent.prototype.loadDetail = function () {
        var _this = this;
        this.storage.photo(this.id).then(function (res) { return _this.photo = res; });
    };
    PhotoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-detail',
            template: __webpack_require__(/*! ./photo-detail.component.html */ "./src/app/photo-detail/photo-detail.component.html"),
            styles: [__webpack_require__(/*! ./photo-detail.component.css */ "./src/app/photo-detail/photo-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PhotoDetailComponent);
    return PhotoDetailComponent;
}());



/***/ }),

/***/ "./src/app/ranking/ranking.component.css":
/*!***********************************************!*\
  !*** ./src/app/ranking/ranking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".album{\r\n    position: relative;\r\n    padding-top: 5%;\r\n}\r\n\r\n.card{\r\n    width: 14rem;\r\n}\r\n\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n\r\n.right{\r\n    float: right;\r\n}\r\n\r\n.left{\r\n    float:left;\r\n}\r\n\r\n.center{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/ranking/ranking.component.html":
/*!************************************************!*\
  !*** ./src/app/ranking/ranking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"left\">Rating</h1>\n      <div class=\"right\">\n        <button *ngIf=\"!photoUser\" class=\"btn btn-outline-secondary yellow\" type=\"submit\" (click)=\"raking()\">Photo</button>\n        <button *ngIf=\"photoUser\" class=\"btn btn-outline-secondary yellow\" type=\"submit\" (click)=\"userraking()\">User</button>\n        <button class=\"btn btn-outline-secondary yellow\" type=\"submit\" (click)=\"back()\">Home</button>\n      </div>\n    </div>\n  </div>\n  <!-- <p *ngIf=\"!photos || !users\">{{message}}</p> -->\n  <div class=\"row\" *ngIf=\"photoUser\">\n    <div class=\"col-lg-3 col-md-4 col-sm-6 album\" *ngFor=\"let data of photos;  index as i\">\n      <div class=\"card\">\n        <a class=\"pointer\" (click)=\"ViewphotoDetail(data.ID)\" target=\"_blank\">\n          <img class=\"card-img-top\" src={{data.url}}>\n        </a>\n        <div class=\"card-body\" *ngIf=\"photos\">\n          <p>User: {{data.username}}</p>\n          <p>Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(data.sumvotes/data.nvotes).toFixed(2)}}</p>\n          <p>Users voted: <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{data.nvotes}}</p>\n          <p>Postion: <i class=\"fas fa-trophy\" aria-hidden=\"true\"></i>{{i+1}} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"!photoUser\">\n    <div class=\"col-lg-12\" *ngFor=\"let user of users;  index as i\">\n      <p class=\"center\"><i class=\"fas fa-trophy\" aria-hidden=\"true\"></i> {{i+1}}\n      User: {{user.username}}   \n      Average stars: <i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{(user.sumvotes/user.nvotes).toFixed(2)}}\n      Users voted: <i class=\"fa fa-users\" aria-hidden=\"true\"></i>{{user.nvotes}}\n      Photos: {{user.nphotos}} \n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ranking/ranking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ranking/ranking.component.ts ***!
  \**********************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
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



var RankingComponent = /** @class */ (function () {
    function RankingComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        this.photos = null;
        this.users = null;
        this.message = "Ranking not available";
        this.photoUser = true;
        this.raking();
    }
    RankingComponent.prototype.ngOnInit = function () {
    };
    RankingComponent.prototype.raking = function () {
        var _this = this;
        this.photoUser = true;
        this.storage.ranking().then(function (res) { return _this.photos = res; });
    };
    RankingComponent.prototype.userraking = function () {
        var _this = this;
        this.photoUser = false;
        this.storage.userranking().then(function (res) { return _this.users = res; });
    };
    RankingComponent.prototype.ViewphotoDetail = function (photo_id) {
        var url = "/photo/" + photo_id;
        this.router.navigateByUrl(url);
    };
    RankingComponent.prototype.back = function () {
        this.router.navigate(['/home']);
    };
    RankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/ranking/ranking.component.html"),
            styles: [__webpack_require__(/*! ./ranking.component.css */ "./src/app/ranking/ranking.component.css")]
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/app/sig-up/sig-up.component.css":
/*!*********************************************!*\
  !*** ./src/app/sig-up/sig-up.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sig-up/sig-up.component.html":
/*!**********************************************!*\
  !*** ./src/app/sig-up/sig-up.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"d-flex justify-content-center h-100\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h3>Sign Up</h3>\n            </div>\n            <div class=\"card-body\">\n                <form #sigUpForm=\"ngForm\" (ngSubmit)=\"sigup(sigUpForm);\">\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                        </div>\n                        <input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\"\n                            ngModel required>\n                    </div>\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n                        </div>\n                        <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\"\n                            ngModel required>\n                    </div>\n                    <div class=\"input-group form-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>\n                        </div>\n                        <input type=\"email\" id=\"eamil\" name=\"email\" placeholder=\"Email\" class=\"form-control\" ngModel\n                            required>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" value=\"Sig Up\" class=\"btn float-right yellow\">\n                    </div>\n                </form>\n                <div class=\"alert alert-danger form-group\" role=\"alert\" *ngIf=\"sigupAlert\">{{sigupAlert}}</div>\n            </div>\n            <div class=\"card-footer\">\n                <div class=\"d-flex justify-content-center links\">\n                    Do you have an account?<a href=\"/login\">Sign In</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
        console.log("sigup");
        if (data.valid) {
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
            this.sigupAlert = 'One ore more fields missing';
        }
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
        this.base_url = "http://localhost:3000";
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
    StorageService.prototype.upload = function (file, user_id) {
        var formData = new FormData();
        formData.append('photo', file, user_id + "_" + file.name);
        return this.http.post(this.base_url + '/upload', formData, this.options);
    };
    StorageService.prototype.vote = function (vote, id_photo, id_user) {
        return this.http.post(this.base_url + '/vote', { vote: vote, id_photo: id_photo, id_user: id_user }, this.options);
    };
    StorageService.prototype.load = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = JSON.stringify({ "userid": userid });
                        return [4 /*yield*/, fetch(this.base_url + '/home', {
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
    StorageService.prototype.ranking = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.base_url + '/ranking', this.options).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    StorageService.prototype.userranking = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.base_url + '/userranking', this.options).then(function (res) { return res.json(); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
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

module.exports = __webpack_require__(/*! C:\Users\Utente\Documents\2018-2019\Cloud enterprise in AWS\photoContest\site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map