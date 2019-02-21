import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InstructorEnquiryEditPage } from './instructorenquiry-update';

@NgModule({
  declarations: [
    InstructorEnquiryEditPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructorEnquiryEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    InstructorEnquiryEditPage
  ]
})
export class InstructorEnquiryEditPageModule { }
