webpackJsonp([1],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_page_home_page__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, toastCtrl, translateService, loadingCtrl, formBuilder, viewCtrl, app, user, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.user = user;
        this.storage = storage;
        // @ViewChild(Nav) nav: Nav;
        this.pages = [{ title: "Users Lists", component: "UsersPage" }];
        this.account = {
            email: "",
            password: ""
        };
        this.passwordType = "password";
        this.passwordIcon = "Show";
        this.isLoggedIn();
        this.form = formBuilder.group({
            user_name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            user_pass: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.translateService.get("SIGNUP_ERROR").subscribe(function (value) {
            _this.signinErrorString = value;
        });
        this.falsemsg = "Welcome !";
    }
    WelcomePage.prototype.isLoggedIn = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.storage.get("token").then(function (value) {
            _this.user.checkAuthentication(value).then(function (resp) {
                loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_page_home_page__["a" /* HomePage */]);
            }, function (err) {
                loading.dismiss();
            });
        });
    };
    WelcomePage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "Show" ? "Hide" : "Show";
    };
    WelcomePage.prototype.signIn = function () {
        var _this = this;
        if (!this.form.valid) {
            var toast = this.toastCtrl.create({
                message: "Email and password both are required to Sign In.",
                duration: 3000,
                position: "top"
            });
            toast.present();
            return;
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "Signing in..."
            });
            loading_1.present();
            this.user.login(this.account).subscribe(function (resp) {
                loading_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_page_home_page__["a" /* HomePage */]);
            }, function (err) {
                loading_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "Oops ! some issues has occured. Please try again later!",
                    duration: 3000,
                    position: "top"
                });
                toast.present();
            });
        }
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-welcome",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n  <div class="fixed-content">\n\n    <div class="logoHeader">\n      <img alt="logo" height="60" style="position: relative" src="../assets/img/icon-512x512.png">\n    </div>\n    \n    <h1 class="welcomeHeader"> &nbsp; </h1>\n    \n    <form *ngIf="form" [formGroup]="form">\n      <div padding>\n        <ion-input type="email" [(ngModel)]="account.email" class="input-access-code" placeholder="Email" formControlName="user_name"></ion-input>\n        <br>\n        <ion-input [type]="passwordType" [(ngModel)]="account.password" class="input-access-code" placeholder="Password" formControlName="user_pass"></ion-input>\n        <br>\n        <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\' style="z-index:9999999;">{{passwordIcon}} Password</ion-icon>\n        <br> <br>\n        <a (click)="signIn()">\n          <button ion-button block class="login" style="color:white !important;">{{ \'LOGIN\' | translate }}</button>\n        </a>\n      </div>\n    </form>\n  \n  </div>\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=1.js.map