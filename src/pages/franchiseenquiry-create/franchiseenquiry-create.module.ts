import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FranchiseEnquiryAddPage } from './franchiseenquiry-create';

@NgModule({
  declarations: [
    FranchiseEnquiryAddPage,
  ],
  imports: [
    IonicPageModule.forChild(FranchiseEnquiryAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    FranchiseEnquiryAddPage
  ]
})
export class FranchiseEnquiryAddPageModule { }
