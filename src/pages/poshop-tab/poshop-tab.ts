import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Nav
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { ItemSliding } from "ionic-angular/umd";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as _ from "lodash";
import { Storage } from '@ionic/storage';

import { Center, Programs, PostOrder, CourseMapping } from "../../providers";

@IonicPage()
@Component({
  selector: "poshop-tab",
  templateUrl: "poshop-tab.html"
})
export class POShopTab {
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
  ) {
    this.centers.query().subscribe((res: any) => {
      this.branches = res;
    }, err => {
      console.error("ERROR", err);
    });

    this.program.query().subscribe((res: any) => {
      this.courses = res;
    }, err => {
      console.log('ERROR', err);
    });

    this.courseMappings.query().subscribe((res: any) => {
      this.courseMappingList = res;
    }, err => {
      console.log('Error', err);
    })

    this.postOrder = this.navParams.data;

    this.storage.get('user').then((value) => {
      this.user = value;
      if(this.user.role === 'admin') this.postOrder.center = '5d21c4a95bedd22d45e765b3';
      if(this.user.role === 'master') this.postOrder.center = this.user.user_state;
      if(this.user.role === 'district') this.postOrder.center = this.user.user_district;
      if(this.user.role === 'unit') this.postOrder.center = this.user.user_center;

      this.programs = [];
      const cent = this.postOrder.center;
      const selectedCenter = _.find(this.branches, function (o) { return o._id == cent; });
      console.log('selectedCenter', selectedCenter);
      this.postOrder.dispatch_center = selectedCenter.center_parent;
      for(var p=0; p<this.courses.length; p++) {
        if(selectedCenter.programs.includes(this.courses[p]._id))
          this.programs.push(this.courses[p]);
      }

    });

    this.form = formBuilder.group({
      course: ["", Validators.required],
      level: [1, Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      total_price: [0, Validators.required],
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe(v => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {}

  onCourseChange() {
    const value = this.form.value;
    const selectedCourse = _.find(this.courses, function (o) { return o._id == value.course; });
    this.allLevels = Array.from({length: selectedCourse.total_levels}, (v, k) => k + 1);
  }

  onLevelChange() {
    const value = this.form.value;
    const center = this.postOrder.center;
    const courseMappingList = _.find(this.courseMappingList, function(o) {
      return (o.center == center && o.course == value.course && o.level == value.level);       
    })
  }

  onQuantityChange()  {
    this.form.controls['total_price'].setValue(Number(this.form.value.quantity) * Number(this.form.value.price));
  }

  mergePO(products) {
    for(var p=0; p<products.length; p++) {
      for(var a=(p+1); a<products.length; a++) {
        if(products[p].course == products[a].course && products[p].level == products[a].level) {
          products[p].quantity += products[p].quantity;
          products[p].total_price += products[p].total_price;
          products.splice(a, 1);
          a--;
        }
      }
      if(products[p].quantity <= 0) {
        products.splice(p, 1);
        p--;
      }
    }
    return products;
  }

  save() {
    this.postOrder.products.push(this.form.value);
    this.postOrder.products = this.mergePO(this.postOrder.products);
    this.postOrder.total_amount = 0;
    for(var p=0; p< this.postOrder.products.length; p++) {
      this.postOrder.total_amount += this.postOrder.products[p].total_price;
    }
    this.form.controls['course'].setValue('');
    this.form.controls['level'].setValue(1);
    this.form.controls['price'].setValue(0);
    this.form.controls['quantity'].setValue(0);
    this.form.controls['total_price'].setValue(0);
    this.nav.getActiveChildNav().select(1, this.postOrder);
  }

}
