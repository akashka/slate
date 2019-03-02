webpackJsonp([8],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupViewTabModule", function() { return FollowupViewTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followupview_tab__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FollowupViewTabModule = /** @class */ (function () {
    function FollowupViewTabModule() {
    }
    FollowupViewTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__followupview_tab__["a" /* FollowupViewTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__followupview_tab__["a" /* FollowupViewTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__followupview_tab__["a" /* FollowupViewTab */]
            ]
        })
    ], FollowupViewTabModule);
    return FollowupViewTabModule;
}());

//# sourceMappingURL=followupview-tab.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowupViewTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FollowupViewTab = /** @class */ (function () {
    function FollowupViewTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, nav, user) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.user = user;
        this.franchiseEnquiry = navParams.get('franchiseEnquiry');
        this.followups = this.franchiseEnquiry.follow_up;
        this.user.users_list().subscribe(function (res) {
            _this.allusers = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    FollowupViewTab.prototype.findUser = function (user, option) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allusers, function (i) {
            return i == user;
        });
        return val[option];
    };
    FollowupViewTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'followupview-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/followupview-tab/followupview-tab.html"*/'<ion-content>\n\n    <ion-card *ngFor="let card of followups">\n        <ion-item>\n            <ion-avatar item-left>\n                <img src="{{findUser(card.user, \'profile_pic\')}}" />\n            </ion-avatar>\n            <h2>{{findUser(card.user, \'name\')}}</h2>\n            <p>{{card.dated}}</p>\n        </ion-item>\n        <ion-card-content>\n            {{card.comment}}\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf="followups.length < 1">\n        <ion-card-content>\n            We see that there are no followup\'s yet for this Enquiry. <br>\n            Do a new Enquiry by going on Create on top.\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/followupview-tab/followupview-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["h" /* User */]])
    ], FollowupViewTab);
    return FollowupViewTab;
}());

//# sourceMappingURL=followupview-tab.js.map

/***/ })

});
//# sourceMappingURL=8.js.map