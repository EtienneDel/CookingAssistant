import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionComponent } from './solution.component';

const SolutionRoutes: Routes = [
  { path: 'solution', component: SolutionComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(SolutionRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class SolutionRoutingModule { }