import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProgramsListPage } from './programs-list';

@NgModule({
  declarations: [
    ProgramsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramsListPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProgramsListPage
  ]
})
export class ProgramsListPageModule { }
