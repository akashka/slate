import { Component } from '@angular/core';
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Alert
} from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { ItemSliding } from "ionic-angular/umd";
import * as _ from 'lodash';
import { Programs, Franchise, User, Center } from '../../providers';
import { Storage } from '@ionic/storage';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { CallNumber } from '@ionic-native/call-number/ngx';

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
    public centers: Center,
    public callNumber: CallNumber,
    public alertController: AlertController
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

  view(franchiseEnquiry, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('FranchiseEnquiryViewPage', {
      franchiseEnquiry: franchiseEnquiry
    });
  }

  add() {
    this.navCtrl.push('FranchiseEnquiryAddPage');
  }

  edit(franchiseEnquiry, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('FranchiseEnquiryEditPage', {
      franchiseEnquiry: franchiseEnquiry
    });
  }

  followup(franchiseEnquiry, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('FollowupPage', {
      franchiseEnquiry: franchiseEnquiry
    });
  }

  call(franchiseEnquiry, slidingItem: ItemSliding) {
    slidingItem.close();
    this.callNumber.callNumber(franchiseEnquiry.mobile_no, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  email(franchiseEnquiry, slidingItem: ItemSliding) {
    slidingItem.close();
    window.open(`mailto:${franchiseEnquiry.email_id}`, '_system');
  }

  confirm(franchiseEnquiry, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push('FranchiseEnquiryAddPage');
  }

  reject(franchiseEnquiry, slidingItem: ItemSliding) {
    slidingItem.close();
    this.presentAlertConfirm(franchiseEnquiry);
  }

  async presentAlertConfirm(franchiseEnquiry) {
    const alert = await this.alertController.create({
      title: 'Confirm!',
      subTitle: '',
      message: 'Are you sure you want to Reject this Enquiry? Once rejected you cannot do actions on this Enquiry again.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            franchiseEnquiry.status = 'reject';
            this.franchise.update(franchiseEnquiry).subscribe((resp) => {
            }, (err) => {
              let toast = this.toastCtrl.create({
                message: "Error in rejecting this Enquiry. Please try again.",
                duration: 3000,
                position: 'top'
              });
              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
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
    let val = (_.find(this.allUsers, { _id: id }));
    return (val && val['name']) ? val['name'] : '';
  }

  findLocation(id, type, franchise_type) {
    if (type == franchise_type) return id;
    let val = _.filter(this.allCenters, function (item) {
      return (item._id.indexOf(id) >= 0)
    });
    val = val[0];
    return (val && val['center_name']) ? val['center_name'] : '';
  }

}
