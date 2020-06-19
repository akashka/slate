import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { OnlineReportPage } from './online-report';

@NgModule({
  declarations: [
    OnlineReportPage,
  ],
  imports: [
    IonicPageModule.forChild(OnlineReportPage),
    TranslateModule.forChild()
  ],
  exports: [
    OnlineReportPage
  ]
})
export class OnlineReportPageModule { }
