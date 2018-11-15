import { NgModule } from '@angular/core';
import { SolutionComponent } from './solution.component';
import { SolutionRoutingModule } from './solution.route';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SolutionComponent
  ],
  imports: [
    CommonModule,
    SolutionRoutingModule
  ],
  providers: []
})
export class SolutionModule { }
