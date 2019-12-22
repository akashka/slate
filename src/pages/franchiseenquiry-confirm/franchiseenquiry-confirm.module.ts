import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FranchiseEnquiryConfirmPage } from './franchiseenquiry-confirm';

@NgModule({
  declarations: [
    FranchiseEnquiryConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(FranchiseEnquiryConfirmPage),
    TranslateModule.forChild()
  ],
  exports: [
    FranchiseEnquiryConfirmPage
  ]
})
export class FranchiseEnquiryConfirmPageModule { }
