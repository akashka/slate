import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FranchiseEnquiryEditPage } from './franchiseenquiry-edit';

@NgModule({
  declarations: [
    FranchiseEnquiryEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FranchiseEnquiryEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    FranchiseEnquiryEditPage
  ]
})
export class FranchiseEnquiryEditPageModule { }
