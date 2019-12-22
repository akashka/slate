import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PostOrderListPage } from './postorder-list';

@NgModule({
  declarations: [
    PostOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(PostOrderListPage),
    TranslateModule.forChild()
  ],
  exports: [
    PostOrderListPage
  ]
})
export class PostOrderListPageModule { }
