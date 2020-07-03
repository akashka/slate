import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { OnlineEditPage } from './online-edit';

@NgModule({
  declarations: [
    OnlineEditPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    OnlineEditPage
  ]
})
export class OnlineEditPageModule { }
