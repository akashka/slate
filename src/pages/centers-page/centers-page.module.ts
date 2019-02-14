import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CentersPage } from './centers-page';

@NgModule({
  declarations: [
    CentersPage,
  ],
  imports: [
    IonicPageModule.forChild(CentersPage),
    TranslateModule.forChild()
  ],
  exports: [
    CentersPage
  ]
})
export class CentersPageModule { }
