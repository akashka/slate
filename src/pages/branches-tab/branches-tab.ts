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

import { Center } from "../../providers";

@IonicPage()
@Component({
  selector: 'branches-tab',
  templateUrl: 'branches-tab.html'
})

export class BranchesTab {

  branches;
  states = [];
  shownGroup: any = null;
  groupItems;
  groupMember;
  shownSubGroup: any = null;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public centers: Center
  ) {
    this.centers.query().subscribe((res: any) => {
      this.branches = res;
      this.states = res.filter((item) => {
        return item.center_type == 'state'
      });
    }, err => {
      console.error('ERROR', err);
    });
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) this.shownGroup = null;
    else {
      this.shownGroup = group;
      this.groupItems = this.branches.filter((item) => {
        return item.center_parent == group.center_id
      });
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  isChildThere(group) {
    let filteredList = this.branches.filter((item) => {
      return item.center_parent == group.center_id
    });
    return filteredList.length > 0;
  }

  toggleSubGroup(subGroup) {
    if (this.isSubGroupShown(subGroup)) this.shownSubGroup = null;
    else {
      this.shownSubGroup = subGroup;
      this.groupMember = this.branches.filter((item) => {
        return item.center_parent == subGroup.center_id
      });
    }
  }

  isSubGroupShown(subGroup) {
    return this.shownSubGroup === subGroup;
  }

}
