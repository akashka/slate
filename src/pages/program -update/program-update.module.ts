import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProgramEditPage } from './program-update';

@NgModule({
  declarations: [
    ProgramEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProgramEditPage
  ]
})

export class ProgramEditPageModule { }
