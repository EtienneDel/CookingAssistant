import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const ContactRoutes: Routes = [
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ContactRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactRoutingModule { }