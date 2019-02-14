import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { FollowupPage } from './followup-page';

@NgModule({
  declarations: [
    FollowupPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowupPage),
    TranslateModule.forChild()
  ],
  exports: [
    FollowupPage
  ]
})
export class FollowupPageModule { }
