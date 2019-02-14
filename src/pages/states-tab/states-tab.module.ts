import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StatesTab } from './states-tab';

@NgModule({
  declarations: [
    StatesTab,
  ],
  imports: [
    IonicPageModule.forChild(StatesTab),
    TranslateModule.forChild()
  ],
  exports: [
    StatesTab
  ]
})
export class StatesTabModule { }
