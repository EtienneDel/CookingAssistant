import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContentComponent } from './landingContent.component';


@NgModule({
  declarations: [
      LandingContentComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
  ],
  providers: [],
  exports: [
    LandingContentComponent
  ]
})
export class LandingContentModule { }
