import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InstructorEnquiryListPage } from './instructorenquiry-list';

@NgModule({
  declarations: [
    InstructorEnquiryListPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructorEnquiryListPage),
    TranslateModule.forChild()
  ],
  exports: [
    InstructorEnquiryListPage
  ]
})
export class InstructorEnquiryListPageModule { }
