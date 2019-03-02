webpackJsonp([6],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryListPageModule", function() { return FranchiseEnquiryListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_list__ = __webpack_require__(384);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_list__["a" /* FranchiseEnquiryListPage */]),
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

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__ = __webpack_require__(126);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function FranchiseEnquiryListPage(vibration, navCtrl, navParams, modalCtrl, toastCtrl, alertCtrl, loadingCtrl, programs, franchise, storage, users, centers, callNumber, alertController) {
        var _this = this;
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
    }
    // Nested filtering of records to users under them
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
    FranchiseEnquiryListPage.prototype.view = function (program, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('ProgramDetailPage', {
            program: program
        });
    };
    FranchiseEnquiryListPage.prototype.add = function () {
        this.navCtrl.push('FranchiseEnquiryAddPage');
    };
    FranchiseEnquiryListPage.prototype.edit = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('FranchiseEnquiryAddPage');
    };
    FranchiseEnquiryListPage.prototype.followup = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.navCtrl.push('FollowupPage', {
            franchiseEnquiry: franchiseEnquiry
        });
    };
    FranchiseEnquiryListPage.prototype.call = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        this.callNumber.callNumber(franchiseEnquiry.mobile_no, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    FranchiseEnquiryListPage.prototype.email = function (franchiseEnquiry, slidingItem) {
        slidingItem.close();
        window.open("mailto:" + franchiseEnquiry.email_id, '_system');
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
            var _this = this;
            var alert;
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
        return (__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allUsers, { _id: id }));
    };
    FranchiseEnquiryListPage.prototype.findLocation = function (id, type, franchise_type) {
        if (type == franchise_type)
            return id;
        return (__WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.allCenters, { _id: id }));
    };
    FranchiseEnquiryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'franchiseenquiry-lists',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-list/franchiseenquiry-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{ \'Franchise List\' | translate }}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="add()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'Search Franchise\' | translate }}"></ion-searchbar>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems" #slidingItem>\n\n      <ion-item (press)="pressEvent($event)" class="listing-item">\n        <h2> {{item.name}} </h2>\n        <h3> <b> Franchise Type: </b> {{item.franchise_type}}</h3>\n        <p> <b> State: </b> {{findLocation(item.franchise_state, \'state\', item.franchise_type)}} </p>\n        <p *ngIf="item.franchise_district != \'\'"> <b> District: </b> {{findLocation(item.franchise_district,\n          \'district\', item.franchise_type)}} </p>\n        <p *ngIf="item.franchise_area != \'\'"> <b> Area: </b> {{findLocation(item.franchise_area, \'unit\',\n          item.franchise_type)}} </p>\n        <p> <b> Enquired By: </b> {{findUser(item.enquiry_by)}} </p>\n        <p>\n          <b> Status: </b>\n          <span [class.franchise-enquiry]="item.status == \'enquiry\'" [class.franchise-reject]="item.status == \'reject\'"\n            [class.franchise-confirm]="item.status == \'confirm\'"> {{item.status}} </span>\n        </p>\n      </ion-item>\n\n      <ion-item-options side="right" class="listing-btn">\n        <button ion-button color="info" (click)="view(item, slidingItem)">\n          <ion-icon name="ios-more"></ion-icon> View\n        </button>\n        <button ion-button color="danger" (click)="reject(item, slidingItem)" *ngIf="user.role == \'admin\' && item.status == \'enquiry\'">\n          <ion-icon name="ios-more"></ion-icon> Reject\n        </button>\n        <button ion-button color="success" (click)="confirm(item, slidingItem)" *ngIf="user.role == \'admin\' && item.status == \'enquiry\'">\n          <ion-icon name="ios-more"></ion-icon> Confirm\n        </button>\n        <button ion-button color="success" (click)="confirm(item, slidingItem)" *ngIf="user.role == \'admin\' && item.status == \'confirm\'">\n          <ion-icon name="ios-more"></ion-icon> Documents\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left" class="listing-btn">\n        <button ion-button color="primary" (click)="call(item, slidingItem)">\n          <ion-icon name="ios-more"></ion-icon> Call\n        </button>\n        <button ion-button color="info" (click)="email(item, slidingItem)">\n          <ion-icon name="ios-more"></ion-icon> Mail\n        </button>\n        <button ion-button color="warning" (click)="edit(item, slidingItem)">\n          <ion-icon name="ios-more"></ion-icon> Edit\n        </button>\n        <button ion-button color="success" (click)="followup(item, slidingItem)" *ngIf="item.status == \'enquiry\'">\n          <ion-icon name="ios-more"></ion-icon> Followup\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-list/franchiseenquiry-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["c" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number_ngx__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FranchiseEnquiryListPage);
    return FranchiseEnquiryListPage;
}());

//# sourceMappingURL=franchiseenquiry-list.js.map

/***/ })

});
//# sourceMappingURL=6.js.map