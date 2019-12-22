import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { POShopTab } from './poshop-tab';

@NgModule({
  declarations: [
    POShopTab,
  ],
  imports: [
    IonicPageModule.forChild(POShopTab),
    TranslateModule.forChild()
  ],
  exports: [
    POShopTab
  ]
})
export class POShopTabModule { }
