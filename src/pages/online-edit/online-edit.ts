import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Form, ToastController, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Online } from '../../providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import swal from 'sweetalert';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PaymentIntegrationPage } from '../payment-integration/payment-integration';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'online-edit',
  templateUrl: 'online-edit.html'
})

export class OnlineEditPage {
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
