import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, ViewController } from 'ionic-angular';
import { User, Center } from '../../providers';
import { FirstRunPage } from '../';
import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  account = {
    name: '',
    user_name: '',
    email: '',
    password: '',
    confirm_password: '',
    phone_no: '',
    gender: 'male',
    role: '',
    dob: new Date(),
    profile_pic: '',
    user_state: '',
    user_district: '',
    user_center: '',
    active: true
  };

  isReadyToSave: Boolean = false;
  isDuplicate: Boolean = false;
  isPasswordMatch: Boolean = false;
  usersList;
  allBranches;

  statesList = [];
  districtsList = [];
  centersList = [];

  private signupErrorString: string;

  constructor(
    public navCtrl: NavController,
    public user: User,
    public center: Center,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public viewCtrl: ViewController
  ) {
    this.user.users_list().subscribe((res: any) => {
      this.usersList = res;
    }, err => {
      console.error('ERROR', err);
    });

    this.center.query().subscribe((res: any) => {
      this.allBranches = res;
    }, err => {
      console.error('ERROR', err);
    });

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    this.user.signup(this.account).subscribe((resp) => {
      this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in adding the User. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  onChange(ev) {
    this.isReadyToSave = (this.account.name != '' && this.account.user_name != '' && this.account.email != '' &&
      this.account.password != '' && this.account.confirm_password != '' && this.account.phone_no != '' &&
      this.account.gender != '' && this.account.role != '' &&
      (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.password)) &&
      (/^\d+$/.test(this.account.phone_no)) && this.account.phone_no.length == 10);

    this.isPasswordMatch = (this.account.password == this.account.confirm_password);

    // let program = _.filter(this.usersList, function (item) {
    //   return (item.user_name.toUpperCase().indexOf(this.account.user_name.toUpperCase()) >= 0)
    // });

    // this.isDuplicate = (program.length > 0);
  }

}
