import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  ViewController,
  ActionSheetController
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { Programs, User, Online } from "../../providers";
import { ItemSliding } from "ionic-angular/umd";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from "@ionic/storage";
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: "profile-tab",
  templateUrl: "profile-tab.html"
})

export class ProfileTab {
  @ViewChild("fileInput") fileInput;
  isReadyToSave: boolean;
  item: any;
  form: FormGroup;
  profileDetails: any;
  private isDisabled: boolean = true;
  private caption_name: string = "EDIT";

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public camera: Camera,
    public user: User,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public actionSheetController: ActionSheetController,
    public online: Online
  ) {
    this.storage.get("user").then(value => {
      console.log(value);
      this.profileDetails = value;
      this.form = formBuilder.group({
        _id: [this.profileDetails._id, Validators.compose([Validators.required])],
        name: [this.profileDetails.name, Validators.compose([Validators.required])],
        user_name: [this.profileDetails.user_name, Validators.compose([Validators.required])],
        email: [this.profileDetails.email, Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])],
        password: [this.profileDetails.password, Validators.compose([Validators.required])],
        role: [this.profileDetails.role, Validators.compose([Validators.required])],
        dob: [this.profileDetails.dob],
        gender: [this.profileDetails.gender],
        phone_no: [this.profileDetails.phone_no, Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')])],
        whatsapp_no: [this.profileDetails.whatsapp_no, Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[0-9]*')])],
        profile_pic: [this.profileDetails.profile_pic],
        user_state: [this.profileDetails.user_state],
        user_district: [this.profileDetails.user_district],
        user_center: [this.profileDetails.user_center],
        active: [true, Validators.compose([Validators.required])],
      });
    });
  };

  changedSmtng() {
    this.caption_name = "SAVE";
  }

  editProfile() {
    if (this.caption_name == "EDIT") {
      this.isDisabled = false;
      this.caption_name = "CANCEL";
    } else if (this.caption_name == "SAVE") {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();

      this.form.value.dob = new Date(this.form.value.dob);
      this.user.update_user(this.form.value).subscribe((resp) => {
        this.viewCtrl.dismiss();
        let toast = this.toastCtrl.create({
          message: "You have successfully updated your details .",
          duration: 2000,
          position: "top"
        });
        loading.dismiss();
        toast.present();
        this.caption_name = "EDIT";
        this.isDisabled = true;
      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "Error in adding the User. Please try again.",
          duration: 3000,
          position: 'top'
        });
        loading.dismiss();
        toast.present();
      });

    } else if (this.caption_name == "CANCEL") {
      this.isDisabled = true;
      this.caption_name = "EDIT";
    }
  }

  ionViewDidLoad() { }

  getProfileImageStyle() {
    return "url(" + this.form.controls["profile_pic"].value + ")";
  }


  // Upload 
  async changePicture() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.cameraUpload('CAMERA');
          }
        }, {
          text: 'Gallery',
          icon: 'folder',
          handler: () => {
            this.cameraUpload('PHOTOLIBRARY');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            actionSheet.dismiss();
          }
        }
      ]
    });
    await actionSheet.present();
  }

  loading: any;
  showLoader(content) {
    this.loading = this.loadingCtrl.create({
      content: content
    });
    this.loading.present();
  }

  cameraUpload(imageSrc) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType[imageSrc],
      allowEdit: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then((imageData) => {
      this.showLoader('Uploading...');
      var fileName = 'profile_pic_' + new Date() + '_.jpeg';
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.online.uploadToS3(base64Image, fileName, 'jpeg').subscribe((result: any) => {
        this.form.controls['profile_pic'].setValue(result.Location);
      }, (err) => {
        this.presentToast(err);
        this.loading.dismiss();
      });
    }, (err) => {
      this.presentToast(err);
      this.loading.dismiss();
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


}
