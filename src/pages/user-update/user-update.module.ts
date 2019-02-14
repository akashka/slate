import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UserUpdatePage } from './user-update';

@NgModule({
  declarations: [
    UserUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(UserUpdatePage),
    TranslateModule.forChild()
  ],
  exports: [
    UserUpdatePage
  ]
})
export class UserUpdatePageModule { }
