import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingShapeComponent } from './landingShape.component';


@NgModule({
  declarations: [
      LandingShapeComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
  ],
  providers: [],
  exports: [
    LandingShapeComponent
  ]
})
export class LandingShapeModule { }
