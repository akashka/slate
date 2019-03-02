webpackJsonp([10],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(336);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__programs_programs__ = __webpack_require__(337);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__programs_programs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__center_center__ = __webpack_require__(338);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__center_center__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__franchise_franchise__ = __webpack_require__(339);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__franchise_franchise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instructor_instructor__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__instructor_instructor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__students_students__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__students_students__["a"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/area-tab/area-tab.module": [
		188
	],
	"../pages/branches-tab/branches-tab.module": [
		190
	],
	"../pages/centers-page/centers-page.module": [
		192
	],
	"../pages/district-tab/district-tab.module": [
		195
	],
	"../pages/followup-page/followup-page.module": [
		370,
		0
	],
	"../pages/followupcreate-tab/followupcreate-tab.module": [
		371,
		9
	],
	"../pages/followupview-tab/followupview-tab.module": [
		372,
		8
	],
	"../pages/franchiseenquiry-create/franchiseenquiry-create.module": [
		373,
		7
	],
	"../pages/franchiseenquiry-list/franchiseenquiry-list.module": [
		374,
		6
	],
	"../pages/franchiseenquiry-view/franchiseenquiry-view.module": [
		375,
		5
	],
	"../pages/home-page/home-page.module": [
		196
	],
	"../pages/home-tab/home-tab.module": [
		200
	],
	"../pages/instructorenquiry-create/instructorenquiry-create.module": [
		376,
		4
	],
	"../pages/instructorenquiry-list/instructorenquiry-list.module": [
		377,
		3
	],
	"../pages/instructorenquiry-update/instructorenquiry-update.module": [
		378,
		2
	],
	"../pages/notification-tab/notification-tab.module": [
		201
	],
	"../pages/profile-tab/profile-tab.module": [
		202
	],
	"../pages/program -create/program-create.module": [
		203
	],
	"../pages/program -detail/program-detail.module": [
		204
	],
	"../pages/program -update/program-update.module": [
		205
	],
	"../pages/programs-list/programs-list.module": [
		206
	],
	"../pages/states-tab/states-tab.module": [
		207
	],
	"../pages/user-add/signup.module": [
		209
	],
	"../pages/user-detail/user-detail.module": [
		208
	],
	"../pages/user-update/user-update.module": [
		211
	],
	"../pages/users-lists/users_lists.module": [
		210
	],
	"../pages/welcome/welcome.module": [
		379,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaTabModule", function() { return AreaTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_tab__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AreaTabModule = /** @class */ (function () {
    function AreaTabModule() {
    }
    AreaTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__area_tab__["a" /* AreaTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__area_tab__["a" /* AreaTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__area_tab__["a" /* AreaTab */]
            ]
        })
    ], AreaTabModule);
    return AreaTabModule;
}());

//# sourceMappingURL=area-tab.module.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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






var AreaTab = /** @class */ (function () {
    function AreaTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return item.center_type != "unit";
            });
        }, function (err) {
            console.error("ERROR", err);
        });
        this.form = formBuilder.group({
            center_id: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_type: ["unit"],
            center_parent: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            active: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    AreaTab.prototype.onCodeChange = function (ev) {
        ev = this.form.controls["center_id"].value;
        this.isDuplicate = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.branches, { center_id: ev }) != undefined;
    };
    AreaTab.prototype.ionViewDidLoad = function () { };
    AreaTab.prototype.createState = function () {
        var _this = this;
        this.centers.add(this.form.value).subscribe(function (resp) {
            _this.nav.setRoot("CentersPage");
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Center. Please try again.",
                duration: 3000,
                position: "top"
            });
            toast.present();
        });
    };
    AreaTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "area-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/area-tab/area-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'Center Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'Center Code\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_id" (ionChange)="onCodeChange($event)"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State / District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="center_parent">\n                    <ion-option value="{{state._id}}" *ngFor="let state of states">{{state.center_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <p style="color:red;" *ngIf="isDuplicate"> Center Code already exists for any State or Districts or Center. Please try again with new Center Code. </p>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave || isDuplicate">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/area-tab/area-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]])
    ], AreaTab);
    return AreaTab;
}());

//# sourceMappingURL=area-tab.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesTabModule", function() { return BranchesTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branches_tab__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BranchesTabModule = /** @class */ (function () {
    function BranchesTabModule() {
    }
    BranchesTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__branches_tab__["a" /* BranchesTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__branches_tab__["a" /* BranchesTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__branches_tab__["a" /* BranchesTab */]
            ]
        })
    ], BranchesTabModule);
    return BranchesTabModule;
}());

//# sourceMappingURL=branches-tab.module.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchesTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BranchesTab = /** @class */ (function () {
    function BranchesTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.states = [];
        this.shownGroup = null;
        this.shownSubGroup = null;
        this.centers.query().subscribe(function (res) {
            _this.branches = _this.formBranches(res);
        }, function (err) {
            console.error("ERROR", err);
        });
    }
    BranchesTab.prototype.formBranches = function (res) {
        var branches = res.filter(function (item) {
            return item.center_type == "state";
        });
        for (var i = 0; i < branches.length; i++) {
            branches[i].branches = [];
            branches[i].branches = res.filter(function (item) {
                return item.center_parent == branches[i]._id;
            });
            for (var j = 0; j < branches[i].branches.length; j++) {
                branches[i].branches[j].branches = [];
                branches[i].branches[j].branches = res.filter(function (item) {
                    return item.center_parent == branches[i].branches[j]._id;
                });
            }
        }
        return branches;
    };
    BranchesTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "branches-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/branches-tab/branches-tab.html"*/'<ion-content class="branchtab">\n\n    <ion-list>\n        <div *ngFor="let branch of branches">\n\n            <ion-item class="item-stable">\n                <ion-icon name="arrow-dropright" *ngIf="branch.hide" (click)="onSelect(branch)"></ion-icon>\n                <ion-icon name="arrow-dropdown" *ngIf="!branch.hide" (click)="onSelect(branch)"></ion-icon>\n                <span *ngIf="branch.active" style="color:green;" (click)="onSelect(branch)"> {{branch.center_name}}\n                    ({{branch.center_id}}) </span>\n                <span *ngIf="!branch.active" style="color:red;" (click)="onSelect(branch)"> {{branch.center_name}}\n                    ({{branch.center_id}}) </span>\n                <span style="color:blue;text-decoration:underline;float:right;" (click)="edit(branch)"> Edit </span>\n            </ion-item>\n\n            <div *ngIf="!branch.hide" style="padding-left: 20px;">\n                <div *ngFor="let bran of branch.branches">\n\n                    <ion-item class="item-stable">\n                        <ion-icon name="arrow-dropright" *ngIf="bran.hide" (click)="onSubSelect(bran)"></ion-icon>\n                        <ion-icon name="arrow-dropdown" *ngIf="!bran.hide" (click)="onSubSelect(bran)"></ion-icon>\n                        <span *ngIf="bran.active" style="color: green;" (click)="onSubSelect(bran)">\n                            {{bran.center_name}} ({{bran.center_id}}) </span>\n                        <span *ngIf="!bran.active" style="color: red;" (click)="onSubSelect(bran)">\n                            {{bran.center_name}} ({{bran.center_id}}) </span>\n                        <span style="color:blue;text-decoration:underline;float:right;" (click)="edit(bran)"> Edit </span>\n                    </ion-item>\n\n                    <div *ngIf="!bran.hide" style="padding-left: 40px;">\n                        <div *ngFor="let b of bran.branches">\n                            <ion-item class="item-stable">\n                                <span *ngIf="b.active" style="color: green;"> {{b.center_name}} ({{b.center_id}})\n                                </span>\n                                <span *ngIf="!b.active" style="color: red;"> {{b.center_name}} ({{b.center_id}}) </span>\n                                <span style="color:blue;text-decoration:underline;float:right;" (click)="edit(b)"> Edit </span>\n                            </ion-item>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/branches-tab/branches-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */]])
    ], BranchesTab);
    return BranchesTab;
}());

//# sourceMappingURL=branches-tab.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentersPageModule", function() { return CentersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__centers_page__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CentersPageModule = /** @class */ (function () {
    function CentersPageModule() {
    }
    CentersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__centers_page__["a" /* CentersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__centers_page__["a" /* CentersPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__centers_page__["a" /* CentersPage */]
            ]
        })
    ], CentersPageModule);
    return CentersPageModule;
}());

//# sourceMappingURL=centers-page.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistrictTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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






var DistrictTab = /** @class */ (function () {
    function DistrictTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.form = formBuilder.group({
            center_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_type: ['district'],
            center_parent: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            active: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    DistrictTab.prototype.onCodeChange = function (ev) {
        ev = this.form.controls['center_id'].value;
        this.isDuplicate = (__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.branches, { center_id: ev }) != undefined);
    };
    DistrictTab.prototype.ionViewDidLoad = function () {
    };
    DistrictTab.prototype.createState = function () {
        var _this = this;
        this.centers.add(this.form.value).subscribe(function (resp) {
            _this.nav.setRoot('CentersPage');
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the District. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    DistrictTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'district-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/district-tab/district-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'District Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'District Code\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_id" (ionChange)="onCodeChange($event)"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select multiple="false" cancelText="Cancel" okText="Okay">\n                    <ion-option *ngFor="let state of states" value="{{state._id}}">{{state.center_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <p style="color:red;" *ngIf="isDuplicate"> District Code already exists for any State or Districts or Center. Please try again with new District Code. </p>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave || isDuplicate">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/district-tab/district-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]])
    ], DistrictTab);
    return DistrictTab;
}());

//# sourceMappingURL=district-tab.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesTab; });
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






var StatesTab = /** @class */ (function () {
    function StatesTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.isDuplicate = false;
        this.isReadyToSave = false;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.form = formBuilder.group({
            center_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            center_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            center_type: ['state'],
            center_parent: [''],
            active: [true, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    StatesTab.prototype.onCodeChange = function (ev) {
        ev = this.form.controls['center_id'].value;
        this.isDuplicate = (__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.branches, { center_id: ev }) != undefined);
    };
    StatesTab.prototype.ionViewDidLoad = function () {
    };
    StatesTab.prototype.createState = function () {
        var _this = this;
        this.centers.add(this.form.value).subscribe(function (resp) {
            _this.nav.setRoot('CentersPage');
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the State. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    StatesTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'states-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/states-tab/states-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'State Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State Code\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_id" (ionChange)="onCodeChange($event)"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }} </ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <p style="color:red;" *ngIf="isDuplicate"> State Code already exists for any State or Districts or Center. Please try again with new State Code. </p>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave || isDuplicate">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/states-tab/states-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]])
    ], StatesTab);
    return StatesTab;
}());

//# sourceMappingURL=states-tab.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictTabModule", function() { return DistrictTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__district_tab__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DistrictTabModule = /** @class */ (function () {
    function DistrictTabModule() {
    }
    DistrictTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__district_tab__["a" /* DistrictTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__district_tab__["a" /* DistrictTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__district_tab__["a" /* DistrictTab */]
            ]
        })
    ], DistrictTabModule);
    return DistrictTabModule;
}());

//# sourceMappingURL=district-tab.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_page__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home_page__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home_page__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home-page.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeTab = /** @class */ (function () {
    function HomeTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        console.log('Home Tab');
    }
    HomeTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/home-tab/home-tab.html"*/'<ion-content>\n\n  HOME TAB\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/home-tab/home-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* Programs */]])
    ], HomeTab);
    return HomeTab;
}());

//# sourceMappingURL=home-tab.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationTab = /** @class */ (function () {
    function NotificationTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        console.log('Notification Tab');
    }
    NotificationTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'notification-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/notification-tab/notification-tab.html"*/'<ion-content>\n\n  NOTIFICATION TAB\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/notification-tab/notification-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* Programs */]])
    ], NotificationTab);
    return NotificationTab;
}());

//# sourceMappingURL=notification-tab.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileTab = /** @class */ (function () {
    function ProfileTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        console.log('Profile Tab');
    }
    ProfileTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/profile-tab/profile-tab.html"*/'<ion-content>\n\n  PROFILE TAB\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/profile-tab/profile-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* Programs */]])
    ], ProfileTab);
    return ProfileTab;
}());

//# sourceMappingURL=profile-tab.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabModule", function() { return HomeTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_tab__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeTabModule = /** @class */ (function () {
    function HomeTabModule() {
    }
    HomeTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_tab__["a" /* HomeTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home_tab__["a" /* HomeTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home_tab__["a" /* HomeTab */]
            ]
        })
    ], HomeTabModule);
    return HomeTabModule;
}());

//# sourceMappingURL=home-tab.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTabModule", function() { return NotificationTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_tab__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationTabModule = /** @class */ (function () {
    function NotificationTabModule() {
    }
    NotificationTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__notification_tab__["a" /* NotificationTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notification_tab__["a" /* NotificationTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__notification_tab__["a" /* NotificationTab */]
            ]
        })
    ], NotificationTabModule);
    return NotificationTabModule;
}());

//# sourceMappingURL=notification-tab.module.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabModule", function() { return ProfileTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_tab__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileTabModule = /** @class */ (function () {
    function ProfileTabModule() {
    }
    ProfileTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__profile_tab__["a" /* ProfileTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile_tab__["a" /* ProfileTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__profile_tab__["a" /* ProfileTab */]
            ]
        })
    ], ProfileTabModule);
    return ProfileTabModule;
}());

//# sourceMappingURL=profile-tab.module.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramAddPageModule", function() { return ProgramAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_create__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgramAddPageModule = /** @class */ (function () {
    function ProgramAddPageModule() {
    }
    ProgramAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__program_create__["a" /* ProgramAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__program_create__["a" /* ProgramAddPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__program_create__["a" /* ProgramAddPage */]
            ]
        })
    ], ProgramAddPageModule);
    return ProgramAddPageModule;
}());

//# sourceMappingURL=program-create.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDetailPageModule", function() { return ProgramDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_detail__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgramDetailPageModule = /** @class */ (function () {
    function ProgramDetailPageModule() {
    }
    ProgramDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__program_detail__["a" /* ProgramDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__program_detail__["a" /* ProgramDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__program_detail__["a" /* ProgramDetailPage */]
            ]
        })
    ], ProgramDetailPageModule);
    return ProgramDetailPageModule;
}());

//# sourceMappingURL=program-detail.module.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramEditPageModule", function() { return ProgramEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_update__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgramEditPageModule = /** @class */ (function () {
    function ProgramEditPageModule() {
    }
    ProgramEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__program_update__["a" /* ProgramEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__program_update__["a" /* ProgramEditPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__program_update__["a" /* ProgramEditPage */]
            ]
        })
    ], ProgramEditPageModule);
    return ProgramEditPageModule;
}());

//# sourceMappingURL=program-update.module.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsListPageModule", function() { return ProgramsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__programs_list__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgramsListPageModule = /** @class */ (function () {
    function ProgramsListPageModule() {
    }
    ProgramsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__programs_list__["a" /* ProgramsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__programs_list__["a" /* ProgramsListPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__programs_list__["a" /* ProgramsListPage */]
            ]
        })
    ], ProgramsListPageModule);
    return ProgramsListPageModule;
}());

//# sourceMappingURL=programs-list.module.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesTabModule", function() { return StatesTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_tab__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatesTabModule = /** @class */ (function () {
    function StatesTabModule() {
    }
    StatesTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__states_tab__["a" /* StatesTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__states_tab__["a" /* StatesTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__states_tab__["a" /* StatesTab */]
            ]
        })
    ], StatesTabModule);
    return StatesTabModule;
}());

//# sourceMappingURL=states-tab.module.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function() { return UserDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserDetailPageModule = /** @class */ (function () {
    function UserDetailPageModule() {
    }
    UserDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_detail__["a" /* UserDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_detail__["a" /* UserDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__user_detail__["a" /* UserDetailPage */]
            ]
        })
    ], UserDetailPageModule);
    return UserDetailPageModule;
}());

//# sourceMappingURL=user-detail.module.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_lists__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__users_lists__["a" /* UsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__users_lists__["a" /* UsersPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__users_lists__["a" /* UsersPage */]
            ]
        })
    ], UsersPageModule);
    return UsersPageModule;
}());

//# sourceMappingURL=users_lists.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdatePageModule", function() { return UserUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_update__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserUpdatePageModule = /** @class */ (function () {
    function UserUpdatePageModule() {
    }
    UserUpdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_update__["a" /* UserUpdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_update__["a" /* UserUpdatePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__user_update__["a" /* UserUpdatePage */]
            ]
        })
    ], UserUpdatePageModule);
    return UserUpdatePageModule;
}());

//# sourceMappingURL=user-update.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_tab_home_tab__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_tab_notification_tab__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_tab_profile_tab__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        this.home = __WEBPACK_IMPORTED_MODULE_4__home_tab_home_tab__["a" /* HomeTab */];
        this.notification = __WEBPACK_IMPORTED_MODULE_5__notification_tab_notification_tab__["a" /* NotificationTab */];
        this.profile = __WEBPACK_IMPORTED_MODULE_6__profile_tab_profile_tab__["a" /* ProfileTab */];
        console.log('Home');
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/home-page/home-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'ALOHA INDIA\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-tabs>\n    <ion-tab tabIcon="home" tabTitle="Home" [root]="home"></ion-tab>\n    <ion-tab tabIcon="notifications" tabTitle="Notification" [root]="notification"></ion-tab>\n    <ion-tab tabIcon="settings" tabTitle="Profile" [root]="profile"></ion-tab>\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/home-page/home-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* Programs */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(265);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number_ngx__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_page_home_page_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_tab_home_tab_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_notification_tab_notification_tab_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_tab_profile_tab_module__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_programs_list_programs_list_module__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_program_create_program_create_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_program_detail_program_detail_module__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_program_update_program_update_module__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_centers_page_centers_page_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_district_tab_district_tab_module__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_states_tab_states_tab_module__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_branches_tab_branches_tab_module__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_area_tab_area_tab_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_users_lists_users_lists_module__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_user_add_signup_module__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_user_detail_user_detail_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_user_update_user_update_module__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































// Module imported here and bottom
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_12__providers__["f" /* Settings */](storage, {
        option1: true,
        option2: 'AKASH K A',
        option3: '3',
        option4: 'Hello World!'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_page_home_page_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_tab_home_tab_module__["HomeTabModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_profile_tab_profile_tab_module__["ProfileTabModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_notification_tab_notification_tab_module__["NotificationTabModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_program_create_program_create_module__["ProgramAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_program_detail_program_detail_module__["ProgramDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_program_update_program_update_module__["ProgramEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_programs_list_programs_list_module__["ProgramsListPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_users_lists_users_lists_module__["UsersPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_user_add_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_user_detail_user_detail_module__["UserDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_user_update_user_update_module__["UserUpdatePageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_centers_page_centers_page_module__["CentersPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_district_tab_district_tab_module__["DistrictTabModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_states_tab_states_tab_module__["StatesTabModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_branches_tab_branches_tab_module__["BranchesTabModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_area_tab_area_tab_module__["AreaTabModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/area-tab/area-tab.module#AreaTabModule', name: 'AreaTab', segment: 'area-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/branches-tab/branches-tab.module#BranchesTabModule', name: 'BranchesTab', segment: 'branches-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/centers-page/centers-page.module#CentersPageModule', name: 'CentersPage', segment: 'centers-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/district-tab/district-tab.module#DistrictTabModule', name: 'DistrictTab', segment: 'district-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followup-page/followup-page.module#FollowupPageModule', name: 'FollowupPage', segment: 'followup-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followupcreate-tab/followupcreate-tab.module#FollowupCreateTabModule', name: 'FollowupCreateTab', segment: 'followupcreate-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followupview-tab/followupview-tab.module#FollowupViewTabModule', name: 'FollowupViewTab', segment: 'followupview-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-create/franchiseenquiry-create.module#FranchiseEnquiryAddPageModule', name: 'FranchiseEnquiryAddPage', segment: 'franchiseenquiry-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-list/franchiseenquiry-list.module#FranchiseEnquiryListPageModule', name: 'FranchiseEnquiryListPage', segment: 'franchiseenquiry-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-view/franchiseenquiry-view.module#FranchiseEnquiryViewPageModule', name: 'FranchiseEnquiryViewPage', segment: 'franchiseenquiry-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-page/home-page.module#HomePageModule', name: 'HomePage', segment: 'home-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tab/home-tab.module#HomeTabModule', name: 'HomeTab', segment: 'home-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructorenquiry-create/instructorenquiry-create.module#InstructorEnquiryAddPageModule', name: 'InstructorEnquiryAddPage', segment: 'instructorenquiry-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructorenquiry-list/instructorenquiry-list.module#InstructorEnquiryListPageModule', name: 'InstructorEnquiryListPage', segment: 'instructorenquiry-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-tab/notification-tab.module#NotificationTabModule', name: 'NotificationTab', segment: 'notification-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-tab/profile-tab.module#ProfileTabModule', name: 'ProfileTab', segment: 'profile-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructorenquiry-update/instructorenquiry-update.module#InstructorEnquiryEditPageModule', name: 'InstructorEnquiryEditPage', segment: 'instructorenquiry-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program -create/program-create.module#ProgramAddPageModule', name: 'ProgramAddPage', segment: 'program-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program -detail/program-detail.module#ProgramDetailPageModule', name: 'ProgramDetailPage', segment: 'program-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program -update/program-update.module#ProgramEditPageModule', name: 'ProgramEditPage', segment: 'program-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programs-list/programs-list.module#ProgramsListPageModule', name: 'ProgramsListPage', segment: 'programs-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/states-tab/states-tab.module#StatesTabModule', name: 'StatesTab', segment: 'states-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-detail/user-detail.module#UserDetailPageModule', name: 'UserDetailPage', segment: 'user-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-add/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users-lists/users_lists.module#UsersPageModule', name: 'UsersPage', segment: 'users_lists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-update/user-update.module#UserUpdatePageModule', name: 'UserUpdatePage', segment: 'user-update', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number_ngx__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["h" /* User */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["e" /* Programs */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["d" /* Instructor */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["b" /* Center */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["c" /* Franchise */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["g" /* Students */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__providers__["f" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'http://localhost:8080';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = /** @class */ (function () {
    function User(api, storage, http) {
        this.api = api;
        this.storage = storage;
        this.http = http;
    }
    User.prototype.checkAuthentication = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Authorization', token);
            _this.http.get(_this.api.url + '/api/auth/protected', { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('api/auth/login', accountInfo).share();
        seq.subscribe(function (res) {
            _this._loggedIn(res);
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.signup = function (accountInfo) {
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            if (res.status == 'success') {
                //   this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.users_list = function () {
        var seq = this.api.get('api/auth/usersList').share();
        seq.subscribe(function (res) {
            return res;
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.update_user = function (accountInfo) {
        var seq = this.api.put('updateUser', accountInfo).share();
        seq.subscribe(function (res) {
            if (res.status == 'success') {
                //   this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    User.prototype.logout = function () {
        this._user = null;
        this.storage.set('token', '');
        this.storage.set('user', {});
    };
    User.prototype._loggedIn = function (resp) {
        this.storage.set('token', resp.token);
        this.storage.set('user', resp.user).then(function (res) { });
    };
    User.prototype.profile_update = function () {
        var profileDetails = [
            {
                full_name: "Sibabrat Swain",
                about: "I am working in NTT . ",
                profile_image: "asset/img/src/img.jpg",
                followers: 230,
                following: 170,
                user_name: "sibabratswain",
                password: 'July 8, 1954',
                email: 'sibabrat.swain@constacloud.net',
                state: 'Odisha',
            },
        ];
        return profileDetails;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Programs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Programs = /** @class */ (function () {
    function Programs(api) {
        this.api = api;
    }
    Programs.prototype.query = function (params) {
        return this.api.get('api/programmes', params);
    };
    Programs.prototype.add = function (program) {
        return this.api.post('api/programmes', program);
    };
    Programs.prototype.update = function (program) {
        return this.api.put('api/programmes', program);
    };
    Programs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Programs);
    return Programs;
}());

//# sourceMappingURL=programs.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Center; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Center = /** @class */ (function () {
    function Center(api) {
        this.api = api;
    }
    Center.prototype.query = function (params) {
        return this.api.get('api/centers', params);
    };
    Center.prototype.add = function (center) {
        return this.api.post('api/centers', center);
    };
    Center.prototype.update = function (center) {
        return this.api.put('api/centers', center);
    };
    Center = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Center);
    return Center;
}());

//# sourceMappingURL=center.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Franchise; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Franchise = /** @class */ (function () {
    function Franchise(api) {
        this.api = api;
    }
    Franchise.prototype.query = function (params) {
        return this.api.get('api/franchise', params);
    };
    Franchise.prototype.add = function (franchise) {
        return this.api.post('api/franchise', franchise);
    };
    Franchise.prototype.update = function (franchise) {
        return this.api.put('api/franchise', franchise);
    };
    Franchise = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Franchise);
    return Franchise;
}());

//# sourceMappingURL=franchise.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Instructor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Instructor = /** @class */ (function () {
    function Instructor(api) {
        this.api = api;
    }
    Instructor.prototype.query = function (params) {
        return this.api.get('instructor', params);
    };
    Instructor.prototype.add = function (instructor) {
        return this.api.post('instructor', instructor);
    };
    Instructor.prototype.update = function (instructor) {
        return this.api.put('instructor', instructor);
    };
    Instructor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Instructor);
    return Instructor;
}());

//# sourceMappingURL=instructor.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Students; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Students = /** @class */ (function () {
    function Students(api) {
        this.api = api;
    }
    Students.prototype.query = function (params) {
        return this.api.get('students', params);
    };
    Students.prototype.add = function (students) {
        return this.api.post('students', students);
    };
    Students.prototype.update = function (students) {
        return this.api.put('students', students);
    };
    Students = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Students);
    return Students;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_tab_area_tab__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__branches_tab_branches_tab__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__district_tab_district_tab__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__states_tab_states_tab__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CentersPage = /** @class */ (function () {
    function CentersPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.view = __WEBPACK_IMPORTED_MODULE_4__branches_tab_branches_tab__["a" /* BranchesTab */];
        this.states = __WEBPACK_IMPORTED_MODULE_6__states_tab_states_tab__["a" /* StatesTab */];
        this.districts = __WEBPACK_IMPORTED_MODULE_5__district_tab_district_tab__["a" /* DistrictTab */];
        this.centers = __WEBPACK_IMPORTED_MODULE_3__area_tab_area_tab__["a" /* AreaTab */];
        console.log("States Page");
    }
    CentersPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Information",
            subTitle: "\n          <br/>\n          Click on icons or Name to open Accordion. <br/> <br/>\n          &nbsp;  Green: Active  <br/> \n          &nbsp;  Red: Inactive  <br/> <br/>\n          Click on Edit to edit. <br/>\n        ",
            buttons: ["OK"]
        });
        alert.present();
    };
    CentersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "centers-page",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/centers-page/centers-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'State / Centers Master\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle (click)="showAlert()">\n        <a class="icon-circle">\n          <ion-icon name="information"></ion-icon>\n        </a>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-tabs tabsPlacement="top">\n    <ion-tab tabTitle="View" [root]="view"></ion-tab>\n    <ion-tab tabTitle="States" [root]="states"></ion-tab>\n    <ion-tab tabTitle="Districts" [root]="districts"></ion-tab>\n    <ion-tab tabTitle="Centers" [root]="centers"></ion-tab>\n  </ion-tabs>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/centers-page/centers-page.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object])
    ], CentersPage);
    return CentersPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=centers-page.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProgramAddPage = /** @class */ (function () {
    function ProgramAddPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.registration_kit = [];
        this.programs.query().subscribe(function (res) {
            _this.programList = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.form = formBuilder.group({
            program_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program_code: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            no_of_sessions: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            months_per_level: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            total_levels: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            active: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            registration_kit: []
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ProgramAddPage.prototype.ionViewDidLoad = function () {
    };
    ProgramAddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ProgramAddPage.prototype.createProgram = function () {
        var _this = this;
        for (var k = 0; k < this.registration_kit.length; k++) {
            if (this.registration_kit[k] == '') {
                this.registration_kit.splice(k, 1);
                k--;
            }
        }
        this.form.controls['registration_kit'].setValue(this.registration_kit);
        this.programs.add(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Program. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    ProgramAddPage.prototype.addRegisterationKit = function () {
        this.registration_kit.push('');
    };
    ProgramAddPage.prototype.removeRegisterationKit = function (i) {
        this.registration_kit.splice(i, 1);
    };
    ProgramAddPage.prototype.onRegisterationCodeChange = function (ev) {
        var program = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.programList, function (item) {
            return (item.program_code.toUpperCase().indexOf(ev.value.toUpperCase()) >= 0);
        });
        this.isDuplicate = program.length > 0;
    };
    ProgramAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'program-create',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/program -create/program-create.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'New Program\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]="form">\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>{{ \'Program Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="program_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'Program Code\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="program_code"\n          (ionChange)="onRegisterationCodeChange($event)"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'No Of Sessions\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="no_of_sessions"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'Months Per Level\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="months_per_level"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'Total Levels\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="total_levels"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>{{ \'Active\' | translate }} </ion-label>\n        <ion-toggle color="primary" formControlName="active"></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n  </form>\n\n  <ion-grid>\n    <ion-row>\n      <ion-title>{{ \'Registration Kit:\' | translate }}</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only (click)="addRegisterationKit()" color="success">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="looping-reg">\n    <ion-row *ngFor="let item of registration_kit; let i = index">\n      <ion-input type="text" placeholder="Kit {{i}}" [(ngModel)]="registration_kit[i]" name="kit_{{i}}"></ion-input>\n        <ion-buttons right>\n          <button ion-button icon-only (click)="removeRegisterationKit(i)" color="danger">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-row>\n  </ion-grid>\n\n  <p class="error-validation-msg" *ngIf="isDuplicate"> There already exists a Program with same Code. Please change\n    Code. </p>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="createProgram()" [disabled]="!isReadyToSave || isDuplicate">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/program -create/program-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]])
    ], ProgramAddPage);
    return ProgramAddPage;
}());

//# sourceMappingURL=program-create.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProgramDetailPage = /** @class */ (function () {
    function ProgramDetailPage(navCtrl, viewCtrl, formBuilder, camera, programs, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.navParams = navParams;
        this.registration_kit = [];
        var program = navParams.get('program');
        this.registration_kit = program.registration_kit;
        this.form = formBuilder.group({
            program_name: [program.program_name],
            program_code: [program.program_code],
            no_of_sessions: [program.no_of_sessions],
            months_per_level: [program.months_per_level],
            total_levels: [program.total_levels],
            registration_kit: [program.registration_kit],
            active: [program.active]
        });
    }
    ProgramDetailPage.prototype.ionViewDidLoad = function () {
    };
    ProgramDetailPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ProgramDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'program-detail',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/program -detail/program-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'View Program\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list class="details-info program-details-info">\n      <ion-item>\n        <ion-label>{{ \'Program Name:\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="program_name" disabled="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'Program Code:\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="program_code" disabled="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'No Of Sessions:\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="no_of_sessions"\n          disabled="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'Months Per Level:\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="months_per_level"\n          disabled="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'Total Levels:\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="total_levels" disabled="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'Active:\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="active" disabled="true"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <ion-item>\n    <h2> {{ \'Registeration Kit:\' | translate }} </h2>\n  </ion-item>\n\n  <ion-item *ngFor="let item of registration_kit; let i = index">\n    <ion-input type="text" placeholder="Kit {{i}}" [(ngModel)]="registration_kit[i]" name="kit_{{i}}" disabled="true"></ion-input>\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/program -detail/program-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], ProgramDetailPage);
    return ProgramDetailPage;
}());

//# sourceMappingURL=program-detail.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProgramEditPage = /** @class */ (function () {
    function ProgramEditPage(navCtrl, viewCtrl, formBuilder, camera, programs, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.programs = programs;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.registration_kit = [];
        this.isDuplicate = false;
        this.programs.query().subscribe(function (res) {
            _this.programList = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        var program = navParams.get('program');
        this.registration_kit = program.registration_kit;
        this.form = formBuilder.group({
            _id: [program._id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            program_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program_code: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            no_of_sessions: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            months_per_level: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            total_levels: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            active: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            registration_kit: []
        });
        this.form.controls['_id'].setValue(program._id);
        this.form.controls['program_name'].setValue(program.program_name);
        this.form.controls['program_code'].setValue(program.program_code);
        this.form.controls['no_of_sessions'].setValue(program.no_of_sessions);
        this.form.controls['months_per_level'].setValue(program.months_per_level);
        this.form.controls['total_levels'].setValue(program.total_levels);
        this.form.controls['active'].setValue(program.active);
        // Watch the form for changes
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ProgramEditPage.prototype.ionViewDidLoad = function () {
    };
    ProgramEditPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ProgramEditPage.prototype.addRegisterationKit = function () {
        this.registration_kit.push('');
    };
    ProgramEditPage.prototype.removeRegisterationKit = function (i) {
        this.registration_kit.splice(i, 1);
    };
    ProgramEditPage.prototype.createProgram = function () {
        var _this = this;
        for (var k = 0; k < this.registration_kit.length; k++) {
            if (this.registration_kit[k] == '') {
                this.registration_kit.splice(k, 1);
                k--;
            }
        }
        this.form.controls['registration_kit'].setValue(this.registration_kit);
        this.programs.update(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in updating the Program. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    ProgramEditPage.prototype.onRegisterationCodeChange = function (ev) {
        var program = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](this.programList, function (item) {
            return (item.program_code.toUpperCase().indexOf(ev.value.toUpperCase()) >= 0);
        });
        if (program.length)
            this.isDuplicate = true;
    };
    ProgramEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'program-update',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/program -update/program-update.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Update Program\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>{{ \'Program Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" placeholder="{{ \'Program Name\' | translate }}" formControlName="program_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'Program Code:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Program Code\' | translate }}" formControlName="program_code" disabled="true"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'No Of Sessions\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" placeholder="{{ \'No Of Sessions\' | translate }}" formControlName="no_of_sessions"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'Months Per Level\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" placeholder="{{ \'Months Per Level\' | translate }}" formControlName="months_per_level"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{ \'Total Levels\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" placeholder="{{ \'Total Levels\' | translate }}" formControlName="total_levels"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n        <ion-toggle color="primary" formControlName="active"></ion-toggle>\n      </ion-item>\n    </ion-list>\n\n  </form>\n\n  <ion-grid>\n    <ion-row>\n      <ion-title>{{ \'Registration Kit:\' | translate }}</ion-title>\n      <ion-buttons right>\n        <button ion-button icon-only (click)="addRegisterationKit()" color="success">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="looping-reg">\n    <ion-row *ngFor="let item of registration_kit; let i = index">\n      <ion-input type="text" placeholder="Kit {{i}}" [(ngModel)]="registration_kit[i]" name="kit_{{i}}"></ion-input>\n        <ion-buttons right>\n          <button ion-button icon-only (click)="removeRegisterationKit(i)" color="danger">\n            <ion-icon name="close"></ion-icon>\n          </button>\n        </ion-buttons>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="createProgram()" [disabled]="!isReadyToSave">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/program -update/program-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]])
    ], ProgramEditPage);
    return ProgramEditPage;
}());

//# sourceMappingURL=program-update.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramsListPage = /** @class */ (function () {
    function ProgramsListPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        this.input_search = "";
    }
    ProgramsListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.programs.query().subscribe(function (res) {
            _this.currentItems = res;
            _this.tempCurrentItems = res;
        }, function (err) {
            console.error("ERROR", err);
        });
    };
    ProgramsListPage.prototype.getItems = function (ev) {
        var val = this.input_search.toUpperCase();
        if (!val || !val.trim()) {
            this.currentItems = this.tempCurrentItems;
            return;
        }
        this.currentItems = this.tempCurrentItems.filter(function (item) {
            return (item.program_name.toUpperCase().indexOf(val) >= 0 ||
                item.program_code.toUpperCase().indexOf(val) >= 0);
        });
    };
    ProgramsListPage.prototype.viewProgram = function (program, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("ProgramDetailPage", {
            program: program
        });
    };
    ProgramsListPage.prototype.addProgram = function () {
        this.navCtrl.push("ProgramAddPage");
    };
    ProgramsListPage.prototype.editProgram = function (program, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("ProgramEditPage", {
            program: program
        });
    };
    ProgramsListPage.prototype.pressEvent = function (ev) {
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please slide to get the options .",
            duration: 2000,
            position: "top"
        });
        toast.present();
    };
    ProgramsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "programs-lists",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/programs-list/programs-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Programs Lists\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addProgram()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" [(ngModel)]="input_search" placeholder="{{ \'Search Programs\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <h2> {{item.program_name}} </h2>\n        <h3> <b> Code: </b> {{item.program_code}}</h3>\n        <p> <b> No Of Sessions: </b> {{item.no_of_sessions}} </p>\n        <p> <b> Months Per Level: </b> {{item.months_per_level}} </p>\n        <p> <b> Total Levels: </b> {{item.total_levels}} </p>\n      </ion-item>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="viewProgram(item, slidingItem)">\n          <ion-icon name="ios-more"></ion-icon> View\n        </button>\n        <button ion-button color="warning" icon-start (click)="editProgram(item, slidingItem)">\n          <ion-icon name="create"></ion-icon> Edit\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/programs-list/programs-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* Programs */]])
    ], ProgramsListPage);
    return ProgramsListPage;
}());

//# sourceMappingURL=programs-list.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailPage = /** @class */ (function () {
    function UserDetailPage(navCtrl, user, toastCtrl, translateService, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.account = navParams.get('user');
    }
    UserDetailPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    UserDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-detail',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/user-detail/user-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'User Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Full Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'User Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_name" name="user_name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Phone No\' | translate }}</ion-label>\n        <ion-input type="number" [(ngModel)]="account.phone_no" name="phone_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Email\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Confirm Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.confirm_password" name="confirm_password" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="account.dob" name="dob" disabled="true"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Gender\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.gender" name="gender" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Role\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.role" name="role" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'admin\'">\n        <ion-label fixed>{{ \'State\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_state" name="user_state" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="account.role == \'district\'">\n        <ion-label fixed>{{ \'District\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_district" name="user_district" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="account.role == \'unit\'">\n        <ion-label fixed>{{ \'Unit / Center\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_center" name="user_center" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Active\' | translate }}</ion-label>\n        <ion-toggle color="primary" [(ngModel)]="account.active" name="active" disabled="true"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/user-detail/user-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */]])
    ], UserDetailPage);
    return UserDetailPage;
}());

//# sourceMappingURL=user-detail.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, center, toastCtrl, translateService, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.center = center;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.viewCtrl = viewCtrl;
        this.account = {
            name: '',
            user_name: '',
            email: '',
            password: '',
            confirm_password: '',
            phone_no: '',
            gender: 'male',
            role: '',
            dob: new Date(),
            profile_pic: '',
            user_state: '',
            user_district: '',
            user_center: '',
            active: true
        };
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.isPasswordMatch = false;
        this.statesList = [];
        this.districtsList = [];
        this.centersList = [];
        this.user.users_list().subscribe(function (res) {
            _this.usersList = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.center.query().subscribe(function (res) {
            _this.allBranches = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        this.user.signup(this.account).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the User. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SignupPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage.prototype.onChange = function (ev) {
        this.isReadyToSave = (this.account.name != '' && this.account.user_name != '' && this.account.email != '' &&
            this.account.password != '' && this.account.confirm_password != '' && this.account.phone_no != '' &&
            this.account.gender != '' && this.account.role != '' &&
            (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.password)) &&
            (/^\d+$/.test(this.account.phone_no)) && this.account.phone_no.length == 10);
        this.isPasswordMatch = (this.account.password == this.account.confirm_password);
        // let program = _.filter(this.usersList, function (item) {
        //   return (item.user_name.toUpperCase().indexOf(this.account.user_name.toUpperCase()) >= 0)
        // });
        // this.isDuplicate = (program.length > 0);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/user-add/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Create User\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Full Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'User Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_name" name="user_name" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Phone No\' | translate }}</ion-label>\n        <ion-input type="number" [(ngModel)]="account.phone_no" name="phone_no" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Email\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Confirm Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.confirm_password" name="confirm_password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="account.dob" name="dob" (ionChange)="onChange($event)"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Gender\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.gender" name="gender" (ionChange)="onChange($event)">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Role\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.role" name="role" (ionChange)="onChange($event)">\n          <ion-option value="admin">Admin</ion-option>\n          <ion-option value="master">Master Franchise</ion-option>\n          <ion-option value="district">District Franchise</ion-option>\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="instructor">Instructor</ion-option>\n          <ion-option value="student">Student</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'admin\'">\n        <ion-label fixed>{{ \'State\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.user_state" name="user_state" (ionChange)="onChange($event)">\n          <ion-option *ngFor="let name of statesList" [value]="name.state_code">{{name.state_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role == \'district\'">\n        <ion-label fixed>{{ \'District\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.user_district" name="user_district" (ionChange)="onChange($event)">\n          <ion-option *ngFor="let name of districtsList" [value]="name.district_code">{{name.district_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role == \'unit\'">\n        <ion-label fixed>{{ \'Unit / Center\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.user_center" name="user_center" (ionChange)="onChange($event)">\n          <ion-option *ngFor="let name of centersList" [value]="name.center_code">{{name.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n        <ion-toggle color="primary" [(ngModel)]="account.active" name="active" (ionChange)="onChange($event)"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (ngSubmit)="doSignup()" disabled="!isReadyToSave || isDuplicate || !isPasswordMatch">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- profile_pic: \'\', -->'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/user-add/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number_ngx__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersPage = /** @class */ (function () {
    function UsersPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, users, callNumber) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.users = users;
        this.callNumber = callNumber;
        this.users.users_list().subscribe(function (res) {
            _this.currentItems = res;
            _this.allItems = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    UsersPage.prototype.getItems = function (ev) {
        var val = ev.target.value.toUpperCase();
        if (!val || !val.trim()) {
            this.currentItems = this.allItems;
            return;
        }
        this.currentItems = this.allItems.filter(function (item) {
            return (item.user_name.toUpperCase().indexOf(ev.data) >= 0 ||
                item.name.toUpperCase().indexOf(ev.data) >= 0 ||
                item.email_id.toUpperCase().indexOf(ev.data) >= 0);
        });
    };
    UsersPage.prototype.openItem = function (item) {
        this.navCtrl.push('UserDetailPage', {
            user: item
        });
    };
    UsersPage.prototype.addItem = function () {
        this.navCtrl.push('SignupPage');
    };
    UsersPage.prototype.pressEvent = function (ev) {
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please slide to get the options .",
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    UsersPage.prototype.editItem = function (item, slidingItem) {
        this.navCtrl.push('UserEditPage', {
            user: item
        });
    };
    UsersPage.prototype.mailUser = function (user) {
        window.open("mailto:" + user.email, '_system');
    };
    UsersPage.prototype.callUser = function (user) {
        this.callNumber.callNumber(user.phone_no, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'users_lists',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/users-lists/users_lists.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Users Lists\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'Search Users\' | translate }}"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding class="cssForRoundSLidingItems" *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)">\n        <ion-avatar item-start>\n          <img src={{item.profile_pic}}>\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <h3>{{item.role}}</h3>\n        <p *ngIf="item.user_state != \'\'"> <b> State: </b> {{item.user_state}}</p>\n        <p *ngIf="item.user_district != \'\'"> <b> District: </b> {{item.user_district}}</p>\n        <p *ngIf="item.user_center != \'\'"> <b> Center: </b> {{item.user_center}}</p>\n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="dark" (click)="mailUser(item)" icon-start>\n          <ion-icon name="text"></ion-icon>\n        </button>\n        <button ion-button color="dark" (click)="callUser(item)" icon-start>\n          <ion-icon name="call"></ion-icon>\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="right">\n        <button ion-button color="dark" (click)="openItem(item)" icon-start>\n          <ion-icon name="ios-more"></ion-icon>\n        </button>\n        <button ion-button color="dark" (click)="editItem(item,slidingItem)" icon-start>\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/users-lists/users_lists.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number_ngx__["a" /* CallNumber */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users_lists.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserUpdatePage = /** @class */ (function () {
    function UserUpdatePage(navCtrl, user, toastCtrl, translateService, navParams, viewCtrl, center) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.center = center;
        this.account = {
            _id: '',
            name: '',
            user_name: '',
            email: '',
            password: '',
            confirm_password: '',
            phone_no: '',
            gender: 'male',
            role: '',
            dob: new Date(),
            profile_pic: '',
            user_state: '',
            user_district: '',
            user_center: '',
            active: true
        };
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.isPasswordMatch = false;
        this.account = navParams.get('user');
        this.usersList = this.user.users_list();
        this.allBranches = this.center.query();
        // TO-DO: Divide branches
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    UserUpdatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    UserUpdatePage.prototype.doSignup = function () {
        var _this = this;
        this.user.update_user(this.account).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in updating the User. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    UserUpdatePage.prototype.onChange = function (ev) {
        this.isReadyToSave = (this.account.name != '' && this.account.email != '' && this.account.phone_no != '' && this.account.gender != '' && this.account.role != '' &&
            (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.password)) && (/^\d+$/.test(this.account.phone_no)) && this.account.phone_no.length == 10);
    };
    UserUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-update',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/user-update/user-update.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Update User\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Full Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'User Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_name" name="user_name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Phone No\' | translate }}</ion-label>\n        <ion-input type="number" [(ngModel)]="account.phone_no" name="phone_no" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Email\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" disabled="true"></ion-input>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label fixed>{{ \'Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Confirm Password\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.confirm_password" name="confirm_password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label fixed>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="account.dob" name="dob" (ionChange)="onChange($event)"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Gender\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.gender" name="gender" (ionChange)="onChange($event)">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Role\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.role" name="role" (ionChange)="onChange($event)">\n          <ion-option value="admin">Admin</ion-option>\n          <ion-option value="master">Master Franchise</ion-option>\n          <ion-option value="district">District Franchise</ion-option>\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="instructor">Instructor</ion-option>\n          <ion-option value="student">Student</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'admin\'">\n        <ion-label fixed>{{ \'State\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.user_state" name="user_state" (ionChange)="onChange($event)">\n          <ion-option *ngFor="let name of statesList" [value]="name.state_code">{{name.state_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role == \'district\'">\n        <ion-label fixed>{{ \'District\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.user_district" name="user_district" (ionChange)="onChange($event)">\n          <ion-option *ngFor="let name of districtsList" [value]="name.district_code">{{name.district_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role == \'unit\'">\n        <ion-label fixed>{{ \'Unit / Center\' | translate }}</ion-label>\n        <ion-select [(ngModel)]="account.user_center" name="user_center" (ionChange)="onChange($event)">\n          <ion-option *ngFor="let name of centersList" [value]="name.center_code">{{name.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n        <ion-toggle color="primary" [(ngModel)]="account.active" name="active" (ionChange)="onChange($event)"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (ngSubmit)="doSignup()" disabled="!isReadyToSave || isDuplicate || !isPasswordMatch">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/user-update/user-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */]])
    ], UserUpdatePage);
    return UserUpdatePage;
}());

//# sourceMappingURL=user-update.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
        this.user = {
            name: '',
            role: '',
            profile_pic: ''
        };
        this.pages = [
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Home', component: 'HomePage' },
            { title: 'Programs Master', component: 'ProgramsListPage' },
            { title: 'State / Centers Master', component: 'CentersPage' },
            { title: 'Users master', component: 'UsersPage' },
        ];
        platform.ready().then(function () {
            _this.splashScreen.hide();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#1ABC9C');
        });
        this.initTranslate();
        this.storage.get('user').then(function (value) {
            _this.user = value;
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        this.storage.get('user').then(function (value) {
            _this.user = value;
        });
        if (page.component == "WelcomePage") {
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
                _this.nav.setRoot(page.component);
                _this.activePage = "random";
                var toast = _this.toastCtrl.create({
                    message: "You have successfully logged out",
                    duration: 2000,
                    position: 'top'
                });
                toast.present();
            }, 2000);
        }
        else {
            this.nav.setRoot(page.component);
            this.activePage = page;
            console.log(page.component);
        }
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'side-main-menu',
            template: "<ion-menu [content]=\"content\">\n    <ion-content class=\"sideMenuIoncContent\">\n\n      <ion-list class=\"headerMAin\">\n          <ion-item class=\"headerBackground\">\n              <ion-list class=\"logoImage\" menuClose (click)=\"openPage(pages[4])\">\n                  <div class=\"circle-pic\" text-center #profilePic \n                    [style.background-image]=\"'url(' + user.profile_pic + ')'\">\n                  </div>\n              </ion-list>\n              <br/>\n              <h2 class=\"userName\">Hi {{user.name}}</h2>\n              <h3 class=\"userDetails\">{{user.role}}</h3>\n          </ion-item>\n      </ion-list>\n\n      <ion-list>\n          <button menuClose ion-item no-lines style=\"border-top: 0.55px solid white;\" [class.activeHIghlight]=\"checkActive(pages[1])\"\n                (click)=\"openPage(pages[1])\" class=\"buttonSIdeBAr\">\n              <ion-icon name=\"home\" class=\"sidebarCss\"></ion-icon>\n              Home\n          </button>\n          <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[2])\"\n              (click)=\"openPage(pages[2])\" class=\"buttonSIdeBAr\">\n              <ion-icon name=\"bookmarks\" class=\"sidebarCss\"></ion-icon>\n              Programs Master\n          </button>\n          <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[3])\"\n              (click)=\"openPage(pages[3])\" class=\"buttonSIdeBAr\">\n              <ion-icon name=\"swap\" class=\"sidebarCss\"></ion-icon>\n              State / Centers Master\n          </button>\n          <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[4])\" (click)=\"openPage(pages[4])\"\n              class=\"buttonSIdeBAr\">\n              <ion-icon name=\"person\" class=\"sidebarCss\"></ion-icon>\n              Users master\n          </button>\n          <!-- <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[4])\" (click)=\"openPage(pages[4])\"\n              class=\"buttonSIdeBAr\">\n              <ion-icon ios=\"ios-notifications-outline\" class=\"sidebarCss\" md=\"ios-notifications-outline\"></ion-icon>\n              Franchise Enquiry\n          </button>\n          <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[5])\" (click)=\"openPage(pages[5])\"\n              class=\"buttonSIdeBAr\">\n              <ion-icon ios=\"ios-notifications-outline\" class=\"sidebarCss\" md=\"ios-notifications-outline\"></ion-icon>\n              Instructor Enquiry\n          </button>\n          <button menuClose ion-item no-lines [class.activeHIghlight]=\"checkActive(pages[6])\" (click)=\"openPage(pages[6])\"\n              class=\"buttonSIdeBAr\">\n              <ion-icon ios=\"ios-notifications-outline\" class=\"sidebarCss\" md=\"ios-notifications-outline\"></ion-icon>\n              Student Enquiry\n          </button> -->\n          <button menuClose no-lines ion-item [class.activeHIghlight]=\"checkActive(pages[0])\"\n              (click)=\"openPage(pages[0])\" class=\"buttonSIdeBAr\">\n              <ion-icon class=\"sidebarCss\" name=\"power\"></ion-icon>\n              Logout\n          </button>\n\n      </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["f" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* unused harmony export MainPage */
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'WelcomePage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'HomePage';
// The initial root pages for our tabs (remove if not using tabs)
// export const Tab1Root = 'ListMasterPage';
// export const Tab2Root = 'SearchPage';
// export const Tab3Root = 'SettingsPage';
//# sourceMappingURL=index.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.js.map