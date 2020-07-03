import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";

import { Programs } from "../../providers";
import { ItemSliding } from "ionic-angular/umd";

import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";

@IonicPage()
@Component({
  selector: "programs-lists",
  templateUrl: "programs-list.html"
})
export class ProgramsListPage {
  currentItems;
  tempCurrentItems;

  input_search: String = "";

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public programs: Programs,
    public file: File,
  ) {}

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.programs.query().subscribe(
      (res: any) => {
        this.currentItems = res;
        this.tempCurrentItems = res;
      },
      err => {
        console.error("ERROR", err);
      }
    );
  }

  getItems(ev) {
    let val = this.input_search.toUpperCase();
    if (!val || !val.trim()) {
      this.currentItems = this.tempCurrentItems;
      return;
    }
    this.currentItems = this.tempCurrentItems.filter(item => {
      return (
        item.program_name.toUpperCase().indexOf(val) >= 0 ||
        item.program_code.toUpperCase().indexOf(val) >= 0
      );
    });
  }

  viewProgram(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push("ProgramDetailPage", {
      program: program
    });
  }

  addProgram() {
    this.navCtrl.push("ProgramAddPage");
  }

  editProgram(program, slidingItem: ItemSliding) {
    slidingItem.close();
    this.navCtrl.push("ProgramEditPage", {
      program: program
    });
  }

  pressEvent(ev) {
    this.vibration.vibrate(150);
    let toast = this.toastCtrl.create({
      message: "please slide to get the options .",
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

  saveAsCsv() {
    var csv: any = this.convertToCSV(this.currentItems);
    var fileName: any = "programs.csv";

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
}
