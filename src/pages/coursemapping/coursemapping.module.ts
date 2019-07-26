import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CourseMappingPage } from './coursemapping';

@NgModule({
  declarations: [
    CourseMappingPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseMappingPage),
    TranslateModule.forChild()
  ],
  exports: [
    CourseMappingPage
  ]
})
export class CourseMappingPageModule { }
