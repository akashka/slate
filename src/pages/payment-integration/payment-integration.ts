import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ToastController, Form, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Online } from '../../providers';
import swal from 'sweetalert';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
  selector: 'payment-integration',
  templateUrl: 'payment-integration.html'
})

export class PaymentIntegrationPage {
  orderId;
  customerName;
  customerPhone;
  signature;
  customerEmail;
  orderAmount;
  programs;
  appId;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public element: ElementRef,
    public storage: Storage,
    public online: Online,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public loadingController: LoadingController,
    public navParams: NavParams
  ) {
    this.orderId = navParams.get('orderId');
    this.customerName = navParams.get('customerName');
    this.customerPhone = navParams.get('customerPhone');
    this.customerEmail = navParams.get('customerEmail');
    this.signature = navParams.get('signature');
    this.orderAmount = navParams.get('orderAmount');
    this.programs = navParams.get('programs');
    this.appId = navParams.get('appId');
  }

  payNow() {
    (<HTMLInputElement>document.getElementById("orderId")).value = this.orderId;
    (<HTMLInputElement>document.getElementById("customerName")).value = this.customerName;
    (<HTMLInputElement>document.getElementById("customerPhone")).value = this.customerPhone;
    (<HTMLInputElement>document.getElementById("customerEmail")).value = this.customerEmail;
    (<HTMLInputElement>document.getElementById("orderAmount")).value = this.orderAmount;
    (<HTMLInputElement>document.getElementById("signature")).value = this.signature;
    (<HTMLInputElement>document.getElementById("appId")).value = this.appId;
    (<HTMLFormElement>document.getElementById("redirectForm")).submit();
    this.navCtrl.push(WelcomePage);
    swal({
      title: "Success!",
      text: "Thankyou for your registration. We will contact you soon!",
      icon: "success",
    });
  }

  payLater() {
    this.navCtrl.push(WelcomePage);
    swal({
      title: "Success!",
      text: "Thankyou for your registration. We will contact you soon!",
      icon: "success",
    });
  }

}
