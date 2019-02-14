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
import { ItemSliding } from "ionic-angular/umd";
import * as _ from 'lodash';
import { Programs, Franchise, User, Center } from '../../providers';
import { Storage } from '@ionic/storage';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@IonicPage()
@Component({
  selector: 'franchiseenquiry-lists',
  templateUrl: 'franchiseenquiry-list.html'
})
export class FranchiseEnquiryListPage {

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
    public franchise: Franchise,
    public storage: Storage,
    public users: User,
    public centers: Center
  ) {
    this.franchise.query().subscribe((res: any) => {
      this.currentItems = res;
      this.tempCurrentItems = res;
      this.storage.get('user').then((value) => {
        this.user = value;
        if (this.user.role != 'admin') {
          this.currentItems = _.filter(this.currentItems, function (item) {
            return (item.enquiry_by == this.user._id)
          });
          this.tempCurrentItems = this.currentItems;
        }
      });
    }, err => {
      console.error('ERROR', err);
    });

    this.users.users_list().subscribe((res: any) => {
      this.allUsers = res;
    }, err => {
      console.error('ERROR', err);
    });

    this.centers.query().subscribe((res: any) => {
      this.allCenters = res;
    }, err => {
      console.error('ERROR', err);
    });
  }

  // Nested filtering of records to users under them

  getItems(ev) {
    let val = ev.data.toUpperCase();
    if (!val || !val.trim()) {
      this.currentItems = this.tempCurrentItems;
      return;
    }
    this.currentItems = _.filter(this.tempCurrentItems, function (item) {
      return (item.name.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.franchise_state.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.franchise_district.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.franchise_area.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.mobile_no.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0 ||
        item.email_id.toUpperCase().indexOf(ev.name.toUpperCase()) >= 0)
    });
  }

  view(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('ProgramDetailPage', {
      program: program
    });
  }

  add() {
    this.navCtrl.push('FranchiseEnquiryAddPage');
  }

  edit(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('ProgramEditPage', {
      program: program
    });
  }

  followup(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('ProgramEditPage', {
      program: program
    });
  }

  call(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('ProgramEditPage', {
      program: program
    });
  }

  email(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('ProgramEditPage', {
      program: program
    });
  }

  confirm(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('ProgramEditPage', {
      program: program
    });
  }

  reject(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('ProgramEditPage', {
      program: program
    });
  }

  pressEvent(ev) {
    this.vibration.vibrate(150);
    let toast = this.toastCtrl.create({
      message: "please right or left slide to get the options.",
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  findUser(id) {
    return (_.find(this.allUsers, { _id: id }));
  }

  findLocation(id, type, franchise_type) {
    if (type == franchise_type) return id;
    return (_.find(this.allCenters, { _id: id }));
  }

}
