import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, ToastController, Form, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Programs, Center, Instructor, Students } from '../../providers';

@IonicPage()
@Component({
  selector: 'studentenquiry-confirm',
  templateUrl: 'studentenquiry-confirm.html'
})

export class StudentEnquiryConfirmPage {

  form;
  isReadyToSave: Boolean = false;
  branches;
  states;
  programmes;
  user;
  districts;
  areas;
  allStudents;
  isStateDisabled: Boolean = false;
  isDistrictDisabled: Boolean = false;
  isAreaDisabled: Boolean = false;
  counter: Number = 0;

  studentCenterState = '';
  studentProgram = '';

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    public programs: Programs,
    public toastCtrl: ToastController,
    public center: Center,
    public program: Programs,
    public element: ElementRef,
    public storage: Storage,
    public instructor: Instructor,
    public students: Students,
    public navParams: NavParams
  ) {
    let student = navParams.get('student');
    this.form = formBuilder.group({
      registration_fee: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      kit_fee: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      extra_fee: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      discount: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      total_amount: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      kit_no: ['', Validators.compose([Validators.required])],
      course_instructor: ['', Validators.compose([Validators.required])],      
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.center.query().subscribe((res: any) => {
      this.branches = res;
      this.states = _.filter(res, function (item) {
        return (item.center_type == 'state')
      });
      this.onStateChange(this.form.controls['state'].value);
      this.onDistrictChange(this.form.controls['district'].value);
    }, err => {
      console.error('ERROR', err);
    });

    this.program.query().subscribe((res: any) => {
      this.programmes = res;
    }, err => {
      console.error('ERROR', err);
    });

    this.storage.get('user').then((value) => {
      this.user = value;
      this.form.controls['enquiry_by'].setValue(this.user._id);
      if (this.user.role == 'master') {
        this.isStateDisabled = true;
        this.form.controls['state'].setValue(this.user.user_state);
        this.districts = _.filter(this.branches, function (item) {
          return (item.center_type == 'district' && item.center_parent == this.user.user_state)
        });
        this.areas = _.filter(this.branches, function (item) {
          return (item.center_type == 'unit' && item.center_parent == this.user.user_state)
        });
      } else if (this.user.role == 'district') {
        this.isStateDisabled = true;
        this.isDistrictDisabled = true;
        this.form.controls['state'].setValue(this.user.user_state);
        this.form.controls['district'].setValue(this.user.user_district);
        this.areas = _.filter(this.branches, function (item) {
          return (item.center_type == 'unit' && item.center_parent == this.user.user_district)
        });
      } else if (this.user.role == 'unit') {
        this.isStateDisabled = true;
        this.isDistrictDisabled = true;
        this.isAreaDisabled = true;
        this.form.controls['state'].setValue(this.user.user_state);
        this.form.controls['district'].setValue(this.user.user_district);
        this.form.controls['area'].setValue(this.user.user_center);
      }
    });

    this.students.query().subscribe((res: any) => {
      this.allStudents = res;
    }, err => {
      console.error('ERROR', err);
    });

  }

  ionViewDidLoad() {

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  onStateChange(ev) {
    this.districts = _.filter(this.branches, function (item) {
      return (item.center_type == 'district' && item.center_parent == ev)
    });
    this.areas = _.filter(this.branches, function (item) {
      return (item.center_type == 'unit' && item.center_parent == ev)
    });
  }

  onDistrictChange(ev) {
    this.areas = _.filter(this.branches, function (item) {
      return (item.center_type == 'unit' && item.center_parent == ev)
    });
  }

  resize = (): void => {
    const ta = this.element.nativeElement.querySelector("textarea");
    if (ta !== undefined && ta !== null) {
      ta.style.overflow = "hidden";
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }
  }

  save() {
    this.students.update(this.form.value).subscribe((resp) => {
      this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in updating the Student Enquiry. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  onPhoneOrEmailChange(ev) {
    let inst = _.filter(this.allStudents, function (item) {
      if(item.whatsapp_no != undefined && item.whatsapp_no != '' && item.whatsapp_no == ev.value) {
        return true;
      }
      return (item.mobile_no == ev.value || item.email_id == ev.value)
    });
    this.counter = inst.length;
  }

  findCenterState(ev) {

  }

  findProgram(ev) {

  }

}
