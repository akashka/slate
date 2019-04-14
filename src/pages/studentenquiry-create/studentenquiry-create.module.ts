import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentEnquiryAddPage } from './studentenquiry-create';

@NgModule({
  declarations: [
    StudentEnquiryAddPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentEnquiryAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    StudentEnquiryAddPage
  ]
})
export class StudentEnquiryAddPageModule { }
