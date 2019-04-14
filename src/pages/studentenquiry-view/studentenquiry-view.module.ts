import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentEnquiryViewPage } from './studentenquiry-view';

@NgModule({
  declarations: [
    StudentEnquiryViewPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentEnquiryViewPage),
    TranslateModule.forChild()
  ],
  exports: [
    StudentEnquiryViewPage
  ]
})
export class StudentEnquiryViewPageModule { }
