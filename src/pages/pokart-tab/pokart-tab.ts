import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Nav,
  ViewController
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { ItemSliding } from "ionic-angular/umd";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as _ from "lodash";
import { Storage } from '@ionic/storage';

import { Center, Programs, PostOrder, CourseMapping } from "../../providers";

@IonicPage()
@Component({
  selector: "pokart-tab",
  templateUrl: "pokart-tab.html"
})
export class POKartTab {
  branches;
  courses;
  form;
  isReadyToSave: Boolean = false;
  isDuplicate: Boolean = false;
  states;
  postOrder;
  user;
  programs = [];
  allLevels = [];
  courseMappingList;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public centers: Center,
    public program: Programs,
    public postOrders: PostOrder,
    public courseMappings: CourseMapping,
    public formBuilder: FormBuilder,
    public nav: Nav,
    public storage: Storage,
    public viewCtrl: ViewController,
  ) {
    this.program.query().subscribe((res: any) => {
      this.courses = res;
    }, err => {
      console.log('ERROR', err);
    });

    this.postOrder = this.navParams.data;
  }

  ionViewDidLoad() {}

  getCourseName(id) {
    console.log(id);
    const selectedCourse = _.find(this.courses, function (o) { return o._id == id; });
    console.log(selectedCourse);
    if (selectedCourse != undefined) return selectedCourse.program_name;
    return '';
  }

  pay(num) {
    this.postOrders.add(this.postOrder).subscribe((resp) => {
      if(num == 0) this.nav.getActiveChildNav().select(2, resp);
      else this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in saving the Post Order. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
