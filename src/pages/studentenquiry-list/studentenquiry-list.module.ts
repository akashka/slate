import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StudentEnquiryListPage } from './studentenquiry-list';

@NgModule({
  declarations: [
    StudentEnquiryListPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentEnquiryListPage),
    TranslateModule.forChild()
  ],
  exports: [
    StudentEnquiryListPage
  ]
})

export class StudentEnquiryListPageModule { }
