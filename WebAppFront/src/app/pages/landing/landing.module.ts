import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.route';
import { CommonModule } from '@angular/common';
import { LandingContentModule } from '../../components/landingContent/landingContent.module';
import { LandingShapeModule } from '../../components/landingShape/landingShape.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LandingContentModule,
    LandingShapeModule
  ],
  providers: []
})
export class LandingModule { }
