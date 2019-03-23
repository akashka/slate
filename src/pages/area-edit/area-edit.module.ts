import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { IonicPageModule } from "ionic-angular";

import { AreaEdit } from "./area-edit";

@NgModule({
  declarations: [AreaEdit],
  imports: [IonicPageModule.forChild(AreaEdit), TranslateModule.forChild()],
  exports: [AreaEdit]
})
export class AreaEditModule {}
