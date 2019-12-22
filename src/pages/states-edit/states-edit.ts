import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Config,
  Nav,
  Platform
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { ItemSliding } from "ionic-angular/umd";
import * as _ from "lodash";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Center, Programs } from "../../providers";

@IonicPage()
@Component({
  selector: "states-edit",
  templateUrl: "states-edit.html"
})
export class StatesEdit {
  branches;
  courses;
  isReadyToSave: Boolean = false;
  form: any;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public centers: Center,
    public program: Programs,
    public formBuilder: FormBuilder,
    public nav: Nav
  ) {
    this.centers.query().subscribe((res: any) => {
        this.branches = res;
    }, err => {
        console.error("ERROR", err);
    });

    this.program.query().subscribe((res: any) => {
      this.courses = res;
    }, err => {
      console.log('ERROR', err);
    });

    this.form = formBuilder.group({
      _id: [""],
      center_id: ["", Validators.required],
      center_name: ["", Validators.required],
      center_type: ["state"],
      center_parent: [""],
      active: [true, Validators.required],
      programs: [[], Validators.required]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe(v => {
      this.isReadyToSave = this.form.valid;
    });

    let center = navParams.get("branch");
    this.form.controls["_id"].setValue(center._id);
    this.form.controls["center_id"].setValue(center.center_id);
    this.form.controls["center_name"].setValue(center.center_name);
    this.form.controls["center_type"].setValue(center.center_type);
    this.form.controls["center_parent"].setValue(center.center_parent);
    this.form.controls["active"].setValue(center.active);
    this.form.controls["programs"].setValue(center.programs);
  }

  ionViewDidLoad() {}

  createState() {
    this.centers.update(this.form.value).subscribe(
      resp => {

        if(!this.form.value.active) {
          for(var b=0; b<this.branches.length; b++) {
            if(this.branches[b].center_parent == this.form.value._id) {
              this.branches[b].active = false;
              this.centers.update(this.branches[b]).subscribe((resp) => { 
                console.log(resp);

                for(var bb = 0; bb < this.branches.length; bb++) {
                  if(this.branches[bb].center_parent == this.branches[b]._id) {
                    this.branches[bb].active = false;
                    this.centers.update(this.branches[bb]).subscribe((resp) => { 
                      console.log(resp);
                    }, (err) => {
                      console.log(err);
                    });            
                  }
                }

              }, (err) => {
                console.log(err);
              });
            }
          }
        }

        let toast = this.toastCtrl.create({
          message: "Successfully updated State",
          duration: 3000,
          position: "top"
        });
        toast.present();
        this.navCtrl.push("BranchesTab");
      },
      err => {
        let toast = this.toastCtrl.create({
          message: "Error in adding the State. Please try again.",
          duration: 3000,
          position: "top"
        });
        toast.present();
      }
    );
  }
}
