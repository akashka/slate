webpackJsonp([3],{

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/area-edit/area-edit.module": [
		247
	],
	"../pages/area-tab/area-tab.module": [
		248
	],
	"../pages/branches-tab/branches-tab.module": [
		250
	],
	"../pages/centers-page/centers-page.module": [
		252
	],
	"../pages/coursemapping/coursemapping.module": [
		255
	],
	"../pages/district-edit/district-edit.module": [
		270
	],
	"../pages/district-tab/district-tab.module": [
		256
	],
	"../pages/followup-page/followup-page.module": [
		802,
		1
	],
	"../pages/followupcreate-tab/followupcreate-tab.module": [
		257
	],
	"../pages/followupview-tab/followupview-tab.module": [
		258
	],
	"../pages/franchiseenquiry-confirm/franchiseenquiry-confirm.module": [
		259
	],
	"../pages/franchiseenquiry-create/franchiseenquiry-create.module": [
		260
	],
	"../pages/franchiseenquiry-edit/franchiseenquiry-edit.module": [
		261
	],
	"../pages/franchiseenquiry-list/franchiseenquiry-list.module": [
		262
	],
	"../pages/franchiseenquiry-view/franchiseenquiry-view.module": [
		263
	],
	"../pages/home-page/home-page.module": [
		264
	],
	"../pages/home-tab/home-tab.module": [
		269
	],
	"../pages/instructorenquiry-create/instructorenquiry-create.module": [
		389
	],
	"../pages/instructorenquiry-list/instructorenquiry-list.module": [
		271
	],
	"../pages/instructorenquiry-update/instructorenquiry-update.module": [
		272
	],
	"../pages/instructorenquiry-view/instructorenquiry-view.module": [
		273
	],
	"../pages/notification-tab/notification-tab.module": [
		274
	],
	"../pages/online-create/online-create.module": [
		277
	],
	"../pages/online-report/online-report.module": [
		275
	],
	"../pages/online-view/online-view.module": [
		364
	],
	"../pages/payment-integration/payment-integration.module": [
		388
	],
	"../pages/pokart-tab/pokart-tab.module": [
		365
	],
	"../pages/popayment-tab/popayment-tab.module": [
		367
	],
	"../pages/poshop-tab/poshop-tab.module": [
		369
	],
	"../pages/postorder-create/postorder-create.module": [
		371
	],
	"../pages/postorder-list/postorder-list.module": [
		372
	],
	"../pages/profile-tab/profile-tab.module": [
		373
	],
	"../pages/program -create/program-create.module": [
		374
	],
	"../pages/program -detail/program-detail.module": [
		375
	],
	"../pages/program -update/program-update.module": [
		376
	],
	"../pages/programs-list/programs-list.module": [
		377
	],
	"../pages/states-edit/states-edit.module": [
		378
	],
	"../pages/states-tab/states-tab.module": [
		379
	],
	"../pages/studentenquiry-confirm/studentenquiry-confirm.module": [
		803,
		0
	],
	"../pages/studentenquiry-create/studentenquiry-create.module": [
		380
	],
	"../pages/studentenquiry-list/studentenquiry-list.module": [
		381
	],
	"../pages/studentenquiry-update/studentenquiry-update.module": [
		382
	],
	"../pages/studentenquiry-view/studentenquiry-view.module": [
		383
	],
	"../pages/user-add/signup.module": [
		384
	],
	"../pages/user-detail/user-detail.module": [
		385
	],
	"../pages/user-update/user-update.module": [
		386
	],
	"../pages/users-lists/users_lists.module": [
		387
	],
	"../pages/welcome/welcome.module": [
		804,
		2
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
webpackAsyncContext.id = 246;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaEditModule", function() { return AreaEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_edit__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AreaEditModule = /** @class */ (function () {
    function AreaEditModule() {
    }
    AreaEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__area_edit__["a" /* AreaEdit */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__area_edit__["a" /* AreaEdit */]), __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()],
            exports: [__WEBPACK_IMPORTED_MODULE_3__area_edit__["a" /* AreaEdit */]]
        })
    ], AreaEditModule);
    return AreaEditModule;
}());

//# sourceMappingURL=area-edit.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaTabModule", function() { return AreaTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_tab__ = __webpack_require__(249);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__area_tab__["a" /* AreaTab */]),
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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
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
    function AreaTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
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
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.form = formBuilder.group({
            center_id: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_type: ["unit"],
            center_parent: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            active: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            programs: [[], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
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
            var toast = _this.toastCtrl.create({
                message: "Successfully created Center",
                duration: 3000,
                position: "top"
            });
            toast.present();
            _this.navCtrl.push("BranchesTab");
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
            selector: "area-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/area-tab/area-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'Center Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'Center Code\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_id" (ionChange)="onCodeChange($event)"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State / District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="center_parent">\n                    <ion-option value="{{state._id}}" *ngFor="let state of states">{{state.center_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> {{ \'Programs:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="programs" multiple="true" style="min-width: 100%;">\n                    <ion-option value={{course._id}} *ngFor="let course of courses">{{course.program_name}}</ion-option>\n                </ion-select>\n            </ion-item>        \n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <p style="color:red;" *ngIf="isDuplicate"> Center Code already exists for any State or Districts or Center. Please try again with new Center Code. </p>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave || isDuplicate">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/area-tab/area-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]])
    ], AreaTab);
    return AreaTab;
}());

//# sourceMappingURL=area-tab.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesTabModule", function() { return BranchesTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__branches_tab__ = __webpack_require__(251);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__branches_tab__["a" /* BranchesTab */]),
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

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchesTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
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
    }
    BranchesTab.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.centers.query().subscribe(function (res) {
            _this.branches = _this.formBranches(res);
        }, function (err) {
            console.error("ERROR", err);
        });
    };
    BranchesTab.prototype.formBranches = function (res) {
        var branches = res.filter(function (item) {
            return item.center_type == "state";
        });
        for (var i = 0; i < branches.length; i++) {
            branches[i].hide = true;
            branches[i].branches = [];
            branches[i].branches = res.filter(function (item) {
                return item.center_parent == branches[i]._id;
            });
            for (var j = 0; j < branches[i].branches.length; j++) {
                branches[i].branches[j].hide = true;
                branches[i].branches[j].branches = [];
                branches[i].branches[j].branches = res.filter(function (item) {
                    return item.center_parent == branches[i].branches[j]._id;
                });
            }
        }
        return branches;
    };
    BranchesTab.prototype.onSelect = function (branch) {
        branch.hide = !branch.hide;
    };
    BranchesTab.prototype.onSubSelect = function (subbranch) {
        subbranch.hide = !subbranch.hide;
    };
    BranchesTab.prototype.edit = function (branch) {
        if (branch.center_type == "state") {
            this.navCtrl.push("StatesEdit", {
                branch: branch
            });
        }
        else if (branch.center_type == "district") {
            this.navCtrl.push("DistrictEdit", {
                branch: branch
            });
        }
        else if (branch.center_type == "unit") {
            this.navCtrl.push("AreaEdit", {
                branch: branch
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "There is some error in updating. Please try again.",
                duration: 3000,
                position: "top"
            });
            toast.present();
        }
    };
    BranchesTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "branches-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/branches-tab/branches-tab.html"*/'<ion-content class="branchtab">\n\n    <ion-list>\n        <div *ngFor="let branch of branches">\n\n            <ion-item class="item-stable">\n                <ion-icon name="arrow-dropright" *ngIf="branch.hide" (click)="onSelect(branch)"></ion-icon>\n                <ion-icon name="arrow-dropdown" *ngIf="!branch.hide" (click)="onSelect(branch)"></ion-icon>\n                <span *ngIf="branch.active" style="color:green;" (click)="onSelect(branch)"> {{branch.center_name}}\n                    ({{branch.center_id}}) </span>\n                <span *ngIf="!branch.active" style="color:red;" (click)="onSelect(branch)"> {{branch.center_name}}\n                    ({{branch.center_id}}) </span>\n                <span style="color:blue;text-decoration:underline;float:right;" (click)="edit(branch)"> Edit </span>\n            </ion-item>\n\n            <div *ngIf="!branch.hide" style="padding-left: 20px;">\n                <div *ngFor="let bran of branch.branches">\n\n                    <ion-item class="item-stable">\n                        <ion-icon name="arrow-dropright" *ngIf="bran.hide" (click)="onSubSelect(bran)"></ion-icon>\n                        <ion-icon name="arrow-dropdown" *ngIf="!bran.hide" (click)="onSubSelect(bran)"></ion-icon>\n                        <span *ngIf="bran.active" style="color: green;" (click)="onSubSelect(bran)">\n                            {{bran.center_name}} ({{bran.center_id}}) </span>\n                        <span *ngIf="!bran.active" style="color: red;" (click)="onSubSelect(bran)">\n                            {{bran.center_name}} ({{bran.center_id}}) </span>\n                        <span style="color:blue;text-decoration:underline;float:right;" (click)="edit(bran)"> Edit </span>\n                    </ion-item>\n\n                    <div *ngIf="!bran.hide" style="padding-left: 40px;">\n                        <div *ngFor="let b of bran.branches">\n                            <ion-item class="item-stable">\n                                <span *ngIf="b.active" style="color: green;"> {{b.center_name}} ({{b.center_id}})\n                                </span>\n                                <span *ngIf="!b.active" style="color: red;"> {{b.center_name}} ({{b.center_id}}) </span>\n                                <span style="color:blue;text-decoration:underline;float:right;" (click)="edit(b)"> Edit </span>\n                            </ion-item>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/branches-tab/branches-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */]])
    ], BranchesTab);
    return BranchesTab;
}());

//# sourceMappingURL=branches-tab.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentersPageModule", function() { return CentersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__centers_page__ = __webpack_require__(489);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__centers_page__["a" /* CentersPage */]),
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

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistrictTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
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
    function DistrictTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
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
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.form = formBuilder.group({
            center_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_type: ['district'],
            center_parent: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            active: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            programs: [[], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
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
            var toast = _this.toastCtrl.create({
                message: "Successfully created District",
                duration: 3000,
                position: "top"
            });
            toast.present();
            _this.navCtrl.push("BranchesTab");
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
            selector: 'district-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/district-tab/district-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'District Name\' | translate }} <span class="mandatory-field"> * </span>\n                </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'District Code\' | translate }} <span class="mandatory-field"> * </span>\n                </ion-label>\n                <ion-input type="text" formControlName="center_id" (ionChange)="onCodeChange($event)"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="center_parent">\n                    <ion-option *ngFor="let state of states" value={{state._id}}>{{state.center_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> {{ \'Programs:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="programs" multiple="true" style="min-width: 100%;">\n                    <ion-option value={{course._id}} *ngFor="let course of courses">{{course.program_name}}</ion-option>\n                </ion-select>\n            </ion-item>    \n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <p style="color:red;" *ngIf="isDuplicate"> District Code already exists for any State or Districts or Center.\n        Please try again with new District Code. </p>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave || isDuplicate">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/district-tab/district-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]])
    ], DistrictTab);
    return DistrictTab;
}());

//# sourceMappingURL=district-tab.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
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
    function StatesTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.isDuplicate = false;
        this.isReadyToSave = false;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.form = formBuilder.group({
            center_id: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            center_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            center_type: ['state'],
            center_parent: [''],
            active: [true, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            programs: [[], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
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
            var toast = _this.toastCtrl.create({
                message: "Successfully created State",
                duration: 3000,
                position: "top"
            });
            toast.present();
            _this.navCtrl.push("BranchesTab");
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
            selector: 'states-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/states-tab/states-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'State Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State Code\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_id" (ionChange)="onCodeChange($event)"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> {{ \'Programs:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="programs" multiple="true" style="min-width: 100%;">\n                  <ion-option value={{course._id}} *ngFor="let course of courses">{{course.program_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }} </ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <p style="color:red;" *ngIf="isDuplicate"> State Code already exists for any State or Districts or Center. Please try again with new State Code. </p>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave || isDuplicate">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/states-tab/states-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]])
    ], StatesTab);
    return StatesTab;
}());

//# sourceMappingURL=states-tab.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseMappingPageModule", function() { return CourseMappingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coursemapping__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CourseMappingPageModule = /** @class */ (function () {
    function CourseMappingPageModule() {
    }
    CourseMappingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__coursemapping__["a" /* CourseMappingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__coursemapping__["a" /* CourseMappingPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__coursemapping__["a" /* CourseMappingPage */]
            ]
        })
    ], CourseMappingPageModule);
    return CourseMappingPageModule;
}());

//# sourceMappingURL=coursemapping.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictTabModule", function() { return DistrictTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__district_tab__ = __webpack_require__(253);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__district_tab__["a" /* DistrictTab */]),
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

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupCreateTabModule", function() { return FollowupCreateTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followupcreate_tab__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FollowupCreateTabModule = /** @class */ (function () {
    function FollowupCreateTabModule() {
    }
    FollowupCreateTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__followupcreate_tab__["a" /* FollowupCreateTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__followupcreate_tab__["a" /* FollowupCreateTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__followupcreate_tab__["a" /* FollowupCreateTab */]
            ]
        })
    ], FollowupCreateTabModule);
    return FollowupCreateTabModule;
}());

//# sourceMappingURL=followupcreate-tab.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupViewTabModule", function() { return FollowupViewTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followupview_tab__ = __webpack_require__(430);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__followupview_tab__["a" /* FollowupViewTab */]),
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

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryConfirmPageModule", function() { return FranchiseEnquiryConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_confirm__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FranchiseEnquiryConfirmPageModule = /** @class */ (function () {
    function FranchiseEnquiryConfirmPageModule() {
    }
    FranchiseEnquiryConfirmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_confirm__["a" /* FranchiseEnquiryConfirmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_confirm__["a" /* FranchiseEnquiryConfirmPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_confirm__["a" /* FranchiseEnquiryConfirmPage */]
            ]
        })
    ], FranchiseEnquiryConfirmPageModule);
    return FranchiseEnquiryConfirmPageModule;
}());

//# sourceMappingURL=franchiseenquiry-confirm.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryAddPageModule", function() { return FranchiseEnquiryAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_create__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FranchiseEnquiryAddPageModule = /** @class */ (function () {
    function FranchiseEnquiryAddPageModule() {
    }
    FranchiseEnquiryAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_create__["a" /* FranchiseEnquiryAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_create__["a" /* FranchiseEnquiryAddPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_create__["a" /* FranchiseEnquiryAddPage */]
            ]
        })
    ], FranchiseEnquiryAddPageModule);
    return FranchiseEnquiryAddPageModule;
}());

//# sourceMappingURL=franchiseenquiry-create.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryEditPageModule", function() { return FranchiseEnquiryEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_edit__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FranchiseEnquiryEditPageModule = /** @class */ (function () {
    function FranchiseEnquiryEditPageModule() {
    }
    FranchiseEnquiryEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_edit__["a" /* FranchiseEnquiryEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_edit__["a" /* FranchiseEnquiryEditPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_edit__["a" /* FranchiseEnquiryEditPage */]
            ]
        })
    ], FranchiseEnquiryEditPageModule);
    return FranchiseEnquiryEditPageModule;
}());

//# sourceMappingURL=franchiseenquiry-edit.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryListPageModule", function() { return FranchiseEnquiryListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_list__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FranchiseEnquiryListPageModule = /** @class */ (function () {
    function FranchiseEnquiryListPageModule() {
    }
    FranchiseEnquiryListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_list__["a" /* FranchiseEnquiryListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_list__["a" /* FranchiseEnquiryListPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_list__["a" /* FranchiseEnquiryListPage */]
            ]
        })
    ], FranchiseEnquiryListPageModule);
    return FranchiseEnquiryListPageModule;
}());

//# sourceMappingURL=franchiseenquiry-list.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryViewPageModule", function() { return FranchiseEnquiryViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_view__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FranchiseEnquiryViewPageModule = /** @class */ (function () {
    function FranchiseEnquiryViewPageModule() {
    }
    FranchiseEnquiryViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_view__["a" /* FranchiseEnquiryViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_view__["a" /* FranchiseEnquiryViewPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_view__["a" /* FranchiseEnquiryViewPage */]
            ]
        })
    ], FranchiseEnquiryViewPageModule);
    return FranchiseEnquiryViewPageModule;
}());

//# sourceMappingURL=franchiseenquiry-view.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page__ = __webpack_require__(265);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home_page__["a" /* HomePage */]),
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

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_tab_home_tab__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_tab_notification_tab__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_tab_profile_tab__ = __webpack_require__(268);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["k" /* Programs */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(14);
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






var HomeTab = /** @class */ (function () {
    function HomeTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs, users, centers, storage, franchise, instructor, student) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        this.users = users;
        this.centers = centers;
        this.storage = storage;
        this.franchise = franchise;
        this.instructor = instructor;
        this.student = student;
        console.log('Home Tab');
        this.getData();
    }
    HomeTab.prototype.getData = function () {
        var _this = this;
        this.storage.get("user").then(function (value) {
            _this.user = value;
            _this.users.users_list().subscribe(function (res) {
                _this.allUsers = res;
            }, function (err) {
                console.error("ERROR", err);
            });
            _this.centers.query().subscribe(function (res) {
                _this.allCenters = res;
            }, function (err) {
                console.error("ERROR", err);
            });
            _this.programs.query().subscribe(function (res) {
                _this.allPrograms = res;
            }, function (err) {
                console.error("ERROR", err);
            });
            _this.franchise.query().subscribe(function (res) {
                _this.allFranchisees = res;
                if (_this.user.role != 'admin') {
                    _this.allFranchisees = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](_this.allFranchisees, function (item) {
                        return (item.enquiry_by == this.user._id);
                    });
                }
            }, function (err) {
                console.error('ERROR', err);
            });
            _this.instructor.query().subscribe(function (res) {
                _this.allInstructor = res;
                if (_this.user.role != "admin") {
                    _this.allInstructor = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](_this.allInstructor, function (item) {
                        return item.enquiry_by == this.user._id;
                    });
                }
            }, function (err) {
                console.error("ERROR", err);
            });
            _this.student.query().subscribe(function (res) {
                _this.allStudent = res;
                if (_this.user.role != "admin") {
                    _this.allStudent = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](_this.allStudent, function (item) {
                        return item.enquiry_by == this.user._id;
                    });
                }
            }, function (err) {
                console.error("ERROR", err);
            });
        });
    };
    HomeTab.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], HomeTab.prototype, "nav", void 0);
    HomeTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/home-tab/home-tab.html"*/'<ion-content>\n\n  <div class="nb-card">\n    <div class="icon-container hidden-sm-down">\n        <div class="icon">\n          <ion-icon name="bookmarks"></ion-icon>\n        </div>\n    </div>\n    <div class="details">\n        <div class="title">\n          Total No Of Programs\n        </div>\n        <div class="values" *ngIf="allPrograms != undefined">\n          {{allPrograms.length}}\n        </div>\n    </div>\n  </div>\n\n  <div class="nb-card">\n    <div class="icon-container hidden-sm-down">\n        <div class="icon">\n          <ion-icon name="briefcase"></ion-icon>\n        </div>\n    </div>\n    <div class="details">\n        <div class="title">\n          Total No Of Franchise Enquiry\n        </div>\n        <div class="values" *ngIf="allFranchisees != undefined">\n          {{allFranchisees.length}}\n        </div>\n    </div>\n  </div>\n\n  <div class="nb-card">\n    <div class="icon-container hidden-sm-down">\n        <div class="icon">\n          <ion-icon name="walk"></ion-icon>\n        </div>\n    </div>\n    <div class="details">\n        <div class="title">\n          Total No Of Instructor Enquiry\n        </div>\n        <div class="values" *ngIf="allInstructor != undefined">\n          {{allInstructor.length}}\n        </div>\n    </div>\n  </div>\n\n  <div class="nb-card">\n    <div class="icon-container hidden-sm-down">\n        <div class="icon">\n          <ion-icon name="school"></ion-icon>\n        </div>\n    </div>\n    <div class="details">\n        <div class="title">\n          Total No Of Student Enquiry\n        </div>\n        <div class="values" *ngIf="allStudent != undefined">\n          {{allStudent.length}}\n        </div>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/home-tab/home-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["m" /* Students */]])
    ], HomeTab);
    return HomeTab;
}());

//# sourceMappingURL=home-tab.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
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
            selector: 'notification-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/notification-tab/notification-tab.html"*/'<ion-content>\n\n  <div style="margin: 2rem; font-size: 3rem; font-weight: 600; color: black;">\n    YOU HAVE NO NEW NOTIFICATIONS!!!\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/notification-tab/notification-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["k" /* Programs */]])
    ], NotificationTab);
    return NotificationTab;
}());

//# sourceMappingURL=notification-tab.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
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
    function ProfileTab(navCtrl, viewCtrl, formBuilder, camera, user, toastCtrl, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.isDisabled = true;
        this.caption_name = "EDIT";
        this.storage.get("user").then(function (value) {
            console.log(value);
            _this.profileDetails = value;
            _this.form = formBuilder.group({
                _id: [_this.profileDetails._id, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                name: [_this.profileDetails.name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                user_name: [_this.profileDetails.user_name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                email: [_this.profileDetails.email, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
                password: [_this.profileDetails.password, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                role: [_this.profileDetails.role, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
                dob: [_this.profileDetails.dob],
                gender: [_this.profileDetails.gender],
                phone_no: [_this.profileDetails.phone_no, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
                whatsapp_no: [_this.profileDetails.whatsapp_no, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
                profile_pic: [_this.profileDetails.profile_pic],
                user_state: [_this.profileDetails.user_state],
                user_district: [_this.profileDetails.user_district],
                user_center: [_this.profileDetails.user_center],
                active: [true, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            });
        });
    }
    ;
    ProfileTab.prototype.changedSmtng = function () {
        this.caption_name = "SAVE";
    };
    ProfileTab.prototype.editProfile = function () {
        var _this = this;
        if (this.caption_name == "EDIT") {
            this.isDisabled = false;
            this.caption_name = "CANCEL";
        }
        else if (this.caption_name == "SAVE") {
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            this.form.value.dob = new Date(this.form.value.dob);
            this.user.update_user(this.form.value).subscribe(function (resp) {
                _this.viewCtrl.dismiss();
                var toast = _this.toastCtrl.create({
                    message: "You have successfully updated your details .",
                    duration: 2000,
                    position: "top"
                });
                loading_1.dismiss();
                toast.present();
                _this.caption_name = "EDIT";
                _this.isDisabled = true;
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "Error in adding the User. Please try again.",
                    duration: 3000,
                    position: 'top'
                });
                loading_1.dismiss();
                toast.present();
            });
        }
        else if (this.caption_name == "CANCEL") {
            this.isDisabled = true;
            this.caption_name = "EDIT";
        }
    };
    ProfileTab.prototype.ionViewDidLoad = function () { };
    ProfileTab.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]["installed"]()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ profile_pic: "data:image/jpg;base64," + data });
            }, function (err) {
                alert("Unable to take photo");
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ProfileTab.prototype.getProfileImageStyle = function () {
        return "url(" + this.form.controls["profile_pic"].value + ")";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("fileInput"),
        __metadata("design:type", Object)
    ], ProfileTab.prototype, "fileInput", void 0);
    ProfileTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "profile-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/profile-tab/profile-tab.html"*/'<ion-content>\n  <div class="fixed-content">\n\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="saveProfile()">\n      \n      <ion-list>\n        <ion-item>\n          <ion-label floating class="label_here">{{ \'User Name\' | translate }} :</ion-label>\n          <ion-input class="inputFields" type="text" formControlName="user_name" (keyup)="changedSmtng()" disabled="{{isDisabled}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating class="label_here">{{ \'Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input class="inputFields" type="text" formControlName="name" (keyup)="changedSmtng()" disabled="{{isDisabled}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating class="label_here">{{ \'Phone No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input class="inputFields" type="number" formControlName="phone_no" (keyup)="changedSmtng()" disabled="{{isDisabled}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating class="label_here">{{ \'Whatsapp No\' | translate }} </ion-label>\n          <ion-input class="inputFields" type="number" formControlName="whatsapp_no" (keyup)="changedSmtng()" disabled="{{isDisabled}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating class="label_here">{{ \'Date Of Birth\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-datetime class="inputFields" displayFormat="DD/MMM/YYYY" formControlName="dob" (ionChange)="changedSmtng()" disabled="{{isDisabled}}"></ion-datetime>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>{{ \'Gender\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-select class="inputFields" formControlName="gender" (ionChange)="changedSmtng()" disabled="{{isDisabled}}">\n            <ion-option value="female">Female</ion-option>\n            <ion-option value="male">Male</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating class="label_here">{{ \'Email\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input class="inputFields" type="email" formControlName="email" (keyup)="changedSmtng()" disabled="{{isDisabled}}"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating class="label_here">{{ \'Password\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input class="inputFields" type="password" formControlName="password" (keyup)="changedSmtng()" disabled="{{isDisabled}}"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n    </form>\n  </div>\n</ion-content>\n \n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="editProfile()" class="editSaveToggleBtn">\n      {{ caption_name | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/profile-tab/profile-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ProfileTab);
    return ProfileTab;
}());

//# sourceMappingURL=profile-tab.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabModule", function() { return HomeTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_tab__ = __webpack_require__(266);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home_tab__["a" /* HomeTab */]),
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

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictEditModule", function() { return DistrictEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__district_edit__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DistrictEditModule = /** @class */ (function () {
    function DistrictEditModule() {
    }
    DistrictEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__district_edit__["a" /* DistrictEdit */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__district_edit__["a" /* DistrictEdit */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__district_edit__["a" /* DistrictEdit */]
            ]
        })
    ], DistrictEditModule);
    return DistrictEditModule;
}());

//# sourceMappingURL=district-edit.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorEnquiryListPageModule", function() { return InstructorEnquiryListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_list__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InstructorEnquiryListPageModule = /** @class */ (function () {
    function InstructorEnquiryListPageModule() {
    }
    InstructorEnquiryListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_list__["a" /* InstructorEnquiryListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__instructorenquiry_list__["a" /* InstructorEnquiryListPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_list__["a" /* InstructorEnquiryListPage */]
            ]
        })
    ], InstructorEnquiryListPageModule);
    return InstructorEnquiryListPageModule;
}());

//# sourceMappingURL=instructorenquiry-list.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorEnquiryEditPageModule", function() { return InstructorEnquiryEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_update__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InstructorEnquiryEditPageModule = /** @class */ (function () {
    function InstructorEnquiryEditPageModule() {
    }
    InstructorEnquiryEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_update__["a" /* InstructorEnquiryEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__instructorenquiry_update__["a" /* InstructorEnquiryEditPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_update__["a" /* InstructorEnquiryEditPage */]
            ]
        })
    ], InstructorEnquiryEditPageModule);
    return InstructorEnquiryEditPageModule;
}());

//# sourceMappingURL=instructorenquiry-update.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorEnquiryViewPageModule", function() { return InstructorEnquiryViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_view__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InstructorEnquiryViewPageModule = /** @class */ (function () {
    function InstructorEnquiryViewPageModule() {
    }
    InstructorEnquiryViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_view__["a" /* InstructorEnquiryViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__instructorenquiry_view__["a" /* InstructorEnquiryViewPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_view__["a" /* InstructorEnquiryViewPage */]
            ]
        })
    ], InstructorEnquiryViewPageModule);
    return InstructorEnquiryViewPageModule;
}());

//# sourceMappingURL=instructorenquiry-view.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationTabModule", function() { return NotificationTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_tab__ = __webpack_require__(267);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__notification_tab__["a" /* NotificationTab */]),
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineReportPageModule", function() { return OnlineReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__online_report__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnlineReportPageModule = /** @class */ (function () {
    function OnlineReportPageModule() {
    }
    OnlineReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__online_report__["a" /* OnlineReportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__online_report__["a" /* OnlineReportPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__online_report__["a" /* OnlineReportPage */]
            ]
        })
    ], OnlineReportPageModule);
    return OnlineReportPageModule;
}());

//# sourceMappingURL=online-report.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnlineViewPage = /** @class */ (function () {
    function OnlineViewPage(navCtrl, viewCtrl, toastCtrl, element, storage, online, alertController, actionSheetController, loadingController, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.element = element;
        this.storage = storage;
        this.online = online;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.student = navParams.get('student');
    }
    OnlineViewPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    OnlineViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'online-view',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/online-view/online-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Student Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item *ngIf="student.txtsname !== \'\'">\n      <ion-label floating>{{ \'Name Of Student\' | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtsname"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtsdob !== \'\'">\n      <ion-label floating>{{ \'Date Of Birth\' | translate }} </ion-label>\n      <ion-datetime displayFormat="DD MMM YYYY" disabled="true" [(ngModel)]="student.txtsdob"></ion-datetime>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtsadd !== \'\'">\n      <ion-label floating>{{ \'Address of Student\' | translate }} </ion-label>\n      <ion-textarea disabled="true" [(ngModel)]="student.txtsadd"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtscontact !== \'\'">\n      <ion-label floating>{{ \'Contact No\' | translate }} </ion-label>\n      <ion-input type="number" disabled="true" [(ngModel)]="student.txtscontact"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtsemail !== \'\'">\n      <ion-label floating>{{ \'Email ID\' | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtsemail"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtlanguage !== \'\'">\n      <ion-label floating>{{ \'Language\' | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtlanguage"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtinterest !== \'\'">\n      <ion-label floating>{{ \'Interests\' | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtinterest"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtschool !== \'\'">\n      <ion-label floating>{{ \'Name Of School\' | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtschool"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtschooladd !== \'\'">\n      <ion-label floating>{{ \'Address of School\' | translate }} </ion-label>\n      <ion-textarea disabled="true" [(ngModel)]="student.txtschooladd"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtprograms !== \'\'">\n      <ion-label floating>{{ \'Programs\' | translate }} </ion-label>\n      <ion-textarea disabled="true" [(ngModel)]="student.txtprograms"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="student.txthdyk !== \'\'">\n      <ion-label floating>{{ \'How do you know Aloha?\' | translate }} </ion-label>\n      <ion-textarea disabled="true" [(ngModel)]="student.txthdyk"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="student.referralcode !== \'\'">\n      <ion-label floating>{{ "Referral Code" | translate }} </ion-label>\n      <ion-input disabled="true" [(ngModel)]="student.referralcode"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtfname !== \'\'">\n      <ion-label floating>{{ "Father\'s Name" | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtfname"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtfoccupation !== \'\'">\n      <ion-label floating>{{ "Father\'s Occupation" | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtfoccupation"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtfoffadd !== \'\'">\n      <ion-label floating>{{ "Father\'s Office Address" | translate }} </ion-label>\n      <ion-textarea disabled="true" [(ngModel)]="student.txtfoffadd"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtfoffcontact !== \'\'">\n      <ion-label floating>{{ "Father\'s Contact No" | translate }} </ion-label>\n      <ion-input type="number" disabled="true" [(ngModel)]="student.txtfoffcontact"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtfmail !== \'\'">\n      <ion-label floating>{{ "Father\'s Email" | translate }} </ion-label>\n      <ion-input type="string" disabled="true" [(ngModel)]="student.txtfmail"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtmname !== \'\'">\n      <ion-label floating>{{ "Mother\'s Name" | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtmname"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtmoccupation !== \'\'">\n      <ion-label floating>{{ "Mother\'s Occupation" | translate }} </ion-label>\n      <ion-input type="text" disabled="true" [(ngModel)]="student.txtmoccupation"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtmoffadd !== \'\'">\n      <ion-label floating>{{ "Mother\'s Office Address" | translate }} </ion-label>\n      <ion-textarea disabled="true" [(ngModel)]="student.txtmoffadd"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtmoffcontact !== \'\'">\n      <ion-label floating>{{ "Mother\'s Contact No" | translate }} </ion-label>\n      <ion-input type="number" disabled="true" [(ngModel)]="student.txtmoffcontact"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="student.txtmmail !== \'\'">\n      <ion-label floating>{{ "Mother\'s Email" | translate }} </ion-label>\n      <ion-input type="string" disabled="true" [(ngModel)]="student.txtmmail"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <div style="width: 50%;display: block; float: left;">\n        <p>Photo</p>\n        <img src={{student.photo}} *ngIf="student.photo !== \'\'" class="online-image-display" />\n        <img src="https://identix.state.gov/qotw/images/no-photo.gif" *ngIf="student.photo === \'\'"\n          class="online-image-display" />\n      </div>\n      <div style="width: 50%;display: block; float: left;">\n        <p>ID Proof</p>\n        <img src={{student.idproof}} *ngIf="student.idproof !== \'\'" class="online-image-display" />\n        <img src="https://identix.state.gov/qotw/images/no-photo.gif" *ngIf="student.idproof === \'\'"\n          class="online-image-display" />\n      </div>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/online-view/online-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["h" /* Online */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OnlineViewPage);
    return OnlineViewPage;
}());

//# sourceMappingURL=online-view.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineAddPageModule", function() { return OnlineAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__online_create__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnlineAddPageModule = /** @class */ (function () {
    function OnlineAddPageModule() {
    }
    OnlineAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__online_create__["a" /* OnlineAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__online_create__["a" /* OnlineAddPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__online_create__["a" /* OnlineAddPage */]
            ]
        })
    ], OnlineAddPageModule);
    return OnlineAddPageModule;
}());

//# sourceMappingURL=online-create.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_integration_payment_integration__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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







// import { File } from '@ionic-native/file';
var OnlineAddPage = /** @class */ (function () {
    function OnlineAddPage(navCtrl, viewCtrl, formBuilder, camera, toastCtrl, element, storage, online, alertController, actionSheetController, loadingController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.element = element;
        this.storage = storage;
        this.online = online;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.order = 1;
        this.isReadyToSave1 = false;
        this.isReadyToSave2 = false;
        this.isReadyToSave3 = false;
        this.errorMsg = '';
        this.programmes = ['Aloha Mental Arithmetic', 'Aloha Tiny Tots', 'Aloha Speed Maths', 'Aloha Handwriting',
            'Aloha English Smart', "Aloha Kid's Art", 'Aloha Third Brain'];
        this.referralOptions = ['Friends', 'News Paper', 'School', 'Others'];
        this.referralCodeOptions = ['1101	Goa Rep', '2202	Whatsapp Promo', '3303	FB Paid', '4404	FB Link', '5505	SMS Promo',
            '6606	Karnataka Promo', '7707	ALOHA 1', '8808	ALOHA 2', '9909	ALOHA 3'];
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        this.form = formBuilder.group({
            txtsname: [''],
            txtsdob: [''],
            txtsadd: [''],
            txtscontact: [''],
            txtsemail: [''],
            txtlanguage: [''],
            txtinterest: [''],
            txtschool: [''],
            txtschooladd: [''],
            txtfname: [''],
            txtfoccupation: [''],
            txtfoffadd: [''],
            txtfoffcontact: [''],
            txtfmail: [''],
            txtmname: [''],
            txtmoccupation: [''],
            txtmoffadd: [''],
            txtmoffcontact: [''],
            txtmmail: [''],
            txthdyk: [[]],
            txtprograms: [[]],
            photo: [''],
            idproof: [''],
            referralcode: [''],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            if (_this.order === 1) {
                if (_this.form.controls['txtsname'].value === '') {
                    _this.errorMsg = 'Please input the valid Student Name';
                    _this.isReadyToSave1 = false;
                }
                else if (_this.form.controls['txtsdob'].value === '') {
                    _this.errorMsg = 'Please input the valid Student Date Of Birth';
                    _this.isReadyToSave1 = false;
                }
                else if (_this.form.controls['txtsadd'].value === '') {
                    _this.errorMsg = 'Please input the valid Address';
                    _this.isReadyToSave1 = false;
                }
                else if (_this.form.controls['txtscontact'].value.length !== 10) {
                    _this.errorMsg = 'Please input the valid 10 digit Contact Number';
                    _this.isReadyToSave1 = false;
                }
                else if (!_this.validateEmail(_this.form.controls['txtsemail'].value)) {
                    _this.errorMsg = 'Please input the valid Email ID';
                    _this.isReadyToSave1 = false;
                }
                else if (_this.form.controls['txtprograms'].value.length <= 0) {
                    _this.errorMsg = 'Please select atleast one Program';
                    _this.isReadyToSave1 = false;
                }
                else if (_this.form.controls['referralcode'].value.length <= 0) {
                    _this.errorMsg = 'Please select a Referral Code';
                    _this.isReadyToSave1 = false;
                }
                else {
                    _this.errorMsg = '';
                    _this.isReadyToSave1 = true;
                }
            }
            if (_this.order === 2) {
                _this.isReadyToSave2 = (_this.form.controls['txtscontact'].value !== '' ||
                    _this.form.controls['txtfname'].value !== '' ||
                    _this.form.controls['txtfoccupation'].value !== '' ||
                    _this.form.controls['txtfoffadd'].value !== '' ||
                    _this.form.controls['txtfoffcontact'].value !== '' ||
                    _this.form.controls['txtfmail'].value !== '' ||
                    _this.form.controls['txtmname'].value !== '' ||
                    _this.form.controls['txtmoccupation'].value !== '' ||
                    _this.form.controls['txtmoffadd'].value !== '' ||
                    _this.form.controls['txtmoffcontact'].value !== '' ||
                    _this.form.controls['txtmmail'].value !== '');
            }
            if (_this.order === 3) {
                _this.isReadyToSave3 = (_this.form.controls['photo'].value !== '' ||
                    _this.form.controls['idproof'].value !== '');
            }
        });
    }
    OnlineAddPage.prototype.validateEmail = function (mail) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
    };
    OnlineAddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    OnlineAddPage.prototype.next = function (num) {
        this.order = num;
    };
    OnlineAddPage.prototype.save = function () {
        var _this = this;
        this.online.add(this.form.value).subscribe(function (resp) {
            var obj = {
                programs: _this.form.controls['txtprograms'].value
            };
            var z = Object.assign(resp, obj);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__payment_integration_payment_integration__["a" /* PaymentIntegrationPage */], z);
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Student Details. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    OnlineAddPage.prototype.onPhoneChange = function (ev) {
        var _this = this;
        if (ev.value.length === 10) {
            this.online.generateOTP(ev.value).subscribe(function (response) {
                if (response.length === 4) {
                    _this.storage.set('otpvalidation', response);
                    _this.presentAlertPrompt(response);
                }
            }, function (err) {
                _this.presentToast("We couldn't send you an OTP to verify your number. Please try again.");
            });
        }
    };
    OnlineAddPage.prototype.resendOtp = function () {
        var _this = this;
        this.online.generateOTP(this.form.controls['txtscontact'].value).subscribe(function (response) {
            _this.storage.set('otpvalidation', response);
            _this.presentAlertPrompt(response);
        }, function (err) {
            _this.presentToast("We couldn't send you an OTP to verify your number. Please try again.");
        });
    };
    OnlineAddPage.prototype.presentAlertPrompt = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = 'Please enter the OTP you received on the phone number...';
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                title: 'OTP!',
                                message: msg,
                                inputs: [
                                    {
                                        label: 'Enter OTP received on your Phone',
                                        name: 'enteredOtp',
                                        type: 'number',
                                        min: '1000',
                                        max: '9999'
                                    },
                                ],
                                buttons: [
                                    {
                                        text: 'Resend OTP',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            alert.dismiss();
                                            _this.resendOtp();
                                        }
                                    }, {
                                        text: 'Confirm',
                                        handler: function (data) {
                                            if (data.enteredOtp === response) {
                                                _this.presentToast('Phone number verified successfully');
                                                alert.dismiss();
                                            }
                                            else {
                                                msg = 'OTP entered is invalid. Please try again!';
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Utilities
    OnlineAddPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    OnlineAddPage.prototype.showLoader = function (content) {
        this.loading = this.loadingController.create({
            content: content
        });
        this.loading.present();
    };
    // Upload 
    OnlineAddPage.prototype.upload = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [
                                {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.cameraUpload(props, 'CAMERA');
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'folder',
                                    handler: function () {
                                        _this.cameraUpload(props, 'PHOTOLIBRARY');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        actionSheet.dismiss();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OnlineAddPage.prototype.cameraUpload = function (props, imageSrc) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType[imageSrc],
            allowEdit: false,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.showLoader('Uploading...');
            var fileName = 'online_' + new Date() + '_.jpeg';
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.online.uploadToS3(base64Image, fileName, 'jpeg').subscribe(function (result) {
                _this.form.controls[props].setValue(result.Location);
                _this.loading.dismiss();
            }, function (err) {
                _this.presentToast(err);
                _this.loading.dismiss();
            });
        }, function (err) {
            _this.presentToast(err);
            _this.loading.dismiss();
        });
    };
    OnlineAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'online-create',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/online-create/online-create.html"*/'<ion-header class="onlne-create-header" *ngIf="order > 0">\n  <ion-navbar color="primary">\n    <ion-title *ngIf="order === 1">{{ \'Student Details\' | translate }}</ion-title>\n    <ion-title *ngIf="order === 2">{{ \'Family Details\' | translate }}</ion-title>\n    <ion-title *ngIf="order === 3">{{ \'Upload Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="order > 0">\n  <form [formGroup]="form">\n    <ion-list>\n\n      <div *ngIf="order === 1">\n        <ion-item>\n          <ion-label floating>{{ \'Name Of Student\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input type="text" formControlName="txtsname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Date Of Birth\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-datetime displayFormat="DD MMM YYYY" formControlName="txtsdob"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Address of Student\' | translate }} <span class="mandatory-field"> * </span>\n          </ion-label>\n          <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="txtsadd">\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Contact No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input type="number" formControlName="txtscontact" (ionChange)="onPhoneChange($event)"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Email ID\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input type="text" formControlName="txtsemail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Language\' | translate }} </ion-label>\n          <ion-input type="text" formControlName="txtlanguage"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Interests\' | translate }} </ion-label>\n          <ion-input type="text" formControlName="txtinterest"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Name Of School\' | translate }} </ion-label>\n          <ion-input type="text" formControlName="txtschool"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Address of School\' | translate }} </ion-label>\n          <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()"\n            formControlName="txtschooladd">\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Programs\' | translate }} <span class="mandatory-field"> * </span>\n          </ion-label>\n          <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="txtprograms">\n            <ion-option value={{program}} *ngFor="let program of programmes">{{program}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'How do you know Aloha?\' | translate }} </ion-label>\n          <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="txthdyk">\n            <ion-option value={{referral}} *ngFor="let referral of referralOptions">{{referral}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Referral Code" | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="referralcode">\n            <ion-option value={{referralCode}} *ngFor="let referralCode of referralCodeOptions">{{referralCode}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n      </div>\n\n      <div *ngIf="order === 2">\n        <ion-item>\n          <ion-label floating>{{ "Father\'s Name" | translate }} </ion-label>\n          <ion-input type="text" formControlName="txtfname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Father\'s Occupation" | translate }} </ion-label>\n          <ion-input type="text" formControlName="txtfoccupation"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Father\'s Office Address" | translate }} </ion-label>\n          <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="txtfoffadd">\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Father\'s Contact No" | translate }} </ion-label>\n          <ion-input type="number" formControlName="txtfoffcontact"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Father\'s Email" | translate }} </ion-label>\n          <ion-input type="string" formControlName="txtfmail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Mother\'s Name" | translate }} </ion-label>\n          <ion-input type="text" formControlName="txtmname"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Mother\'s Occupation" | translate }} </ion-label>\n          <ion-input type="text" formControlName="txtmoccupation"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Mother\'s Office Address" | translate }} </ion-label>\n          <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="txtmoffadd">\n          </ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Mother\'s Contact No" | translate }} </ion-label>\n          <ion-input type="number" formControlName="txtmoffcontact"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ "Mother\'s Email" | translate }} </ion-label>\n          <ion-input type="string" formControlName="txtmmail"></ion-input>\n        </ion-item>\n      </div>\n\n      <div *ngIf="order === 3">\n        <ion-item style="height: 200px;">\n          <!-- <ion-label>{{ "Upload Photo" | translate }} </ion-label> -->\n          <button ion-button color="secondary" class="online-upload" (click)="upload(\'photo\')" *ngIf="form.controls.photo.value === \'\'">\n            Upload Photo\n          </button>\n          <button ion-button color="secondary" class="online-upload" (click)="upload(\'photo\')" *ngIf="form.controls.photo.value !== \'\'">\n            Replace Photo\n          </button>\n          <img src={{form.controls.photo.value}} *ngIf="form.controls.photo.value !== \'\'" class="online-image-display" />\n          <img src="https://identix.state.gov/qotw/images/no-photo.gif" *ngIf="form.controls.photo.value === \'\'" class="online-image-display" />\n        </ion-item>\n\n        <ion-item style="height: 200px;">\n          <!-- <ion-label>{{ "Upload ID Proof" | translate }} </ion-label> -->\n          <button ion-button color="secondary" class="online-upload" (click)="upload(\'idproof\')" *ngIf="form.controls.idproof.value === \'\'">\n            Upload ID Proof\n          </button>\n          <button ion-button color="secondary" class="online-upload" (click)="upload(\'idproof\')" *ngIf="form.controls.idproof.value !== \'\'">\n            Replace ID Proof\n          </button>\n          <img src={{form.controls.idproof.value}} *ngIf="form.controls.idproof.value !== \'\'" class="online-image-display" />\n          <img src="https://identix.state.gov/qotw/images/no-photo.gif" *ngIf="form.controls.idproof.value === \'\'" class="online-image-display" />\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n  </form>\n\n  <p style="color: red; font-weight: bolder;">{{errorMsg}}</p>\n</ion-content>\n\n<ion-footer no-border class="online-create-footer" *ngIf="order > 0">\n  <ion-toolbar transparent>\n    <button ion-button half (click)="cancel()" *ngIf="order === 1">\n      {{ \'CANCEL\' | translate }}\n    </button>\n    <button ion-button half (click)="next(2)" [disabled]="!isReadyToSave1" *ngIf="order === 1">\n      {{ \'NEXT\' | translate }}\n    </button>\n\n    <button ion-button half (click)="next(1)" [disabled]="!isReadyToSave1" *ngIf="order === 2">\n      {{ \'BACK\' | translate }}\n    </button>\n    <button ion-button half (click)="next(3)" *ngIf="order === 2 && !isReadyToSave2">\n      {{ \'SKIP\' | translate }}\n    </button>\n    <button ion-button half (click)="next(3)" *ngIf="order === 2 && isReadyToSave2">\n      {{ \'NEXT\' | translate }}\n    </button>\n\n    <button ion-button half (click)="next(2)" *ngIf="order === 3">\n      {{ \'BACK\' | translate }}\n    </button>\n    <button ion-button half (click)="save()" *ngIf="order === 3 && !isReadyToSave3">\n      {{ \'SAVE\' | translate }}\n    </button>\n    <button ion-button half (click)="save()" *ngIf="order === 3 && isReadyToSave3">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/online-create/online-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* Online */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], OnlineAddPage);
    return OnlineAddPage;
}());

//# sourceMappingURL=online-create.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentIntegrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentIntegrationPage = /** @class */ (function () {
    function PaymentIntegrationPage(navCtrl, viewCtrl, formBuilder, toastCtrl, element, storage, online, alertController, actionSheetController, loadingController, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.element = element;
        this.storage = storage;
        this.online = online;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.orderId = navParams.get('orderId');
        this.customerName = navParams.get('customerName');
        this.customerPhone = navParams.get('customerPhone');
        this.customerEmail = navParams.get('customerEmail');
        this.signature = navParams.get('signature');
        this.orderAmount = navParams.get('orderAmount');
        this.programs = navParams.get('programs');
        this.appId = navParams.get('appId');
    }
    PaymentIntegrationPage.prototype.payNow = function () {
        document.getElementById("orderId").value = this.orderId;
        document.getElementById("customerName").value = this.customerName;
        document.getElementById("customerPhone").value = this.customerPhone;
        document.getElementById("customerEmail").value = this.customerEmail;
        document.getElementById("orderAmount").value = this.orderAmount;
        document.getElementById("signature").value = this.signature;
        document.getElementById("appId").value = this.appId;
        document.getElementById("redirectForm").submit();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
        __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
            title: "Success!",
            text: "Thankyou for your registration. We will contact you soon!",
            icon: "success",
        });
    };
    PaymentIntegrationPage.prototype.payLater = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */]);
        __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()({
            title: "Success!",
            text: "Thankyou for your registration. We will contact you soon!",
            icon: "success",
        });
    };
    PaymentIntegrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'payment-integration',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/payment-integration/payment-integration.html"*/'<form id="redirectForm" method="post" action="https://www.cashfree.com/checkout/post/submit">\n  <input type="hidden" name="appId" id="appId" value="" />\n  <input type="hidden" name="orderId" id="orderId" value="" />\n  <input type="hidden" name="orderAmount" id="orderAmount" value="" />\n  <input type="hidden" name="orderCurrency" value="INR" />\n  <input type="hidden" name="customerName" id="customerName" value="" />\n  <input type="hidden" name="customerEmail" id="customerEmail" value="" />\n  <input type="hidden" name="customerPhone" id="customerPhone" value="" />\n  <input type="hidden" name="returnUrl" value="https://slate-server.herokuapp.com/api/online/payments" />\n  <input type="hidden" name="notifyUrl" value="https://slate-server.herokuapp.com/api/online/payments" />\n  <input type="hidden" name="signature" id="signature" value="" />\n  <input type="submit" value="pay cashfree" id="payBtn" style="display:none" />\n</form>\n\n<ion-header class="onlne-create-header">\n  <ion-navbar color="primary">\n    <ion-title>{{ \'FEES PAYMENT\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <br />\n  <br />\n\n  <ion-card *ngFor="let item of programs">\n    <ion-card-header>\n      <p><b>{{item}}</b></p>\n      <ion-row>\n        <ion-col>\n          <p>Registration Fee</p>\n        </ion-col>\n        <ion-col>\n          <p>₹ 2000</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>Level 1 Fee</p>\n        </ion-col>\n        <ion-col>\n          <p>₹ 4500</p>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-row style="padding: 0 15px;">\n    <ion-col style="flex: 0 0 66%; width: 66%; max-width: 66%;">\n      <h3>TOTAL PAYABLE</h3>\n    </ion-col>\n    <ion-col style="flex: 0 0 33%; width: 33%; max-width: 33%;">\n      <h3 style="float: right;">₹ {{programs.length * 6500}}</h3>\n    </ion-col>\n  </ion-row>\n\n  <br />\n  <p style="text-align: center;">You can <b>Pay Now</b> through our safe payment gateway </p>\n  <p style="text-align: center;">OR</p>\n  <p style="text-align: center;">Pay at our centers by clicking on <b>Pay Later</b> button. </p>\n\n</ion-content>\n\n<ion-footer no-border class="online-create-footer">\n  <ion-toolbar transparent>\n    <button ion-button half (click)="payLater()">\n      {{ \'PAY LATER\' | translate }}\n    </button>\n    <button ion-button half (click)="payNow()">\n      {{ \'PAY NOW\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/payment-integration/payment-integration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* Online */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */]])
    ], PaymentIntegrationPage);
    return PaymentIntegrationPage;
}());

//# sourceMappingURL=payment-integration.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
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
        // url: string = 'http://localhost:8080';
        this.url = 'https://slate-server.herokuapp.com';
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

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineViewPageModule", function() { return OnlineViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__online_view__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnlineViewPageModule = /** @class */ (function () {
    function OnlineViewPageModule() {
    }
    OnlineViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__online_view__["a" /* OnlineViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__online_view__["a" /* OnlineViewPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__online_view__["a" /* OnlineViewPage */]
            ]
        })
    ], OnlineViewPageModule);
    return OnlineViewPageModule;
}());

//# sourceMappingURL=online-view.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POKartTabModule", function() { return POKartTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pokart_tab__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var POKartTabModule = /** @class */ (function () {
    function POKartTabModule() {
    }
    POKartTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pokart_tab__["a" /* POKartTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__pokart_tab__["a" /* POKartTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__pokart_tab__["a" /* POKartTab */]
            ]
        })
    ], POKartTabModule);
    return POKartTabModule;
}());

//# sourceMappingURL=pokart-tab.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POKartTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var POKartTab = /** @class */ (function () {
    function POKartTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, postOrders, courseMappings, formBuilder, nav, storage, viewCtrl) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
        this.postOrders = postOrders;
        this.courseMappings = courseMappings;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.programs = [];
        this.allLevels = [];
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.postOrder = this.navParams.data;
    }
    POKartTab.prototype.ionViewDidLoad = function () { };
    POKartTab.prototype.getCourseName = function (id) {
        console.log(id);
        var selectedCourse = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.courses, function (o) { return o._id == id; });
        console.log(selectedCourse);
        if (selectedCourse != undefined)
            return selectedCourse.program_name;
        return '';
    };
    POKartTab.prototype.pay = function (num) {
        var _this = this;
        this.postOrders.add(this.postOrder).subscribe(function (resp) {
            if (num == 0)
                _this.nav.getActiveChildNav().select(2, resp);
            else
                _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in saving the Post Order. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    POKartTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "pokart-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/pokart-tab/pokart-tab.html"*/'<ion-content>\n\n    <ion-card-content>\n        <div class=\'summary_row\'>\n            <div  class=\'summarycell summarycell1\'>Course</div>\n            <div  class=\'summarycell summarycell2\'>Level</div>\n            <div  class=\'summarycell summarycell3\'>Quantity</div>\n            <div  class=\'summarycell summarycell4\'>Total Price</div>\n        </div>\n\n        <div  class=\'summary_row\' *ngFor="let pop of postOrder.products">\n            <div  class=\'summarycell summarycell1 cell\'>{{getCourseName(pop.course)}}</div>\n            <div  class=\'summarycell summarycell2 cell\'>Level {{pop.level}}</div>\n            <div  class=\'summarycell summarycell3 cell\'>{{pop.quantity}}</div>\n            <div  class=\'summarycell summarycell4 cell\'>Rs. {{pop.total_price}}</div>\n        </div>\n    </ion-card-content>\n\n<ion-footer no-border>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="pay(0)" style="width:50%;float:left;">\n            {{ \'PAY NOW\' | translate }}\n        </button>\n        <button ion-button full (click)="pay(1)" style="width:50%;float:left;">\n                {{ \'PAY LATER\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/pokart-tab/pokart-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["j" /* PostOrder */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* CourseMapping */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], POKartTab);
    return POKartTab;
}());

//# sourceMappingURL=pokart-tab.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPaymentTabModule", function() { return POPaymentTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popayment_tab__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var POPaymentTabModule = /** @class */ (function () {
    function POPaymentTabModule() {
    }
    POPaymentTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__popayment_tab__["a" /* POPaymentTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__popayment_tab__["a" /* POPaymentTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__popayment_tab__["a" /* POPaymentTab */]
            ]
        })
    ], POPaymentTabModule);
    return POPaymentTabModule;
}());

//# sourceMappingURL=popayment-tab.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POPaymentTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var POPaymentTab = /** @class */ (function () {
    function POPaymentTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, postOrders, courseMappings, formBuilder, nav, storage, viewCtrl) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
        this.postOrders = postOrders;
        this.courseMappings = courseMappings;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.programs = [];
        this.allLevels = [];
        this.form = this.formBuilder.group({
            _id: [''],
            center: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dispatch_center: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            order_date: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            total_amount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            products: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            payment_method: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            payment_date: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            bank_name: [''],
            transaction_no: [''],
            remarks: [''],
            dispatched: [''],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    POPaymentTab.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.postOrder = this.navParams.data;
        this.form.controls['_id'].setValue(this.postOrder._id);
        this.form.controls['center'].setValue(this.postOrder.center);
        this.form.controls['dispatch_center'].setValue(this.postOrder.dispatch_center);
        this.form.controls['order_date'].setValue(this.postOrder.order_date);
        this.form.controls['total_amount'].setValue(this.postOrder.total_amount);
        this.form.controls['products'].setValue(this.postOrder.products);
        this.form.controls['payment_method'].setValue(this.postOrder.payment_method);
        this.form.controls['payment_date'].setValue(this.postOrder.payment_date);
        this.form.controls['bank_name'].setValue(this.postOrder.bank_name);
        this.form.controls['transaction_no'].setValue(this.postOrder.transaction_no);
        this.form.controls['remarks'].setValue(this.postOrder.remarks);
        this.form.controls['dispatched'].setValue(this.postOrder.dispatched);
        this.courseMappings.query().subscribe(function (res) {
            _this.courseMappingList = res;
            for (var c = 0; c < _this.courseMappingList.length; c++) {
                if (_this.courseMappingList[c].center === _this.form.value.center && _this.courseMappingList[c].dispatch_center === _this.form.value.dispatch_center
                    && _this.courseMappingList[c].products.length === _this.form.value.products.length && _this.courseMappingList[c].total_amount === _this.form.value.total_amount)
                    _this.form.controls['_id'].setValue(_this.courseMappingList[c]._id);
            }
        }, function (err) {
            console.log('Error', err);
        });
    };
    POPaymentTab.prototype.save = function () {
        var _this = this;
        if (this.form.value._id != '' && this.form.value._id != undefined) {
            this.postOrders.update(this.form.value).subscribe(function (resp) {
                _this.viewCtrl.dismiss();
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "Error in saving the Post Order. Please try again.",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Cannot find more details. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ;
    POPaymentTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "popayment-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/popayment-tab/popayment-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n\n            <ion-item>\n                <ion-label floating>{{ \'Total Amount:\' | translate }} </ion-label>\n                <ion-input type="text" formControlName="total_amount" [disabled]="true"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating> {{ \'Payment Method:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="payment_method" cancelText="Cancel" okText="Okay" multiple="false">\n                    <ion-option value=\'bank transfer\'>Bank Transfer</ion-option>\n                    <ion-option value=\'cheque\'>Cheque / DD</ion-option>\n                    <ion-option value=\'cash\'>Cash</ion-option>\n                </ion-select>\n            </ion-item>   \n\n            <ion-item>\n                <ion-label floating>{{ \'Payment Date:\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-datetime formControlName="payment_date" displayFormat="DD/MMM/YYYY" ></ion-datetime>\n            </ion-item>  \n\n            <ion-item>\n                <ion-label floating>{{ \'Bank Name:\' | translate }} </ion-label>\n                <ion-input type="text" formControlName="bank_name"></ion-input>\n            </ion-item>\n          \n            <ion-item>\n                <ion-label floating>{{ \'Trasaction / Cheque No:\' | translate }} </ion-label>\n                <ion-input type="text" formControlName="transaction_no"></ion-input>\n            </ion-item>\n\n        </ion-list>\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="save()" ng-disabled="!isReadyToSave">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/popayment-tab/popayment-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["j" /* PostOrder */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* CourseMapping */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], POPaymentTab);
    return POPaymentTab;
}());

//# sourceMappingURL=popayment-tab.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POShopTabModule", function() { return POShopTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poshop_tab__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var POShopTabModule = /** @class */ (function () {
    function POShopTabModule() {
    }
    POShopTabModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__poshop_tab__["a" /* POShopTab */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__poshop_tab__["a" /* POShopTab */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__poshop_tab__["a" /* POShopTab */]
            ]
        })
    ], POShopTabModule);
    return POShopTabModule;
}());

//# sourceMappingURL=poshop-tab.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POShopTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var POShopTab = /** @class */ (function () {
    function POShopTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, postOrders, courseMappings, formBuilder, nav, storage) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
        this.postOrders = postOrders;
        this.courseMappings = courseMappings;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.storage = storage;
        this.isReadyToSave = false;
        this.isDuplicate = false;
        this.programs = [];
        this.allLevels = [];
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.courseMappings.query().subscribe(function (res) {
            _this.courseMappingList = res;
        }, function (err) {
            console.log('Error', err);
        });
        this.postOrder = this.navParams.data;
        this.storage.get('user').then(function (value) {
            _this.user = value;
            if (_this.user.role === 'admin')
                _this.postOrder.center = '5d21c4a95bedd22d45e765b3';
            if (_this.user.role === 'master')
                _this.postOrder.center = _this.user.user_state;
            if (_this.user.role === 'district')
                _this.postOrder.center = _this.user.user_district;
            if (_this.user.role === 'unit')
                _this.postOrder.center = _this.user.user_center;
            _this.programs = [];
            var cent = _this.postOrder.center;
            var selectedCenter = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](_this.branches, function (o) { return o._id == cent; });
            console.log('selectedCenter', selectedCenter);
            _this.postOrder.dispatch_center = selectedCenter.center_parent;
            for (var p = 0; p < _this.courses.length; p++) {
                if (selectedCenter.programs.includes(_this.courses[p]._id))
                    _this.programs.push(_this.courses[p]);
            }
        });
        this.form = formBuilder.group({
            course: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            level: [1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            price: [0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            quantity: [0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            total_price: [0, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    POShopTab.prototype.ionViewDidLoad = function () { };
    POShopTab.prototype.onCourseChange = function () {
        var value = this.form.value;
        var selectedCourse = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.courses, function (o) { return o._id == value.course; });
        this.allLevels = Array.from({ length: selectedCourse.total_levels }, function (v, k) { return k + 1; });
    };
    POShopTab.prototype.onLevelChange = function () {
        var value = this.form.value;
        var center = this.postOrder.center;
        var courseMappingList = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.courseMappingList, function (o) {
            return (o.center == center && o.course == value.course && o.level == value.level);
        });
    };
    POShopTab.prototype.onQuantityChange = function () {
        this.form.controls['total_price'].setValue(Number(this.form.value.quantity) * Number(this.form.value.price));
    };
    POShopTab.prototype.mergePO = function (products) {
        for (var p = 0; p < products.length; p++) {
            for (var a = (p + 1); a < products.length; a++) {
                if (products[p].course == products[a].course && products[p].level == products[a].level) {
                    products[p].quantity += products[p].quantity;
                    products[p].total_price += products[p].total_price;
                    products.splice(a, 1);
                    a--;
                }
            }
            if (products[p].quantity <= 0) {
                products.splice(p, 1);
                p--;
            }
        }
        return products;
    };
    POShopTab.prototype.save = function () {
        this.postOrder.products.push(this.form.value);
        this.postOrder.products = this.mergePO(this.postOrder.products);
        this.postOrder.total_amount = 0;
        for (var p = 0; p < this.postOrder.products.length; p++) {
            this.postOrder.total_amount += this.postOrder.products[p].total_price;
        }
        this.form.controls['course'].setValue('');
        this.form.controls['level'].setValue(1);
        this.form.controls['price'].setValue(0);
        this.form.controls['quantity'].setValue(0);
        this.form.controls['total_price'].setValue(0);
        this.nav.getActiveChildNav().select(1, this.postOrder);
    };
    POShopTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "poshop-tab",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/poshop-tab/poshop-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n\n            <ion-item>\n                <ion-label floating> {{ \'Program:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="course" cancelText="Cancel" okText="Okay" multiple="false"\n                            (ionChange)="onCourseChange()">\n                    <ion-option value={{course._id}} *ngFor="let course of programs">{{course.program_name}}</ion-option>\n                </ion-select>\n            </ion-item>   \n\n            <ion-item>\n                <ion-label floating>{{ \'Level:\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="level"\n                        (ionChange)="onLevelChange()">\n                    <ion-option value={{level}} *ngFor="let level of allLevels">Level {{level}}</ion-option>\n                </ion-select>\n            </ion-item>  \n\n            <ion-item>\n                <ion-label floating>{{ \'Price Per Quantity (Rs.):\' | translate }} </ion-label>\n                <ion-input type="text" formControlName="price" [disabled]="true"></ion-input>\n            </ion-item>\n          \n            <ion-item>\n                <ion-label floating>{{ \'Quantity:\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="number" formControlName="quantity" (ionChange)="onQuantityChange()"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>{{ \'Total Price (Rs.):\' | translate }} </ion-label>\n                <ion-input type="text" formControlName="price" [disabled]="true"></ion-input>\n            </ion-item>\n\n                \n        </ion-list>\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="save()" ng-disabled="!isReadyToSave">\n            {{ \'ADD TO CART\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/poshop-tab/poshop-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["j" /* PostOrder */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* CourseMapping */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], POShopTab);
    return POShopTab;
}());

//# sourceMappingURL=poshop-tab.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostOrderAddPageModule", function() { return PostOrderAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postorder_create__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostOrderAddPageModule = /** @class */ (function () {
    function PostOrderAddPageModule() {
    }
    PostOrderAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__postorder_create__["a" /* PostOrderAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__postorder_create__["a" /* PostOrderAddPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__postorder_create__["a" /* PostOrderAddPage */]
            ]
        })
    ], PostOrderAddPageModule);
    return PostOrderAddPageModule;
}());

//# sourceMappingURL=postorder-create.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostOrderListPageModule", function() { return PostOrderListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postorder_list__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostOrderListPageModule = /** @class */ (function () {
    function PostOrderListPageModule() {
    }
    PostOrderListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__postorder_list__["a" /* PostOrderListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__postorder_list__["a" /* PostOrderListPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__postorder_list__["a" /* PostOrderListPage */]
            ]
        })
    ], PostOrderListPageModule);
    return PostOrderListPageModule;
}());

//# sourceMappingURL=postorder-list.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTabModule", function() { return ProfileTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_tab__ = __webpack_require__(268);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile_tab__["a" /* ProfileTab */]),
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

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramAddPageModule", function() { return ProgramAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_create__ = __webpack_require__(769);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__program_create__["a" /* ProgramAddPage */]),
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

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDetailPageModule", function() { return ProgramDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_detail__ = __webpack_require__(770);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__program_detail__["a" /* ProgramDetailPage */]),
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

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramEditPageModule", function() { return ProgramEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__program_update__ = __webpack_require__(771);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__program_update__["a" /* ProgramEditPage */]),
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

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsListPageModule", function() { return ProgramsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__programs_list__ = __webpack_require__(772);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__programs_list__["a" /* ProgramsListPage */]),
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

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesEditModule", function() { return StatesEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_edit__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatesEditModule = /** @class */ (function () {
    function StatesEditModule() {
    }
    StatesEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__states_edit__["a" /* StatesEdit */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__states_edit__["a" /* StatesEdit */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__states_edit__["a" /* StatesEdit */]
            ]
        })
    ], StatesEditModule);
    return StatesEditModule;
}());

//# sourceMappingURL=states-edit.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesTabModule", function() { return StatesTabModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_tab__ = __webpack_require__(254);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__states_tab__["a" /* StatesTab */]),
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

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEnquiryAddPageModule", function() { return StudentEnquiryAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentenquiry_create__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudentEnquiryAddPageModule = /** @class */ (function () {
    function StudentEnquiryAddPageModule() {
    }
    StudentEnquiryAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_create__["a" /* StudentEnquiryAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__studentenquiry_create__["a" /* StudentEnquiryAddPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_create__["a" /* StudentEnquiryAddPage */]
            ]
        })
    ], StudentEnquiryAddPageModule);
    return StudentEnquiryAddPageModule;
}());

//# sourceMappingURL=studentenquiry-create.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEnquiryListPageModule", function() { return StudentEnquiryListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentenquiry_list__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudentEnquiryListPageModule = /** @class */ (function () {
    function StudentEnquiryListPageModule() {
    }
    StudentEnquiryListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_list__["a" /* StudentEnquiryListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__studentenquiry_list__["a" /* StudentEnquiryListPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_list__["a" /* StudentEnquiryListPage */]
            ]
        })
    ], StudentEnquiryListPageModule);
    return StudentEnquiryListPageModule;
}());

//# sourceMappingURL=studentenquiry-list.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEnquiryEditPageModule", function() { return StudentEnquiryEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentenquiry_update__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudentEnquiryEditPageModule = /** @class */ (function () {
    function StudentEnquiryEditPageModule() {
    }
    StudentEnquiryEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_update__["a" /* StudentEnquiryEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__studentenquiry_update__["a" /* StudentEnquiryEditPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_update__["a" /* StudentEnquiryEditPage */]
            ]
        })
    ], StudentEnquiryEditPageModule);
    return StudentEnquiryEditPageModule;
}());

//# sourceMappingURL=studentenquiry-update.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEnquiryViewPageModule", function() { return StudentEnquiryViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentenquiry_view__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudentEnquiryViewPageModule = /** @class */ (function () {
    function StudentEnquiryViewPageModule() {
    }
    StudentEnquiryViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_view__["a" /* StudentEnquiryViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__studentenquiry_view__["a" /* StudentEnquiryViewPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_view__["a" /* StudentEnquiryViewPage */]
            ]
        })
    ], StudentEnquiryViewPageModule);
    return StudentEnquiryViewPageModule;
}());

//# sourceMappingURL=studentenquiry-view.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(778);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
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

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function() { return UserDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail__ = __webpack_require__(779);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_detail__["a" /* UserDetailPage */]),
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

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdatePageModule", function() { return UserUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_update__ = __webpack_require__(780);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__user_update__["a" /* UserUpdatePage */]),
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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_lists__ = __webpack_require__(781);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__users_lists__["a" /* UsersPage */]),
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

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentIntegrationPageModule", function() { return PaymentIntegrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_integration__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentIntegrationPageModule = /** @class */ (function () {
    function PaymentIntegrationPageModule() {
    }
    PaymentIntegrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__payment_integration__["a" /* PaymentIntegrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__payment_integration__["a" /* PaymentIntegrationPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__payment_integration__["a" /* PaymentIntegrationPage */]
            ]
        })
    ], PaymentIntegrationPageModule);
    return PaymentIntegrationPageModule;
}());

//# sourceMappingURL=payment-integration.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorEnquiryAddPageModule", function() { return InstructorEnquiryAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_create__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InstructorEnquiryAddPageModule = /** @class */ (function () {
    function InstructorEnquiryAddPageModule() {
    }
    InstructorEnquiryAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_create__["a" /* InstructorEnquiryAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__instructorenquiry_create__["a" /* InstructorEnquiryAddPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_create__["a" /* InstructorEnquiryAddPage */]
            ]
        })
    ], InstructorEnquiryAddPageModule);
    return InstructorEnquiryAddPageModule;
}());

//# sourceMappingURL=instructorenquiry-create.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowupCreateTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FollowupCreateTab = /** @class */ (function () {
    function FollowupCreateTab(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, formBuilder, nav, storage, franchise, viewCtrl) {
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
        this.storage = storage;
        this.franchise = franchise;
        this.viewCtrl = viewCtrl;
        this.isReadyToSave = false;
        this.franchiseEnquiry = navParams.data;
        this.followups = this.franchiseEnquiry.follow_up;
        this.form = formBuilder.group({
            user: [''],
            dated: [new Date()],
            comment: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.storage.get('user').then(function (value) {
            _this.form.controls['user'].setValue(value._id);
        });
    }
    FollowupCreateTab.prototype.save = function () {
        var _this = this;
        this.franchiseEnquiry.follow_up.push(this.form.value);
        delete this.franchiseEnquiry['__v'];
        this.franchise.update(this.franchiseEnquiry).subscribe(function (resp) {
            _this.nav.setRoot("FranchiseEnquiryListPage");
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding Followup. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    FollowupCreateTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'followupcreate-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/followupcreate-tab/followupcreate-tab.html"*/'<ion-content>\n    <form [formGroup]="form">\n        <ion-textarea #myInput id="myInput" rows="17" maxLength="5000" formControlName="comment" placeholder="{{ \'Remarks\' | translate }}"></ion-textarea>\n    </form>\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="save()" [disabled]="!isReadyToSave">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/followupcreate-tab/followupcreate-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["d" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], FollowupCreateTab);
    return FollowupCreateTab;
}());

//# sourceMappingURL=followupcreate-tab.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowupViewTab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
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
        this.franchiseEnquiry = navParams.data;
        this.followups = this.franchiseEnquiry.follow_up;
        this.user.users_list().subscribe(function (res) {
            _this.allusers = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    FollowupViewTab.prototype.findUser = function (user, option) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allusers, function (i) {
            return i._id == user;
        });
        var vals = (val != undefined && val[option] != undefined) ? val[option] : '';
        console.log('vals', vals);
        return vals;
    };
    FollowupViewTab = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'followupview-tab',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/followupview-tab/followupview-tab.html"*/'<ion-content>\n\n    <ion-card *ngFor="let card of followups" style="top: 0;">\n        <ion-item>\n            <ion-avatar item-left>\n                <img src="{{findUser(card.user, \'profile_pic\')}}" />\n            </ion-avatar>\n            <h2>{{findUser(card.user, \'name\')}}</h2>\n            <p>{{card.dated | date: \'dd/MMM/yyyy H:mm\'}}</p>\n        </ion-item>\n        <ion-card-content>\n            <p style="border-bottom: none;" >{{card.comment}}</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf="followups.length < 1" style="top: 0;">\n        <ion-card-content>\n            We see that there are no followup\'s yet for this Enquiry. <br>\n            Do a new Enquiry by going on Create on top.\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/followupview-tab/followupview-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["n" /* User */]])
    ], FollowupViewTab);
    return FollowupViewTab;
}());

//# sourceMappingURL=followupview-tab.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_page_home_page__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__online_create_online_create__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser_ngx__ = __webpack_require__(280);
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
    function WelcomePage(navCtrl, toastCtrl, translateService, loadingCtrl, formBuilder, viewCtrl, app, user, storage, iab, platform) {
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
        this.iab = iab;
        this.platform = platform;
        this.loginRole = '';
        // @ViewChild(Nav) nav: Nav;
        this.pages = [{ title: "Users Lists", component: "UsersPage" }];
        this.account = {
            email: "",
            password: ""
        };
        this.passwordType = "password";
        this.passwordIcon = "Show";
        this.platform.backButton.subscribe(function () {
            _this.storage.remove('selectedUserRole');
            _this.loginRole = '';
        });
        this.storage.get("selectedUserRole").then(function (val) {
            if (val) {
                _this.loginRole = val;
            }
        });
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
            console.log("value", value);
            if (value) {
                console.log(value);
                _this.user.checkAuthentication(value).then(function (resp) {
                    loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_page_home_page__["a" /* HomePage */]);
                }, function (err) {
                    loading.dismiss();
                });
            }
            else {
                loading.dismiss();
            }
        });
    };
    WelcomePage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "Show" ? "Hide" : "Show";
    };
    WelcomePage.prototype.signIn = function () {
        var _this = this;
        console.log(this.form.value);
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
                console.log('resp', resp);
                loading_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_page_home_page__["a" /* HomePage */]);
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Invalid Credentials',
                    duration: 3000,
                    position: "top"
                });
                toast.present();
            });
        }
    };
    WelcomePage.prototype.loginAs = function (role) {
        this.storage.set('selectedUserRole', role);
        this.loginRole = role;
    };
    WelcomePage.prototype.removeRole = function () {
        this.storage.remove('selectedUserRole');
        this.loginRole = '';
    };
    WelcomePage.prototype.registerOnline = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__online_create_online_create__["a" /* OnlineAddPage */]);
    };
    WelcomePage.prototype.contactUs = function () {
        var browser = this.iab.create("http://www.alohaindia.com/contact-us/");
        browser.show();
    };
    WelcomePage.prototype.feedback = function () {
        var browser = this.iab.create("http://www.alohaindia.com/feedback/");
        browser.show();
    };
    WelcomePage.prototype.faq = function () {
        var browser = this.iab.create("http://www.alohaindia.com/faq/");
        browser.show();
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-welcome",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/welcome/welcome.html"*/'<ion-content scroll="false" *ngIf="loginRole == \'\'">\n\n  <div class="student fadeInDownBig" (click)="loginAs(\'student\')">\n    <img src="../../assets/img/imageedit_1_6160473537.png" />\n  </div>\n\n  <div class="franchise fadeInLeft" (click)="loginAs(\'franchise\')">\n    <img src="../../assets/img/imageedit_18_8861331182.png" />\n  </div>\n\n  <div class="admin fadeInRight" (click)="loginAs(\'admin\')">\n    <img src="../../assets/img/imageedit_17_3302521817.png" />\n    </div>\n\n</ion-content>\n\n<ion-content scroll="false" *ngIf="loginRole != \'\'">\n  <div class="">\n\n    <div class="logoHeader fadeInDownBig">\n      <img alt="logo" height="60" style="position: relative" src="../assets/img/icon-512x512.png">\n    </div>\n\n    <h1 class="welcomeHeader"> \n      Login as \n      <a (click)="removeRole()" style="color:#61a842;text-decoration:underline !important;" > {{loginRole}} </a>\n    </h1>\n\n    <form *ngIf="form" [formGroup]="form">\n      <div padding>\n        <ion-input type="email" [(ngModel)]="account.email" class="input-access-code fadeInLeft" placeholder="Email"\n          formControlName="user_name"></ion-input>\n        <br>\n        <ion-input [type]="passwordType" [(ngModel)]="account.password" class="input-access-code fadeInRight"\n          placeholder="Password" formControlName="user_pass"></ion-input>\n        <br>\n        <ion-icon item-end [name]="passwordIcon" class="passwordIcon fadeInRight" (click)=\'hideShowPassword()\'\n          style="z-index:9999999;">{{passwordIcon}}\n          Password</ion-icon>\n        <br>\n        <a (click)="signIn()">\n          <button ion-button block class="login fadeInUp"\n            style="color:white !important;">{{ \'LOGIN\' | translate }}</button>\n        </a>\n        <a (click)="registerOnline()" *ngIf="loginRole === \'student\'">\n          <button ion-button block class="register fadeInUp"\n            style="color:white !important;">{{ \'REGISTER\' | translate }}</button>\n        </a>\n      </div>\n    </form>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(437);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number_ngx__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser_ngx__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_page_home_page_module__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_tab_home_tab_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_notification_tab_notification_tab_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_tab_profile_tab_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_programs_list_programs_list_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_program_create_program_create_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_program_detail_program_detail_module__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_program_update_program_update_module__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_centers_page_centers_page_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_district_tab_district_tab_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_states_tab_states_tab_module__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_branches_tab_branches_tab_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_area_tab_area_tab_module__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_area_edit_area_edit_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_states_edit_states_edit_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_district_edit_district_edit_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_users_lists_users_lists_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_user_add_signup_module__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_user_detail_user_detail_module__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_user_update_user_update_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_franchiseenquiry_create_franchiseenquiry_create_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_franchiseenquiry_edit_franchiseenquiry_edit_module__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_franchiseenquiry_list_franchiseenquiry_list_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_franchiseenquiry_view_franchiseenquiry_view_module__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_franchiseenquiry_confirm_franchiseenquiry_confirm_module__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_followupcreate_tab_followupcreate_tab_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_followupview_tab_followupview_tab_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_instructorenquiry_create_instructorenquiry_create_module__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_instructorenquiry_list_instructorenquiry_list_module__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_instructorenquiry_update_instructorenquiry_update_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_instructorenquiry_view_instructorenquiry_view_module__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_studentenquiry_create_studentenquiry_create_module__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_studentenquiry_list_studentenquiry_list_module__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_studentenquiry_update_studentenquiry_update_module__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_studentenquiry_view_studentenquiry_view_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_coursemapping_coursemapping_module__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_postorder_list_postorder_list_module__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_postorder_create_postorder_create_module__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_pokart_tab_pokart_tab_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_popayment_tab_popayment_tab_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_poshop_tab_poshop_tab_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_online_create_online_create_module__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_online_report_online_report_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_online_view_online_view_module__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_payment_integration_payment_integration_module__ = __webpack_require__(388);
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
    return new __WEBPACK_IMPORTED_MODULE_13__providers__["l" /* Settings */](storage, {
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
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_page_home_page_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_tab_home_tab_module__["HomeTabModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_tab_profile_tab_module__["ProfileTabModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_notification_tab_notification_tab_module__["NotificationTabModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_program_create_program_create_module__["ProgramAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_program_detail_program_detail_module__["ProgramDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_program_update_program_update_module__["ProgramEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_programs_list_programs_list_module__["ProgramsListPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_users_lists_users_lists_module__["UsersPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_user_add_signup_module__["SignupPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_user_detail_user_detail_module__["UserDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_user_update_user_update_module__["UserUpdatePageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_centers_page_centers_page_module__["CentersPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_district_tab_district_tab_module__["DistrictTabModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_states_tab_states_tab_module__["StatesTabModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_branches_tab_branches_tab_module__["BranchesTabModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_area_tab_area_tab_module__["AreaTabModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_states_edit_states_edit_module__["StatesEditModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_area_edit_area_edit_module__["AreaEditModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_district_edit_district_edit_module__["DistrictEditModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_franchiseenquiry_create_franchiseenquiry_create_module__["FranchiseEnquiryAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_franchiseenquiry_edit_franchiseenquiry_edit_module__["FranchiseEnquiryEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_franchiseenquiry_list_franchiseenquiry_list_module__["FranchiseEnquiryListPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_franchiseenquiry_view_franchiseenquiry_view_module__["FranchiseEnquiryViewPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_franchiseenquiry_confirm_franchiseenquiry_confirm_module__["FranchiseEnquiryConfirmPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_followupcreate_tab_followupcreate_tab_module__["FollowupCreateTabModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_followupview_tab_followupview_tab_module__["FollowupViewTabModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_instructorenquiry_create_instructorenquiry_create_module__["InstructorEnquiryAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_instructorenquiry_list_instructorenquiry_list_module__["InstructorEnquiryListPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_instructorenquiry_update_instructorenquiry_update_module__["InstructorEnquiryEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_instructorenquiry_view_instructorenquiry_view_module__["InstructorEnquiryViewPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_studentenquiry_create_studentenquiry_create_module__["StudentEnquiryAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_studentenquiry_list_studentenquiry_list_module__["StudentEnquiryListPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_studentenquiry_update_studentenquiry_update_module__["StudentEnquiryEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_studentenquiry_view_studentenquiry_view_module__["StudentEnquiryViewPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_coursemapping_coursemapping_module__["CourseMappingPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_postorder_list_postorder_list_module__["PostOrderListPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_postorder_create_postorder_create_module__["PostOrderAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_pokart_tab_pokart_tab_module__["POKartTabModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_popayment_tab_popayment_tab_module__["POPaymentTabModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_poshop_tab_poshop_tab_module__["POShopTabModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_online_create_online_create_module__["OnlineAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_57__pages_online_report_online_report_module__["OnlineReportPageModule"],
                __WEBPACK_IMPORTED_MODULE_58__pages_online_view_online_view_module__["OnlineViewPageModule"],
                __WEBPACK_IMPORTED_MODULE_59__pages_payment_integration_payment_integration_module__["PaymentIntegrationPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/area-edit/area-edit.module#AreaEditModule', name: 'AreaEdit', segment: 'area-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/area-tab/area-tab.module#AreaTabModule', name: 'AreaTab', segment: 'area-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/branches-tab/branches-tab.module#BranchesTabModule', name: 'BranchesTab', segment: 'branches-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/centers-page/centers-page.module#CentersPageModule', name: 'CentersPage', segment: 'centers-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coursemapping/coursemapping.module#CourseMappingPageModule', name: 'CourseMappingPage', segment: 'coursemapping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/district-tab/district-tab.module#DistrictTabModule', name: 'DistrictTab', segment: 'district-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followup-page/followup-page.module#FollowupPageModule', name: 'FollowupPage', segment: 'followup-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followupcreate-tab/followupcreate-tab.module#FollowupCreateTabModule', name: 'FollowupCreateTab', segment: 'followupcreate-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followupview-tab/followupview-tab.module#FollowupViewTabModule', name: 'FollowupViewTab', segment: 'followupview-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-confirm/franchiseenquiry-confirm.module#FranchiseEnquiryConfirmPageModule', name: 'FranchiseEnquiryConfirmPage', segment: 'franchiseenquiry-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-create/franchiseenquiry-create.module#FranchiseEnquiryAddPageModule', name: 'FranchiseEnquiryAddPage', segment: 'franchiseenquiry-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-edit/franchiseenquiry-edit.module#FranchiseEnquiryEditPageModule', name: 'FranchiseEnquiryEditPage', segment: 'franchiseenquiry-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-list/franchiseenquiry-list.module#FranchiseEnquiryListPageModule', name: 'FranchiseEnquiryListPage', segment: 'franchiseenquiry-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/franchiseenquiry-view/franchiseenquiry-view.module#FranchiseEnquiryViewPageModule', name: 'FranchiseEnquiryViewPage', segment: 'franchiseenquiry-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-page/home-page.module#HomePageModule', name: 'HomePage', segment: 'home-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tab/home-tab.module#HomeTabModule', name: 'HomeTab', segment: 'home-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/district-edit/district-edit.module#DistrictEditModule', name: 'DistrictEdit', segment: 'district-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructorenquiry-list/instructorenquiry-list.module#InstructorEnquiryListPageModule', name: 'InstructorEnquiryListPage', segment: 'instructorenquiry-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructorenquiry-update/instructorenquiry-update.module#InstructorEnquiryEditPageModule', name: 'InstructorEnquiryEditPage', segment: 'instructorenquiry-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructorenquiry-view/instructorenquiry-view.module#InstructorEnquiryViewPageModule', name: 'InstructorEnquiryViewPage', segment: 'instructorenquiry-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification-tab/notification-tab.module#NotificationTabModule', name: 'NotificationTab', segment: 'notification-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/online-report/online-report.module#OnlineReportPageModule', name: 'OnlineReportPage', segment: 'online-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/online-create/online-create.module#OnlineAddPageModule', name: 'OnlineAddPage', segment: 'online-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/online-view/online-view.module#OnlineViewPageModule', name: 'OnlineViewPage', segment: 'online-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pokart-tab/pokart-tab.module#POKartTabModule', name: 'POKartTab', segment: 'pokart-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popayment-tab/popayment-tab.module#POPaymentTabModule', name: 'POPaymentTab', segment: 'popayment-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/poshop-tab/poshop-tab.module#POShopTabModule', name: 'POShopTab', segment: 'poshop-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postorder-create/postorder-create.module#PostOrderAddPageModule', name: 'PostOrderAddPage', segment: 'postorder-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postorder-list/postorder-list.module#PostOrderListPageModule', name: 'PostOrderListPage', segment: 'postorder-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-tab/profile-tab.module#ProfileTabModule', name: 'ProfileTab', segment: 'profile-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program -create/program-create.module#ProgramAddPageModule', name: 'ProgramAddPage', segment: 'program-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program -detail/program-detail.module#ProgramDetailPageModule', name: 'ProgramDetailPage', segment: 'program-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/program -update/program-update.module#ProgramEditPageModule', name: 'ProgramEditPage', segment: 'program-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programs-list/programs-list.module#ProgramsListPageModule', name: 'ProgramsListPage', segment: 'programs-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/states-edit/states-edit.module#StatesEditModule', name: 'StatesEdit', segment: 'states-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/states-tab/states-tab.module#StatesTabModule', name: 'StatesTab', segment: 'states-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentenquiry-confirm/studentenquiry-confirm.module#StudentEnquiryConfirmPageModule', name: 'StudentEnquiryConfirmPage', segment: 'studentenquiry-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentenquiry-create/studentenquiry-create.module#StudentEnquiryAddPageModule', name: 'StudentEnquiryAddPage', segment: 'studentenquiry-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentenquiry-list/studentenquiry-list.module#StudentEnquiryListPageModule', name: 'StudentEnquiryListPage', segment: 'studentenquiry-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentenquiry-update/studentenquiry-update.module#StudentEnquiryEditPageModule', name: 'StudentEnquiryEditPage', segment: 'studentenquiry-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studentenquiry-view/studentenquiry-view.module#StudentEnquiryViewPageModule', name: 'StudentEnquiryViewPage', segment: 'studentenquiry-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-add/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-detail/user-detail.module#UserDetailPageModule', name: 'UserDetailPage', segment: 'user-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-update/user-update.module#UserUpdatePageModule', name: 'UserUpdatePage', segment: 'user-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users-lists/users_lists.module#UsersPageModule', name: 'UsersPage', segment: 'users_lists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-integration/payment-integration.module#PaymentIntegrationPageModule', name: 'PaymentIntegrationPage', segment: 'payment-integration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instructorenquiry-create/instructorenquiry-create.module#InstructorEnquiryAddPageModule', name: 'InstructorEnquiryAddPage', segment: 'instructorenquiry-create', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number_ngx__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["n" /* User */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["k" /* Programs */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["e" /* Instructor */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["b" /* Center */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["d" /* Franchise */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["m" /* Students */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["c" /* CourseMapping */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["j" /* PostOrder */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["g" /* Notifications */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["i" /* Passbook */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["f" /* Inventory */],
                __WEBPACK_IMPORTED_MODULE_13__providers__["h" /* Online */],
                { provide: __WEBPACK_IMPORTED_MODULE_13__providers__["l" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AreaEdit = /** @class */ (function () {
    function AreaEdit(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.isReadyToSave = false;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return item.center_type != "unit";
            });
        }, function (err) {
            console.error("ERROR", err);
        });
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.form = formBuilder.group({
            _id: [''],
            center_id: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_type: ["unit"],
            center_parent: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            active: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            programs: [[], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        var center = navParams.get("branch");
        this.form.controls["_id"].setValue(center._id);
        this.form.controls["center_id"].setValue(center.center_id);
        this.form.controls["center_name"].setValue(center.center_name);
        this.form.controls["center_type"].setValue(center.center_type);
        this.form.controls["center_parent"].setValue(center.center_parent);
        this.form.controls["active"].setValue(center.active);
        this.form.controls["programs"].setValue(center.programs);
    }
    AreaEdit.prototype.ionViewDidLoad = function () { };
    AreaEdit.prototype.createState = function () {
        var _this = this;
        this.centers.update(this.form.value).subscribe(function (resp) {
            var toast = _this.toastCtrl.create({
                message: "Successfully updated Center",
                duration: 3000,
                position: "top"
            });
            toast.present();
            _this.navCtrl.push("BranchesTab");
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Center. Please try again.",
                duration: 3000,
                position: "top"
            });
            toast.present();
        });
    };
    AreaEdit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "area-edit",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/area-edit/area-edit.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'Center Name\' | translate }} <span class="mandatory-field"> * </span>\n                </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'Center Code:\' | translate }} </ion-label>\n                <ion-input type="text" formControlName="center_id" disabled="true"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State / District\' | translate }} <span class="mandatory-field"> * </span>\n                </ion-label>\n                <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="center_parent">\n                    <ion-option value="{{state._id}}" *ngFor="let state of states">{{state.center_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> {{ \'Programs:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="programs" multiple="true" style="min-width: 100%;">\n                    <ion-option value={{course._id}} *ngFor="let course of courses">{{course.program_name}}</ion-option>\n                </ion-select>\n            </ion-item>        \n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave || isDuplicate">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/area-edit/area-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]])
    ], AreaEdit);
    return AreaEdit;
}());

//# sourceMappingURL=area-edit.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(13);
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
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
    function User(api, storage, http, loadingCtrl) {
        this.api = api;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
    }
    User_1 = User;
    User.prototype.checkAuthentication = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.set('Authorization', token);
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
        var seq = this.api.post('api/auth/register', accountInfo).share();
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
        var loading = this.loadingCtrl.create({
            content: "Processing ..."
        });
        loading.present();
        delete accountInfo.__v;
        var seq = this.api.post('api/auth/update', accountInfo).share();
        seq.subscribe(function (res) {
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
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
        User_1.userChanged.next(resp.user);
    };
    var User_1;
    User.userChanged = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
    User = User_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* LoadingController */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Programs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
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

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Center; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
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

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Franchise; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
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

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Instructor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
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
        return this.api.get('api/instructor', params);
    };
    Instructor.prototype.add = function (instructor) {
        return this.api.post('api/instructor', instructor);
    };
    Instructor.prototype.update = function (instructor) {
        return this.api.put('api/instructor', instructor);
    };
    Instructor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Instructor);
    return Instructor;
}());

//# sourceMappingURL=instructor.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Students; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
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
        return this.api.get('api/students', params);
    };
    Students.prototype.add = function (students) {
        return this.api.post('api/students', students);
    };
    Students.prototype.update = function (students) {
        return this.api.put('api/students', students);
    };
    Students = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Students);
    return Students;
}());

//# sourceMappingURL=students.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseMapping; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseMapping = /** @class */ (function () {
    function CourseMapping(api) {
        this.api = api;
    }
    CourseMapping.prototype.query = function (params) {
        return this.api.get('api/pricemapping', params);
    };
    CourseMapping.prototype.add = function (priceMapping) {
        return this.api.post('api/pricemapping', priceMapping);
    };
    CourseMapping.prototype.update = function (priceMapping) {
        return this.api.put('api/pricemapping', priceMapping);
    };
    CourseMapping = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], CourseMapping);
    return CourseMapping;
}());

//# sourceMappingURL=coursemapping.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostOrder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostOrder = /** @class */ (function () {
    function PostOrder(api) {
        this.api = api;
    }
    PostOrder.prototype.query = function (params) {
        return this.api.get('api/postorder', params);
    };
    PostOrder.prototype.add = function (postorder) {
        return this.api.post('api/postorder', postorder);
    };
    PostOrder.prototype.update = function (postorder) {
        return this.api.put('api/postorder', postorder);
    };
    PostOrder = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], PostOrder);
    return PostOrder;
}());

//# sourceMappingURL=postorder.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Notifications = /** @class */ (function () {
    function Notifications(api) {
        this.api = api;
    }
    Notifications.prototype.query = function (params) {
        return this.api.get('api/notifications', params);
    };
    Notifications.prototype.add = function (notifications) {
        return this.api.post('api/notifications', notifications);
    };
    Notifications.prototype.update = function (notifications) {
        return this.api.put('api/notifications', notifications);
    };
    Notifications = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Notifications);
    return Notifications;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Passbook; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Passbook = /** @class */ (function () {
    function Passbook(api) {
        this.api = api;
    }
    Passbook.prototype.query = function (params) {
        return this.api.get('api/passbook', params);
    };
    Passbook.prototype.add = function (passbook) {
        return this.api.post('api/passbook', passbook);
    };
    Passbook.prototype.update = function (passbook) {
        return this.api.put('api/passbook', passbook);
    };
    Passbook = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Passbook);
    return Passbook;
}());

//# sourceMappingURL=passbook.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inventory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Inventory = /** @class */ (function () {
    function Inventory(api) {
        this.api = api;
    }
    Inventory.prototype.query = function (params) {
        return this.api.get('api/inventory', params);
    };
    Inventory.prototype.add = function (inventory) {
        return this.api.post('api/inventory', inventory);
    };
    Inventory.prototype.update = function (inventory) {
        return this.api.put('api/inventory', inventory);
    };
    Inventory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Inventory);
    return Inventory;
}());

//# sourceMappingURL=inventory.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Online; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Online = /** @class */ (function () {
    function Online(api) {
        this.api = api;
        this.getMimeTypefromString = {
            ".3dm": "x-world/x-3dmf",
            ".3dmf": "x-world/x-3dmf",
            ".a": "application/octet-stream",
            ".aab": "application/x-authorware-bin",
            ".aam": "application/x-authorware-map",
            ".aas": "application/x-authorware-seg",
            ".abc": "text/vnd.abc",
            ".acgi": "text/html",
            ".afl": "video/animaflex",
            ".ai": "application/postscript",
            ".aif": "audio/aiff",
            ".aifc": "audio/aiff",
            ".aiff": "audio/aiff",
            ".aim": "application/x-aim",
            ".aip": "text/x-audiosoft-intra",
            ".ani": "application/x-navi-animation",
            ".aos": "application/x-nokia-9000-communicator-add-on-software",
            ".aps": "application/mime",
            ".arc": "application/octet-stream",
            ".arj": "application/octet-stream",
            ".art": "image/x-jg",
            ".asf": "video/x-ms-asf",
            ".asm": "text/x-asm",
            ".asp": "text/asp",
            ".asx": "video/x-ms-asf",
            ".au": "audio/basic",
            ".avi": "video/avi",
            ".avs": "video/avs-video",
            ".bcpio": "application/x-bcpio",
            ".bin": "application/octet-stream",
            ".bm": "image/bmp",
            ".bmp": "image/bmp",
            ".boo": "application/book",
            ".book": "application/book",
            ".boz": "application/x-bzip2",
            ".bsh": "application/x-bsh",
            ".bz": "application/x-bzip",
            ".bz2": "application/x-bzip2",
            ".c": "text/plain",
            ".c++": "text/plain",
            ".cat": "application/vnd.ms-pki.seccat",
            ".cc": "text/plain",
            ".ccad": "application/clariscad",
            ".cco": "application/x-cocoa",
            ".cdf": "application/cdf",
            ".cer": "application/x-x509-ca-cert",
            ".cha": "application/x-chat",
            ".chat": "application/x-chat",
            ".class": "application/java",
            ".com": "application/octet-stream",
            ".conf": "text/plain",
            ".cpio": "application/x-cpio",
            ".cpp": "text/x-c",
            ".cpt": "application/x-cpt",
            ".crt": "application/x-x509-ca-cert",
            ".csh": "text/x-script.csh",
            ".css": "text/css",
            ".cxx": "text/plain",
            ".dcr": "application/x-director",
            ".deepv": "application/x-deepv",
            ".def": "text/plain",
            ".der": "application/x-x509-ca-cert",
            ".dif": "video/x-dv",
            ".dir": "application/x-director",
            ".dl": "video/dl",
            ".doc": "application/msword",
            ".docx": "application/msword",
            ".dot": "application/msword",
            ".dp": "application/commonground",
            ".drw": "application/drafting",
            ".dump": "application/octet-stream",
            ".dv": "video/x-dv",
            ".dvi": "application/x-dvi",
            ".dwf": "model/vnd.dwf",
            ".dwg": "image/x-dwg",
            ".dxf": "image/x-dwg",
            ".el": "text/x-script.elisp",
            ".elc": "application/x-elc",
            ".env": "application/x-envoy",
            ".eps": "application/postscript",
            ".es": "application/x-esrehber",
            ".etx": "text/x-setext",
            ".evy": "application/envoy",
            ".exe": "application/octet-stream",
            ".f": "text/plain",
            ".f77": "text/x-fortran",
            ".f90": "text/plain",
            ".fdf": "application/vnd.fdf",
            ".fif": "image/fif",
            ".flo": "image/florian",
            ".flx": "text/vnd.fmi.flexstor",
            ".fmf": "video/x-atomic3d-feature",
            ".for": "text/plain",
            ".frl": "application/freeloader",
            ".funk": "audio/make",
            ".g": "text/plain",
            ".g3": "image/g3fax",
            ".gif": "image/gif",
            ".gl": "video/gl",
            ".gsd": "audio/x-gsm",
            ".gsm": "audio/x-gsm",
            ".gsp": "application/x-gsp",
            ".gss": "application/x-gss",
            ".gtar": "application/x-gtar",
            ".gz": "application/x-gzip",
            ".gzip": "multipart/x-gzip",
            ".h": "text/plain",
            ".hdf": "application/x-hdf",
            ".help": "application/x-helpfile",
            ".hgl": "application/vnd.hp-hpgl",
            ".hh": "text/plain",
            ".hlp": "application/hlp",
            ".hpg": "application/vnd.hp-hpgl",
            ".hpgl": "application/vnd.hp-hpgl",
            ".hqx": "application/binhex",
            ".hta": "application/hta",
            ".htc": "text/x-component",
            ".htm": "text/html",
            ".html": "text/html",
            ".htmls": "text/html",
            ".htt": "text/webviewhtml",
            ".htx": "text/html",
            ".ice": "x-conference/x-cooltalk",
            ".ico": "image/x-icon",
            ".idc": "text/plain",
            ".ief": "image/ief",
            ".iefs": "image/ief",
            ".iges": "application/iges",
            ".igs": "application/iges",
            ".ima": "application/x-ima",
            ".imap": "application/x-httpd-imap",
            ".inf": "application/inf",
            ".ins": "application/x-internett-signup",
            ".ip": "application/x-ip2",
            ".isu": "video/x-isvideo",
            ".it": "audio/it",
            ".iv": "application/x-inventor",
            ".ivr": "i-world/i-vrml",
            ".ivy": "application/x-livescreen",
            ".jam": "audio/x-jam",
            ".jav": "text/plain",
            ".java": "text/plain",
            ".jcm": "application/x-java-commerce",
            ".jfif": "image/jpeg",
            ".jfif-tbnl": "image/jpeg",
            ".jpe": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".jpg": "image/jpeg",
            ".jps": "image/x-jps",
            ".js": "application/javascript",
            ".jut": "image/jutvision",
            ".kar": "audio/midi",
            ".ksh": "text/x-script.ksh",
            ".la": "audio/nspaudio",
            ".lam": "audio/x-liveaudio",
            ".latex": "application/x-latex",
            ".lha": "application/octet-stream",
            ".lhx": "application/octet-stream",
            ".list": "text/plain",
            ".lma": "audio/nspaudio",
            ".log": "text/plain",
            ".lsp": "application/x-lisp",
            ".lst": "text/plain",
            ".lsx": "text/x-la-asf",
            ".ltx": "application/x-latex",
            ".lzh": "application/octet-stream",
            ".lzx": "application/octet-stream",
            ".m": "text/plain",
            ".m1v": "video/mpeg",
            ".m2a": "audio/mpeg",
            ".m2v": "video/mpeg",
            ".m3u": "audio/x-mpequrl",
            ".man": "application/x-troff-man",
            ".map": "application/x-navimap",
            ".mar": "text/plain",
            ".mbd": "application/mbedlet",
            ".mc$": "application/x-magic-cap-package-1.0",
            ".mcd": "application/mcad",
            ".mcf": "text/mcf",
            ".mcp": "application/netmc",
            ".me": "application/x-troff-me",
            ".mht": "message/rfc822",
            ".mhtml": "message/rfc822",
            ".mid": "audio/midi",
            ".midi": "audio/midi",
            ".mif": "application/x-mif",
            ".mime": "www/mime",
            ".mjf": "audio/x-vnd.audioexplosion.mjuicemediafile",
            ".mjpg": "video/x-motion-jpeg",
            ".mm": "application/base64",
            ".mme": "application/base64",
            ".mod": "audio/mod",
            ".moov": "video/quicktime",
            ".mov": "video/quicktime",
            ".movie": "video/x-sgi-movie",
            ".mp2": "audio/mpeg",
            ".mp3": "audio/mpeg3",
            ".mpa": "audio/mpeg",
            ".mpc": "application/x-project",
            ".mpe": "video/mpeg",
            ".mpeg": "video/mpeg",
            ".mpg": "video/mpeg",
            ".mpga": "audio/mpeg",
            ".mpp": "application/vnd.ms-project",
            ".mpt": "application/x-project",
            ".mpv": "application/x-project",
            ".mpx": "application/x-project",
            ".mrc": "application/marc",
            ".ms": "application/x-troff-ms",
            ".mv": "video/x-sgi-movie",
            ".my": "audio/make",
            ".mzz": "application/x-vnd.audioexplosion.mzz",
            ".nap": "image/naplps",
            ".naplps": "image/naplps",
            ".nc": "application/x-netcdf",
            ".ncm": "application/vnd.nokia.configuration-message",
            ".nif": "image/x-niff",
            ".niff": "image/x-niff",
            ".nix": "application/x-mix-transfer",
            ".nsc": "application/x-conference",
            ".nvd": "application/x-navidoc",
            ".o": "application/octet-stream",
            ".oda": "application/oda",
            ".omc": "application/x-omc",
            ".omcd": "application/x-omcdatamaker",
            ".omcr": "application/x-omcregerator",
            ".p": "text/x-pascal",
            ".p10": "application/pkcs10",
            ".p12": "application/pkcs-12",
            ".p7a": "application/x-pkcs7-signature",
            ".p7c": "application/pkcs7-mime",
            ".p7m": "application/pkcs7-mime",
            ".p7r": "application/x-pkcs7-certreqresp",
            ".p7s": "application/pkcs7-signature",
            ".part": "application/pro_eng",
            ".pas": "text/pascal",
            ".pbm": "image/x-portable-bitmap",
            ".pcl": "application/vnd.hp-pcl",
            ".pct": "image/x-pict",
            ".pcx": "image/x-pcx",
            ".pdb": "chemical/x-pdb",
            ".pdf": "application/pdf",
            ".pfunk": "audio/make",
            ".pgm": "image/x-portable-graymap",
            ".pic": "image/pict",
            ".pict": "image/pict",
            ".pkg": "application/x-newton-compatible-pkg",
            ".pko": "application/vnd.ms-pki.pko",
            ".pl": "text/plain",
            ".plx": "application/x-pixclscript",
            ".pm": "text/x-script.perl-module",
            ".pm4": "application/x-pagemaker",
            ".pm5": "application/x-pagemaker",
            ".png": "image/png",
            ".pnm": "image/x-portable-anymap",
            ".pot": "application/vnd.ms-powerpoint",
            ".pov": "model/x-pov",
            ".ppa": "application/vnd.ms-powerpoint",
            ".ppm": "image/x-portable-pixmap",
            ".pps": "application/vnd.ms-powerpoint",
            ".ppt": "application/vnd.ms-powerpoint",
            ".ppz": "application/mspowerpoint",
            ".pre": "application/x-freelance",
            ".prt": "application/pro_eng",
            ".ps": "application/postscript",
            ".psd": "application/octet-stream",
            ".pvu": "paleovu/x-pv",
            ".pwz": "application/vnd.ms-powerpoint",
            ".py": "text/x-script.phyton",
            ".pyc": "applicaiton/x-bytecode.python",
            ".qcp": "audio/vnd.qcelp",
            ".qd3": "x-world/x-3dmf",
            ".qd3d": "x-world/x-3dmf",
            ".qif": "image/x-quicktime",
            ".qt": "video/quicktime",
            ".qtc": "video/x-qtc",
            ".qti": "image/x-quicktime",
            ".qtif": "image/x-quicktime",
            ".ra": "audio/x-realaudio",
            ".ram": "audio/x-pn-realaudio",
            ".ras": "application/x-cmu-raster",
            ".rast": "image/cmu-raster",
            ".rexx": "text/x-script.rexx",
            ".rf": "image/vnd.rn-realflash",
            ".rgb": "image/x-rgb",
            ".rm": "application/vnd.rn-realmedia",
            ".rmi": "audio/mid",
            ".rmm": "audio/x-pn-realaudio",
            ".rmp": "audio/x-pn-realaudio",
            ".rng": "application/vnd.nokia.ringing-tone",
            ".rnx": "application/vnd.rn-realplayer",
            ".roff": "application/x-troff",
            ".rp": "image/vnd.rn-realpix",
            ".rpm": "audio/x-pn-realaudio-plugin",
            ".rt": "text/vnd.rn-realtext",
            ".rtf": "text/richtext",
            ".rtx": "text/richtext",
            ".rv": "video/vnd.rn-realvideo",
            ".s": "text/x-asm",
            ".s3m": "audio/s3m",
            ".saveme": "application/octet-stream",
            ".sbk": "application/x-tbook",
            ".scm": "text/x-script.guile",
            ".sdml": "text/plain",
            ".sdp": "application/sdp",
            ".sdr": "application/sounder",
            ".sea": "application/sea",
            ".set": "application/set",
            ".sgm": "text/sgml",
            ".sgml": "text/sgml",
            ".sh": "text/x-script.sh",
            ".shar": "application/x-bsh",
            ".shtml": "text/html",
            ".sid": "audio/x-psid",
            ".sit": "application/x-sit",
            ".skd": "application/x-koan",
            ".skm": "application/x-koan",
            ".skp": "application/x-koan",
            ".skt": "application/x-koan",
            ".sl": "application/x-seelogo",
            ".smi": "application/smil",
            ".smil": "application/smil",
            ".snd": "audio/basic",
            ".sol": "application/solids",
            ".spc": "application/x-pkcs7-certificates",
            ".spl": "application/futuresplash",
            ".spr": "application/x-sprite",
            ".sprite": "application/x-sprite",
            ".src": "application/x-wais-source",
            ".ssi": "text/x-server-parsed-html",
            ".ssm": "application/streamingmedia",
            ".sst": "application/vnd.ms-pki.certstore",
            ".step": "application/step",
            ".stl": "application/vnd.ms-pki.stl",
            ".stp": "application/step",
            ".sv4cpio": "application/x-sv4cpio",
            ".sv4crc": "application/x-sv4crc",
            ".svf": "image/vnd.dwg",
            ".svr": "application/x-world",
            ".swf": "application/x-shockwave-flash",
            ".t": "application/x-troff",
            ".talk": "text/x-speech",
            ".tar": "application/x-tar",
            ".tbk": "application/toolbook",
            ".tcl": "application/x-tcl",
            ".tcsh": "text/x-script.tcsh",
            ".tex": "application/x-tex",
            ".texi": "application/x-texinfo",
            ".texinfo": "application/x-texinfo",
            ".text": "text/plain",
            ".tgz": "application/x-compressed",
            ".tif": "image/tiff",
            ".tiff": "image/tiff",
            ".tr": "application/x-troff",
            ".tsi": "audio/tsp-audio",
            ".tsp": "audio/tsplayer",
            ".tsv": "text/tab-separated-values",
            ".turbot": "image/florian",
            ".txt": "text/plain",
            ".uil": "text/x-uil",
            ".uni": "text/uri-list",
            ".unis": "text/uri-list",
            ".unv": "application/i-deas",
            ".uri": "text/uri-list",
            ".uris": "text/uri-list",
            ".ustar": "multipart/x-ustar",
            ".uu": "application/octet-stream",
            ".uue": "text/x-uuencode",
            ".vcd": "application/x-cdlink",
            ".vcs": "text/x-vcalendar",
            ".vda": "application/vda",
            ".vdo": "video/vdo",
            ".vew": "application/groupwise",
            ".viv": "video/vnd.vivo",
            ".vivo": "video/vnd.vivo",
            ".vmd": "application/vocaltec-media-desc",
            ".vmf": "application/vocaltec-media-file",
            ".voc": "audio/voc",
            ".vos": "video/vosaic",
            ".vox": "audio/voxware",
            ".vqe": "audio/x-twinvq-plugin",
            ".vqf": "audio/x-twinvq",
            ".vql": "audio/x-twinvq-plugin",
            ".vrml": "model/vrml",
            ".vrt": "x-world/x-vrt",
            ".vsd": "application/x-visio",
            ".vst": "application/x-visio",
            ".vsw": "application/x-visio",
            ".w60": "application/wordperfect6.0",
            ".w61": "application/wordperfect6.1",
            ".w6w": "application/msword",
            ".wav": "audio/wav",
            ".wb1": "application/x-qpro",
            ".wbmp": "image/vnd.wap.wbmp",
            ".web": "application/vnd.xara",
            ".wiz": "application/msword",
            ".wk1": "application/x-123",
            ".wmf": "windows/metafile",
            ".wml": "text/vnd.wap.wml",
            ".wmlc": "application/vnd.wap.wmlc",
            ".wmls": "text/vnd.wap.wmlscript",
            ".wmlsc": "application/vnd.wap.wmlscriptc",
            ".word": "application/msword",
            ".wp": "application/wordperfect",
            ".wp5": "application/wordperfect",
            ".wp6": "application/wordperfect",
            ".wpd": "application/wordperfect",
            ".wq1": "application/x-lotus",
            ".wri": "application/mswrite",
            ".wrl": "model/vrml",
            ".wrz": "model/vrml",
            ".wsc": "text/scriplet",
            ".wsrc": "application/x-wais-source",
            ".wtk": "application/x-wintalk",
            ".xbm": "image/xbm",
            ".xdr": "video/x-amt-demorun",
            ".xgz": "xgl/drawing",
            ".xif": "image/vnd.xiff",
            ".xl": "application/excel",
            ".csv": "application/excel",
            ".xla": "application/excel",
            ".xlb": "application/vnd.ms-excel",
            ".xlc": "application/vnd.ms-excel",
            ".xld": "application/excel",
            ".xlk": "application/excel",
            ".xll": "application/excel",
            ".xlm": "application/vnd.ms-excel",
            ".xls": "application/vnd.ms-excel",
            ".xlt": "application/excel",
            ".xlv": "application/excel",
            ".xlw": "application/vnd.ms-excel",
            ".xm": "audio/xm",
            ".xml": "text/xml",
            ".xmz": "xgl/movie",
            ".xpix": "application/x-vnd.ls-xpix",
            ".xpm": "image/xpm",
            ".x-png": "image/png",
            ".xsr": "video/x-amt-showrun",
            ".xwd": "image/x-xwd",
            ".xyz": "chemical/x-pdb",
            ".z": "application/x-compress",
            ".zip": "application/zip",
            ".zoo": "application/octet-stream",
            ".zsh": "text/x-script.zsh"
        };
        this.getFileNameFromString = {
            ".aif": "AIF audio file",
            ".cda": "CD audio track file",
            ".mid": "MIDI audio file",
            ".midi": "MIDI audio file",
            ".mp3": "MP3 audio file",
            ".mpa": "MPEG-2 audio file",
            ".ogg": "Ogg Vorbis audio file",
            ".wav": "WAV file",
            ".wma": "WMA audio file",
            ".wpl": "Windows Media Player playlist",
            ".7z": "7-Zip compressed file",
            ".arj": "ARJ compressed file",
            ".deb": "Debian software package file",
            ".pkg": "Package file",
            ".rar": "RAR file",
            ".rpm": "Red Hat Package Manager",
            ".tar.gz": "Tarball compressed file",
            ".z": "Z compressed file",
            ".zip": "Zip compressed file",
            ".dmg": "macOS X disk image",
            ".iso": "ISO disc image",
            ".toast": "Toast disc image",
            ".vcd": "Virtual CD",
            ".csv": "Comma separated value file",
            ".dat": "Data file",
            ".db": "Database file",
            ".dbf": "Database file",
            ".log": "Log file",
            ".mdb": "Microsoft Access database file",
            ".sav": "Save file (e.g., game save file)",
            ".sql": "SQL database file",
            ".tar": "Linux / Unix tarball file archive",
            ".xml": "XML file",
            ".email": "Outlook Express e-mail message file",
            ".eml": "E-mail message file from multiple e-mail clients, including Gmail",
            ".emlx": "Apple Mail e-mail file",
            ".msg": "Microsoft Outlook e-mail message file",
            ".oft": "Microsoft Outlook e-mail template file",
            ".ost": "Microsoft Outlook offline e-mail storage file",
            ".pst": "Microsoft Outlook e-mail storage file",
            ".vcf": "E-mail contact file",
            ".apk": "Android package file",
            ".bat": "Batch file",
            ".bin": "Binary file",
            ".cgi": "Perl script file",
            ".pl": "Perl script file",
            ".com": "MS-DOS command file",
            ".exe": "Executable file",
            ".gadget": "Windows gadget",
            ".jar": "Java Archive file",
            ".msi": "Windows installer package",
            ".py": "Python file",
            ".wsf": "Windows Script File",
            ".fnt": "Windows font file",
            ".fon": "Generic font file",
            ".otf": "Open type font file",
            ".ttf": "TrueType font file",
            ".ai": "Adobe Illustrator file",
            ".bmp": "Bitmap image",
            ".gif": "GIF image",
            ".ico": "Icon file",
            ".jpeg": "JPEG image",
            ".jpg": "JPEG image",
            ".png": "PNG image",
            ".ps": "PostScript file",
            ".psd": "PSD image",
            ".svg": "Scalable Vector Graphics file",
            ".tif": "TIFF image",
            ".tiff": "TIFF image",
            ".asp": "Active Server Page file",
            ".aspx": "Active Server Page file",
            ".cer": "Internet security certificate",
            ".cfm": "ColdFusion Markup file",
            ".css": "Cascading Style Sheet file",
            ".htm": "HTML file",
            ".html": "HTML file",
            ".js": "JavaScript file",
            ".jsp": "Java Server Page file",
            ".part": "Partially downloaded file",
            ".php": "PHP file",
            ".rss": "RSS file",
            ".xhtml": "XHTML file",
            ".key": "Keynote presentation",
            ".odp": "OpenOffice Impress presentation file",
            ".pps": "PowerPoint slide show",
            ".ppt": "PowerPoint presentation",
            ".pptx": "PowerPoint Open XML presentation",
            ".c": "C and C++ source code file",
            ".class": "Java class file",
            ".cpp": "C++ source code file",
            ".cs": "Visual C# source code file",
            ".h": "C, C++, and Objective-C header file",
            ".java": "Java Source code file",
            ".sh": "Bash shell script",
            ".swift": "Swift source code file",
            ".vb": "Visual Basic file",
            ".ods": "OpenOffice Calc spreadsheet file",
            ".xls": "Microsoft Excel file",
            ".xlsm": "Microsoft Excel file with macros",
            ".xlsx": "Microsoft Excel Open XML spreadsheet file",
            ".bak": "Backup file",
            ".cab": "Windows Cabinet file",
            ".cfg": "Configuration file",
            ".cpl": "Windows Control panel file",
            ".cur": "Windows cursor file",
            ".dll": "DLL file",
            ".dmp": "Dump file",
            ".drv": "Device driver file",
            ".icns": "macOS X icon resource file",
            ".ini": "Initialization file",
            ".lnk": "Windows shortcut file",
            ".sys": "Windows system file",
            ".tmp": "Temporary file",
            ".3g2": "3GPP2 multimedia file",
            ".3gp": "3GPP multimedia file",
            ".avi": "AVI file",
            ".flv": "Adobe Flash file",
            ".h264": "H.264 video file",
            ".m4v": "Apple MP4 video file",
            ".mkv": "Matroska Multimedia Container",
            ".mov": "Apple QuickTime movie file",
            ".mp4": "MPEG4 video file",
            ".mpg": "MPEG video file",
            ".mpeg": "MPEG video file",
            ".rm": "RealMedia file",
            ".swf": "Shockwave flash file",
            ".vob": "DVD Video Object",
            ".wmv": "Windows Media Video file",
            ".doc": "Microsoft Word file",
            ".docx": "Microsoft Word file",
            ".odt": "OpenOffice Writer document file",
            ".pdf": "PDF file",
            ".rtf": "Rich Text Format",
            ".tex": "A LaTeX document file",
            ".txt": "Plain text file",
            ".wpd": "WordPerfect document"
        };
    }
    Online.prototype.query = function (params) {
        return this.api.get('api/online', params);
    };
    Online.prototype.add = function (online) {
        return this.api.post('api/online', online);
    };
    Online.prototype.update = function (online) {
        return this.api.put('api/online', online);
    };
    Online.prototype.generateOTP = function (number) {
        return this.api.get('api/generateOTP/' + number);
    };
    Online.prototype.uploadToS3 = function (file, file_name, fileExtension) {
        return this.api.post('api/uploadToS3', {
            file: file,
            file_name: file_name,
            file_mime: this.getMimeTypefromString[('.' + fileExtension)]
        });
    };
    ;
    Online = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], Online);
    return Online;
}());

//# sourceMappingURL=online.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_tab_area_tab__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__branches_tab_branches_tab__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__district_tab_district_tab__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__states_tab_states_tab__ = __webpack_require__(254);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], CentersPage);
    return CentersPage;
}());

//# sourceMappingURL=centers-page.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseMappingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseMappingPage = /** @class */ (function () {
    function CourseMappingPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, program, center, courseMapping, formBuilder, viewCtrl) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.program = program;
        this.center = center;
        this.courseMapping = courseMapping;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.isReadyToSave = false;
        this.form = formBuilder.group({
            state: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            district: [''],
            center: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            course: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            level: [1, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required])],
            registration_fee: [0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].min(0)])],
            kit_fee: [0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].min(0)])],
            extra_fee: [0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].min(0)])],
            total_fee: [0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].min(0)])],
            max_discount: [0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].min(0)])]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    CourseMappingPage.prototype.ionViewDidLoad = function () {
    };
    CourseMappingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.courseMapping.query().subscribe(function (res) {
            _this.courseMappings = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    CourseMappingPage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    CourseMappingPage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    CourseMappingPage.prototype.onAreaChange = function (ev) {
        this.selectedProgrammes = [];
        var selectedArea = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.areas, function (o) { return o._id == ev; });
        for (var p = 0; p < this.programmes.length; p++) {
            if (selectedArea.programs.includes(this.programmes[p]._id))
                this.selectedProgrammes.push(this.programmes[p]);
        }
    };
    CourseMappingPage.prototype.onLevelChange = function (ev) {
        var value = this.form.value;
        var selectedMapping = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.courseMappings, function (o) {
            return (o.center == value.center && o.course == value.course && o.level == value.level);
        });
        if (selectedMapping != undefined && selectedMapping != null) {
            this.form.controls['registration_fee'].setValue(selectedMapping.registration_fee);
            this.form.controls['kit_fee'].setValue(selectedMapping.kit_fee);
            this.form.controls['extra_fee'].setValue(selectedMapping.extra_fee);
            this.form.controls['total_fee'].setValue(selectedMapping.total_fee);
            this.form.controls['max_discount'].setValue(selectedMapping.max_discount);
        }
        else {
            this.form.controls['registration_fee'].setValue(0);
            this.form.controls['kit_fee'].setValue(0);
            this.form.controls['extra_fee'].setValue(0);
            this.form.controls['total_fee'].setValue(0);
            this.form.controls['max_discount'].setValue(0);
        }
    };
    CourseMappingPage.prototype.onCourseChange = function (ev) {
        var selectedCourse = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.selectedProgrammes, function (o) { return o._id == ev; });
        this.levels = Array.from({ length: selectedCourse.total_levels }, function (v, k) { return k + 1; });
    };
    CourseMappingPage.prototype.calculateTotal = function () {
        this.form.controls['total_fee'].setValue(Number(this.form.value.registration_fee) + Number(this.form.value.kit_fee) + Number(this.form.value.extra_fee));
    };
    CourseMappingPage.prototype.save = function () {
        var _this = this;
        this.courseMapping.add(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in updating the Mapping. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    CourseMappingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "coursemapping",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/coursemapping/coursemapping.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Course Price Mapping\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content> \n\n    <form [formGroup]="form">\n      <ion-list>\n\n        <ion-item>\n          <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="state" \n                (ionChange)="onStateChange($event)">\n            <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n          </ion-select>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>{{ \'District\' | translate }} </ion-label>\n          <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="district"\n              (ionChange)="onDistrictChange($event)">\n            <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n          </ion-select>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="center"\n                    (ionChange)="onAreaChange($event)">\n            <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Program\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="course"\n                    (ionChange)="onCourseChange($event)">\n            <ion-option value={{program._id}} *ngFor="let program of selectedProgrammes">{{program.program_name}}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Level\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="level"\n                    (ionChange)="onLevelChange($event)">\n            <ion-option value={{level}} *ngFor="let level of levels">Level {{level}}</ion-option>\n          </ion-select>\n        </ion-item>  \n        \n        <ion-item>\n          <ion-label floating>{{ \'Registration Fee\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input type="text" formControlName="registration_fee" (ionChange)="calculateTotal()"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Kit Fee\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input type="text" formControlName="kit_fee" (ionChange)="calculateTotal()"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label floating>{{ \'Extra Fee\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input type="text" formControlName="extra_fee" (ionChange)="calculateTotal()"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Total Fee\' | translate }} </ion-label>\n          <ion-input type="text" formControlName="total_fee" [disabled]="true"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label floating>{{ \'Max Discount\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n          <ion-input type="text" formControlName="max_discount"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/coursemapping/coursemapping.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["c" /* CourseMapping */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], CourseMappingPage);
    return CourseMappingPage;
}());

//# sourceMappingURL=coursemapping.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FranchiseEnquiryConfirmPage = /** @class */ (function () {
    function FranchiseEnquiryConfirmPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, franchise, element, storage, alertController, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.franchise = franchise;
        this.element = element;
        this.storage = storage;
        this.alertController = alertController;
        this.navParams = navParams;
        this.isReadyToSave = false;
        this.states = [];
        this.districts = [];
        this.areas = [];
        this.branches = [];
        this.programmes = [];
        this.allFranchisees = [];
        this.counter = 0;
        this.stage = 1;
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        var franchiseEnquiry = navParams.get('franchiseEnquiry');
        this.form = formBuilder.group({
            _id: [franchiseEnquiry._id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            name: [franchiseEnquiry.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_type: [franchiseEnquiry.franchise_type, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_state: [franchiseEnquiry.franchise_state, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_district: [franchiseEnquiry.franchise_district],
            franchise_area: [franchiseEnquiry.franchise_area],
            address: [franchiseEnquiry.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: [franchiseEnquiry.pincode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: [franchiseEnquiry.mobile_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: [franchiseEnquiry.whatsapp_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: [franchiseEnquiry.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [franchiseEnquiry.dob],
            present_occupation: [franchiseEnquiry.present_occupation],
            business_type: [franchiseEnquiry.business_type],
            capital: [franchiseEnquiry.capital],
            qualification: [franchiseEnquiry.qualification],
            start_timeframe: [franchiseEnquiry.start_timeframe],
            programs_interested: [franchiseEnquiry.programs_interested],
            working_hours: [franchiseEnquiry.working_hours],
            reference_source: [franchiseEnquiry.reference_source, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            referral: [franchiseEnquiry.referral],
            status: ['confirm', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [franchiseEnquiry.remarks],
            active: [franchiseEnquiry.active, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address_proof: [[]],
            id_proof: [[]],
            gst_certificate: [[]],
            pan_card: [[]],
            registration_certificate: [[]],
            partnership_deed: [[]],
            photo: [[]],
            follow_up: [franchiseEnquiry.follow_up],
            enquiry_by: [franchiseEnquiry.enquiry_by],
            enquiry_datetime: [franchiseEnquiry.enquiry_datetime],
            gstin_no: [''],
            royalty_percentage: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            bank_account_number: [''],
            bank_account_name: [''],
            bank_ifsc_code: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    FranchiseEnquiryConfirmPage.prototype.ionViewDidLoad = function () {
    };
    FranchiseEnquiryConfirmPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FranchiseEnquiryConfirmPage.prototype.save = function () {
        var _this = this;
        this.franchise.update(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Franchise. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    FranchiseEnquiryConfirmPage.prototype.next = function () {
        this.stage++;
    };
    FranchiseEnquiryConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'franchiseenquiry-confirm',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-confirm/franchiseenquiry-confirm.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Confirm Franchise\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list *ngIf="stage === 1">\n\n      <ion-item>\n        <ion-label floating>{{ \'GST No.\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="gstin_no"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Royalty Percentage\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="royalty_percentage"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Bank Account Number\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="bank_account_number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Bank Account Name\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="bank_account_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Bank IFSC Code\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="bank_ifsc_code"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngIf="stage === 2" class="uploadDocuments">\n\n      <ion-item>\n        <ion-label>{{ \'Address Proof\' | translate }} </ion-label>\n        <ion-label class="sm-label">{{form.value.address_proof.length}} {{ \' Files Uploaded\' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'ID Proof\' | translate }} </ion-label>\n        <ion-label class="sm-label">{{form.value.id_proof.length}} {{ \' Files Uploaded\' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'GST Certificate\' | translate }} </ion-label>\n        <ion-label class="sm-label">{{form.value.gst_certificate.length}} {{ \' Files Uploaded\' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'PAN Card\' | translate }} </ion-label>\n        <ion-label class="sm-label">{{form.value.pan_card.length}} {{ \' Files Uploaded\' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'Registration Certificate\' | translate }} </ion-label>\n        <ion-label class="sm-label">{{form.value.registration_certificate.length}} {{ \' Files Uploaded\' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'Partnership Deed\' | translate }} </ion-label>\n        <ion-label class="sm-label">{{form.value.partnership_deed.length}} {{ \' Files Uploaded\' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'Photo\' | translate }} </ion-label>\n        <ion-label class="sm-label">{{form.value.photo.length}} {{ \' Files Uploaded\' | translate }}</ion-label>\n      </ion-item>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent *ngIf="stage === 1">\n    <button ion-button full (click)="next()" [disabled]="!isReadyToSave">\n      {{ \'NEXT\' | translate }}\n    </button>\n  </ion-toolbar>\n  <ion-toolbar transparent *ngIf="stage === 2">\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-confirm/franchiseenquiry-confirm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */]])
    ], FranchiseEnquiryConfirmPage);
    return FranchiseEnquiryConfirmPage;
}());

//# sourceMappingURL=franchiseenquiry-confirm.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FranchiseEnquiryAddPage = /** @class */ (function () {
    function FranchiseEnquiryAddPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, franchise, element, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.franchise = franchise;
        this.element = element;
        this.storage = storage;
        this.isReadyToSave = false;
        this.states = [];
        this.districts = [];
        this.areas = [];
        this.branches = [];
        this.programmes = [];
        this.allFranchisees = [];
        this.counter = 0;
        this.professionOptions = ['Accountant', 'Architect', 'Artist', 'Banker', 'Bookkeeper', 'Builder', 'Businessperson',
            'Chef', 'Coach', 'Designer', 'Doctor', 'Economist', 'Engineer', 'Farmer', 'Fisherman',
            'Judge', 'Lawyer', 'Mechanic', 'Pharmacist', 'Photographer', 'Physician', 'Pilot', 'Police',
            'Politician', 'Professor', 'Salesperson', 'Service', 'Teacher', 'Writer', 'Others'];
        this.referralOptions = ['Radio', 'TV', 'Print', 'Outdoor', 'From a Friend', 'Direct Walk In', 'Others'];
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_type: ['unit', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_district: [''],
            franchise_area: [''],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [''],
            present_occupation: [''],
            business_type: [''],
            capital: [''],
            qualification: [''],
            start_timeframe: [''],
            programs_interested: [[]],
            working_hours: [''],
            reference_source: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            referral: [''],
            status: ['enquiry', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [''],
            active: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address_proof: [[]],
            id_proof: [[]],
            gst_certificate: [[]],
            pan_card: [[]],
            registration_certificate: [[]],
            partnership_deed: [[]],
            photo: [[]],
            follow_up: [[]],
            enquiry_by: [''],
            enquiry_datetime: [new Date()]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['franchise_state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['franchise_state'].setValue(_this.user.user_state);
                _this.form.controls['franchise_district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
        });
        this.franchise.query().subscribe(function (res) {
            _this.allFranchisees = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    FranchiseEnquiryAddPage.prototype.ionViewDidLoad = function () {
    };
    FranchiseEnquiryAddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FranchiseEnquiryAddPage.prototype.onFranchiseTypeChange = function (ev) {
        if (ev.value == 'state') {
            this.form.controls['franchise_district'].setValue('');
            this.form.controls['franchise_area'].setValue('');
        }
        if (ev.value == 'district') {
            this.form.controls['franchise_area'].setValue('');
        }
    };
    FranchiseEnquiryAddPage.prototype.onFranchiseStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    FranchiseEnquiryAddPage.prototype.onFranchiseDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    FranchiseEnquiryAddPage.prototype.save = function () {
        var _this = this;
        this.franchise.add(this.form.value).subscribe(function (resp) {
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
    FranchiseEnquiryAddPage.prototype.onPhoneOrEmailChange = function (ev) {
        var ev_mobile_no = this.form.controls['mobile_no'].value;
        var isDuplicate_mobile_no = (__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.allFranchisees, { mobile_no: ev_mobile_no }) != undefined);
        var ev_whatsapp_no = this.form.controls['whatsapp_no'].value;
        var isDuplicate_whatsapp_no = false;
        if (ev_whatsapp_no != undefined && ev_whatsapp_no != '')
            isDuplicate_whatsapp_no = (__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.allFranchisees, { whatsapp_no: ev_whatsapp_no }) != undefined);
        var ev_email_id = this.form.controls['email_id'].value;
        var isDuplicate_email_id = (__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.allFranchisees, { email_id: ev_email_id }) != undefined);
        this.counter = (isDuplicate_mobile_no || isDuplicate_whatsapp_no || isDuplicate_email_id) ? 1 : 0;
    };
    FranchiseEnquiryAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'franchiseenquiry-create',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-create/franchiseenquiry-create.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Franchise Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Franchise Type\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_type" (ionChange)="onFranchiseTypeChange($event)">\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="district" *ngIf="!isDistrictDisabled">District Franchise</ion-option>\n          <ion-option value="state" *ngIf="!isStateDisabled">Master Franchise</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_state" (ionChange)="onFranchiseStateChange($event)"\n          [disabled]="isStateDisabled" *ngIf="form.value.franchise_type != \'state\'">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" formControlName="franchise_state" *ngIf="form.value.franchise_type == \'state\'"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'district\' || form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_district" (ionChange)="onFranchiseDistrictChange($event)"\n          [disabled]="isDistrictDisabled" *ngIf="form.value.franchise_type != \'district\'">\n          <ion-option value={{state._id}} *ngFor="let state of districts">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" formControlName="franchise_district" *ngIf="form.value.franchise_type == \'district\'"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="franchise_area"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="pincode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Present Occupation\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="present_occupation">\n          <ion-option value={{profession}} *ngFor="let profession of professionOptions">{{profession}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Nature Of Business\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="business_type"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Capital To Invest\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="capital"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="qualification"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Time Frame To Start\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="start_timeframe"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} <span class="mandatory-field"> * </span>\n        </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="programs_interested">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="working_hours"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'How Did You Hear About Us\' | translate }} <span class="mandatory-field"> * </span>\n        </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="reference_source">\n          <ion-option value={{option}} *ngFor="let option of referralOptions">{{option}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="referral"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <p style="color:red;" *ngIf="counter > 0"> There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office. </p>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-create/franchiseenquiry-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], FranchiseEnquiryAddPage);
    return FranchiseEnquiryAddPage;
}());

//# sourceMappingURL=franchiseenquiry-create.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FranchiseEnquiryEditPage = /** @class */ (function () {
    function FranchiseEnquiryEditPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, franchise, element, storage, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.franchise = franchise;
        this.element = element;
        this.storage = storage;
        this.navParams = navParams;
        this.isReadyToSave = false;
        this.states = [];
        this.districts = [];
        this.areas = [];
        this.branches = [];
        this.programmes = [];
        this.allFranchisees = [];
        this.counter = 0;
        this.professionOptions = ['Accountant', 'Architect', 'Artist', 'Banker', 'Bookkeeper', 'Builder', 'Businessperson',
            'Chef', 'Coach', 'Designer', 'Doctor', 'Economist', 'Engineer', 'Farmer', 'Fisherman',
            'Judge', 'Lawyer', 'Mechanic', 'Pharmacist', 'Photographer', 'Physician', 'Pilot', 'Police',
            'Politician', 'Professor', 'Salesperson', 'Service', 'Teacher', 'Writer', 'Others'];
        this.referralOptions = ['Radio', 'TV', 'Print', 'Outdoor', 'From a Friend', 'Direct Walk In', 'Others'];
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
            _this.onFranchiseStateChange(franchiseEnquiry.franchise_state);
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        var franchiseEnquiry = navParams.get('franchiseEnquiry');
        this.form = formBuilder.group({
            _id: [franchiseEnquiry._id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            name: [franchiseEnquiry.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_type: [franchiseEnquiry.franchise_type, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_state: [franchiseEnquiry.franchise_state, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_district: [franchiseEnquiry.franchise_district],
            franchise_area: [franchiseEnquiry.franchise_area],
            address: [franchiseEnquiry.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: [franchiseEnquiry.pincode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: [franchiseEnquiry.mobile_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: [franchiseEnquiry.whatsapp_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: [franchiseEnquiry.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [franchiseEnquiry.dob],
            present_occupation: [franchiseEnquiry.present_occupation],
            business_type: [franchiseEnquiry.business_type],
            capital: [franchiseEnquiry.capital],
            qualification: [franchiseEnquiry.qualification],
            start_timeframe: [franchiseEnquiry.start_timeframe],
            programs_interested: [franchiseEnquiry.programs_interested],
            working_hours: [franchiseEnquiry.working_hours],
            reference_source: [franchiseEnquiry.reference_source, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            referral: [franchiseEnquiry.referral],
            status: [franchiseEnquiry.status, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [franchiseEnquiry.remarks],
            active: [franchiseEnquiry.active, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address_proof: [franchiseEnquiry.address_proof],
            id_proof: [franchiseEnquiry.id_proof],
            gst_certificate: [franchiseEnquiry.gst_certificate],
            pan_card: [franchiseEnquiry.pan_card],
            registration_certificate: [franchiseEnquiry.registration_certificate],
            partnership_deed: [franchiseEnquiry.partnership_deed],
            photo: [franchiseEnquiry.photo],
            follow_up: [franchiseEnquiry.follow_up],
            enquiry_by: [franchiseEnquiry.enquiry_by],
            enquiry_datetime: [franchiseEnquiry.enquiry_datetime]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['franchise_state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['franchise_state'].setValue(_this.user.user_state);
                _this.form.controls['franchise_district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
        });
        this.franchise.query().subscribe(function (res) {
            _this.allFranchisees = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    FranchiseEnquiryEditPage.prototype.ionViewDidLoad = function () {
    };
    FranchiseEnquiryEditPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FranchiseEnquiryEditPage.prototype.onFranchiseTypeChange = function (ev) {
        if (ev.value == 'state') {
            this.form.controls['franchise_district'].setValue('');
            this.form.controls['franchise_area'].setValue('');
        }
        if (ev.value == 'district') {
            this.form.controls['franchise_area'].setValue('');
        }
    };
    FranchiseEnquiryEditPage.prototype.onFranchiseStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    FranchiseEnquiryEditPage.prototype.onFranchiseDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    FranchiseEnquiryEditPage.prototype.save = function () {
        var _this = this;
        this.franchise.update(this.form.value).subscribe(function (resp) {
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
    FranchiseEnquiryEditPage.prototype.onPhoneOrEmailChange = function (ev) {
        var ev_mobile_no = this.form.controls['mobile_no'].value;
        var isDuplicate_mobile_no = (__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.allFranchisees, { mobile_no: ev_mobile_no }) != undefined);
        var ev_whatsapp_no = this.form.controls['whatsapp_no'].value;
        var isDuplicate_whstapp_no = false;
        if (ev_whatsapp_no != undefined && ev_whatsapp_no != '')
            isDuplicate_whstapp_no = (__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.allFranchisees, { whatsapp_no: ev_whatsapp_no }) != undefined);
        var ev_email_id = this.form.controls['email_id'].value;
        var isDuplicate_email_id = (__WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.allFranchisees, { email_id: ev_email_id }) != undefined);
        this.counter = (isDuplicate_mobile_no || isDuplicate_whstapp_no || isDuplicate_email_id) ? 1 : 0;
    };
    FranchiseEnquiryEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'franchiseenquiry-edit',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-edit/franchiseenquiry-edit.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Franchise Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Franchise Type\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_type" (ionChange)="onFranchiseTypeChange($event)">\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="district" *ngIf="!isDistrictDisabled">District Franchise</ion-option>\n          <ion-option value="state" *ngIf="!isStateDisabled">Master Franchise</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_state" (ionChange)="onFranchiseStateChange($event)"\n          [disabled]="isStateDisabled" *ngIf="form.value.franchise_type != \'state\'">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" formControlName="franchise_state" *ngIf="form.value.franchise_type == \'state\'"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'district\' || form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_district" (ionChange)="onFranchiseDistrictChange($event)"\n          [disabled]="isDistrictDisabled" *ngIf="form.value.franchise_type != \'district\'">\n          <ion-option value={{state._id}} *ngFor="let state of districts">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" formControlName="franchise_district" *ngIf="form.value.franchise_type == \'district\'"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="franchise_area"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="pincode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Present Occupation\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="present_occupation">\n          <ion-option value={{profession}} *ngFor="let profession of professionOptions">{{profession}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Nature Of Business\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="business_type"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Capital To Invest\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="capital"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="qualification"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Time Frame To Start\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="start_timeframe"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} <span class="mandatory-field"> * </span>\n        </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="programs_interested">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="working_hours"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'How Did You Hear About Us\' | translate }} <span class="mandatory-field"> * </span>\n        </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="reference_source">\n          <ion-option value={{option}} *ngFor="let option of referralOptions">{{option}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="referral"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <p style="color:red;" *ngIf="counter > 0"> There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office. </p>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-edit/franchiseenquiry-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
    ], FranchiseEnquiryEditPage);
    return FranchiseEnquiryEditPage;
}());

//# sourceMappingURL=franchiseenquiry-edit.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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







var FranchiseEnquiryListPage = /** @class */ (function () {
    function FranchiseEnquiryListPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs, franchise, storage, users, centers, callNumber, alertController, actionSheetController) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        this.franchise = franchise;
        this.storage = storage;
        this.users = users;
        this.centers = centers;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
    }
    FranchiseEnquiryListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.franchise.query().subscribe(function (res) {
            _this.currentItems = res;
            _this.tempCurrentItems = res;
            _this.storage.get('user').then(function (value) {
                _this.user = value;
                if (_this.user.role != 'admin') {
                    _this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](_this.currentItems, function (item) {
                        return (item.enquiry_by == this.user._id);
                    });
                    _this.tempCurrentItems = _this.currentItems;
                }
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.users.users_list().subscribe(function (res) {
            _this.allUsers = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.centers.query().subscribe(function (res) {
            _this.allCenters = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    };
    FranchiseEnquiryListPage.prototype.getItems = function (ev) {
        var val = ev.data.toUpperCase();
        if (!val || !val.trim()) {
            this.currentItems = this.tempCurrentItems;
            return;
        }
        this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.tempCurrentItems, function (item) {
            return (item.name.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.franchise_state.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.franchise_district.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.franchise_area.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.mobile_no.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.email_id.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0);
        });
    };
    FranchiseEnquiryListPage.prototype.view = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('FranchiseEnquiryViewPage', {
            franchiseEnquiry: franchiseEnquiry
        });
    };
    FranchiseEnquiryListPage.prototype.add = function () {
        this.navCtrl.push('FranchiseEnquiryAddPage');
    };
    FranchiseEnquiryListPage.prototype.edit = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('FranchiseEnquiryEditPage', {
            franchiseEnquiry: franchiseEnquiry
        });
    };
    FranchiseEnquiryListPage.prototype.followup = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('FollowupPage', {
            franchiseEnquiry: franchiseEnquiry
        });
    };
    FranchiseEnquiryListPage.prototype.contact = function (franchiseEnquiry, slidingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slidingItem.close();
                        return [4 /*yield*/, this.actionSheetController.create({
                                buttons: [
                                    {
                                        text: "Call",
                                        icon: "call",
                                        handler: function () {
                                            _this.callNumber.callNumber(franchiseEnquiry.mobile_no, true)
                                                .then(function (res) { return console.log('Launched dialer!', res); })
                                                .catch(function (err) { return console.log('Error launching dialer', err); });
                                        }
                                    },
                                    {
                                        text: "Whatsapp",
                                        icon: "logo-whatsapp",
                                        handler: function () {
                                            if (franchiseEnquiry.whatsapp_no != undefined && franchiseEnquiry.whatsapp_no != '' && franchiseEnquiry.whatsapp_no != null)
                                                window.open(("https://wa.me/91" + franchiseEnquiry.whatsapp_no), "_blank");
                                            else
                                                window.open(("https://wa.me/91" + franchiseEnquiry.mobile_no), "_blank");
                                        }
                                    },
                                    {
                                        text: "SMS",
                                        icon: "text",
                                        handler: function () {
                                            window.open("sms://" + franchiseEnquiry.mobile_no);
                                        }
                                    },
                                    {
                                        text: "Email",
                                        icon: "mail",
                                        handler: function () {
                                            window.open("mailto://" + franchiseEnquiry.email_id);
                                        }
                                    },
                                    {
                                        text: "Cancel",
                                        icon: "close",
                                        role: "cancel",
                                        handler: function () {
                                            console.log("Cancel clicked");
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FranchiseEnquiryListPage.prototype.call = function (mobile_no) {
        this.callNumber.callNumber(mobile_no, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    FranchiseEnquiryListPage.prototype.email = function (email_id) {
        window.open("mailto:" + email_id, '_system');
    };
    FranchiseEnquiryListPage.prototype.confirm = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('FranchiseEnquiryAddPage');
    };
    FranchiseEnquiryListPage.prototype.reject = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.presentAlertConfirm(franchiseEnquiry);
    };
    FranchiseEnquiryListPage.prototype.presentAlertConfirm = function (franchiseEnquiry) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: 'Confirm!',
                            subTitle: '',
                            message: 'Are you sure you want to Reject this Enquiry? Once rejected you cannot do actions on this Enquiry again.',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Confirm',
                                    handler: function () {
                                        delete franchiseEnquiry.__v;
                                        franchiseEnquiry.status = 'reject';
                                        _this.franchise.update(franchiseEnquiry).subscribe(function (resp) {
                                        }, function (err) {
                                            var toast = _this.toastCtrl.create({
                                                message: "Error in rejecting this Enquiry. Please try again.",
                                                duration: 3000,
                                                position: 'top'
                                            });
                                            toast.present();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FranchiseEnquiryListPage.prototype.pressEvent = function (ev) {
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please right or left slide to get the options.",
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    FranchiseEnquiryListPage.prototype.findUser = function (id) {
        var val = (__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allUsers, { _id: id }));
        return (val && val['name']) ? val['name'] : '';
    };
    FranchiseEnquiryListPage.prototype.findLocation = function (id, type, franchise_type) {
        if (type == franchise_type)
            return id;
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.allCenters, function (item) {
            return (item._id.indexOf(id) >= 0);
        });
        val = val[0];
        return (val && val['center_name']) ? val['center_name'] : '';
    };
    FranchiseEnquiryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'franchiseenquiry-lists',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-list/franchiseenquiry-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Franchise List\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'Search Franchise\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <h2> {{item.name}} </h2>\n        <h3> <b> Franchise Type: </b> {{item.franchise_type}}</h3>\n        <p> <b> State: </b> {{findLocation(item.franchise_state, \'state\', item.franchise_type)}} </p>\n        <p *ngIf="item.franchise_district != \'\'"> <b> District: </b> {{findLocation(item.franchise_district,\n          \'district\', item.franchise_type)}} </p>\n        <p *ngIf="item.franchise_area != \'\'"> <b> Area: </b> {{findLocation(item.franchise_area, \'unit\',\n          item.franchise_type)}} </p>\n        <p> <b> Enquired By: </b> {{findUser(item.enquiry_by)}} </p>\n        <p>\n          <b> Status: </b>\n          <span [class.franchise-enquiry]="item.status == \'enquiry\'" [class.franchise-reject]="item.status == \'reject\'"\n            [class.franchise-confirm]="item.status == \'confirm\'"> {{item.status}} </span>\n        </p>\n      </ion-item>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="view(item, slidingItem)">\n          <ion-icon name="eye"></ion-icon> View\n        </button>\n        <button ion-button color="danger" (click)="reject(item, slidingItem)" *ngIf="user && user.role == \'admin\' && item.status == \'enquiry\'">\n          <ion-icon name="thumbs-down"></ion-icon> Reject\n        </button>\n        <button ion-button color="success" (click)="confirm(item, slidingItem)" *ngIf="user && user.role == \'admin\' && item.status == \'enquiry\'">\n          <ion-icon name="thumbs-up"></ion-icon> Confirm\n        </button>\n        <button ion-button color="success" (click)="confirm(item, slidingItem)" *ngIf="user && user.role == \'admin\' && item.status == \'confirm\'">\n          <ion-icon name="cloud-upload"></ion-icon> Documents\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left" class="listing-btn">\n        <button ion-button color="primary" (click)="contact(item, slidingItem)">\n          <ion-icon name="call"></ion-icon> Contact\n        </button>\n        <button ion-button color="warning" (click)="edit(item, slidingItem)">\n          <ion-icon name="create"></ion-icon> Edit\n        </button>\n        <button ion-button color="success" (click)="followup(item, slidingItem)" *ngIf="item.status == \'enquiry\'">\n          <ion-icon name="quote"></ion-icon> Followup\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-list/franchiseenquiry-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], FranchiseEnquiryListPage);
    return FranchiseEnquiryListPage;
}());

//# sourceMappingURL=franchiseenquiry-list.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FranchiseEnquiryViewPage = /** @class */ (function () {
    function FranchiseEnquiryViewPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, users, franchise, element, storage, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.users = users;
        this.franchise = franchise;
        this.element = element;
        this.storage = storage;
        this.navParams = navParams;
        this.isReadyToSave = false;
        this.states = [];
        this.districts = [];
        this.areas = [];
        this.branches = [];
        this.programmes = [];
        this.allFranchisees = [];
        this.allUsers = [];
        this.counter = 0;
        this.professionOptions = [
            "Accountant",
            "Architect",
            "Artist",
            "Banker",
            "Bookkeeper",
            "Builder",
            "Businessperson",
            "Chef",
            "Coach",
            "Designer",
            "Doctor",
            "Economist",
            "Engineer",
            "Farmer",
            "Fisherman",
            "Judge",
            "Lawyer",
            "Mechanic",
            "Pharmacist",
            "Photographer",
            "Physician",
            "Pilot",
            "Police",
            "Politician",
            "Professor",
            "Salesperson",
            "Service",
            "Teacher",
            "Writer",
            "Others"
        ];
        this.referralOptions = [
            "Radio",
            "TV",
            "Print",
            "Outdoor",
            "From a Friend",
            "Direct Walk In",
            "Others"
        ];
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        var franchisee = navParams.get("franchiseEnquiry");
        this.center.query().subscribe(function (res) {
            _this.branches = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.users.users_list().subscribe(function (res) {
            _this.allUsers = res;
        }, function (err) {
            console.log("ERROR", err);
        });
        this.form = formBuilder.group({
            name: [franchisee.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_type: [
                franchisee.franchise_type,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])
            ],
            franchise_state: [franchisee.franchise_state],
            franchise_district: [franchisee.franchise_district],
            franchise_area: [franchisee.franchise_area],
            address: [franchisee.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: [
                franchisee.pincode,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)
                ])
            ],
            mobile_no: [
                franchisee.mobile_no,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[0-9]*")
                ])
            ],
            whatsapp_no: [
                franchisee.whatsapp_no,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[0-9]*")
                ])
            ],
            email_id: [
                franchisee.email_id,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ])
            ],
            dob: [franchisee.dob],
            present_occupation: [franchisee.present_occupation],
            business_type: [franchisee.business_type],
            capital: [franchisee.capital],
            qualification: [franchisee.qualification],
            start_timeframe: [franchisee.start_timeframe],
            programs_interested: [franchisee.programs_interested],
            working_hours: [franchisee.working_hours],
            reference_source: [
                franchisee.reference_source,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])
            ],
            referral: [franchisee.referral],
            status: [franchisee.status, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [franchisee.remarks],
            active: [franchisee.active, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address_proof: [franchisee.address_proof],
            id_proof: [franchisee.id_proof],
            gst_certificate: [franchisee.gst_certificate],
            pan_card: [franchisee.pan_card],
            registration_certificate: [franchisee.registration_certificate],
            partnership_deed: [franchisee.partnership_deed],
            photo: [franchisee.photo],
            follow_up: [franchisee.follow_up],
            enquiry_by: [franchisee.enquiry_by],
            enquiry_datetime: [franchisee.enquiry_datetime]
        });
        this.storage.get("user").then(function (value) {
            _this.user = value;
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return item.center_type == "state";
            });
            _this.onFranchiseStateChange(franchisee.franchise_state);
        }, function (err) {
            console.error("ERROR", err);
        });
    }
    FranchiseEnquiryViewPage.prototype.ionViewDidLoad = function () { };
    FranchiseEnquiryViewPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    FranchiseEnquiryViewPage.prototype.getBranchName = function (id) {
        var branch = __WEBPACK_IMPORTED_MODULE_4_lodash__["indexOf"](this.branches, id);
        if (branch < 0)
            return id;
        return this.branches[branch].center_name;
    };
    FranchiseEnquiryViewPage.prototype.getProgramNames = function (id) {
        var temp = [];
        for (var i = 0; i < id.length; i++) {
            var index = __WEBPACK_IMPORTED_MODULE_4_lodash__["indexOf"](this.programmes, id[i]);
            if (index < 0)
                temp.push(id);
            else
                temp.push(this.programmes[index].program_name);
        }
    };
    FranchiseEnquiryViewPage.prototype.getUserName = function (id) {
        var index = __WEBPACK_IMPORTED_MODULE_4_lodash__["indexOf"](this.allUsers, id);
        if (index < 0)
            return id;
        return this.allUsers[id].name;
    };
    FranchiseEnquiryViewPage.prototype.onFranchiseStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return item.center_type == "district" && item.center_parent == ev;
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return item.center_type == "unit" && item.center_parent == ev;
        });
    };
    FranchiseEnquiryViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "franchiseenquiry-view",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-view/franchiseenquiry-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'View Franchise Enquiry\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Franchise Type\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_type" disabled="true">\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="district" *ngIf="!isDistrictDisabled">District Franchise</ion-option>\n          <ion-option value="state" *ngIf="!isStateDisabled">Master Franchise</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_state" disabled="true"\n          *ngIf="form.value.franchise_type != \'state\'">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" formControlName="franchise_state" *ngIf="form.value.franchise_type == \'state\'" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'district\' || form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'District\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_district" disabled="true"\n          *ngIf="form.value.franchise_type != \'district\'">\n          <ion-option value={{state._id}} *ngFor="let state of districts">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" formControlName="franchise_district" disabled="true" *ngIf="form.value.franchise_type == \'district\'"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'Area\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="franchise_area" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address" disabled="true"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="pincode" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="mobile_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="email_id" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob" disabled="true"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Present Occupation\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="present_occupation" disabled="true">\n          <ion-option value={{profession}} *ngFor="let profession of professionOptions">{{profession}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Nature Of Business\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="business_type" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Capital To Invest\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="capital" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="qualification" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Time Frame To Start\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="start_timeframe" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }}</ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" disabled="true" formControlName="programs_interested">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="working_hours" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'How Did You Hear About Us\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="reference_source" disabled="true">\n          <ion-option value={{option}} *ngFor="let option of referralOptions">{{option}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="referral" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks" disabled="true"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-view/franchiseenquiry-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
    ], FranchiseEnquiryViewPage);
    return FranchiseEnquiryViewPage;
}());

//# sourceMappingURL=franchiseenquiry-view.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistrictEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DistrictEdit = /** @class */ (function () {
    function DistrictEdit(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.isReadyToSave = false;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.form = formBuilder.group({
            _id: [''],
            center_id: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_type: ['district'],
            center_parent: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            active: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            programs: [[], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        var center = navParams.get("branch");
        this.form.controls["_id"].setValue(center._id);
        this.form.controls["center_id"].setValue(center.center_id);
        this.form.controls["center_name"].setValue(center.center_name);
        this.form.controls["center_type"].setValue(center.center_type);
        this.form.controls["center_parent"].setValue(center.center_parent);
        this.form.controls["active"].setValue(center.active);
        this.form.controls["programs"].setValue(center.programs);
    }
    DistrictEdit.prototype.ionViewDidLoad = function () {
    };
    DistrictEdit.prototype.createState = function () {
        var _this = this;
        this.centers.update(this.form.value).subscribe(function (resp) {
            if (!_this.form.value.active) {
                for (var b = 0; b < _this.branches.length; b++) {
                    if (_this.branches[b].center_parent == _this.form.value._id) {
                        _this.branches[b].active = false;
                        _this.centers.update(_this.branches[b]).subscribe(function (resp) {
                            console.log(resp);
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            }
            var toast = _this.toastCtrl.create({
                message: "Successfully updated District",
                duration: 3000,
                position: "top"
            });
            toast.present();
            _this.navCtrl.push("BranchesTab");
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the District. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    DistrictEdit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'district-edit',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/district-edit/district-edit.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'District Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'District Code:\' | translate }} </ion-label>\n                <ion-input type="text" formControlName="center_id" disabled="true"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select multiple="false" cancelText="Cancel" okText="Okay">\n                    <ion-option *ngFor="let state of states" value="{{state._id}}">{{state.center_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> {{ \'Programs:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="programs" multiple="true" style="min-width: 100%;">\n                    <ion-option value={{course._id}} *ngFor="let course of courses">{{course.program_name}}</ion-option>\n                </ion-select>\n            </ion-item>    \n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }}</ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/district-edit/district-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_5__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]])
    ], DistrictEdit);
    return DistrictEdit;
}());

//# sourceMappingURL=district-edit.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructorEnquiryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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







var InstructorEnquiryListPage = /** @class */ (function () {
    function InstructorEnquiryListPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs, storage, users, centers, callNumber, alertController, instructorService, actionSheetController) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        this.storage = storage;
        this.users = users;
        this.centers = centers;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.instructorService = instructorService;
        this.actionSheetController = actionSheetController;
    }
    InstructorEnquiryListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.instructorService.query().subscribe(function (res) {
            _this.currentItems = res;
            _this.tempCurrentItems = res;
            _this.storage.get("user").then(function (value) {
                _this.user = value;
                if (_this.user.role != "admin") {
                    _this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](_this.currentItems, function (item) {
                        return item.enquiry_by == this.user._id;
                    });
                    _this.tempCurrentItems = _this.currentItems;
                }
            });
        }, function (err) {
            console.error("ERROR", err);
        });
        this.users.users_list().subscribe(function (res) {
            _this.allUsers = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.centers.query().subscribe(function (res) {
            _this.allCenters = res;
        }, function (err) {
            console.error("ERROR", err);
        });
    };
    InstructorEnquiryListPage.prototype.getItems = function (ev) {
        var val = ev.data.toUpperCase();
        if (!val || !val.trim()) {
            this.currentItems = this.tempCurrentItems;
            return;
        }
        this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.tempCurrentItems, function (item) {
            return (item.name.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.franchise_state.toUpperCase().indexOf(ev.name.toUpperCase()) >=
                    0 ||
                item.franchise_district.toUpperCase().indexOf(ev.name.toUpperCase()) >=
                    0 ||
                item.franchise_area.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.mobile_no.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.email_id.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0);
        });
    };
    InstructorEnquiryListPage.prototype.view = function (instructor, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("InstructorEnquiryViewPage", {
            instructor: instructor
        });
    };
    InstructorEnquiryListPage.prototype.add = function () {
        this.navCtrl.push("InstructorEnquiryAddPage");
    };
    InstructorEnquiryListPage.prototype.edit = function (instructor, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("InstructorEnquiryEditPage", {
            instructor: instructor
        });
    };
    InstructorEnquiryListPage.prototype.contact = function (instructor, slidingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slidingItem.close();
                        return [4 /*yield*/, this.actionSheetController.create({
                                buttons: [
                                    {
                                        text: "Call",
                                        icon: "call",
                                        handler: function () {
                                            _this.callNumber.callNumber(instructor.mobile_no, true)
                                                .then(function (res) { return console.log('Launched dialer!', res); })
                                                .catch(function (err) { return console.log('Error launching dialer', err); });
                                        }
                                    },
                                    {
                                        text: "Whatsapp",
                                        icon: "logo-whatsapp",
                                        handler: function () {
                                            if (instructor.whatsapp_no != undefined && instructor.whatsapp_no != '' && instructor.whatsapp_no != null)
                                                window.open(("https://wa.me/91" + instructor.whatsapp_no), "_blank");
                                            else
                                                window.open(("https://wa.me/91" + instructor.mobile_no), "_blank");
                                        }
                                    },
                                    {
                                        text: "SMS",
                                        icon: "text",
                                        handler: function () {
                                            window.open("sms://" + instructor.mobile_no);
                                        }
                                    },
                                    {
                                        text: "Email",
                                        icon: "mail",
                                        handler: function () {
                                            window.open("mailto://" + instructor.email_id);
                                        }
                                    },
                                    {
                                        text: "Cancel",
                                        icon: "close",
                                        role: "cancel",
                                        handler: function () {
                                            console.log("Cancel clicked");
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InstructorEnquiryListPage.prototype.confirm = function (instructor, slidingItem) {
        slidingItem.close();
        this.presentAlertConfirm(instructor);
    };
    InstructorEnquiryListPage.prototype.presentAlertConfirm = function (instructor) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: "Confirm?",
                            subTitle: "",
                            message: "Are you sure you want to Confirm this Enquiry?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (blah) {
                                        console.log("Confirm Cancel: blah");
                                    }
                                },
                                {
                                    text: "Confirm",
                                    handler: function () {
                                        delete instructor.__v;
                                        instructor.status = "confirm";
                                        _this.instructorService.update(instructor).subscribe(function (resp) { }, function (err) {
                                            var toast = _this.toastCtrl.create({
                                                message: "Error in rejecting this Enquiry. Please try again.",
                                                duration: 3000,
                                                position: "top"
                                            });
                                            toast.present();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InstructorEnquiryListPage.prototype.reject = function (instructor, slidingItem) {
        slidingItem.close();
        this.presentAlertReject(instructor);
    };
    InstructorEnquiryListPage.prototype.presentAlertReject = function (instructor) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: "Reject?",
                            subTitle: "",
                            message: "Are you sure you want to Reject this Enquiry? Once rejected you cannot do actions on this Enquiry again.",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (blah) {
                                        console.log("Confirm Cancel: blah");
                                    }
                                },
                                {
                                    text: "Confirm",
                                    handler: function () {
                                        delete instructor.__v;
                                        instructor.status = "reject";
                                        _this.instructorService.update(instructor).subscribe(function (resp) { }, function (err) {
                                            var toast = _this.toastCtrl.create({
                                                message: "Error in rejecting this Enquiry. Please try again.",
                                                duration: 3000,
                                                position: "top"
                                            });
                                            toast.present();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InstructorEnquiryListPage.prototype.pressEvent = function (ev) {
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please right or left slide to get the options.",
            duration: 2000,
            position: "top"
        });
        toast.present();
    };
    InstructorEnquiryListPage.prototype.findUser = function (id) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allUsers, { _id: id });
        return val && val["name"] ? val["name"] : "";
    };
    InstructorEnquiryListPage.prototype.findLocation = function (id) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.allCenters, function (item) {
            return item._id.indexOf(id) >= 0;
        });
        val = val[0];
        return val && val["center_name"] ? val["center_name"] : "";
    };
    InstructorEnquiryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "instructorenquiry-lists",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-list/instructorenquiry-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Instructor List\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'Search Instructor\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <h2> {{item.name}} </h2>\n        <p> <b> State: </b> {{findLocation(item.instructor_state)}} </p>\n        <p> <b> District: </b> {{findLocation(item.instructor_district)}} </p>\n        <p> <b> Area: </b> {{findLocation(item.instructor_area)}} </p>\n        <p> <b> Enquired By: </b> {{findUser(item.enquiry_by)}} </p>\n        <p>\n          <b> Status: </b>\n          <span [class.instructor-enquiry]="item.status == \'enquiry\'" [class.instructor-reject]="item.status == \'reject\'"\n            [class.instructor-confirm]="item.status == \'confirm\'"> {{item.status}} </span>\n        </p>\n      </ion-item>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="view(item, slidingItem)">\n          <ion-icon name="eye"></ion-icon> View\n        </button>\n        <button ion-button color="danger" (click)="reject(item, slidingItem)" *ngIf="item.status == \'enquiry\'">\n          <ion-icon name="thumbs-down"></ion-icon> Reject\n        </button>\n        <button ion-button color="success" (click)="confirm(item, slidingItem)" *ngIf="item.status == \'enquiry\'">\n          <ion-icon name="thumbs-up"></ion-icon> Confirm\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left" class="listing-btn">\n        <button ion-button color="primary" (click)="contact(item, slidingItem)">\n          <ion-icon name="call"></ion-icon> Call\n        </button>\n        <button ion-button color="warning" (click)="edit(item, slidingItem)">\n          <ion-icon name="create"></ion-icon> Edit\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-list/instructorenquiry-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], InstructorEnquiryListPage);
    return InstructorEnquiryListPage;
}());

//# sourceMappingURL=instructorenquiry-list.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructorEnquiryEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InstructorEnquiryEditPage = /** @class */ (function () {
    function InstructorEnquiryEditPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, element, storage, instructor, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.element = element;
        this.storage = storage;
        this.instructor = instructor;
        this.navParams = navParams;
        this.isReadyToSave = false;
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.isAreaDisabled = false;
        this.counter = 0;
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        var pro = navParams.get('instructor');
        this.form = formBuilder.group({
            _id: [pro._id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            name: [pro.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_state: [pro.instructor_state, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_district: [pro.instructor_district, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_area: [pro.instructor_area, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program: [pro.program, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address: [pro.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: [pro.pincode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: [pro.mobile_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: [pro.whatsapp_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: [pro.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [pro.dob],
            qualification: [pro.qualification],
            old_organization_name: [pro.old_organization_name],
            old_organization_designation: [pro.old_organization_designation],
            total_experience: [pro.total_experience],
            status: [pro.status, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [pro.remarks],
            active: [pro.active, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            photo: [pro.photo],
            enquiry_by: [pro.enquiry_by],
            enquiry_datetime: [pro.enquiry_datetime]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
            _this.onInstructorStateChange(_this.form.controls['instructor_state'].value);
            _this.onInstructorDistrictChange(_this.form.controls['instructor_district'].value);
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.form.controls['instructor_district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
            else if (_this.user.role == 'unit') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.isAreaDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.form.controls['instructor_district'].setValue(_this.user.user_district);
                _this.form.controls['instructor_area'].setValue(_this.user.user_center);
            }
        });
        this.instructor.query().subscribe(function (res) {
            _this.allInstructors = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    InstructorEnquiryEditPage.prototype.ionViewDidLoad = function () {
    };
    InstructorEnquiryEditPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    InstructorEnquiryEditPage.prototype.onInstructorStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    InstructorEnquiryEditPage.prototype.onInstructorDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    InstructorEnquiryEditPage.prototype.save = function () {
        var _this = this;
        this.instructor.update(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Instructor. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    InstructorEnquiryEditPage.prototype.onPhoneOrEmailChange = function (ev) {
        var inst = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.allInstructors, function (item) {
            if (item.whatsapp_no != undefined && item.whatsapp_no != '' && item.whatsapp_no == ev.value) {
                return true;
            }
            return (item.mobile_no == ev.value || item.email_id == ev.value);
        });
        this.counter = inst.length;
    };
    InstructorEnquiryEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'instructorenquiry-update',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-update/instructorenquiry-update.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Instructor Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_state" (ionChange)="onInstructorStateChange($event)"\n          [disabled]="isStateDisabled">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_district"\n          (ionChange)="onInstructorDistrictChange($event)" [disabled]="isDistrictDisabled">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_area" [disabled]="isAreaDisabled">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="pincode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="qualification"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Name\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="old_organization_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Designation\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="old_organization_designation"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Total Experience\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="total_experience"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="program">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-update/instructorenquiry-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
    ], InstructorEnquiryEditPage);
    return InstructorEnquiryEditPage;
}());

//# sourceMappingURL=instructorenquiry-update.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructorEnquiryViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InstructorEnquiryViewPage = /** @class */ (function () {
    function InstructorEnquiryViewPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, element, storage, instructor, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.element = element;
        this.storage = storage;
        this.instructor = instructor;
        this.navParams = navParams;
        this.isReadyToSave = false;
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.isAreaDisabled = false;
        this.counter = 0;
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        var pro = navParams.get('instructor');
        this.form = formBuilder.group({
            _id: [pro._id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            name: [pro.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_state: [pro.instructor_state, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_district: [pro.instructor_district, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_area: [pro.instructor_area, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program: [pro.program, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address: [pro.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: [pro.pincode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: [pro.mobile_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: [pro.whatsapp_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: [pro.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [pro.dob],
            qualification: [pro.qualification],
            old_organization_name: [pro.old_organization_name],
            old_organization_designation: [pro.old_organization_designation],
            total_experience: [pro.total_experience],
            status: [pro.status, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [pro.remarks],
            active: [pro.active, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            photo: [pro.photo],
            enquiry_by: [pro.enquiry_by],
            enquiry_datetime: [pro.enquiry_datetime]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
            _this.onInstructorStateChange(pro.instructor_state);
            _this.onInstructorDistrictChange(pro.instructor_district);
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.form.controls['instructor_district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
            else if (_this.user.role == 'unit') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.isAreaDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.form.controls['instructor_district'].setValue(_this.user.user_district);
                _this.form.controls['instructor_area'].setValue(_this.user.user_center);
            }
        });
        this.instructor.query().subscribe(function (res) {
            _this.allInstructors = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    InstructorEnquiryViewPage.prototype.ionViewDidLoad = function () {
    };
    InstructorEnquiryViewPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    InstructorEnquiryViewPage.prototype.onInstructorStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    InstructorEnquiryViewPage.prototype.onInstructorDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    InstructorEnquiryViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'instructorenquiry-view',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-view/instructorenquiry-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Instructor Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_state" (ionChange)="onInstructorStateChange($event)"\n        disabled="true">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'District\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_district"\n          (ionChange)="onInstructorDistrictChange($event)" disabled="true">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Area\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_area" disabled="true">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address" disabled="true"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="pincode" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="mobile_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="email_id" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob" disabled="true"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="qualification" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Name\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="old_organization_name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Designation\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="old_organization_designation" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Total Experience\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="total_experience" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="program" disabled="true">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks" disabled="true"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-view/instructorenquiry-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
    ], InstructorEnquiryViewPage);
    return InstructorEnquiryViewPage;
}());

//# sourceMappingURL=instructorenquiry-view.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number_ngx__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__online_view_online_view__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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








var OnlineReportPage = /** @class */ (function () {
    function OnlineReportPage(navCtrl, viewCtrl, formBuilder, toastCtrl, element, storage, online, alertController, actionSheetController, loadingController, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.element = element;
        this.storage = storage;
        this.online = online;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingController = loadingController;
        this.callNumber = callNumber;
        this.myInput = '';
        this.online.query().subscribe(function (resp) {
            _this.allStudents = resp;
            _this.allStudents = _this.allStudents.reverse();
            _this.students = _this.allStudents;
        });
    }
    OnlineReportPage.prototype.search = function () {
        if (this.myInput === "")
            this.students = this.allStudents;
        else {
            var result = [];
            for (var i = 0; i < this.allStudents.length; i++) {
                if (this.allStudents[i].txtsname &&
                    this.allStudents[i].txtsname.toUpperCase().indexOf(this.myInput.toUpperCase()) >= 0) {
                    result.push(this.allStudents[i]);
                }
                else if (this.allStudents[i].txtscontact &&
                    this.allStudents[i].txtscontact.toUpperCase().indexOf(this.myInput.toUpperCase()) == 0) {
                    result.push(this.allStudents[i]);
                }
            }
            this.students = result;
        }
    };
    OnlineReportPage.prototype.presentActionSheet = function (student) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            buttons: [
                                {
                                    text: "Call",
                                    icon: "call",
                                    handler: function () {
                                        _this.callNumber.callNumber(student.txtscontact, false)
                                            .then(function () { return console.log("Launched dialer!"); })
                                            .catch(function () { return console.log("Error launching dialer"); });
                                    }
                                },
                                {
                                    text: "Whatsapp",
                                    icon: "logo-whatsapp",
                                    handler: function () {
                                        window.open(("https://wa.me/91" + student.txtscontact), "_blank");
                                    }
                                },
                                {
                                    text: "SMS",
                                    icon: "text",
                                    handler: function () {
                                        window.open("sms://" + student.txtscontact);
                                    }
                                },
                                {
                                    text: "Cancel",
                                    icon: "close",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OnlineReportPage.prototype.convertArrayToStrings = function (arr) {
        var str = '';
        for (var a = 0; a < arr.length; a++) {
            if (a != 0) {
                str += ', ';
            }
            str += arr[a];
        }
        return str;
    };
    OnlineReportPage.prototype.download = function () {
        var _this = this;
        var csv = this.convertToCSV(this.allStudents);
        var fileName = "online_students.csv";
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */].writeFile(__WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */].externalRootDirectory, fileName, csv).then(function (_) {
            var toast = _this.toastCtrl.create({
                message: "File saved successfully",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }).catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */].writeExistingFile(__WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */].externalRootDirectory, fileName, csv).then(function (_) {
                var toast = _this.toastCtrl.create({
                    message: "File saved successfully.",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }).catch(function (err) {
                alert('Failure');
            });
        });
    };
    OnlineReportPage.prototype.convertToCSV = function (teams) {
        var csv = '';
        var line = '';
        var SpT = teams[0].length;
        var anzahlTeams = teams.length;
        //Header
        for (var i = 0; i < anzahlTeams; i++) {
            if (line != '')
                line += ';';
            line += "Team " + (i + 1);
        }
        csv += line + '\r\n';
        //Teams
        for (var i = 0; i < SpT; i++) {
            line = '';
            for (var j = 0; j < anzahlTeams; j++) {
                if (line != '')
                    line += ';';
                line += teams[j][i];
            }
            csv += line + '\r\n';
        }
        return csv;
    };
    OnlineReportPage.prototype.action = function (student) {
        return __awaiter(this, void 0, void 0, function () {
            var buttons, actionSheetCon;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buttons = [
                            {
                                text: "View",
                                icon: "eye",
                                handler: function () {
                                    _this.view(student);
                                }
                            },
                            {
                                text: "Edit",
                                icon: "create",
                                handler: function () {
                                    _this.edit(student);
                                }
                            },
                            {
                                text: "Cancel",
                                icon: "close",
                                role: "cancel",
                                handler: function () {
                                    console.log("Cancel clicked");
                                }
                            }
                        ];
                        if (student.paymentStatus !== 'SUCCESS' && student.paymentStatus !== 'PAID') {
                            buttons.push({
                                text: "Payment",
                                icon: "card",
                                handler: function () {
                                    _this.pay(student);
                                }
                            });
                        }
                        return [4 /*yield*/, this.actionSheetController.create({
                                buttons: buttons
                            })];
                    case 1:
                        actionSheetCon = _a.sent();
                        return [4 /*yield*/, actionSheetCon.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OnlineReportPage.prototype.view = function (student) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__online_view_online_view__["a" /* OnlineViewPage */], {
            student: student
        });
    };
    OnlineReportPage.prototype.edit = function (student) {
    };
    OnlineReportPage.prototype.pay = function (student) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            enableBackdropDismiss: false,
                            title: 'Confirm!',
                            message: 'This will mark the payment received for this Student. Are you sure you have received this payment?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        // alert.dismiss();
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        student.paymentStatus = 'PAID';
                                        _this.online.update(student).subscribe(function (resp) {
                                            var toast = _this.toastCtrl.create({
                                                message: "Updated Payment details for the Student.",
                                                duration: 3000,
                                                position: 'top'
                                            });
                                            toast.present();
                                            for (var i = 0; i < _this.allStudents.length; i++) {
                                                if (_this.allStudents[i]._id === resp._id) {
                                                    _this.allStudents[i] = resp;
                                                }
                                            }
                                            for (var j = 0; j < _this.students.length; j++) {
                                                if (_this.students[j]._id === resp._id) {
                                                    _this.students[j] = resp;
                                                }
                                            }
                                            alert.dismiss();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OnlineReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'online-report',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/online-report/online-report.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      ONLINE ADMISSIONS\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="download()">\n        <ion-icon name="download"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <div class="search-row search-full">\n      <ion-searchbar [(ngModel)]="myInput" (animated)="true" (placeholder)="Search" (ionInput)="search()">\n      </ion-searchbar>\n    </div>\n\n    <img src="assets/images/emoji-faces.jpg" class="emozi" *ngIf="students && !students.length" />\n    <h1 *ngIf="students && !students.length" class="no_record"> NO RECORDS FOUND </h1>\n\n    <ion-item-sliding *ngFor="let student of students" class="results_list_mobile">\n\n      <button ion-item>\n        <div class="col_left">\n          <div *ngIf="student.photo"><img src={{student.photo}} class="bg_student" /></div>\n          <div *ngIf="!student.photo"><img src="assets/img/avatar.png" class="bg_student" /></div>\n          <div *ngIf="student.paymentStatus === \'SUCCESS\' || student.paymentStatus === \'PAID\'">\n            <ion-badge color="success" style="width: 100%;background-color: green;">PAID</ion-badge>\n          </div>\n        </div>\n        <div class="col_right">\n          <h2>{{student.txtsname}}</h2>\n          <a (click)="presentActionSheet(student)">\n            <ion-icon name="call"></ion-icon> {{student.txtscontact}}\n          </a>\n          <h3>\n            <ion-icon name="clock"></ion-icon> {{student.txtsdob | date: \'dd/MMM/yyyy\'}}\n          </h3>\n          <h3>\n            <ion-icon name="locate"></ion-icon> {{student.txtsadd}}\n          </h3>\n          <p>{{convertArrayToStrings(student.txtprograms)}}</p>\n        </div>\n      </button>\n\n      <ion-item-options side="right">\n        <button ion-button color="secondary" (click)="presentActionSheet(student)">\n          <ion-icon name="call"></ion-icon>\n          Contact\n        </button>\n        <button ion-button color="primary" (click)="action(student)">\n          <ion-icon name="cog"></ion-icon>\n          Actions\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/online-report/online-report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* Online */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number_ngx__["a" /* CallNumber */]])
    ], OnlineReportPage);
    return OnlineReportPage;
}());

//# sourceMappingURL=online-report.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(476);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(477);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__programs_programs__ = __webpack_require__(478);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__programs_programs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__center_center__ = __webpack_require__(479);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__center_center__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__franchise_franchise__ = __webpack_require__(480);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__franchise_franchise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__instructor_instructor__ = __webpack_require__(481);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__instructor_instructor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__students_students__ = __webpack_require__(482);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_7__students_students__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__coursemapping_coursemapping__ = __webpack_require__(483);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__coursemapping_coursemapping__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__postorder_postorder__ = __webpack_require__(484);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__postorder_postorder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications__ = __webpack_require__(485);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__notifications_notifications__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__passbook_passbook__ = __webpack_require__(486);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__passbook_passbook__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inventory_inventory__ = __webpack_require__(487);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_12__inventory_inventory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__online_online__ = __webpack_require__(488);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_13__online_online__["a"]; });














//# sourceMappingURL=index.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostOrderAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poshop_tab_poshop_tab__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pokart_tab_pokart_tab__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popayment_tab_popayment_tab__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostOrderAddPage = /** @class */ (function () {
    function PostOrderAddPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.shop = __WEBPACK_IMPORTED_MODULE_3__poshop_tab_poshop_tab__["a" /* POShopTab */];
        this.kart = __WEBPACK_IMPORTED_MODULE_4__pokart_tab_pokart_tab__["a" /* POKartTab */];
        this.payment = __WEBPACK_IMPORTED_MODULE_5__popayment_tab_popayment_tab__["a" /* POPaymentTab */];
        console.log("New Post Order Page");
        this.postOrder = {
            center: '',
            dispatch_center: '',
            order_date: new Date(),
            total_amount: 0,
            products: [],
            payment_method: '',
            payment_date: '',
            bank_name: '',
            transaction_no: '',
            remarks: '',
            dispatched: false,
        };
    }
    PostOrderAddPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Information",
            subTitle: "\n          This is a 3 step process: <br/> <br/>\n          - Add Products to the Cart you want to order <br/>\n          - View your Cart. For ay change go back and change from Products <br/>\n          - You can opt to ay now or later. On select of Pay Now, you will be redirected to Payment tab and add payment details. <br/>\n          <br/>\n        ",
            buttons: ["OK"]
        });
        alert.present();
    };
    PostOrderAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'postorder-create',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/postorder-create/postorder-create.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'NEW POST ORDER\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle (click)="showAlert()">\n        <a class="icon-circle">\n          <ion-icon name="information"></ion-icon>\n        </a>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content>\n  \n  <ion-tabs tabsPlacement="top">\n    <ion-tab tabTitle="Shop" [root]="shop" [rootParams]="postOrder"></ion-tab>\n    <ion-tab tabTitle="Cart" [root]="kart" [rootParams]="postOrder"></ion-tab>\n    <ion-tab tabTitle="Payment" [root]="payment" [rootParams]="postOrder"></ion-tab>\n  </ion-tabs>\n  \n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/postorder-create/postorder-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], PostOrderAddPage);
    return PostOrderAddPage;
}());

//# sourceMappingURL=postorder-create.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostOrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostOrderListPage = /** @class */ (function () {
    function PostOrderListPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs, storage, users, centers, callNumber, alertController, instructorService, postOrder, actionSheetController) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        this.storage = storage;
        this.users = users;
        this.centers = centers;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.instructorService = instructorService;
        this.postOrder = postOrder;
        this.actionSheetController = actionSheetController;
    }
    PostOrderListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.postOrder.query().subscribe(function (resp) {
            _this.currentItems = resp;
            _this.tempCurrentItems = resp;
            _this.storage.get("user").then(function (value) {
                _this.user = value;
                _this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](_this.currentItems, function (item) {
                    if (value.role == 'unit')
                        return (item.center == value.user_center || item.dispatch_center == value.user_center);
                    if (value.role == 'district')
                        return (item.center == value.user_district || item.dispatch_center == value.user_district);
                    if (value.role == 'master')
                        return (item.center == value.user_state || item.dispatch_center == value.user_state);
                    if (value.role == 'admin')
                        return item.center;
                });
                _this.tempCurrentItems = _this.currentItems;
            });
        }, function (err) {
            console.error("ERROR", err);
        });
        this.users.users_list().subscribe(function (res) {
            _this.allUsers = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.centers.query().subscribe(function (res) {
            _this.allCenters = res;
        }, function (err) {
            console.error("ERROR", err);
        });
    };
    PostOrderListPage.prototype.getItems = function (ev) {
        var val = ev.data.toUpperCase();
        if (!val || !val.trim()) {
            this.currentItems = this.tempCurrentItems;
            return;
        }
        this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.tempCurrentItems, function (item) {
            return (item.name.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.franchise_state.toUpperCase().indexOf(ev.name.toUpperCase()) >=
                    0 ||
                item.franchise_district.toUpperCase().indexOf(ev.name.toUpperCase()) >=
                    0 ||
                item.franchise_area.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.mobile_no.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
                item.email_id.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0);
        });
    };
    PostOrderListPage.prototype.view = function (postOrder, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("PostOrderAddPage", {
            postOrder: postOrder
        });
    };
    PostOrderListPage.prototype.add = function () {
        this.navCtrl.push("PostOrderAddPage");
    };
    PostOrderListPage.prototype.edit = function (postOrder, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("PostOrderAddPage", {
            postOrder: postOrder,
            tabIndex: 1,
        });
    };
    PostOrderListPage.prototype.payment = function (postOrder, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("PostOrderAddPage", {
            postOrder: postOrder,
            tabIndex: 2,
        });
    };
    PostOrderListPage.prototype.isDipatchCenter = function (dispatch_center) {
        if (this.user && this.user.role == 'master' && this.user.user_state == dispatch_center)
            return true;
        if (this.user && this.user.role == 'district' && this.user.user_district == dispatch_center)
            return true;
        if (this.user && this.user.role == 'unit' && this.user.user_center == dispatch_center)
            return true;
        if (this.user && this.user.role == 'admin' && this.user._id == dispatch_center)
            return true;
        return false;
    };
    PostOrderListPage.prototype.pressEvent = function (ev) {
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please right or left slide to get the options.",
            duration: 2000,
            position: "top"
        });
        toast.present();
    };
    PostOrderListPage.prototype.findUser = function (id) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allUsers, { _id: id });
        return val && val["name"] ? val["name"] : "";
    };
    PostOrderListPage.prototype.findLocation = function (id) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.allCenters, function (item) {
            return item._id.indexOf(id) >= 0;
        });
        val = val[0];
        return val && val["center_name"] ? val["center_name"] : "";
    };
    PostOrderListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "postorder-lists",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/postorder-list/postorder-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'POST ORDER\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="saveAsCsv()">\n        <ion-icon name="download"></ion-icon>\n      </button>\n    </ion-buttons> \n    <ion-buttons right>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'Search Post Order\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <h2> PO No: {{item._id}} </h2>\n        <p> <b> PO Date: </b> {{item.order_date | date: \'dd/MMM/yyyy\'}} </p>\n        <p> <b> Center: </b> {{findLocation(item.center)}} </p>\n        <p> <b> Dispatch Center: </b> {{findLocation(item.dispatch_center)}} </p>\n        <p> <b> Amount: </b> Rs. {{item.total_amount}} </p>\n      </ion-item>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="view(item, slidingItem)">\n          <ion-icon name="eye"></ion-icon> View\n        </button>\n        <button ion-button color="warning" (click)="edit(item, slidingItem)" *ngIf="item.payment_method == undefined || item.payment_method == null || item.payment_method == \'\'">\n            <ion-icon name="create"></ion-icon> Edit\n        </button>\n        <button ion-button color="success" (click)="payment(item, slidingItem)" *ngIf="item.payment_method == undefined || item.payment_method == null || item.payment_method == \'\'">\n          <ion-icon name="thumbs-up"></ion-icon> Payment\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left" class="listing-btn">\n        <!-- <button ion-button color="primary" (click)="confirm(item, slidingItem)" *ngIf="item.payment_method == undefined || item.payment_method == null || item.payment_method == \'\'">\n          <ion-icon name="call"></ion-icon> Confirm\n        </button> -->\n        <button ion-button color="primary" (click)="dispatch(item, slidingItem)" *ngIf="isDipatchCenter(item.dispatch_center)">\n          <ion-icon name="thumbs-up"></ion-icon> Dispatch\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/postorder-list/postorder-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["j" /* PostOrder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], PostOrderListPage);
    return PostOrderListPage;
}());

//# sourceMappingURL=postorder-list.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */]])
    ], ProgramAddPage);
    return ProgramAddPage;
}());

//# sourceMappingURL=program-create.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
    ], ProgramDetailPage);
    return ProgramDetailPage;
}());

//# sourceMappingURL=program-detail.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */]])
    ], ProgramEditPage);
    return ProgramEditPage;
}());

//# sourceMappingURL=program-update.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(140);
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
    };
    ProgramsListPage.prototype.ionViewWillEnter = function () {
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
    ProgramsListPage.prototype.saveAsCsv = function () {
        var csv = this.convertToCSV(this.currentItems);
        var fileName = "programs.csv";
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */].writeFile(__WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */].externalRootDirectory, fileName, csv)
            .then(function (_) {
            alert("Success ;-)");
        })
            .catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */].writeExistingFile(__WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */].externalRootDirectory, fileName, csv)
                .then(function (_) {
                alert("Success ;-)");
            })
                .catch(function (err) {
                alert("Failure");
            });
        });
    };
    ProgramsListPage.prototype.convertToCSV = function (teams) {
        var csv = "";
        var line = "";
        for (var i = 0; i < teams.length; i++) {
            if (line != "")
                line += ";";
            line += "Team " + (i + 1);
        }
        csv += line + "\r\n";
        for (var i = 0; i < teams[0].length; i++) {
            line = "";
            for (var j = 0; j < teams.length; j++) {
                if (line != "")
                    line += ";";
                line += teams[j][i];
            }
            csv += line + "\r\n";
        }
        return csv;
    };
    ProgramsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "programs-lists",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/programs-list/programs-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Programs Lists\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="saveAsCsv()">\n        <ion-icon name="download"></ion-icon>\n      </button>\n    </ion-buttons>  \n    <ion-buttons right>\n      <button ion-button icon-only (click)="addProgram()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content> \n\n  <ion-searchbar (ionInput)="getItems($event)" [(ngModel)]="input_search" placeholder="{{ \'Search Programs\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <h2> {{item.program_name}} </h2>\n        <h3> <b> Code: </b> {{item.program_code}}</h3>\n        <p> <b> No Of Sessions: </b> {{item.no_of_sessions}} </p>\n        <p> <b> Months Per Level: </b> {{item.months_per_level}} </p>\n        <p> <b> Total Levels: </b> {{item.total_levels}} </p>\n      </ion-item>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="viewProgram(item, slidingItem)">\n          <ion-icon name="ios-more"></ion-icon> View\n        </button>\n        <button ion-button color="warning" icon-start (click)="editProgram(item, slidingItem)">\n          <ion-icon name="create"></ion-icon> Edit\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/programs-list/programs-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["k" /* Programs */]])
    ], ProgramsListPage);
    return ProgramsListPage;
}());

//# sourceMappingURL=programs-list.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatesEdit = /** @class */ (function () {
    function StatesEdit(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, centers, program, formBuilder, nav) {
        var _this = this;
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.centers = centers;
        this.program = program;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.isReadyToSave = false;
        this.centers.query().subscribe(function (res) {
            _this.branches = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.program.query().subscribe(function (res) {
            _this.courses = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.form = formBuilder.group({
            _id: [""],
            center_id: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            center_type: ["state"],
            center_parent: [""],
            active: [true, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            programs: [[], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        var center = navParams.get("branch");
        this.form.controls["_id"].setValue(center._id);
        this.form.controls["center_id"].setValue(center.center_id);
        this.form.controls["center_name"].setValue(center.center_name);
        this.form.controls["center_type"].setValue(center.center_type);
        this.form.controls["center_parent"].setValue(center.center_parent);
        this.form.controls["active"].setValue(center.active);
        this.form.controls["programs"].setValue(center.programs);
    }
    StatesEdit.prototype.ionViewDidLoad = function () { };
    StatesEdit.prototype.createState = function () {
        var _this = this;
        this.centers.update(this.form.value).subscribe(function (resp) {
            if (!_this.form.value.active) {
                for (var b = 0; b < _this.branches.length; b++) {
                    if (_this.branches[b].center_parent == _this.form.value._id) {
                        _this.branches[b].active = false;
                        _this.centers.update(_this.branches[b]).subscribe(function (resp) {
                            console.log(resp);
                            for (var bb = 0; bb < _this.branches.length; bb++) {
                                if (_this.branches[bb].center_parent == _this.branches[b]._id) {
                                    _this.branches[bb].active = false;
                                    _this.centers.update(_this.branches[bb]).subscribe(function (resp) {
                                        console.log(resp);
                                    }, function (err) {
                                        console.log(err);
                                    });
                                }
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            }
            var toast = _this.toastCtrl.create({
                message: "Successfully updated State",
                duration: 3000,
                position: "top"
            });
            toast.present();
            _this.navCtrl.push("BranchesTab");
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the State. Please try again.",
                duration: 3000,
                position: "top"
            });
            toast.present();
        });
    };
    StatesEdit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "states-edit",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/states-edit/states-edit.html"*/'<ion-content>\n    <form [formGroup]="form">\n\n        <ion-list>\n            <ion-item>\n                <ion-label floating>{{ \'State Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_name"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{ \'State Code\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n                <ion-input type="text" formControlName="center_id" disabled="true"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> {{ \'Programs:\' | translate }}  <span class="mandatory-field"> * </span> </ion-label>\n                <ion-select formControlName="programs" multiple="true" style="min-width: 100%;">\n                    <ion-option value={{course._id}} *ngFor="let course of courses">{{course.program_name}}</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>{{ \'Active:\' | translate }} </ion-label>\n                <ion-toggle color="primary" formControlName="active"></ion-toggle>\n            </ion-item>\n        </ion-list>\n\n    </form>\n</ion-content>\n\n<ion-footer no-border>\n    <ion-toolbar transparent>\n        <button ion-button full (click)="createState()" ng-disabled="!isReadyToSave">\n            {{ \'SAVE\' | translate }}\n        </button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/states-edit/states-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]])
    ], StatesEdit);
    return StatesEdit;
}());

//# sourceMappingURL=states-edit.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentEnquiryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentEnquiryAddPage = /** @class */ (function () {
    function StudentEnquiryAddPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, element, storage, instructor, students) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.element = element;
        this.storage = storage;
        this.instructor = instructor;
        this.students = students;
        this.isReadyToSave = false;
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.isAreaDisabled = false;
        this.counter = 0;
        this.referralOptions = ['Radio', 'TV', 'Print', 'Outdoor', 'From a Friend', 'Direct Walk In', 'Others'];
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            district: [''],
            area: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program: [[], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            mobile_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            parent_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            school_name: [''],
            school_address: [''],
            grade: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            status: ['enquiry', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            contact_time: [''],
            referral: [''],
            remarks: [''],
            active: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            photo: [[]],
            enquiry_by: [''],
            enquiry_datetime: [new Date()]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.form.controls['district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
            else if (_this.user.role == 'unit') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.isAreaDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.form.controls['district'].setValue(_this.user.user_district);
                _this.form.controls['area'].setValue(_this.user.user_center);
            }
        });
        this.students.query().subscribe(function (res) {
            _this.allStudents = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    StudentEnquiryAddPage.prototype.ionViewDidLoad = function () {
    };
    StudentEnquiryAddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    StudentEnquiryAddPage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryAddPage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryAddPage.prototype.save = function () {
        var _this = this;
        this.students.add(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Student Enquiry. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    StudentEnquiryAddPage.prototype.onPhoneOrEmailChange = function (ev) {
        var inst = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.allStudents, function (item) {
            if (item.whatsapp_no != undefined && item.whatsapp_no != '' && item.whatsapp_no == ev.value) {
                return true;
            }
            return (item.mobile_no == ev.value || item.email_id == ev.value);
        });
        this.counter = inst.length;
    };
    StudentEnquiryAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'studentenquiry-create',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/studentenquiry-create/studentenquiry-create.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Student Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="state" (ionChange)="onStateChange($event)"\n          [disabled]="isStateDisabled">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'District\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="district"\n          (ionChange)="onDistrictChange($event)" [disabled]="isDistrictDisabled">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="area" [disabled]="isAreaDisabled">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Parent Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="parent_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'School Name\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="school_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'School Address\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="school_address"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Grade\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="grade"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="program">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="contact_time"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="referral">\n          <ion-option value={{referral}} *ngFor="let referral of referralOptions">{{referral}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <p style="color: red;" *ngIf="counter > 0">There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office.</p>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/studentenquiry-create/studentenquiry-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["m" /* Students */]])
    ], StudentEnquiryAddPage);
    return StudentEnquiryAddPage;
}());

//# sourceMappingURL=studentenquiry-create.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentEnquiryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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







var StudentEnquiryListPage = /** @class */ (function () {
    function StudentEnquiryListPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs, storage, users, centers, callNumber, alertController, studentService, actionSheetController) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.programs = programs;
        this.storage = storage;
        this.users = users;
        this.centers = centers;
        this.callNumber = callNumber;
        this.alertController = alertController;
        this.studentService = studentService;
        this.actionSheetController = actionSheetController;
    }
    StudentEnquiryListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.studentService.query().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].status === 'status') {
                    res.splice(i, 1);
                    i--;
                }
            }
            _this.currentItems = res;
            _this.tempCurrentItems = res;
            _this.storage.get("user").then(function (value) {
                _this.user = value;
                if (_this.user.role != "admin") {
                    _this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](_this.currentItems, function (item) {
                        return item.enquiry_by == this.user._id;
                    });
                    _this.tempCurrentItems = _this.currentItems;
                }
            });
        }, function (err) {
            console.error("ERROR", err);
        });
        this.users.users_list().subscribe(function (res) {
            _this.allUsers = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.centers.query().subscribe(function (res) {
            _this.allCenters = res;
        }, function (err) {
            console.error("ERROR", err);
        });
    };
    StudentEnquiryListPage.prototype.getItems = function (ev) {
        var val = ev.data.toUpperCase();
        if (!val || !val.trim()) {
            this.currentItems = this.tempCurrentItems;
            return;
        }
        this.currentItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.tempCurrentItems, function (item) {
            return (item.name.toUpperCase().indexOf(ev.data.toUpperCase()) >= 0 ||
                item.franchise_state.toUpperCase().indexOf(ev.data.toUpperCase()) >=
                    0 ||
                item.franchise_district.toUpperCase().indexOf(ev.data.toUpperCase()) >=
                    0 ||
                item.franchise_area.toUpperCase().indexOf(ev.data.toUpperCase()) >= 0 ||
                item.mobile_no.toUpperCase().indexOf(ev.data.toUpperCase()) >= 0 ||
                item.email_id.toUpperCase().indexOf(ev.data.toUpperCase()) >= 0);
        });
    };
    StudentEnquiryListPage.prototype.view = function (student, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("StudentEnquiryViewPage", {
            student: student
        });
    };
    StudentEnquiryListPage.prototype.add = function () {
        this.navCtrl.push("StudentEnquiryAddPage");
    };
    StudentEnquiryListPage.prototype.edit = function (student, slidingItem) {
        slidingItem.close();
        this.navCtrl.push("StudentEnquiryEditPage", {
            student: student
        });
    };
    StudentEnquiryListPage.prototype.contact = function (student, slidingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slidingItem.close();
                        return [4 /*yield*/, this.actionSheetController.create({
                                buttons: [
                                    {
                                        text: "Call",
                                        icon: "call",
                                        handler: function () {
                                            _this.callNumber.callNumber(student.mobile_no, true)
                                                .then(function (res) { return console.log('Launched dialer!', res); })
                                                .catch(function (err) { return console.log('Error launching dialer', err); });
                                        }
                                    },
                                    {
                                        text: "Whatsapp",
                                        icon: "logo-whatsapp",
                                        handler: function () {
                                            if (student.whatsapp_no != undefined && student.whatsapp_no != '' && student.whatsapp_no != null)
                                                window.open(("https://wa.me/91" + student.whatsapp_no), "_blank");
                                            else
                                                window.open(("https://wa.me/91" + student.mobile_no), "_blank");
                                        }
                                    },
                                    {
                                        text: "SMS",
                                        icon: "text",
                                        handler: function () {
                                            window.open("sms://" + student.mobile_no);
                                        }
                                    },
                                    {
                                        text: "Email",
                                        icon: "mail",
                                        handler: function () {
                                            window.open("mailto://" + student.email_id);
                                        }
                                    },
                                    {
                                        text: "Cancel",
                                        icon: "close",
                                        role: "cancel",
                                        handler: function () {
                                            console.log("Cancel clicked");
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentEnquiryListPage.prototype.confirm = function (student, slidingItem) {
        slidingItem.close();
        this.presentAlertConfirm(student);
    };
    StudentEnquiryListPage.prototype.presentAlertConfirm = function (student) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: "Confirm?",
                            subTitle: "",
                            message: "Are you sure you want to Confirm this Enquiry?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (blah) {
                                        console.log("Confirm Cancel: blah");
                                    }
                                },
                                {
                                    text: "Confirm",
                                    handler: function () {
                                        delete student.__v;
                                        student.status = "confirm";
                                        _this.studentService.update(student).subscribe(function (resp) { }, function (err) {
                                            var toast = _this.toastCtrl.create({
                                                message: "Error in rejecting this Enquiry. Please try again.",
                                                duration: 3000,
                                                position: "top"
                                            });
                                            toast.present();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentEnquiryListPage.prototype.reject = function (student, slidingItem) {
        slidingItem.close();
        this.presentAlertReject(student);
    };
    StudentEnquiryListPage.prototype.presentAlertReject = function (student) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: "Reject?",
                            subTitle: "",
                            message: "Are you sure you want to Reject this Enquiry? Once rejected you cannot do actions on this Enquiry again.",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: function (blah) {
                                        console.log("Confirm Cancel: blah");
                                    }
                                },
                                {
                                    text: "Confirm",
                                    handler: function () {
                                        delete student.__v;
                                        student.status = "reject";
                                        _this.studentService.update(student).subscribe(function (resp) { }, function (err) {
                                            var toast = _this.toastCtrl.create({
                                                message: "Error in rejecting this Enquiry. Please try again.",
                                                duration: 3000,
                                                position: "top"
                                            });
                                            toast.present();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentEnquiryListPage.prototype.findLocation = function (id) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allCenters, { _id: id });
        return val && val["center_name"] ? val["center_name"] : "";
    };
    StudentEnquiryListPage.prototype.findUser = function (id) {
        var val = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allUsers, { _id: id });
        return val && val["name"] ? val["name"] : "";
    };
    StudentEnquiryListPage.prototype.pressEvent = function (ev) {
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please right or left slide to get the options.",
            duration: 2000,
            position: "top"
        });
        toast.present();
    };
    StudentEnquiryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "studentenquiry-lists",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/studentenquiry-list/studentenquiry-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Student List\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'Search Student\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <h2> {{item.name}} </h2>\n        <p> <b> State: </b> {{findLocation(item.state)}} </p>\n        <p> <b> District: </b> {{findLocation(item.district)}} </p>\n        <p> <b> Area: </b> {{findLocation(item.area)}} </p>\n        <p> <b> Enquired By: </b> {{findUser(item.enquiry_by)}} </p>\n        <p>\n          <b> Status: </b>\n          <span [class.student-enquiry]="item.status == \'enquiry\'" [class.student-reject]="item.status == \'reject\'"\n            [class.student-confirm]="item.status == \'confirm\'"> {{item.status}} </span>\n        </p>\n      </ion-item>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="view(item, slidingItem)">\n          <ion-icon name="eye"></ion-icon> View\n        </button>\n        <button ion-button color="danger" (click)="reject(item, slidingItem)" *ngIf="item.status == \'enquiry\'">\n          <ion-icon name="thumbs-down"></ion-icon> Reject\n        </button>\n        <button ion-button color="success" (click)="confirm(item, slidingItem)" *ngIf="item.status == \'enquiry\'">\n          <ion-icon name="thumbs-up"></ion-icon> Confirm\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left" class="listing-btn">\n        <button ion-button color="primary" (click)="contact(item, slidingItem)">\n          <ion-icon name="call"></ion-icon> Contact\n        </button>\n        <button ion-button color="warning" (click)="edit(item, slidingItem)">\n          <ion-icon name="create"></ion-icon> Edit\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/studentenquiry-list/studentenquiry-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["m" /* Students */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], StudentEnquiryListPage);
    return StudentEnquiryListPage;
}());

//# sourceMappingURL=studentenquiry-list.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentEnquiryEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentEnquiryEditPage = /** @class */ (function () {
    function StudentEnquiryEditPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, element, storage, instructor, students, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.element = element;
        this.storage = storage;
        this.instructor = instructor;
        this.students = students;
        this.navParams = navParams;
        this.isReadyToSave = false;
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.isAreaDisabled = false;
        this.counter = 0;
        this.referralOptions = ['Radio', 'TV', 'Print', 'Outdoor', 'From a Friend', 'Direct Walk In', 'Others'];
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        var student = navParams.get('student');
        this.form = formBuilder.group({
            _id: [student._id],
            name: [student.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            state: [student.state, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            district: [student.district],
            area: [student.area, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program: [student.program, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address: [student.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            mobile_no: [student.mobile_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: [student.whatsapp_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: [student.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [student.dob, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            parent_name: [student.parent_name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            school_name: [student.school_name],
            school_address: [student.school_address],
            grade: [student.grade, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            status: [student.status, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            contact_time: [student.contact_time],
            referral: [student.referral],
            remarks: [student.remarks],
            active: [student.active, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            photo: [student.photo],
            enquiry_by: [student.enquiry_by],
            enquiry_datetime: [student.enquiry_datetime]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
            _this.onStateChange(_this.form.controls['state'].value);
            _this.onDistrictChange(_this.form.controls['district'].value);
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.form.controls['district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
            else if (_this.user.role == 'unit') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.isAreaDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.form.controls['district'].setValue(_this.user.user_district);
                _this.form.controls['area'].setValue(_this.user.user_center);
            }
        });
        this.students.query().subscribe(function (res) {
            _this.allStudents = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    StudentEnquiryEditPage.prototype.ionViewDidLoad = function () {
    };
    StudentEnquiryEditPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    StudentEnquiryEditPage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryEditPage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryEditPage.prototype.save = function () {
        var _this = this;
        this.students.update(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in updating the Student Enquiry. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    StudentEnquiryEditPage.prototype.onPhoneOrEmailChange = function (ev) {
        var inst = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.allStudents, function (item) {
            if (item.whatsapp_no != undefined && item.whatsapp_no != '' && item.whatsapp_no == ev.value) {
                return true;
            }
            return (item.mobile_no == ev.value || item.email_id == ev.value);
        });
        this.counter = inst.length;
    };
    StudentEnquiryEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'studentenquiry-update',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/studentenquiry-update/studentenquiry-update.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Student Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="state" (ionChange)="onStateChange($event)"\n          [disabled]="isStateDisabled">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'District\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="district"\n          (ionChange)="onDistrictChange($event)" [disabled]="isDistrictDisabled">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="area" [disabled]="isAreaDisabled">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Parent Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="parent_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'School Name\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="school_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'School Address\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="school_address"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Grade\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="grade"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="program">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="contact_time"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="referral">\n          <ion-option value={{referral}} *ngFor="let referral of referralOptions">{{referral}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <p style="color: red;" *ngIf="counter > 0">There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office.</p>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/studentenquiry-update/studentenquiry-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["m" /* Students */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
    ], StudentEnquiryEditPage);
    return StudentEnquiryEditPage;
}());

//# sourceMappingURL=studentenquiry-update.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentEnquiryViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StudentEnquiryViewPage = /** @class */ (function () {
    function StudentEnquiryViewPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, element, storage, instructor, students, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.element = element;
        this.storage = storage;
        this.instructor = instructor;
        this.students = students;
        this.navParams = navParams;
        this.isReadyToSave = false;
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.isAreaDisabled = false;
        this.counter = 0;
        this.referralOptions = ['Radio', 'TV', 'Print', 'Outdoor', 'From a Friend', 'Direct Walk In', 'Others'];
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        var student = navParams.get('student');
        this.form = formBuilder.group({
            _id: [student._id],
            name: [student.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            state: [student.state, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            district: [student.district, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            area: [student.area, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program: [student.program, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address: [student.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            mobile_no: [student.mobile_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: [student.whatsapp_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: [student.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [student.dob],
            parent_name: [student.parent_name],
            school_name: [student.school_name],
            school_address: [student.school_address],
            grade: [student.grade, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            status: [student.status, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            contact_time: [student.contact_time],
            referral: [student.referral],
            remarks: [student.remarks],
            active: [student.active, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            photo: [student.photo],
            enquiry_by: [student.enquiry_by],
            enquiry_datetime: [student.enquiry_datetime]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
            _this.onStateChange(_this.form.controls['state'].value);
            _this.onDistrictChange(_this.form.controls['district'].value);
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.form.controls['district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
            else if (_this.user.role == 'unit') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.isAreaDisabled = true;
                _this.form.controls['state'].setValue(_this.user.user_state);
                _this.form.controls['district'].setValue(_this.user.user_district);
                _this.form.controls['area'].setValue(_this.user.user_center);
            }
        });
        this.students.query().subscribe(function (res) {
            _this.allStudents = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    StudentEnquiryViewPage.prototype.ionViewDidLoad = function () {
    };
    StudentEnquiryViewPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    StudentEnquiryViewPage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryViewPage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'studentenquiry-view',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/studentenquiry-view/studentenquiry-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Student Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="state" (ionChange)="onStateChange($event)"\n        disabled="true">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'District\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="district"\n          (ionChange)="onDistrictChange($event)" disabled="true">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Area\' | translate }} </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="area" disabled="true">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address" disabled="true"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="mobile_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="email_id" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob" disabled="true"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Parent Name\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="parent_name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'School Name\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="school_name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'School Address\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="school_address" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Grade\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="grade" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="program" disabled="true">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="contact_time" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="referral" disabled="true">\n          <ion-option value={{referral}} *ngFor="let referral of referralOptions">{{referral}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks" disabled="true"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/studentenquiry-view/studentenquiry-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["m" /* Students */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */]])
    ], StudentEnquiryViewPage);
    return StudentEnquiryViewPage;
}());

//# sourceMappingURL=studentenquiry-view.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
    function SignupPage(navCtrl, user, center, toastCtrl, translateService, viewCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.center = center;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.account = {
            name: '',
            user_name: '',
            email: '',
            password: '',
            confirm_password: '',
            phone_no: '',
            whatsapp_no: '',
            gender: 'male',
            role: '',
            dob: new Date(),
            profile_pic: '',
            user_state: '',
            user_district: '',
            user_center: '',
            active: true
        };
        this.isReadyToSave = true;
        this.isDuplicate = false;
        this.isPasswordMatch = true;
        this.states = [];
        this.districts = [];
        this.areas = [];
        this.user.users_list().subscribe(function (res) {
            _this.usersList = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Processing ..."
        });
        loading.present();
        this.account.dob = new Date(this.account.dob);
        this.user.signup(this.account).subscribe(function (resp) {
            loading.dismiss();
            _this.viewCtrl.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
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
        if (this.account.name != '' && this.account.user_name != '' && this.account.email != '' &&
            this.account.password != '' && this.account.confirm_password != '' && this.account.phone_no != '' &&
            this.account.gender != '' && this.account.role != '') {
            if (this.account.password == this.account.confirm_password) {
                this.isReadyToSave = false;
            }
        }
        else {
            this.isReadyToSave = true;
        }
        // let user = _.filter(this.usersList, function (item) {
        //   return ((item.user_name.toUpperCase().indexOf(this.account.user_name.toUpperCase()) >= 0)
        //     || (item.email.toUpperCase().indexOf(this.account.email.toUpperCase()) >= 0))
        // });
        // this.isDuplicate = (user.length > 0);
    };
    SignupPage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    SignupPage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/user-add/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Create User\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Full Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'User Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_name" name="user_name" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Phone No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" [(ngModel)]="account.phone_no" name="phone_no" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" [(ngModel)]="account.whatsapp_no" name="whatsapp_no" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Password\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Confirm Password\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="password" [(ngModel)]="account.confirm_password" name="confirm_password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="account.dob" name="dob" (ionChange)="onChange($event)"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Gender\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select [(ngModel)]="account.gender" name="gender" (ionChange)="onChange($event)">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Role\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select [(ngModel)]="account.role" name="role" (ionChange)="onChange($event)">\n          <ion-option value="admin">Admin</ion-option>\n          <ion-option value="master">Master Franchise</ion-option>\n          <ion-option value="district">District Franchise</ion-option>\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="instructor">Instructor</ion-option>\n          <ion-option value="student">Student</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'admin\'">\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_state" name="user_state" (ionChange)="onStateChange($event)">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'master\' && account.role != \'admin\'">\n        <ion-label floating>{{ \'District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_district" name="user_district"\n          (ionChange)="onDistrictChange($event)">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'master\' && account.role != \'admin\' && account.role != \'district\'">\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_center" name="user_center">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'Active:\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-toggle color="primary" [(ngModel)]="account.active" name="active" (ionChange)="onChange($event)"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="doSignup()" [disabled]="isReadyToSave">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/user-add/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
    function UserDetailPage(navCtrl, user, center, toastCtrl, translateService, navParams, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.center = center;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.account = navParams.get('user');
        this.user.users_list().subscribe(function (res) {
            _this.usersList = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
            console.log(_this.states);
            _this.onStateChange(_this.account.user_state);
            _this.onDistrictChange(_this.account.user_district);
            console.log(_this.states);
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    UserDetailPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    UserDetailPage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    UserDetailPage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    UserDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-detail',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/user-detail/user-detail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'User Details\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Full Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'User Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_name" name="user_name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Phone No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" [(ngModel)]="account.phone_no" name="phone_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" [(ngModel)]="account.whatsapp_no" name="whatsapp_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="account.dob" name="dob" disabled="true"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Gender\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select [(ngModel)]="account.gender" name="gender" disabled="true">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Role\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select [(ngModel)]="account.role" name="role" disabled="true">\n          <ion-option value="admin">Admin</ion-option>\n          <ion-option value="master">Master Franchise</ion-option>\n          <ion-option value="district">District Franchise</ion-option>\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="instructor">Instructor</ion-option>\n          <ion-option value="student">Student</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'admin\'">\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_state" name="user_state" disabled="true">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'master\' && account.role != \'admin\'">\n        <ion-label floating>{{ \'District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_district" name="user_district" disabled="true">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'master\' && account.role != \'admin\' && account.role != \'district\'">\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_center" name="user_center" disabled="true">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'Active:\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-toggle color="primary" [(ngModel)]="account.active" name="active" disabled="true"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/user-detail/user-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */]])
    ], UserDetailPage);
    return UserDetailPage;
}());

//# sourceMappingURL=user-detail.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
            name: '',
            user_name: '',
            email: '',
            password: '',
            phone_no: '',
            whatsapp_no: '',
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
        this.states = [];
        this.districts = [];
        this.areas = [];
        this.account = navParams.get('user');
        console.log(this.account);
        this.user.users_list().subscribe(function (res) {
            _this.usersList = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
            _this.onStateChange(_this.account.user_state);
            _this.onDistrictChange(_this.account.user_district);
        }, function (err) {
            console.error('ERROR', err);
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    UserUpdatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    UserUpdatePage.prototype.doSignup = function () {
        var _this = this;
        this.account.dob = new Date(this.account.dob);
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
        this.isReadyToSave = (this.account.name != '' && this.account.user_name != '' && this.account.email != '' &&
            this.account.password != '' && this.account.phone_no != '' &&
            this.account.gender != '' && this.account.role != '');
        // let user = _.filter(this.usersList, function (item) {
        //   return ((item.user_name.toUpperCase().indexOf(this.account.user_name.toUpperCase()) >= 0)
        //     || (item.email.toUpperCase().indexOf(this.account.email.toUpperCase()) >= 0))
        // });
        // this.isDuplicate = (user.length > 0);
    };
    UserUpdatePage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    UserUpdatePage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    UserUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-update',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/user-update/user-update.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Update User\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Full Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'User Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" [(ngModel)]="account.user_name" name="user_name" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Phone No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" [(ngModel)]="account.phone_no" name="phone_no" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" [(ngModel)]="account.whatsapp_no" name="whatsapp_no" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Password\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label floating>{{ \'Confirm Password\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="password" [(ngModel)]="account.confirm_password" name="confirm_password" (ionChange)="onChange($event)"></ion-input>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="account.dob" name="dob" (ionChange)="onChange($event)"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Gender\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select [(ngModel)]="account.gender" name="gender" (ionChange)="onChange($event)">\n          <ion-option value="female">Female</ion-option>\n          <ion-option value="male">Male</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Role\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select [(ngModel)]="account.role" name="role" (ionChange)="onChange($event)">\n          <ion-option value="admin">Admin</ion-option>\n          <ion-option value="master">Master Franchise</ion-option>\n          <ion-option value="district">District Franchise</ion-option>\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="instructor">Instructor</ion-option>\n          <ion-option value="student">Student</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'admin\'">\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_state" name="user_state" (ionChange)="onStateChange($event)">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'master\' && account.role != \'admin\'">\n        <ion-label floating>{{ \'District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_district" name="user_district"\n          (ionChange)="onDistrictChange($event)">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="account.role != \'master\' && account.role != \'admin\' && account.role != \'district\'">\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" [(ngModel)]="account.user_center" name="user_center">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'Active:\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-toggle color="primary" [(ngModel)]="account.active" name="active" (ionChange)="onChange($event)"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="doSignup()" [disabled]="!isReadyToSave">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/user-update/user-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["b" /* Center */]])
    ], UserUpdatePage);
    return UserUpdatePage;
}());

//# sourceMappingURL=user-update.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number_ngx__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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







var UsersPage = /** @class */ (function () {
    function UsersPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, users, centers, callNumber, actionSheetController) {
        this.vibration = vibration;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.users = users;
        this.centers = centers;
        this.callNumber = callNumber;
        this.actionSheetController = actionSheetController;
    }
    UsersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.users.users_list().subscribe(function (res) {
            _this.currentItems = res;
            _this.allItems = res;
        }, function (err) {
            console.error("ERROR", err);
        });
        this.centers.query().subscribe(function (res) {
            _this.allCenters = res;
        }, function (err) {
            console.error("ERROR", err);
        });
    };
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
        this.navCtrl.push("UserDetailPage", {
            user: item
        });
    };
    UsersPage.prototype.addItem = function () {
        this.navCtrl.push("SignupPage");
    };
    UsersPage.prototype.findRole = function (id) {
        if (id == 'admin')
            return 'Admin';
        if (id == 'master')
            return 'Master Franchise';
        if (id == 'district')
            return 'District Franchise';
        if (id == 'unit')
            return 'Unit Franchise';
        if (id == 'instructor')
            return 'Instructor';
        if (id == 'student')
            return 'Student';
    };
    UsersPage.prototype.findLocation = function (id) {
        if (id == undefined || id == null || id == '')
            return '';
        var val = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](this.allCenters, { _id: id });
        return val && val["center_name"] ? val["center_name"] : "";
    };
    UsersPage.prototype.findImage = function (img) {
        if (img == undefined || img == null || img == '')
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAM1BMVEUKME7///+El6bw8vQZPVlHZHpmfpHCy9Ojsbzg5ekpSmTR2N44V29XcYayvsd2i5yTpLFbvRYnAAAJcklEQVR4nO2d17arOgxFs+kkofz/154Qmg0uKsuQccddT/vhnOCJLclFMo+//4gedzcApf9B4srrusk+GsqPpj+ypq7zVE9LAdLWWVU+Hx69y2FMwAMGyfusLHwIpooyw9IAQfK+8naDp3OGHvZ0FMhrfPMgVnVjC2kABOQ1MLvi0DEIFj1ILu0LU2WjNRgtSF3pKb4qqtd9IHmjGlJHlc09IHlGcrQcPeUjTAySAGNSkQlRhCCJMGaUC0HSYUx6SmxFAtJDTdylsr4ApC1TY0yquKbCBkk7qnYVzPHFBHkBojhVJWviwgPJrsP4qBgTgbQXdsesjm4pDJDmIuswVZDdFx0ENTtkihoeqSDXD6tVxOFFBHndMKxWvUnzexpIcx/Gg2goJJDhVo6PCMGRAnKTmZuKm3wcJO/upphUqUHy29yVrRhJDORXOKIkEZDf4YiRhEF+iSNCEgb5KY4wSRDkB/yurUEG8nMcocgYABnvbrVL3nMIP0h/d5udKnwzSC/InfPdkJ6eWb0PJE++dyVVyQP5iQmWW27X5QG5druEKafBu0Hqu9saVOHa8HKC/K6BzHKZiRMEZCDF0Nd1/ZfXI/fcOibHOssFgokg9uFA20BhztHEAZIjIohrD/o1wljeFBDEwBo8YUt5Ir/rNLjOIACPFdy/AbEcPdcJBOCxytjeYAM4Kzp6rhOIPhRGNzwmFP3rOoTFI0irtnQKx6fj1Zt+h9njEUS9mKJxfFRrX5lt7wcQtaWTOfTHeIXVJQcQrRW+OYex2j0a66XZINoO8a7fPH2iHF2mC7ZBtB3Czb5QvjizSx7A3308mRzqAwujSywQbYfwc0iU8zqjS0yQ6ztEHX9332KCaGNIYB/Qq1z3yN0oDZBWyeFYJBCkm2sXLhDtpKFwNDMu5TnrZpYGiHbK4Nlwikg5DrYV1g6iPoJmzE5MKd/fOp53EPUaQZaLqH3u+vo2ELWp3wSyWuYGoj9EEIJoV3L9AUS/ZLsJpLNBXmqOu0CW6P5A/dx9IL0FAji/FYKot9EqE0Tvs6QBUe/2CxMEkZAlBNGPhdoAQWyTSmbxUwvUygwQyMmniAPgLt87CODXHuftWJIQgzrfQDC5AfwSgz9MmmG/gWCOqDgZ4JsQeTvZBoJJDhAFEsSDyxUEEUUekk0UEMhjBcEcGsoWVpBU3NcCgkkPkJWrKbdRZvULCMTWhYEdMrayBQRyqHcnSLmAIH7LcWJ8Hch7BsHEdWFpJsZjziCgFBpZ9TPm4e0XBJTTJKt9xjy8RoLI4gimPLP5goCSgWTrEcyzsy8IqmZVMo0H5bJiQToBCOjZ5RcElhjLN3dU7uQMAvoxwQkJZKI1CQzCthJYEigahHuDDi4rFwzCPQ7F1fiDQZgTR5iJwEGYRgIsiECD8BwwMAEfDcIaW8CRBQdhjS1kJQEchDEFhiRKr4KDFPS9FGQNVwEHoW83QjsEHdkfnuIOl6C1NjMItiaCaCWgbdpFJXQ9soh2uoB9aJcCxFdgZwlcrTmvENGlrITBBdpK25Qhd1F2RScq8CKu/gsCL8qN5THjy+Rr5E6joYgPxpdl518QrCf8Kpgjn6C8HLkbb+vt7ZM8wdVvy258khsRfHaS5DalDnlidZT7Erk+SXV5Bj1D3LS29XyhVJuoKHs9Q8S6reK11oUc7vPcr9uswP3SLiDINefXOF5rwCuGzVT6zVkVPfh2wWmHcz4wAwba2cgN1/Tsvleu7//i69CgVyt1GwjOs2+XK3rtbl151Tg3vOeioG40Mz2V+6pQ4xbJHOZj6g0EMxk93tV7fuedvVZpQSPhbwNBGInrymGrwNh1GXmL8F+lAaJ+NU/fzcmvJqvKj7177+1v1GY/GiBKI1Fdy/2XK6upXwaIJpI8B/399W0mH9zzafKaeCF9J0WF+jyCuFusTGzZKhFH8dVLZql2brxgcdVBKb7KG/7UZTmB3XJ6uL/QYT5ScRI74FcHEJ7feopyfGkaeaGlPoCw/BbjZmSBWIvINQNmTxdjWJqwUI8sztR4nYPuIPSTSUnOCZOE3ierqRoJfNSQxDjLEYs8i91eqgFCDSWiFHiuqAN9CwEGCPEISVjvwhS7Mfx6dtX8kC5aqvneGBOEFN2v6RBiYwr3DQOkLhEW6fHFbIwFQnkLiWYmZxE220z/aedPx99C+hiyKR4OzNFhg8S75CJTnxQ1dyugHTLaY10iu9dBpmhQtMz1ABLrkgtHVnRsPUO3OcU25i8cWdGxZbflCBKJqBdMs3aF/dYhNexU9RFcYEmLXYQKghyWdufyldBSU3KpjkKhZclxTXQGCTkL/HZDUIH5+Gkt4SgoCtj7pSYSNJLTK3VVRnmXZxebSMBIzmHABeIdXBebiN9eHYtUZ62ab3BdGkUm+SKJw1bdRXeewaX7qqdAnljg2sVxg3guAk3baofcg9yZ2eZpnHNvSFrEqhB9YPjesmt0pt6Xc8hl7W5L9Q4Xx09ctsrd5VhWeF6nF8SRrZdw49qns//0xTK/AZ8vGr3caTliuzeFNeCJTgafpKlhHd2WP1sy1LqDF798gjKJPLqDr9keoTd43+NyNzC1CI8Xy2lcPtOaVBI5IiAWyQ3e125AcKoXs2Djhy5eVc3KiBxREIPkhjBiLhIjU++4T91IbggjRiCJLSEIwWGddkEaxlVN5KCArPHk8mXVpHk8FHH7JL3n5dPA7C90q7XkeFJucacNmGXeRfswLE71HA79efaGiCN/Ofjmfmtcp8X10tIsqCacV5xfRWjNUiXGYbovWgyFYHcQLak15K9oM5zqmgaeKsHJetbSHfSPzXOiw/rxE9YH4CXaUpsZ0ztemFurP95Jpyvrd29YTpIZr7cEJHqfc7Wl0PFm2+yJR70udaokKFtGPTdm8WdQe24+HmVLlueboWQquBcYYVH2vEzfh8kCks1p90eWsLCyZ8qK7E86Oe+3XYFnBuiWdth20UqZR5SvMoyPg3WNauJipi0LMTQgVq5xUUlZcrPsopPHJ926z8pm7xyFLrH/PxpHSoXKdWgXsLn1scZn1ZDd/2vszN3lt254qkE+qu3yoqLM+ghN3Qz2qcVzUC/ZMFsK/alU6l0OWV/bQz6v6yYbyuN5BaZ4A7Y30vs/PPksS2+qzlvfF7OQmzzcL7W+xa7OIfRuVdtn/tdvdFLnL4OTKcm2W16PmWc4FWWXNSlWM2n3D+uPxuyrcfo74aP+Ac30a82+oLmfAAAAAElFTkSuQmCC';
        return img;
    };
    UsersPage.prototype.pressEvent = function (ev) {
        this.vibration.vibrate(150);
        var toast = this.toastCtrl.create({
            message: "please slide to get the options .",
            duration: 2000,
            position: "top"
        });
        toast.present();
    };
    UsersPage.prototype.editItem = function (item, slidingItem) {
        this.navCtrl.push("UserUpdatePage", {
            user: item
        });
    };
    UsersPage.prototype.mailUser = function (user) {
        window.open("mailto:" + user.email, "_system");
    };
    UsersPage.prototype.callUser = function (user) {
        this.callNumber
            .callNumber(user.phone_no, true)
            .then(function (res) { return console.log("Launched dialer!", res); })
            .catch(function (err) { return console.log("Error launching dialer", err); });
    };
    UsersPage.prototype.saveAsCsv = function () {
        var csv = this.convertToCSV(this.currentItems);
        var fileName = "users.csv";
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */].writeFile(__WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */].externalRootDirectory, fileName, csv)
            .then(function (_) {
            alert("Success ;-)");
        })
            .catch(function (err) {
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */].writeExistingFile(__WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */].externalRootDirectory, fileName, csv)
                .then(function (_) {
                alert("Success ;-)");
            })
                .catch(function (err) {
                alert("Failure");
            });
        });
    };
    UsersPage.prototype.convertToCSV = function (teams) {
        var csv = "";
        var line = "";
        for (var i = 0; i < teams.length; i++) {
            if (line != "")
                line += ";";
            line += "Team " + (i + 1);
        }
        csv += line + "\r\n";
        for (var i = 0; i < teams[0].length; i++) {
            line = "";
            for (var j = 0; j < teams.length; j++) {
                if (line != "")
                    line += ";";
                line += teams[j][i];
            }
            csv += line + "\r\n";
        }
        return csv;
    };
    UsersPage.prototype.contact = function (user, slidingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slidingItem.close();
                        return [4 /*yield*/, this.actionSheetController.create({
                                buttons: [
                                    {
                                        text: "Call",
                                        icon: "call",
                                        handler: function () {
                                            _this.callNumber.callNumber(user.phone_no, true)
                                                .then(function (res) { return console.log('Launched dialer!', res); })
                                                .catch(function (err) { return console.log('Error launching dialer', err); });
                                        }
                                    },
                                    {
                                        text: "Whatsapp",
                                        icon: "logo-whatsapp",
                                        handler: function () {
                                            if (user.whatsapp_no != undefined && user.whatsapp_no != '' && user.whatsapp_no != null)
                                                window.open(("https://wa.me/91" + user.whatsapp_no), "_blank");
                                            else
                                                window.open(("https://wa.me/91" + user.phone_no), "_blank");
                                        }
                                    },
                                    {
                                        text: "SMS",
                                        icon: "text",
                                        handler: function () {
                                            window.open("sms://" + user.phone_no);
                                        }
                                    },
                                    {
                                        text: "Email",
                                        icon: "mail",
                                        handler: function () {
                                            window.open("mailto://" + user.email);
                                        }
                                    },
                                    {
                                        text: "Cancel",
                                        icon: "close",
                                        role: "cancel",
                                        handler: function () {
                                            console.log("Cancel clicked");
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "users_lists",template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/users-lists/users_lists.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Users Lists\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="saveAsCsv()">\n        <ion-icon name="download"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'Search Users\' | translate }}"></ion-searchbar>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <ion-avatar item-start>\n          <img src={{findImage(item.profile_pic)}}>\n        </ion-avatar>\n        <h2>{{item.name}}</h2>\n        <h3>{{findRole(item.role)}}</h3>\n        <p *ngIf="item.user_state != \'\'"> <b> State: </b> {{findLocation(item.user_state)}}</p>\n        <p *ngIf="item.user_district != \'\'"> <b> District: </b> {{findLocation(item.user_district)}}</p>\n        <p *ngIf="item.user_center != \'\'"> <b> Center: </b> {{findLocation(item.user_center)}}</p>\n      </ion-item>\n\n      <ion-item-options side="left" class="listing-btn">\n        <button ion-button color="primary" (click)="contact(item, slidingItem)" icon-start>\n          <ion-icon name="call"></ion-icon> Contact\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="openItem(item)" icon-start>\n          <ion-icon name="ios-more"></ion-icon> View\n        </button>\n        <button ion-button color="warning" (click)="editItem(item,slidingItem)" icon-start>\n          <ion-icon name="create"></ion-icon> Edit\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/users-lists/users_lists.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["n" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number_ngx__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users_lists.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructorEnquiryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InstructorEnquiryAddPage = /** @class */ (function () {
    function InstructorEnquiryAddPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, element, storage, instructor) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.programs = programs;
        this.toastCtrl = toastCtrl;
        this.center = center;
        this.program = program;
        this.element = element;
        this.storage = storage;
        this.instructor = instructor;
        this.isReadyToSave = false;
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        this.isAreaDisabled = false;
        this.counter = 0;
        this.resize = function () {
            var ta = _this.element.nativeElement.querySelector("textarea");
            if (ta !== undefined && ta !== null) {
                ta.style.overflow = "hidden";
                ta.style.height = "auto";
                ta.style.height = ta.scrollHeight + "px";
            }
        };
        this.form = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_district: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_area: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program: [[], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            whatsapp_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [''],
            qualification: [''],
            old_organization_name: [''],
            old_organization_designation: [''],
            total_experience: [''],
            status: ['enquiry', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            remarks: [''],
            active: [true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            photo: [[]],
            enquiry_by: [''],
            enquiry_datetime: [new Date()]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.center.query().subscribe(function (res) {
            _this.branches = res;
            _this.states = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](res, function (item) {
                return (item.center_type == 'state');
            });
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.storage.get('user').then(function (value) {
            _this.user = value;
            _this.form.controls['enquiry_by'].setValue(_this.user._id);
            if (_this.user.role == 'master') {
                _this.isStateDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'district' && item.center_parent == this.user.user_state);
                });
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_state);
                });
            }
            else if (_this.user.role == 'district') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.form.controls['instructor_district'].setValue(_this.user.user_district);
                _this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.branches, function (item) {
                    return (item.center_type == 'unit' && item.center_parent == this.user.user_district);
                });
            }
            else if (_this.user.role == 'unit') {
                _this.isStateDisabled = true;
                _this.isDistrictDisabled = true;
                _this.isAreaDisabled = true;
                _this.form.controls['instructor_state'].setValue(_this.user.user_state);
                _this.form.controls['instructor_district'].setValue(_this.user.user_district);
                _this.form.controls['instructor_area'].setValue(_this.user.user_center);
            }
        });
        this.instructor.query().subscribe(function (res) {
            _this.allInstructors = res;
        }, function (err) {
            console.error('ERROR', err);
        });
    }
    InstructorEnquiryAddPage.prototype.ionViewDidLoad = function () {
    };
    InstructorEnquiryAddPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    InstructorEnquiryAddPage.prototype.onInstructorStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    InstructorEnquiryAddPage.prototype.onInstructorDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    InstructorEnquiryAddPage.prototype.save = function () {
        var _this = this;
        this.instructor.add(this.form.value).subscribe(function (resp) {
            _this.viewCtrl.dismiss();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Error in adding the Instructor. Please try again.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    InstructorEnquiryAddPage.prototype.onPhoneOrEmailChange = function (ev) {
        var inst = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.allInstructors, function (item) {
            if (item.whatsapp_no != undefined && item.whatsapp_no != '' && item.whatsapp_no == ev.value) {
                return true;
            }
            return (item.mobile_no == ev.value || item.email_id == ev.value);
        });
        this.counter = inst.length;
    };
    InstructorEnquiryAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'instructorenquiry-create',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-create/instructorenquiry-create.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Instructor Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_state" (ionChange)="onInstructorStateChange($event)"\n          [disabled]="isStateDisabled">\n          <ion-option value={{state._id}} *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'District\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_district"\n          (ionChange)="onInstructorDistrictChange($event)" [disabled]="isDistrictDisabled">\n          <ion-option value={{district._id}} *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Area\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_area" [disabled]="isAreaDisabled">\n          <ion-option value={{area._id}} *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="pincode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="number" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Whatsapp No\' | translate }} </ion-label>\n        <ion-input type="number" formControlName="whatsapp_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="qualification"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Name\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="old_organization_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Designation\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="old_organization_designation"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Total Experience\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="total_experience"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="program">\n          <ion-option value={{program._id}} *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <p style="color: red;" *ngIf="counter > 0">There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office.</p>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-create/instructorenquiry-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["k" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Instructor */]])
    ], InstructorEnquiryAddPage);
    return InstructorEnquiryAddPage;
}());

//# sourceMappingURL=instructorenquiry-create.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
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
            name: "",
            role: "",
            profile_pic: ""
        };
        this.pages = [
            { title: "Welcome", component: "WelcomePage" },
            { title: "Home", component: "HomePage" },
            { title: "Programs Master", component: "ProgramsListPage" },
            { title: "State / Centers Master", component: "CentersPage" },
            { title: "Users master", component: "UsersPage" },
            { title: "Franchise Enquiry", component: "FranchiseEnquiryListPage" },
            { title: "Instructor Enquiry", component: "InstructorEnquiryListPage" },
            { title: 'Student Enquiry', component: 'StudentEnquiryListPage' },
            { title: 'Online Report', component: 'OnlineReportPage' },
            { title: 'Course Price Mapping', component: 'CourseMappingPage' },
            { title: 'Post Order', component: 'PostOrderListPage' },
        ];
        platform.ready().then(function () {
            _this.splashScreen.hide();
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString("#1ABC9C");
        });
        this.initTranslate();
        this.storage.get("user").then(function (value) {
            _this.user = value;
        });
        console.log(this.user);
        this.userSubcription = __WEBPACK_IMPORTED_MODULE_6__providers__["n" /* User */].userChanged.subscribe(function (data) {
            _this.user = data;
        });
    }
    MyApp.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("user").then(function (value) {
            _this.user = value;
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang("en");
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === "zh") {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use("zh-cmn-Hans");
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use("zh-cmn-Hant");
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use("en"); // Set your language here
        }
        this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function (values) {
            _this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        this.storage.get("user").then(function (value) {
            _this.user = value;
        });
        if (page.component == "WelcomePage") {
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            this.storage.set("token", "");
            this.storage.set("user", {});
            setTimeout(function () {
                loading_1.dismiss();
                _this.nav.setRoot(page.component);
                _this.activePage = "random";
                var toast = _this.toastCtrl.create({
                    message: "You have successfully logged out",
                    duration: 2000,
                    position: "top"
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "side-main-menu",
            template: "\n    <ion-menu [content]=\"content\" *ngIf=\"user != null\">\n      <ion-content class=\"sideMenuIoncContent\">\n        <ion-list class=\"headerMAin\">\n          <ion-item class=\"headerBackground\">\n            <ion-list class=\"logoImage\">\n              <div\n                class=\"circle-pic\"\n                text-center\n                #profilePic\n                [style.background-image]=\"'url(' + user.profile_pic + ')'\"\n              ></div>\n            </ion-list>\n            <br />\n            <h2 class=\"userName\">Hi {{ user.name }}</h2>\n            <h3 class=\"userDetails\">{{ user.role }}</h3>\n          </ion-item>\n        </ion-list>\n\n        <ion-list list>\n          <button\n            menuClose\n            ion-item\n            no-lines\n            style=\"border-top: 0.55px solid white;\"\n            [class.activeHIghlight]=\"checkActive(pages[1])\"\n            (click)=\"openPage(pages[1])\"\n            class=\"buttonSIdeBAr\"\n          >\n            <ion-icon name=\"home\" class=\"sidebarCss\"></ion-icon>\n            Home\n          </button>\n          <button\n            menuClose\n            ion-item\n            no-lines\n            [class.activeHIghlight]=\"checkActive(pages[2])\"\n            (click)=\"openPage(pages[2])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role != undefined && user.role == 'admin'\"\n          >\n            <ion-icon name=\"bookmarks\" class=\"sidebarCss\"></ion-icon>\n            Programs Master\n          </button>\n          <button\n            menuClose\n            ion-item\n            no-lines\n            [class.activeHIghlight]=\"checkActive(pages[3])\"\n            (click)=\"openPage(pages[3])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role != undefined && user.role == 'admin'\"\n          >\n            <ion-icon name=\"swap\" class=\"sidebarCss\"></ion-icon>\n            State / Centers Master\n          </button>\n          <button\n            menuClose\n            ion-item\n            no-lines\n            [class.activeHIghlight]=\"checkActive(pages[4])\"\n            (click)=\"openPage(pages[4])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role != undefined && user.role == 'admin'\"\n          >\n            <ion-icon name=\"person\" class=\"sidebarCss\"></ion-icon>\n            Users master\n          </button>\n          <button\n            menuClose\n            ion-item\n            no-lines\n            [class.activeHIghlight]=\"checkActive(pages[5])\"\n            (click)=\"openPage(pages[5])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role == 'admin' || user.role == 'master' || user.role == 'district'\"\n          >\n            <ion-icon name=\"briefcase\" class=\"sidebarCss\"></ion-icon>\n            Franchise Enquiry\n          </button>\n          <button\n            menuClose\n            ion-item\n            no-lines\n            [class.activeHIghlight]=\"checkActive(pages[6])\"\n            (click)=\"openPage(pages[6])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role == 'admin' || user.role == 'master' || user.role == 'district' || user.role == 'unit'\"\n          >\n            <ion-icon name=\"walk\" class=\"sidebarCss\"></ion-icon>\n            Instructor Enquiry\n          </button>\n          <button \n            menuClose \n            ion-item \n            no-lines \n            [class.activeHIghlight]=\"checkActive(pages[7])\" \n            (click)=\"openPage(pages[7])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role == 'admin' || user.role == 'master' || user.role == 'district' || user.role == 'unit'\"\n          >\n              <ion-icon name=\"school\" class=\"sidebarCss\"></ion-icon>\n              Student Enquiry\n          </button>\n\n          <button \n            menuClose \n            ion-item \n            no-lines \n            [class.activeHIghlight]=\"checkActive(pages[8])\" \n            (click)=\"openPage(pages[8])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role == 'admin'\"\n          >\n              <ion-icon name=\"globe\" class=\"sidebarCss\"></ion-icon>\n              Online Report\n          </button>\n\n          <button \n            menuClose \n            ion-item \n            no-lines \n            [class.activeHIghlight]=\"checkActive(pages[9])\" \n            (click)=\"openPage(pages[9])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role == 'admin'\"\n          >\n              <ion-icon name=\"barcode\" class=\"sidebarCss\"></ion-icon>\n              Course Price Mapping\n          </button>\n          <button \n            menuClose \n            ion-item \n            no-lines \n            [class.activeHIghlight]=\"checkActive(pages[10])\" \n            (click)=\"openPage(pages[10])\"\n            class=\"buttonSIdeBAr\"\n            *ngIf=\"user.role == 'admin' || user.role == 'master' || user.role == 'district' || user.role == 'unit'\"\n          >\n              <ion-icon name=\"basket\" class=\"sidebarCss\"></ion-icon>\n              Post Order\n          </button>\n          <button\n            menuClose\n            no-lines\n            ion-item\n            [class.activeHIghlight]=\"checkActive(pages[0])\"\n            (click)=\"openPage(pages[0])\"\n            class=\"buttonSIdeBAr\"\n          >\n            <ion-icon class=\"sidebarCss\" name=\"power\"></ion-icon>\n            Logout\n          </button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-nav #content [root]=\"rootPage\"></ion-nav>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["l" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Config */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 801:
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

},[432]);
//# sourceMappingURL=main.js.map