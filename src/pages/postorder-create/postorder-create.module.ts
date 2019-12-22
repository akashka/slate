import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PostOrderAddPage } from './postorder-create';

@NgModule({
  declarations: [
    PostOrderAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PostOrderAddPage),
    TranslateModule.forChild()
  ],
  exports: [
    PostOrderAddPage
  ]
})
export class PostOrderAddPageModule { }
