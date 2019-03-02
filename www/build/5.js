webpackJsonp([5],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchiseEnquiryViewPageModule", function() { return FranchiseEnquiryViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_view__ = __webpack_require__(385);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__franchiseenquiry_view__["a" /* FranchiseEnquiryViewPage */]),
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

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FranchiseEnquiryViewPage; });
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
        this.professionOptions = ['Accountant', 'Architect', 'Artist', 'Banker', 'Bookkeeper', 'Builder', 'Businessperson',
            'Chef', 'Coach', 'Designer', 'Doctor', 'Economist', 'Engineer', 'Farmer', 'Fisherman',
            'Judge', 'Lawyer', 'Mechanic', 'Pharmacist', 'Photographer', 'Physician', 'Pilot', 'Police',
            'Politician', 'Professor', 'Salesperson', 'Service', 'Teacher', 'Writer', 'Others'];
        this.referralOptions = ['Radio', 'TV', 'Print', 'Outdoor', 'From a Friend', 'Direct Walk In', 'Others'];
        this.isStateDisabled = false;
        this.isDistrictDisabled = false;
        var franchisee = navParams.get('franchise');
        this.center.query().subscribe(function (res) {
            _this.branches = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.program.query().subscribe(function (res) {
            _this.programmes = res;
        }, function (err) {
            console.error('ERROR', err);
        });
        this.users.users_list().subscribe(function (res) {
            _this.allUsers = res;
        }, function (err) {
            console.log('ERROR', err);
        });
        this.form = formBuilder.group({
            name: [franchisee.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_type: [franchisee.franchise_type, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            franchise_state: [franchisee.franchise_state],
            franchise_district: [franchisee.franchise_district],
            franchise_area: [franchisee.franchise_area],
            address: [franchisee.address, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: [franchisee.pincode, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: [franchisee.mobile_no, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            email_id: [franchisee.email_id, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
            dob: [franchisee.dob],
            present_occupation: [franchisee.present_occupation],
            business_type: [franchisee.business_type],
            capital: [franchisee.capital],
            qualification: [franchisee.qualification],
            start_timeframe: [franchisee.start_timeframe],
            programs_interested: [franchisee.programs_interested],
            working_hours: [franchisee.working_hours],
            reference_source: [franchisee.reference_source, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
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
        this.storage.get('user').then(function (value) {
            _this.user = value;
        });
    }
    FranchiseEnquiryViewPage.prototype.ionViewDidLoad = function () {
    };
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
    FranchiseEnquiryViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'franchiseenquiry-view',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-view/franchiseenquiry-view.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'View Franchise Enquiry\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Name\' | translate }}" formControlName="name" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Franchise Type:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Franchise Type\' | translate }}" formControlName="franchise_type"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'State\' | translate }}" formControlName="getBranchName(franchise_state)"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'district\' || form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'District:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'District\' | translate }}" formControlName="getBranchName(franchise_district)"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="form.value.franchise_type == \'unit\'">\n        <ion-label floating>{{ \'Area:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Area\' | translate }}" formControlName="franchise_area" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address:\' | translate }}</ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" formControlName="address" placeholder="{{ \'Address\' | translate }}"\n          disabled="true"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Pincode\' | translate }}" formControlName="pincode" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Mobile No\' | translate }}" formControlName="mobile_no" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Email ID\' | translate }}" formControlName="email_id" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob" disabled="true"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Present Occupation:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Present Occupation\' | translate }}" formControlName="present_occupation"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Nature Of Business:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Nature Of Business\' | translate }}" formControlName="business_type"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Capital To Invest:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Capital To Invest\' | translate }}" formControlName="capital" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Qualification\' | translate }}" formControlName="qualification"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Time Frame To Start:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Time Frame To Start\' | translate }}" formControlName="start_timeframe"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Programs Interested In\' | translate }}" formControlName="getProgramNames(programs_interested)"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Best Time To Contact\' | translate }}" formControlName="working_hours"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'How Did You Hear About Us:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'How Did You Hear About Us\' | translate }}" formControlName="reference_source"\n          disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Referral\' | translate }}" formControlName="referral" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks:\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" formControlName="remarks" placeholder="{{ \'Remarks\' | translate }}"\n          disabled="true"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Status:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Status\' | translate }}" formControlName="status" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Enquiry By:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Enquiry By\' | translate }}" formControlName="getUserName(enquiry_by)" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Enquiry Date:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Enquiry Date\' | translate }}" formControlName="enquiry_datetime"\n          disabled="true"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/franchiseenquiry-view/franchiseenquiry-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["h" /* User */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Franchise */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], FranchiseEnquiryViewPage);
    return FranchiseEnquiryViewPage;
}());

//# sourceMappingURL=franchiseenquiry-view.js.map

/***/ })

});
//# sourceMappingURL=5.js.map