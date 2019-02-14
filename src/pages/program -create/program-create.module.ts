import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProgramAddPage } from './program-create';

@NgModule({
  declarations: [
    ProgramAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgramAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    ProgramAddPage
  ]
})
export class ProgramAddPageModule { }
