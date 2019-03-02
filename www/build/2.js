webpackJsonp([2],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorEnquiryEditPageModule", function() { return InstructorEnquiryEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructorenquiry_update__ = __webpack_require__(388);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__instructorenquiry_update__["a" /* InstructorEnquiryEditPage */]),
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

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructorEnquiryEditPage; });
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
        this.form = formBuilder.group({
            _id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_district: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            instructor_area: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            program: [[], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            address: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            pincode: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(7), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            mobile_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
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
        var pro = navParams.get('program');
        this.form.controls['_id'].setValue(pro._id);
        this.form.controls['name'].setValue(pro.name);
        this.form.controls['instructor_state'].setValue(pro.instructor_state);
        this.form.controls['instructor_district'].setValue(pro.instructor_district);
        this.form.controls['instructor_area'].setValue(pro.instructor_area);
        this.form.controls['program'].setValue(pro.program);
        this.form.controls['address'].setValue(pro.address);
        this.form.controls['pincode'].setValue(pro.pincode);
        this.form.controls['mobile_no'].setValue(pro.mobile_no);
        this.form.controls['email_id'].setValue(pro.email_id);
        this.form.controls['dob'].setValue(pro.dob);
        this.form.controls['qualification'].setValue(pro.qualification);
        this.form.controls['old_organization_name'].setValue(pro.old_organization_name);
        this.form.controls['old_organization_designation'].setValue(pro.old_organization_designation);
        this.form.controls['total_experience'].setValue(pro.total_experience);
        this.form.controls['status'].setValue(pro.status);
        this.form.controls['remarks'].setValue(pro.remarks);
        this.form.controls['active'].setValue(pro.active);
        this.form.controls['photo'].setValue(pro.photo);
        this.form.controls['enquiry_by'].setValue(pro.enquiry_by);
        this.form.controls['enquiry_datetime'].setValue(pro.enquiry_datetime);
    }
    InstructorEnquiryEditPage.prototype.ionViewDidLoad = function () {
    };
    InstructorEnquiryEditPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    InstructorEnquiryEditPage.prototype.onInstructorStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev.value);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev.value);
        });
    };
    InstructorEnquiryEditPage.prototype.onInstructorDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev.value);
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
            return (item.mobile_no == ev.value || item.email_id == ev.value);
        });
        this.counter = inst.length;
    };
    InstructorEnquiryEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'instructorenquiry-update',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-update/instructorenquiry-update.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Instructor Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>{{ \'Name:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Name\' | translate }}" formControlName="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'State:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_state" placeholder="{{ \'State\' | translate }}"\n          (ionChange)="onInstructorStateChange($event)" [disabled]="isStateDisabled">\n          <ion-option value="state._id" *ngFor="let state of states">{{state.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'District:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_district"\n          placeholder="{{ \'District\' | translate }}" (ionChange)="onInstructorDistrictChange($event)" [disabled]="isDistrictDisabled">\n          <ion-option value="district._id" *ngFor="let district of districts">{{district.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Area:\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="instructor_area" [disabled]="isAreaDisabled" \n        placeholder="{{ \'Area\' | translate }}">\n          <ion-option value="area._id" *ngFor="let area of areas">{{area.center_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Address:\' | translate }}</ion-label>\n        <ion-textarea #myInput id="myInput" rows="2" maxLength="500" (keyup)="resize()" formControlName="address"\n          placeholder="{{ \'Address\' | translate }}"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Pincode:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Pincode\' | translate }}" formControlName="pincode"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Mobile No:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Mobile No\' | translate }}" formControlName="mobile_no" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Email ID:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Email ID\' | translate }}" formControlName="email_id" (ionChange)="onPhoneOrEmailChange($event)"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Date Of Birth\' | translate }}</ion-label>\n        <ion-datetime displayFormat="DD/MMM/YYYY" formControlName="dob"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Qualification:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Qualification\' | translate }}" formControlName="qualification"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Name:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Old Organization Name\' | translate }}" formControlName="old_organization_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Old Organization Designation:\' | translate }}</ion-label>\n        <ion-input type="number" placeholder="{{ \'Old Organization Designation\' | translate }}" formControlName="old_organization_designation"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Total Experience:\' | translate }}</ion-label>\n        <ion-input type="text" placeholder="{{ \'Total Experience\' | translate }}" formControlName="total_experience"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Programs Interested In:\' | translate }}</ion-label>\n        <ion-select multiple="true" cancelText="Cancel" okText="Okay" formControlName="programs_interested" placeholder="{{ \'Programs Interested In\' | translate }}">\n          <ion-option value="program._id" *ngFor="let program of programmes">{{program.program_name}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks:\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"\n          placeholder="{{ \'Remarks\' | translate }}"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n  <p style="color: red;" *ngIf="counter > 0">There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office.</p>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/instructorenquiry-update/instructorenquiry-update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["b" /* Center */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["e" /* Programs */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers__["d" /* Instructor */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]])
    ], InstructorEnquiryEditPage);
    return InstructorEnquiryEditPage;
}());

//# sourceMappingURL=instructorenquiry-update.js.map

/***/ })

});
//# sourceMappingURL=2.js.map