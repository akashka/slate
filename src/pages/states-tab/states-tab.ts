import { Component } from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Config,
  Nav,
  Platform
} from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { ItemSliding } from "ionic-angular/umd";
import * as _ from "lodash";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Center, Programs } from '../../providers';

@IonicPage()
@Component({
  selector: 'states-tab',
  templateUrl: 'states-tab.html'
})

export class StatesTab {

  branches;
  courses;
  isDuplicate: Boolean = false;
  isReadyToSave: Boolean = false;
  form: any;

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
    public formBuilder: FormBuilder,
    public nav: Nav
  ) {
    this.centers.query().subscribe((res: any) => {
      this.branches = res;
    }, err => {
      console.error('ERROR', err);
    });

    this.program.query().subscribe((res: any) => {
      this.courses = res;
    }, err => {
      console.log('ERROR', err);
    });

    this.form = formBuilder.group({
      center_id: ['', Validators.required],
      center_name: ['', Validators.required],
      center_type: ['state'],
      center_parent: [''],
      active: [true, Validators.required],
      programs: [[], Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  onCodeChange(ev) {
    ev = this.form.controls['center_id'].value; 
    this.isDuplicate = (_.find(this.branches, { center_id: ev }) != undefined);
  }

  ionViewDidLoad() {

  }

  createState() {
    this.centers.add(this.form.value).subscribe((resp) => {
      let toast = this.toastCtrl.create({
        message: "Successfully created State",
        duration: 3000,
        position: "top"
      });
      toast.present();
      this.navCtrl.push("BranchesTab");
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in adding the State. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
