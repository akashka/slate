import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Nav,
  ViewController
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { ItemSliding } from "ionic-angular/umd";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as _ from "lodash";
import { Storage } from '@ionic/storage';

import { Center, Programs, PostOrder, CourseMapping } from "../../providers";

@IonicPage()
@Component({
  selector: "popayment-tab",
  templateUrl: "popayment-tab.html"
})
export class POPaymentTab {
  branches;
  courses;
  form;
  isReadyToSave: Boolean = false;
  isDuplicate: Boolean = false;
  states;
  postOrder;
  user;
  programs = [];
  allLevels = [];
  courseMappingList;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public centers: Center,
    public program: Programs,
    public postOrders: PostOrder,
    public courseMappings: CourseMapping,
    public formBuilder: FormBuilder,
    public nav: Nav,
    public storage: Storage,
    public viewCtrl: ViewController,
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      center: ['', Validators.required],
      dispatch_center: ['', Validators.required],
      order_date: ['', Validators.required],
      total_amount: ['', Validators.required],
      products: ['', Validators.required],
      payment_method: ['', Validators.required],
      payment_date: ['', Validators.required],
      bank_name: [''],
      transaction_no: [''],
      remarks: [''],
      dispatched: [''],
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe(v => {
      this.isReadyToSave = this.form.valid;
    });    
  }

  ionViewDidLoad() {
    this.centers.query().subscribe((res: any) => {
      this.branches = res;
    }, err => {
      console.error("ERROR", err);
    });

    this.program.query().subscribe((res: any) => {
      this.courses = res;
    }, err => {
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

    this.courseMappings.query().subscribe((res: any) => {
      this.courseMappingList = res;
      for(var c=0; c<this.courseMappingList.length; c++) {
        if(this.courseMappingList[c].center === this.form.value.center && this.courseMappingList[c].dispatch_center === this.form.value.dispatch_center
          && this.courseMappingList[c].products.length === this.form.value.products.length && this.courseMappingList[c].total_amount === this.form.value.total_amount)
            this.form.controls['_id'].setValue(this.courseMappingList[c]._id);
      }
    }, err => {
      console.log('Error', err);
    });
  }

  save() {
    if(this.form.value._id != '' && this.form.value._id != undefined) {
      this.postOrders.update(this.form.value).subscribe((resp) => {
        this.viewCtrl.dismiss();
      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "Error in saving the Post Order. Please try again.",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    } else {
      let toast = this.toastCtrl.create({
        message: "Cannot find more details. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  };

}
