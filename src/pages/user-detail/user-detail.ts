import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../providers';
import { FirstRunPage } from '../';

@IonicPage()
@Component({
  selector: 'user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {

  account;

  constructor(
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.account = navParams.get('user');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
