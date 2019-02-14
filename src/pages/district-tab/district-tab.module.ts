import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DistrictTab } from './district-tab';

@NgModule({
  declarations: [
    DistrictTab,
  ],
  imports: [
    IonicPageModule.forChild(DistrictTab),
    TranslateModule.forChild()
  ],
  exports: [
    DistrictTab
  ]
})
export class DistrictTabModule { }
