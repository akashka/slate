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
import { CallNumber } from '@ionic-native/call-number/ngx';

import { User } from '../../providers';
import { ItemSliding } from "ionic-angular/umd";

@IonicPage()
@Component({
  selector: 'users_lists',
  templateUrl: 'users_lists.html'
})
export class UsersPage {

  currentItems;
  allItems;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public users: User,
    private callNumber: CallNumber
  ) {
    this.users.users_list().subscribe((res: any) => {
      this.currentItems = res;
      this.allItems = res;
    }, err => {
      console.error('ERROR', err);
    });
  }

  getItems(ev) {
    let val = ev.target.value.toUpperCase();
    if (!val || !val.trim()) {
      this.currentItems = this.allItems;
      return;
    }
    this.currentItems = this.allItems.filter((item) => {
      return (item.user_name.toUpperCase().indexOf(ev.data) >= 0 ||
        item.name.toUpperCase().indexOf(ev.data) >= 0 ||
        item.email_id.toUpperCase().indexOf(ev.data) >= 0)
    });
  }

  openItem(item) {
    this.navCtrl.push('UserDetailPage', {
      user: item
    });
  }

  addItem() {
    this.navCtrl.push('SignupPage');
  }

  pressEvent(ev) {
    this.vibration.vibrate(150);
    let toast = this.toastCtrl.create({
      message: "please slide to get the options .",
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  editItem(item, slidingItem: ItemSliding) {
    this.navCtrl.push('UserEditPage', {
      user: item
    });
  }

  mailUser(user) {
    window.open(`mailto:${user.email}`, '_system');
  }

  callUser(user) {
    this.callNumber.callNumber(user.phone_no, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
