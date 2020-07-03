import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TranslateService } from "@ngx-translate/core";
import {
  Config,
  Nav,
  Platform,
  ToastController,
  LoadingController,
  AlertController
} from "ionic-angular";
import { FirstRunPage } from "../pages";
import { Settings, User } from "../providers";
import { Storage } from "@ionic/storage";

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Network } from '@ionic-native/network';

declare var cordova: any;

@Component({
  selector: "side-main-menu",
  template: `
    <ion-menu [content]="content" *ngIf="user != null">
      <ion-content class="sideMenuIoncContent">
        <ion-list class="headerMAin">
          <ion-item class="headerBackground">
            <ion-list class="logoImage">
              <div
                class="circle-pic"
                text-center
                #profilePic
                [style.background-image]="'url(' + user.profile_pic + ')'"
              ></div>
            </ion-list>
            <br />
            <h2 class="userName">Hi {{ user.name }}</h2>
            <h3 class="userDetails">{{ user.role }}</h3>
          </ion-item>
        </ion-list>

        <ion-list list>
          <button
            menuClose
            ion-item
            no-lines
            style="border-top: 0.55px solid white;"
            [class.activeHIghlight]="checkActive(pages[1])"
            (click)="openPage(pages[1])"
            class="buttonSIdeBAr"
          >
            <ion-icon name="home" class="sidebarCss"></ion-icon>
            Home
          </button>
          <button
            menuClose
            ion-item
            no-lines
            [class.activeHIghlight]="checkActive(pages[2])"
            (click)="openPage(pages[2])"
            class="buttonSIdeBAr"
            *ngIf="user.role != undefined && user.role == 'admin'"
          >
            <ion-icon name="bookmarks" class="sidebarCss"></ion-icon>
            Programs Master
          </button>
          <button
            menuClose
            ion-item
            no-lines
            [class.activeHIghlight]="checkActive(pages[3])"
            (click)="openPage(pages[3])"
            class="buttonSIdeBAr"
            *ngIf="user.role != undefined && user.role == 'admin'"
          >
            <ion-icon name="swap" class="sidebarCss"></ion-icon>
            State / Centers Master
          </button>
          <button
            menuClose
            ion-item
            no-lines
            [class.activeHIghlight]="checkActive(pages[4])"
            (click)="openPage(pages[4])"
            class="buttonSIdeBAr"
            *ngIf="user.role != undefined && user.role == 'admin'"
          >
            <ion-icon name="person" class="sidebarCss"></ion-icon>
            Users master
          </button>
          <button
            menuClose
            ion-item
            no-lines
            [class.activeHIghlight]="checkActive(pages[5])"
            (click)="openPage(pages[5])"
            class="buttonSIdeBAr"
            *ngIf="user.role == 'admin' || user.role == 'master' || user.role == 'district'"
          >
            <ion-icon name="briefcase" class="sidebarCss"></ion-icon>
            Franchise Enquiry
          </button>
          <button
            menuClose
            ion-item
            no-lines
            [class.activeHIghlight]="checkActive(pages[6])"
            (click)="openPage(pages[6])"
            class="buttonSIdeBAr"
            *ngIf="user.role == 'admin' || user.role == 'master' || user.role == 'district' || user.role == 'unit'"
          >
            <ion-icon name="walk" class="sidebarCss"></ion-icon>
            Instructor Enquiry
          </button>
          <button 
            menuClose 
            ion-item 
            no-lines 
            [class.activeHIghlight]="checkActive(pages[7])" 
            (click)="openPage(pages[7])"
            class="buttonSIdeBAr"
            *ngIf="user.role == 'admin' || user.role == 'master' || user.role == 'district' || user.role == 'unit'"
          >
              <ion-icon name="school" class="sidebarCss"></ion-icon>
              Student Enquiry
          </button>

          <button 
            menuClose 
            ion-item 
            no-lines 
            [class.activeHIghlight]="checkActive(pages[8])" 
            (click)="openPage(pages[8])"
            class="buttonSIdeBAr"
            *ngIf="user.role == 'admin'"
          >
              <ion-icon name="globe" class="sidebarCss"></ion-icon>
              Online Report
          </button>

          <button 
            menuClose 
            ion-item 
            no-lines 
            [class.activeHIghlight]="checkActive(pages[9])" 
            (click)="openPage(pages[9])"
            class="buttonSIdeBAr"
            *ngIf="user.role == 'admin'"
          >
              <ion-icon name="barcode" class="sidebarCss"></ion-icon>
              Course Price Mapping
          </button>
          <button 
            menuClose 
            ion-item 
            no-lines 
            [class.activeHIghlight]="checkActive(pages[10])" 
            (click)="openPage(pages[10])"
            class="buttonSIdeBAr"
            *ngIf="user.role == 'admin' || user.role == 'master' || user.role == 'district' || user.role == 'unit'"
          >
              <ion-icon name="basket" class="sidebarCss"></ion-icon>
              Post Order
          </button>
          <button
            menuClose
            no-lines
            ion-item
            [class.activeHIghlight]="checkActive(pages[0])"
            (click)="openPage(pages[0])"
            class="buttonSIdeBAr"
          >
            <ion-icon class="sidebarCss" name="power"></ion-icon>
            Logout
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-nav #content [root]="rootPage"></ion-nav>
  `
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  activePage: any;

  user = {
    name: "",
    role: "",
    profile_pic: ""
  };

  userSubcription;

  pages: any[] = [
    { title: "Welcome", component: "WelcomePage" },
    { title: "Home", component: "HomePage" },
    { title: "Programs Master", component: "ProgramsListPage" },
    { title: "State / Centers Master", component: "CentersPage" },
    { title: "Users master", component: "UsersPage" },
    { title: "Franchise Enquiry", component: "FranchiseEnquiryListPage" },
    { title: "Instructor Enquiry", component: "InstructorEnquiryListPage" },
    { title: 'Student Enquiry', component: 'StudentEnquiryListPage' },
    { title: 'Online Report', component: 'OnlineReportPage' },
    { title: 'Course Price Mapping', component: 'CourseMappingPage' },
    { title: 'Post Order', component: 'PostOrderListPage' },
    // { title: 'Signup', component: 'LoginPage' },
    // { title: 'Master Detail', component: 'ListMasterPage' },
    // { title: 'News Feed', component: 'NewsFeed' },
    // { title: 'Profile', component: 'ProfilePage' },
    // { title: 'Followers', component: 'Followers' },
    // { title: 'Following', component: 'Following' }
  ];

  constructor(
    private translate: TranslateService,
    platform: Platform,
    settings: Settings,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public contacts: Contacts,
    public androidPermissions: AndroidPermissions,
    public batteryStatus: BatteryStatus,
    public alertController: AlertController,
    public network: Network,
  ) {
    platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString("#1ABC9C");

      // Getting Permissions
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_NETWORK_STATE).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_NETWORK_STATE)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.BATTERY_STATS).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.BATTERY_STATS)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.MEDIA_CONTENT_CONTROL).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.MEDIA_CONTENT_CONTROL)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_CONTACTS).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_CONTACTS)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.VIBRATE).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.VIBRATE)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_CONTACTS).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_CONTACTS)
      );

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      );

      // Storing COntacts
      this.contacts.find(["*"]).then((contacts) => {
        let allContact = contacts.sort(function (a, b) {
          if (a.displayName < b.displayName) { return -1; }
          if (a.displayName > b.displayName) { return 1; }
          return 0;
        });
        var stringContact = JSON.parse(JSON.stringify(allContact));
        for (let u = 0; u < stringContact.length; u++) {
          stringContact[u] = stringContact[u]._objectInstance;
          stringContact[u].isChecked = false;
        };
        var contactList = JSON.stringify(stringContact);
        this.storage.set("phoneContacts", contactList);
      });

      if (this.batteryStatus) {
        this.batteryStatus.onChange().subscribe(status => {
          console.log(status.level, status.isPlugged);
          if (!status.isPlugged && status.level < 15 && status.level % 5 == 0) {
            this.presentBatteryAlert(status);
          }
        });
      }

      if (this.network) {
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
          this.showNetworkAlert().then(() => {
            disconnectSubscription.unsubscribe();
          });
        });
      }

    });

    this.initTranslate();
    this.storage.get("user").then(value => {
      this.user = value;
    });
    console.log(this.user);
    this.userSubcription = User.userChanged.subscribe(data => {
      this.user = data;
    }
    )
  }

  ionViewWillEnter() {
    this.storage.get("user").then(value => {
      this.user = value;
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang("en");
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      if (browserLang === "zh") {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use("zh-cmn-Hans");
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use("zh-cmn-Hant");
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use("en"); // Set your language here
    }
    this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(values => {
      this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    this.storage.get("user").then(value => {
      this.user = value;
    });

    if (page.component == "WelcomePage") {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      this.storage.set("token", "");
      this.storage.set("user", {});
      setTimeout(() => {
        loading.dismiss();
        this.nav.setRoot(page.component);
        this.activePage = "random";
        let toast = this.toastCtrl.create({
          message: "You have successfully logged out",
          duration: 2000,
          position: "top"
        });
        toast.present();
      }, 2000);
    } else {
      this.nav.setRoot(page.component);
      this.activePage = page;
      console.log(page.component);
    }
  }

  checkActive(page) {
    return page == this.activePage;
  }

  async presentBatteryAlert(status) {
    const alert = await this.alertController.create({
      title: ((status.level == 10 ? 'Low' : 'Critical') + ' Battery Level'),
      message: (
        'Your mobile battery is ' +
        (status.level == 10 ? 'Low' : 'Critical') +
        '. Please connect your phone to charger for uninterrupted service.'
      ),
      buttons: ['OK'],
      enableBackdropDismiss: true,
    });
    await alert.present();
  }

  private showSettings() {
    if (cordova.plugins.diagnostic.switchToWifiSettings) {
      cordova.plugins.diagnostic.switchToWifiSettings();
    } else {
      cordova.plugins.diagnostic.switchToSettings();
    }
  }

  async showNetworkAlert() {
    let networkAlert = this.alertController.create({
      title: 'No Internet Connection',
      message: 'Your Internet connection seems to have lost. Please check your internet connection.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Settings',
          handler: () => {
            networkAlert.dismiss().then(() => {
              this.showSettings();
            })
          }
        }
      ],
      enableBackdropDismiss: true,
    });
    networkAlert.present();
  }

}
