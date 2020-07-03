import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, ToastController, Form, LoadingController, AlertController, ActionSheetController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Online } from '../../providers';
import swal from 'sweetalert';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { PaymentIntegrationPage } from '../payment-integration/payment-integration';
// import { File } from '@ionic-native/file';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'online-edit',
  templateUrl: 'online-edit.html'
})

export class OnlineEditPage {

  form;
  order = 1;
  isReadyToSave1: Boolean = false;
  loading;
  errorMsg = '';

  programmes = ['Aloha Mental Arithmetic', 'Aloha Tiny Tots', 'Aloha Speed Maths', 'Aloha Handwriting',
    'Aloha English Smart', "Aloha Kid's Art", 'Aloha Third Brain'];
  referralOptions = ['Friends', 'News Paper', 'School', 'Others'];
  referralCodeOptions = ['1101	Goa Rep', '2202	Whatsapp Promo', '3303	FB Paid', '4404	FB Link', '5505	SMS Promo',
    '6606	Karnataka Promo', '7707	ALOHA 1', '8808	ALOHA 2', '9909	ALOHA 3'];

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public camera: Camera,
    public toastCtrl: ToastController,
    public element: ElementRef,
    public storage: Storage,
    public online: Online,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public loadingController: LoadingController,
    private translate: TranslateService,
    private navParams: NavParams
    // public file: File,
  ) {
    var student = navParams.get('student');
    this.form = formBuilder.group({
      txtsname: [student.txtsname],
      txtsdob: [student.txtsdob],
      txtsadd: [student.txtsadd],
      txtscontact: [student.txtscontact],
      txtsemail: [student.txtsemail],
      txtlanguage: [student.txtlanguage],
      txtinterest: [student.txtinterest],
      txtschool: [student.txtschool],
      txtschooladd: [student.txtschooladd],
      txtfname: [student.txtfname],
      txtfoccupation: [student.txtfoccupation],
      txtfoffadd: [student.txtfoffadd],
      txtfoffcontact: [student.txtfoffcontact],
      txtfmail: [student.txtfmail],
      txtmname: [student.txtmname],
      txtmoccupation: [student.txtmoccupation],
      txtmoffadd: [student.txtmoffadd],
      txtmoffcontact: [student.txtmoffcontact],
      txtmmail: [student.txtmmail],
      txthdyk: [student.txthdyk],
      txtprograms: [student.txtprograms],
      photo: [student.photo],
      idproof: [student.idproof],
      referralcode: [student.referralcode],
      paymentStatus: [student.paymentStatus],
      paymentDetails: [student.paymentDetails]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      if (this.form.controls['txtsname'].value === '') {
        this.errorMsg = 'Please input the valid Student Name';
        this.isReadyToSave1 = false;
      } else if (this.form.controls['txtsdob'].value === '') {
        this.errorMsg = 'Please input the valid Student Date Of Birth';
        this.isReadyToSave1 = false;
      } else if (this.form.controls['txtsadd'].value === '') {
        this.errorMsg = 'Please input the valid Address';
        this.isReadyToSave1 = false;
      } else if (this.form.controls['txtscontact'].value.length !== 10) {
        this.errorMsg = 'Please input the valid 10 digit Contact Number';
        this.isReadyToSave1 = false;
      } else if (!this.validateEmail(this.form.controls['txtsemail'].value)) {
        this.errorMsg = 'Please input the valid Email ID';
        this.isReadyToSave1 = false;
      } else if (this.form.controls['txtprograms'].value.length <= 0) {
        this.errorMsg = 'Please select atleast one Program';
        this.isReadyToSave1 = false;
      } else if (this.form.controls['referralcode'].value.length <= 0) {
        this.errorMsg = 'Please select a Referral Code';
        this.isReadyToSave1 = false;
      } else {
        this.errorMsg = '';
        this.isReadyToSave1 = true;
      }
      this.isReadyToSave1 = (
        this.isReadyToSave1 ||
        this.form.controls['txtscontact'].value !== '' ||
        this.form.controls['txtfname'].value !== '' ||
        this.form.controls['txtfoccupation'].value !== '' ||
        this.form.controls['txtfoffadd'].value !== '' ||
        this.form.controls['txtfoffcontact'].value !== '' ||
        this.form.controls['txtfmail'].value !== '' ||
        this.form.controls['txtmname'].value !== '' ||
        this.form.controls['txtmoccupation'].value !== '' ||
        this.form.controls['txtmoffadd'].value !== '' ||
        this.form.controls['txtmoffcontact'].value !== '' ||
        this.form.controls['txtmmail'].value !== ''
      );
      this.isReadyToSave1 = (
        this.isReadyToSave1 ||
        this.form.controls['photo'].value !== '' ||
        this.form.controls['idproof'].value !== ''
      );
    });
  }

  validateEmail(mail) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  resize = (): void => {
    const ta = this.element.nativeElement.querySelector("textarea");
    if (ta !== undefined && ta !== null) {
      ta.style.overflow = "hidden";
      ta.style.height = "auto";
      ta.style.height = ta.scrollHeight + "px";
    }
  }

  save() {
    this.online.update(this.form.value).subscribe((resp: Object) => {
      let toast = this.toastCtrl.create({
        message: "Student details saved succesfully.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in updating the Student Details. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }


  // Utilities
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  showLoader(content) {
    this.loading = this.loadingController.create({
      content: content
    });
    this.loading.present();
  }


  // Upload 
  async upload(props) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.cameraUpload(props, 'CAMERA');
          }
        }, {
          text: 'Gallery',
          icon: 'folder',
          handler: () => {
            this.cameraUpload(props, 'PHOTOLIBRARY');
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

  cameraUpload(props, imageSrc) {
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
      var fileName = 'online_' + new Date() + '_.jpeg';
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.online.uploadToS3(base64Image, fileName, 'jpeg').subscribe((result: any) => {
        this.form.controls[props].setValue(result.Location);
        this.loading.dismiss();
      }, (err) => {
        this.presentToast(err);
        this.loading.dismiss();
      });
    }, (err) => {
      this.presentToast(err);
      this.loading.dismiss();
    });
  }

}
