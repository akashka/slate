import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InstructorEnquiryViewPage } from './instructorenquiry-view';

@NgModule({
  declarations: [
    InstructorEnquiryViewPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructorEnquiryViewPage),
    TranslateModule.forChild()
  ],
  exports: [
    InstructorEnquiryViewPage
  ]
})
export class InstructorEnquiryViewPageModule { }
