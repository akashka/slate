import { Component } from "@angular/core";
import {
  IonicPage,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  ViewController,
  Form
} from "ionic-angular";
import { Vibration } from "@ionic-native/vibration";
import { Programs, Center, CourseMapping } from "../../providers";
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: "coursemapping",
  templateUrl: "coursemapping.html"
})
export class CourseMappingPage {
  branches;
  programmes;
  states;
  districts;
  areas;
  selectedProgrammes;
  levels;
  form;
  isReadyToSave: Boolean = false;
  courseMappings;

  constructor(
    public vibration: Vibration,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public program: Programs,
    public center: Center,
    public courseMapping : CourseMapping,
    public formBuilder: FormBuilder,
    public viewCtrl: ViewController,
  ) {
    this.form = formBuilder.group({
      state: ['', Validators.compose([Validators.required])],
      district: [''],
      center: ['', Validators.compose([Validators.required])],
      course: ['', Validators.compose([Validators.required])],
      level: [1, Validators.compose([Validators.required])],
      registration_fee: [0, Validators.compose([Validators.required, Validators.min(0)])],
      kit_fee: [0, Validators.compose([Validators.required, Validators.min(0)])],
      extra_fee: [0, Validators.compose([Validators.required, Validators.min(0)])],
      total_fee: [0, Validators.compose([Validators.required, Validators.min(0)])],
      max_discount: [0, Validators.compose([Validators.required, Validators.min(0)])]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.center.query().subscribe((res: any) => {
      this.branches = res;
      this.states = _.filter(res, function (item) {
        return (item.center_type == 'state')
      });
    }, err => {
      console.error('ERROR', err);
    });

    this.program.query().subscribe((res: any) => {
      this.programmes = res;
    }, err => {
      console.error('ERROR', err);
    });

    this.courseMapping.query().subscribe((res: any) => {
      this.courseMappings = res;
    }, err => {
      console.error('ERROR', err);
    });
  }

  onStateChange(ev) {
    this.districts = _.filter(this.branches, function (item) {
      return (item.center_type == 'district' && item.center_parent == ev)
    });
    this.areas = _.filter(this.branches, function (item) {
      return (item.center_type == 'unit' && item.center_parent == ev)
    });
  }

  onDistrictChange(ev) {
    this.areas = _.filter(this.branches, function (item) {
      return (item.center_type == 'unit' && item.center_parent == ev)
    });
  }

  onAreaChange(ev) {
    this.selectedProgrammes = [];
    const selectedArea = _.find(this.areas, function (o) { return o._id == ev; });
    for(var p=0; p<this.programmes.length; p++) {
      if(selectedArea.programs.includes(this.programmes[p]._id))
        this.selectedProgrammes.push(this.programmes[p]);
    }
  }

  onLevelChange(ev) {
    const value = this.form.value;
    const selectedMapping = _.find(this.courseMappings, function (o) { 
      return (o.center == value.center && o.course == value.course && o.level == value.level); 
    });
    if(selectedMapping != undefined && selectedMapping != null) {
      this.form.controls['registration_fee'].setValue(selectedMapping.registration_fee);
      this.form.controls['kit_fee'].setValue(selectedMapping.kit_fee);
      this.form.controls['extra_fee'].setValue(selectedMapping.extra_fee);
      this.form.controls['total_fee'].setValue(selectedMapping.total_fee);
      this.form.controls['max_discount'].setValue(selectedMapping.max_discount);
    } else {
      this.form.controls['registration_fee'].setValue(0);
      this.form.controls['kit_fee'].setValue(0);
      this.form.controls['extra_fee'].setValue(0);
      this.form.controls['total_fee'].setValue(0);
      this.form.controls['max_discount'].setValue(0);
    }
  }

  onCourseChange(ev) {
    const selectedCourse = _.find(this.selectedProgrammes, function (o) { return o._id == ev; });
    this.levels = Array.from({length: selectedCourse.total_levels}, (v, k) => k + 1);
  }

  calculateTotal() {
    this.form.controls['total_fee'].setValue(Number(this.form.value.registration_fee) + Number(this.form.value.kit_fee) + Number(this.form.value.extra_fee));
  }

  save() {
    this.courseMapping.add(this.form.value).subscribe((resp) => {
      this.viewCtrl.dismiss();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Error in updating the Mapping. Please try again.",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
