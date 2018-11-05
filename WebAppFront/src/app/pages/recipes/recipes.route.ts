import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';

const RecipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(RecipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipesRoutingModule { }