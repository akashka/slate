import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { ItemSliding } from "ionic-angular/umd";

import { POShopTab } from "../poshop-tab/poshop-tab";
import { POKartTab } from "../pokart-tab/pokart-tab";
import { POPaymentTab } from "../popayment-tab/popayment-tab";

@IonicPage()
@Component({
  selector: 'postorder-create',
  templateUrl: 'postorder-create.html'
})

export class PostOrderAddPage {
  shop: any = POShopTab;
  kart: any = POKartTab;
  payment: any = POPaymentTab;
  postOrder;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    console.log("New Post Order Page");
    this.postOrder = {
      center: '',
      dispatch_center: '',
      order_date: new Date(),
      total_amount: 0,
      products: [],
      payment_method: '',
      payment_date: '',
      bank_name: '',
      transaction_no: '',
      remarks: '',
      dispatched: false,
    };
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: "Information",
      subTitle:
        `
          This is a 3 step process: <br/> <br/>
          - Add Products to the Cart you want to order <br/>
          - View your Cart. For ay change go back and change from Products <br/>
          - You can opt to ay now or later. On select of Pay Now, you will be redirected to Payment tab and add payment details. <br/>
          <br/>
        `,
      buttons: ["OK"]
    });
    alert.present();
  }
}