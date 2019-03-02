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

import { Programs } from "../../providers";
import { ItemSliding } from "ionic-angular/umd";

@IonicPage()
@Component({
  selector: "programs-lists",
  templateUrl: "programs-list.html"
})
export class ProgramsListPage {
  currentItems;
  tempCurrentItems;

  input_search: String = "";

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public programs: Programs
  ) {}

  ionViewDidLoad() {
    this.programs.query().subscribe(
      (res: any) => {
        this.currentItems = res;
        this.tempCurrentItems = res;
      },
      err => {
        console.error("ERROR", err);
      }
    );
  }

  getItems(ev) {
    let val = this.input_search.toUpperCase();
    if (!val || !val.trim()) {
      this.currentItems = this.tempCurrentItems;
      return;
    }
    this.currentItems = this.tempCurrentItems.filter(item => {
      return (
        item.program_name.toUpperCase().indexOf(val) >= 0 ||
        item.program_code.toUpperCase().indexOf(val) >= 0
      );
    });
  }

  viewProgram(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push("ProgramDetailPage", {
      program: program
    });
  }

  addProgram() {
    this.navCtrl.push("ProgramAddPage");
  }

  editProgram(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push("ProgramEditPage", {
      program: program
    });
  }

  pressEvent(ev) {
    this.vibration.vibrate(150);
    let toast = this.toastCtrl.create({
      message: "please slide to get the options .",
      duration: 2000,
      position: "top"
    });
    toast.present();
  }
}
