import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FollowupCreateTab } from './followupcreate-tab';

@NgModule({
  declarations: [
    FollowupCreateTab,
  ],
  imports: [
    IonicPageModule.forChild(FollowupCreateTab),
    TranslateModule.forChild()
  ],
  exports: [
    FollowupCreateTab
  ]
})
export class FollowupCreateTabModule { }
