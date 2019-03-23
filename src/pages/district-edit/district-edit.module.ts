import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DistrictEdit } from './district-edit';

@NgModule({
  declarations: [
    DistrictEdit,
  ],
  imports: [
    IonicPageModule.forChild(DistrictEdit),
    TranslateModule.forChild()
  ],
  exports: [
    DistrictEdit
  ]
})
export class DistrictEditModule { }
