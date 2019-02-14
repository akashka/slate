import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { NotificationTab } from './notification-tab';

@NgModule({
  declarations: [
    NotificationTab,
  ],
  imports: [
    IonicPageModule.forChild(NotificationTab),
    TranslateModule.forChild()
  ],
  exports: [
    NotificationTab
  ]
})
export class NotificationTabModule { }
