webpackJsonp([7],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryAddPageModule", function() { return FranchiseEnquiryAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_create__ = __webpack_require__(383);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_create__["a" /* FranchiseEnquiryAddPage */]),
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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(12);
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
            franchise_state: [''],
            franchise_district: [''],
            franchise_area: [''],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
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
            return (item.center_type == 'district' && item.center_parent == ev.value);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev.value);
        });
    };
    FranchiseEnquiryAddPage.prototype.onFranchiseDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev.value);
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
        var franchisees = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.allFranchisees, function (item) {
            return (item.mobile_no == ev.value || item.email_id == ev.value);
        });
        this.counter = franchisees.length;
    };
    FranchiseEnquiryAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'franchiseenquiry-create',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-create/franchiseenquiry-create.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Franchise Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Name\' | translate }}" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Franchise Type:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_type" placeholder="{{ \'Franchise Type\' | translate }}"\n          (ionChange)="onFranchiseTypeChange($event)">\n          <ion-option value="unit">Unit Franchise</ion-option>\n          <ion-option value="district" *ngIf="!isDistrictDisabled">District Franchise</ion-option>\n          <ion-option value="state" *ngIf="!isStateDisabled">Master Franchise</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_state" placeholder="{{ \'State\' | translate }}"\n          (ionChange)="onFranchiseStateChange($event)" [disabled]="isStateDisabled" *ngIf="form.value.franchise_type != \'state\'">\n          <ion-option value="state._id" *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" placeholder="{{ \'State\' | translate }}" formControlName="franchise_state" *ngIf="form.value.franchise_type == \'state\'"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'district\' || form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'District:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_district" placeholder="{{ \'District\' | translate }}"\n          (ionChange)="onFranchiseDistrictChange($event)" [disabled]="isDistrictDisabled" *ngIf="form.value.franchise_type != \'district\'">\n          <ion-option value="state._id" *ngFor="let state of districts">{{state.center_name}}</ion-option>\n        </ion-select>\n        <ion-input type="text" placeholder="{{ \'District\' | translate }}" formControlName="franchise_district" *ngIf="form.value.franchise_type == \'district\'"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'Area:\' | translate }}</ion-label>\n        <!-- <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="franchise_area" placeholder="{{ \'Area\' | translate }}">\n          <ion-option value="state._id" *ngFor="let state of areas">{{state.center_name}}</ion-option>\n        </ion-select> -->\n        <ion-input type="text" placeholder="{{ \'Area\' | translate }}" formControlName="franchise_area"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address:\' | translate }}</ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"\n          placeholder="{{ \'Address\' | translate }}"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Pincode\' | translate }}" formControlName="pincode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Mobile No\' | translate }}" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Email ID\' | translate }}" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Present Occupation:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="present_occupation" placeholder="{{ \'Present Occupation\' | translate }}">\n          <ion-option value="profession" *ngFor="let profession of professionOptions">{{profession}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Nature Of Business:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Nature Of Business\' | translate }}" formControlName="business_type"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Capital To Invest:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Capital To Invest\' | translate }}" formControlName="capital"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Qualification\' | translate }}" formControlName="qualification"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Time Frame To Start:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Time Frame To Start\' | translate }}" formControlName="start_timeframe"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In:\' | translate }}</ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="programs_interested" placeholder="{{ \'Programs Interested In\' | translate }}">\n          <ion-option value="program._id" *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Best Time To Contact\' | translate }}" formControlName="working_hours"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Best Time To Contact\' | translate }}" formControlName="working_hours"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'How Did You Hear About Us:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="reference_source" placeholder="{{ \'How Did You Hear About Us\' | translate }}">\n          <ion-option value="option" *ngFor="let option of referralOptions">{{option}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Referral\' | translate }}" formControlName="referral"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks:\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"\n          placeholder="{{ \'Remarks\' | translate }}"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n  <p style="color: red;" *ngIf="counter > 0">There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office.</p>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-create/franchiseenquiry-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], FranchiseEnquiryAddPage);
    return FranchiseEnquiryAddPage;
}());

//# sourceMappingURL=franchiseenquiry-create.js.map

/***/ })

});
//# sourceMappingURL=7.js.map