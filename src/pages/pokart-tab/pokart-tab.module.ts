import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { POKartTab } from './pokart-tab';

@NgModule({
  declarations: [
    POKartTab,
  ],
  imports: [
    IonicPageModule.forChild(POKartTab),
    TranslateModule.forChild()
  ],
  exports: [
    POKartTab
  ]
})
export class POKartTabModule { }
