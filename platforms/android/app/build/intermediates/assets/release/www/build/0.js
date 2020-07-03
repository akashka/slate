webpackJsonp([0],{

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentEnquiryConfirmPageModule", function() { return StudentEnquiryConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__studentenquiry_confirm__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StudentEnquiryConfirmPageModule = /** @class */ (function () {
    function StudentEnquiryConfirmPageModule() {
    }
    StudentEnquiryConfirmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_confirm__["a" /* StudentEnquiryConfirmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__studentenquiry_confirm__["a" /* StudentEnquiryConfirmPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__studentenquiry_confirm__["a" /* StudentEnquiryConfirmPage */]
            ]
        })
    ], StudentEnquiryConfirmPageModule);
    return StudentEnquiryConfirmPageModule;
}());

//# sourceMappingURL=studentenquiry-confirm.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentEnquiryConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(23);
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







var StudentEnquiryConfirmPage = /** @class */ (function () {
    function StudentEnquiryConfirmPage(navCtrl, viewCtrl, formBuilder, camera, programs, toastCtrl, center, program, element, storage, instructor, students, navParams) {
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
        this.studentCenterState = '';
        this.studentProgram = '';
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
            registration_fee: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            kit_fee: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            extra_fee: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            discount: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            total_amount: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[0-9]*')])],
            kit_no: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            course_instructor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
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
    StudentEnquiryConfirmPage.prototype.ionViewDidLoad = function () {
    };
    StudentEnquiryConfirmPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    StudentEnquiryConfirmPage.prototype.onStateChange = function (ev) {
        this.districts = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'district' && item.center_parent == ev);
        });
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryConfirmPage.prototype.onDistrictChange = function (ev) {
        this.areas = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.branches, function (item) {
            return (item.center_type == 'unit' && item.center_parent == ev);
        });
    };
    StudentEnquiryConfirmPage.prototype.save = function () {
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
    StudentEnquiryConfirmPage.prototype.onPhoneOrEmailChange = function (ev) {
        var inst = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.allStudents, function (item) {
            if (item.whatsapp_no != undefined && item.whatsapp_no != '' && item.whatsapp_no == ev.value) {
                return true;
            }
            return (item.mobile_no == ev.value || item.email_id == ev.value);
        });
        this.counter = inst.length;
    };
    StudentEnquiryConfirmPage.prototype.findCenterState = function (ev) {
    };
    StudentEnquiryConfirmPage.prototype.findProgram = function (ev) {
    };
    StudentEnquiryConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'studentenquiry-confirm',template:/*ion-inline-start:"/home/akash/Code/akash/slate/src/pages/studentenquiry-confirm/studentenquiry-confirm.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ \'Student Enquiries\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="form">\n    <ion-list>\n \n      <ion-list class="logoImage">\n        <div\n          class="circle-pic"\n          text-center\n          #profilePic\n          [style.background-image]="\'url(\' + user.profile_pic + \')\'"\n        ></div>\n      </ion-list>\n      <br />\n      <h2 class="userName">{{ student.name }}</h2>\n      <h3 class="userDetails">{{ studentCenterState }}</h3>\n      <h3 class="userDetails">{{ studentProgram }}</h3>\n\n      <ion-item>\n        <ion-label floating>{{ \'Registration Fee (Rs)\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="registration_fee" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Kit Fee (Rs)\' | translate }} <span class="mandatory-field"> * </span> </ion-label>\n        <ion-input type="text" formControlName="kit_fee" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Extra Fee (Rs)\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="extra_fee" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Total Amount (Rs)\' | translate }} </ion-label>\n        <ion-input type="text" formControlName="total_amount" disabled="true"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Discount\' | translate }}</ion-label>\n        <ion-input type="number" formControlName="grade"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Best Time To Contact\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="contact_time"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Referral\' | translate }}</ion-label>\n        <ion-select multiple="false" cancelText="Cancel" okText="Okay" formControlName="referral">\n          <ion-option value={{referral}} *ngFor="let referral of referralOptions">{{referral}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>{{ \'Remarks\' | translate }}</ion-label>\n        <ion-textarea #myInput1 id="myInput1" rows="2" maxLength="5000" (keyup)="resize()" formControlName="remarks"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer no-border>\n  <p style="color: red;" *ngIf="counter > 0">There already exists an Enquiry with same details from same or different\n    center. Hence, cannot save it. Please contact Head Office.</p>\n  <ion-toolbar transparent>\n    <button ion-button full (click)="save()" [disabled]="!isReadyToSave || counter > 0">\n      {{ \'SAVE\' | translate }}\n    </button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/akash/Code/akash/slate/src/pages/studentenquiry-confirm/studentenquiry-confirm.html"*/
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
    ], StudentEnquiryConfirmPage);
    return StudentEnquiryConfirmPage;
}());

//# sourceMappingURL=studentenquiry-confirm.js.map

/***/ })

});
//# sourceMappingURL=0.js.map