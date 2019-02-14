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

import { Center } from '../../providers';

@IonicPage()
@Component({
  selector: 'states-tab',
  templateUrl: 'states-tab.html'
})

export class StatesTab {

  branches;
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
    public formBuilder: FormBuilder,
    public nav: Nav
  ) {
    this.centers.query().subscribe((res: any) => {
      this.branches = res;
    }, err => {
      console.error('ERROR', err);
    });

    this.form = formBuilder.group({
      center_id: ['', Validators.required],
      center_name: ['', Validators.required],
      center_type: ['state'],
      center_parent: [''],
      active: [true, Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  onCodeChange(ev) {
    let program = _.filter(this.branches, function (item) {
      return (item.center_id.toUpperCase().indexOf(ev.value.toUpperCase()) >= 0)
    });
    if (program.length) this.isDuplicate = true;
  }

  ionViewDidLoad() {

  }

  createState() {
    this.centers.add(this.form.value).subscribe((resp) => {
      this.nav.setRoot('CentersPage');
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
