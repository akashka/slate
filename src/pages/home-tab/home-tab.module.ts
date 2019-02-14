import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { HomeTab } from './home-tab';

@NgModule({
  declarations: [
    HomeTab,
  ],
  imports: [
    IonicPageModule.forChild(HomeTab),
    TranslateModule.forChild()
  ],
  exports: [
    HomeTab
  ]
})
export class HomeTabModule { }
