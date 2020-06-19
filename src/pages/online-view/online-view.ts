import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Online } from '../../providers';

@IonicPage()
@Component({
  selector: 'online-view',
  templateUrl: 'online-view.html'
})

export class OnlineViewPage {
  student: any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public element: ElementRef,
    public storage: Storage,
    public online: Online,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public loadingController: LoadingController,
    public navParams: NavParams
  ) {
    this.student = navParams.get('student');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
