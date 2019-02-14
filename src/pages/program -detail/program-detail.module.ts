import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProgramDetailPage } from './program-detail';

@NgModule({
  declarations: [
    ProgramDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProgramDetailPage
  ]
})
export class ProgramDetailPageModule { }
