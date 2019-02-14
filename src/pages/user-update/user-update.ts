import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams, ViewController } from 'ionic-angular';
import { User, Center } from '../../providers';
import { FirstRunPage } from '../';

@IonicPage()
@Component({
  selector: 'user-update',
  templateUrl: 'user-update.html'
})
export class UserUpdatePage {

  account = {
    _id: '',
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

  // Our translated text strings
  private signupErrorString: string;

  constructor(
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public center: Center,
  ) {
    this.account = navParams.get('user');
    this.usersList = this.user.users_list();
    this.allBranches = this.center.query();
    // TO-DO: Divide branches

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  doSignup() {
    this.user.update_user(this.account).subscribe((resp) => {
      this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in updating the User. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  onChange(ev) {
    this.isReadyToSave = (this.account.name != '' && this.account.email != '' && this.account.phone_no != '' && this.account.gender != '' && this.account.role != '' &&
      (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.password)) && (/^\d+$/.test(this.account.phone_no)) && this.account.phone_no.length == 10);
  }

}

