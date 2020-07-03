import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, ToastController, Form, LoadingController, AlertController, ActionSheetController } from 'ionic-angular';
import * as _ from 'lodash';
import { Storage } from '@ionic/storage';
import { Online } from '../../providers';
import { File } from '@ionic-native/file';
import { OnlineViewPage } from '../online-view/online-view';
import { CallNumber } from '@ionic-native/call-number';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@IonicPage()
@Component({
  selector: 'online-report',
  templateUrl: 'online-report.html'
})

export class OnlineReportPage {

  students;
  allStudents;
  myInput = '';

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public element: ElementRef,
    public storage: Storage,
    public online: Online,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public loadingController: LoadingController,
    public callNumber: CallNumber,
    public androidPermissions: AndroidPermissions,
    public file: File,
  ) {
    this.online.query().subscribe((resp) => {
      this.allStudents = resp;
      this.allStudents = this.allStudents.reverse();
      this.students = this.allStudents;
    });
  }

  search() {
    if (this.myInput === "") this.students = this.allStudents;
    else {
      var result = [];
      for (var i = 0; i < this.allStudents.length; i++) {
        if (
          this.allStudents[i].txtsname &&
          this.allStudents[i].txtsname.toUpperCase().indexOf(this.myInput.toUpperCase()) >= 0
        ) {
          result.push(this.allStudents[i]);
        }
        else if (
          this.allStudents[i].txtscontact &&
          this.allStudents[i].txtscontact.toUpperCase().indexOf(this.myInput.toUpperCase()) == 0
        ) {
          result.push(this.allStudents[i]);
        }
      }
      this.students = result;
    }
  }

  async presentActionSheet(student) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: "Call",
          icon: "call",
          handler: () => {
            this.callNumber.callNumber(student.txtscontact, true);
          }
        },
        {
          text: "Whatsapp",
          icon: "logo-whatsapp",
          handler: () => {
            window.open(("https://wa.me/91" + Number(student.txtscontact)), "_system");
          }
        },
        {
          text: "SMS",
          icon: "text",
          handler: () => {
            window.open("sms://" + Number(student.txtscontact), "_system");
          }
        },
        {
          text: "Email",
          icon: "mail",
          handler: () => {
            window.open("mailto://" + student.txtsemail, "_system");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  convertArrayToStrings(arr) {
    var str = '';
    for (var a = 0; a < arr.length; a++) {
      if (a != 0) {
        str += ', ';
      }
      str += arr[a];
    }
    return str;
  }

  download() {
    var csv: any = this.convertToCSV(this.allStudents);
    var fileName: any = "online_students.csv";
    this.file.writeFile(this.file.externalRootDirectory, fileName, csv).then(_ => {
      let toast = this.toastCtrl.create({
        message: "File " + fileName + " saved successfully.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }).catch(err => {
      this.file.writeExistingFile(this.file.externalRootDirectory, fileName, csv).then(_ => {
        let toast = this.toastCtrl.create({
          message: "File " + fileName + " saved successfully.",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }).catch(err => {
        let toast = this.toastCtrl.create({
          message: JSON.stringify(err),
          duration: 6000,
          position: 'top'
        });
        toast.present();
      });
    })
  }

  convertToCSV(teams) {
    var json = teams;
    var fields = Object.keys(json[0])
    var replacer = function (key, value) { return value === null ? '' : value }
    var csv = json.map(function (row) {
      return fields.map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })
    csv.unshift(fields.join(',')) // add header column
    csv = csv.join('\r\n');
    return csv
  }

  async action(student) {
    var buttons = [
      {
        text: "View",
        icon: "eye",
        handler: () => {
          this.view(student);
        }
      },
      {
        text: "Edit",
        icon: "create",
        handler: () => {
          this.edit(student);
        }
      },
      {
        text: "Cancel",
        icon: "close",
        role: "cancel",
        handler: () => {
          console.log("Cancel clicked");
        }
      }
    ];
    if (student.paymentStatus !== 'SUCCESS' && student.paymentStatus !== 'PAID') {
      buttons.push({
        text: "Payment",
        icon: "card",
        handler: () => {
          this.pay(student);
        }
      });
    }
    const actionSheetCon = await this.actionSheetController.create({
      buttons: buttons
    });
    await actionSheetCon.present();
  }

  view(student) {
    this.navCtrl.push(OnlineViewPage, {
      student: student
    });
  }

  edit(student) {

  }

  async pay(student) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      enableBackdropDismiss: false,
      title: 'Confirm!',
      message: 'This will mark the payment received for this Student. Are you sure you have received this payment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // alert.dismiss();
          }
        }, {
          text: 'Okay',
          handler: () => {
            student.paymentStatus = 'PAID';
            this.online.update(student).subscribe((resp: any) => {
              let toast = this.toastCtrl.create({
                message: "Updated Payment details for the Student.",
                duration: 3000,
                position: 'top'
              });
              toast.present();
              for (var i = 0; i < this.allStudents.length; i++) {
                if (this.allStudents[i]._id === resp._id) {
                  this.allStudents[i] = resp;
                }
              }
              for (var j = 0; j < this.students.length; j++) {
                if (this.students[j]._id === resp._id) {
                  this.students[j] = resp;
                }
              }
              alert.dismiss();
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
