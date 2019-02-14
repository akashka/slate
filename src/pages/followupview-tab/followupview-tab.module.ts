import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FollowupViewTab } from './followupview-tab';

@NgModule({
  declarations: [
    FollowupViewTab,
  ],
  imports: [
    IonicPageModule.forChild(FollowupViewTab),
    TranslateModule.forChild()
  ],
  exports: [
    FollowupViewTab
  ]
})
export class FollowupViewTabModule { }
