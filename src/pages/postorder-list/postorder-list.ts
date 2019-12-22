import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Alert,
  ActionSheetController
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { ItemSliding } from "ionic-angular/umd";
import * as _ from "lodash";
import { Programs, User, Center, Instructor, PostOrder } from "../../providers";
import { Storage } from "@ionic/storage";
import { isGeneratedFile } from "@angular/compiler/src/aot/util";
import { CallNumber } from "@ionic-native/call-number/ngx";

@IonicPage()
@Component({
  selector: "postorder-lists",
  templateUrl: "postorder-list.html"
})
export class PostOrderListPage {
  currentItems;
  tempCurrentItems;
  user;
  allUsers;
  allCenters;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public programs: Programs,
    public storage: Storage,
    public users: User,
    public centers: Center,
    public callNumber: CallNumber,
    public alertController: AlertController,
    public instructorService: Instructor,
    public postOrder : PostOrder,
    public actionSheetController: ActionSheetController
  ) { 
  }

  ionViewWillEnter() {
    this.postOrder.query().subscribe(
      (resp: any) => {
        this.currentItems = resp;
        this.tempCurrentItems = resp;
        this.storage.get("user").then(value => {
          this.user = value;
          this.currentItems = _.filter(this.currentItems, function(item) {
            if(value.role == 'unit') return (item.center == value.user_center || item.dispatch_center == value.user_center);
            if(value.role == 'district') return (item.center == value.user_district || item.dispatch_center == value.user_district);
            if(value.role == 'master') return (item.center == value.user_state || item.dispatch_center == value.user_state);
            if(value.role == 'admin') return item.center;
          });
          this.tempCurrentItems = this.currentItems;
        });
      },
      err => {
        console.error("ERROR", err);
      }
    );

    this.users.users_list().subscribe(
      (res: any) => {
        this.allUsers = res;
      },
      err => {
        console.error("ERROR", err);
      }
    );

    this.centers.query().subscribe(
      (res: any) => {
        this.allCenters = res;
      },
      err => {
        console.error("ERROR", err);
      }
    );
  }

  getItems(ev) {
    let val = ev.data.toUpperCase();
    if (!val || !val.trim()) {
      this.currentItems = this.tempCurrentItems;
      return;
    }
    this.currentItems = _.filter(this.tempCurrentItems, function(item) {
      return (
        item.name.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.franchise_state.toUpperCase().indexOf(ev.name.toUpperCase()) >=
          0 ||
        item.franchise_district.toUpperCase().indexOf(ev.name.toUpperCase()) >=
          0 ||
        item.franchise_area.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.mobile_no.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.email_id.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0
      );
    });
  }

  view(postOrder, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push("PostOrderAddPage", {
      postOrder: postOrder
    });
  }

  add() {
    this.navCtrl.push("PostOrderAddPage");
  }

  edit(postOrder, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push("PostOrderAddPage", {
      postOrder: postOrder,
      tabIndex: 1,
    });
  }

  payment(postOrder, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push("PostOrderAddPage", {
      postOrder: postOrder,
      tabIndex: 2,
    });
  }

  isDipatchCenter(dispatch_center) {
    if(this.user && this.user.role == 'master' && this.user.user_state == dispatch_center) return true;
    if(this.user && this.user.role == 'district' && this.user.user_district == dispatch_center) return true;
    if(this.user && this.user.role == 'unit' && this.user.user_center == dispatch_center) return true;
    if(this.user && this.user.role == 'admin' && this.user._id == dispatch_center) return true;
    return false;
  }

  pressEvent(ev) {
    this.vibration.vibrate(150);
    let toast = this.toastCtrl.create({
      message: "please right or left slide to get the options.",
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  findUser(id) {
    let val = _.find(this.allUsers, { _id: id });
    return val && val["name"] ? val["name"] : "";
  }

  findLocation(id) {
    let val = _.filter(this.allCenters, function(item) {
      return item._id.indexOf(id) >= 0;
    });
    val = val[0];
    return val && val["center_name"] ? val["center_name"] : "";
  }
}
