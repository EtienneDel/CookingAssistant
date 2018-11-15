import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const ProductRoutes: Routes = [
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProductRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProductRoutingModule { }