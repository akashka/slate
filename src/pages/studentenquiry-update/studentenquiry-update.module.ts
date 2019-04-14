import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentEnquiryEditPage } from './studentenquiry-update';

@NgModule({
  declarations: [
    StudentEnquiryEditPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentEnquiryEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    StudentEnquiryEditPage
  ]
})
export class StudentEnquiryEditPageModule { }
