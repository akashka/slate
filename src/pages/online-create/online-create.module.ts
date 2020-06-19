import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { OnlineAddPage } from './online-create';

@NgModule({
  declarations: [
    OnlineAddPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    OnlineAddPage
  ]
})
export class OnlineAddPageModule { }
