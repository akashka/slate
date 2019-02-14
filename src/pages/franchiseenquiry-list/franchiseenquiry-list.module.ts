import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FranchiseEnquiryListPage } from './franchiseenquiry-list';

@NgModule({
  declarations: [
    FranchiseEnquiryListPage,
  ],
  imports: [
    IonicPageModule.forChild(FranchiseEnquiryListPage),
    TranslateModule.forChild()
  ],
  exports: [
    FranchiseEnquiryListPage
  ]
})
export class FranchiseEnquiryListPageModule { }
