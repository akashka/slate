import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, ToastController, Form, NavParams, AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Programs, Center, Franchise } from '../../providers';

// Files Images
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

declare var cordova: any;
interface Window {
  resolveLocalFileSystemURL: any;
}
declare var window: Window;
@IonicPage()
@Component({
  selector: 'franchiseenquiry-confirm',
  templateUrl: 'franchiseenquiry-confirm.html'
})

export class FranchiseEnquiryConfirmPage {

  form: any;
  isReadyToSave: Boolean = false;
  user;
  states = [];
  districts = [];
  areas = [];
  branches = [];
  programmes = [];
  allFranchisees = [];
  counter = 0;
  stage = 1;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    public programs: Programs,
    public toastCtrl: ToastController,
    public center: Center,
    public program: Programs,
    public franchise: Franchise,
    public element: ElementRef,
    public storage: Storage,
    public alertController: AlertController,
    public navParams: NavParams
  ) {
    this.program.query().subscribe((res: any) => {
      this.programmes = res;
    }, err => {
      console.error('ERROR', err);
    });

    let franchiseEnquiry = navParams.get('franchiseEnquiry');

    this.form = formBuilder.group({
      _id: [franchiseEnquiry._id, Validators.compose([Validators.required])],
      name: [franchiseEnquiry.name, Validators.compose([Validators.required])],
      franchise_type: [franchiseEnquiry.franchise_type, Validators.compose([Validators.required])],
      franchise_state: [franchiseEnquiry.franchise_state, Validators.compose([Validators.required])],
      franchise_district: [franchiseEnquiry.franchise_district],
      franchise_area: [franchiseEnquiry.franchise_area],
      address: [franchiseEnquiry.address, Validators.compose([Validators.required])],
      pincode: [franchiseEnquiry.pincode, Validators.compose([Validators.required, Validators.maxLength(7), Validators.minLength(2)])],
      mobile_no: [franchiseEnquiry.mobile_no, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')])],
      whatsapp_no: [franchiseEnquiry.whatsapp_no, Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')])],
      email_id: [franchiseEnquiry.email_id, Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
      dob: [franchiseEnquiry.dob],
      present_occupation: [franchiseEnquiry.present_occupation],
      business_type: [franchiseEnquiry.business_type],
      capital: [franchiseEnquiry.capital],
      qualification: [franchiseEnquiry.qualification],
      start_timeframe: [franchiseEnquiry.start_timeframe],
      programs_interested: [franchiseEnquiry.programs_interested],
      working_hours: [franchiseEnquiry.working_hours],
      reference_source: [franchiseEnquiry.reference_source, Validators.compose([Validators.required])],
      referral: [franchiseEnquiry.referral],
      status: ['confirm', Validators.compose([Validators.required])],
      remarks: [franchiseEnquiry.remarks],
      active: [franchiseEnquiry.active, Validators.compose([Validators.required])],
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
      royalty_percentage: [0, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
      bank_account_number: [''],
      bank_account_name: [''],
      bank_ifsc_code: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

  }

  ionViewDidLoad() {

  }

  cancel() {
    this.viewCtrl.dismiss();
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
    this.franchise.update(this.form.value).subscribe((resp) => {
      this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in adding the Franchise. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  next() {
    this.stage++;
  }

}
