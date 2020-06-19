import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PaymentIntegrationPage } from './payment-integration';

@NgModule({
  declarations: [
    PaymentIntegrationPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentIntegrationPage),
    TranslateModule.forChild()
  ],
  exports: [
    PaymentIntegrationPage
  ]
})
export class PaymentIntegrationPageModule { }
