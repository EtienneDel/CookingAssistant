import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';


@NgModule({
  declarations: [
      LogoComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
  ],
  providers: [],
  exports: [
    LogoComponent
  ]
})
export class LogoModule { }
