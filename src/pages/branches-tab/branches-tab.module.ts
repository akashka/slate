import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BranchesTab } from './branches-tab';

@NgModule({
  declarations: [
    BranchesTab,
  ],
  imports: [
    IonicPageModule.forChild(BranchesTab),
    TranslateModule.forChild()
  ],
  exports: [
    BranchesTab
  ]
})
export class BranchesTabModule { }
