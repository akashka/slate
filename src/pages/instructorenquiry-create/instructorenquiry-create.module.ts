import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { InstructorEnquiryAddPage } from './instructorenquiry-create';

@NgModule({
  declarations: [
    InstructorEnquiryAddPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructorEnquiryAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    InstructorEnquiryAddPage
  ]
})
export class InstructorEnquiryAddPageModule { }
