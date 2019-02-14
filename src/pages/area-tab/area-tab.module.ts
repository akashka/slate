import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AreaTab } from './area-tab';

@NgModule({
  declarations: [
    AreaTab,
  ],
  imports: [
    IonicPageModule.forChild(AreaTab),
    TranslateModule.forChild()
  ],
  exports: [
    AreaTab
  ]
})
export class AreaTabModule { }
