import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const AboutRoutes: Routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(AboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AboutRoutingModule { }