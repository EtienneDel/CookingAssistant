import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const AccountRoutes: Routes = [
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(AccountRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AccountRoutingModule { }