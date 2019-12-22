import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { POPaymentTab } from './popayment-tab';

@NgModule({
  declarations: [
    POPaymentTab,
  ],
  imports: [
    IonicPageModule.forChild(POPaymentTab),
    TranslateModule.forChild()
  ],
  exports: [
    POPaymentTab
  ]
})
export class POPaymentTabModule { }
