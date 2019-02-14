import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProfileTab } from './profile-tab';

@NgModule({
  declarations: [
    ProfileTab,
  ],
  imports: [
    IonicPageModule.forChild(ProfileTab),
    TranslateModule.forChild()
  ],
  exports: [
    ProfileTab
  ]
})
export class ProfileTabModule { }
