import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentEnquiryConfirmPage } from './studentenquiry-confirm';

@NgModule({
  declarations: [
    StudentEnquiryConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentEnquiryConfirmPage),
    TranslateModule.forChild()
  ],
  exports: [
    StudentEnquiryConfirmPage
  ]
})
export class StudentEnquiryConfirmPageModule { }
