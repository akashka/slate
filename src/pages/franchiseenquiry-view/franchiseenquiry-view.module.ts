import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FranchiseEnquiryViewPage } from './franchiseenquiry-view';

@NgModule({
  declarations: [
    FranchiseEnquiryViewPage,
  ],
  imports: [
    IonicPageModule.forChild(FranchiseEnquiryViewPage),
    TranslateModule.forChild()
  ],
  exports: [
    FranchiseEnquiryViewPage
  ]
})
export class FranchiseEnquiryViewPageModule { }
