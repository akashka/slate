import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PrivacyPolicyPage, TermsConditionsPage, FAQPage, StaticPages, ContactUs } from './staticpages';

@NgModule({
  declarations: [
    PrivacyPolicyPage, TermsConditionsPage, FAQPage, StaticPages, ContactUs
  ],
  imports: [
    IonicPageModule.forChild(StaticPages),
    TranslateModule.forChild()
  ],
  exports: [
    PrivacyPolicyPage, TermsConditionsPage, FAQPage, StaticPages, ContactUs],
  entryComponents: [
    PrivacyPolicyPage, TermsConditionsPage, FAQPage, StaticPages, ContactUs]  
})
export class StaticPagesModule { }
