import { Component } from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { Programs } from '../../providers';
import { ItemSliding } from "ionic-angular/umd";

@IonicPage()
@Component({
  selector: 'home-tab',
  templateUrl: 'home-tab.html'
})

export class HomeTab {

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public programs: Programs
  ) {
    console.log('Home Tab');

  }

}
