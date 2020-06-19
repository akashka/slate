import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { OnlineViewPage } from './online-view';

@NgModule({
  declarations: [
    OnlineViewPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineViewPage),
    TranslateModule.forChild()
  ],
  exports: [
    OnlineViewPage
  ]
})
export class OnlineViewPageModule { }
