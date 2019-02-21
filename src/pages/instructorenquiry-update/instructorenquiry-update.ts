import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, ToastController, Form, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Programs, Center, Instructor } from '../../providers';

@IonicPage()
@Component({
  selector: 'instructorenquiry-update',
  templateUrl: 'instructorenquiry-update.html'
})

export class InstructorEnquiryEditPage {

  form;
  isReadyToSave: Boolean = false;
  branches;
  states;
  programmes;
  user;
  districts;
  areas;
  allInstructors;
  isStateDisabled: Boolean = false;
  isDistrictDisabled: Boolean = false;
  isAreaDisabled: Boolean = false;
  counter: Number = 0;

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
    public navParams: NavParams
  ) {

    this.form = formBuilder.group({
      _id: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      instructor_state: ['', Validators.compose([Validators.required])],
      instructor_district: ['', Validators.compose([Validators.required])],
      instructor_area: ['', Validators.compose([Validators.required])],
      program: [[], Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      pincode: ['', Validators.compose([Validators.required, Validators.maxLength(7), Validators.minLength(2)])],
      mobile_no: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')])],
      email_id: ['', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      dob: [''],
      qualification: [''],
      old_organization_name: [''],
      old_organization_designation: [''],
      total_experience: [''],
      status: ['enquiry', Validators.compose([Validators.required])],
      remarks: [''],
      active: [true, Validators.compose([Validators.required])],
      photo: [[]],
      enquiry_by: [''],
      enquiry_datetime: [new Date()]
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
        this.form.controls['instructor_state'].setValue(this.user.user_state);
        this.districts = _.filter(this.branches, function (item) {
          return (item.center_type == 'district' && item.center_parent == this.user.user_state)
        });
        this.areas = _.filter(this.branches, function (item) {
          return (item.center_type == 'unit' && item.center_parent == this.user.user_state)
        });
      } else if (this.user.role == 'district') {
        this.isStateDisabled = true;
        this.isDistrictDisabled = true;
        this.form.controls['instructor_state'].setValue(this.user.user_state);
        this.form.controls['instructor_district'].setValue(this.user.user_district);
        this.areas = _.filter(this.branches, function (item) {
          return (item.center_type == 'unit' && item.center_parent == this.user.user_district)
        });
      } else if (this.user.role == 'unit') {
        this.isStateDisabled = true;
        this.isDistrictDisabled = true;
        this.isAreaDisabled = true;
        this.form.controls['instructor_state'].setValue(this.user.user_state);
        this.form.controls['instructor_district'].setValue(this.user.user_district);
        this.form.controls['instructor_area'].setValue(this.user.user_center);
      }
    });

    this.instructor.query().subscribe((res: any) => {
      this.allInstructors = res;
    }, err => {
      console.error('ERROR', err);
    });

    let pro = navParams.get('program');
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

  ionViewDidLoad() {

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  onInstructorStateChange(ev) {
    this.districts = _.filter(this.branches, function (item) {
      return (item.center_type == 'district' && item.center_parent == ev.value)
    });
    this.areas = _.filter(this.branches, function (item) {
      return (item.center_type == 'unit' && item.center_parent == ev.value)
    });
  }

  onInstructorDistrictChange(ev) {
    this.areas = _.filter(this.branches, function (item) {
      return (item.center_type == 'unit' && item.center_parent == ev.value)
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
    this.instructor.update(this.form.value).subscribe((resp) => {
      this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in adding the Instructor. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  onPhoneOrEmailChange(ev) {
    let inst = _.filter(this.allInstructors, function (item) {
      return (item.mobile_no == ev.value || item.email_id == ev.value)
    });
    this.counter = inst.length;
  }

}
