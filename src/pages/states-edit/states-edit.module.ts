import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { StatesEdit } from './states-edit';

@NgModule({
  declarations: [
    StatesEdit,
  ],
  imports: [
    IonicPageModule.forChild(StatesEdit),
    TranslateModule.forChild()
  ],
  exports: [
    StatesEdit
  ]
})
export class StatesEditModule { }
